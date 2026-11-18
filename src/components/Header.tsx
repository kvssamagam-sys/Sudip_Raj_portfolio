import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Video, Download, Mail, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'Disciplines', href: '#disciplines' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Technical Rig', href: '#skills' },
    { label: 'Education & Honors', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0e14]/90 backdrop-blur-md border-b border-[#253146] py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Identity lockup */}
          <a href="#hero" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-lg p-1">
            <div className="w-10 h-10 rounded-lg bg-[#141a24] border border-[#253146] group-hover:border-amber-500/50 flex items-center justify-center transition-colors">
              <Video className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  {PORTFOLIO_DATA.personal.name}
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono-code bg-amber-500/10 text-amber-300 border border-amber-500/30">
                  STUDIO MASTER
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono-code">BROADCAST & DIGITAL MEDIA</p>
            </div>
          </a>

          {/* Live Status Pill */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141a24] border border-[#253146] text-xs font-mono-code text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-slate-400">STATUS:</span>
            <span className="text-slate-200 font-medium">ON AIR // KVS HQ</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors focus:outline-none focus:text-amber-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.personal.resumePdfUrl}
              download="Sudip_Raj_Resume.pdf"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-semibold bg-[#141a24] hover:bg-[#1d2635] text-slate-200 border border-[#253146] hover:border-slate-500 transition-all focus:ring-2 focus:ring-amber-400 focus:outline-none"
            >
              <Download className="w-3.5 h-3.5 text-amber-400" />
              <span>Resume PDF</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-slate-950 font-medium transition-all shadow-md shadow-amber-500/20 focus:ring-2 focus:ring-amber-300 focus:outline-none"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Dispatch</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#141a24] border border-[#253146] text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0b0e14]/95 backdrop-blur-xl border-b border-[#253146] px-4 pt-3 pb-6 space-y-3">
          <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-[#141a24] border border-[#253146] text-xs font-mono-code text-slate-300 mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-slate-400">STATUS:</span>
            <span className="text-slate-200">ON AIR // KVS HQ</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-amber-400 hover:bg-[#141a24] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-[#253146] flex flex-col gap-2">
            <a
              href={PORTFOLIO_DATA.personal.resumePdfUrl}
              download="Sudip_Raj_Resume.pdf"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold bg-[#141a24] text-slate-200 border border-[#253146]"
            >
              <Download className="w-4 h-4 text-amber-400" />
              Download Resume PDF
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-bold bg-amber-500 text-slate-950"
            >
              <Mail className="w-4 h-4" />
              Contact Dispatch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
