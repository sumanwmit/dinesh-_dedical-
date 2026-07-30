import React, { useState, useEffect } from 'react';
import { X, MessageSquare, Phone, Upload, CheckCircle2, AlertCircle, FileText } from 'lucide-react';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMedicineName?: string;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  isOpen,
  onClose,
  prefilledMedicineName = ''
}) => {
  const [customerName, setCustomerName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [medicineName, setMedicineName] = useState(prefilledMedicineName);
  const [hasPrescription, setHasPrescription] = useState<'Yes' | 'No'>('Yes');
  const [preferredTime, setPreferredTime] = useState('Immediate / As soon as possible');
  const [message, setMessage] = useState('');
  const [fileName, setFileName] = useState('');

  useEffect(() => {
    if (prefilledMedicineName) {
      setMedicineName(prefilledMedicineName);
    }
  }, [prefilledMedicineName]);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerName.trim() || !mobileNumber.trim() || !medicineName.trim()) {
      alert('Please fill in Customer Name, Mobile Number, and Medicine Required.');
      return;
    }

    const formattedMessage = 
`🏥 *DINESH MEDICAL HALL - MEDICINE ORDER*
----------------------------------------
*Customer Name:* ${customerName}
*Phone:* ${mobileNumber}
${email ? `*Email:* ${email}\n` : ''}*Medicine Required:* ${medicineName}
*Prescription Attached/Available:* ${hasPrescription} ${fileName ? `(${fileName})` : ''}
*Delivery/Pickup Address:* ${address || 'Pickup at Hospital Mor Store'}
*Preferred Time:* ${preferredTime}
${message ? `*Additional Notes:* ${message}\n` : ''}----------------------------------------
_Sent from Website WhatsApp Order Form_`;

    const encodedText = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/917903430774?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div 
        id="whatsapp-order-modal"
        className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-emerald-100 dark:border-slate-800 overflow-hidden max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-5 text-white flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-white/15 rounded-xl backdrop-blur-md">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight">Order Medicines via WhatsApp</h3>
              <p className="text-xs text-emerald-100">Dinesh Medical Hall • Hospital Mor, Jehanabad</p>
            </div>
          </div>
          <button 
            id="close-whatsapp-modal-btn"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notice Banner */}
        <div className="bg-emerald-50 dark:bg-emerald-950/40 px-5 py-2.5 border-b border-emerald-100 dark:border-emerald-800/40 flex items-center space-x-2 text-xs text-emerald-800 dark:text-emerald-300">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Quick response by registered pharmacist on WhatsApp (+91 79034 30774).</span>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSendWhatsApp} className="p-6 overflow-y-auto space-y-4 text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Customer Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="e.g. 7903430774"
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Email Address (Optional)
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Preferred Time
              </label>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none transition"
              >
                <option value="Immediate / As soon as possible">Immediate / As soon as possible</option>
                <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
                <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                <option value="Evening (4:00 PM - 9:30 PM)">Evening (4:00 PM - 9:30 PM)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Medicine Name & Quantity <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              rows={2}
              value={medicineName}
              onChange={(e) => setMedicineName(e.target.value)}
              placeholder="e.g. Paracetamol 650mg - 2 strips, Glycomet SR 500mg - 1 box"
              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Delivery / Pickup Address in Jehanabad
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="e.g. Near Sadar Hospital Gate, Hospital Mor, Jehanabad"
              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none transition"
            />
          </div>

          {/* Prescription Radio & Upload */}
          <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="flex items-center justify-between">
              <label className="font-semibold text-slate-700 dark:text-slate-300">
                Do you have a Doctor Prescription?
              </label>
              <div className="flex items-center space-x-4">
                <label className="inline-flex items-center space-x-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="prescription"
                    value="Yes"
                    checked={hasPrescription === 'Yes'}
                    onChange={() => setHasPrescription('Yes')}
                    className="text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="text-slate-700 dark:text-slate-300">Yes</span>
                </label>
                <label className="inline-flex items-center space-x-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="prescription"
                    value="No"
                    checked={hasPrescription === 'No'}
                    onChange={() => setHasPrescription('No')}
                    className="text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="text-slate-700 dark:text-slate-300">No</span>
                </label>
              </div>
            </div>

            {hasPrescription === 'Yes' && (
              <div className="pt-2">
                <label className="block text-xs text-slate-500 dark:text-slate-400 mb-1">
                  Upload Prescription Photo (Optional - You can also attach directly in WhatsApp chat):
                </label>
                <div className="flex items-center space-x-3">
                  <label className="flex-1 flex items-center justify-center px-4 py-2 border-2 border-dashed border-emerald-300 dark:border-emerald-700 rounded-xl cursor-pointer hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition text-xs font-medium text-emerald-700 dark:text-emerald-400">
                    <Upload className="w-4 h-4 mr-2" />
                    <span>{fileName || 'Choose File / Photo'}</span>
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            )}
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Additional Instructions / Message
            </label>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="e.g. Please check if cold storage packing is available for insulin."
              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none transition"
            />
          </div>

          {/* Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              id="send-whatsapp-order-btn"
              type="submit"
              className="w-full sm:flex-1 py-3 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 flex items-center justify-center space-x-2 transition cursor-pointer"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>Send via WhatsApp</span>
            </button>

            <a
              id="call-direct-order-btn"
              href="tel:+917903430774"
              className="w-full sm:w-auto py-3 px-6 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold rounded-xl flex items-center justify-center space-x-2 transition"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Call Now</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
