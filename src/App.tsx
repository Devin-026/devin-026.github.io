import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Globe, 
  Monitor, 
  Zap, 
  Music, 
  Folder, 
  ShieldCheck, 
  Download, 
  Play, 
  Check, 
  ChevronDown, 
  Menu, 
  X, 
  Star
} from "lucide-react";
import { EN_CONTENT, ZH_CONTENT } from "./constants";
import { Content } from "./types";

const Logo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
        <filter id="blur-filter" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
        </filter>
      </defs>
      {/* Background fluid shape */}
      <path 
        d="M20,50 Q20,20 50,20 T80,50 T50,80 T20,50" 
        fill="url(#logo-gradient)" 
        opacity="0.2"
        transform="rotate(15 50 50)"
      />
      {/* Main fluid path */}
      <path 
        d="M30,70 C30,70 40,30 70,30 C70,30 60,70 30,70" 
        fill="url(#logo-gradient)" 
      />
      {/* Accent fluid path */}
      <path 
        d="M45,75 C45,75 55,45 85,45 C85,45 75,75 45,75" 
        fill="url(#logo-gradient)" 
        opacity="0.6"
      />
      {/* Download arrow indicator simplified */}
      <path 
        d="M50,40 L50,60 M40,50 L50,60 L60,50" 
        stroke="white" 
        strokeWidth="6" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  </div>
);

