import React, { useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Hero = () => {
    const containerRef = useRef(null);
    const videoRef = useRef(null);

    // Track scroll progress within the Hero section bounds
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Update video frame on scroll without causing re-renders
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (videoRef.current && videoRef.current.duration) {
            // Calculate what time the video should be at based on scroll % (0 to 1)
            const targetTime = latest * videoRef.current.duration;
            videoRef.current.currentTime = targetTime;
        }
    });

    // Ensure video is paused so it only plays via scroll
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
    }, []);

    // Elegant, slow reveal animations
    const containerVars = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.5,
            },
        },
    };

    const textRevealVars = {
        hidden: { opacity: 0, y: 100 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 3.2, ease: [0.16, 1, 0.3, 1] } // Very smooth, heavy ease-out
        },
    };

    const lineVars = {
        hidden: { scaleX: 0 },
        show: { scaleX: 1, transition: { duration: 3.5, ease: "easeInOut", delay: 1.5 } }
    };

    return (
        <div ref={containerRef} className="relative isolate w-full min-h-[150vh] bg-background">

            {/* Sticky Container for Video & Content */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

                {/* Video Background (Desktop Only) */}
                <div className="hidden md:block absolute inset-0 mt-20 z-0 w-full h-full bg-black">
                    <motion.video
                        ref={videoRef}
                        src="/videos/herosection.mp4"
                        className="w-full h-full object-cover opacity-100 mix-blend-screen"
                        muted
                        playsInline
                        preload="auto"
                    />

                    {/* Dark gradient overlay to ensure text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10"></div>
                </div>

                {/* Minimalist Background: Pure deep space with extremely faint geometric lines */}
                <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.3] dark:opacity-20">
                    <div className="absolute top-0 left-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-foreground to-transparent"></div>
                    <div className="absolute top-0 right-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-foreground to-transparent"></div>
                    <div className="absolute top-[30%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-foreground to-transparent"></div>
                </div>

                {/* Very faint, slow shifting ambient light */}
                <motion.div
                    animate={{ opacity: [0.03, 0.08, 0.03] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-foreground via-transparent to-transparent pointer-events-none mix-blend-overlay"
                />

                <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center justify-center h-full">

                    <motion.div
                        variants={containerVars}
                        initial="hidden"
                        animate="show"
                        className="w-full flex flex-col items-center text-center mt-20"
                    >
                        {/* Tiny premium eyebrow text */}


                        {/* Massive Kinetic Typography Headline */}
                        <div className="w-full relative flex flex-col items-center justify-center leading-none">
                            <div className="overflow-hidden py-2">
                                <motion.h1 variants={textRevealVars} className="font-display mt-20 text-5xl md:text-8xl lg:text-[10rem] font-bold text-foreground tracking-tighter mix-blend-difference">
                                    BUILD.
                                </motion.h1>
                            </div>
                            <div className="overflow-hidden py-2 -mt-4 md:-mt-8 lg:-mt-12 flex items-center gap-6 mix-blend-difference">
                                <motion.span variants={textRevealVars} className="font-display text-5xl md:text-8xl lg:text-[10rem] font-bold text-outline lg:text-foreground/20 uppercase">
                                    THE
                                </motion.span>
                                <motion.span variants={textRevealVars} className="font-display text-5xl md:text-8xl lg:text-[10rem] font-bold text-primary tracking-tighter">
                                    FUTURE.
                                </motion.span>
                            </div>
                        </div>
                        <div className="overflow-hidden mb-12">
                            <motion.p variants={textRevealVars} className="text-[10px] md:text-sm font-display tracking-[1em] text-foreground/80 dark:text-foreground/60 mix-blend-difference uppercase">
                                Premium Construction Logistics
                            </motion.p>
                        </div>
                        {/* Architect Line Separator */}
                        <motion.div
                            variants={lineVars}
                            className="w-[1px] h-24 md:h-32 bg-foreground/50 mt-16 mb-12 origin-top"
                        />

                        {/* Sophisticated Body Copy */}
                        <div className="overflow-hidden max-w-2xl">
                            <motion.p variants={textRevealVars} className="text-lg md:text-xl text-foreground font-light mix-blend-difference leading-relaxed tracking-wide drop-shadow-md">
                                Providing industrial-scale structural materials with absolute precision. We don't just supply projects; we engineer the foundations of tomorrow.
                            </motion.p>
                        </div>

                        {/* Elegant CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2, duration: 1, ease: "easeOut" }}
                            className="mt-16 flex flex-col sm:flex-row items-center gap-8"
                        >
                            <Button
                                variant="link"
                                className="group text-foreground hover:text-foreground p-0 h-auto text-sm tracking-[0.2em] font-display uppercase flex items-center gap-4 relative overflow-hidden mix-blend-difference"
                            >
                                <span className="relative z-10">Discover Materials</span>
                                <div className="w-8 h-[1px] bg-primary group-hover:w-16 transition-all duration-500 ease-out z-10 relative"></div>
                                <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-2 transition-transform duration-500" />

                                {/* Hover background slide */}
                                <div className="absolute inset-0 w-full h-full bg-foreground/5 -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></div>
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Grain Overlay for Texture (Very subtle) */}
                <div className="absolute inset-0 z-50 pointer-events-none opacity-[0.02] dark:opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
            </div>
        </div>
    );
};

export default Hero;
