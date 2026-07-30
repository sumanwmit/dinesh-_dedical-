import React, { useState, useMemo } from 'react';
import { Camera, ZoomIn, MessageSquare, Filter, Building } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { galleryItems } from '../data/galleryData';
import { GalleryItem } from '../types';
import { LightboxModal } from '../components/LightboxModal';

interface GalleryProps {
  onOpenWhatsAppModal: () => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenWhatsAppModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Store Photos' },
    { id: 'store', label: 'Store Front & Interior' },
    { id: 'shelves', label: 'Medicine Shelves & Cold Storage' },
    { id: 'devices', label: 'Health Devices & Equipment' },
    { id: 'products', label: 'Baby & OTC Products' },
    { id: 'surgical', label: 'Surgical Supplies' },
  ];

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') return galleryItems;
    return galleryItems.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <SEO 
        title="Store Gallery & Facilities | Dinesh Medical Hall Jehanabad"
        description="Explore store photos, medicine shelves, cold storage units, and medical devices display at Dinesh Medical Hall, Hospital Mor, Jehanabad, Bihar."
      />

      <div className="bg-slate-50 dark:bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Breadcrumbs items={[{ name: 'Store Gallery', path: '/gallery' }]} />

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <Camera className="w-4 h-4" />
              <span>Dinesh Medical Hall Visual Tour</span>
            </span>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Store Gallery & Facilities
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              Take a virtual walkthrough of our modern medical store, organized prescription counters, and temperature-controlled storage at Hospital Mor, Jehanabad.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Gallery Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveLightboxItem(item)}
                className="group relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl transition cursor-pointer flex flex-col justify-between"
              >
                <div className="relative h-64 overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <div className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white">
                      <ZoomIn className="w-6 h-6" />
                    </div>
                  </div>

                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-emerald-600/90 text-white text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Zoom Component */}
          <LightboxModal
            item={activeLightboxItem}
            onClose={() => setActiveLightboxItem(null)}
            onOpenWhatsAppModal={onOpenWhatsAppModal}
          />

          {/* Location CTA Banner */}
          <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white p-8 rounded-3xl text-center space-y-4 shadow-xl">
            <h3 className="text-2xl font-bold">Visit Our Store Front at Hospital Mor</h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
              Open 7 Days a week for all your healthcare requirements. Located right opposite/near Sadar Hospital, Jehanabad, Bihar 804408.
            </p>
            <div className="pt-2">
              <a
                href="https://maps.google.com/?q=Dinesh+Medical+Hall+Hospital+Mor+Jehanabad+Bihar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold text-xs rounded-xl shadow transition"
              >
                <Building className="w-4 h-4" />
                <span>Open Google Maps Directions</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
