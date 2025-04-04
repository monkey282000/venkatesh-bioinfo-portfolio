
import { useEffect, useState } from 'react';
import { Code, Dna, Database, Cpu, Braces, Binary, Server, FileCode, Github, Network } from 'lucide-react';

const CompTiles = () => {
  const [tiles, setTiles] = useState<{ icon: JSX.Element; x: number; y: number; size: number; rotation: number; opacity: number; speed: number }[]>([]);
  
  useEffect(() => {
    // Create random tiles with more icon variety
    const iconComponents = [
      <Code size={24} />,
      <Dna size={24} />,
      <Database size={24} />,
      <Cpu size={24} />,
      <Braces size={24} />,
      <Binary size={24} />,
      <Server size={24} />,
      <FileCode size={24} />,
      <Github size={24} />,
      <Network size={24} />
    ];
    
    const newTiles = Array.from({ length: 30 }).map(() => {
      return {
        icon: iconComponents[Math.floor(Math.random() * iconComponents.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 20 + Math.random() * 30,
        rotation: Math.random() * 360,
        opacity: 0.1 + Math.random() * 0.4,
        speed: 0.2 + Math.random() * 0.8
      };
    });
    
    setTiles(newTiles);
    
    const intervalId = setInterval(() => {
      setTiles(prevTiles => prevTiles.map(tile => ({
        ...tile,
        rotation: (tile.rotation + tile.speed) % 360,
        x: tile.x + (Math.random() - 0.5) * 0.05,
        y: tile.y + (Math.random() - 0.5) * 0.05
      })));
    }, 50);
    
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {tiles.map((tile, index) => (
        <div
          key={index}
          className="absolute text-bio-navy transition-all duration-1000 ease-in-out"
          style={{
            left: `${tile.x}%`,
            top: `${tile.y}%`,
            opacity: tile.opacity,
            transform: `rotate(${tile.rotation}deg) scale(${0.8 + Math.sin(tile.rotation / 50) * 0.2})`,
          }}
        >
          {tile.icon}
        </div>
      ))}
    </div>
  );
};

export default CompTiles;
