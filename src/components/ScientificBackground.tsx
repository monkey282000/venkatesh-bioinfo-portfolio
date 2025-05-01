
import { useEffect, useRef } from 'react';

const ScientificBackground = ({ className = "" }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full screen
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', updateCanvasSize);
    updateCanvasSize();

    // Create DNA strands and molecules
    const dnaStrands: DNAStrand[] = [];
    const molecules: Molecule[] = [];
    
    // Initialize elements
    for (let i = 0; i < 3; i++) {
      dnaStrands.push(createDNAStrand(canvas));
    }
    
    for (let i = 0; i < 12; i++) {
      molecules.push(createMolecule(canvas));
    }
    
    // Create award/achievement symbols
    const awards: Award[] = [];
    for (let i = 0; i < 5; i++) {
      awards.push(createAward(canvas));
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw DNA strands
      dnaStrands.forEach(strand => {
        drawDNAStrand(ctx, strand);
        updateDNAStrand(strand, canvas);
      });
      
      // Draw molecules
      molecules.forEach(molecule => {
        drawMolecule(ctx, molecule);
        updateMolecule(molecule, canvas);
      });

      // Draw awards
      awards.forEach(award => {
        drawAward(ctx, award);
        updateAward(award, canvas);
      });
      
      // Grid lines (subtle background element)
      drawGrid(ctx, canvas);
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className={`fixed top-0 left-0 -z-10 opacity-20 ${className}`}
    />
  );
};

// Types for our animated elements
interface DNAStrand {
  x: number;
  y: number;
  height: number;
  speed: number;
  rungs: number;
  phase: number;
}

interface Molecule {
  x: number;
  y: number;
  radius: number;
  color: string;
  speed: number;
  direction: { x: number; y: number };
  bonds: number;
  atoms: { dx: number; dy: number; radius: number }[];
}

interface Award {
  x: number;
  y: number;
  type: 'medal' | 'star' | 'ribbon';
  size: number;
  opacity: number;
  speed: number;
}

// Creation functions
function createDNAStrand(canvas: HTMLCanvasElement): DNAStrand {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    height: 150 + Math.random() * 300,
    speed: 0.2 + Math.random() * 0.5,
    rungs: 8 + Math.floor(Math.random() * 8),
    phase: Math.random() * Math.PI * 2,
  };
}

function createMolecule(canvas: HTMLCanvasElement): Molecule {
  const radius = 3 + Math.random() * 8;
  const bonds = Math.floor(2 + Math.random() * 4);
  const atoms = [];
  
  // Create atoms for this molecule
  for (let i = 0; i < bonds; i++) {
    const angle = (i / bonds) * Math.PI * 2;
    const distance = 10 + Math.random() * 20;
    atoms.push({
      dx: Math.cos(angle) * distance,
      dy: Math.sin(angle) * distance,
      radius: 2 + Math.random() * 4
    });
  }
  
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius,
    color: getRandomBlueShade(),
    speed: 0.3 + Math.random() * 0.7,
    direction: {
      x: Math.random() * 2 - 1,
      y: Math.random() * 2 - 1
    },
    bonds,
    atoms
  };
}

function createAward(canvas: HTMLCanvasElement): Award {
  const types = ['medal', 'star', 'ribbon'];
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    type: types[Math.floor(Math.random() * types.length)] as Award['type'],
    size: 5 + Math.random() * 15,
    opacity: 0.1 + Math.random() * 0.2,
    speed: 0.2 + Math.random() * 0.3
  };
}

