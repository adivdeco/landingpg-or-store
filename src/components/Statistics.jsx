import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const StatItem = ({ endValue, suffix = "", label, duration = 2 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!isInView) return;

        let startTime;
        let animationFrame;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / (duration * 1000), 1);

            // Easing function for smooth deceleration (easeOutExpo)
            const easeOut = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);

            setCount(Math.floor(endValue * easeOut));

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [isInView, endValue, duration]);

    return (
        <div ref={ref} className="flex flex-col items-center justify-center relative group">
            {/* Background Accent */}
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-700 ease-out z-0"></div>

            <div className="relative z-10 py-12 px-6 text-center w-full">
                <div className="flex items-baseline justify-center gap-1 mb-4 overflow-hidden">
                    <motion.span
                        initial={{ y: 100, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground tracking-tighter tabular-nums"
                    >
                        {count}
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 1, duration: 1 }}
                        className="text-3xl md:text-5xl font-display font-medium text-primary"
                    >
                        {suffix}
                    </motion.span>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-xs md:text-sm tracking-[0.3em] font-display text-muted-foreground uppercase"
                >
                    {label}
                </motion.p>
            </div>
        </div>
    );
};

const Statistics = () => {
    return (
        <section className="py-24 md:py-32 bg-background border-y border-border" id="statistics">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">

                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
                    <StatItem endValue={15} suffix="M+" label="Tons Delivered" duration={2} />
                    <StatItem endValue={450} suffix="+" label="Megaprojects Run" duration={2.5} />
                    <StatItem endValue={100} suffix="%" label="Quality Assured" duration={3} />
                </div>

            </div>
        </section>
    );
};

export default Statistics;
