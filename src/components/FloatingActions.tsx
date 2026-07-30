import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';

interface FloatingActionsProps {
  onOpenWhatsAppModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenWhatsAppModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3 pointer-events-none">
      
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          id="back-to-top-btn"
          onClick={scrollToTop}
          className="pointer-events-auto p-3 rounded-full bg-slate-900 text-white shadow-lg hover:bg-slate-800 transition transform hover:scale-110 focus:outline-none"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        id="floating-call-btn"
        href="tel:+917903430774"
        className="pointer-events-auto p-3.5 rounded-full bg-emerald-700 text-white shadow-xl hover:bg-emerald-800 transition transform hover:scale-110 flex items-center justify-center group"
        aria-label="Call Store Directly"
        title="Call Dinesh Medical Hall (+91 79034 30774)"
      >
        <Phone className="w-6 h-6 animate-pulse" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold pl-0 group-hover:pl-2">
          Call 7903430774
        </span>
      </a>

      {/* Floating WhatsApp Order Button */}
      <button
        id="floating-whatsapp-btn"
        onClick={onOpenWhatsAppModal}
        className="pointer-events-auto px-4 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xl flex items-center space-x-2 transition transform hover:scale-105 cursor-pointer border-2 border-emerald-400/30"
        aria-label="Order on WhatsApp"
      >
        <div className="relative">
          <MessageSquare className="w-6 h-6 fill-current" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-emerald-600 animate-ping" />
        </div>
        <span className="font-bold text-sm hidden sm:inline">WhatsApp Medicine Order</span>
        <span className="font-bold text-xs sm:hidden">WhatsApp</span>
      </button>

    </div>
  );
};
