"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { motion } from 'motion/react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function ServicesSection(props: any) {
  const onGetQuote = props?.onGetQuote;
  const services = [
    {
      name: "Event Decoration",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=600",
      points: [
        "Theme-based custom design concepts",
        "Entrance arch & passage installations",
        "Premium fabric draping & lighting effects"
      ]
    },
    {
      name: "Wedding Decoration",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600",
      points: [
        "Royal mandap setup & stage decoration",
        "Grand floral installations & walkthroughs",
        "Traditional & modern fusion themes"
      ]
    },
    {
      name: "Birthday Decoration",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=600",
      points: [
        "Creative theme parties & backdrops",
        "Customized cake table arrangements",
        "Fun-filled interactive setups"
      ]
    },
    {
      name: "Reception Setup",
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=600",
      points: [
        "Contemporary luxurious stages",
        "Intelligent ambient & mood lighting",
        "Elegant photo-booths & lounge areas"
      ]
    },
    {
      name: "Photography & Videography",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=600",
      points: [
        "Candid wedding & event photography",
        "Cinematic high-definition wedding films",
        "Pre-wedding & post-wedding shoots"
      ]
    },
    {
      name: "DJ",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=600",
      points: [
        "Professional high-energy event DJs",
        "Curated playlists for every celebration",
        "Interactive crowd control & coordination"
      ]
    },
    {
      name: "Sound Box",
      image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=600",
      points: [
        "High-fidelity professional sound systems",
        "Clear sound distribution for all venues",
        "Reliable technical operators on-site"
      ]
    },
    {
      name: "Balloon Decoration",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=600",
      points: [
        "Premium balloon arches & columns",
        "Theme-based customized color palettes",
        "Helium & floating balloon concepts"
      ]
    },
    {
      name: "Stage Decoration",
      image: "https://images.unsplash.com/photo-1478812954026-9c750f0e89fc?auto=format&fit=crop&q=80&w=600",
      points: [
        "Grand VIP stage backdrop setups",
        "Intricate fresh flower styling",
        "LED wall integration & paneling"
      ]
    },
    {
      name: "Tent House",
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=600",
      points: [
        "Sturdy waterproof layouts & canopies",
        "Comfortable luxury chair & sofa rentals",
        "Premium carpets & floor arrangements"
      ]
    },
    {
      name: "All Type of Events",
      image: "https://images.unsplash.com/photo-1505232458627-53744612f913?auto=format&fit=crop&q=80&w=600",
      points: [
        "Corporate, cultural, & public gatherings",
        "Housewarmings, half-saree & cradle events",
        "Complete end-to-end event execution"
      ]
    }
  ];

  return (
    <section id="services" className="bg-[#121212] py-24 text-white relative overflow-hidden">
      {/* Soft Gold Ambient Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 text-xs font-mono font-bold tracking-[0.2em] text-[#D4AF37] uppercase mb-4"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Our Services</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif font-bold tracking-tight mb-4 text-white"
          >
            Exquisite Offerings for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
              Every Celebration
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#E5E5E5]/70 font-light text-sm md:text-base leading-relaxed"
          >
            From small intimate family gatherings to grand multi-day luxury weddings, we offer comprehensive services to execute your dream event to perfection.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group bg-neutral-900/60 border border-white/5 rounded-sm overflow-hidden hover:border-[#D4AF37]/30 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)] flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-neutral-950">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-80" />
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md border border-white/10 px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]">
                  Premium
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-serif font-bold text-white mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">
                    {service.name}
                  </h3>
                  
                  {/* Points */}
                  <ul className="space-y-2.5">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-xs text-[#E5E5E5]/80 font-light leading-relaxed">
                        <CheckCircle2 className="h-4 w-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5">
                  <button
                    onClick={(e) => {
                      if (onGetQuote) {
                        e.preventDefault();
                        onGetQuote(service.name);
                      } else {
                        const rawMessage = `Hello Sri Balaji Events,\n\nI am interested in booking your service: ${service.name}.\n\nPlease share your pricing packages and current availability.\n\nThank you!`;
                        const url = `https://wa.me/916309675689?text=${encodeURIComponent(rawMessage)}`;
                        window.open(url, '_blank', 'noopener,noreferrer');
                      }
                    }}
                    className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] hover:text-white transition-colors flex items-center gap-1 cursor-pointer bg-transparent border-none p-0"
                  >
                    <span>Enquire Package</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
