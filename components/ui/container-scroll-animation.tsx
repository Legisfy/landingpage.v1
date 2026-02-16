
"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
    titleComponent,
    children,
}: {
    titleComponent: string | React.ReactNode;
    children: React.ReactNode;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => {
            window.removeEventListener("resize", checkMobile);
        };
    }, []);

    const scaleDimensions = () => {
        return isMobile ? [0.7, 0.9] : [1.05, 1];
    };

    const rotate = useTransform(scrollYProgress, [0, 0.5], [20, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], scaleDimensions());
    const translate = useTransform(scrollYProgress, [0, 0.5], [0, -40]);

    return (
        <div
            className="h-[40rem] md:h-[50rem] flex items-center justify-center relative p-2 md:p-8"
            ref={containerRef}
        >
            {/* Background Glows */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                {/* Top Center Glow (Behind Tablet) - Atmospheric */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[600px] bg-white/[0.03] blur-[140px] rounded-full -mt-80" />

                <div className="absolute inset-0 flex items-center justify-between px-4 md:px-20">
                    <div className="w-[400px] h-[600px] bg-white/5 rounded-full blur-[100px] -ml-20" />
                    <div className="w-[400px] h-[600px] bg-white/5 rounded-full blur-[100px] -mr-20" />
                </div>
            </div>

            <div
                className="py-10 md:py-20 w-full relative"
                style={{
                    perspective: "1000px",
                }}
            >
                <Header translate={translate} titleComponent={titleComponent} />
                <Card rotate={rotate} translate={translate} scale={scale}>
                    {children}
                </Card>
            </div>
        </div>
    );
};

export const Header = ({ translate, titleComponent }: any) => {
    return (
        <motion.div
            style={{
                translateY: translate,
            }}
            className="max-w-5xl mx-auto text-center relative z-20"
        >
            {titleComponent}
        </motion.div>
    );
};

export const Card = ({
    rotate,
    scale,
    children,
}: {
    rotate: MotionValue<number>;
    scale: MotionValue<number>;
    translate: MotionValue<number>;
    children: React.ReactNode;
}) => {
    return (
        <motion.div
            style={{
                rotateX: rotate,
                scale,
                background: "linear-gradient(135deg, #3a3a37 0%, #5a5a57 25%, #292927 50%, #4a4a47 75%, #2d2d2b 100%)",
                boxShadow:
                    "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
            }}
            className="max-w-5xl -mt-40 md:-mt-56 mx-auto h-[28rem] md:h-[36rem] w-full p-[4px] md:p-[6px] rounded-[32px] shadow-2xl overflow-hidden relative z-10"
        >
            <div className="h-full w-full overflow-hidden rounded-[26px] bg-[#030712] p-0">
                {children}
            </div>
        </motion.div>
    );
};
