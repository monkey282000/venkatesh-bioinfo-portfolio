
import { useEffect, useState } from 'react';
import { Code, Dna, Database, Cpu, Braces, Binary, Server, FileCode, Github, Network, ChevronRight, BrainCircuit, Asterisk } from 'lucide-react';

const CompTiles = () => {
  const [tiles, setTiles] = useState<{ icon: JSX.Element; x: number; y: number; size: number; rotation: number; opacity: number; speed: number; color: string }[]>([]);
  const [lines, setLines] = useState<{ x1: number; y1: number; x2: number; y2: number; opacity: number; width: number; color: string }[]>([]);
  
  useEffect(() => {
    // Create a varied icon selection to represent computational/biological themes
    const iconComponents = [
      <Code size={20} />,
      <Dna size={20} />,
      <Database size={20} />,
      <Cpu size={20} />,
      <Braces size={20} />,
      <Binary size={20} />,
      <Server size={20} />,
      <FileCode size={20} />,
      <Github size={20} />,
      <Network size={20} />,
      <ChevronRight size={20} />,
      <BrainCircuit size={20} />,
      <Asterisk size={20} />
    ];
    
    const colors = ['#2563eb', '#1d4ed8', '#3b82f6', '#60a5fa', '#4ade80', '#16a34a'];
    
    // Generate more tiles for a denser pattern
    const newTiles = Array.from({ length: 40 }).map(() => {
      return {
        icon: iconComponents[Math.floor(Math.random() * iconComponents.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 15 + Math.random() * 20,
        rotation: Math.random() * 360,
        opacity: 0.1 + Math.random() * 0.2,
        speed: 0.1 + Math.random() * 0.4,
        color: colors[Math.floor(Math.random() * colors.length)]
      };
    });
    
    setTiles(newTiles);
    
    // Generate connecting lines between tiles for a network effect
    const newLines = [];
    for (let i = 0; i < 30; i++) {
      const sourceTile = Math.floor(Math.random() * newTiles.length);
      const targetTile = Math.floor(Math.random() * newTiles.length);
      
      if (sourceTile !== targetTile) {
        newLines.push({
          x1: newTiles[sourceTile].x,
          y1: newTiles[sourceTile].y,
          x2: newTiles[targetTile].x,
          y2: newTiles[targetTile].y,
          opacity: 0.05 + Math.random() * 0.1,
          width: 0.5 + Math.random(),
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    }
    
    setLines(newLines);
    
    // Animation interval
    const intervalId = setInterval(() => {
      setTiles(prevTiles => prevTiles.map(tile => {
        // Create more complex movement pattern
        const angleShift = (Math.random() - 0.5) * 0.8;
        const speedVariation = Math.sin(Date.now() / 5000) * 0.05;
        
        return {
          ...tile,
          rotation: (tile.rotation + tile.speed) % 360,
          x: ((tile.x + (Math.cos(tile.rotation / 50) * 0.05) + 100) % 100),
          y: ((tile.y + (Math.sin(tile.rotation / 50) * 0.05) + 100) % 100),
          opacity: 0.1 + Math.abs(Math.sin(Date.now() / 3000 + tile.x / 10) * 0.2)
        };
      }));
      
      // Animate the connecting lines based on tile movement
      setLines(prevLines => prevLines.map((line, i) => {
        if (i % 2 === 0) { // Only update some lines each frame for performance
          const sourceTile = Math.floor(Math.random() * tiles.length);
          const targetTile = Math.floor(Math.random() * tiles.length);
          
          if (sourceTile !== targetTile && tiles[sourceTile] && tiles[targetTile]) {
            return {
              ...line,
              x1: tiles[sourceTile].x,
              y1: tiles[sourceTile].y,
              x2: tiles[targetTile].x,
              y2: tiles[targetTile].y,
              opacity: 0.05 + Math.random() * 0.1
            };
          }
        }
        return line;
      }));
    }, 50);
    
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Draw connecting lines first (behind the icons) */}
      {lines.map((line, index) => (
        <div
          key={`line-${index}`}
          className="absolute"
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            opacity: line.opacity,
            zIndex: 0,
          }}
        >
          <svg width="100%" height="100%" style={{ position: 'absolute', overflow: 'visible' }}>
            <line
              x1={`${line.x1}%`}
              y1={`${line.y1}%`}
              x2={`${line.x2}%`}
              y2={`${line.y2}%`}
              stroke={line.color}
              strokeWidth={line.width}
              strokeDasharray="2,2"
            />
          </svg>
        </div>
      ))}
      
      {/* Draw the computational icons */}
      {tiles.map((tile, index) => (
        <div
          key={`tile-${index}`}
          className="absolute transition-all duration-1000 ease-out"
          style={{
            left: `${tile.x}%`,
            top: `${tile.y}%`,
            opacity: tile.opacity,
            color: tile.color,
            transform: `rotate(${tile.rotation}deg) scale(${0.8 + Math.sin(tile.rotation / 50) * 0.2})`,
          }}
        >
          {tile.icon}
        </div>
      ))}
      
      {/* Add some binary code patterns for computational effect */}
      <div className="binary-pattern absolute inset-0 opacity-[0.03] z-0 pointer-events-none" 
           style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='0' y='15' font-family='monospace' font-size='10' fill='%232563eb'%3E01100110%3C/text%3E%3Ctext x='60' y='15' font-family='monospace' font-size='10' fill='%232563eb'%3E10011001%3C/text%3E%3Ctext x='0' y='30' font-family='monospace' font-size='10' fill='%232563eb'%3E11001100%3C/text%3E%3Ctext x='60' y='30' font-family='monospace' font-size='10' fill='%232563eb'%3E00110011%3C/text%3E%3Ctext x='0' y='45' font-family='monospace' font-size='10' fill='%232563eb'%3E10101010%3C/text%3E%3Ctext x='60' y='45' font-family='monospace' font-size='10' fill='%232563eb'%3E01010101%3C/text%3E%3Ctext x='0' y='60' font-family='monospace' font-size='10' fill='%232563eb'%3E11110000%3C/text%3E%3Ctext x='60' y='60' font-family='monospace' font-size='10' fill='%232563eb'%3E00001111%3C/text%3E%3Ctext x='0' y='75' font-family='monospace' font-size='10' fill='%232563eb'%3E10100101%3C/text%3E%3Ctext x='60' y='75' font-family='monospace' font-size='10' fill='%232563eb'%3E01011010%3C/text%3E%3Ctext x='0' y='90' font-family='monospace' font-size='10' fill='%232563eb'%3E11001010%3C/text%3E%3Ctext x='60' y='90' font-family='monospace' font-size='10' fill='%232563eb'%3E00110101%3C/text%3E%3Ctext x='0' y='105' font-family='monospace' font-size='10' fill='%232563eb'%3EAGCT%3C/text%3E%3Ctext x='60' y='105' font-family='monospace' font-size='10' fill='%232563eb'%3ETCGA%3C/text%3E%3C/svg%3E\")" }}>
      </div>
    </div>
  );
};

export default CompTiles;
