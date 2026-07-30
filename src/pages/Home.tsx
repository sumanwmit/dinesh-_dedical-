import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, MessageSquare, MapPin, ShieldCheck, HeartPulse, Clock, ArrowRight, 
  CheckCircle2, Pill, Search, Stethoscope, Star, ChevronDown, ChevronUp, Sparkles, AlertCircle
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { serviceCategories } from '../data/services';
import { featuredProducts } from '../data/products';
import { faqsList } from '../data/faqs';
import { healthTipsList } from '../data/healthTips';
import { MedicineStockChecker } from '../components/MedicineStockChecker';

interface HomeProps {
  onOpenWhatsAppModal: (prefilledMed?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenWhatsAppModal }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Take first 6 services for preview as required
  const homeServicesPreview = serviceCategories.slice(0, 6);
  // Take first 4 FAQs for preview
  const homeFaqsPreview = faqsList.slice(0, 4);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
        setSubscribed(false);
      }, 3500);
    }
  };

  return (
    <>
      <SEO 
        title="Dinesh Medical Hall | Genuine Medicines & Healthcare in Jehanabad"
        description="Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care and daily medical essentials at affordable prices at Hospital Mor, Jehanabad."
      />

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white overflow-hidden py-16 lg:py-24">
        {/* Background Overlay Graphic */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Local Trust Badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Hospital Mor, Jehanabad • 100% Authentic Pharmaceuticals</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Your Trusted Partner for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">Genuine Medicines</span> & Healthcare Needs
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care and daily medical essentials at affordable prices.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  id="hero-call-now-btn"
                  href="tel:+917903430774"
                  className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm sm:text-base shadow-xl shadow-emerald-500/20 flex items-center space-x-2 transition transform hover:-translate-y-0.5"
                >
                  <Phone className="w-5 h-5 fill-current" />
                  <span>Call Now (+91 79034 30774)</span>
                </a>

                <button
                  id="hero-whatsapp-order-btn"
                  onClick={() => onOpenWhatsAppModal()}
                  className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm sm:text-base border border-slate-700 shadow-lg flex items-center space-x-2 transition transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5 text-emerald-400" />
                  <span>WhatsApp Order</span>
                </button>

                <a
                  id="hero-get-directions-btn"
                  href="https://maps.google.com/?q=Dinesh+Medical+Hall+Hospital+Mor+Jehanabad+Bihar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 font-semibold text-sm backdrop-blur-md flex items-center space-x-2 transition"
                >
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Key Trust Stats */}
              <div className="pt-6 border-t border-slate-800 grid grid-cols-3 gap-4 text-xs text-slate-400">
                <div>
                  <div className="text-white font-black text-lg sm:text-2xl">100%</div>
                  <div>Genuine Drugs</div>
                </div>
                <div>
                  <div className="text-white font-black text-lg sm:text-2xl">Cold-Chain</div>
                  <div>Insulin Storage</div>
                </div>
                <div>
                  <div className="text-white font-black text-lg sm:text-2xl">Fast Pickup</div>
                  <div>Near Sadar Hospital</div>
                </div>
              </div>

            </div>

            {/* Right Feature Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-800/80 group">
                <img
                  src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=800&q=80"
                  alt="Dinesh Medical Hall Front Store Jehanabad"
                  className="w-full h-[380px] sm:h-[420px] object-cover group-hover:scale-105 transition duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/90 text-slate-950 text-[11px] font-black uppercase tracking-wider">
                    Hospital Mor Store
                  </span>
                  <h3 className="text-xl font-bold text-white">Dinesh Medical Hall</h3>
                  <p className="text-xs text-slate-300">
                    Located opposite/near Sadar Hospital, Jehanabad, Bihar 804408. Ready for emergency & daily family medicine needs.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Short About Preview */}
      <section className="py-16 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=800&q=80"
                alt="Pharmacist at Dinesh Medical Hall"
                className="rounded-3xl shadow-xl object-cover h-[340px] sm:h-[400px] w-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 hidden sm:flex bg-emerald-600 text-white p-6 rounded-2xl shadow-xl space-x-4 max-w-xs items-center">
                <HeartPulse className="w-10 h-10 text-emerald-200 shrink-0" />
                <div>
                  <div className="font-extrabold text-base">Serving Jehanabad</div>
                  <div className="text-xs text-emerald-100">Trusted by thousands of local families</div>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <div className="inline-flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <Pill className="w-4 h-4" />
                <span>About Dinesh Medical Hall</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Jehanabad's Premier Pharmacy for Authentic Care
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Situated prominently at <strong>Hospital Mor, Jehanabad</strong>, Dinesh Medical Hall is dedicated to providing genuine prescription medicines, OTC remedies, healthcare devices, and surgical essentials to patients visiting Sadar Hospital and local households across Bihar.
              </p>

              <ul className="space-y-2.5 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Direct sourcing from GSK, Sun Pharma, Cipla, Mankind & Abbott</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Strict cold-chain storage for insulin, vaccines, and eye drops</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Quick prescription ordering via WhatsApp (+91 79034 30774)</span>
                </li>
              </ul>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-2 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition"
                >
                  <span>Read Full About Story & History</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services (Maximum 6) */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              Comprehensive Medical Solutions
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured Healthcare Services
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Explore our core medical categories and specialized health services at Hospital Mor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeServicesPreview.map((service) => (
              <div 
                key={service.id}
                className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-emerald-600 text-white p-2 rounded-xl shadow-md">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => onOpenWhatsAppModal(service.title)}
                    className="w-full py-2.5 px-4 bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-600 hover:text-white text-emerald-700 dark:text-emerald-300 text-xs font-bold rounded-xl transition flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire / Order Category</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View More Services Button */}
          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition"
            >
              <span>View All Medical Services & Live Stock Checker</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* Live Inventory Stock Checker Component Embedded on Home */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MedicineStockChecker onOrderClick={(medName) => onOpenWhatsAppModal(medName)} />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">
              Patient First Commitment
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Why Choose Dinesh Medical Hall?
            </h2>
            <p className="text-slate-400 text-sm">
              We prioritize patient safety, genuine medicines, fair pricing, and compassionate pharmacist advice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-800/60 rounded-3xl border border-slate-700/60 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">100% Authentic Products</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Every batch is direct from official pharmaceutical channels with verified serial numbers and expiration dates.
              </p>
            </div>

            <div className="p-6 bg-slate-800/60 rounded-3xl border border-slate-700/60 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Prime Hospital Mor Location</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Located right opposite Sadar Hospital, Jehanabad, saving precious time during emergency patient requirements.
              </p>
            </div>

            <div className="p-6 bg-slate-800/60 rounded-3xl border border-slate-700/60 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Controlled Cold Storage</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Uncompromised refrigeration for insulins, vaccines, and biologics with 24/7 power backup.
              </p>
            </div>

            <div className="p-6 bg-slate-800/60 rounded-3xl border border-slate-700/60 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">WhatsApp Order Dispatch</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Send a prescription photo to 7903430774 and have your medicines packed without waiting in long store queues.
              </p>
            </div>

            <div className="p-6 bg-slate-800/60 rounded-3xl border border-slate-700/60 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Expert Pharmacist Advice</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Our registered pharmacist explains proper dosage, dietary instructions, and potential drug interactions.
              </p>
            </div>

            <div className="p-6 bg-slate-800/60 rounded-3xl border border-slate-700/60 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Transparent Fair MRP</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Fair standard pricing on all healthcare essentials, surgical equipment, and baby care formulas.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                Popular Healthcare Essentials
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
                Featured Medical Products
              </h2>
            </div>
            <Link
              to="/services"
              className="mt-3 md:mt-0 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center space-x-1"
            >
              <span>Explore All Stock Items</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((prod) => (
              <div 
                key={prod.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-100 dark:border-slate-800 shadow-md hover:shadow-lg transition flex flex-col justify-between"
              >
                <div>
                  <div className="relative rounded-2xl overflow-hidden h-48 bg-slate-100 dark:bg-slate-800 mb-4">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    {prod.tag && (
                      <span className="absolute top-3 left-3 bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                        {prod.tag}
                      </span>
                    )}
                  </div>

                  <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                    {prod.category} • {prod.brand}
                  </span>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1 mb-2 line-clamp-2">
                    {prod.name}
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-4">
                    {prod.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-400 line-through">MRP ₹{prod.mrp}</div>
                    <div className="text-lg font-black text-slate-900 dark:text-white">
                      ₹{prod.discountPrice}
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenWhatsAppModal(prod.name)}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl shadow-sm flex items-center space-x-1.5 transition cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Order</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Customer Reviews Preview */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              Community Trust
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Feedback From Jehanabad Residents
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs">
              Natural summary of public customer feedback regarding our prompt hospital vicinity service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-800 space-y-3">
              <div className="flex text-amber-400 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 italic leading-relaxed">
                "Extremely helpful store right at Hospital Mor. When my family member needed urgent surgical supplies for Sadar Hospital, Dinesh Medical Hall packed everything instantly."
              </p>
              <div className="text-xs font-bold text-slate-900 dark:text-white">
                — Verified Local Patient Relative
              </div>
            </div>

            <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-800 space-y-3">
              <div className="flex text-amber-400 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 italic leading-relaxed">
                "I regularly order my father’s diabetes medicines and insulin pens on WhatsApp (+91 79034 30774). They maintain genuine cold chain storage and fair prices."
              </p>
              <div className="text-xs font-bold text-slate-900 dark:text-white">
                — Chronic Care Customer, Jehanabad
              </div>
            </div>

            <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-800 space-y-3">
              <div className="flex text-amber-400 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 italic leading-relaxed">
                "Very polite pharmacist staff. They explain medicine timing clearly and always provide computerized bills for genuine company drugs."
              </p>
              <div className="text-xs font-bold text-slate-900 dark:text-white">
                — Local Resident, Bihar 804408
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10 space-y-2">
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Questions About Medicines & WhatsApp Orders
            </h2>
          </div>

          <div className="space-y-4">
            {homeFaqsPreview.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between space-x-4 font-bold text-slate-900 dark:text-white text-sm sm:text-base cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-emerald-600 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/contact"
              className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center space-x-1"
            >
              <span>Have More Questions? Contact Our Store Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-700 via-teal-800 to-emerald-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Need Urgent Prescription Medicines in Jehanabad?
          </h2>
          <p className="text-emerald-100 text-sm sm:text-base max-w-2xl mx-auto">
            Send your prescription photo directly to our pharmacist via WhatsApp (+91 79034 30774) or call us for priority pickup at Hospital Mor.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenWhatsAppModal()}
              className="px-8 py-4 bg-white text-emerald-900 font-extrabold rounded-2xl shadow-xl hover:bg-emerald-50 transition cursor-pointer flex items-center space-x-2 text-sm"
            >
              <MessageSquare className="w-5 h-5 text-emerald-600" />
              <span>Send Prescription on WhatsApp</span>
            </button>

            <a
              href="tel:+917903430774"
              className="px-8 py-4 bg-emerald-950/60 hover:bg-emerald-950 text-white font-bold rounded-2xl border border-emerald-400/30 transition flex items-center space-x-2 text-sm"
            >
              <Phone className="w-5 h-5 text-emerald-400" />
              <span>Call +91 79034 30774</span>
            </a>
          </div>
        </div>
      </section>

      {/* Latest Health Tips Preview */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                Health Guidance
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Latest Health & Medicine Tips
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {healthTipsList.map((tip) => (
              <div
                key={tip.id}
                className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 flex flex-col justify-between p-5 space-y-3"
              >
                <div>
                  <div className="h-40 rounded-2xl overflow-hidden mb-3">
                    <img
                      src={tip.image}
                      alt={tip.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    {tip.category} • {tip.readTime}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1 mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {tip.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-slate-700/60 text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Published: {tip.date}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-slate-100 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            Subscribe for Local Health & Medicine Stock Updates
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            Get notified about seasonal medicine availability, health camps, and diagnostic device discounts at Hospital Mor.
          </p>

          {subscribed ? (
            <div className="p-3 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 text-xs font-bold rounded-xl max-w-md mx-auto">
              ✓ Thank you! You have subscribed for health alerts.
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email or phone"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 dark:bg-slate-900 text-slate-900 dark:text-white text-sm outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm transition shrink-0"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
};
