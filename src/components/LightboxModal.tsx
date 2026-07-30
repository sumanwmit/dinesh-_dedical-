import React from 'react';
import { X, ZoomIn, MessageSquare, Phone } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onOpenWhatsAppModal: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose, onOpenWhatsAppModal }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-800 transition"
          aria-label="Close image lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Image Display */}
        <div className="flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px]">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-contain max-h-[70vh]"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Details Sidebar */}
        <div className="w-full md:w-80 p-6 bg-slate-900 flex flex-col justify-between border-t md:border-t-0 md:border-l border-slate-800 text-slate-200">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 uppercase tracking-wider mb-3">
              {item.category}
            </span>
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              {item.caption}
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-slate-800">
            <button
              onClick={() => { onClose(); onOpenWhatsAppModal(); }}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm flex items-center justify-center space-x-2 transition"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire This Item</span>
            </button>

            <a
              href="tel:+917903430774"
              className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-xl text-sm flex items-center justify-center space-x-2 transition"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call Store (+91 79034 30774)</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
