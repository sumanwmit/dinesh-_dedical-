import React from 'react';
import { 
  Phone, MessageSquare, MapPin, Clock, Mail, ShieldAlert, Navigation, 
  Send, ExternalLink, CheckCircle2, HeartPulse, Building 
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { QuickInquiryForm } from '../components/QuickInquiryForm';

interface ContactProps {
  onOpenWhatsAppModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenWhatsAppModal }) => {
  return (
    <>
      <SEO 
        title="Contact Us & Directions | Dinesh Medical Hall Jehanabad"
        description="Get store address, phone numbers, working hours, and Google Maps location for Dinesh Medical Hall at Hospital Mor, Jehanabad, Bihar 804408. Call +91 79034 30774."
      />

      <div className="bg-slate-50 dark:bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Breadcrumbs items={[{ name: 'Contact & Location', path: '/contact' }]} />

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>Hospital Mor, Jehanabad, Bihar 804408</span>
            </span>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Contact Dinesh Medical Hall
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              We are situated right near Sadar Hospital, Jehanabad. Contact us by phone, WhatsApp, or visit our store directly.
            </p>
          </div>

          {/* Quick Action Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            
            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Phone Helpline</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Direct phone support for medicine inquiries and hospital orders.
              </p>
              <a
                href="tel:+917903430774"
                className="inline-flex items-center space-x-2 font-bold text-emerald-600 dark:text-emerald-400 text-sm hover:underline"
              >
                <span>+91 79034 30774</span>
              </a>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">WhatsApp Prescription</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Send a photo of your prescription for immediate quote and packing.
              </p>
              <button
                onClick={onOpenWhatsAppModal}
                className="inline-flex items-center space-x-2 font-bold text-emerald-600 dark:text-emerald-400 text-sm hover:underline cursor-pointer"
              >
                <span>WhatsApp: 7903430774</span>
              </button>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Store Operating Hours</h3>
              <div className="text-xs text-slate-600 dark:text-slate-300 space-y-0.5">
                <div><strong>Mon - Sat:</strong> 7:30 AM - 10:00 PM</div>
                <div><strong>Sunday:</strong> 8:00 AM - 9:30 PM</div>
              </div>
            </div>

          </div>

          {/* Emergency Notice Section */}
          <div className="bg-gradient-to-r from-red-600 to-rose-700 text-white p-6 sm:p-8 rounded-3xl mb-16 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-md shrink-0">
                <HeartPulse className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Urgent Hospital Medicine Assistance</h3>
                <p className="text-xs text-red-100 mt-1 max-w-xl">
                  If you are attending a patient at Sadar Hospital Jehanabad and need immediate prescription medicines, call us directly or click below to message on WhatsApp.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3 shrink-0">
              <a
                href="tel:+917903430774"
                className="px-5 py-3 bg-white text-red-700 font-extrabold text-xs rounded-xl shadow hover:bg-slate-100 transition"
              >
                Emergency Call Now
              </a>
              <button
                onClick={onOpenWhatsAppModal}
                className="px-5 py-3 bg-red-950 text-white font-extrabold text-xs rounded-xl shadow hover:bg-red-900 transition cursor-pointer"
              >
                WhatsApp Order
              </button>
            </div>
          </div>

          {/* Map & Form Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
            
            {/* Left: Store Details & Google Map */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Store Address & Directions</h3>
                
                <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex items-start space-x-3">
                    <Building className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">Dinesh Medical Hall</div>
                      <div>hospital mor, Jehanabad, Bihar 804408</div>
                      <div className="text-xs text-slate-500 mt-0.5">Landmark: Opposite / Near Sadar Hospital Gate</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>WhatsApp / Mobile: +91 79034 30774</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://maps.google.com/?q=Dinesh+Medical+Hall+Hospital+Mor+Jehanabad+Bihar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center justify-center space-x-2 transition shadow"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Get Directions on Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Interactive Map Embed */}
              <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg bg-white dark:bg-slate-900 p-2">
                <iframe
                  title="Google Maps Location - Dinesh Medical Hall Jehanabad"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.123!2d84.987!3d25.213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzQ2LjgiTiA4NMK1NTknMTMuMiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  className="rounded-2xl"
                ></iframe>
              </div>

            </div>

            {/* Right: Quick Inquiry Form Component */}
            <div className="lg:col-span-6">
              <QuickInquiryForm />
            </div>

          </div>

        </div>
      </div>
    </>
  );
};
