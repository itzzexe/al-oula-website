import type { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
    children: ReactNode;
    id?: string;
    className?: string;
}

export const SectionWrapper: FC<SectionWrapperProps> = ({ children, id, className }) => {
    return (
        <motion.div
            id={id}
            className={className}
            initial={{ opacity: 0, rotateX: 45, originY: 0 }}
            whileInView={{ opacity: 1, rotateX: 0, originY: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ perspective: "1500px" }}
        >
            {children}
        </motion.div>
    );
};
