import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, setTheme } = useTheme();

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Philosophy', href: '#home' },
        { name: 'Materials', href: '#features' },
        { name: 'Partners', href: '#reviews' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${scrolled ? 'bg-background/80 backdrop-blur-2xl border-b border-border py-4 shadow-sm' : 'bg-transparent py-8'}`}
        >
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl flex items-center justify-between">

                {/* Minimalist Logo */}
                <div className="flex flex-col cursor-pointer group">
                    <span className="text-xl md:text-2xl font-display font-bold tracking-tighter text-foreground drop-shadow-sm">
                        ANAND MOHAN
                    </span>
                    <div className="flex text-[8px] md:text-[10px] tracking-[0.4em] text-primary uppercase font-bold overflow-hidden">
                        <motion.span
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
                        >
                            Enterprises
                        </motion.span>
                    </div>
                </div>

                {/* Desktop Links & Theme Toggle */}
                <div className="hidden md:flex items-center gap-12">
                    {navLinks.map((link, i) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-[11px] uppercase tracking-[0.2em] font-medium text-muted-foreground hover:text-foreground transition-colors duration-500 relative group py-2"
                        >
                            {link.name}
                            {/* Animated underline */}
                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-foreground transition-all duration-500 group-hover:w-full ease-out"></span>
                        </a>
                    ))}

                    {/* Theme Toggle Button */}
                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    </button>
                </div>

                {/* Mobile Menu & Theme Toggle */}
                <div className="flex items-center md:hidden gap-4">
                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="p-2 text-foreground focus:outline-none"
                    >
                        {theme === 'dark' ? <Sun className="h-5 w-5 font-light" /> : <Moon className="h-5 w-5 font-light" />}
                    </button>
                    <button
                        onClick={toggleMenu}
                        className="text-foreground focus:outline-none p-2"
                    >
                        {isOpen ? <X className="h-6 w-6 font-light" /> : <Menu className="h-6 w-6 font-light" />}
                    </button>
                </div>
            </div>

            {/* Immersive Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 top-[72px] bg-background md:hidden z-40 flex flex-col items-center justify-center -mt-[72px]"
                    >
                        <div className="flex flex-col items-center gap-12 w-full px-6 text-center">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
                                    className="font-display text-4xl uppercase tracking-widest text-foreground hover:text-primary transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="absolute bottom-12 text-xs uppercase tracking-widest text-muted-foreground"
                        >
                            Anand Mohan Enterprises &copy;
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
