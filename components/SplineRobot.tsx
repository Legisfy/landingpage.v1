
import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import {
    FileText,
    BarChart3,
    CheckCircle2,
    Target,
    ShieldCheck,
    Zap
} from 'lucide-react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

const FloatingHologram = ({ children, x, y, delay, duration }: { children: React.ReactNode, x: number | string, y: number | string, delay: number, duration: number }) => (
    <motion.div
        className="absolute z-20 pointer-events-none"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
            opacity: [0.4, 0.8, 0.4],
            scale: [0.9, 1.1, 0.9],
            y: [0, -10, 0]
        }}
        transition={{
            duration: duration,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut"
        }}
        style={{ left: x, top: y }}
    >
        <div className="bg-blue-500/10 border border-blue-400/30 p-2 rounded-lg backdrop-blur-sm shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            {children}
        </div>
    </motion.div>
);

const SplineRobot: React.FC = () => {
    return (
        <div className="w-full h-[650px] relative flex items-center justify-center overflow-hidden">
            {/* Holographic Tools */}
            <FloatingHologram x="20%" y="30%" delay={0} duration={4}>
                <FileText className="text-blue-400 w-6 h-6" />
            </FloatingHologram>

            <FloatingHologram x="75%" y="25%" delay={1} duration={5}>
                <BarChart3 className="text-cyan-400 w-8 h-8" />
            </FloatingHologram>

            <FloatingHologram x="15%" y="60%" delay={2} duration={6}>
                <Target className="text-indigo-400 w-5 h-5" />
            </FloatingHologram>

            <FloatingHologram x="80%" y="55%" delay={1.5} duration={4.5}>
                <ShieldCheck className="text-emerald-400 w-6 h-6" />
            </FloatingHologram>

            {/* "Assessor IA" Badge - Positioning to look like it's on chest/near */}
            <motion.div
                className="absolute top-[45%] left-1/2 -translate-x-1/2 z-20 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <div className="bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full flex items-center gap-2 shadow-lg">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-white/90 font-mono">
                        Assessor IA
                    </span>
                </div>
            </motion.div>

            {/* Connecting Lines (Decoratve) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-20">
                <motion.path
                    d="M 200 200 L 400 325"
                    stroke="url(#gradient-line)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />
                <defs>
                    <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="#60A5FA" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                </defs>
            </svg>

            <Suspense
                fallback={
                    <div className="w-full h-full flex items-center justify-center bg-transparent">
                        <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                    </div>
                }
            >
                <Spline scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" />
            </Suspense>
        </div>
    );
};

export default SplineRobot;
