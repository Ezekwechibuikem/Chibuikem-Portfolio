"use client"
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import useScreenSize from '../hook/useScreenSize';
import Wizard from './Wizard';

export default function Scene() {
  const screenSize = useScreenSize();

  const getCameraPosition = () => {
    if (!screenSize) return 5;
    if (screenSize >= 1536) return 5;      
    if (screenSize >= 1024) return 5.5;    
    if (screenSize >= 768) return 6;       
    if (screenSize >= 640) return 6.5;    
    if (screenSize >= 414) return 7.5;       
    return 8;                          // xs screens
  };

  const getCameraFov = () => {
    if (screenSize >= 768) return 75;    // Larger screens
    return 85;                           // Mobile screens - wider FOV
  };

  return (
    <Canvas>
      <PerspectiveCamera 
        makeDefault 
        position={[0, 0, getCameraPosition()]}
        fov={getCameraFov()} 
      />
      <Wizard />
    </Canvas>
  );
}