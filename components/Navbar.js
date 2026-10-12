import { useState, useEffect } from "react";
import { soundManager } from "@/utils/soundEffects";
import { Volume2, VolumeX, Shield, Swords, HelpCircle, Gamepad2, Award, Menu, X } from "lucide-react";

export default function Navbar() {
  const [muted, setMuted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleSound = () => {
    const isMuted = soundManager.toggleMute();
    setMuted(isMuted);
    if (!isMuted) {
      soundManager.playClick();
    }
  };

  const navLinks = [
    { name: "Hayoti", href: "#tarix", icon: Shield },
    { name: "Harbiy Yurishlar", href: "#yurishlar", icon: Swords },
    { name: "O'yinlar Maydoni", href: "#oyinlar", icon: Gamepad2 },
    { name: "Savol-Javob & Test", href: "#savollar", icon: HelpCircle },
    { name: "Meros va Baholar", href: "#meros", icon: Award },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#070a13]/90 backdrop-blur-md border-b border-amber-500/20 py-3 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          onClick={() => soundManager.playSwordClash()}
          className="flex items-center gap-3 group text-decoration-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform border border-amber-300/40">
            <span className="text-xl">⚔️</span>
          </div>
          <div>
            <span className="font-extrabold text-base sm:text-lg tracking-wider text-amber-100 group-hover:text-amber-400 transition-colors uppercase font-serif">
              Jaloliddin Manguberdi
            </span>
            <span className="block text-[10px] tracking-widest text-amber-400/80 font-mono uppercase">
              Xorazm Qahramoni • 1198-1231
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => soundManager.playClick()}
                className="relative px-3 py-2 text-sm font-medium text-zinc-300 hover:text-amber-400 hover:bg-amber-500/10 rounded-lg transition-all flex items-center gap-1.5"
              >
                <Icon className="w-4 h-4 text-amber-400/80" />
                <span>{item.name}</span>
                {item.badge && (
                  <span className="text-[10px] px-1.5 py-0.2 bg-gradient-to-r from-amber-500 to-red-500 text-black font-black rounded-full uppercase ml-1">
                    {item.badge}
                  </span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action: Sound Toggle & Mobile trigger */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleToggleSound}
            title={muted ? "Ovozni yoqish" : "Ovozni o'chirish"}
            className="p-2 sm:px-3 sm:py-2 rounded-xl bg-zinc-900/80 border border-amber-500/30 text-amber-400 hover:bg-amber-500/20 hover:border-amber-400 transition-all flex items-center gap-2 text-xs font-medium cursor-pointer"
          >
            {muted ? (
              <>
                <VolumeX className="w-4 h-4 text-red-400" />
                <span className="hidden sm:inline text-zinc-400">Ovoz o'chiq</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span className="hidden sm:inline text-amber-300">Ovoz yoniq</span>
              </>
            )}
          </button>

          <a
            href="#oyinlar"
            onClick={() => soundManager.playSwordClash()}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold text-xs tracking-wide shadow-lg shadow-amber-500/25 transition-all hover:scale-105 active:scale-95"
          >
            <Gamepad2 className="w-4 h-4" />
            O'YINGA O'TISH
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-zinc-300 hover:text-amber-400 rounded-lg hover:bg-zinc-800/60"
            aria-label="Menyu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0a0e1c]/95 backdrop-blur-xl border-b border-amber-500/20 px-4 pt-3 pb-6 mt-2 space-y-2">
          {navLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => {
                  soundManager.playClick();
                  setMobileOpen(false);
                }}
                className="flex items-center justify-between p-3 rounded-lg text-zinc-200 hover:text-amber-300 hover:bg-amber-500/10 text-sm font-medium transition-all"
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-amber-400" />
                  <span>{item.name}</span>
                </div>
                {item.badge && (
                  <span className="text-[10px] px-2 py-0.5 bg-amber-500 text-black font-bold rounded-full">
                    {item.badge}
                  </span>
                )}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
