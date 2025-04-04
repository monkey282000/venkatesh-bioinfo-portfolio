
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ProteinAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Set up scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    // Add lighting for better 3D appearance
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Create protein structure using spheres and connections
    const aminoAcids = [];
    const connections = [];
    
    // Create amino acid backbone (alpha-carbon positions in a folded protein structure)
    const proteinSize = 20;
    const foldsCount = 5;
    
    // Generate a helical structure with folding
    for (let i = 0; i < 100; i++) {
      const t = i * 0.3;
      const radius = 4 + Math.sin(i / 10) * 2;
      
      // Create helical pattern with some randomness for tertiary structure
      const x = radius * Math.cos(t) + Math.sin(i / foldsCount) * proteinSize/2;
      const y = radius * Math.sin(t) + Math.cos(i / foldsCount) * proteinSize/2;
      const z = t * 1.5 - proteinSize;

      // Create amino acid (sphere at backbone position)
      const geometry = new THREE.SphereGeometry(0.5, 16, 16);
      
      // Vary colors to represent different amino acids
      const colorIndex = i % 5;
      const colors = [0x4ade80, 0x2563eb, 0xff6347, 0xfcd34d, 0xfb7185];
      
      const material = new THREE.MeshPhongMaterial({ color: colors[colorIndex] });
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.set(x, y, z);
      scene.add(sphere);
      aminoAcids.push(sphere);
      
      // Create side chains with varying lengths to simulate R-groups
      if (i % 2 === 0) {
        const sideChainLength = Math.random() * 1.2 + 0.8;
        const sideChainDirection = new THREE.Vector3(
          Math.random() - 0.5,
          Math.random() - 0.5,
          Math.random() - 0.5
        ).normalize();
        
        const sideChainPosition = new THREE.Vector3(
          x + sideChainDirection.x * sideChainLength,
          y + sideChainDirection.y * sideChainLength,
          z + sideChainDirection.z * sideChainLength
        );
        
        const sideChainGeometry = new THREE.SphereGeometry(0.3, 8, 8);
        const sideChainMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, transparent: true, opacity: 0.7 });
        const sideChain = new THREE.Mesh(sideChainGeometry, sideChainMaterial);
        sideChain.position.copy(sideChainPosition);
        scene.add(sideChain);
        
        // Connect side chain to backbone
        const sideChainConnector = createConnection(
          new THREE.Vector3(x, y, z),
          sideChainPosition,
          0xffffff
        );
        scene.add(sideChainConnector);
      }
      
      // Connect backbone spheres
      if (i > 0) {
        const prevPos = aminoAcids[i-1].position;
        const currPos = sphere.position;
        const connection = createConnection(prevPos, currPos, 0xcccccc);
        scene.add(connection);
        connections.push(connection);
      }
    }
    
    // Helper function to create cylindrical connections between points
    function createConnection(pointA, pointB, color) {
      const direction = new THREE.Vector3().subVectors(pointB, pointA);
      const arrow = new THREE.ArrowHelper(direction.clone().normalize(), pointA, direction.length(), color);
      return arrow;
    }
    
    // Add hydrogen bonds for secondary structure
    for (let i = 4; i < aminoAcids.length; i += 4) {
      if (i + 4 < aminoAcids.length) {
        const bondStart = aminoAcids[i].position;
        const bondEnd = aminoAcids[i + 4].position;
        const hBond = new THREE.Line(
          new THREE.BufferGeometry().setFromPoints([bondStart, bondEnd]),
          new THREE.LineDashedMaterial({ 
            color: 0x00ffff, 
            dashSize: 0.3, 
            gapSize: 0.1,
            opacity: 0.3,
            transparent: true
          })
        );
        scene.add(hBond);
      }
    }
    
    // Position camera to view the protein
    camera.position.z = 40;
    camera.position.y = 5;
    camera.lookAt(0, 0, 0);
    
    // Add subtle rotation animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate the entire protein structure
      aminoAcids.forEach((sphere) => {
        sphere.rotation.y += 0.001;
      });
      
      const time = Date.now() * 0.001;
      const proteinGroup = scene;
      proteinGroup.rotation.y = time * 0.1;
      proteinGroup.rotation.x = Math.sin(time * 0.2) * 0.1;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return <div ref={containerRef} className="absolute inset-0 pointer-events-none z-0" />;
};

export default ProteinAnimation;
