import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Mail, Phone, MapPin, Download, Copy, Check, Send, Radio } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <section id="contact" className="py-24 bg-[#0e121a] border-t border-[#253146] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Dispatch & Contact Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141a24] border border-[#253146] text-xs font-mono-code text-amber-400">
              <Radio className="w-3.5 h-3.5" />
              <span>DISPATCH HUB // DIRECT LINE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Initiate Production Inquiries & Collaborations
            </h2>

            <p className="text-base text-slate-300 leading-relaxed font-normal">
              Whether you are planning a broadcast telecast, institutional digital campaign, documentary production, or post-production package, get in direct contact with Sudip Raj.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-2">
              {/* Email Card */}
              <div className="p-4 rounded-xl bg-[#141a24] border border-[#253146] hover:border-amber-500/40 transition-colors flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0b0e14] border border-[#253146] flex items-center justify-center text-amber-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono-code text-slate-400">OFFICIAL EMAIL</div>
                    <a
                      href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                      className="text-white font-mono-code font-bold text-sm hover:text-amber-400 transition-colors"
                    >
                      {PORTFOLIO_DATA.personal.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(PORTFOLIO_DATA.personal.email, 'email')}
                    className="p-2 rounded-lg bg-[#0b0e14] border border-[#253146] hover:border-amber-500 text-slate-300 hover:text-white transition-colors text-xs font-mono-code flex items-center gap-1"
                    title="Copy email to clipboard"
                  >
                    {copiedType === 'email' ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400 hidden sm:inline">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span className="hidden sm:inline">Copy</span>
                      </>
                    )}
                  </button>
                  <a
                    href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                    className="p-2 rounded-lg bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 transition-colors text-xs font-mono-code"
                  >
                    Write
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-[#141a24] border border-[#253146] hover:border-amber-500/40 transition-colors flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0b0e14] border border-[#253146] flex items-center justify-center text-amber-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono-code text-slate-400">DIRECT CONTACT</div>
                    <a
                      href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                      className="text-white font-mono-code font-bold text-sm hover:text-amber-400 transition-colors"
                    >
                      {PORTFOLIO_DATA.personal.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(PORTFOLIO_DATA.personal.phone, 'phone')}
                    className="p-2 rounded-lg bg-[#0b0e14] border border-[#253146] hover:border-amber-500 text-slate-300 hover:text-white transition-colors text-xs font-mono-code flex items-center gap-1"
                    title="Copy phone number to clipboard"
                  >
                    {copiedType === 'phone' ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400 hidden sm:inline">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span className="hidden sm:inline">Copy</span>
                      </>
                    )}
                  </button>
                  <a
                    href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                    className="p-2 rounded-lg bg-[#0b0e14] border border-[#253146] hover:border-amber-400 text-amber-400 font-bold transition-colors text-xs font-mono-code"
                  >
                    Call
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-[#141a24] border border-[#253146] flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0b0e14] border border-[#253146] flex items-center justify-center text-cyan-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono-code text-slate-400">OPERATIONAL BASE</div>
                  <div className="text-white font-semibold text-sm">
                    {PORTFOLIO_DATA.personal.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Download Full Resume & Fast Brief Form */}
          <div className="lg:col-span-6 rounded-2xl bg-[#141a24] border-2 border-[#253146] p-6 sm:p-8 shadow-2xl shadow-black/60">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#253146]">
              <div>
                <h3 className="text-xl font-bold text-white">Broadcast Brief Dispatch</h3>
                <p className="text-xs font-mono-code text-slate-400 mt-0.5">
                  Send a message directly to Sudip's verified inbox
                </p>
              </div>
              <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 text-xs font-mono-code border border-amber-500/30">
                DIRECT MAIL
              </span>
            </div>

            {/* Form that triggers default mail client with prefilled subject */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const name = (form.elements.namedItem('senderName') as HTMLInputElement).value;
                const subject = (form.elements.namedItem('subject') as HTMLInputElement).value;
                const body = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
                const mailtoUrl = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(
                  `[Production Inquiry] ${subject || 'Collaboration'} - from ${name}`
                )}&body=${encodeURIComponent(body)}`;
                window.location.href = mailtoUrl;
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-mono-code text-slate-300 mb-1.5">
                  YOUR NAME / PRODUCTION HOUSE *
                </label>
                <input
                  type="text"
                  name="senderName"
                  required
                  placeholder="e.g. Broadcast Director / Media Coordinator"
                  className="w-full px-4 py-2.5 rounded-lg bg-[#0b0e14] border border-[#253146] text-white text-sm focus:outline-none focus:border-amber-400 font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-code text-slate-300 mb-1.5">
                  SUBJECT / PROJECT TYPE *
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="e.g. Broadcast Camera Shoot / Video Editing Package"
                  className="w-full px-4 py-2.5 rounded-lg bg-[#0b0e14] border border-[#253146] text-white text-sm focus:outline-none focus:border-amber-400 font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-code text-slate-300 mb-1.5">
                  PROJECT SCOPE / MESSAGE *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Briefly describe dates, location, deliverables, or required production roles..."
                  className="w-full px-4 py-2.5 rounded-lg bg-[#0b0e14] border border-[#253146] text-white text-sm focus:outline-none focus:border-amber-400 font-sans resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-amber-500/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct Inquiry</span>
                </button>

                <a
                  href={PORTFOLIO_DATA.personal.resumePdfUrl}
                  download="Sudip_Raj_Resume.pdf"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#0b0e14] hover:bg-[#1d2635] text-slate-200 border border-[#253146] text-xs font-mono-code font-semibold transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-amber-400" />
                  <span>Get PDF CV</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
