import { useState } from "react";
import { soundManager } from "@/utils/soundEffects";
import ParvonStrategyGame from "./ParvonStrategyGame";
import ChronologyDuelGame from "./ChronologyDuelGame";
import { Gamepad2, Shield, Swords } from "lucide-react";

export default function GamesSection() {
  const [activeGame, setActiveGame] = useState("parvon");

  const gameTabs = [
    {
      id: "parvon",
      title: "Parvon Jangi: Strategiya",
      subtitle: "Qo'mondonlik & Taktik Jang",
      icon: Shield,
      badge: "Strategiya",
      color: "from-amber-500 to-amber-700",
    },
    {
      id: "duel",
      title: "Qilichbozlik & Xronologiya",
      subtitle: "Duel Reaksiyasi & Pazzl",
      icon: Swords,
      badge: "Refleks & Aql",
      color: "from-red-500 to-amber-600",
    },
  ];

  return (
    <section id="oyinlar" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-500/15 to-red-500/15 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Gamepad2 className="w-4 h-4 text-amber-400" />
            <span>Interaktiv O'yinlar Zonasi • 2 Xil Janr</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-serif tracking-tight">
            Tarixni O'yinlar Orqali Boshqaring!
          </h2>
          <p className="mt-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
            Parvon dashtida lashkar boshqaring yoki shiddatli qilichbozlik duelida o'z tezligingizni sinab ko'ring!
          </p>
        </div>

        {/* Game Switcher Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {gameTabs.map((tab) => {
            const Icon = tab.icon;
            const active = activeGame === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  soundManager.playSwordClash();
                  setActiveGame(tab.id);
                }}
                className={`p-4 sm:p-5 rounded-2xl text-left transition-all cursor-pointer border relative overflow-hidden group ${
                  active
                    ? "bg-zinc-900 border-amber-400 shadow-xl shadow-amber-500/15 ring-2 ring-amber-400/50"
                    : "bg-zinc-950/70 border-zinc-800 hover:border-amber-500/30 hover:bg-zinc-900/60"
                }`}
              >
                {/* Active glow gradient bar */}
                {active && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500" />
                )}

                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${tab.color} flex items-center justify-center text-white shadow-md`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                      active
                        ? "bg-amber-400 text-black font-extrabold"
                        : "bg-zinc-800 text-zinc-400"
                    }`}
                  >
                    {tab.badge}
                  </span>
                </div>

                <h4 className="font-bold text-white text-base group-hover:text-amber-300 transition-colors">
                  {tab.title}
                </h4>
                <p className="text-xs text-zinc-400 mt-1">{tab.subtitle}</p>
              </button>
            );
          })}
        </div>

        {/* Selected Game Container */}
        <div className="relative">
          {activeGame === "parvon" && <ParvonStrategyGame />}
          {activeGame === "duel" && <ChronologyDuelGame />}
        </div>
      </div>
    </section>
  );
}
