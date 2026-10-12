import { useState } from "react";
import Image from "next/image";
import { soundManager } from "@/utils/soundEffects";
import { historicalTimeline, battlesData } from "@/data/historyData";
import { Swords, MapPin, Award, Calendar, ChevronRight, ShieldAlert } from "lucide-react";

export default function CampaignsMap() {
  const [selectedBattle, setSelectedBattle] = useState(battlesData[0]);
  const [filterType, setFilterType] = useState("all");

  const filteredTimeline = filterType === "all" 
    ? historicalTimeline 
    : historicalTimeline.filter(item => item.type === filterType);

  return (
    <section id="yurishlar" className="py-20 relative bg-zinc-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Swords className="w-3.5 h-3.5" />
            <span>11 Yillik Shonli Jangnoma</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-serif tracking-tight">
            Harbiy Yurishlar va Buyuk Janglar
          </h2>
          <p className="mt-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
            Gurganjdan Hindistongacha, Kavkazdan Bag'dod ostonasigacha kechgan shiddatli
            to'qnashuvlar va jahon harbiy san'atiga kirgan buyuk g'alabalar.
          </p>
        </div>

        {/* Featured Battles Selector */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-amber-300 font-serif mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <span>Eng Yirik Tarixiy Janglar (Tafsilotlar)</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {battlesData.map((battle) => {
              const active = selectedBattle.id === battle.id;
              return (
                <button
                  key={battle.id}
                  onClick={() => {
                    soundManager.playSwordClash();
                    setSelectedBattle(battle);
                  }}
                  className={`text-left p-4 rounded-xl transition-all cursor-pointer border ${
                    active
                      ? "bg-amber-500/20 border-amber-400 shadow-lg shadow-amber-500/10 ring-1 ring-amber-400"
                      : "bg-zinc-900/60 border-zinc-800 hover:border-amber-500/30 hover:bg-zinc-900"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      {battle.badge}
                    </span>
                    <span className="text-xs text-zinc-400 font-mono">1221-1225</span>
                  </div>
                  <h4 className="font-bold text-white text-sm line-clamp-1">{battle.name}</h4>
                  <p className="text-xs text-zinc-400 mt-1 line-clamp-1">
                    Dushman: {battle.opponent}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Battle Deep-Dive Box */}
        {selectedBattle && (
          <div className="royal-card p-6 sm:p-8 mb-16 border-amber-500/30 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Battle Details */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-amber-500 text-black text-xs font-extrabold uppercase">
                    {selectedBattle.badge}
                  </span>
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30">
                    Natija: {selectedBattle.outcome}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
                  {selectedBattle.name}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-lg bg-zinc-900/80 border border-zinc-800">
                    <span className="text-xs text-zinc-400 block">Jaloliddin qo'shini:</span>
                    <span className="text-sm font-bold text-amber-300">{selectedBattle.myForces}</span>
                  </div>
                  <div className="p-3.5 rounded-lg bg-zinc-900/80 border border-zinc-800">
                    <span className="text-xs text-zinc-400 block">Dushman qo'shini:</span>
                    <span className="text-sm font-bold text-red-300">{selectedBattle.enemyForces}</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Harbiy Taktika va Reja:
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed bg-black/40 p-3.5 rounded-lg border border-zinc-800/80">
                    {selectedBattle.tactic}
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                    Tarixiy Ahamiyati:
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {selectedBattle.importance}
                  </p>
                </div>
              </div>

              {/* Battle Artwork / Visual */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-amber-500/30 shadow-2xl group">
                  <Image
                    src={selectedBattle.id === "sind" ? "/images/sind-leap.jpg" : "/images/hero-banner.jpg"}
                    alt={selectedBattle.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 p-3 bg-black/70 backdrop-blur-md rounded-lg border border-amber-500/20">
                    <p className="text-xs text-amber-200 font-medium">
                      {selectedBattle.id === "sind" 
                        ? "Sind daryosiga 20 metrli qoyadan otda sakrash sahnasi" 
                        : "Parvon va boshqa janglardagi shiddatli to'qnashuv"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Chronological Timeline */}
        <div className="mt-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h3 className="text-2xl font-bold text-white font-serif flex items-center gap-2">
              <Calendar className="w-5 h-5 text-amber-400" />
              <span>Yilnoma: Voqealar Xronologiyasi (1198 - 1231)</span>
            </h3>

            {/* Filter buttons */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {[
                { id: "all", label: "Hammasi" },
                { id: "battle", label: "Janglar" },
                { id: "campaign", label: "Yurishlar" },
                { id: "legacy", label: "Meros" },
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => {
                    soundManager.playClick();
                    setFilterType(btn.id);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    filterType === btn.id
                      ? "bg-amber-500 text-black shadow-sm"
                      : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          {/* Timeline list */}
          <div className="relative border-l-2 border-amber-500/30 ml-4 sm:ml-8 space-y-8 pl-6 sm:pl-8">
            {filteredTimeline.map((item, index) => (
              <div key={index} className="relative group">
                {/* Timeline dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#070a13] border-2 border-amber-400 group-hover:scale-125 group-hover:bg-amber-400 transition-all shadow-md shadow-amber-500/50" />

                <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800 group-hover:border-amber-500/40 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                      {item.year}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                      <MapPin className="w-3.5 h-3.5 text-amber-400/80" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {item.description}
                  </p>

                  {item.result && (
                    <div className="mt-3 inline-block text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/30">
                      Zafar: {item.result}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
