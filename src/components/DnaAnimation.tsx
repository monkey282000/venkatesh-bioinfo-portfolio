
import { useEffect, useRef } from 'react';

const DnaAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Base nucleotide pairs
    const basePairs = [
      { base1: 'A', base2: 'T', color1: '#2563eb', color2: '#ff6347' },
      { base1: 'T', base2: 'A', color1: '#ff6347', color2: '#2563eb' },
      { base1: 'G', base2: 'C', color1: '#4ade80', color2: '#fcd34d' },
      { base1: 'C', base2: 'G', color1: '#fcd34d', color2: '#4ade80' },
    ];

    const numberOfRungs = 20;
    const rungs = Array.from({ length: numberOfRungs }).map((_, i) => ({
      index: i,
      pair: basePairs[Math.floor(Math.random() * basePairs.length)],
      offset: (Math.PI * 2 / numberOfRungs) * i,
    }));

    let frame = 0;
    const animate = () => {
      frame += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height) * 0.3;
      const depth = 400;
      const helix1Points = [];
      const helix2Points = [];

      // Draw DNA backbone
      for (let i = 0; i < 200; i++) {
        const t = (i / 100) * Math.PI * 2 + frame;
        
        const x1 = centerX + radius * Math.cos(t);
        const y1 = centerY + (i - 100) * 2;
        const z1 = radius * Math.sin(t);
        helix1Points.push({ x: x1, y: y1, z: z1 });
        
        const x2 = centerX + radius * Math.cos(t + Math.PI);
        const y2 = centerY + (i - 100) * 2;
        const z2 = radius * Math.sin(t + Math.PI);
        helix2Points.push({ x: x2, y: y2, z: z2 });
      }

      // Draw helixes
      ctx.lineWidth = 5;
      
      ctx.beginPath();
      ctx.strokeStyle = '#2563eb';
      for (let i = 0; i < helix1Points.length - 1; i++) {
        const scale1 = depth / (depth + helix1Points[i].z);
        const scale2 = depth / (depth + helix1Points[i+1].z);
        
        ctx.globalAlpha = (scale1 + 0.5) / 1.5;
        ctx.moveTo(helix1Points[i].x * scale1, helix1Points[i].y * scale1);
        ctx.lineTo(helix1Points[i+1].x * scale2, helix1Points[i+1].y * scale2);
      }
      ctx.stroke();
      
      ctx.beginPath();
      ctx.strokeStyle = '#2563eb';
      for (let i = 0; i < helix2Points.length - 1; i++) {
        const scale1 = depth / (depth + helix2Points[i].z);
        const scale2 = depth / (depth + helix2Points[i+1].z);
        
        ctx.globalAlpha = (scale1 + 0.5) / 1.5;
        ctx.moveTo(helix2Points[i].x * scale1, helix2Points[i].y * scale1);
        ctx.lineTo(helix2Points[i+1].x * scale2, helix2Points[i+1].y * scale2);
      }
      ctx.stroke();
      
      // Draw base pairs (rungs)
      for (const rung of rungs) {
        const t = (rung.index / rungs.length) * Math.PI * 4 + frame;
        
        const x1 = centerX + radius * Math.cos(t);
        const y1 = centerY + (rung.index * 10) - 100;
        const z1 = radius * Math.sin(t);
        
        const x2 = centerX + radius * Math.cos(t + Math.PI);
        const y2 = y1;
        const z2 = radius * Math.sin(t + Math.PI);
        
        const scale1 = depth / (depth + z1);
        const scale2 = depth / (depth + z2);
        
        ctx.globalAlpha = (scale1 + scale2) / 3;
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#94a3b8';
        
        ctx.beginPath();
        ctx.moveTo(x1 * scale1, y1 * scale1);
        ctx.lineTo(x2 * scale2, y2 * scale2);
        ctx.stroke();
        
        // Draw bases
        const baseRadius = 6;
        ctx.fillStyle = rung.pair.color1;
        ctx.beginPath();
        ctx.arc(x1 * scale1, y1 * scale1, baseRadius, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = rung.pair.color2;
        ctx.beginPath();
        ctx.arc(x2 * scale2, y2 * scale2, baseRadius, 0, Math.PI * 2);
        ctx.fill();
      }
      
      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    };
    
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export default DnaAnimation;
