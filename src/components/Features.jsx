import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
    const features = [
        {
            num: "01",
            title: "Structural Integrity",
            description: "Top-grade OPC & PPC formulations. Sourced directly from industry leaders to guarantee maximum load tolerance for high-rise developments.",
        },
        {
            num: "02",
            title: "Precision Logistics",
            description: "Autonomous, GPS-tracked fleet ensuring site-direct synchronous delivery. We eliminate downtime from your construction schedule completely.",
        },
        {
            num: "03",
            title: "Algorithmic Mixes",
            description: "Data-driven consultative approach to material selection. The perfect chemical composition calculated for your specific climate anomaly.",
        }
    ];

    const containerVars = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVars = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section className="py-32 md:py-48 bg-background relative border-t border-border" id="features">

            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-24 md:mb-40 gap-8"
                >
                    <div className="max-w-2xl">
                        <p className="text-[10px] md:text-xs tracking-[0.4em] font-display text-primary uppercase mb-6 drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]">
                            The Matrix Advantage
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-foreground tracking-tighter leading-[1.1]">
                            ENGINEERED <br />FOR SCALE.
                        </h2>
                    </div>

                    <p className="text-muted-foreground text-sm md:text-base font-light max-w-sm leading-relaxed">
                        We are fundamentally changing how megaprojects are supplied. Access industrial-grade materials built for the cities of tomorrow.
                    </p>
                </motion.div>

                {/* Features Grid - Minimalist List Architecture */}
                <motion.div
                    variants={containerVars}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex flex-col w-full"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVars}
                            className={`group flex flex-col md:flex-row items-start md:items-center py-12 md:py-16 ${index !== 0 ? 'border-t border-border' : ''} relative`}
                        >
                            {/* Hover background highlight */}
                            <div className="absolute inset-0 bg-foreground/[0.02] scale-y-0 origin-center group-hover:scale-y-100 transition-transform duration-700 ease-in-out z-0"></div>

                            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center w-full gap-6 md:gap-12">
                                {/* Huge Minimalist Number */}
                                <div className="w-24 md:w-40 shrink-0">
                                    <span className="font-display text-5xl md:text-7xl font-bold text-outline opacity-40 group-hover:opacity-100 group-hover:text-primary transition-all duration-700">
                                        {feature.num}
                                    </span>
                                </div>

                                {/* Title */}
                                <div className="flex-grow">
                                    <h3 className="text-2xl md:text-4xl font-display font-medium text-foreground tracking-tight group-hover:translate-x-4 transition-transform duration-700 ease-out">
                                        {feature.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <div className="w-full md:w-96 shrink-0 mt-4 md:mt-0">
                                    <p className="text-sm text-muted-foreground font-light leading-relaxed group-hover:text-foreground transition-colors duration-500">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Features;
