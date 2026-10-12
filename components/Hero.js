import { useEffect, useRef } from "react";
import Image from "next/image";
import { soundManager } from "@/utils/soundEffects";
import { Swords, Gamepad2, Shield, Flame, Compass } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef(null);

  // Floating embers / sparks particle effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 3 + 1,
      speedY: -(Math.random() * 1.5 + 0.4),
      speedX: (Math.random() - 0.5) * 0.8,
      opacity: Math.random() * 0.8 + 0.2,
      color: Math.random() > 0.4 ? "#f59e0b" : "#ef4444",
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;

        if (p.y < 0) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background Image with layered gradient overlays */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/images/hero-banner.jpg"
          alt="Jaloliddin Manguberdi jang maydonida"
          fill
          priority
          className="object-cover object-center opacity-45 scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070a13] via-[#070a13]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070a13] via-transparent to-[#070a13]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#070a13_80%)]" />
      </div>

      {/* Floating Canvas Embers */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10 pointer-events-none"
      />

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md shadow-lg shadow-amber-500/10 animate-pulse">
          <Flame className="w-4 h-4 text-amber-400" />
          <span>Xorazmshohlar Davlatining So'nggi Va Eng Jasur Sultoni</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase font-serif text-amber-100 drop-shadow-2xl">
          <span className="text-gold-gradient block">JALOLIDDIN</span>
          <span className="text-silver-gradient tracking-widest text-3xl sm:text-5xl md:text-6xl block mt-1">
            MANGUBERDI
          </span>
        </h1>

        {/* Epic Description */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-zinc-300 max-w-3xl leading-relaxed font-normal">
          Dunyoni larzaga keltirgan Chingizxonning yengilmas deb hisoblangan
          qo'shinini tor-mor etgan va uning hayratiga sazovor bo'lgan buyuk vatanparvar,
          tengsiz sarkarda va millatimizning mangu iftixori.
        </p>

        {/* Famous Quote in Banner */}
        <div className="mt-6 p-4 rounded-xl bg-black/50 border border-amber-500/30 backdrop-blur-md max-w-2xl text-left">
          <div className="flex items-start gap-3">
            <span className="text-3xl text-amber-400 leading-none">“</span>
            <div>
              <p className="italic text-xs sm:text-sm text-amber-200/90 leading-snug">
                Otasiga mana shunday o'g'il yarashadi! U o'z sha'ni va millati nomusi uchun kurashdi. Dunyo bunday o'g'lonni kam ko'rgan!
              </p>
              <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider block mt-1">
                — Chingizxon (Sind daryosi bo'yida)
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#oyinlar"
            onClick={() => soundManager.playSwordClash()}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-black text-sm tracking-wider uppercase flex items-center gap-2.5 shadow-xl shadow-amber-500/30 transition-all hover:scale-105 active:scale-95"
          >
            <Gamepad2 className="w-5 h-5" />
            O'yinlarni O'ynash
          </a>

          <a
            href="#yurishlar"
            onClick={() => soundManager.playClick()}
            className="px-6 py-3.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-850 border border-amber-500/40 hover:border-amber-400 text-amber-200 font-bold text-sm tracking-wide flex items-center gap-2.5 backdrop-blur-md transition-all hover:scale-105"
          >
            <Swords className="w-5 h-5 text-amber-400" />
            Janglar va Yurishlar
          </a>

          <a
            href="#savollar"
            onClick={() => soundManager.playClick()}
            className="px-5 py-3.5 rounded-xl bg-zinc-900/50 hover:bg-zinc-800 border border-zinc-700/60 text-zinc-300 font-medium text-sm flex items-center gap-2 transition-all"
          >
            <Compass className="w-4 h-4 text-cyan-400" />
            Test & Viktorina
          </a>
        </div>

        {/* Stats Grid */}
        <div className="mt-14 w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {[
            { value: "11 Yil", label: "Uzluksiz Jangovar Kurash", icon: "⚔️" },
            { value: "Parvon (1221)", label: "Mo'g'ullarning Ilk Mag'lubiyati", icon: "🛡️" },
            { value: "Sind Sakrashi", label: "Qahramonlik Afsonasi", icon: "🌊" },
            { value: "Oliy Orden", label: "O'zbekiston Davlat Mukofoti", icon: "🎖️" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-3.5 sm:p-4 rounded-xl bg-zinc-900/60 border border-amber-500/20 backdrop-blur-md hover:border-amber-400/50 transition-all text-left group"
            >
              <div className="text-xl sm:text-2xl mb-1 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-base sm:text-lg font-extrabold text-amber-300 font-serif">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-xs text-zinc-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
