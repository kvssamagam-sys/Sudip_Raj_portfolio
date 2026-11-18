import React from 'react';
import { GraduationCap, Award, BookOpen, FileText, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-[#0b0e14] border-t border-[#253146] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141a24] border border-[#253146] text-xs font-mono-code text-amber-400 mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>ACADEMIC FOUNDATION // BHU ALUMNUS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Education, Research & National Recognition
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md font-mono-code">
            Rigorous mass communication theory and public relations research backing up practical broadcast operations.
          </p>
        </div>

        {/* Master's Spotlight Card (Banaras Hindu University) */}
        <div className="rounded-2xl bg-gradient-to-r from-[#141a24] via-[#17202c] to-[#141a24] border-2 border-amber-500/40 p-6 sm:p-8 mb-10 shadow-2xl shadow-black/60 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#253146]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono-code font-bold mb-3">
                <span>FLAGSHIP POSTGRADUATE QUALIFICATION</span>
                <span>•</span>
                <span>BHU VARANASI</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Master in Mass Communication (PR Specialization)
              </h3>
              <p className="text-base text-slate-300 font-medium mt-1">
                Banaras Hindu University (BHU) • <span className="font-mono-code text-amber-400/90 text-sm">Jul 2020 – Jun 2022</span>
              </p>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0b0e14] border border-[#253146] text-xs font-mono-code text-slate-300">
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>Public Relations (PR) Major</span>
            </div>
          </div>

          {/* Research Spotlight Callout */}
          <div className="pt-6">
            <div className="text-xs font-mono-code text-amber-400 uppercase tracking-wider font-bold mb-2 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>Dissertation & Academic Research:</span>
            </div>
            <div className="p-4 rounded-xl bg-[#0b0e14] border border-[#253146] text-slate-200 text-sm leading-relaxed">
              <span className="font-bold text-white">“Use of Twitter by Politicians in Uttar Pradesh Assembly Elections (Analysis-2022)”</span>
              <p className="text-slate-400 text-xs mt-1.5 leading-normal">
                An analytical study investigating how political campaigns leveraged microblogging for public communication, narrative building, and constituency engagement during the 2022 UP Assembly Elections.
              </p>
            </div>
          </div>
        </div>

        {/* Other Education & Honors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bachelor's Degree */}
          <div className="rounded-2xl bg-[#141a24] border border-[#253146] p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono-code text-slate-400 mb-2">Aug 2017 – Nov 2020</div>
              <h4 className="text-lg font-bold text-white mb-1">
                Bachelor in Mass Communication with Honours
              </h4>
              <div className="text-xs font-mono-code text-amber-400 mb-4">
                Mahatma Gandhi Kashi Vidyapith, Varanasi
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Foundational study of print, broadcast, digital media systems, and media law.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#253146] text-xs font-mono-code text-slate-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Honours Graduate
            </div>
          </div>

          {/* Diploma in Photography */}
          <div className="rounded-2xl bg-[#141a24] border border-[#253146] p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono-code text-slate-400 mb-2">Apr 2019 – Mar 2020</div>
              <h4 className="text-lg font-bold text-white mb-1">
                Diploma in Photography
              </h4>
              <div className="text-xs font-mono-code text-amber-400 mb-4">
                SIFDI, Varanasi
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Hands-on practical mastery in photographic composition, lighting, studio portraiture, and visual aesthetics.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#253146] text-xs font-mono-code text-slate-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> SIFDI Certified
            </div>
          </div>

          {/* National Award */}
          <div className="rounded-2xl bg-[#141a24] border border-amber-500/40 p-6 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 blur-xl pointer-events-none" />
            <div>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono-code font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 mb-2">
                <Award className="w-3 h-3" /> NATIONAL RECOGNITION
              </div>
              <h4 className="text-base font-bold text-white mb-1">
                Outstanding Contribution in Communication & Promotion
              </h4>
              <div className="text-xs font-mono-code text-amber-400 mb-2">
                Lighthouse of Media Professionals
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                National webinar citation for excellence in media production, promotion, and public communication initiatives.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#253146] text-xs font-mono-code text-amber-400 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" /> Verified Honor
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
