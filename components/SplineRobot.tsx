
import React, { Suspense, useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, ShieldCheck } from 'lucide-react';

// Só importa o Spline (2MB+) quando o componente entra na tela
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
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '200px' } // começa a carregar 200px antes de entrar na tela
        );
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className="w-full h-[650px] relative flex items-center justify-center overflow-hidden">
            {/* Holographic Tools */}
            <FloatingHologram x="20%" y="30%" delay={0} duration={5}>
                <BarChart3 className="text-cyan-400 w-7 h-7" />
            </FloatingHologram>

            <FloatingHologram x="75%" y="55%" delay={1.5} duration={5.5}>
                <ShieldCheck className="text-emerald-400 w-7 h-7" />
            </FloatingHologram>

            {/* "Assessor IA" Badge */}
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

            {/* Só renderiza o Spline pesado quando visível na tela */}
            {isVisible ? (
                <Suspense
                    fallback={
                        <div className="w-full h-full flex items-center justify-center bg-transparent">
                            <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                        </div>
                    }
                >
                    <Spline scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" />
                </Suspense>
            ) : (
                <div className="w-full h-full flex items-center justify-center bg-transparent">
                    <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                </div>
            )}
        </div>
    );
};

export default SplineRobot;
