import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Cpu, CheckCircle2, ShieldCheck, Languages } from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-[#0e121a] border-t border-[#253146] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141a24] border border-[#253146] text-xs font-mono-code text-amber-400 mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>TECHNICAL SPECIFICATIONS // RIG & SKILLS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Production Rig & Software Stack
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md font-mono-code">
            Equipment handling, nonlinear editing mastery, and institutional strategy proven across national projects.
          </p>
        </div>

        {/* 3 Technical Domain Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {PORTFOLIO_DATA.technicalProficiencies.map((group, index) => (
            <div
              key={index}
              className="rounded-2xl bg-[#141a24] border border-[#253146] p-6 hover:border-amber-500/40 transition-colors"
            >
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#253146]">
                <h3 className="font-bold text-white text-lg tracking-tight">
                  {group.category}
                </h3>
                <span className="text-[11px] font-mono-code px-2 py-0.5 rounded bg-[#1d2635] text-amber-400">
                  RIG 0{index + 1}
                </span>
              </div>

              <div className="space-y-4">
                {group.items.map((item, i) => (
                  <div key={i} className="p-3 rounded-xl bg-[#0b0e14] border border-[#253146]/60">
                    <div className="flex items-center gap-2 font-semibold text-sm text-slate-100 mb-1">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{item.name}</span>
                    </div>
                    {item.description && (
                      <p className="text-xs text-slate-400 leading-relaxed pl-6">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Languages Dual Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Certifications List */}
          <div className="lg:col-span-8 rounded-2xl bg-[#141a24] border border-[#253146] p-6">
            <div className="flex items-center gap-2 mb-4 font-mono-code text-xs font-bold text-amber-400">
              <ShieldCheck className="w-4 h-4" />
              <span>OFFICIAL TECHNICAL CERTIFICATIONS</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {PORTFOLIO_DATA.certifications.map((cert, index) => (
                <div key={index} className="p-3 rounded-lg bg-[#0b0e14] border border-[#253146]/70">
                  <div className="font-semibold text-sm text-white">{cert.title}</div>
                  <div className="text-xs text-slate-400 font-mono-code mt-0.5">{cert.issuer}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages & Working Proficiency */}
          <div className="lg:col-span-4 rounded-2xl bg-[#141a24] border border-[#253146] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 font-mono-code text-xs font-bold text-cyan-400">
                <Languages className="w-4 h-4" />
                <span>BROADCAST LANGUAGES</span>
              </div>
              <div className="space-y-3">
                {PORTFOLIO_DATA.languages.map((lang, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-[#0b0e14] border border-[#253146]/70">
                    <span className="font-bold text-white text-sm">{lang.name}</span>
                    <span className="text-xs font-mono-code text-slate-400">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-[11px] font-mono-code text-slate-400 pt-3 border-t border-[#253146] mt-4">
              All credentials verified against authenticated resume records.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
