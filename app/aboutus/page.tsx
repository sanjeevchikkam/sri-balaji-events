"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { motion } from 'motion/react';
import { Sparkles, Milestone, Users2, Trophy, Clock, Heart, ShieldCheck } from 'lucide-react';

export default function AboutUsSection() {
  const stats = [
    { label: "Years of Crafting Dreams", value: "12+", icon: Clock, description: "Since 2014" },
    { label: "Successful Events Managed", value: "500+", icon: Trophy, description: "Flawless executions" },
    { label: "Happy Client Testimonials", value: "100%", icon: Users2, description: "Delight guaranteed" },
    { label: "Premium Services Offered", value: "15+", icon: Sparkles, description: "Bespoke experiences" }
  ];

  return (
    <section id="aboutus" className="bg-[#0B0B0B] py-20 md:py-28 text-white relative overflow-hidden border-t border-white/5">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Block: Image Showcase representing journey (Layered Dual-Image Collage) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1 mt-8 lg:mt-0" id="about-image-collage">
            {/* Main Background decorative border */}
            <div className="absolute -inset-4 border border-[#D4AF37]/10 rounded-sm pointer-events-none hidden md:block" />

            <div className="relative flex flex-col sm:flex-row gap-6 lg:block h-auto lg:h-[500px]">
              {/* Primary Image: Grand Stage Setup */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative w-full sm:w-2/3 lg:w-[85%] aspect-video sm:aspect-square lg:aspect-[4/5] rounded-sm overflow-hidden border border-[#D4AF37]/20 p-1 bg-black/40 z-10"
              >
                <img
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800"
                  alt="Elegant Grand Stage Decor by Sri Balaji Events"
                  className="w-full h-full object-cover rounded-sm filter brightness-90 hover:brightness-100 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Est. 2014 Badge Overlay */}
                <div className="absolute bottom-4 left-4 bg-[#121212]/90 backdrop-blur-md border border-[#D4AF37]/30 px-4 py-2.5 rounded-sm shadow-xl flex flex-col z-20">
                  <span className="text-[9px] font-mono tracking-[0.2em] text-[#D4AF37] uppercase">Est. Since</span>
                  <span className="text-xl font-serif font-bold text-white tracking-wide mt-0.5">2014</span>
                </div>
              </motion.div>

              {/* Secondary Overlapping Image: Intricate Floral/Candle Detail (Hidden on small mobile, beautiful on tablet & desktop) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden sm:block absolute lg:-bottom-6 lg:-right-4 sm:relative sm:top-12 lg:absolute sm:w-1/3 lg:w-[50%] aspect-square rounded-sm overflow-hidden border border-[#D4AF37]/30 p-1 bg-black/50 shadow-2xl z-20"
              >
                <img
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=500"
                  alt="Exquisite Floral Arrangement details"
                  className="w-full h-full object-cover rounded-sm filter brightness-95 hover:brightness-100 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>

          {/* Right Block: Pure Copy & Dynamic Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start order-1 lg:order-2" id="about-text-content">
            {/* Our Story badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full bg-amber-500/5 border border-amber-500/20 px-3.5 py-1 text-xs font-mono font-bold tracking-[0.2em] text-[#D4AF37] uppercase mb-4"
            >
              <Milestone className="h-3.5 w-3.5" />
              <span>Our Story</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold tracking-tight mb-5 leading-tight text-white text-left"
            >
              From a Humble Beginning to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
                Premium Masterpieces
              </span>
            </motion.h2>

            {/* Corporate Values Tags */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="flex flex-wrap gap-2.5 mb-6"
            >
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-sm bg-white/5 border border-white/10 text-xs font-mono text-white/80">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>100% Reliable Execution</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-sm bg-white/5 border border-white/10 text-xs font-mono text-white/80">
                <Heart className="w-3.5 h-3.5 text-rose-400" />
                <span>Bespoke Customization</span>
              </div>
            </motion.div>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 text-white/80 font-light text-sm md:text-base leading-relaxed mb-8">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Founded in <span className="text-[#D4AF37] font-semibold">2014</span> as a humble, passionate local tent house provider, <span className="text-white font-semibold">Sri Balaji Events</span> embarked on a journey driven by creativity and execution excellence. In those early years, we supported neighborhood celebrations, learning the intricate details of what makes an event genuinely warm and memorable.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Today, we have evolved into South India&apos;s leading full-service premium event management brand. Whether managing magnificent royal stage decors, complex sound box and high-fidelity DJ configurations, waterproof canopy layouts, or candid cinematic coverage—we handle entire celebrations from initial ideation to perfect technical execution.
              </motion.p>
            </div>

            {/* Metrics grid - Glassmorphic high contrast card layout */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full border-t border-white/10 pt-6" id="about-metrics-grid">
              {stats.map((stat, i) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="relative group bg-[#141414]/80 border border-white/5 hover:border-[#D4AF37]/30 p-3 sm:p-4 rounded-sm transition-all duration-300 hover:bg-black/40"
                  >
                    {/* Corner accent decorations */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#D4AF37]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#D4AF37]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="flex items-center gap-2 text-[#D4AF37] mb-1">
                      <div className="p-1.5 bg-[#D4AF37]/5 rounded-sm border border-[#D4AF37]/10 group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/30 transition-all duration-300">
                        <IconComponent className="h-3.5 w-3.5 shrink-0" />
                      </div>
                      <span className="text-xl sm:text-2xl md:text-3xl font-serif font-bold tracking-tight text-white">
                        {stat.value}
                      </span>
                    </div>
                    
                    <div className="flex flex-col mt-1">
                      <span className="text-[10px] font-mono tracking-wider text-white/90 font-medium uppercase leading-tight">
                        {stat.label}
                      </span>
                      <span className="text-[9px] font-mono text-white/40 mt-0.5">
                        {stat.description}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
