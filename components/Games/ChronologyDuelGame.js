import { useState, useEffect } from "react";
import { soundManager } from "@/utils/soundEffects";
import { chronologyCards } from "@/data/historyData";
import { Swords, Shield, Zap, CheckCircle2, RotateCcw, Trophy, Timer, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export default function ChronologyDuelGame() {
  const [activeSubMode, setActiveSubMode] = useState("duel"); // "duel" | "puzzle"

  // ----------------- REFLEX SWORD DUEL STATE -----------------
  const [duelRound, setDuelRound] = useState(0);
  const [duelHp, setDuelHp] = useState(100);
  const [enemyHp, setEnemyHp] = useState(100);
  const [prompt, setPrompt] = useState(null);
  const [duelStatus, setDuelStatus] = useState("idle"); // idle, waiting, prompt, won, lost
  const [reactionTimer, setReactionTimer] = useState(null);
  const [streak, setStreak] = useState(0);
  const [reactionMs, setReactionMs] = useState(0);

  const promptTypes = [
    { key: "parry", label: "🛡️ QALQON TUTISH!", hint: "Dushman qilichi chapdan kelyapti!" },
    { key: "strike", label: "⚔️ SHIDDATLI ZARBA!", hint: "Dushman himoyasini ochdi!" },
    { key: "dodge", label: "⚡ TEZKOR EGILISH!", hint: "Nayza bosh ustidan uchib o'tmoqda!" }
  ];

  const startDuel = () => {
    soundManager.playSwordClash();
    setDuelRound(1);
    setDuelHp(100);
    setEnemyHp(100);
    setStreak(0);
    setDuelStatus("waiting");
    scheduleNextPrompt();
  };

  const scheduleNextPrompt = () => {
    setPrompt(null);
    setDuelStatus("waiting");

    // Random delay between 1.2s and 2.6s
    const delay = 1200 + Math.random() * 1400;
    setTimeout(() => {
      const selected = promptTypes[Math.floor(Math.random() * promptTypes.length)];
      setPrompt({
        ...selected,
        startTime: Date.now()
      });
      setDuelStatus("prompt");
      soundManager.playSwordClash();
    }, delay);
  };

  const handlePlayerReaction = (actionKey) => {
    if (duelStatus !== "prompt" || !prompt) return;

    const ms = Date.now() - prompt.startTime;
    setReactionMs(ms);

    if (actionKey === prompt.key && ms < 1500) {
      // Successful reflex!
      soundManager.playHit();
      const dmg = 25;
      const nextEnemy = Math.max(0, enemyHp - dmg);
      setEnemyHp(nextEnemy);
      setStreak((s) => s + 1);

      if (nextEnemy <= 0) {
        setDuelStatus("won");
        soundManager.playVictory();
        confetti({ particleCount: 70, spread: 60 });
      } else {
        scheduleNextPrompt();
      }
    } else {
      // Missed or wrong key!
      soundManager.playHit();
      const nextHp = Math.max(0, duelHp - 30);
      setDuelHp(nextHp);
      setStreak(0);

      if (nextHp <= 0) {
        setDuelStatus("lost");
        soundManager.playDefeat();
      } else {
        scheduleNextPrompt();
      }
    }
  };

  // ----------------- CHRONOLOGY PUZZLE STATE -----------------
  const [puzzleCards, setPuzzleCards] = useState(() =>
    [...chronologyCards].sort(() => Math.random() - 0.5)
  );
  const [puzzleSolved, setPuzzleSolved] = useState(false);
  const [puzzleCheckMessage, setPuzzleCheckMessage] = useState("");

  const moveCard = (index, direction) => {
    soundManager.playClick();
    const newCards = [...puzzleCards];
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= newCards.length) return;
    const temp = newCards[index];
    newCards[index] = newCards[targetIndex];
    newCards[targetIndex] = temp;
    setPuzzleCards(newCards);
    setPuzzleSolved(false);
    setPuzzleCheckMessage("");
  };

  const verifyPuzzle = () => {
    const isCorrect = puzzleCards.every((card, idx) => card.correctOrder === idx + 1);
    if (isCorrect) {
      setPuzzleSolved(true);
      soundManager.playVictory();
      setPuzzleCheckMessage("🎉 Barakalla! Tarixiy voqealar xronologiyasi 100% to'g'ri joylashtirildi!");
      confetti({ particleCount: 100, spread: 70 });
    } else {
      soundManager.playDefeat();
      setPuzzleCheckMessage("⚠️ Ayrim voqealar tartibi noto'g'ri. Sanalarga e'tibor berib qayta urinib ko'ring!");
    }
  };

  const resetPuzzle = () => {
    setPuzzleCards([...chronologyCards].sort(() => Math.random() - 0.5));
    setPuzzleSolved(false);
    setPuzzleCheckMessage("");
    soundManager.playClick();
  };

  return (
    <div className="royal-card p-6 sm:p-8 border-amber-500/30">
      {/* Submode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
        <div>
          <span className="text-xs px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
            3-O'yin: Shiddat & Bilim
          </span>
          <h3 className="text-2xl font-black text-white font-serif mt-1">
            Qilichbozlik Duellari & Xronologiya
          </h3>
        </div>

        <div className="flex items-center gap-2 bg-zinc-900 p-1.5 rounded-xl border border-zinc-800">
          <button
            onClick={() => {
              soundManager.playClick();
              setActiveSubMode("duel");
            }}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeSubMode === "duel"
                ? "bg-amber-500 text-black shadow-md"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            ⚔️ Qilichbozlik Dueli
          </button>
          <button
            onClick={() => {
              soundManager.playClick();
              setActiveSubMode("puzzle");
            }}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeSubMode === "puzzle"
                ? "bg-amber-500 text-black shadow-md"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            📜 Xronologiya Pazzli
          </button>
        </div>
      </div>

      {/* MODE 1: REFLEX SWORD DUEL */}
      {activeSubMode === "duel" && (
        <div className="mt-6 space-y-6">
          {duelStatus === "idle" && (
            <div className="py-12 text-center max-w-lg mx-auto space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-400 flex items-center justify-center mx-auto text-3xl">
                ⚔️
              </div>
              <h4 className="text-xl font-bold text-white font-serif">
                Mo'g'ul No'yoni Bilan Yakkama-Yakka Duel
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300">
                Ekrandagi buyruqlarga tezkor reaksiya ko'rsating! Har bir to'g'ri va chaqqon
                harakat dushmanga qaqshatqich zarba beradi!
              </p>
              <button
                onClick={startDuel}
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 text-black font-extrabold text-sm uppercase tracking-wider cursor-pointer shadow-lg shadow-amber-500/30"
              >
                Duellarga Kirishish
              </button>
            </div>
          )}

          {(duelStatus === "waiting" || duelStatus === "prompt") && (
            <div className="space-y-6">
              {/* HP Bars */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-emerald-500/30">
                  <div className="flex justify-between text-xs font-bold text-emerald-400 mb-1">
                    <span>Jaloliddin (Siz)</span>
                    <span className="font-mono">{duelHp}%</span>
                  </div>
                  <div className="h-2.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-400 transition-all"
                      style={{ width: `${duelHp}%` }}
                    />
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-red-500/30">
                  <div className="flex justify-between text-xs font-bold text-red-400 mb-1">
                    <span>Mo'g'ul No'yoni</span>
                    <span className="font-mono">{enemyHp}%</span>
                  </div>
                  <div className="h-2.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-red-500 transition-all"
                      style={{ width: `${enemyHp}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Arena Arena Visual Indicator */}
              <div className="p-8 rounded-2xl bg-black/60 border-2 border-amber-500/30 text-center min-h-[170px] flex flex-col items-center justify-center relative overflow-hidden">
                {duelStatus === "waiting" && (
                  <div className="animate-pulse space-y-2">
                    <span className="text-3xl">👀</span>
                    <div className="text-amber-400 font-bold text-sm tracking-wider uppercase font-serif">
                      Dushman harakatini kuting... Diqqat qiling!
                    </div>
                  </div>
                )}

                {duelStatus === "prompt" && prompt && (
                  <div className="space-y-2 animate-bounce">
                    <div className="text-2xl sm:text-3xl font-black text-amber-300 font-serif tracking-wider">
                      {prompt.label}
                    </div>
                    <div className="text-xs text-zinc-300 font-medium">
                      {prompt.hint}
                    </div>
                  </div>
                )}
              </div>

              {/* Action buttons */}
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => handlePlayerReaction("parry")}
                  disabled={duelStatus !== "prompt"}
                  className="py-4 px-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border-2 border-zinc-700 hover:border-amber-400 text-white font-bold text-xs sm:text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex flex-col items-center gap-1"
                >
                  <Shield className="w-5 h-5 text-emerald-400" />
                  <span>QALQON (HIMOYA)</span>
                </button>

                <button
                  onClick={() => handlePlayerReaction("strike")}
                  disabled={duelStatus !== "prompt"}
                  className="py-4 px-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border-2 border-zinc-700 hover:border-amber-400 text-white font-bold text-xs sm:text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex flex-col items-center gap-1"
                >
                  <Swords className="w-5 h-5 text-amber-400" />
                  <span>QILICH ZARBASI</span>
                </button>

                <button
                  onClick={() => handlePlayerReaction("dodge")}
                  disabled={duelStatus !== "prompt"}
                  className="py-4 px-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border-2 border-zinc-700 hover:border-amber-400 text-white font-bold text-xs sm:text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex flex-col items-center gap-1"
                >
                  <Zap className="w-5 h-5 text-cyan-400" />
                  <span>CHEP ZARBA / EGILISH</span>
                </button>
              </div>

              {reactionMs > 0 && (
                <div className="text-center text-xs text-zinc-400 font-mono">
                  Oxirgi reaksiya tezligi: <span className="text-amber-400 font-bold">{reactionMs} ms</span> • Seriya: <span className="text-emerald-400 font-bold">{streak}</span>
                </div>
              )}
            </div>
          )}

          {duelStatus === "won" && (
            <div className="py-10 text-center space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center mx-auto text-3xl">
                🏆
              </div>
              <h4 className="text-2xl font-black text-amber-300 font-serif">
                DUELDA G'ALABA QOZONDINGIZ!
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto">
                Sizning yashin tezligidagi qilich zarbangiz dushmanning barcha hiylalarini chippakka chiqardi!
              </p>
              <button
                onClick={startDuel}
                className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs uppercase tracking-wider cursor-pointer"
              >
                Yana Bir Duel
              </button>
            </div>
          )}

          {duelStatus === "lost" && (
            <div className="py-10 text-center space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-red-500/20 border border-red-400 flex items-center justify-center mx-auto text-3xl">
                ⚔️
              </div>
              <h4 className="text-2xl font-black text-red-400 font-serif">
                Dushman Chaqqonlik Qildi!
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto">
                Reaksiyani tezlashtiring! Buyruq chiqqan lahzada mos tugmani darhol bosing.
              </p>
              <button
                onClick={startDuel}
                className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs uppercase tracking-wider cursor-pointer"
              >
                Qayta Jang Qilish
              </button>
            </div>
          )}
        </div>
      )}

      {/* MODE 2: CHRONOLOGY PUZZLE */}
      {activeSubMode === "puzzle" && (
        <div className="mt-6 space-y-6">
          <div>
            <p className="text-xs sm:text-sm text-zinc-300 mb-4">
              Jaloliddin hayotidagi voqealarni <strong>eng qadimgidan boshlab (1198-yildan 1231-yilgacha)</strong> to'g'ri xronologik tartibga joylashtiring.
              Kartalarni yuqoriga yoki pastga siljitish uchun tugmalardan foydalaning:
            </p>

            <div className="space-y-2">
              {puzzleCards.map((card, idx) => (
                <div
                  key={card.id}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-amber-500/40 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-zinc-800 text-amber-300 font-bold text-xs flex items-center justify-center font-mono">
                      #{idx + 1}
                    </span>
                    <div>
                      <span className="font-bold text-white text-xs sm:text-sm block">
                        {card.text}
                      </span>
                      {puzzleSolved && (
                        <span className="text-[11px] text-amber-400 font-mono">
                          Tarixiy yil: {card.year}-yil
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => moveCard(idx, -1)}
                      disabled={idx === 0}
                      className="p-1.5 rounded bg-zinc-800 hover:bg-amber-500 hover:text-black text-zinc-300 disabled:opacity-30 disabled:pointer-events-none text-xs font-bold transition-colors cursor-pointer"
                      title="Yuqoriga"
                    >
                      ▲
                    </button>
                    <button
                      onClick={() => moveCard(idx, 1)}
                      disabled={idx === puzzleCards.length - 1}
                      className="p-1.5 rounded bg-zinc-800 hover:bg-amber-500 hover:text-black text-zinc-300 disabled:opacity-30 disabled:pointer-events-none text-xs font-bold transition-colors cursor-pointer"
                      title="Pastga"
                    >
                      ▼
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {puzzleCheckMessage && (
              <div
                className={`mt-4 p-3 rounded-lg text-xs font-medium border ${
                  puzzleSolved
                    ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-300"
                    : "bg-red-500/10 border-red-500/40 text-red-300"
                }`}
              >
                {puzzleCheckMessage}
              </div>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={verifyPuzzle}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 text-black font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md shadow-amber-500/20"
              >
                <CheckCircle2 className="w-4 h-4" />
                Tartibni Tekshirish
              </button>
              <button
                onClick={resetPuzzle}
                className="px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold text-xs transition-all cursor-pointer flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Aralashtirish
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
