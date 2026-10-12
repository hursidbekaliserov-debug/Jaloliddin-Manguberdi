import { soundManager } from "@/utils/soundEffects";
import { historicalQuotes } from "@/data/historyData";
import { Quote, Award, Medal, Landmark, Sparkles } from "lucide-react";

export default function LegacyAndQuotes() {
  return (
    <section id="meros" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Mangu Meros va Ehtirom</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-serif tracking-tight">
            Tarixchilar Bahosi va Davlat Mukofoti
          </h2>
          <p className="mt-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
            Asrlar osha o'chmas qahramonlik namunasi bo'lib kelayotgan sultonning
            tarixdagi o'rni va bugungi kunda e'zozlanishi.
          </p>
        </div>

        {/* Historical Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {historicalQuotes.map((item, idx) => (
            <div
              key={idx}
              className="royal-card p-6 sm:p-7 border-zinc-800 hover:border-amber-500/40 relative group"
            >
              <Quote className="w-8 h-8 text-amber-500/20 absolute top-5 right-5 group-hover:text-amber-500/40 transition-colors" />

              <div className="mb-4">
                <h4 className="font-bold text-amber-300 text-base font-serif">
                  {item.author}
                </h4>
                <span className="text-xs text-zinc-400 block">{item.role}</span>
              </div>

              <p className="italic text-xs sm:text-sm text-zinc-200 leading-relaxed mb-4">
                "{item.quote}"
              </p>

              <div className="text-[11px] font-mono text-amber-400/80 border-t border-zinc-800/80 pt-2">
                Manba: {item.source}
              </div>
            </div>
          ))}
        </div>

        {/* State Order & Modern Uzbekistan Tribute */}
        <div className="royal-card p-6 sm:p-10 border-amber-500/40 bg-gradient-to-br from-zinc-950 via-zinc-900 to-amber-950/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/40">
                <Medal className="w-4 h-4" />
                <span>O'zbekiston Respublikasi Oliy Harbiy Mukofoti</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
                "Jaloliddin Manguberdi" Ordeni
              </h3>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                2000-yil 30-avgustda O'zbekiston Respublikasining qonuni bilan ta'sis etilgan.
                Bu orden bilan mamlakat mustaqilligini, sarhadlarini himoya qilishda yuksak
                harbiy mahorat, qahramonlik va jasorat ko'rsatgan harbiy xizmatchilar
                hamda qo'mondonlar taqdirlanadi.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
                  <div className="font-bold text-white text-xs mb-1 flex items-center gap-1.5">
                    <Landmark className="w-4 h-4 text-amber-400" />
                    <span>Urganchdagi Muhtasham Haykal</span>
                  </div>
                  <p className="text-[11px] text-zinc-400">
                    Xorazm viloyati markazi Urganch shahrida 25 metrli ulug'vor haykali va xiyobon barpo etilgan.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
                  <div className="font-bold text-white text-xs mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span>Harbiy Maktablar va Meros</span>
                  </div>
                  <p className="text-[11px] text-zinc-400">
                    O'zbekiston Qurolli Kuchlarining harbiy maktab va litseylari uning nomi bilan sharaflangan.
                  </p>
                </div>
              </div>
            </div>

            {/* Emblem badge display */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-black/40 border border-amber-500/30 text-center space-y-3">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-amber-600 to-yellow-400 p-1 shadow-2xl shadow-amber-500/30 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#070a13] flex items-center justify-center text-4xl border border-amber-300/40">
                  🎖️
                </div>
              </div>
              <h4 className="font-bold text-amber-300 text-sm font-serif">
                Oliy Davlat Mukofoti
              </h4>
              <p className="text-[11px] text-zinc-400 leading-tight">
                Vatan ozodligi va mustaqilligi yo'lida mislsiz jasorat ko'rsatgan qahramonlar uchun!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
