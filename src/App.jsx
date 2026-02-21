import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Process from './components/Process';
import Features from './components/Features';
import MaterialsGallery from './components/MaterialsGallery';
import Statistics from './components/Statistics';
import Testimonials from './components/Testimonials';
import { ThemeProvider } from './components/ThemeProvider';


function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="anandmohan-theme">
      <div className="min-h-screen flex flex-col selection:bg-foreground selection:text-background bg-background transition-colors duration-700">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Process />
          <Features />
          <MaterialsGallery />
          <Statistics />
          <Testimonials />
        </main>

        {/* Premium Informative Footer */}
        <footer className="bg-background text-muted-foreground pt-24 pb-12 border-t border-border" id="contact">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">

            {/* Top Section with 4 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

              {/* Brand Column */}
              <div className="flex flex-col col-span-1 lg:col-span-1">
                <div className="mb-6 w-40 md:w-48 lg:w-56">
                  <img
                    src="/image/logo.png"
                    alt="Anand Mohan Enterprises"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <p className="text-sm font-light leading-relaxed mb-6">
                  Sasaram's leading supplier of premium construction materials. We engineer the foundation of tomorrow's infrastructure with uncompromising quality.
                </p>
              </div>

              {/* Quick Links Column */}
              <div className="flex flex-col gap-4">
                <p className="text-foreground font-display uppercase tracking-widest text-[11px] mb-2">Explore</p>
                <a href="#home" className="hover:text-primary transition-colors text-sm font-light relative w-fit group">
                  Philosophy
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#features" className="hover:text-primary transition-colors text-sm font-light relative w-fit group">
                  Materials
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#reviews" className="hover:text-primary transition-colors text-sm font-light relative w-fit group">
                  Network
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>

              {/* Contact Column */}
              <div className="flex flex-col gap-4">
                <p className="text-foreground font-display uppercase tracking-widest text-[11px] mb-2">Get in Touch</p>

                <div className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-0.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <div className="flex flex-col">
                    <a href="tel:+919934938797" className="text-sm font-light hover:text-foreground transition-colors">+91 9934938797</a>
                    <a href="tel:+918409973038" className="text-sm font-light hover:text-foreground transition-colors">+91 8409973038</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                  <a href="mailto:anandmohan8797@gmail.com" className="text-sm font-light hover:text-foreground transition-colors">anandmohan8797@gmail.com</a>
                </div>
              </div>

              {/* Location Column */}
              <div className="flex flex-col gap-4">
                <p className="text-foreground font-display uppercase tracking-widest text-[11px] mb-2">Headquarters</p>
                <div className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-0.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  <p className="text-sm font-light leading-relaxed">
                    Gaurakshni Arrah Patna Road, <br />
                    Sasaram, Rohtas <br />
                    Bihar - 821115, India
                  </p>
                </div>

                {/* Map Pointer Button */}
                <a
                  href="https://maps.google.com/?q=Anand+Mohan+Enterprises,+Sasaram,+Rohtas,+Bihar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-xs font-display uppercase tracking-widest text-primary hover:text-foreground transition-colors group"
                >
                  <span>Open in Google Maps</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform transition-transform group-hover:translate-x-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </a>
              </div>

            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-[10px] font-display uppercase tracking-widest text-muted-foreground/60">&copy; {new Date().getFullYear()} Anand Mohan Enterprises. All Rights Reserved.</p>

              <div className="flex items-center gap-4">
                {/* Social Icons */}
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
              </div>
            </div>

          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
