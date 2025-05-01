
import { useEffect, useRef, useState } from 'react';

const GeometricBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Configuration
    const colors = [
      '#2563eb', // bio-blue
      '#172554', // bio-navy
      '#dbeafe', // bio-lightblue
      'rgba(192, 192, 192, 0.5)', // Silver
    ];
    
    // Create shapes
    const shapes: Shape[] = [];
    
    // Add triangles
    for (let i = 0; i < 15; i++) {
      shapes.push(createTriangle(canvas));
    }
    
    // Add circles
    for (let i = 0; i < 10; i++) {
      shapes.push(createCircle(canvas));
    }
    
    // Add rectangles
    for (let i = 0; i < 8; i++) {
      shapes.push(createRectangle(canvas));
    }
    
    // Add hexagons
    for (let i = 0; i < 6; i++) {
      shapes.push(createHexagon(canvas));
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid lines
      drawGrid(ctx, canvas);
      
      // Draw shapes
      shapes.forEach(shape => {
        // Apply interactive effects based on mouse position
        applyInteractivity(shape, mousePosition, canvas);
        
        if (shape.type === 'triangle') {
          drawTriangle(ctx, shape);
        } else if (shape.type === 'circle') {
          drawCircle(ctx, shape);
        } else if (shape.type === 'rectangle') {
          drawRectangle(ctx, shape);
        } else if (shape.type === 'hexagon') {
          drawHexagon(ctx, shape);
        }
        
        // Update shape position
        updateShape(shape, canvas);
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [mousePosition]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 -z-10 opacity-20"
    />
  );
};

// Type definitions
type ShapeType = 'triangle' | 'circle' | 'rectangle' | 'hexagon';

interface BaseShape {
  x: number;
  y: number;
  color: string;
  speed: number;
  direction: { x: number; y: number };
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  type: ShapeType;
}

interface TriangleShape extends BaseShape {
  type: 'triangle';
  size: number;
}

interface CircleShape extends BaseShape {
  type: 'circle';
  radius: number;
}

interface RectangleShape extends BaseShape {
  type: 'rectangle';
  width: number;
  height: number;
}

interface HexagonShape extends BaseShape {
  type: 'hexagon';
  size: number;
}

type Shape = TriangleShape | CircleShape | RectangleShape | HexagonShape;

// Helper functions
function getRandomColor(): string {
  const colors = [
    '#2563eb', // bio-blue
    '#172554', // bio-navy
    '#dbeafe', // bio-lightblue
    'rgba(192, 192, 192, 0.5)', // Silver
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Shape creation functions
function createTriangle(canvas: HTMLCanvasElement): TriangleShape {
  return {
    type: 'triangle',
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: 10 + Math.random() * 40,
    color: getRandomColor(),
    speed: 0.2 + Math.random() * 0.5,
    direction: {
      x: Math.random() * 2 - 1,
      y: Math.random() * 2 - 1,
    },
    rotation: Math.random() * Math.PI * 2,
    rotationSpeed: (Math.random() * 0.02) - 0.01,
    opacity: 0.1 + Math.random() * 0.3,
  };
}

function createCircle(canvas: HTMLCanvasElement): CircleShape {
  return {
    type: 'circle',
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: 5 + Math.random() * 30,
    color: getRandomColor(),
    speed: 0.1 + Math.random() * 0.4,
    direction: {
      x: Math.random() * 2 - 1,
      y: Math.random() * 2 - 1,
    },
    rotation: 0,
    rotationSpeed: 0,
    opacity: 0.1 + Math.random() * 0.3,
  };
}

function createRectangle(canvas: HTMLCanvasElement): RectangleShape {
  return {
    type: 'rectangle',
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    width: 15 + Math.random() * 50,
    height: 15 + Math.random() * 50,
    color: getRandomColor(),
    speed: 0.15 + Math.random() * 0.4,
    direction: {
      x: Math.random() * 2 - 1,
      y: Math.random() * 2 - 1,
    },
    rotation: Math.random() * Math.PI * 2,
    rotationSpeed: (Math.random() * 0.01) - 0.005,
    opacity: 0.1 + Math.random() * 0.3,
  };
}

function createHexagon(canvas: HTMLCanvasElement): HexagonShape {
  return {
    type: 'hexagon',
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: 15 + Math.random() * 35,
    color: getRandomColor(),
    speed: 0.1 + Math.random() * 0.3,
    direction: {
      x: Math.random() * 2 - 1,
      y: Math.random() * 2 - 1,
    },
    rotation: Math.random() * Math.PI * 2,
    rotationSpeed: (Math.random() * 0.01) - 0.005,
    opacity: 0.1 + Math.random() * 0.3,
  };
}

// Drawing functions
function drawTriangle(ctx: CanvasRenderingContext2D, triangle: TriangleShape) {
  ctx.save();
  ctx.globalAlpha = triangle.opacity;
  ctx.translate(triangle.x, triangle.y);
  ctx.rotate(triangle.rotation);
  
  ctx.beginPath();
  ctx.moveTo(0, -triangle.size / 2);
  ctx.lineTo(triangle.size / 2, triangle.size / 2);
  ctx.lineTo(-triangle.size / 2, triangle.size / 2);
  ctx.closePath();
  
  ctx.fillStyle = triangle.color;
  ctx.fill();
  ctx.restore();
}

function drawCircle(ctx: CanvasRenderingContext2D, circle: CircleShape) {
  ctx.save();
  ctx.globalAlpha = circle.opacity;
  
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
  ctx.fillStyle = circle.color;
  ctx.fill();
  
  ctx.restore();
}

function drawRectangle(ctx: CanvasRenderingContext2D, rect: RectangleShape) {
  ctx.save();
  ctx.globalAlpha = rect.opacity;
  ctx.translate(rect.x, rect.y);
  ctx.rotate(rect.rotation);
  
  ctx.beginPath();
  ctx.rect(-rect.width / 2, -rect.height / 2, rect.width, rect.height);
  ctx.fillStyle = rect.color;
  ctx.fill();
  
  ctx.restore();
}

function drawHexagon(ctx: CanvasRenderingContext2D, hexagon: HexagonShape) {
  ctx.save();
  ctx.globalAlpha = hexagon.opacity;
  ctx.translate(hexagon.x, hexagon.y);
  ctx.rotate(hexagon.rotation);
  
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i;
    const x = hexagon.size * Math.cos(angle);
    const y = hexagon.size * Math.sin(angle);
    
    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }
  ctx.closePath();
  
  ctx.fillStyle = hexagon.color;
  ctx.fill();
  ctx.restore();
}

function drawGrid(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
  const gridSize = 70;
  ctx.strokeStyle = 'rgba(37, 99, 235, 0.03)'; 
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

function updateShape(shape: Shape, canvas: HTMLCanvasElement) {
  // Move shape
  shape.x += shape.direction.x * shape.speed;
  shape.y += shape.direction.y * shape.speed;
  
  // Apply rotation if applicable
  shape.rotation += shape.rotationSpeed;
  
  // Bounce off edges
  if (shape.x < 0 || shape.x > canvas.width) {
    shape.direction.x *= -1;
  }
  if (shape.y < 0 || shape.y > canvas.height) {
    shape.direction.y *= -1;
  }
}

// New function to handle mouse interactivity
function applyInteractivity(shape: Shape, mousePosition: { x: number, y: number }, canvas: HTMLCanvasElement) {
  // Calculate distance from shape to mouse
  const dx = shape.x - mousePosition.x;
  const dy = shape.y - mousePosition.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  
  // Define interaction radius
  const interactionRadius = 150;
  
  if (distance < interactionRadius) {
    // Calculate effect strength based on distance (closer = stronger)
    const strength = 1 - (distance / interactionRadius);
    
    // Increase opacity when mouse is near
    shape.opacity = Math.min(0.8, shape.opacity + (strength * 0.3));
    
    // Increase rotation speed when mouse is near
    shape.rotationSpeed += strength * 0.01 * (Math.random() > 0.5 ? 1 : -1);
    
    // Shapes move away from or toward cursor based on their type
    if (shape.type === 'circle' || shape.type === 'hexagon') {
      // Push away from cursor
      shape.direction.x += (dx / distance) * strength * 0.2;
      shape.direction.y += (dy / distance) * strength * 0.2;
    } else {
      // Pull toward cursor
      shape.direction.x -= (dx / distance) * strength * 0.1;
      shape.direction.y -= (dy / distance) * strength * 0.1;
    }
    
    // Normalize direction vector to maintain consistent speed
    const dirMagnitude = Math.sqrt(shape.direction.x * shape.direction.x + shape.direction.y * shape.direction.y);
    if (dirMagnitude > 0) {
      shape.direction.x = shape.direction.x / dirMagnitude;
      shape.direction.y = shape.direction.y / dirMagnitude;
    }
    
    // Slightly adjust the color
    if (Math.random() > 0.95) {
      shape.color = getRandomColor();
    }
  } else {
    // Gradually return to original opacity
    shape.opacity = Math.max(0.1, shape.opacity - 0.01);
  }
}

export default GeometricBackground;
