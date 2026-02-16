
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ChessStrategyBackground: React.FC = () => {
    const { scrollYProgress } = useScroll();

    // Animations for "Checkmate" effect
    // King (Target) - Moves slightly or stays dominant
    const kingY = useTransform(scrollYProgress, [0, 0.4], [100, 150]);
    const kingX = useTransform(scrollYProgress, [0, 0.4], [0, 20]);
    const kingOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8], [0.03, 0.08, 0.04]);

    // Rook (Torre) - Closes in from the side/bottom
    const rookY = useTransform(scrollYProgress, [0, 0.5], [600, 300]);
    const rookX = useTransform(scrollYProgress, [0, 0.5], [-100, 50]);
    const rookOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7], [0, 0.06, 0.03]);

    // Knight (Cavalo) - Makes a strategic "L" move feel
    const knightY = useTransform(scrollYProgress, [0, 0.6], [200, 450]);
    const knightX = useTransform(scrollYProgress, [0, 0.6], [400, 250]);
    const knightOpacity = useTransform(scrollYProgress, [0, 0.2, 0.6], [0, 0.07, 0.04]);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-0">
            {/* King - Representing POWER */}
            <motion.div
                style={{ y: kingY, x: kingX, opacity: kingOpacity }}
                className="absolute left-[15%] top-[10%]"
            >
                <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 15L55 25H45L50 15Z" fill="white" />
                    <rect x="35" y="25" width="30" height="5" fill="white" />
                    <path d="M30 30H70L65 65H35L30 30Z" stroke="white" strokeWidth="2" />
                    <path d="M35 65H65L70 85H30L35 65Z" fill="rgba(255,255,255,0.2)" stroke="white" strokeWidth="2" />
                </svg>
            </motion.div>

            {/* Rook - Representing STRATEGY */}
            <motion.div
                style={{ y: rookY, x: rookX, opacity: rookOpacity }}
                className="absolute left-[5%]"
            >
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="30" y="20" width="10" height="10" fill="white" opacity="0.8" />
                    <rect x="45" y="20" width="10" height="10" fill="white" opacity="0.8" />
                    <rect x="60" y="20" width="10" height="10" fill="white" opacity="0.8" />
                    <rect x="30" y="30" width="40" height="10" fill="white" />
                    <rect x="35" y="40" width="30" height="35" stroke="white" strokeWidth="2" />
                    <rect x="30" y="75" width="40" height="10" fill="rgba(255,255,255,0.2)" stroke="white" strokeWidth="2" />
                </svg>
            </motion.div>

            {/* Knight - Representing INTELLIGENCE */}
            <motion.div
                style={{ y: knightY, x: knightX, opacity: knightOpacity, rotate: 15 }}
                className="absolute right-[5%]"
            >
                <svg width="110" height="110" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 20C40 20 60 20 65 40C70 60 50 65 50 65L60 85H30L35 60C35 60 25 55 25 40C25 25 40 20 40 20Z" stroke="white" strokeWidth="2" />
                    <circle cx="45" cy="35" r="2" fill="white" />
                    <path d="M45 50L55 50" stroke="white" strokeWidth="1" />
                </svg>
            </motion.div>

            {/* Background Dots Grid */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                    backgroundSize: '60px 60px'
                }}
            ></div>
        </div>
    );
};

export default ChessStrategyBackground;
