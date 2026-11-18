import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Camera, Film, Share2, Award, CheckCircle2 } from 'lucide-react';

export const Disciplines: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Camera':
        return <Camera className="w-6 h-6 text-amber-400" />;
      case 'Film':
        return <Film className="w-6 h-6 text-amber-400" />;
      case 'Share2':
        return <Share2 className="w-6 h-6 text-amber-400" />;
      case 'Award':
      default:
        return <Award className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="disciplines" className="py-20 bg-[#0b0e14] border-t border-[#253146] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141a24] border border-[#253146] text-xs font-mono-code text-amber-400 mb-3">
              <span>PILLAR 01 – 04</span>
              <span>//</span>
              <span>CORE CAPABILITIES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Production Disciplines & Core Competencies
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md font-mono-code">
            Mastery across the complete visual communication workflow — from live studio framing to post-production and national campaigns.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.disciplines.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-[#141a24] border border-[#253146] hover:border-amber-500/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60 flex flex-col justify-between"
            >
              {/* Top Row: Number & Tag */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono-code text-xs font-bold text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                    CHANNEL {item.number}
                  </span>
                  <span className="text-xs font-mono-code text-slate-400">{item.tag}</span>
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#1d2635] border border-[#253146] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform group-hover:border-amber-400/30">
                  {getIcon(item.icon)}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom status line */}
              <div className="pt-5 mt-5 border-t border-[#253146]/70 flex items-center justify-between text-xs font-mono-code text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Verified Field Work
                </span>
                <span className="text-amber-400/80 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
