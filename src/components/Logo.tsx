import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
    size?: number | string;
    animated?: boolean;
    variant?: 1 | 2;
}

export const Logo: React.FC<LogoProps> = ({ size = 100, variant = 1 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{ width: size, height: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '100%' }}
        >
            <img
                src={`/logo${variant}.png`}
                alt="Al-Oula Logo"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
        </motion.div>
    );
};
