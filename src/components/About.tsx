import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AboutProps {
  onAboutClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onAboutClick }) => {
  const imgSmall = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090123_74be96d4-9c1b-40cf-932a-96f4f4babed3.png&w=1280&q=85';
  const imgLarge = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090133_c157d30b-a99a-4477-bec1-a446149ec3f2.png&w=1280&q=85';

  return (
    <section 
      id="about" 
      className="bg-white pt-16 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-24 overflow-hidden max-w-[1440px] mx-auto w-full"
    >
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
          Strategy-led creatives, delivering 
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
            Through research, creative thinking and iteration we help growing brands realize their digital full potential.
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
            Through research, creative thinking<br/>
            and iteration we help growing brands<br/>
            realize their digital full potential.
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

    </section>
  );
};
