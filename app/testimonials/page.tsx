"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  location: string;
  role: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Srinivas Rao",
    location: "Hyderabad",
    role: "Wedding Client",
    text: "The wedding decoration was absolutely grand! The floral entrance and stage design exceeded our expectations. Sri Balaji Events made our special day magical.",
    rating: 5
  },
  {
    name: "Anitha Reddy",
    location: "Guntur",
    role: "Reception Setup",
    text: "Excellent stage setup and premium lighting for my daughter's reception. Extremely professional team and timely execution. High attention to detail.",
    rating: 5
  },
  {
    name: "Ravi Kumar",
    location: "Vijayawada",
    role: "Birthday Event",
    text: "Booked them for my son's first birthday. The balloon decoration and entrance setup were very attractive and creative. The kids loved it!",
    rating: 5
  },
  {
    name: "Swapna Chowdary",
    location: "Vizag",
    role: "Sangeet Night",
    text: "Outstanding DJ and Sound system setup! The sound quality was crystal clear and kept everyone on the dance floor. Highly recommended for any grand event!",
    rating: 5
  },
  {
    name: "Satish Naidu",
    location: "Nellore",
    role: "Family Gathering",
    text: "Very reliable tent house and seating arrangements. We didn't have to worry about a single thing. They handled the entire custom setup flawlessly.",
    rating: 5
  },
  {
    name: "Lakshmi Prasanna",
    location: "Secunderabad",
    role: "Anniversary Event",
    text: "Stunning stage decoration. The traditional theme was executed exactly as we requested. It looked extremely elegant and was perfect for pictures.",
    rating: 5
  },
  {
    name: "Kalyan Chakravarthy",
    location: "Khammam",
    role: "Traditional Ceremony",
    text: "We hired them for our housewarming function. The marigold floral work was beautifully done and gave a rich, premium look. Absolutely satisfied!",
    rating: 5
  }
];

export default function TestimonialsSection() {
  // Duplicate list to achieve a seamless infinite loop scrolling effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="bg-[#0B0B0B] py-20 md:py-28 text-white relative overflow-hidden border-t border-white/5">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] bg-[#D4AF37]/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] bg-[#D4AF37]/3 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10 text-center mb-12">
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full bg-amber-500/5 border border-amber-500/20 px-3.5 py-1 text-xs font-mono font-bold tracking-[0.2em] text-[#D4AF37] uppercase mb-4"
        >
          <Sparkles className="h-3.5 w-3.5" />
          <span>Testimonials</span>
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold tracking-tight text-white leading-tight"
        >
          Loved by Families,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
            Trusted by Thousands
          </span>
        </motion.h2>
        <p className="text-xs font-mono text-[#D4AF37] tracking-wider uppercase mt-3">
          Real feedback from our beautiful celebrations
        </p>
      </div>

      {/* Infinite Horizontal Scrolling Marquee */}
      <div className="relative w-full overflow-hidden py-4 select-none" id="testimonials-marquee-container">
        {/* Left & Right gradient masks for a smooth fade off screen edge */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#0B0B0B] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#0B0B0B] to-transparent z-20 pointer-events-none" />

        <div className="flex w-max">
          <motion.div
            animate={{ x: [0, "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              },
            }}
            className="flex gap-6 pr-6"
          >
            {duplicatedTestimonials.map((t, idx) => (
              <div
                key={`${t.name}-${idx}`}
                className="w-[290px] sm:w-[350px] shrink-0 bg-[#121212] border border-white/5 hover:border-[#D4AF37]/35 p-6 rounded-sm relative group transition-all duration-300 hover:bg-[#151515] flex flex-col justify-between"
              >
                {/* Gold corner accents on card hover */}
                <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#D4AF37]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[#D4AF37]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Card Header with Rating and Icon */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex gap-1 text-[#D4AF37]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-white/10 group-hover:text-[#D4AF37]/20 transition-colors duration-300" />
                </div>

                {/* Testimonial Text */}
                <p className="text-white/80 font-light text-xs sm:text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Customer Details */}
                <div className="border-t border-white/5 pt-4 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-serif font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                      {t.name}
                    </h4>
                    <p className="text-[10px] font-mono text-[#D4AF37] tracking-wider uppercase mt-0.5">
                      {t.role}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-white/30 bg-white/5 px-2.5 py-1 rounded-sm border border-white/5">
                    {t.location}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
