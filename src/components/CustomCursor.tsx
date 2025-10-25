import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorColor, setCursorColor] = useState('bg-green-500');

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Get element under cursor
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
        
        // Get computed background color and invert it
        if (isInteractive) {
          const bgColor = window.getComputedStyle(element).backgroundColor;
          const color = getContrastColor(bgColor);
          setCursorColor(color);
        }
      }
    };

    const getContrastColor = (bgColor: string): string => {
      // Parse RGB color
      const rgb = bgColor.match(/\d+/g);
      if (rgb && rgb.length >= 3) {
        const [r, g, b] = rgb.map(Number);
        
        // Calculate luminance
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        
        // Determine contrasting color based on element color
        // Yellow/bright colors -> green
        if (g > 200 && r > 200 && b < 150) return 'bg-green-500';
        // Blue colors -> orange
        if (b > 150 && r < 150) return 'bg-orange-500';
        // Dark colors -> cyan
        if (luminance < 0.5) return 'bg-cyan-400';
        // Light colors -> purple
        return 'bg-purple-500';
      }
      
      return 'bg-green-500'; // default
    };

    window.addEventListener('mousemove', updatePosition);
    
    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference transition-all duration-200 ease-out ${cursorColor} rounded-full`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%) scale(${isHovering ? 3 : 1})`,
        width: '20px',
        height: '20px',
        opacity: 0.6,
      }}
    />
  );
};

export default CustomCursor;
