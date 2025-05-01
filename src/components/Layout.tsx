
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CompTiles from "./CompTiles";
import { useEffect, useState } from "react";
import GeometricBackground from "./GeometricBackground";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [interactionCount, setInteractionCount] = useState(0);

  useEffect(() => {
    // Add a small delay for the loading animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    // Track user interactions with the page
    const handleInteraction = () => {
      setInteractionCount(prev => prev + 1);
    };
    
    // Add event listeners for various interactions
    window.addEventListener('mousemove', handleInteraction);
    window.addEventListener('click', handleInteraction);
    window.addEventListener('scroll', handleInteraction);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleInteraction);
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
    };
  }, []);

  return (
    <div className={`flex flex-col min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <GeometricBackground />
      <CompTiles />
      <Header />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
