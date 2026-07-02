import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const headlineSize = windowWidth < 640 ? 'clamp(1.75rem, 7vw, 4.2rem)' : 'clamp(2.5rem, 5vw, 4.2rem)';

  return (
    <section 
      id="projects" 
      className="bg-[#F5F5F5] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28 max-w-[1440px] mx-auto w-full"
    >
      {/* Badge Row */}
      <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
          2
        </div>
        <span className="text-[12px] sm:text-[13px] font-medium border border-gray-300 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-900">
          Featured client work
        </span>
      </div>

      {/* Heading h2 */}
      <div className="px-5 sm:px-8 lg:px-12 mb-10 sm:mb-14 lg:mb-16">
        <h2 
          className="font-medium leading-[1.08] tracking-[-0.03em] text-gray-900"
          style={{ fontSize: headlineSize }}
        >
          Our projects
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 px-5 sm:px-8 lg:px-12 w-full">
        
        {/* Card 1: Narrativ */}
        <div className="flex flex-col">
          {/* Video Box */}
          <div className="aspect-[329/246] rounded-2xl overflow-hidden bg-[#1a1d2e] relative group cursor-pointer shadow-sm">
            <video 
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_122702_390f5305-8719-41d5-ae80-d23ab3796c28.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            />
            {/* Dark gradient fallback overlay */}
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Expand Hover Button */}
            <div className="absolute bottom-4 left-4 z-20 flex items-center justify-center">
              <div className="bg-white text-gray-900 h-9 w-9 rounded-full flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:w-[148px] overflow-hidden pr-3 select-none shadow-md">
                <span className="text-[13px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] delay-100 whitespace-nowrap pl-4">
                  Learn more
                </span>
                <div className="w-5 h-5 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:rotate-0 -rotate-45 shrink-0 text-gray-900">
                  {/* Link SVG (Manually drawn 2 arc paths) */}
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Details */}
          <span className="text-[14px] sm:text-[15px] font-semibold text-gray-900 mt-4 px-1">
            Narrativ
          </span>
          <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed mt-1 px-1 max-w-md">
            Winner of Site of the Month 2025 - an interactive 3D showcase driving record engagement
          </p>
        </div>

        {/* Card 2: Luminar */}
        <div className="flex flex-col">
          {/* Video Box */}
          <div className="aspect-square rounded-2xl overflow-hidden bg-[#6b6b6b] relative group cursor-pointer shadow-sm">
            <video 
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_123323_f909c2b8-ff6c-4edf-882b-8ebcdbe389b5.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            />
            {/* Dark gradient fallback overlay */}
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Expand Hover Button */}
            <div className="absolute bottom-4 left-4 z-20 flex items-center justify-center">
              <div className="bg-gray-900 text-white h-9 w-9 rounded-full flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:w-[168px] overflow-hidden pr-3 select-none shadow-md">
                <span className="text-[13px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] delay-100 whitespace-nowrap pl-4">
                  View case study
                </span>
                <div className="w-5 h-5 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:rotate-0 -rotate-45 shrink-0 text-white">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>

          {/* Details */}
          <span className="text-[14px] sm:text-[15px] font-semibold text-gray-900 mt-4 px-1">
            Luminar
          </span>
          <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed mt-1 px-1 max-w-md">
            Transforming a dated platform into a conversion-focused brand experience
          </p>
        </div>

      </div>

    </section>
  );
};
