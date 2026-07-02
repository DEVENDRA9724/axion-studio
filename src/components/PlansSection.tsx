import React from 'react';
import { Shield, Sparkles, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

interface PlanItem {
  name: string;
  price: string;
  priceSub: string;
  badge?: string;
  description: string;
  features: string[];
  icon: React.ComponentType<any>;
  accentColor: string;
  buttonType: 'gray' | 'orange' | 'dark';
}

interface PlansSectionProps {
  onPlanClick: () => void;
}

export const PlansSection: React.FC<PlansSectionProps> = ({ onPlanClick }) => {
  const plans: PlanItem[] = [
    {
      name: 'Core Sample Tier',
      price: '₹39,000',
      priceSub: 'Baseline Retainer / Quote on Request',
      description: 'Ideal for local businesses wishing to secure their organic search bedrock and baseline online authority.',
      icon: Shield,
      accentColor: 'text-blue-500',
      buttonType: 'gray',
      features: [
        'Local SEO & Keyword Mapping',
        'Speed & Core Web Vitals Audits',
        'Monthly Transparent Reporting',
        '2 Conversion Landing Pages',
        'Lead Capture Form Integration',
      ],
    },
    {
      name: 'Stratum Tier',
      price: '₹99,000',
      priceSub: 'Average Retainer / Quote on Request',
      badge: 'Popular Choice',
      description: 'Engineered for scaling brands looking to deploy ad campaigns and secure qualified lead pipelines.',
      icon: Zap,
      accentColor: 'text-[#F26522]',
      buttonType: 'orange',
      features: [
        'Everything in Core Sample',
        'Performance Ads (Google & Meta)',
        'Full Funnel A/B Testing',
        'Custom Web & UX Development',
        'Bi-weekly Performance Syncs',
        'Up to 10 Target Keywords Ranked',
      ],
    },
    {
      name: 'Deep Time Tier',
      price: 'Custom Retainer',
      priceSub: 'Omnichannel Campaign / Pricing on Request',
      description: 'Omnichannel campaigns combining deep data intelligence, custom app development, and social media content engines.',
      icon: Sparkles,
      accentColor: 'text-purple-500',
      buttonType: 'dark',
      features: [
        'Everything in Stratum Tier',
        'Social Media Content Engine',
        'Full Brand Creative Storytelling',
        'Dedicated Campaign Manager',
        'Unlimited Site Speed Optimizations',
        'Predictive Lead Modeling',
      ],
    },
  ];

  return (
    <section 
      id="plans" 
      className="py-20 sm:py-28 bg-[#F5F5F5] border-t border-gray-200 w-full relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto w-full px-5 sm:px-8 lg:px-12">
      {/* Background glow decoration */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-[#F26522]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[11px] sm:text-[12px] font-bold text-gray-900 uppercase tracking-widest bg-white border border-gray-200 rounded-full px-4 py-1.5 inline-block mb-4 shadow-sm">
            Investment Levels
          </span>
          <h2 
            className="font-medium mb-4 leading-[1.08] tracking-[-0.03em] text-gray-900"
            style={{ fontSize: 'clamp(1.75rem, 5vw, 3.2rem)' }}
          >
            Custom <span className="font-playfair italic">Growth Plans</span>
          </h2>
          <p className="max-w-xl mx-auto text-sm sm:text-base leading-relaxed text-gray-650">
            Choose the strategic depth that matches your growth budget. Transparent reporting and ROI calculations integrated at every level.
          </p>
        </div>

        {/* Plans Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto w-full">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            
            // Map button classes based on type
            let buttonBg = 'bg-gray-100 hover:bg-gray-200 text-gray-900';
            let circleColor = 'bg-white text-gray-900';
            if (plan.buttonType === 'orange') {
              buttonBg = 'bg-[#F26522] hover:bg-[#e05a1a] text-white';
              circleColor = 'bg-white text-[#F26522]';
            } else if (plan.buttonType === 'dark') {
              buttonBg = 'bg-gray-900 hover:bg-gray-800 text-white';
              circleColor = 'bg-white text-gray-900';
            }

            return (
              <div
                key={index}
                className={`border rounded-3xl p-8 flex flex-col justify-between transition-all duration-355 relative bg-white ${
                  plan.badge
                    ? 'border-[#F26522] shadow-lg shadow-[#F26522]/5 lg:scale-105 z-10'
                    : 'border-gray-250 hover:border-gray-300 shadow-sm'
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#F26522] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {plan.badge}
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
                    <Icon className={`w-5 h-5 ${plan.accentColor}`} />
                  </div>

                  <div className="mb-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold font-mono text-gray-900">{plan.price}</span>
                      {plan.price !== 'Custom Retainer' && (
                        <span className="text-xs text-gray-500 font-semibold uppercase">/ month</span>
                      )}
                    </div>
                    <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide block mt-1">
                      {plan.priceSub}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm leading-relaxed mb-6 text-gray-600">
                    {plan.description}
                  </p>

                  <ul className="space-y-3.5 pt-6 border-t border-gray-100">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="text-xs flex items-start gap-3 text-gray-600 leading-relaxed">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${plan.accentColor}`} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Custom Axion Text-Roll CTA Button */}
                <div className="mt-8">
                  <button
                    onClick={onPlanClick}
                    className={`flex items-center justify-between w-full font-semibold rounded-full pl-5 pr-2 py-2 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group cursor-pointer ${buttonBg}`}
                  >
                    <div className="overflow-hidden h-[20px] relative pr-4">
                      <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
                        <span className="h-[20px] flex items-center text-xs">Request custom quote</span>
                        <span className="h-[20px] flex items-center text-xs">Request custom quote</span>
                      </div>
                    </div>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:rotate-[-45deg] shrink-0 ${circleColor}`}>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
      </div>
    </section>
  );
};
