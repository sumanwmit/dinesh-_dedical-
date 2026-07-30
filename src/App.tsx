import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { WhatsAppOrderModal } from './components/WhatsAppOrderModal';
import { Pill } from 'lucide-react';

// Lazy loading all 5 pages as requested
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const Gallery = lazy(() => import('./pages/Gallery').then(m => ({ default: m.Gallery })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));

const LoadingSpinner = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-3 p-8">
    <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white p-2.5 animate-bounce flex items-center justify-center">
      <Pill className="w-6 h-6" />
    </div>
    <div className="text-sm font-bold text-slate-700 dark:text-slate-300">
      Loading Dinesh Medical Hall...
    </div>
  </div>
);

export default function App() {
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [prefilledMedicine, setPrefilledMedicine] = useState('');

  const handleOpenWhatsAppModal = (medName?: string) => {
    if (medName) {
      setPrefilledMedicine(medName);
    } else {
      setPrefilledMedicine('');
    }
    setIsWhatsAppModalOpen(true);
  };

  const handleCloseWhatsAppModal = () => {
    setIsWhatsAppModalOpen(false);
  };

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
          
          {/* Header Navigation */}
          <Navbar onOpenWhatsAppModal={() => handleOpenWhatsAppModal()} />

          {/* Main Content Area with Suspense Lazy Loading */}
          <main className="flex-1">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home onOpenWhatsAppModal={handleOpenWhatsAppModal} />} />
                <Route path="/about" element={<About onOpenWhatsAppModal={() => handleOpenWhatsAppModal()} />} />
                <Route path="/services" element={<Services onOpenWhatsAppModal={handleOpenWhatsAppModal} />} />
                <Route path="/gallery" element={<Gallery onOpenWhatsAppModal={() => handleOpenWhatsAppModal()} />} />
                <Route path="/contact" element={<Contact onOpenWhatsAppModal={() => handleOpenWhatsAppModal()} />} />
                {/* Fallback route */}
                <Route path="*" element={<Home onOpenWhatsAppModal={handleOpenWhatsAppModal} />} />
              </Routes>
            </Suspense>
          </main>

          {/* Floating Actions (WhatsApp, Call, Back To Top) */}
          <FloatingActions onOpenWhatsAppModal={() => handleOpenWhatsAppModal()} />

          {/* Global WhatsApp Order Modal */}
          <WhatsAppOrderModal
            isOpen={isWhatsAppModalOpen}
            onClose={handleCloseWhatsAppModal}
            prefilledMedicineName={prefilledMedicine}
          />

          {/* Footer (contains global tracking script) */}
          <Footer />

        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
