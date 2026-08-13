import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink, Shield, Pill, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://crm.webmakerit.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid') || '');
    }
    
    if (!cid) return;

    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid, 
        visitor_id: visitorId, 
        session_id: sessionId,
        page_name: getPageName(), 
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent, 
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, { 
        method: 'POST', 
        mode: 'cors', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(payload) 
      }).catch(err => {});
    };

    const sendExitPayload = () => {
      const payload = { 
        cid: cid, 
        session_id: sessionId, 
        page_name: getPageName(), 
        action: 'page_change' 
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, { 
          method: 'POST', 
          mode: 'cors', 
          headers: { 'Content-Type': 'application/json' }, 
          body: JSON.stringify(payload), 
          keepalive: true 
        }).catch(err => {});
      }
    };

    sendInitPayload();

    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: ReturnType<typeof setTimeout>;
    let isIdle = false;

    const resetIdleTimer = () => {
      if (isIdle) {
        isIdle = false;
        sendInitPayload(); // Wake up! Resume tracking
      }
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isIdle = true;
        sendExitPayload(); // Inactive! Stop tracking
      }, 60000); // 60 Seconds
    };

    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach(evt => document.addEventListener(evt, resetIdleTimer, { passive: true }));
    resetIdleTimer(); // Initialize idle timer
    // ====================================

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    window.addEventListener('popstate', handleLocationChange);
    
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') { 
        sendExitPayload(); 
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', sendExitPayload);
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', sendExitPayload);
      activityEvents.forEach(evt => document.removeEventListener(evt, resetIdleTimer));
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Business Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-xl bg-emerald-600 text-white">
                <Pill className="w-6 h-6" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                Dinesh Medical Hall
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Your trusted neighborhood pharmacy located right at Hospital Mor, Jehanabad. Providing 100% genuine medicines, surgical supplies, baby care, and diagnostic tools.
            </p>
            <div className="pt-2 flex items-center space-x-3">
              <a
                href="https://wa.me/917903430774"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white border border-emerald-500/30 text-xs font-semibold transition"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Order</span>
              </a>

              <a
                href="tel:+917903430774"
                className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call Store</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide border-l-2 border-emerald-500 pl-3">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition flex items-center space-x-1">
                  <span>Home Page</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition flex items-center space-x-1">
                  <span>About Our Pharmacy</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-emerald-400 transition flex items-center space-x-1">
                  <span>Medicine Services & Stock Checker</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-emerald-400 transition flex items-center space-x-1">
                  <span>Store Gallery & Shelves</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition flex items-center space-x-1">
                  <span>Contact & Location Map</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Working Hours & Address */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide border-l-2 border-emerald-500 pl-3">
              Store Timings & Address
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                <span>hospital mor, Jehanabad, Bihar 804408 (Near Sadar Hospital)</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                <div>
                  <div className="text-slate-200 font-medium">Mon - Sat: 7:30 AM - 10:00 PM</div>
                  <div className="text-xs text-slate-400">Sunday: 8:00 AM - 9:30 PM</div>
                </div>
              </li>
              <li className="flex items-center space-x-2.5 text-emerald-400 font-semibold text-xs">
                <Shield className="w-4 h-4 shrink-0" />
                <span>24/7 WhatsApp Emergency Prescription Support</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Google Map & Directions */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide border-l-2 border-emerald-500 pl-3">
              Location Map
            </h4>
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-800/50 p-1">
              <iframe
                title="Dinesh Medical Hall Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.123!2d84.987!3d25.213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzQ2LjgiTiA4NMK1NTknMTMuMiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="120"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                className="rounded-lg grayscale contrast-125 opacity-80 hover:opacity-100 transition"
              ></iframe>
            </div>
            <a
              href="https://maps.google.com/?q=Dinesh+Medical+Hall+Hospital+Mor+Jehanabad+Bihar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs text-emerald-400 hover:underline font-semibold"
            >
              <span>Get Live Directions on Google Maps</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Legal & Medical Disclaimer */}
        <div className="py-6 border-b border-slate-800 text-xs text-slate-500 space-y-2">
          <p>
            <strong className="text-slate-400">Medical Disclaimer:</strong> The information provided on this website is for informational purposes only and does not substitute professional doctor advice. All prescription medicines require a valid doctor’s prescription upon delivery or pickup.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-slate-400 pt-1">
            <Link to="/contact" className="hover:text-emerald-400 transition">Privacy Policy</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-emerald-400 transition">Terms of Service</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-emerald-400 transition">Disclaimer</Link>
          </div>
        </div>

        {/* Bottom Copyright & WMIT Branding */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>&copy; {new Date().getFullYear()} Dinesh Medical Hall. All rights reserved.</p>
          
          <div className="flex items-center space-x-1">
            <span></span>
            <a href="#" className="wmit-popup-trigger hover:text-white underline transition-colors" target="_blank" rel="noopener noreferrer">Developed by WMIT</a>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
