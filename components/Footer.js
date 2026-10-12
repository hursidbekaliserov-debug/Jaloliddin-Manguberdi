import { soundManager } from "@/utils/soundEffects";
import { ArrowUp, Shield, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    soundManager.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-amber-500/20 bg-[#05070e] pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-zinc-900">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-xl text-amber-400">
              ⚔️
            </div>
            <div>
              <span className="font-extrabold text-base tracking-wider text-amber-300 uppercase font-serif block">
                Jaloliddin Manguberdi
              </span>
              <span className="text-xs text-zinc-500">
                1198 – 1231 • Vatanparvarlik va Mardlik Maktabi
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 font-medium">
            <a href="#tarix" className="hover:text-amber-400 transition-colors">Tarixi</a>
            <a href="#yurishlar" className="hover:text-amber-400 transition-colors">Yurishlari</a>
            <a href="#oyinlar" className="hover:text-amber-400 transition-colors">O'yinlar Maydoni</a>
            <a href="#savollar" className="hover:text-amber-400 transition-colors">Savol-Javob</a>
            <a href="#meros" className="hover:text-amber-400 transition-colors">Meros</a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-zinc-900 hover:bg-amber-500 hover:text-black text-amber-400 border border-zinc-800 transition-all cursor-pointer flex items-center gap-2 text-xs font-bold"
            title="Yuqoriga qaytish"
          >
            <span>Yuqoriga</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-500 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Jaloliddin Manguberdi Tarixiy-Ma'rifiy Interaktiv Portali. Barcha huquqlar himoyalangan.
          </p>
          <p className="flex items-center gap-1 justify-center">
            Milliy tariximizni o'rganish va e'zozlash uchun yaratildi.
          </p>
        </div>
      </div>
    </footer>
  );
}
