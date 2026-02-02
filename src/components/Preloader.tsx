import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';

export const Preloader: React.FC = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500); // Wait for logo animation to complete
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    className="preloader"
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <div className="preloader-content">
                        <Logo size={150} />
                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                        >
                            AL-OULA
                        </motion.h2>
                    </div>

                </motion.div>
            )}
        </AnimatePresence>
    );
};
