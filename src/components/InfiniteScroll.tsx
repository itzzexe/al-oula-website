import React from 'react';
import { motion } from 'framer-motion';

const images = [
  '/packaging.png',
  '/products.png',
  'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=500',
  'https://images.unsplash.com/photo-1555507036-ab101d536953?auto=format&fit=crop&q=80&w=500',
  'https://images.unsplash.com/photo-1589367920969-ab8e0509aae2?auto=format&fit=crop&q=80&w=500',
  'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80&w=500',
  'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&q=80&w=500',
  'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=500',
];

export const InfiniteScroll: React.FC = () => {
  return (
    <section className="scroll-section">
      <div className="scroll-container">
        <motion.div
          className="scroll-track"
          animate={{ x: [0, -1500] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop" as const,
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...images, ...images].map((img, i) => (
            <div key={i} className="scroll-item glass-card">
              <img src={img} alt="Bakery product" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