// Drawing functions
function drawDNAStrand(ctx: CanvasRenderingContext2D, strand: DNAStrand) {
  const rungWidth = 30;
  const basePairSize = 3;
  
  ctx.strokeStyle = 'rgba(37, 99, 235, 0.5)'; // Bio blue
  ctx.lineWidth = 1;
  
  // Draw the backbone strands
  ctx.beginPath();
  ctx.moveTo(strand.x, strand.y);
  ctx.lineTo(strand.x, strand.y + strand.height);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(strand.x + rungWidth, strand.y);
  ctx.lineTo(strand.x + rungWidth, strand.y + strand.height);
  ctx.stroke();
  
  // Draw the rungs with sine wave pattern
  for (let i = 0; i < strand.rungs; i++) {
    const yPos = strand.y + (i / strand.rungs) * strand.height;
    const waveOffset = Math.sin(strand.phase + i * 0.5) * 5;
    
    ctx.beginPath();
    ctx.moveTo(strand.x, yPos + waveOffset);
    ctx.lineTo(strand.x + rungWidth, yPos - waveOffset);
    ctx.stroke();
    
    // Base pairs at each end
    const color1 = getRandomBlueShade(0.5);
    const color2 = 'rgba(192, 192, 192, 0.5)'; // Silver
    
    ctx.fillStyle = Math.random() > 0.5 ? color1 : color2;
    ctx.beginPath();
    ctx.arc(strand.x, yPos + waveOffset, basePairSize, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = Math.random() > 0.5 ? color2 : color1;
    ctx.beginPath();
    ctx.arc(strand.x + rungWidth, yPos - waveOffset, basePairSize, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawMolecule(ctx: CanvasRenderingContext2D, molecule: Molecule) {
  // Main atom
  ctx.fillStyle = molecule.color;
  ctx.beginPath();
  ctx.arc(molecule.x, molecule.y, molecule.radius, 0, Math.PI * 2);
  ctx.fill();
  
  // Bonds and outer atoms
  molecule.atoms.forEach(atom => {
    const atomX = molecule.x + atom.dx;
    const atomY = molecule.y + atom.dy;
    
    // Bond
    ctx.strokeStyle = getRandomBlueShade(0.3);
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.moveTo(molecule.x, molecule.y);
    ctx.lineTo(atomX, atomY);
    ctx.stroke();
    
    // Outer atom
    ctx.fillStyle = getRandomBlueShade(0.5);
    ctx.beginPath();
    ctx.arc(atomX, atomY, atom.radius, 0, Math.PI * 2);
    ctx.fill();
  });
}

function drawAward(ctx: CanvasRenderingContext2D, award: Award) {
  ctx.globalAlpha = award.opacity;
  
  if (award.type === 'medal') {
    // Medal shape
    ctx.fillStyle = 'rgba(192, 192, 192, 0.6)'; // Silver
    ctx.beginPath();
    ctx.arc(award.x, award.y, award.size, 0, Math.PI * 2);
    ctx.fill();
    
    // Medal inner
    ctx.fillStyle = getRandomBlueShade(0.7);
    ctx.beginPath();
    ctx.arc(award.x, award.y, award.size * 0.7, 0, Math.PI * 2);
    ctx.fill();
    
    // Medal ribbon
    ctx.fillStyle = 'rgba(192, 192, 192, 0.5)';
    ctx.beginPath();
    ctx.moveTo(award.x - award.size * 0.3, award.y);
    ctx.lineTo(award.x, award.y + award.size * 1.2);
    ctx.lineTo(award.x + award.size * 0.3, award.y);
    ctx.fill();
  } else if (award.type === 'star') {
    drawStar(ctx, award.x, award.y, 5, award.size, award.size * 0.5);
  } else {
    // Ribbon
    ctx.fillStyle = 'rgba(192, 192, 192, 0.5)';
    ctx.beginPath();
    ctx.ellipse(award.x, award.y, award.size, award.size * 2, Math.PI / 4, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = getRandomBlueShade(0.4);
    ctx.beginPath();
    ctx.ellipse(award.x, award.y, award.size * 0.7, award.size * 1.7, Math.PI / 4, 0, Math.PI * 2);
    ctx.fill();
  }
  
  ctx.globalAlpha = 1;
}

function drawGrid(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
  const gridSize = 50;
  ctx.strokeStyle = 'rgba(37, 99, 235, 0.05)'; 
  ctx.lineWidth = 0.5;
  
  for (let x = 0; x <= canvas.width; x += gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }
  
  for (let y = 0; y <= canvas.height; y += gridSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }
}

function drawStar(ctx: CanvasRenderingContext2D, cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number) {
  let rot = Math.PI / 2 * 3;
  let x = cx;
  let y = cy;
  const step = Math.PI / spikes;

  ctx.fillStyle = 'rgba(255, 215, 0, 0.5)'; // Gold color
  ctx.beginPath();
  ctx.moveTo(cx, cy - outerRadius);
  
  for (let i = 0; i < spikes; i++) {
    x = cx + Math.cos(rot) * outerRadius;
    y = cy + Math.sin(rot) * outerRadius;
    ctx.lineTo(x, y);
    rot += step;

    x = cx + Math.cos(rot) * innerRadius;
    y = cy + Math.sin(rot) * innerRadius;
    ctx.lineTo(x, y);
    rot += step;
  }
  
  ctx.lineTo(cx, cy - outerRadius);
  ctx.closePath();
  ctx.fill();
}

// Update functions to animate elements
function updateDNAStrand(strand: DNAStrand, canvas: HTMLCanvasElement) {
  strand.phase += 0.02;
  strand.y += strand.speed;
  
  if (strand.y > canvas.height) {
    strand.y = -strand.height;
    strand.x = Math.random() * canvas.width;
  }
}

function updateMolecule(molecule: Molecule, canvas: HTMLCanvasElement) {
  molecule.x += molecule.direction.x * molecule.speed;
  molecule.y += molecule.direction.y * molecule.speed;
  
  // Bounce off edges
  if (molecule.x < 0 || molecule.x > canvas.width) {
    molecule.direction.x *= -1;
  }
  if (molecule.y < 0 || molecule.y > canvas.height) {
    molecule.direction.y *= -1;
  }
}

function updateAward(award: Award, canvas: HTMLCanvasElement) {
  award.y += award.speed;
  
  if (award.y > canvas.height + award.size) {
    award.y = -award.size * 2;
    award.x = Math.random() * canvas.width;
  }
}

// Helper for generating blue/silver shades
function getRandomBlueShade(alpha = 1.0) {
  const blueShades = [
    `rgba(37, 99, 235, ${alpha})`,     // Bio blue
    `rgba(23, 37, 84, ${alpha})`,      // Bio navy
    `rgba(219, 234, 254, ${alpha})`,   // Bio lightblue
    `rgba(192, 192, 192, ${alpha})`,   // Silver
    `rgba(96, 165, 250, ${alpha})`,    // Light blue
    `rgba(59, 130, 246, ${alpha})`,    // Medium blue
  ];
  
  return blueShades[Math.floor(Math.random() * blueShades.length)];
}

export default ScientificBackground;
