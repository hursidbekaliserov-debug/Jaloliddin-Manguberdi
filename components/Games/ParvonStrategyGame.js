import { useState, useEffect } from "react";
import { soundManager } from "@/utils/soundEffects";
import { Shield, Swords, ArrowRight, RotateCcw, Trophy, Award, Flame, UserCheck } from "lucide-react";
import confetti from "canvas-confetti";

export default function ParvonStrategyGame() {
  const [gameState, setGameState] = useState("start"); // start, playing, won, lost
  const [round, setRound] = useState(1);
  const [playerHp, setPlayerHp] = useState(100);
  const [playerMorale, setPlayerMorale] = useState(100);
  const [enemyHp, setEnemyHp] = useState(100);
  const [battleLog, setBattleLog] = useState([]);
  const [selectedAction, setSelectedAction] = useState(null);
  const [lastActionOutcome, setLastActionOutcome] = useState("");

  const resetGame = () => {
    setRound(1);
    setPlayerHp(100);
    setPlayerMorale(100);
    setEnemyHp(100);
    setBattleLog([
      "⚔️ 1221-yil, Parvon dashti. Shiki Xutuxu boshliq 45 000 mo'g'ul lashkari ro'parangizda saf tortdi. Taktik qaror qabul qiling!"
    ]);
    setSelectedAction(null);
    setLastActionOutcome("");
    setGameState("playing");
    soundManager.playSwordClash();
  };

  const handleAction = (actionType) => {
    if (gameState !== "playing") return;

    soundManager.playSwordClash();
    let playerDmg = 0;
    let enemyDmg = 0;
    let logMsg = "";
    let moraleChange = 0;

    // Enemy AI randomly chooses a tactic
    const enemyTactics = ["front_charge", "arrow_flank", "feigned_retreat"];
    const enemyChoice = enemyTactics[Math.floor(Math.random() * enemyTactics.length)];

    if (actionType === "dismount_spear") {
      // Historical Parvon tactic: Otliqlarni tushirib nayza devori qilish
      if (enemyChoice === "front_charge") {
        playerDmg = 28;
        enemyDmg = 6;
        moraleChange = 12;
        logMsg = "🛡️ Mukammal qaror! Mo'g'ullarning shiddatli otliq hujumi nayzadorlaringiz devoriga urilib chil-parchin bo'ldi! Dushmanga 28 talofat!";
      } else {
        playerDmg = 18;
        enemyDmg = 12;
        moraleChange = 5;
        logMsg = "🛡️ Askarlaringiz qalqon devor bo'lib mustahkam turdilar. Dushman 18 talofat ko'rdi.";
      }
    } else if (actionType === "horse_archers") {
      // Otliq kamonchilar
      if (enemyChoice === "arrow_flank") {
        playerDmg = 22;
        enemyDmg = 15;
        logMsg = "🏹 Qanotdan otliq kamonchilaringiz dushmanga o'q yomg'iri yog'dirdi. Ikkala tomon ham zarba oldi!";
      } else {
        playerDmg = 25;
        enemyDmg = 10;
        moraleChange = 8;
        logMsg = "🏹 Merganlaringiz dushman saralangan no'yonlarini o'qqa tutib sarosimaga soldi! 25 talofat!";
      }
    } else if (actionType === "heavy_charge") {
      // Og'ir suvoriylar zarbasi
      if (enemyChoice === "feigned_retreat") {
        playerDmg = 15;
        enemyDmg = 22;
        moraleChange = -10;
        logMsg = "⚠️ Dushman soxta chekinib tuzoqqa ilintirishga urindi! Zarbangiz o'tdi, ammo 22 talofat ko'rdingiz.";
      } else {
        playerDmg = 32;
        enemyDmg = 14;
        moraleChange = 15;
        logMsg = "⚡ Xorazm og'ir suvoriylari dushman markazini shiddat bilan yorib o'tdi! Dushmanga 32 talofat!";
      }
    } else if (actionType === "flank_ambush") {
      // Tog' ortidan pistirma (Parvon jangining 2-kuni)
      playerDmg = 35;
      enemyDmg = 8;
      moraleChange = 20;
      logMsg = "🔥 Zafarli hiyla! Tog' ortida yashirilgan zaxira qism to'satdan Shiki Xutuxu qanotiga zarba berdi! Dushman qochishga tushdi!";
    }

    const nextEnemyHp = Math.max(0, enemyHp - playerDmg);
    const nextPlayerHp = Math.max(0, playerHp - enemyDmg);
    const nextPlayerMorale = Math.min(100, Math.max(0, playerMorale + moraleChange));

    setEnemyHp(nextEnemyHp);
    setPlayerHp(nextPlayerHp);
    setPlayerMorale(nextPlayerMorale);
    setLastActionOutcome(logMsg);
    setBattleLog((prev) => [logMsg, ...prev.slice(0, 4)]);

    if (nextEnemyHp <= 0) {
      setGameState("won");
      soundManager.playVictory();
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else if (nextPlayerHp <= 0 || nextPlayerMorale <= 0) {
      setGameState("lost");
      soundManager.playDefeat();
    } else {
      setRound((prev) => prev + 1);
    }
  };

  return (
    <div className="royal-card p-6 sm:p-8 border-amber-500/30">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
        <div>
          <span className="text-xs px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
            1-O'yin: Harbiy Strategiya
          </span>
          <h3 className="text-2xl font-black text-white font-serif mt-1">
            Parvon Jangi: Bosh Qo'mondon Bo'ling!
          </h3>
          <p className="text-xs text-zinc-400 mt-1">
            Jaloliddin Manguberdi nomidan to'g'ri taktikani tanlang va Chingizxon bosh sarkardasi Shiki Xutuxuni yeng!
          </p>
        </div>

        {gameState === "playing" && (
          <div className="flex items-center gap-3 bg-zinc-900/80 px-4 py-2 rounded-xl border border-zinc-700">
            <span className="text-xs text-zinc-400">Jang Raundi:</span>
            <span className="text-lg font-bold text-amber-400 font-mono">#{round}</span>
          </div>
        )}
      </div>

      {gameState === "start" && (
        <div className="py-12 text-center max-w-xl mx-auto space-y-6">
          <div className="w-20 h-20 rounded-2xl bg-amber-500/10 border-2 border-amber-500/40 flex items-center justify-center mx-auto text-4xl shadow-xl shadow-amber-500/10">
            🛡️
          </div>
          <h4 className="text-xl font-bold text-amber-200 font-serif">
            1221-yil: Parvon Dashtidagi Tarixiy Sinov
          </h4>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            Siz Xorazm lashkarlariga boshchilik qilasiz. Mo'g'ullarning 45 minglik qo'shini
            hujumga shay. Sizning taktik qarorlaringiz (piyoda nayza devori, otliq kamonchilar,
            qanotdan pistirma) jang taqdirini hal qiladi!
          </p>
          <button
            onClick={resetGame}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-sm tracking-wider uppercase shadow-xl shadow-amber-500/30 transition-all hover:scale-105 cursor-pointer"
          >
            ⚔️ Jangni Boshlash (Boshqaruvni Olish)
          </button>
        </div>
      )}

      {gameState === "playing" && (
        <div className="mt-6 space-y-6">
          {/* Health & Morale Bars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Player army */}
            <div className="p-4 rounded-xl bg-zinc-900/80 border border-emerald-500/30 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                  <Shield className="w-4 h-4" />
                  Jaloliddin Qo'shini (Siz)
                </span>
                <span className="font-mono text-zinc-200">{playerHp}% / 100%</span>
              </div>
              <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-300"
                  style={{ width: `${playerHp}%` }}
                />
              </div>

              {/* Morale bar */}
              <div className="flex justify-between items-center text-[11px] pt-1 text-zinc-400">
                <span>Jangovar Ruh (Moral):</span>
                <span className="text-amber-400 font-bold">{playerMorale}%</span>
              </div>
              <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-400 transition-all duration-300"
                  style={{ width: `${playerMorale}%` }}
                />
              </div>
            </div>

            {/* Mongol army */}
            <div className="p-4 rounded-xl bg-zinc-900/80 border border-red-500/30 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-red-400 flex items-center gap-1.5">
                  <Swords className="w-4 h-4" />
                  Shiki Xutuxu (Mo'g'ul Tumanlari)
                </span>
                <span className="font-mono text-zinc-200">{enemyHp}% / 100%</span>
              </div>
              <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-red-600 to-red-400 transition-all duration-300"
                  style={{ width: `${enemyHp}%` }}
                />
              </div>
              <p className="text-[11px] text-zinc-500 pt-1">
                Mo'g'ul qo'shini saflari: Saralangan otliqlar, xon gvardiyasi
              </p>
            </div>
          </div>

          {/* Tactical Command Buttons */}
          <div>
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">
              Qo'mondonlik Buyrug'ini Tanlang:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={() => handleAction("dismount_spear")}
                className="p-4 rounded-xl bg-zinc-900/90 border border-amber-500/30 hover:border-amber-400 hover:bg-zinc-850 text-left transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-2 font-bold text-white text-sm group-hover:text-amber-300">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span>Piyoda Nayzadorlar Mudofaasi</span>
                </div>
                <p className="text-xs text-zinc-400 mt-1">
                  Otliqlarni tushirib, nayzalar bilan qalqon devor tuzish (Parvon jangidagi tarixiy taktika!).
                </p>
              </button>

              <button
                onClick={() => handleAction("horse_archers")}
                className="p-4 rounded-xl bg-zinc-900/90 border border-amber-500/30 hover:border-amber-400 hover:bg-zinc-850 text-left transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-2 font-bold text-white text-sm group-hover:text-amber-300">
                  <span className="text-sm">🏹</span>
                  <span>Qanotlardan Kamonchilar Hujumi</span>
                </div>
                <p className="text-xs text-zinc-400 mt-1">
                  Mergan suvoriy qismlarni dushman qanotlariga yuborib, o'q yomg'iriga tutish.
                </p>
              </button>

              <button
                onClick={() => handleAction("heavy_charge")}
                className="p-4 rounded-xl bg-zinc-900/90 border border-amber-500/30 hover:border-amber-400 hover:bg-zinc-850 text-left transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-2 font-bold text-white text-sm group-hover:text-amber-300">
                  <Swords className="w-4 h-4 text-amber-400" />
                  <span>Xorazm Og'ir Suvoriylari Hamlasi</span>
                </div>
                <p className="text-xs text-zinc-400 mt-1">
                  Po'lat sovutli saralangan otliqlar bilan dushman markaziy safini yorib o'tish.
                </p>
              </button>

              <button
                onClick={() => handleAction("flank_ambush")}
                className="p-4 rounded-xl bg-gradient-to-r from-amber-950/40 to-zinc-900 border border-amber-500/40 hover:border-amber-300 text-left transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-2 font-bold text-amber-300 text-sm group-hover:text-amber-200">
                  <Flame className="w-4 h-4 text-orange-400" />
                  <span>Tog' Ortidan Pistirma Zarbasi</span>
                </div>
                <p className="text-xs text-zinc-400 mt-1">
                  Yashirilgan 10 minglik zaxira kuchni to'satdan dushmanning orqa tomoniga tashlash!
                </p>
              </button>
            </div>
          </div>

          {/* Battle Field Live Log */}
          <div className="p-4 rounded-xl bg-black/60 border border-zinc-800 space-y-2">
            <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block">
              Jang Maydoni Xabarlari:
            </span>
            <div className="space-y-1.5 text-xs sm:text-sm">
              {battleLog.map((log, idx) => (
                <div
                  key={idx}
                  className={`p-2 rounded ${
                    idx === 0
                      ? "text-amber-200 bg-amber-500/10 border-l-2 border-amber-400 font-medium"
                      : "text-zinc-400"
                  }`}
                >
                  {log}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Won state */}
      {gameState === "won" && (
        <div className="py-10 text-center max-w-lg mx-auto space-y-5 animate-fadeIn">
          <div className="w-20 h-20 rounded-full bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center mx-auto text-4xl text-amber-300">
            🏆
          </div>
          <h4 className="text-2xl font-black text-amber-300 font-serif">
            BUYUK G'ALABA! PARVON ZAFARI!
          </h4>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            Siz Jaloliddin Manguberdining harbiy dahosini to'liq namoyon etdingiz!
            Shiki Xutuxuning 45 minglik armiyasi qochishga majbur bo'ldi.
            Mo'g'ullarning yengilmaslik haqidagi afsonasi butun dunyo oldida barbod etildi!
          </p>
          <div className="p-3 bg-zinc-900/80 rounded-lg border border-amber-500/30 text-xs text-amber-200">
            Sizga berilgan unvon: <strong>"Parvon Qahramoni & Bosh Sarkarda"</strong>
          </div>
          <button
            onClick={resetGame}
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
          >
            Qayta O'ynash
          </button>
        </div>
      )}

      {/* Lost state */}
      {gameState === "lost" && (
        <div className="py-10 text-center max-w-lg mx-auto space-y-5 animate-fadeIn">
          <div className="w-20 h-20 rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center mx-auto text-4xl text-red-400">
            ⚔️
          </div>
          <h4 className="text-2xl font-black text-red-400 font-serif">
            Lashkarlar Chekindi...
          </h4>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            Dushman kuchlari ko'plik qildi yoki noto'g'ri taktika sababli saflar buzildi.
            Ammo Jaloliddin hech qachon taslim bo'lmagan! Taktikani qayta ko'rib chiqing va g'alaba qozoning.
          </p>
          <button
            onClick={resetGame}
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
          >
            Taktikani O'zgartirib Qayta Urinish
          </button>
        </div>
      )}
    </div>
  );
}
