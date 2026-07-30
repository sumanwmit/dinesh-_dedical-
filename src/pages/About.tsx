import React from 'react';
import { 
  Pill, ShieldCheck, Heart, Award, Clock, MapPin, CheckCircle2, 
  Sparkles, Stethoscope, Building, Users, Calendar, Phone, MessageSquare 
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface AboutProps {
  onOpenWhatsAppModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenWhatsAppModal }) => {
  return (
    <>
      <SEO 
        title="About Us | Dinesh Medical Hall - Pharmacy in Jehanabad"
        description="Learn about Dinesh Medical Hall, located at Hospital Mor, Jehanabad, Bihar. Our story, mission, vision, owner message, and dedication to 100% genuine pharmaceuticals."
      />

      <div className="bg-slate-50 dark:bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Breadcrumbs items={[{ name: 'About Us', path: '/about' }]} />

          {/* Header Hero */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <Pill className="w-4 h-4" />
              <span>Established & Trusted in Jehanabad</span>
            </span>
            
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              About Dinesh Medical Hall
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              Serving patients and healthcare seekers at <strong>Hospital Mor, Jehanabad, Bihar</strong> with unwavering integrity, cold-chain temperature control, and genuine pharma supplies.
            </p>
          </div>

          {/* Business Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <Building className="w-4 h-4" />
                <span>Our Heritage & Origin</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Rooted in Community Health at Hospital Mor
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Dinesh Medical Hall was established with a singular focus: to solve the challenge of counterfeit and delayed medicines for patients attending <strong>Sadar Hospital Jehanabad</strong> and surrounding areas.
              </p>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Over the years, we have built a state-of-the-art inventory management setup featuring dedicated temperature-controlled units for insulins, vaccines, and biologics, ensuring that every vial or tablet handed to our patients retains 100% therapeutic efficacy.
              </p>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="font-bold text-slate-900 dark:text-white text-sm">
                  ✓ Direct Authorizations
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Authorized retailers for leading ethical pharmaceutical giants: GSK, Sun Pharma, Cipla, Mankind, Abbott, Roche, and FDC.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=800&q=80"
                alt="Dinesh Medical Hall Store Counter"
                className="rounded-3xl shadow-2xl object-cover h-[400px] w-full"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                To guarantee 100% access to authentic, batch-verified prescription medicines and surgical supplies at fair prices for every family in Jehanabad without delay.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                To be Jehanabad’s most reliable, tech-enabled healthcare pharmacy, bridging emergency hospital needs with seamless WhatsApp ordering and patient guidance.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Core Values</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Patient First Safety, Zero Counterfeits, Transparency in Billing, Continuous Pharmacist Counseling, and Prompt Local Responsiveness.
              </p>
            </div>

          </div>

          {/* Owner / Pharmacist Message */}
          <div className="bg-gradient-to-r from-slate-900 to-teal-950 text-white rounded-3xl p-8 sm:p-12 mb-20 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                  Owner & Registered Pharmacist Message
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  "Your Health & Peace of Mind Are Our Highest Duty"
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "At Dinesh Medical Hall, we understand that behind every prescription brought to our counter at Hospital Mor is a worried family member seeking fast relief. Whether it is an emergency antibiotic, life-saving insulin, or daily blood pressure tablets, we treat every requirement with utmost precision, verifying batch quality and explaining clear dosage instructions."
                </p>
                <div className="pt-2 font-bold text-emerald-400 text-sm">
                  — Lead Registered Pharmacist, Dinesh Medical Hall
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center justify-center space-y-3 bg-slate-800/60 p-6 rounded-2xl border border-slate-700">
                <Stethoscope className="w-10 h-10 text-emerald-400" />
                <div className="text-center">
                  <div className="font-extrabold text-base text-white">Need Pharmacist Guidance?</div>
                  <div className="text-xs text-slate-400">Call or WhatsApp anytime</div>
                </div>
                <button
                  onClick={onOpenWhatsAppModal}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Pharmacist</span>
                </button>
              </div>
            </div>
          </div>

          {/* Business Timeline */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="text-center mb-10 space-y-2">
              <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                Milestones & Evolution
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Our Journey Timeline
              </h2>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:-ml-px before:w-0.5 before:bg-emerald-200 dark:before:bg-emerald-900">
              
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-emerald-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <Calendar className="w-4 h-4" />
                </div>
                <div className="w-[calc(100%-3.5rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="font-bold text-emerald-600 dark:text-emerald-400 text-xs mb-1">Inception</div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">Store Foundation at Hospital Mor</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Established Dinesh Medical Hall near Sadar Hospital to cater to urgent patient medicine requirements in Jehanabad.
                  </p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-emerald-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <Calendar className="w-4 h-4" />
                </div>
                <div className="w-[calc(100%-3.5rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="font-bold text-emerald-600 dark:text-emerald-400 text-xs mb-1">Cold Storage Expansion</div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">Medical Grade Refrigeration Integration</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Installed 2-8°C cold storage facilities with generator backup for insulins, growth hormones, and viral vaccines.
                  </p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-emerald-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <Calendar className="w-4 h-4" />
                </div>
                <div className="w-[calc(100%-3.5rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="font-bold text-emerald-600 dark:text-emerald-400 text-xs mb-1">Present Day</div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">WhatsApp Prescription Dispatch Service</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Launched digital prescription ordering on WhatsApp (+91 79034 30774) and live online stock checker for patient convenience.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* CTA Banner */}
          <div className="bg-emerald-600 text-white p-8 rounded-3xl text-center space-y-4">
            <h3 className="text-2xl font-bold">Visit Our Store at Hospital Mor, Jehanabad</h3>
            <p className="text-emerald-100 text-xs sm:text-sm max-w-xl mx-auto">
              Our team is ready to assist you with authentic medicines, diagnostic devices, and baby care essentials.
            </p>
            <div className="flex items-center justify-center gap-3">
              <a
                href="tel:+917903430774"
                className="px-6 py-3 bg-white text-emerald-900 font-bold text-xs rounded-xl shadow hover:bg-emerald-50 transition"
              >
                Call +91 79034 30774
              </a>
              <button
                onClick={onOpenWhatsAppModal}
                className="px-6 py-3 bg-emerald-900 text-white font-bold text-xs rounded-xl shadow hover:bg-emerald-950 transition cursor-pointer"
              >
                Order on WhatsApp
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
