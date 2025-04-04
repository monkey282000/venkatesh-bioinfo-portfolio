
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

    // DNA base colors - more distinct and scientific
    const basePairs = [
      { base1: 'A', base2: 'T', color1: '#ff6347', color2: '#4ade80' }, // Adenine - Thymine
      { base1: 'T', base2: 'A', color1: '#4ade80', color2: '#ff6347' }, // Thymine - Adenine 
      { base1: 'G', base2: 'C', color1: '#2563eb', color2: '#fcd34d' }, // Guanine - Cytosine
      { base1: 'C', base2: 'G', color1: '#fcd34d', color2: '#2563eb' }, // Cytosine - Guanine
    ];

    // Create more base pairs for a denser DNA structure
    const numberOfRungs = 40;
    const rungs = Array.from({ length: numberOfRungs }).map((_, i) => ({
      index: i,
      pair: basePairs[Math.floor(Math.random() * basePairs.length)],
      offset: (Math.PI * 2 / numberOfRungs) * i,
    }));

    let frame = 0;
    const animate = () => {
      frame += 0.005; // Slower rotation for better visibility
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height) * 0.25; // Slightly smaller radius
      const depth = 500; // Increased depth for better 3D effect

      // Draw the DNA backbone with clear double helix structure
      const points1 = []; // First strand
      const points2 = []; // Second strand
      
      const helix1Points = [];
      const helix2Points = [];

      // Calculate points along the DNA helix with tighter spirals
      const helixLength = 300; // Longer helix
      for (let i = 0; i < helixLength; i++) {
        const t = (i / 50) * Math.PI * 2 + frame;
        const heightOffset = (i - helixLength/2) * 1.5;
        
        // First strand
        const x1 = centerX + radius * Math.cos(t);
        const y1 = centerY + heightOffset;
        const z1 = radius * Math.sin(t);
        helix1Points.push({ x: x1, y: y1, z: z1 });
        
        // Second strand (180 degrees opposite)
        const x2 = centerX + radius * Math.cos(t + Math.PI);
        const y2 = centerY + heightOffset;
        const z2 = radius * Math.sin(t + Math.PI);
        helix2Points.push({ x: x2, y: y2, z: z2 });
      }

      // Draw the helixes with thicker lines
      ctx.lineWidth = 4;
      
      // First helix backbone with gradient
      const gradient1 = ctx.createLinearGradient(
        0, centerY - 250, 
        0, centerY + 250
      );
      gradient1.addColorStop(0, '#3b82f6'); // Blue
      gradient1.addColorStop(0.5, '#60a5fa');
      gradient1.addColorStop(1, '#93c5fd');
      
      ctx.beginPath();
      ctx.strokeStyle = gradient1;
      let lastVisiblePoint = null;

      for (let i = 0; i < helix1Points.length - 1; i++) {
        const scale1 = depth / (depth + helix1Points[i].z);
        const scale2 = depth / (depth + helix1Points[i+1].z);
        
        // Only draw if point is in front (positive z after scaling)
        if (helix1Points[i].z > -depth * 0.8) {
          ctx.globalAlpha = Math.max(0.2, (scale1 + 0.5) / 1.5);
          
          if (lastVisiblePoint === null) {
            ctx.moveTo(helix1Points[i].x * scale1, helix1Points[i].y * scale1);
          } else {
            ctx.lineTo(helix1Points[i].x * scale1, helix1Points[i].y * scale1);
          }
          lastVisiblePoint = i;
        } else if (lastVisiblePoint !== null) {
          // End the current path
          ctx.stroke();
          ctx.beginPath();
          lastVisiblePoint = null;
        }
      }
      ctx.stroke();
      
      // Second helix backbone with gradient
      const gradient2 = ctx.createLinearGradient(
        0, centerY - 250, 
        0, centerY + 250
      );
      gradient2.addColorStop(0, '#1d4ed8'); // Deeper blue
      gradient2.addColorStop(0.5, '#2563eb');
      gradient2.addColorStop(1, '#3b82f6');
      
      ctx.beginPath();
      ctx.strokeStyle = gradient2;
      lastVisiblePoint = null;

      for (let i = 0; i < helix2Points.length - 1; i++) {
        const scale1 = depth / (depth + helix2Points[i].z);
        const scale2 = depth / (depth + helix2Points[i+1].z);
        
        // Only draw if point is in front
        if (helix2Points[i].z > -depth * 0.8) {
          ctx.globalAlpha = Math.max(0.2, (scale1 + 0.5) / 1.5);
          
          if (lastVisiblePoint === null) {
            ctx.moveTo(helix2Points[i].x * scale1, helix2Points[i].y * scale1);
          } else {
            ctx.lineTo(helix2Points[i].x * scale1, helix2Points[i].y * scale1);
          }
          lastVisiblePoint = i;
        } else if (lastVisiblePoint !== null) {
          // End the current path
          ctx.stroke();
          ctx.beginPath();
          lastVisiblePoint = null;
        }
      }
      ctx.stroke();
      
      // Draw the base pairs (rungs) connecting the helixes
      for (const rung of rungs) {
        const t = (rung.index / (rungs.length/2)) * Math.PI * 2 + frame;
        const heightPosition = (rung.index - rungs.length/2) * 7;
        
        const x1 = centerX + radius * Math.cos(t);
        const y1 = centerY + heightPosition;
        const z1 = radius * Math.sin(t);
        
        const x2 = centerX + radius * Math.cos(t + Math.PI);
        const y2 = y1;
        const z2 = radius * Math.sin(t + Math.PI);
        
        const scale1 = depth / (depth + z1);
        const scale2 = depth / (depth + z2);
        
        // Only draw if the base pair is in front 
        if (z1 > -depth * 0.8 && z2 > -depth * 0.8) {
          ctx.globalAlpha = Math.max(0.2, (scale1 + scale2) / 3);
          
          // Draw the connecting line between bases
          ctx.lineWidth = 2;
          ctx.strokeStyle = '#94a3b8';
          
          ctx.beginPath();
          ctx.moveTo(x1 * scale1, y1 * scale1);
          ctx.lineTo(x2 * scale2, y2 * scale2);
          ctx.stroke();
          
          // Draw the base nucleotides
          const baseRadius = 7;
          
          // Reset shadow
          ctx.shadowBlur = 0;
          
          // Base 1
          ctx.fillStyle = rung.pair.color1;
          ctx.beginPath();
          ctx.arc(x1 * scale1, y1 * scale1, baseRadius, 0, Math.PI * 2);
          ctx.fill();
          
          // Add text for nucleobase letters
          ctx.fillStyle = '#ffffff';
          ctx.font = '8px Arial';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(rung.pair.base1, x1 * scale1, y1 * scale1);
          
          // Glow effect
          ctx.shadowColor = rung.pair.color1;
          ctx.shadowBlur = 8;
          ctx.beginPath();
          ctx.arc(x1 * scale1, y1 * scale1, baseRadius * 0.7, 0, Math.PI * 2);
          ctx.fill();
          
          // Base 2
          ctx.shadowBlur = 0;
          ctx.fillStyle = rung.pair.color2;
          ctx.beginPath();
          ctx.arc(x2 * scale2, y2 * scale2, baseRadius, 0, Math.PI * 2);
          ctx.fill();
          
          // Add text for nucleobase letters
          ctx.fillStyle = '#ffffff';
          ctx.fillText(rung.pair.base2, x2 * scale2, y2 * scale2);
          
          // Glow effect
          ctx.shadowColor = rung.pair.color2;
          ctx.shadowBlur = 8;
          ctx.beginPath();
          ctx.arc(x2 * scale2, y2 * scale2, baseRadius * 0.7, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
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
