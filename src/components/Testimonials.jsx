import React from 'react';
import { cn } from '../lib/utils';
import { Marquee } from './ui/marquee';
import { motion } from 'framer-motion';

const reviews = [
    {
        name: "Rajesh Contractor",
        username: "Lead Architect",
        body: "Bhai, Anand Mohan ka material hamesha time pe aata hai. Unka cement ekdum top-notch hai high-rise projects ke liye!",
    },
    {
        name: "Vikram Singh",
        username: "Structural Engineer",
        body: "Inke PPC cement ki wajah se structural strength alag hi level ki hai. Premium builds ke liye highly recommended!",
    },
    {
        name: "Anita Sharma",
        username: "Design Director",
        body: "Unki expert team ne hume sahi mix choose karne mein bahut help ki. Ekdum kamaal ki service aur quality!",
    },
    {
        name: "Mohammed Ali",
        username: "Procurement Head",
        body: "Bulk ordering inke yahan sabse aasan hai. Site pe delivery hamesha perfect time pe hoti hai, no tension!",
    },
    {
        name: "Sunil Verma",
        username: "Township Developer",
        body: "Pichle 3 township projects ke liye saara material yahin se liya hai. Quality itni consistent hai ki maza aa gaya!",
    },
    {
        name: "Priya Patel",
        username: "Interior Architect",
        body: "Finish ekdum makkhan aati hai! OPC cement se hume exact wahi strength aur durability mili jo chahiye thi.",
    },
];

// Dark, highly sophisticated partner brands with logos
const partnerBrands = [
    { name: "ACC CEMENT", domain: "acclimited.com" },
    { name: "DALMIA BHARAT", domain: "dalmiacement.com" },
    { name: "ULTRATECH", domain: "ultratechcement.com" },
    { name: "AMBUJA CEMENT", domain: "ambujacement.com" },
    { name: "TATA TISCON", domain: "tatatiscon.co.in" },
    { name: "JSW NEOSTEEL", domain: "jsw.in" },
    { name: "JINDAL PANTHER", domain: "jindalpanther.com" },
    { name: "SHREE CEMENT", domain: "shreecement.com" },
    { name: "KAMDHENU STEEL", domain: "kamdhenulimited.com" }
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ name, username, body }) => {
    return (
        <figure
            className={cn(
                "relative w-80 h-full p-8 mx-4",
                "bg-card border border-border",
                "transition-all duration-700 hover:bg-accent group"
            )}
        >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left"></div>

            <div className="flex flex-col gap-6">
                <blockquote className="text-sm md:text-base text-muted-foreground font-light leading-relaxed">
                    "{body}"
                </blockquote>

                <div className="flex flex-col mt-4">
                    <figcaption className="text-xs font-display tracking-widest uppercase text-foreground font-bold">
                        {name}
                    </figcaption>
                    <p className="text-[10px] tracking-widest uppercase text-primary/70 mt-1">{username}</p>
                </div>
            </div>
        </figure>
    );
};

const BrandBadge = ({ brand }) => {
    const [imgError, setImgError] = React.useState(false);

    return (
        <div className="flex items-center justify-center px-12 h-20 min-w-[200px] transition-all duration-700 cursor-default">

            {!imgError ? (
                <div className="flex items-center gap-4">
                    <img
                        src={`https://www.google.com/s2/favicons?domain=${brand.domain}&sz=128`}
                        alt={brand.name}
                        className="w-13 h-12 md:w-18 md:h-18 object-contain transition-all duration-700"
                        onError={() => setImgError(true)}
                    />
                    <span className="text-sm md:text-lg font-display font-medium tracking-widest text-foreground uppercase whitespace-nowrap">
                        {brand.name}
                    </span>
                </div>
            ) : (
                <span className="text-xl md:text-2xl font-display font-medium tracking-widest text-foreground uppercase whitespace-nowrap">
                    {brand.name}
                </span>
            )}
        </div>
    );
};

const Testimonials = () => {
    return (
        <section className="py-24 md:py-0 bg-background overflow-hidden" id="reviews">

            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex flex-col mb-16 items-center text-center"
                >
                    <p className="text-[10px] tracking-[0.4em] font-display text-primary uppercase mb-4">
                        Industry Validation
                    </p>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-foreground tracking-tighter">
                        TRUSTED BY <br /><span className="text-outline">VISIONARIES.</span>
                    </h2>
                </motion.div>
            </div>

            {/* Highly Refined Brands Marquee */}
            <div className="w-full relative py-12 mb-32 border-y border-border">
                <Marquee className="[--duration:60s]" pauseOnHover={false}>
                    {partnerBrands.map((brand, idx) => (
                        <BrandBadge key={idx} brand={brand} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background to-transparent z-10"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background to-transparent z-10"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">


                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex flex-col mb-20"
                >
                    <p className="text-[10px] tracking-[0.4em] font-display text-primary uppercase mb-4">
                        Industry Validation
                    </p>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-foreground tracking-tighter">
                        TRUSTED BY <br /><span className="text-outline">VISIONARIES.</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    className="relative flex w-full flex-col items-center justify-center overflow-hidden"
                >
                    <Marquee pauseOnHover className="[--duration:50s]">
                        {firstRow.map((review) => (
                            <ReviewCard key={review.name} {...review} />
                        ))}
                    </Marquee>
                    <Marquee reverse pauseOnHover className="[--duration:50s] mt-8">
                        {secondRow.map((review) => (
                            <ReviewCard key={review.name} {...review} />
                        ))}
                    </Marquee>

                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent z-10"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent z-10"></div>
                </motion.div>

            </div>
        </section>
    );
};

export default Testimonials;