const Navbar = ({ content, lang, setLang }: { content: Content; lang: "en" | "zh"; setLang: (l: "en" | "zh") => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: content.nav.features, href: "#features" },
    { name: content.nav.howItWorks, href: "#how-it-works" },
    { name: content.nav.pricing, href: "#pricing" },
    { name: content.nav.faq, href: "#faq" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo className="w-11 h-11" />
          <span className="text-xl font-display font-bold text-slate-900 hidden sm:block tracking-tight">AnyVideo Downloader</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-medium text-slate-600 hover:text-cyan-600 transition-colors">
              {item.name}
            </a>
          ))}
          <button 
            onClick={() => setLang(lang === "en" ? "zh" : "en")}
            className="text-xs font-bold px-3 py-1 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
          >
            {lang === "en" ? "中文" : "English"}
          </button>
          <a href="#download" className="bg-cyan-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-cyan-700 transition-all shadow-md shadow-cyan-100">
            {content.nav.download}
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setLang(lang === "en" ? "zh" : "en")} className="text-xs font-bold px-2 py-1 rounded-md border border-slate-200">
            {lang === "en" ? "ZH" : "EN"}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-600">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl p-4 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-700 p-2"
                >
                  {item.name}
                </a>
              ))}
              <a 
                href="#download" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-cyan-600 text-white text-center py-3 rounded-xl font-bold"
              >
                {content.nav.download}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ content }: { content: Content }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-slate-900 tracking-tight leading-tight">
            {content.hero.title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {content.hero.subtitle}
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#download" 
              className="w-full sm:w-auto px-8 py-4 bg-cyan-600 text-white rounded-2xl font-bold text-lg hover:bg-cyan-700 transition-all shadow-xl shadow-cyan-200 flex items-center justify-center gap-2 group"
            >
              <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
              {content.hero.ctaPrimary}
            </a>
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
              <Play size={20} fill="currentColor" />
              {content.hero.ctaSecondary}
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-400 font-medium">
            <ShieldCheck size={16} className="text-cyan-600" />
            {content.hero.trustBadge}
          </div>
        </motion.div>

        {/* Product Preview */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-16 relative max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100">
            <img 
              src="https://picsum.photos/seed/software/1200/800" 
              alt="AnyVideo Downloader Interface" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
            {/* Overlay Play Button for Demo */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/5 hover:bg-black/0 transition-colors cursor-pointer group">
              <div className="w-20 h-20 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <Play size={32} className="text-cyan-600 ml-1" fill="currentColor" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Features = ({ content }: { content: Content }) => {
  const iconMap: Record<string, any> = {
    Globe, Monitor, Zap, Music, Folder, ShieldCheck
  };

  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">{content.features.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.features.items.map((feature, idx) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 bg-cyan-50 text-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = ({ content }: { content: Content }) => {
  return (
    <section id="how-it-works" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">{content.howItWorks.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-12 z-0" />
          
          {content.howItWorks.steps.map((step, idx) => (
            <div key={idx} className="relative z-10 text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-8 shadow-lg shadow-cyan-200">
                {idx + 1}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600">{step.description}</p>
              <div className="mt-8 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                <img 
                  src={`https://picsum.photos/seed/step${idx}/400/250`} 
                  alt={step.title} 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = ({ content }: { content: Content }) => {
  return (
    <section id="pricing" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold">{content.pricing.title}</h2>
          <p className="mt-4 text-slate-400">{content.pricing.disclaimer}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {content.pricing.plans.map((plan, idx) => (
            <div 
              key={idx}
              className={`p-10 rounded-3xl border ${plan.isPro ? "bg-cyan-600 border-cyan-500 shadow-2xl shadow-cyan-900/20" : "bg-slate-800/50 border-slate-700"}`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.isPro && <span className="text-cyan-200 text-sm font-medium">/ Lifetime</span>}
              </div>
              
              <ul className="space-y-4 mb-10">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm opacity-90">
                    <Check size={18} className={plan.isPro ? "text-cyan-200" : "text-cyan-500"} />
                    {f}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-2xl font-bold transition-all ${plan.isPro ? "bg-white text-cyan-600 hover:bg-cyan-50" : "bg-slate-700 text-white hover:bg-slate-600"}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = ({ content }: { content: Content }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">{content.faq.title}</h2>
        </div>

        <div className="space-y-4">
          {content.faq.items.map((item, idx) => (
            <div key={idx} className="border border-slate-100 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-900">{item.question}</span>
                <ChevronDown size={20} className={`text-slate-400 transition-transform ${openIdx === idx ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = ({ content }: { content: Content }) => {
  return (
    <footer className="bg-slate-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">{content.footer.cta}</h2>
          <p className="text-lg text-slate-600 mb-10">{content.footer.subCta}</p>
          <a 
            id="download"
            href="#" 
            className="inline-flex items-center gap-2 px-10 py-5 bg-cyan-600 text-white rounded-2xl font-bold text-xl hover:bg-cyan-700 transition-all shadow-xl shadow-cyan-200"
          >
            <Download size={24} />
            {EN_CONTENT.hero.ctaPrimary}
          </a>
        </div>

        <div className="border-t border-slate-200 pt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            <div className="flex items-center gap-3">
              <Logo className="w-9 h-9" />
              <span className="text-lg font-display font-bold text-slate-900">AnyVideo Downloader</span>
            </div>
            <div className="flex gap-8 text-sm font-medium text-slate-500">
              <a href="#" className="hover:text-cyan-600">Privacy Policy</a>
              <a href="#" className="hover:text-cyan-600">Terms of Service</a>
              <a href="#" className="hover:text-cyan-600">Contact</a>
            </div>
          </div>
          
          <p className="text-xs text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {content.footer.disclaimer}
            <br />
            © 2026 AnyVideo Downloader. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [lang, setLang] = useState<"en" | "zh">("en");
  const content = lang === "en" ? EN_CONTENT : ZH_CONTENT;

  useEffect(() => {
    // Basic language detection
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.includes("zh")) {
      setLang("zh");
    }
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-cyan-100 selection:text-cyan-900">
      <Navbar content={content} lang={lang} setLang={setLang} />
      <main>
        <Hero content={content} />
        <Features content={content} />
        <HowItWorks content={content} />
        
        {/* Supported Sites Section (Simplified) */}
        <section className="py-24 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-4">{content.supportedSites.title}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-8">{content.supportedSites.description}</p>
            <div className="flex flex-wrap justify-center gap-4 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
              {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                <div key={i} className="w-24 h-12 bg-slate-200 rounded-lg animate-pulse" />
              ))}
            </div>
            <p className="mt-8 text-xs text-slate-400 italic">{content.supportedSites.disclaimer}</p>
          </div>
        </section>

        <Pricing content={content} />
        
        {/* Testimonials */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">{content.testimonials.title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {content.testimonials.items.map((t, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                  <div className="flex gap-1 text-amber-400 mb-4">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-700 italic mb-6">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-100 rounded-full" />
                    <span className="font-bold text-slate-900">{t.author}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQSection content={content} />
      </main>
      <Footer content={content} />
    </div>
  );
}
