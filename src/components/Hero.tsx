import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Download, ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const [timecodeSeconds, setTimecodeSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimecodeSeconds((prev) => (prev + 1) % 3600);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimecode = (totalSec: number) => {
    const hrs = '00';
    const mins = String(Math.floor(totalSec / 60)).padStart(2, '0');
    const secs = String(totalSec % 60).padStart(2, '0');
    const frames = '24';
    return `${hrs}:${mins}:${secs}:${frames}`;
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden broadcast-grid-bg">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Positioning */}
          <div className="lg:col-span-7 space-y-6">
            {/* Live Broadcast Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#141a24] border border-[#253146] text-xs font-mono-code text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="text-amber-400 font-semibold tracking-wide">BROADCAST PRODUCTION LEAD</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">7+ YEARS ON AIR & STUDIO</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Crafting Visual Impact Across{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
                National Broadcasts
              </span>{' '}
              & Institutional Media
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              {PORTFOLIO_DATA.personal.summary}
            </p>

            {/* Verified Credentials Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-[#141a24] border border-[#253146] text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                Kendriya Vidyalaya Sangathan (HQ)
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-[#141a24] border border-[#253146] text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                IGNOU Swayam / Swayam Prabha
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-[#141a24] border border-[#253146] text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                Banaras Hindu University (Master in PR)
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#timeline"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transform hover:-translate-y-0.5"
              >
                <span>View Production Timeline</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.resumePdfUrl}
                download="Sudip_Raj_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-[#141a24] hover:bg-[#1d2635] text-slate-200 border border-[#253146] hover:border-slate-500 transition-all"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>Download Official CV</span>
              </a>
            </div>

            {/* Key Metrics Counter Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#253146]/80">
              {PORTFOLIO_DATA.personal.stats.map((stat, i) => (
                <div key={i} className="p-3 rounded-lg bg-[#141a24]/60 border border-[#253146]/60">
                  <div className="text-xl sm:text-2xl font-bold font-mono-code text-white text-amber-400">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5 leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Broadcast Viewfinder Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Studio Viewfinder Frame */}
              <div className="relative rounded-2xl bg-[#141a24] border-2 border-[#253146] p-4 shadow-2xl shadow-black/80 overflow-hidden group">
                {/* Viewfinder corner brackets */}
                <div className="absolute top-2 left-2 w-6 h-6 viewfinder-corner-tl pointer-events-none" />
                <div className="absolute top-2 right-2 w-6 h-6 viewfinder-corner-tr pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-6 h-6 viewfinder-corner-bl pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-6 h-6 viewfinder-corner-br pointer-events-none" />

                {/* Viewfinder Top Bar */}
                <div className="flex items-center justify-between pb-3 px-1 border-b border-[#253146]/60 font-mono-code text-[11px] text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1.5 text-red-400 font-bold">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                      REC
                    </span>
                    <span className="text-slate-300">4K UHD</span>
                    <span className="text-cyan-400">60FPS</span>
                  </div>
                  <div className="text-amber-400 font-semibold">{formatTimecode(timecodeSeconds)}</div>
                </div>

                {/* Portrait & Camera Overlay Container */}
                <div className="relative my-3 rounded-xl overflow-hidden bg-black aspect-[4/5] border border-[#253146]">
                  {/* Actual Authentic Headshot of Sudip Raj */}
                  <img
                    src={PORTFOLIO_DATA.personal.photoUrl}
                    alt="Sudip Raj — Multimedia Specialist"
                    className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Viewfinder crosshairs overlay */}
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                    <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 border-t border-l border-white/40" />
                    </div>
                  </div>

                  {/* Audio Level Meter Overlay (Visual) */}
                  <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1.5 rounded border border-white/10 font-mono-code text-[10px] space-y-1">
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <span className="w-4">CH1</span>
                      <div className="flex gap-0.5">
                        <span className="w-1.5 h-2 bg-emerald-500 rounded-xs"></span>
                        <span className="w-1.5 h-2 bg-emerald-500 rounded-xs"></span>
                        <span className="w-1.5 h-2 bg-emerald-500 rounded-xs"></span>
                        <span className="w-1.5 h-2 bg-emerald-500 rounded-xs"></span>
                        <span className="w-1.5 h-2 bg-amber-400 rounded-xs"></span>
                        <span className="w-1.5 h-2 bg-slate-700 rounded-xs"></span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <span className="w-4">CH2</span>
                      <div className="flex gap-0.5">
                        <span className="w-1.5 h-2 bg-emerald-500 rounded-xs"></span>
                        <span className="w-1.5 h-2 bg-emerald-500 rounded-xs"></span>
                        <span className="w-1.5 h-2 bg-emerald-500 rounded-xs"></span>
                        <span className="w-1.5 h-2 bg-amber-400 rounded-xs"></span>
                        <span className="w-1.5 h-2 bg-slate-700 rounded-xs"></span>
                        <span className="w-1.5 h-2 bg-slate-700 rounded-xs"></span>
                      </div>
                    </div>
                  </div>

                  {/* Camera Settings Overlay */}
                  <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-2 py-1 rounded border border-white/10 font-mono-code text-[10px] text-slate-300 space-y-0.5 text-right">
                    <div>ISO 800</div>
                    <div>F/2.8 • 1/120</div>
                    <div className="text-cyan-400">WB 5600K</div>
                  </div>
                </div>

                {/* Viewfinder Bottom Status Card */}
                <div className="p-3 bg-[#0b0e14] rounded-xl border border-[#253146] space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white text-sm">Sudip Raj</div>
                      <div className="text-xs text-amber-400 font-medium">KVS HQ • Publication & Branding</div>
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono-code text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      VERIFIED
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono-code text-slate-400 pt-1 border-t border-[#253146]/60">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      New Delhi & Varanasi
                    </span>
                    <span className="text-slate-400">PR Specialization</span>
                  </div>
                </div>
              </div>

              {/* Decorative studio back glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-cyan-500/20 rounded-3xl blur-xl -z-10 opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
