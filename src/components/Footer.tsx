import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Video, ArrowUp, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => (prev + 1) % 86400);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatClock = (s: number) => {
    const hrs = String(Math.floor(s / 3600)).padStart(2, '0');
    const mins = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
    const secs = String(s % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}:12`;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b0e14] border-t border-[#253146] py-12 text-slate-400 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#253146]/70">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#141a24] border border-[#253146] flex items-center justify-center">
              <Video className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <div className="text-white font-bold text-sm tracking-wide">
                {PORTFOLIO_DATA.personal.name}
              </div>
              <div className="text-xs font-mono-code text-slate-400">
                BROADCAST STUDIO & DIGITAL MEDIA
              </div>
            </div>
          </div>

          {/* Running Master Clock */}
          <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-[#141a24] border border-[#253146] font-mono-code text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span className="text-slate-400">MASTER TIMECODE:</span>
            <span className="text-amber-400 font-bold">{formatClock(seconds)}</span>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#141a24] hover:bg-[#1d2635] text-slate-300 hover:text-white border border-[#253146] text-xs font-mono-code transition-colors"
          >
            <span>TOP OF REEL</span>
            <ArrowUp className="w-3.5 h-3.5 text-amber-400" />
          </button>
        </div>

        {/* Bottom copyright & local notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-slate-400">
          <div>
            © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. All verified career rights reserved.
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Built locally via Resume Portfolio Studio • No external personal data published</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
