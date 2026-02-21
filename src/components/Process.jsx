import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProcessItem = ({ index, title, description, isActive, onClick }) => {
    return (
        <div className="border-b border-border last:border-0">
            <button
                onClick={onClick}
                className="w-full py-8 md:py-12 flex items-center justify-between text-left group focus:outline-none"
            >
                <div className="flex items-center gap-8 md:gap-16 w-full">
                    {/* Number */}
                    <span
                        className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold transition-colors duration-500 w-20 shrink-0 ${isActive ? 'text-primary' : 'text-outline group-hover:text-foreground'
                            }`}
                    >
                        0{index + 1}
                    </span>

                    {/* Title */}
                    <h3 className={`text-2xl md:text-4xl lg:text-5xl font-display font-medium tracking-tight transition-transform duration-500 ease-out flex-grow ${isActive ? 'translate-x-4 text-foreground' : 'text-muted-foreground group-hover:translate-x-2 group-hover:text-foreground'
                        }`}>
                        {title}
                    </h3>

                    {/* Plus/Minus Indicator */}
                    <div className="relative w-6 h-6 shrink-0 hidden md:block">
                        <span className="absolute top-1/2 left-0 w-full h-[2px] bg-foreground -translate-y-1/2 rounded-full"></span>
                        <span className={`absolute top-0 left-1/2 w-[2px] h-full bg-foreground -translate-x-1/2 rounded-full transition-transform duration-500 ${isActive ? 'rotate-90 scale-y-0' : 'rotate-0 scale-y-100'
                            }`}></span>
                    </div>
                </div>
            </button>

            <AnimatePresence initial={false}>
                {isActive && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="pb-12 pl-28 md:pl-36 max-w-3xl">
                            <p className="text-sm md:text-lg text-muted-foreground font-light leading-relaxed">
                                {description}
                            </p>

                            {/* Animated line inside content */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                                className="h-[1px] w-24 bg-primary mt-8 origin-left"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Process = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const phases = [
        {
            title: "Algorithmic Procurement",
            description: "We don't just order materials; we simulate structural requirements. Our proprietary algorithms match your blueprint specifications with the optimal chemical compositions, sourcing top-tier OPC and PPC directly from manufacturers like UltraTech and ACC, eliminating intermediary degradation."
        },
        {
            title: "Synchronous Logistics",
            description: "Time is capital. Our delivery grid operates on strict JIT (Just-In-Time) protocols. Utilizing a GPS-tracked, autonomous-capable fleet, we guarantee that precise material quantities arrive precisely when the structural engineer requires them, reducing on-site storage costs to zero."
        },
        {
            title: "On-Site Integration",
            description: "The handover is flawless. We provide real-time metallurgical tracking and automated quality assurance logs the moment the material touches your site. This ensures complete auditability and absolute structural confidence before the first pour."
        }
    ];

    return (
        <section className="py-32 md:py-48 bg-background relative" id="process">
            {/* Background Texture Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-border/50 -translate-x-1/2 pointer-events-none hidden lg:block"></div>

            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex flex-col items-center text-center mb-24 md:mb-32"
                >
                    <p className="text-[10px] md:text-xs tracking-[0.4em] font-display text-primary uppercase mb-6">
                        Operational Supremacy
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-foreground tracking-tighter">
                        THE ARCHITECTURE <br />
                        <span className="text-outline">OF SUPPLY.</span>
                    </h2>
                </motion.div>

                {/* Accordion Container */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="border-t border-border">
                        {phases.map((phase, index) => (
                            <ProcessItem
                                key={index}
                                index={index}
                                title={phase.title}
                                description={phase.description}
                                isActive={activeIndex === index}
                                onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                            />
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Process;
