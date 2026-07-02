import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X as XIcon, Clock, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onNavClick: (section: string) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavClick, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [londonTime, setLondonTime] = useState<string>('');

  // Track live London time
  useEffect(() => {
    const updateTime = () => {
      const timeStr = new Date().toLocaleTimeString('en-GB', {
        timeZone: 'Europe/London',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });
      setLondonTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: 'Projects', id: 'projects' },
    { label: 'Studio', id: 'about' },
    { label: 'Journal', id: 'journal' },
    { label: 'Connect', id: 'contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 p-2 sm:p-3 max-w-[1440px] mx-auto w-full">
        <nav className="bg-white rounded-full p-[5px] flex items-center justify-between shadow-sm relative z-20">
          
          {/* LEFT: Logo + Nav links */}
          <div className="flex items-center gap-3 sm:gap-4 pl-1">
            {/* Logo */}
            <button 
              onClick={() => onNavClick('hero')}
              className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-900 rounded-full flex items-center justify-center text-white text-[10px] sm:text-[11px] font-bold tracking-tight cursor-pointer hover:scale-95 transition-transform"
            >
              AX
            </button>
            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-6 ml-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavClick(link.id)}
                  className="text-[14px] text-gray-900 hover:text-gray-500 transition-colors duration-300 font-medium cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Clock + Status + CTA */}
          <div className="flex items-center gap-4">
            
            {/* Desktop Details */}
            <div className="hidden md:flex items-center gap-4 text-[13px] text-gray-600">
              <span className="hidden lg:inline">Taking on projects for Q1 2026</span>
              <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                <Clock className="w-3.5 h-3.5 text-gray-500" />
                <span className="font-mono">{londonTime} in London</span>
              </div>
            </div>

            {/* Desktop CTA Button */}
            <button
              onClick={onOpenBooking}
              className="hidden md:flex items-center bg-gray-900 hover:bg-gray-800 text-white text-[13px] font-medium rounded-full pl-5 pr-2 py-2 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group cursor-pointer"
            >
              {/* Text roll container */}
              <div className="overflow-hidden h-[20px] relative pr-3">
                <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
                  <span className="h-[20px] flex items-center">Book a strategy call</span>
                  <span className="h-[20px] flex items-center">Book a strategy call</span>
                </div>
              </div>
              {/* Arrow circle */}
              <div className="w-6 h-6 bg-white text-gray-900 rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:rotate-[-45deg] shrink-0">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <XIcon className="w-4 h-4" /> : <MenuIcon className="w-4 h-4" />}
            </button>

          </div>

        </nav>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex flex-col justify-end lg:hidden animate-fade-in">
          
          {/* Backdrop Clicker to Close */}
          <div className="absolute inset-0 z-10" onClick={() => setMobileMenuOpen(false)} />

          {/* White Bottom Sheet */}
          <div className="bg-white rounded-2xl mx-3 mb-3 p-6 sm:p-8 flex flex-col gap-6 relative z-20 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
            
            {/* Sheet Header */}
            <div className="flex justify-between items-center pb-4 border-b border-gray-100">
              <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">
                Menu
              </span>
              <div className="flex items-center gap-1.5 text-xs text-gray-500 font-mono">
                <Clock className="w-3.5 h-3.5" />
                <span>{londonTime} London</span>
              </div>
            </div>

            {/* Nav links list */}
            <div className="flex flex-col gap-3 py-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavClick(link.id);
                  }}
                  className="w-full text-left text-[28px] sm:text-[32px] font-medium text-gray-900 hover:text-[#F26522] transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Mobile CTA */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-[#F26522] hover:bg-[#e05a1a] text-white py-3.5 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95 cursor-pointer"
            >
              <span>Start a project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Direct Contact Profile */}
            <div className="mt-2 pt-4 border-t border-gray-100 flex flex-col gap-1.5 text-xs text-gray-600">
              <span className="font-semibold text-gray-900">Direct Contact:</span>
              <div className="flex flex-col gap-0.5">
                <a href="tel:+919327428481" className="hover:text-gray-900 transition-colors font-mono">+91 93274 28481</a>
                <a href="https://www.instagram.com/nikki_tejwani/" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors text-[#F26522] font-medium">@nikki_tejwani</a>
              </div>
              <span className="text-[10px] text-gray-400 leading-normal mt-1 max-w-[280px]">
                Block 701, Ananta Premium Living, Opposite German Venya Bunglows, Bhat, Ahmedabad, Gujarat 382428
              </span>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
