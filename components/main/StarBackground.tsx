"use client";

import React, { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as THREE from "three";

const StarBackground: React.FC = () => {
    const ref = useRef<THREE.Points>(null);
    const [spherePositions, setSpherePositions] = useState<Float32Array | null>(null);

    useEffect(() => {
        // Dynamic import untuk avoid SSR issues
        const generateStars = async () => {
            try {
                const { inSphere } = await import('maath/random');
                const positions = new Float32Array(4998); // 1666 particles
                inSphere(positions, { radius: 1.2 });
                setSpherePositions(positions);
            } catch (error) {
                console.log('Fallback to manual generation');
                // Fallback manual generation
                const particleCount = 1666;
                const positions = new Float32Array(particleCount * 3);

                for (let i = 0; i < particleCount; i++) {
                    const i3 = i * 3;
                    let x, y, z;
                    do {
                        x = (Math.random() - 0.5) * 2;
                        y = (Math.random() - 0.5) * 2;
                        z = (Math.random() - 0.5) * 2;
                    } while (x * x + y * y + z * z > 1);

                    const radius = 1.2;
                    positions[i3] = x * radius;
                    positions[i3 + 1] = y * radius;
                    positions[i3 + 2] = z * radius;
                }
                setSpherePositions(positions);
            }
        };

        generateStars();
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    if (!spherePositions) return null;

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={spherePositions} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#ffffff"
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const StarsCanvas: React.FC = () => {
    return (
        <div className="w-full h-auto fixed inset-0 z-[20]">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <StarBackground />
                    <Preload all />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default StarsCanvas;
