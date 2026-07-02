import React, { useState } from 'react';
import { BookOpen, Search, Clock, ArrowRight, X, Sparkles } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  category: 'Meta Ads' | 'SEO' | 'Marketing Modes' | 'Digital Awareness';
  readTime: string;
  date: string;
  snippet: string;
  content: string[];
  ctaText: string;
}

interface BlogSectionProps {
  onCtaClick: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onCtaClick }) => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const articles: Article[] = [
    {
      id: 'meta-ads',
      title: 'Cracking the Code: A Guide to Optimizing Meta Ads in 2026',
      category: 'Meta Ads',
      readTime: '5 min read',
      date: 'June 25, 2026',
      snippet: 'Attribution loss and creative fatigue can erode your Facebook and Instagram ad returns. Learn how to build high-performance bid models and creative hooks.',
      content: [
        'Meta advertising (Facebook & Instagram) remains the fastest scaling engine for B2C and B2B lead generation. However, as Meta algorithms rely more heavily on broad targeting and artificial intelligence, the competitive edge has shifted from technical ad-set hacking to creative architecture and direct data tracking.',
        '1. Server-Side Conversions (CAPI): The first layer of optimization is fixing attribution loss. Browser-side pixel cookies block up to 30% of actual sales data due to browser privacy frameworks. By deploying the Conversions API (CAPI), you feed Meta\'s machine learning clean server-side data, improving matching accuracy and lowering cost-per-acquisition (CPA).',
        '2. Creative Hooks & Staggered Testing: With broad targeting, your ad copy is your targeting. You must test 3 distinct hook variations (e.g., question hook, direct benefit hook, statistical hook) against the same core product benefits. Refresh ad creatives every 14 days to prevent audience saturation.',
        '3. Advantage+ Shopping Campaigns (ASC): Let the algorithm work. Advantage+ settings yield up to 20% higher conversion rates by dynamically matching visual assets to users based on real-time activity trends. Support this with structured retargeting campaigns to capture warm landing page visitors.',
      ],
      ctaText: 'Audit my Meta Ad account',
    },
    {
      id: 'marketing-modes',
      title: 'The Strata of Scale: Demystifying the Modes of Modern Marketing',
      category: 'Marketing Modes',
      readTime: '6 min read',
      date: 'June 18, 2026',
      snippet: 'From organic search bedrocks to high-velocity paid ads, discover how different marketing channels stack together to build an unbreakable customer pipeline.',
      content: [
        'Many business owners make the mistake of focusing on a single marketing channel. They invest solely in Google PPC or put all their resources into social media posts. The truth is, modern marketing is stratigraphic—each mode builds upon and accelerates the others.',
        '1. Organic Bedrock (SEO): Search Engine Optimization forms your primary bedrock. It is a compounding asset. Over 6 to 12 months, keyword mappings and site speeds construct a permanent stream of high-intent searchers. It establishes authority and handles baseline organic credibility.',
        '2. Volcanic Paid Ads (PPC/Performance): Once your site is speed-optimized, paid ads (Meta & Google PPC) act as direct volcanic heat. They drive immediate traffic. Use ads to test product messaging, launch new campaigns, and capture direct conversions while your organic search authority matures.',
        '3. Retention Strata (Funnels & SMM): Social Media Marketing (SMM) and automated email funnels act as the topsoil. They cultivate community, foster brand trust, and retarget cold clicks. Email drips ensure that visitors who click your paid ads but leave without buying are nurtured into eventual sales.',
      ],
      ctaText: 'Design my multi-channel plan',
    },
    {
      id: 'seo-authority',
      title: 'Sedimenting Trust: Why SEO is Your Brand\'s Permanent Bedrock',
      category: 'SEO',
      readTime: '4 min read',
      date: 'June 10, 2026',
      snippet: 'Unlike paid traffic which halts the moment you pause ad budgets, organic search visibility accumulates value over time, creating a structural source of sales.',
      content: [
        'In digital marketing, ad spend is rented land. The moment your campaign budget stops, your traffic stops. Search Engine Optimization (SEO) represents purchased land. It is a long-term investment that accumulates digital real estate value.',
        '1. The Compounding Traffic Curve: When you optimize page structures, metadata, and write targeted articles, Google begins indexing your brand. This traffic compounds. An article written today can generate organic leads 3 years from now at zero incremental cost, lowering your overall blended acquisition cost.',
        '2. Intent-Driven Matching: Social media ads interrupt users. Search engine queries capture users actively looking for solutions. A visitor searching "best digital agency in Ahmedabad" has 10x higher buying intent than a user browsing Instagram, leading to higher conversion rates.',
        '3. Structural UX Foundations: Modern search engines evaluate user experience (Core Web Vitals). By optimizing site speeds, mobile responsiveness, and layout stability, you satisfy both Google crawlers and actual human visitors, leading to improved checkout rates.',
      ],
      ctaText: 'Run a free SEO website audit',
    },
    {
      id: 'digital-awareness',
      title: 'Digital Awareness: Transitioning Traffic into Customer Value',
      category: 'Digital Awareness',
      readTime: '3 min read',
      date: 'June 02, 2026',
      snippet: 'Traffic is vanity, conversion is sanity. Learn how modern consumer awareness stages dictate whether web clicks turn into business cash flows.',
      content: [
        'Many brands celebrate hitting 10,000 monthly website visits, yet wonder why sales remain flat. The gap lies in Digital Awareness—understanding the stages of your prospect\'s mind and serving the correct content to align with that state.',
        '1. Unaware Stage (Problem Introduction): Clicks at this stage do not convert immediately. They are browsing. Serve them educational resources, digital checklists, and simple awareness campaigns detailing what problems they might have.',
        '2. Problem-Aware Stage (The Pivot): Users know they have a bottleneck (e.g. low site traffic) but do not know how to fix it. This is where you introduce comparative guides and ROI calculators (like the one above!) to quantify the cost of inaction.',
        '3. Solution-Aware Stage (Conversion Capture): The user is ready to buy or book. They are comparing brands. Serve them custom portfolios, pricing packages, transparent ROI reports, and direct scheduling widgets to secure their booking immediately.',
      ],
      ctaText: 'Scale my customer conversions',
    },
  ];

  const categories = ['All', 'Meta Ads', 'SEO', 'Marketing Modes', 'Digital Awareness'];

  const filteredArticles = articles.filter((art) => {
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          art.snippet.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = activeCategory === 'All' || art.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <section 
      id="insights" 
      className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-white border-t border-gray-200 max-w-[1440px] mx-auto w-full relative"
    >
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#F26522]/10 border border-[#F26522]/30 rounded-full px-4 py-1.5 text-[#F26522] text-xs font-semibold uppercase tracking-wider mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              Knowledge Stratum
            </div>
            <h2 
              className="font-medium leading-[1.08] tracking-[-0.03em] text-gray-900"
              style={{ fontSize: 'clamp(1.75rem, 5vw, 3.2rem)' }}
            >
              Marketing <span className="font-playfair italic">Insights & Strategy</span>
            </h2>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search marketing articles..."
              className="w-full border border-gray-200 focus:border-[#F26522] rounded-full pl-10 pr-4 py-2.5 text-xs outline-none bg-white text-gray-900 placeholder-gray-400 shadow-sm transition-all"
            />
          </div>
        </div>

        {/* Categories filters */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-gray-100">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#F26522] text-white shadow-sm'
                  : 'bg-white border border-gray-200 text-gray-500 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((art) => (
            <div
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              className="group border border-gray-250 bg-white rounded-3xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between hover:shadow-xl cursor-pointer hover:border-[#F26522]/30 hover:shadow-gray-200/40"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4 text-[10px] uppercase font-bold tracking-widest text-[#F26522]">
                  <span>{art.category}</span>
                  <span className="flex items-center gap-1 font-mono font-normal normal-case text-gray-450">
                    <Clock className="w-3.5 h-3.5" />
                    {art.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#F26522] transition-colors leading-tight mb-3">
                  {art.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed mb-6 text-gray-600">
                  {art.snippet}
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-100 text-xs font-semibold">
                <span className="text-gray-400">{art.date}</span>
                <span className="text-[#F26522] flex items-center gap-1 group-hover:translate-x-1 transition-all duration-300">
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}

          {filteredArticles.length === 0 && (
            <div className="col-span-full py-16 text-center">
              <p className="text-gray-550 text-sm">No articles matched your search.</p>
              <button 
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="text-xs text-[#F26522] font-bold uppercase tracking-wider mt-3 hover:underline cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

      </div>

      {/* Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[200] flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fade-in">
          <div className="w-full max-w-3xl rounded-3xl shadow-2xl relative max-h-[85vh] flex flex-col justify-between overflow-hidden bg-white border border-gray-200 text-gray-900">
            
            {/* Modal Header */}
            <div className="p-6 sm:p-8 border-b border-gray-100 flex justify-between items-start gap-4">
              <div>
                <span className="text-[10px] font-bold text-[#F26522] uppercase tracking-widest block mb-1.5">
                  {selectedArticle.category} — {selectedArticle.readTime}
                </span>
                <h3 className="text-xl sm:text-3xl font-bold font-playfair leading-tight">
                  {selectedArticle.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-2 rounded-full border border-gray-150 text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content Scroll Area */}
            <div className="p-6 sm:p-8 overflow-y-auto flex-grow space-y-5 text-sm sm:text-base leading-relaxed">
              {selectedArticle.content.map((p, pIdx) => {
                const isHeading = p.startsWith('1.') || p.startsWith('2.') || p.startsWith('3.');
                return (
                  <p 
                    key={pIdx} 
                    className={
                      isHeading 
                        ? 'font-bold text-base sm:text-lg mt-6 text-gray-900' 
                        : 'text-gray-650'
                    }
                  >
                    {p}
                  </p>
                );
              })}
            </div>

            {/* Modal Footer CTA */}
            <div className="p-6 sm:p-8 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2.5 text-xs text-gray-500">
                <Sparkles className="w-4 h-4 text-[#F26522]" />
                <span>Ready to apply these concepts to your brand?</span>
              </div>
              
              {/* Custom Axion Text-Roll Button */}
              <button
                onClick={() => {
                  setSelectedArticle(null);
                  onCtaClick();
                }}
                className="flex items-center justify-between bg-[#F26522] hover:bg-[#e05a1a] text-white text-[13px] font-semibold rounded-full pl-5 pr-2 py-2 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group cursor-pointer shadow-md"
              >
                <div className="overflow-hidden h-[20px] relative pr-4">
                  <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
                    <span className="h-[20px] flex items-center text-xs">{selectedArticle.ctaText}</span>
                    <span className="h-[20px] flex items-center text-xs">{selectedArticle.ctaText}</span>
                  </div>
                </div>
                <div className="w-7 h-7 bg-white text-[#F26522] rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:rotate-[-45deg] shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
