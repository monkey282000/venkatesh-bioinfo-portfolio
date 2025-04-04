
import { useState, useEffect } from 'react';

interface TypedTextProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
  className?: string;
}

const TypedText = ({ 
  texts, 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  delayBetween = 1500,
  className = '' 
}: TypedTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  
  useEffect(() => {
    if (!texts.length) return;
    
    let timeout: NodeJS.Timeout;
    const currentText = texts[currentIndex];
    
    if (isPaused) {
      timeout = setTimeout(() => setIsPaused(false), delayBetween);
      return () => clearTimeout(timeout);
    }
    
    if (isTyping) {
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        setIsPaused(true);
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, delayBetween);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        setIsTyping(true);
        setCurrentIndex((currentIndex + 1) % texts.length);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [texts, currentIndex, displayText, isTyping, isPaused, typingSpeed, deletingSpeed, delayBetween]);
  
  return (
    <div className={`${className} typing-container flex items-center`}>
      <span className="inline-block">{displayText}</span>
      <span className="typing-cursor bg-bio-blue mx-1 animate-[blink_1s_infinite] h-5 w-0.5 rounded"></span>
    </div>
  );
};

export default TypedText;
