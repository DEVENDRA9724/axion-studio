import React, { useState } from 'react';
import { Phone, MapPin, Mail, Calendar, CheckCircle2, User, Building, MessageSquare, ArrowRight } from 'lucide-react';

export const StrategyCall: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Performance Marketing',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Please fill in your name and email address.');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <section 
      id="contact" 
      className="py-20 sm:py-28 bg-white border-t border-gray-200 w-full relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto w-full px-5 sm:px-8 lg:px-12">
      {/* Decorative Background */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#F26522]/5 blur-[150px] pointer-events-none" />

      <div id="booking-form" className="max-w-7xl mx-auto w-full scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Panel: Contact Info (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#F26522]/10 border border-[#F26522]/30 rounded-full px-4 py-1.5 text-[#F26522] text-xs font-semibold uppercase tracking-wider mb-4">
                <Calendar className="w-3.5 h-3.5" />
                Let's Partner
              </div>
              <h2 
                className="font-medium leading-[1.1] mb-6 text-gray-900"
                style={{ fontSize: 'clamp(1.75rem, 5vw, 3.2rem)' }}
              >
                Book a Free <span className="font-playfair italic block mt-1">Growth Audit Call</span>
              </h2>
              <p className="text-sm sm:text-base leading-relaxed mb-8 text-gray-600">
                In this 30-minute strategy session, we will analyze your website framework, dissect your search footprints, and outline a custom roadmap to scale your online authority.
              </p>
            </div>

            {/* Owner & Contact details card */}
            <div className="border border-gray-250 bg-[#F5F5F5]/40 rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#F26522]/10 to-transparent rounded-bl-full" />
              
              <div>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest font-mono block">
                  Lead Strategist & Founder
                </span>
                <span className="text-xl font-bold block mt-1 text-gray-900">
                  Nikita Tejwani
                </span>
                <span className="text-xs text-[#F26522] font-semibold">
                  Digital Marketing Consultant
                </span>
              </div>

              <div className="space-y-4 border-t border-gray-200 pt-6">
                <a
                  href="tel:+919327428481"
                  className="flex items-center gap-3 text-sm text-gray-600 hover:text-gray-900 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center border border-gray-200 text-[#F26522] group-hover:bg-[#F26522] group-hover:text-white transition-all shadow-sm">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-semibold font-mono">+91 93274 28481</span>
                </a>

                <div className="flex items-start gap-3 text-sm text-gray-650">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center border border-gray-200 text-[#F26522] shrink-0 shadow-sm">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="leading-relaxed text-xs sm:text-sm">
                    Block no:-701, Ananta premium living, opposite German Venya Bunglows, near Karnavati Vivanta Living, Bhat, Ahmedabad, Gujarat 382428
                  </span>
                </div>

                <a
                  href="https://www.instagram.com/nikki_tejwani/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-gray-600 hover:text-gray-900 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center border border-gray-200 text-[#F26522] group-hover:bg-[#F26522] group-hover:text-white transition-all shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </div>
                  <span className="font-mono text-xs text-[#F26522] font-semibold">@nikki_tejwani</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Panel: Interactive Form (7 Cols) */}
          <div className="lg:col-span-7 border border-gray-250 rounded-3xl p-6 sm:p-10 shadow-sm relative min-h-[460px] bg-white">
            {isSubmitted ? (
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-250 flex items-center justify-center text-emerald-500 mb-6 shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Strategy Request Submitted
                </h3>
                <p className="text-gray-500 text-sm max-w-sm leading-relaxed mb-6">
                  Thank you, <span className="font-semibold text-[#F26522]">{formData.name}</span>. Nikita Tejwani will review your business profile and contact you within 24 hours at <span className="font-semibold text-gray-900">{formData.email}</span>.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', company: '', service: 'Performance Marketing', message: '' });
                  }}
                  className="text-xs text-[#F26522] font-bold uppercase tracking-wider hover:underline border border-[#F26522]/20 rounded-full px-5 py-2 hover:bg-[#F26522]/5 transition-colors cursor-pointer"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Send a Message</h3>
                  <p className="text-xs text-gray-400">Provide details so we can research your business before our call.</p>
                </div>

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 text-gray-600">
                    <User className="w-3.5 h-3.5 text-[#F26522]" />
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full border border-gray-200 focus:border-[#F26522] rounded-xl px-4 py-3 text-xs outline-none bg-white text-gray-900 placeholder-gray-400 transition-all shadow-sm"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 text-gray-600">
                    <Mail className="w-3.5 h-3.5 text-[#F26522]" />
                    Business Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@company.com"
                    className="w-full border border-gray-200 focus:border-[#F26522] rounded-xl px-4 py-3 text-xs outline-none bg-white text-gray-900 placeholder-gray-400 transition-all shadow-sm"
                  />
                </div>

                {/* Company */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="company" className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 text-gray-600">
                    <Building className="w-3.5 h-3.5 text-[#F26522]" />
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Axion Marketing Ltd."
                    className="w-full border border-gray-200 focus:border-[#F26522] rounded-xl px-4 py-3 text-xs outline-none bg-white text-gray-900 placeholder-gray-400 transition-all shadow-sm"
                  />
                </div>

                {/* Service Select */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="service" className="text-xs font-bold uppercase tracking-wider text-gray-600">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full border border-gray-200 focus:border-[#F26522] rounded-xl px-4 py-3 text-xs outline-none bg-white text-gray-900 transition-all shadow-sm"
                  >
                    <option value="Performance Marketing">Performance Marketing (Google/Meta Ads)</option>
                    <option value="Lead Generation">Lead Generation Funnels</option>
                    <option value="SEO">Search Engine Optimization (SEO)</option>
                    <option value="SMM">Social Media Marketing (SMM)</option>
                    <option value="Web Design & Development">Web Design & Fullstack Development</option>
                    <option value="Custom Project">Custom Integrated Campaign</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 text-gray-600">
                    <MessageSquare className="w-3.5 h-3.5 text-[#F26522]" />
                    Goals & Context
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your goals, targets, and current pain points..."
                    className="w-full border border-gray-200 focus:border-[#F26522] rounded-xl px-4 py-3 text-xs outline-none bg-white text-gray-900 placeholder-gray-400 transition-all resize-none shadow-sm"
                  />
                </div>

                {/* Custom Axion Text-Roll Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex items-center justify-between bg-gray-900 hover:bg-gray-800 disabled:bg-gray-200 disabled:text-gray-400 text-white text-[13px] font-semibold rounded-full pl-6 pr-2 py-2 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group cursor-pointer shadow-md mt-2 w-fit shrink-0"
                >
                  <div className="overflow-hidden h-[20px] relative pr-4">
                    <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
                      <span className="h-[20px] flex items-center">{isLoading ? 'Submitting...' : 'Submit strategy request'}</span>
                      <span className="h-[20px] flex items-center">{isLoading ? 'Submitting...' : 'Submit strategy request'}</span>
                    </div>
                  </div>
                  <div className="w-7 h-7 bg-white text-gray-900 rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:rotate-[-45deg] shrink-0 shadow-sm">
                    {isLoading ? (
                      <div className="w-4.5 h-4.5 border-2 border-gray-900/30 border-t-gray-900 rounded-full animate-spin"></div>
                    ) : (
                      <ArrowRight className="w-3.5 h-3.5" />
                    )}
                  </div>
                </button>
              </form>
            )}
          </div>
          
        </div>
      </div>
      </div>
    </section>
  );
};
