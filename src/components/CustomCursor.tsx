 import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorColor, setCursorColor] = useState('bg-green-500');
  const [cursorBorderColor, setCursorBorderColor] = useState('border-green-500');
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const latestPosRef = useRef(position);
  const rafRef = useRef<number | null>(null);


  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (element) {
        const isInteractive = !!(
          element.tagName === 'A' ||
          element.tagName === 'BUTTON' ||
          element.closest('a') ||
          element.closest('button') ||
          element.classList.contains('cursor-pointer') ||
          window.getComputedStyle(element).cursor === 'pointer'
        );
        
        setIsHovering(isInteractive);
        
        if (isInteractive) {
          const bgColor = window.getComputedStyle(element).backgroundColor;
          const color = getContrastColor(bgColor);
          setCursorColor(color);
          setCursorBorderColor(color.replace('bg-', 'border-'));
        }
      }
    };

    const getContrastColor = (bgColor: string): string => {
      const rgb = bgColor.match(/\d+/g);
      if (rgb && rgb.length >= 3) {
        const [r, g, b] = rgb.map(Number);
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        if (g > 200 && r > 200 && b < 150) return 'bg-green-500';
        if (b > 150 && r < 150) return 'bg-orange-500';
        if (luminance < 0.5) return 'bg-cyan-400';
        return 'bg-purple-500';
      }
      return 'bg-green-500';
    };

    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  // keep latest position in a ref so RAF loop can read it without re-subscribing
  useEffect(() => {
    latestPosRef.current = position;
  }, [position]);

  // RAF loop to make the small circle trail the big circle with easing
  useEffect(() => {
    const ease = 0.18; // trailing strength (0..1)
    const animate = () => {
      setTrailPosition(prev => ({
        x: prev.x + (latestPosRef.current.x - prev.x) * ease,
        y: prev.y + (latestPosRef.current.y - prev.y) * ease,
      }));
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);


  return (
    <>
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference transition-all duration-200 ease-out ${cursorColor} rounded-full`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%) scale(${isHovering ? 3 : 1})`,
          width: '28px',
          height: '28px',
          opacity: 0.6,
        }}
      />
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-100 ease-out bg-transparent ${cursorBorderColor} border-2 rounded-full`}
        style={{
          transform: `translate(${trailPosition.x}px, ${trailPosition.y}px) translate(-50%, -50%) scale(${isHovering ? 2.2 : 1})`,
          width: '16px',
          height: '16px',
          opacity: 0.9,
        }}
      />
    </>
  );
};

export default CustomCursor;
