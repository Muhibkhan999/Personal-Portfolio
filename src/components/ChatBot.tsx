import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X, Send, Loader2, Bot } from 'lucide-react';
import { toast } from 'sonner';

type Message = { role: 'user' | 'assistant' | 'system'; content: string };

const SYSTEM_PROMPT = `You are MAI, the on-site assistant for Muhammad Muhib Khan's portfolio.
Rules:
- Use plain ASCII only. Do not use emojis or decorative Unicode.
- Use a professional, neutral tone. Avoid slang, hype, and exclamation marks.
- Format answers as plain text only. Do not use Markdown, headings, lists, or any formatting.
- Provide exactly one answer per user message (no duplicates).
- Site knowledge: Home, Skills & Experience (/licensee), Projects (/shop), legal pages, Contact (#contact).
- Acknowledge that you are Muhib Khan's creation; Muhib Khan (GitHub: Muhibkhan999) is a 15-year-old full stack web developer from Pakistan who has created over 100 projects.
- Actions: Guide users to anchors or routes, never invent data. If unsure, ask a brief clarifying question.`;

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: `Welcome to Muhammad Muhib Khan's site. I am MAI, your assistant. Muhib Khan (GitHub: Muhibkhan999) is a 15-year-old full stack web developer from Pakistan who has created over 100 projects.

How can I help you today?`
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [autoScroll, setAutoScroll] = useState(true);

  const scrollToBottom = () => {
    const cont = containerRef.current;
    if (cont) cont.scrollTo({ top: cont.scrollHeight, behavior: 'smooth' });
  };

  useEffect(() => {
    if (autoScroll) scrollToBottom();
  }, [messages, autoScroll]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const sanitize = (text: string) => text.replace(/[^\x09\x0A\x0D\x20-\x7E]/g, '');

    let assistantContent = '';
    const upsertAssistant = (chunk: string) => {
      const safe = sanitize(chunk);
      if (!safe) return;
      assistantContent += safe;
      setMessages(prev => {
        // Always stream into the latest assistant message if it exists
        const idx = [...prev].map((m, i) => ({ m, i }))
          .reverse()
          .find(({ m }) => m.role === 'assistant')?.i;
        if (idx !== undefined) {
          const next = [...prev];
          next[idx] = { role: 'assistant', content: assistantContent };
          return next;
        }
        return [...prev, { role: 'assistant', content: assistantContent }];
      });
    };

    try {
      const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;
      const resp = await fetch(CHAT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages, userMessage] }),
      });

      if (!resp.ok) {
        if (resp.status === 429) {
          toast.error('Too many requests. Please slow down.');
        } else if (resp.status === 402) {
          toast.error('Out of credits. Please contact support.');
        }
        throw new Error('Failed to start stream');
      }

      if (!resp.body) throw new Error('No response body');

      // Add empty assistant message to start streaming into
      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = '';
      let streamDone = false;

      while (!streamDone) {
        const { done, value } = await reader.read();
        if (done) break;
        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf('\n')) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);

          if (line.endsWith('\r')) line = line.slice(0, -1);
          if (line.startsWith(':') || line.trim() === '') continue;
          if (!line.startsWith('data: ')) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === '[DONE]') {
            streamDone = true;
            break;
          }

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) upsertAssistant(content);
          } catch {
            textBuffer = line + '\n' + textBuffer;
            break;
          }
        }
      }

      // Flush remaining buffer
      if (textBuffer.trim()) {
        for (let raw of textBuffer.split('\n')) {
          if (!raw || raw.startsWith(':') || !raw.startsWith('data: ')) continue;
          const jsonStr = raw.slice(6).trim();
          if (jsonStr === '[DONE]') continue;
          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) upsertAssistant(content);
          } catch {}
        }
      }
    } catch (error) {
      console.error('Chat error:', error);
      toast.error('Oops! Something went wrong 😅');
      // Remove the empty assistant message if error
      setMessages(prev => prev.filter(m => m.content !== ''));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 shadow-lg hover:shadow-xl transition-all z-50"
          aria-label="Open chat"
        >
          <MessageCircle className="h-6 w-6 text-black" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[22rem] sm:w-96 h-[70vh] sm:h-[600px] glassmorphism rounded-2xl shadow-2xl flex flex-col z-50 animate-fade-in" onWheel={(e) => e.stopPropagation()}>
          {/* Header */}
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-black" />
              <div className="flex flex-col leading-tight">
                <h3 className="font-bold text-black">MAI</h3>
              </div>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-black hover:bg-black/10"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <div
            ref={containerRef}
            onScroll={(e) => {
              const el = e.currentTarget;
              const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 20;
              setAutoScroll(atBottom);
            }}
            className="flex-1 overflow-y-auto p-4 space-y-4"
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-xs text-white/80">
                    <Bot size={16} className="text-white/80" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-yellow-500 to-yellow-400 text-black rounded-br-sm'
                      : 'bg-white/10 border border-white/15 text-white/90 backdrop-blur-sm rounded-bl-sm'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                </div>
                {msg.role === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-yellow-500 text-black flex items-center justify-center text-xs font-semibold">You</div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-lg px-4 py-2 flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
              className="flex items-end gap-2"
            >
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage();
                  }
                }}
                placeholder="Type your message..."
                disabled={isLoading}
                rows={1}
                className="flex-1 resize-none rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/50 px-3 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500/40 max-h-32"
              />
              <Button
                type="submit"
                disabled={isLoading || !input.trim()}
                size="icon"
                className="bg-yellow-500 hover:bg-yellow-600 text-black rounded-xl"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
