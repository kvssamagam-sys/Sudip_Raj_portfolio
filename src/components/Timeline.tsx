import React, { useState } from 'react';
import { PORTFOLIO_DATA, type ExperienceItem } from '../data/portfolioData';
import { Building2, Calendar, MapPin, Tag, Film } from 'lucide-react';

export const Timeline: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'broadcast' | 'branding' | 'production' | 'operations'>('all');

  const filteredExperiences = PORTFOLIO_DATA.experiences.filter((exp) => {
    if (activeFilter === 'all') return true;
    return exp.category === activeFilter;
  });

  const filterTabs = [
    { id: 'all', label: 'All Tracks (7+ Yrs)' },
    { id: 'broadcast', label: 'Broadcast Television' },
    { id: 'branding', label: 'Institutional Branding' },
    { id: 'production', label: 'Post-Production & Video' },
    { id: 'operations', label: 'Operations & Management' },
  ];

  return (
    <section id="timeline" className="py-20 bg-[#0e121a] border-t border-[#253146] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141a24] border border-[#253146] text-xs font-mono-code text-amber-400 mb-3">
              <Film className="w-3.5 h-3.5" />
              <span>NLE TIMELINE TRACK // 2017 – PRESENT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Production Experience & Career Timeline
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md font-mono-code">
            A continuous track record of broadcast journalism, high-stakes camera production, institutional communication, and post-production.
          </p>
        </div>

        {/* Timeline Track Filter Navigation */}
        <div className="flex flex-wrap items-center gap-2 mb-12 p-2 rounded-xl bg-[#141a24] border border-[#253146] w-fit">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold font-mono-code transition-all focus:outline-none ${
                activeFilter === tab.id
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-[#1d2635]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-[#253146] ml-4 md:ml-32 space-y-12">
          {filteredExperiences.map((exp: ExperienceItem) => (
            <div key={exp.id} className="relative pl-6 md:pl-10 group">
              {/* Left Side Timecode (Desktop View) */}
              <div className="hidden md:block absolute -left-32 top-1 text-right w-24">
                <span className="font-mono-code text-xs font-semibold text-amber-400/90 block">
                  {exp.timecode}
                </span>
                <span className="text-[11px] font-mono-code text-slate-400">
                  {exp.isCurrent ? '● LIVE' : 'ARCHIVE'}
                </span>
              </div>

              {/* Node Marker */}
              <div
                className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all ${
                  exp.isCurrent
                    ? 'bg-red-500 border-white shadow-lg shadow-red-500/50 animate-pulse'
                    : 'bg-[#141a24] border-amber-400 group-hover:scale-125 group-hover:bg-amber-400'
                }`}
              />

              {/* Milestone Card */}
              <div className="rounded-2xl bg-[#141a24] border border-[#253146] hover:border-amber-500/40 p-6 transition-all duration-300 shadow-xl shadow-black/40">
                {/* Top Meta Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono-code font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    {exp.isCurrent && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono-code font-bold bg-red-500/20 text-red-400 border border-red-500/40">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
                        CURRENT POSITION
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-mono-code text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {exp.location}
                  </span>
                </div>

                {/* Role and Organization */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-slate-300 font-medium text-sm mt-1">
                    <Building2 className="w-4 h-4 text-amber-400" />
                    <span>{exp.organization}</span>
                  </div>
                </div>

                {/* Description Bullets */}
                <ul className="space-y-2 mb-5">
                  {exp.description.map((point, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                      <span className="text-amber-400 font-mono-code text-xs mt-1">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills Chips */}
                <div className="pt-4 border-t border-[#253146]/70 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono-code text-slate-400 flex items-center gap-1 mr-1">
                    <Tag className="w-3 h-3" /> Tools & Skills:
                  </span>
                  {exp.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 rounded bg-[#1d2635] text-slate-300 text-xs font-mono-code border border-[#253146] hover:border-slate-500 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
