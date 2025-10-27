import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { Bot } from "lucide-react";

const AI = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-6 flex justify-center">
            <div className="p-4 bg-gradient-to-br from-yellow-200 via-yellow-400 to-amber-500 rounded-full">
              <Bot size={48} className="text-black" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            AI Wellness Assistant
          </h1>
          <p className="text-lg text-black/70 dark:text-white/70 mb-8">
            Get personalized wellness advice and support with our AI-powered assistant. 
            Ask questions, get recommendations, and improve your well-being.
          </p>
          <div className="space-y-4">
            <button className="w-full md:w-auto bg-yellow-500 text-black font-semibold py-3 px-6 rounded-full hover:bg-yellow-600 transition-colors">
              Start Chatting
            </button>
            <p className="text-sm text-black/50 dark:text-white/50">
              Powered by advanced AI for your wellness journey.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default AI;
