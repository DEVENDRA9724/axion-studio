import React, { useState, useEffect } from 'react';
import { ArrowRight, TrendingUp, Users, Award } from 'lucide-react';

export const Projects: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [activeTab, setActiveTab] = useState<'cases' | 'roi'>('cases');

  // ROI Calculator states
  const [traffic, setTraffic] = useState<number>(15000);
  const [convRate, setConvRate] = useState<number>(1.2); 
  const [customerLTV, setCustomerLTV] = useState<number>(25000); 
  const [trafficMult, setTrafficMult] = useState<number>(2.5); 
  const [targetConvRate, setTargetConvRate] = useState<number>(2.8); 

  const [currentLeads, setCurrentLeads] = useState<number>(0);
  const [currentRevenue, setCurrentRevenue] = useState<number>(0);
  const [projectedLeads, setProjectedLeads] = useState<number>(0);
  const [projectedRevenue, setProjectedRevenue] = useState<number>(0);
  const [revenueGain, setRevenueGain] = useState<number>(0);

  // Sync ROI math
  useEffect(() => {
    const cLeads = Math.round(traffic * (convRate / 100));
    const cRev = cLeads * customerLTV;

    const pTraffic = traffic * trafficMult;
    const pLeads = Math.round(pTraffic * (targetConvRate / 100));
    const pRev = pLeads * customerLTV;

    setCurrentLeads(cLeads);
    setCurrentRevenue(cRev);
    setProjectedLeads(pLeads);
    setProjectedRevenue(pRev);
    setRevenueGain(pRev - cRev);
  }, [traffic, convRate, customerLTV, trafficMult, targetConvRate]);

  useEffect(() => {
    if (targetConvRate < convRate) {
      setTargetConvRate(Math.min(10, Number((convRate + 1.0).toFixed(1))));
    }
  }, [convRate]);

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
      <div className="px-5 sm:px-8 lg:px-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
            2
          </div>
          <span className="text-[12px] sm:text-[13px] font-medium border border-gray-300 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-900">
            Featured client work
          </span>
        </div>

        {/* Tab Selector */}
        <div className="flex bg-gray-200/60 p-1 rounded-full w-fit">
          <button
            onClick={() => setActiveTab('cases')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              activeTab === 'cases' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            Case Studies
          </button>
          <button
            onClick={() => setActiveTab('roi')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              activeTab === 'roi' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            ROI Forecaster
          </button>
        </div>
      </div>

      {/* Heading h2 */}
      <div className="px-5 sm:px-8 lg:px-12 mb-10 sm:mb-14 lg:mb-16">
        <h2 
          className="font-medium leading-[1.08] tracking-[-0.03em] text-gray-900"
          style={{ fontSize: headlineSize }}
        >
          {activeTab === 'cases' ? 'Our projects' : 'Forecast returns'}
        </h2>
      </div>

      {/* Tab 1: Case Studies */}
      {activeTab === 'cases' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 px-5 sm:px-8 lg:px-12 w-full animate-fade-in">
          
          {/* Card 1: Narrativ (Performance Marketing) */}
          <div className="flex flex-col">
            <div className="aspect-[329/246] rounded-2xl overflow-hidden bg-[#1a1d2e] relative group cursor-pointer shadow-sm">
              <video 
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_122702_390f5305-8719-41d5-ae80-d23ab3796c28.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Hover Button */}
              <div className="absolute bottom-4 left-4 z-20 flex items-center justify-center">
                <div className="bg-white text-gray-900 h-9 w-9 rounded-full flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:w-[148px] overflow-hidden pr-3 select-none shadow-md">
                  <span className="text-[13px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] delay-100 whitespace-nowrap pl-4">
                    Learn more
                  </span>
                  <div className="w-5 h-5 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:rotate-0 -rotate-45 shrink-0 text-gray-900">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <span className="text-[14px] sm:text-[15px] font-semibold text-gray-900 mt-4 px-1">
              Narrativ — Performance Campaigns
            </span>
            <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed mt-1 px-1 max-w-md">
              Google & Meta ad scaling. Powered by Conversions API tracking to lower cost-per-acquisition by 28%.
            </p>
          </div>

          {/* Card 2: Luminar (SEO & Inbound) */}
          <div className="flex flex-col">
            <div className="aspect-square rounded-2xl overflow-hidden bg-[#6b6b6b] relative group cursor-pointer shadow-sm">
              <video 
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_123323_f909c2b8-ff6c-4edf-882b-8ebcdbe389b5.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Hover Button */}
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

            <span className="text-[14px] sm:text-[15px] font-semibold text-gray-900 mt-4 px-1">
              Luminar — Organic SEO Bedrock
            </span>
            <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed mt-1 px-1 max-w-md">
              Compounding keyword authority and technical site speed upgrades, driving high-intent lead flow.
            </p>
          </div>

        </div>
      )}

      {/* Tab 2: ROI Forecaster */}
      {activeTab === 'roi' && (
        <div className="px-5 sm:px-8 lg:px-12 w-full animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-white border border-gray-200/60 rounded-3xl p-6 sm:p-8 shadow-sm">
            
            {/* Sliders (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col gap-6 pr-0 lg:pr-6 border-r-0 lg:border-r border-gray-100">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2 pb-3 border-b border-gray-100">
                <TrendingUp className="w-4.5 h-4.5 text-[#F26522]" />
                Baseline Parameters
              </h3>

              {/* Slider 1: Traffic */}
              <div className="flex flex-col">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  <span>Monthly Traffic</span>
                  <span className="text-[#F26522] font-mono">{traffic.toLocaleString()} visitors</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={traffic}
                  onChange={(e) => setTraffic(Number(e.target.value))}
                  className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#F26522]"
                />
              </div>

              {/* Slider 2: Conversion Rate */}
              <div className="flex flex-col">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  <span>Current Conversion Rate</span>
                  <span className="text-[#F26522] font-mono">{convRate.toFixed(1)}%</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="10.0"
                  step="0.1"
                  value={convRate}
                  onChange={(e) => setConvRate(Number(e.target.value))}
                  className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#F26522]"
                />
              </div>

              {/* Slider 3: LTV */}
              <div className="flex flex-col">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  <span>Deal/Customer Value (LTV)</span>
                  <span className="text-[#F26522] font-mono">₹{customerLTV.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="500000"
                  step="5000"
                  value={customerLTV}
                  onChange={(e) => setCustomerLTV(Number(e.target.value))}
                  className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#F26522]"
                />
              </div>

              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2 pb-3 border-b border-gray-100 mt-2">
                <Award className="w-4.5 h-4.5 text-[#F26522]" />
                Target Settings
              </h3>

              {/* Slider 4: Traffic Mult */}
              <div className="flex flex-col">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  <span>Traffic Multiplier</span>
                  <span className="text-[#F26522] font-mono">{trafficMult.toFixed(1)}x ({ (traffic * trafficMult).toLocaleString() } views)</span>
                </div>
                <input
                  type="range"
                  min="1.5"
                  max="5.0"
                  step="0.5"
                  value={trafficMult}
                  onChange={(e) => setTrafficMult(Number(e.target.value))}
                  className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#F26522]"
                />
              </div>

              {/* Slider 5: Target Conv Rate */}
              <div className="flex flex-col">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  <span>Target Conversion Rate</span>
                  <span className="text-[#F26522] font-mono">{targetConvRate.toFixed(1)}%</span>
                </div>
                <input
                  type="range"
                  min={convRate}
                  max="10.0"
                  step="0.1"
                  value={targetConvRate}
                  onChange={(e) => setTargetConvRate(Number(e.target.value))}
                  className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#F26522]"
                />
              </div>
            </div>

            {/* Results Display (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between p-2 pl-0 lg:pl-6 gap-8">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#F26522] block mb-6">
                  Forecaster Yields
                </span>

                <span className="text-xs text-gray-400 uppercase font-bold tracking-wider block">
                  Projected Monthly Revenue Gain
                </span>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-gray-900 text-2xl font-mono">₹</span>
                  <span className="text-4xl sm:text-5xl font-extrabold text-gray-900 font-mono tracking-tight">
                    {revenueGain.toLocaleString('en-IN')}
                  </span>
                  <span className="text-gray-500 text-xs font-semibold uppercase">/ mo</span>
                </div>

                <div className="space-y-3.5 mt-8">
                  {/* Lead metrics comparison */}
                  <div className="flex justify-between items-center bg-gray-50 rounded-xl p-3 border border-gray-100">
                    <div className="flex items-center gap-2 text-xs text-gray-600 font-medium">
                      <Users className="w-4 h-4 text-[#F26522]" />
                      <span>Monthly Leads</span>
                    </div>
                    <div className="text-right text-xs">
                      <span className="text-gray-400 block">Baseline: {currentLeads}</span>
                      <span className="text-gray-900 font-bold block">Target: {projectedLeads} (+{projectedLeads - currentLeads})</span>
                    </div>
                  </div>

                  {/* Revenue metrics comparison */}
                  <div className="flex justify-between items-center bg-gray-50 rounded-xl p-3 border border-gray-100">
                    <div className="flex items-center gap-2 text-xs text-gray-600 font-medium">
                      <div className="w-4 h-4 flex items-center justify-center font-bold text-[#F26522] text-[10px] border border-[#F26522]/40 rounded-full select-none leading-none pt-0.5">₹</div>
                      <span>Monthly Revenue</span>
                    </div>
                    <div className="text-right text-xs font-mono">
                      <span className="text-gray-400 block">Baseline: ₹{currentRevenue.toLocaleString('en-IN')}</span>
                      <span className="text-gray-900 font-bold block">Target: ₹{projectedRevenue.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-gray-900 hover:bg-gray-800 text-white text-center text-xs font-semibold py-3 px-4 rounded-full transition-all block active:scale-95 shadow-sm"
                >
                  Configure My Campaign Funnels
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
