import React from 'react';
import { ArrowRight, TrendingUp, UserPlus, Search, Globe, Code, ArrowUpRight } from 'lucide-react';

interface AboutProps {
  onAboutClick: () => void;
}

interface ServiceItem {
  icon: React.ComponentType<any>;
  title: string;
  badge: string;
  description: string;
  features: string[];
}

export const About: React.FC<AboutProps> = ({ onAboutClick }) => {
  const imgSmall = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090123_74be96d4-9c1b-40cf-932a-96f4f4babed3.png&w=1280&q=85';
  const imgLarge = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090133_c157d30b-a99a-4477-bec1-a446149ec3f2.png&w=1280&q=85';

  const services: ServiceItem[] = [
    {
      icon: TrendingUp,
      title: 'Performance Marketing',
      badge: 'Data-Driven ROI',
      description: 'Run targeted ad campaigns that translate directly into measurable sales and growth, leaving zero space for guesswork.',
      features: ['PPC Campaigns', 'Conversion Funnels', 'A/B Testing', 'ROI Dashboards'],
    },
    {
      icon: UserPlus,
      title: 'Lead Generation',
      badge: 'Targeted Growth',
      description: 'Attract, engage, and capture interest from your ideal customers. Build a continuous pipeline of high-converting leads.',
      features: ['Lead Capture Funnels', 'Inbound Strategies', 'Email Automation', 'Audience Segmentation'],
    },
    {
      icon: Search,
      title: 'Search Engine Optimization (SEO)',
      badge: 'Organic Authority',
      description: 'Optimize search footprint and scale visibility. Rank higher, secure traffic, and build permanent long-term brand equity.',
      features: ['Technical Audit', 'Keyword Strategy', 'On-Page & Off-Page', 'E-commerce SEO'],
    },
    {
      icon: Globe,
      title: 'Social Media Marketing (SMM)',
      badge: 'Engaged Community',
      description: 'Establish a dominant brand footprint across digital platforms through consistent narrative delivery and audience connection.',
      features: ['Content Production', 'Brand Storytelling', 'Influencer Partnering', 'Analytics Review'],
    },
    {
      icon: Code,
      title: 'Web Design & Development',
      badge: 'Conversion Engine',
      description: 'Construct websites and landing portals engineered specifically for user flow speed and brand conversion strength.',
      features: ['React & Next.js Apps', 'Responsive Designs', 'UI/UX Prototypes', 'Conversion Audits'],
    },
  ];

  return (
    <section 
      id="about" 
      className="bg-white pt-16 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-24 overflow-hidden w-full"
    >
      <div className="max-w-[1440px] mx-auto w-full">
      {/* Badge Row */}
      <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
          1
        </div>
        <span className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-900">
          Introducing Axion
        </span>
      </div>

      {/* Heading h2 */}
      <div className="px-5 sm:px-8 lg:px-12 mb-12 sm:mb-16 lg:mb-28">
        <h2 
          className="font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 max-w-[900px]"
          style={{ fontSize: 'clamp(1.5rem, 4vw, 3.2rem)' }}
        >
          Strategy-led marketing, delivering
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          results in digital and beyond.
        </h2>
      </div>

      {/* Content Area */}
      
      {/* MOBILE/TABLET: Stacks paragraph + button, then images */}
      <div className="lg:hidden px-5 sm:px-8 flex flex-col gap-10">
        
        {/* Text column */}
        <div className="flex flex-col items-start gap-6 max-w-xl">
          <p className="text-[15px] sm:text-[17px] leading-[1.6] font-medium text-gray-900">
            Through conversion audits, ad optimization and keyword mapping, we help ambitious brands realize their revenue potential.
          </p>
          
          <button
            onClick={onAboutClick}
            className="flex items-center justify-between bg-[#F26522] hover:bg-[#e05a1a] text-white text-[13px] sm:text-[14px] font-semibold rounded-full pl-5 pr-2 py-2 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group cursor-pointer shadow-md"
          >
            <div className="overflow-hidden h-[20px] relative pr-4">
              <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
                <span className="h-[20px] flex items-center">About our studio</span>
                <span className="h-[20px] flex items-center">About our studio</span>
              </div>
            </div>
            <div className="w-7 h-7 bg-white text-[#F26522] rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:rotate-[-45deg] shrink-0">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>

        {/* Images row */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full">
          <img 
            src={imgSmall} 
            alt="Studio Details Small" 
            className="w-full sm:w-[45%] aspect-[438/346] rounded-xl sm:rounded-2xl object-cover shadow-sm"
          />
          <img 
            src={imgLarge} 
            alt="Studio Atmosphere Large" 
            className="w-full sm:w-[55%] aspect-[900/600] rounded-xl sm:rounded-2xl object-cover shadow-sm"
          />
        </div>

      </div>

      {/* DESKTOP layout (hidden on mobile/tablet) */}
      <div className="hidden lg:grid grid-cols-[26%_1fr_48%] items-end gap-6 xl:gap-8 px-5 sm:px-8 lg:px-12 w-full">
        
        {/* Left Column */}
        <div className="self-end w-full">
          <img 
            src={imgSmall} 
            alt="Studio Details Small" 
            className="w-full aspect-[438/346] rounded-2xl object-cover shadow-sm hover:scale-[1.01] transition-transform duration-500"
          />
        </div>

        {/* Center Column */}
        <div className="self-start flex flex-col justify-between h-full items-start pl-4 xl:pl-8 gap-10">
          <p className="text-[16px] xl:text-[18px] leading-[1.65] whitespace-nowrap text-gray-900 font-medium">
            Through conversion audits, ad optimization<br/>
            and keyword mapping, we help ambitious<br/>
            brands realize their revenue potential.
          </p>

          <button
            onClick={onAboutClick}
            className="flex items-center justify-between bg-[#F26522] hover:bg-[#e05a1a] text-white text-[13px] xl:text-[14px] font-semibold rounded-full pl-6 pr-2 py-2 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group cursor-pointer shadow-md"
          >
            <div className="overflow-hidden h-[20px] relative pr-4">
              <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
                <span className="h-[20px] flex items-center">About our studio</span>
                <span className="h-[20px] flex items-center">About our studio</span>
              </div>
            </div>
            <div className="w-8 h-8 bg-white text-[#F26522] rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:rotate-[-45deg] shrink-0">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>

        {/* Right Column */}
        <div className="self-end w-full">
          <img 
            src={imgLarge} 
            alt="Studio Atmosphere Large" 
            className="w-full aspect-[3/2] rounded-2xl object-cover shadow-sm hover:scale-[1.01] transition-transform duration-500"
          />
        </div>

      </div>

      {/* CLIENT RESULTS STATS BANNER */}
      <div className="px-5 sm:px-8 lg:px-12 mt-16 sm:mt-24 lg:mt-28 w-full">
        <div className="bg-[#F5F5F5] rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-200/60 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-mono text-[#F26522] tracking-tight block">
              ₹4.5Cr+
            </span>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-500 mt-2 block">
              Revenue Generated
            </span>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-mono text-gray-900 tracking-tight block">
              3.8x
            </span>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-500 mt-2 block">
              Average ROAS
            </span>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-mono text-gray-900 tracking-tight block">
              250k+
            </span>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-500 mt-2 block">
              Organic Clicks
            </span>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-mono text-gray-900 tracking-tight block">
              98.4%
            </span>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-500 mt-2 block">
              Client Retention
            </span>
          </div>
        </div>
      </div>

      {/* CORE SERVICES MATRIX CONTAINER */}
      <div 
        id="services" 
        className="px-5 sm:px-8 lg:px-12 mt-20 sm:mt-24 lg:mt-32 w-full pt-16 sm:pt-20 border-t border-gray-100"
      >
        <div className="max-w-xl mb-12 sm:mb-16">
          <span className="text-[11px] sm:text-[12px] font-bold text-[#F26522] uppercase tracking-widest block mb-4">
            Core Expertise
          </span>
          <h3 className="text-2xl sm:text-4xl font-medium tracking-tight text-gray-900">
            Engineered for Digital Expansion
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group border border-gray-200/60 bg-white rounded-2xl p-6 sm:p-8 hover:border-[#F26522]/30 transition-all duration-500 flex flex-col justify-between hover:shadow-xl relative hover:shadow-gray-200/40"
              >
                {/* Thin orange border on top hover */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-transparent via-[#F26522] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-gray-100 bg-gray-50 text-[#F26522] group-hover:bg-[#F26522] group-hover:text-white transition-all duration-500 group-hover:scale-105">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] text-gray-400 group-hover:text-gray-600 font-bold uppercase tracking-widest font-mono">
                      {service.badge}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-[#F26522] transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed mb-6 text-gray-600">
                    {service.description}
                  </p>
                </div>

                <div>
                  <ul className="space-y-2 border-t border-gray-100 pt-6 mb-6">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="text-xs flex items-center gap-2 text-gray-500 group-hover:text-gray-700">
                        <span className="w-1 h-1 rounded-full bg-[#F26522]/60" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={onAboutClick}
                    className="text-xs font-semibold text-gray-900 hover:text-[#F26522] flex items-center gap-1 transition-colors group-hover:translate-x-1 duration-300 cursor-pointer"
                  >
                    Learn methodology
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}

          {/* Callout Card */}
          <div className="border border-[#F26522]/10 bg-gradient-to-br from-[#F26522]/5 to-transparent rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div>
              <span className="text-[10px] font-bold text-[#F26522] uppercase tracking-widest font-mono">
                Custom Strategy
              </span>
              <h4 className="text-lg font-bold mt-4 mb-3 text-gray-900">
                Need a Custom-Built Blueprint?
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed text-gray-600">
                Tell us about your brand goals. Our experts will outline a customized growth roadmap showing you where to optimize.
              </p>
            </div>
            
            {/* Custom Orange Roll Button */}
            <button
              onClick={onAboutClick}
              className="flex items-center justify-between bg-[#F26522] hover:bg-[#e05a1a] text-white text-[13px] font-semibold rounded-full pl-5 pr-2 py-2 mt-6 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group cursor-pointer shadow-md"
            >
              <div className="overflow-hidden h-[20px] relative pr-4">
                <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
                  <span className="h-[20px] flex items-center text-xs">Get Custom Plan</span>
                  <span className="h-[20px] flex items-center text-xs">Get Custom Plan</span>
                </div>
              </div>
              <div className="w-7 h-7 bg-white text-[#F26522] rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:rotate-[-45deg] shrink-0">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </div>

      </div>
    </section>
  );
};
