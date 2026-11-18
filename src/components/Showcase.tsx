import React from 'react';
import { Tv, Layers } from 'lucide-react';

export const Showcase: React.FC = () => {

  const cases = [
    {
      title: 'National Educational Broadcasts',
      platform: 'IGNOU – Swayam / Swayam Prabha Project',
      role: 'Camera Person & Broadcast Production',
      badge: 'NATIONAL DTH CHANNELS',
      accentColor: 'text-amber-400',
      description:
        'Operated multi-camera setups and managed on-location broadcasts for India’s flagship digital education broadcast network (Swayam Prabha DTH). Ensured national broadcast framing, color accuracy, and multi-point studio lighting.',
      points: [
        'Multi-camera studio shoots for national educational telecasts',
        'Rigorous framing, lighting judgment, and broadcast-standard color balancing',
        'Collaboration with academic faculty and media directors',
      ],
      tag: '4K Broadcast Rig',
    },
    {
      title: 'Central Institutional Branding & Digital Strategy',
      platform: 'Kendriya Vidyalaya Sangathan (KVS HQ)',
      role: 'Publication & Branding Expert',
      badge: 'CENTRAL HQ COMMUNICATIONS',
      accentColor: 'text-cyan-400',
      description:
        'Leading official digital communications, social media strategy, and visual publications for Kendriya Vidyalaya Sangathan headquarters in New Delhi. Managing national reach, visual standards, and publication packages.',
      points: [
        'End-to-end administration of official social channels',
        'Strategic multimedia campaigns for nationwide education initiatives',
        'Standardized visual identity and publication releases',
      ],
      tag: 'Digital Campaigns & PR',
    },
    {
      title: 'Live Newsroom & Green-Screen Studio Operations',
      platform: 'Den Kashi Cable Channel',
      role: 'Cameraman cum Video Editor',
      badge: 'LIVE NEWS & TELECASTS',
      accentColor: 'text-red-400',
      description:
        'Ran chroma key / green-screen studio operations for daily live news telecasts and feature programs. Handled high-intensity Adobe Premiere Pro video editing under uncompromising broadcast deadlines.',
      points: [
        'Full chroma-key green screen lighting and key extraction',
        'Same-day raw footage ingestion, trimming, and broadcast package assembly',
        'Live news and recorded program packages for cable television',
      ],
      tag: 'Premiere Pro & Chroma Key',
    },
    {
      title: 'Commercial Video Production & Still Photography',
      platform: 'Motion Picture Learners (M P L)',
      role: 'Social Media Executive & Video Editor',
      badge: 'COMMERCIAL & CREATIVE',
      accentColor: 'text-amber-300',
      description:
        'Captured artistic and commercial photography, edited client video content with graphics and text overlays, and managed business client social accounts to boost audience engagement.',
      points: [
        'Still photography for artistic, commercial, and personal portfolios',
        'Video post-production with graphic lower-thirds and audio leveling',
        'End-to-end publishing, content calendars, and audience growth',
      ],
      tag: 'Still Optics & Post-Production',
    },
  ];

  return (
    <section id="showcase" className="py-20 bg-[#0b0e14] border-t border-[#253146] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141a24] border border-[#253146] text-xs font-mono-code text-cyan-400 mb-3">
              <Tv className="w-3.5 h-3.5" />
              <span>PRODUCTION HIGHLIGHTS // CASE REELS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Featured Broadcast & Media Engagements
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md font-mono-code">
            Deep dive into the operational environments and high-visibility channels Sudip has directed, filmed, and produced.
          </p>
        </div>

        {/* 2x2 Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-[#141a24] border border-[#253146] hover:border-amber-500/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-black/70 group"
            >
              <div>
                {/* Card Header Meta */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded text-[11px] font-mono-code font-bold bg-[#1d2635] text-amber-400 border border-[#253146]">
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono-code text-slate-400 flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5 text-cyan-400" />
                    {item.tag}
                  </span>
                </div>

                {/* Title and Platform */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <div className="text-sm font-semibold text-amber-400/90 mb-4 font-mono-code">
                  {item.platform} • <span className="text-slate-300 font-sans">{item.role}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Key Bullet Highlights */}
                <div className="space-y-2 mb-6 p-4 rounded-xl bg-[#0b0e14] border border-[#253146]/70">
                  <div className="text-xs font-mono-code text-slate-400 font-semibold uppercase tracking-wider mb-2">
                    Key Execution Standards:
                  </div>
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-amber-400 font-mono-code mt-0.5">✔</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Reel Placeholder Bar */}
              <div className="pt-4 border-t border-[#253146] flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono-code text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Documented in Official Resume</span>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors group-hover:translate-x-1"
                >
                  <span>Inquire for Reel</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
