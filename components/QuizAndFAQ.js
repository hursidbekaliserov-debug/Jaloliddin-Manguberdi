import { useState } from "react";
import { soundManager } from "@/utils/soundEffects";
import { quizQuestions, faqList } from "@/data/historyData";
import { HelpCircle, ChevronDown, CheckCircle2, XCircle, Trophy, RotateCcw, Award, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export default function QuizAndFAQ() {
  // FAQ accordion state
  const [openFaqId, setOpenFaqId] = useState(1);

  // Quiz state
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const toggleFaq = (id) => {
    soundManager.playClick();
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const handleSelectOption = (idx) => {
    if (isAnswered) return;
    soundManager.playClick();
    setSelectedOption(idx);
    setIsAnswered(true);

    const q = quizQuestions[currentQuestionIdx];
    if (idx === q.correctIndex) {
      soundManager.playHit();
      setScore((s) => s + 1);
    } else {
      soundManager.playDefeat();
    }
  };

  const handleNextQuestion = () => {
    soundManager.playClick();
    if (currentQuestionIdx + 1 < quizQuestions.length) {
      setCurrentQuestionIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
      soundManager.playVictory();
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  };

  const restartQuiz = () => {
    soundManager.playClick();
    setCurrentQuestionIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

  const getRank = () => {
    const total = quizQuestions.length;
    const ratio = score / total;
    if (ratio === 1) return { title: "Xorazmshohlar Bosh Sarkardasi (Mutlaq Bilimdon)", badge: "🎖️ Oltin Qalqon" };
    if (ratio >= 0.7) return { title: "Jasur Qahramon & Tarix Bilimdoni", badge: "⚔️ Kumush Qilich" };
    if (ratio >= 0.4) return { title: "Xorazm Sarbozi (Yaxshi Natija)", badge: "🛡️ Bronza Kamon" };
    return { title: "Tarix Izlanuvchisi", badge: "📜 Qadimiy Bitik" };
  };

  const currentQ = quizQuestions[currentQuestionIdx];

  return (
    <section id="savollar" className="py-20 relative bg-zinc-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>Bilimni Sinash va Oydinlik Kiritish</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-serif tracking-tight">
            Savol-Javoblar va Katta Tarixiy Test
          </h2>
          <p className="mt-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
            Jaloliddin Manguberdi haqida eng qiziqarli savollarga javob oling va
            10 ta maxsus test orqali o'z bilimlaringizni sinab ko'ring!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT: 10-Question Interactive Quiz (7 cols) */}
          <div className="lg:col-span-7">
            <div className="royal-card p-6 sm:p-8 border-amber-500/30">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-sm">
                    Q
                  </span>
                  <div>
                    <h3 className="font-bold text-white text-base font-serif">
                      Tarixiy Viktorina (Test)
                    </h3>
                    <span className="text-xs text-zinc-400">
                      Jami 10 ta savol • Darajalar: Oson, O'rta, Ekspert
                    </span>
                  </div>
                </div>

                {!quizFinished && (
                  <div className="text-right">
                    <span className="text-xs text-zinc-400">Savol:</span>
                    <span className="text-sm font-bold text-amber-400 font-mono ml-1">
                      {currentQuestionIdx + 1} / {quizQuestions.length}
                    </span>
                  </div>
                )}
              </div>

              {!quizFinished ? (
                <div className="space-y-6">
                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-300"
                      style={{
                        width: `${((currentQuestionIdx + 1) / quizQuestions.length) * 100}%`,
                      }}
                    />
                  </div>

                  {/* Question Title */}
                  <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">
                    {currentQ.question}
                  </h4>

                  {/* Options */}
                  <div className="space-y-3">
                    {currentQ.options.map((option, idx) => {
                      const isSelected = selectedOption === idx;
                      const isCorrect = idx === currentQ.correctIndex;
                      let btnStyle = "bg-zinc-900/80 border-zinc-800 text-zinc-200 hover:border-amber-500/40 hover:bg-zinc-850";

                      if (isAnswered) {
                        if (isCorrect) {
                          btnStyle = "bg-emerald-950/60 border-emerald-500 text-emerald-200 ring-1 ring-emerald-500";
                        } else if (isSelected && !isCorrect) {
                          btnStyle = "bg-red-950/60 border-red-500 text-red-200";
                        } else {
                          btnStyle = "bg-zinc-900/40 border-zinc-850 text-zinc-500 opacity-60";
                        }
                      }

                      return (
                        <button
                          key={idx}
                          onClick={() => handleSelectOption(idx)}
                          disabled={isAnswered}
                          className={`w-full text-left p-4 rounded-xl border transition-all text-xs sm:text-sm font-medium flex items-center justify-between cursor-pointer ${btnStyle}`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-md bg-zinc-800 text-zinc-300 font-mono text-xs flex items-center justify-center font-bold">
                              {String.fromCharCode(65 + idx)}
                            </span>
                            <span>{option}</span>
                          </div>

                          {isAnswered && isCorrect && (
                            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                          )}
                          {isAnswered && isSelected && !isCorrect && (
                            <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation box */}
                  {isAnswered && (
                    <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 leading-relaxed animate-fadeIn">
                      <strong className="text-amber-300 block mb-1">💡 Tarixiy izoh:</strong>
                      {currentQ.explanation}
                    </div>
                  )}

                  {/* Next button */}
                  {isAnswered && (
                    <button
                      onClick={handleNextQuestion}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 text-black font-extrabold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-amber-500/20"
                    >
                      {currentQuestionIdx + 1 === quizQuestions.length ? "Natijalarni Ko'rish" : "Keyingi Savolga O'tish →"}
                    </button>
                  )}
                </div>
              ) : (
                /* Quiz Complete Screen */
                <div className="py-8 text-center space-y-5 animate-fadeIn">
                  <div className="w-20 h-20 rounded-full bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center mx-auto text-4xl">
                    🏆
                  </div>
                  <h4 className="text-2xl font-black text-amber-300 font-serif">
                    Test Yakunlandi!
                  </h4>
                  <div className="p-5 rounded-xl bg-zinc-900 border border-zinc-800 max-w-sm mx-auto space-y-2">
                    <span className="text-xs text-zinc-400 block">Sizning natijangiz:</span>
                    <span className="text-3xl font-extrabold text-white font-mono">
                      {score} / {quizQuestions.length}
                    </span>
                    <div className="pt-2 border-t border-zinc-800">
                      <span className="text-xs text-amber-400 font-bold block">
                        {getRank().badge} {getRank().title}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-400 max-w-md mx-auto">
                    {score >= 7 
                      ? "Ajoyib natija! Jaloliddin Manguberdi va Xorazmshohlar davri tarixini mukammal bilasiz." 
                      : "Yaxshi urinish! Saytdagi ma'lumotlarni o'rganib chiqib qayta topshirishingiz mumkin."}
                  </p>
                  <button
                    onClick={restartQuiz}
                    className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 mx-auto cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Testni Qayta Topshirish
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: Detailed Q&A (FAQ Accordion) (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-bold text-amber-300 font-serif mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-amber-400" />
              <span>Eng Ko'p Beriladigan Tarixiy Savollar</span>
            </h3>

            <div className="space-y-3">
              {faqList.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="royal-card overflow-hidden border-zinc-800 hover:border-amber-500/40 transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full text-left p-4 flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-white hover:text-amber-300 cursor-pointer transition-colors"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-amber-400 shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 text-xs text-zinc-300 leading-relaxed border-t border-zinc-800/80 animate-fadeIn">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
