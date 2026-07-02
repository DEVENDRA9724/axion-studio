import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { X, ArrowRight } from 'lucide-react';

function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  // Handle smooth scroll navigation
  const handleNavClick = (sectionId: string) => {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBooking = () => {
    setBookingOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setBookingOpen(false);
        setSubmitted(false);
        setEmail('');
      }, 2500);
    }
  };

  return (
    <div className="min-h-screen bg-[#EFEFEF] selection:bg-[#F26522] selection:text-white relative">
      
      {/* Navigation Menu */}
      <Navbar 
        onNavClick={handleNavClick} 
        onOpenBooking={handleOpenBooking}
      />

      {/* Section 1: Hero (Full Viewport Height) */}
      <Hero onStartProject={handleOpenBooking} />

      {/* Section 2: About (White Background) */}
      <About onAboutClick={handleOpenBooking} />

      {/* Section 3: Case Studies (Light Gray Background) */}
      <Projects />

      {/* Simple Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-6 text-center text-xs border-t border-gray-800">
        <p>© 2026 Axion Studio. All rights reserved. Made for Q1 category dominance.</p>
      </footer>

      {/* Booking Modal Overlay */}
      {bookingOpen && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          
          {/* Modal Container */}
          <div className="bg-white rounded-3xl w-full max-w-md md:max-w-3xl overflow-hidden relative shadow-2xl md:grid md:grid-cols-[45%_55%] animate-fade-in">
            
            {/* Left side: Contact Profile Info */}
            <div className="bg-gray-50 p-6 sm:p-8 flex flex-col justify-between border-r border-gray-100">
              <div>
                <span className="text-[10px] font-bold text-[#F26522] uppercase tracking-widest block mb-4">
                  Agency Office
                </span>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Nikita Tejwani
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed mb-6">
                  Principal Consultant & Digital Marketer. Shaping performance marketing setups, custom funnels, and organic SEO authority to capture intent and scale revenue.
                </p>

                <div className="flex flex-col gap-3 text-xs text-gray-600">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-gray-400">Phone</span>
                    <a href="tel:+919327428481" className="hover:text-gray-950 font-semibold font-mono text-gray-900 mt-0.5">+91 93274 28481</a>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-gray-400">Instagram</span>
                    <a href="https://www.instagram.com/nikki_tejwani/" target="_blank" rel="noreferrer" className="hover:text-gray-950 font-semibold text-[#F26522] mt-0.5">@nikki_tejwani</a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-200/60">
                <span className="text-[10px] uppercase font-bold text-gray-400 block mb-1">Corporate Address</span>
                <p className="text-[10px] text-gray-500 leading-relaxed">
                  Block no:-701, Ananta premium living, opposite German Venya Bunglows, near Karnavati Vivanta Living, Bhat, Ahmedabad, Gujarat 382428
                </p>
              </div>
            </div>

            {/* Right side: Input Form or Success */}
            <div className="p-6 sm:p-8 relative flex flex-col justify-center bg-white">
              {/* Close Button */}
              <button
                onClick={() => setBookingOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full border border-gray-150 hover:bg-gray-50 text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Success State */}
              {submitted ? (
                <div className="text-center py-8 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-500 flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    ✓
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Strategy Call Requested</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Thank you! An Axion specialist will reach out to you shortly to schedule our session.
                  </p>
                </div>
              ) : (
                /* Input Form */
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-5 pt-2">
                  <div>
                    <span className="text-[10px] font-bold text-[#F26522] uppercase tracking-widest block mb-1">
                      Book a strategy call
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">
                      Let's scale your project
                    </h3>
                  </div>
                  
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Enter your business details below to secure a calendar slot for our Q1 2026 strategy planning block.
                  </p>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="modal-email" className="text-[10px] font-bold uppercase tracking-wider text-gray-600">
                      Corporate Email
                    </label>
                    <input
                      id="modal-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-xs outline-none focus:border-gray-950 transition-colors"
                    />
                  </div>

                  {/* Submit button with roll-hover */}
                  <button
                    type="submit"
                    className="flex items-center justify-between bg-gray-900 hover:bg-gray-800 text-white text-[13px] font-medium rounded-full pl-5 pr-2 py-2 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group cursor-pointer"
                  >
                    <div className="overflow-hidden h-[20px] relative pr-4">
                      <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
                        <span className="h-[20px] flex items-center">Request calendar invite</span>
                        <span className="h-[20px] flex items-center">Request calendar invite</span>
                      </div>
                    </div>
                    <div className="w-7 h-7 bg-white text-gray-900 rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:rotate-[-45deg] shrink-0">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default App;
