"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = (props: any) => {
    const ref: any = useRef();

    // ✅ Fix: Add validation for NaN values
    const [sphere] = useState(() => {
        const positions = random.inSphere(new Float32Array(5000), { radius: 1.2 });

        // Clean any NaN values
        for (let i = 0; i < positions.length; i++) {
            if (!isFinite(positions[i])) {
                positions[i] = (Math.random() - 0.5) * 2.4; // Fallback to safe random
            }
        }

        return positions;
    });

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points
                ref={ref}
                positions={sphere}
                stride={3}
                frustumCulled
                {...props}
            >
                <PointMaterial
                    transparent
                    color="#fff" // ✅ Fix: Corrected color syntax
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false} // ✅ Fix: Corrected spelling
                />
            </Points>
        </group>
    );
};

const StarsCanvas = () => (
    <div className="w-full h-auto fixed inset-0 z-[20]">
        <Canvas camera={{ position: [0, 0, 1] }}>
            <Suspense fallback={null}>
                <StarBackground />
            </Suspense>
        </Canvas>
    </div>
);

export default StarsCanvas;
