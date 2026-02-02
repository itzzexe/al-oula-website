import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, useTexture } from '@react-three/drei';

const Box: React.FC = () => {
    const texture = useTexture('/packaging.png');

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <mesh>
                <boxGeometry args={[3, 3, 3]} />
                <meshStandardMaterial map={texture} />
            </mesh>
        </Float>
    );
};

export const Product3D: React.FC = () => {
    return (
        <div style={{ height: '500px', width: '100%', cursor: 'grab' }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <Suspense fallback={null}>
                    <Box />
                </Suspense>
                <OrbitControls enableZoom={false} />
            </Canvas>
        </div>
    );
};
