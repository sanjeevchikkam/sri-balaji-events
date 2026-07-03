"use client";

import { useState } from 'react';
import Header from "./header/page";
import Hero from "./hero/page";
import Services from "./services/page";
import AboutUs from "./aboutus/page";
import Footer from "./footer/page";
import QuoteModal from "./quotemodal/page";
import ProjectsSection from "./ourwork/page"

export default function Home() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleGetQuote = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    } else {
      setSelectedService('');
    }
    setIsQuoteOpen(true);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#0B0B0B]">
      {/* Navigation Header */}
      <Header onGetQuote={() => handleGetQuote()} />

      {/* Main content stage */}
      <main className="flex-1">
        <Hero onGetQuote={() => handleGetQuote()} />
        <Services onGetQuote={(service: string) => handleGetQuote(service)} />
        <ProjectsSection/>
        <AboutUs />
      </main>

      {/* Page Footer */}
      <Footer />

      {/* Quote Modal */}
      <QuoteModal 
        isOpen={isQuoteOpen} 
        onClose={() => setIsQuoteOpen(false)} 
        initialService={selectedService} 
      />
    </div>
  );
}


