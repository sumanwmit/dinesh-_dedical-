import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, MessageSquare } from 'lucide-react';

export const QuickInquiryForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: 'Prescription Medicine Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setSubmitted(true);
    setTimeout(() => {
      // Automatic WhatsApp fallback trigger
      const text = `Hello Dinesh Medical Hall, Inquiry from ${formData.name} (${formData.phone}): Category: ${formData.serviceType}. Message: ${formData.message}`;
      window.open(`https://wa.me/917903430774?text=${encodeURIComponent(text)}`, '_blank');
    }, 1200);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 p-6 md:p-8">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Quick Medicine & Service Inquiry</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          Have questions about medicine availability or healthcare devices? Send us a message and our team at Hospital Mor, Jehanabad will respond promptly.
        </p>
      </div>

      {submitted ? (
        <div className="bg-emerald-50 dark:bg-emerald-950/40 p-6 rounded-2xl border border-emerald-200 dark:border-emerald-800 text-center space-y-3">
          <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
          <h4 className="text-lg font-bold text-emerald-900 dark:text-emerald-200">Inquiry Received!</h4>
          <p className="text-xs text-emerald-700 dark:text-emerald-300">
            Thank you {formData.name}. Redirecting you to WhatsApp for direct chat with our pharmacist...
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your name"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 7903430774"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Inquiry Type
            </label>
            <select
              value={formData.serviceType}
              onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none transition"
            >
              <option value="Prescription Medicine Inquiry">Prescription Medicine Availability</option>
              <option value="Health Devices & Monitors">Health Devices & BP/Sugar Monitors</option>
              <option value="Surgical & Emergency Supplies">Surgical & First Aid Supplies</option>
              <option value="Baby Care & Milk Formulas">Baby Care & Formulas</option>
              <option value="General Store Location Inquiry">Store Location & Directions</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Your Message / Medicine Details
            </label>
            <textarea
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Describe your medicine requirement..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/20 flex items-center justify-center space-x-2 transition cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Submit Inquiry</span>
          </button>
        </form>
      )}
    </div>
  );
};
