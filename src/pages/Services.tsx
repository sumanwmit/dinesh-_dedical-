import React, { useState } from 'react';
import { 
  Pill, Stethoscope, ShieldAlert, Syringe, HeartHandshake, Activity, Sparkles, 
  MessageSquare, CheckCircle2, Phone, Search, ArrowRight 
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { serviceCategories } from '../data/services';
import { MedicineStockChecker } from '../components/MedicineStockChecker';

interface ServicesProps {
  onOpenWhatsAppModal: (prefilledMed?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenWhatsAppModal }) => {
  const [activeTab, setActiveTab] = useState<'checker' | 'catalog'>('checker');

  return (
    <>
      <SEO 
        title="Healthcare Services & Medicine Stock Checker | Dinesh Medical Hall"
        description="Search medicine inventory live at Dinesh Medical Hall, Hospital Mor, Jehanabad. Explore prescription drugs, surgical supplies, health monitors, baby care & order on WhatsApp."
      />

      <div className="bg-slate-50 dark:bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Breadcrumbs items={[{ name: 'Services & Medicine Stock', path: '/services' }]} />

          {/* Header Banner */}
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
            <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <Stethoscope className="w-4 h-4" />
              <span>Comprehensive Pharmacy Catalog</span>
            </span>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Medical Services & Live Stock Checker
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              Instantly check medicine availability in our database or browse our complete healthcare product categories available at Hospital Mor, Jehanabad.
            </p>
          </div>

          {/* Quick Toggle Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1.5 bg-slate-200 dark:bg-slate-800 rounded-2xl">
              <button
                onClick={() => setActiveTab('checker')}
                className={`px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition flex items-center space-x-2 cursor-pointer ${
                  activeTab === 'checker'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Search className="w-4 h-4" />
                <span>Medicine Stock Checker</span>
              </button>

              <button
                onClick={() => setActiveTab('catalog')}
                className={`px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition flex items-center space-x-2 cursor-pointer ${
                  activeTab === 'catalog'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Pill className="w-4 h-4" />
                <span>Service Categories ({serviceCategories.length})</span>
              </button>
            </div>
          </div>

          {/* Tab 1: Exclusive Medicine Stock Checker Component */}
          {activeTab === 'checker' && (
            <div className="mb-16">
              <MedicineStockChecker onOrderClick={(medName) => onOpenWhatsAppModal(medName)} />
            </div>
          )}

          {/* Tab 2: Detailed Service Catalog */}
          <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Category-Wise Medical Services
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Detailed descriptions and features for every health essential category.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceCategories.map((service) => (
                <div
                  key={service.id}
                  className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-56">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="px-3 py-1 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-black uppercase tracking-wider">
                          Dinesh Medical Hall
                        </span>
                        <h3 className="text-xl font-bold text-white mt-1">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {service.fullDesc}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                        <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                          Key Highlights:
                        </div>
                        <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                          {service.keyFeatures.map((feat, idx) => (
                            <li key={idx} className="flex items-center space-x-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Card CTA */}
                  <div className="p-6 pt-0 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onOpenWhatsAppModal(service.title)}
                      className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow transition flex items-center justify-center space-x-1.5 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Order This Category</span>
                    </button>

                    <a
                      href="tel:+917903430774"
                      className="p-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl transition"
                      title="Call Store Pharmacist"
                    >
                      <Phone className="w-4 h-4 text-emerald-600" />
                    </a>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Quick Help Box */}
          <div className="mt-16 bg-slate-900 text-white p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-xl font-bold text-white">Can't Find Your Prescribed Medicine?</h3>
              <p className="text-xs text-slate-400 max-w-xl">
                Our inventory includes over 5,000+ formulations at Hospital Mor. Send us your prescription photo on WhatsApp for instant confirmation.
              </p>
            </div>
            <button
              onClick={() => onOpenWhatsAppModal()}
              className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg transition shrink-0 cursor-pointer flex items-center space-x-2"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp Prescription (7903430774)</span>
            </button>
          </div>

        </div>
      </div>
    </>
  );
};
