import { useState } from "react";
import Image from "next/image";
import { soundManager } from "@/utils/soundEffects";
import { heroDetails } from "@/data/historyData";
import { User, Shield, Sparkles, BookOpen, Crown, Award } from "lucide-react";

export default function Biography() {
  const [activeTab, setActiveTab] = useState("character");

  const tabs = [
    { id: "character", label: "Shaxsiyati va Qiyofasi", icon: User },
    { id: "name", label: "'Manguberdi' nomi ma'nosi", icon: Sparkles },
    { id: "lineage", label: "Nasl-nasabi va Oilasi", icon: Crown },
    { id: "tactics", label: "Harbiy San'ati va Dahosi", icon: Shield },
  ];

  return (
    <section id="tarix" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Tarixiy Haqiqat va Qahramonlik</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-serif tracking-tight">
            Jaloliddin Manguberdi Kim Bo'lgan?
          </h2>
          <p className="mt-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
            Shihobiddin an-Nasaviy, Ibn al-Asir va Ato Malik Juvayniy asarlari
            asosida tiklangan hayoti, xarakteri va buyuk fazilatlari.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Portrait & Quick info card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative group rounded-2xl overflow-hidden border-2 border-amber-500/30 shadow-2xl bg-zinc-950/80">
              <div className="aspect-square relative w-full overflow-hidden">
                <Image
                  src="/images/portrait.jpg"
                  alt="Jaloliddin Manguberdi portreti"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>
              <div className="p-6 relative">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-amber-300 font-serif">
                    Sulton Jaloliddin
                  </h3>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 font-mono">
                    1198 – 1231
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  Xorazmshohlar davlatining so'nggi hukmdori, Markaziy Osiyo xalqlarining
                  mustaqillik timsoli.
                </p>

                {/* Quick details */}
                <div className="space-y-2 border-t border-zinc-800 pt-4 text-xs">
                  <div className="flex justify-between py-1 border-b border-zinc-900">
                    <span className="text-zinc-500">Sulola:</span>
                    <span className="text-zinc-200 font-medium">Anushteginiylar (Xorazmshohlar)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-zinc-900">
                    <span className="text-zinc-500">Otasi:</span>
                    <span className="text-zinc-200 font-medium">Alovuddin Muhammad</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-zinc-900">
                    <span className="text-zinc-500">Onasi:</span>
                    <span className="text-zinc-200 font-medium">Oychechak (turkman xonadoni)</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-zinc-500">Harbiy tajribasi:</span>
                    <span className="text-amber-400 font-semibold">14+ Yirik G'alabali Janglar</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contemporary quote box */}
            <div className="royal-card p-5 border-amber-500/20">
              <div className="flex items-center gap-2 mb-2 text-amber-400 text-xs font-semibold uppercase">
                <Award className="w-4 h-4" />
                <span>Shihobiddin an-Nasaviy (Kotibi):</span>
              </div>
              <p className="italic text-xs sm:text-sm text-zinc-300 leading-relaxed">
                "U qoramag'iz, o'rta bo'yli, turkiy tilda ravon gapiradigan kishi edi.
                Qahramonlar sarvari, sheryurak va adolatli bo'lib, eng og'ir damlarda ham
                sovuqqonligini yo'qotmasdi. Qo'rqoqlik va sotqinlikni kechirmasdi."
              </p>
            </div>
          </div>

          {/* Right Column: Tabbed interactive narrative */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Tabs Navigation */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-zinc-900/70 p-1.5 rounded-xl border border-zinc-800">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const active = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      soundManager.playClick();
                      setActiveTab(tab.id);
                    }}
                    className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      active
                        ? "bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-md"
                        : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab 1: Shaxsiyati */}
            {activeTab === "character" && (
              <div className="royal-card p-6 sm:p-8 space-y-5 animate-fadeIn">
                <h3 className="text-2xl font-bold text-amber-300 font-serif">
                  Qahramonlik Xarakteri va Shaxsiyati
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Jaloliddin yoshligidanoq o'zgacha qat'iyat, jismoniy chaqqonlik va jasorati bilan ajralib turardi.
                  U saroy hayotining hashamatidan ko'ra ot minib safarga chiqishni, qilichbozlik va kamonbozlik
                  mashqlarini afzal ko'rgan.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                    <span className="text-lg">🦁</span>
                    <h4 className="font-bold text-white text-sm mt-1">Sheryuraklik</h4>
                    <p className="text-xs text-zinc-400 mt-1 leading-normal">
                      Hatto o'n barobar ko'p bo'lgan mo'g'ul qo'shini qarshisida ham aslo sarosimaga tushmagan,
                      askarlariga o'zi shaxsan namuna bo'lgan.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                    <span className="text-lg">⚖️</span>
                    <h4 className="font-bold text-white text-sm mt-1">Adolat va Odillik</h4>
                    <p className="text-xs text-zinc-400 mt-1 leading-normal">
                      Oddiy jangchilarining ahvolidan xabardor bo'lgan, ularning qurol-aslahasi va ozuqasiga
                      shaxsan qayg'urgan, talon-torojga yo'l qo'ymagan.
                    </p>
                  </div>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed border-l-2 border-amber-500 pl-3">
                  Ibn al-Asir yozishicha: <em>"U biror marta ham dushman oldida orqaga chekinishni xayoliga
                  keltirmagan. Uning shiori: 'Yoki sharafli g'alaba, yoki qahramonona o'lim' edi."</em>
                </p>
              </div>
            )}

            {/* Tab 2: Manguberdi nomi */}
            {activeTab === "name" && (
              <div className="royal-card p-6 sm:p-8 space-y-5 animate-fadeIn">
                <h3 className="text-2xl font-bold text-amber-300 font-serif">
                  Nega "Manguberdi" Deb Atashgan?
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Tarixchi olimlar Jaloliddinning ushbu laqabi bo'yicha ikkita asosiy ilmiy xulosaga kelishgan:
                </p>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
                    <div className="flex items-center gap-2 font-bold text-amber-300 text-sm">
                      <span className="w-6 h-6 rounded-full bg-amber-500 text-black flex items-center justify-center text-xs">1</span>
                      "Mengli" (Xolli / Xol bilan tug'ilgan)
                    </div>
                    <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                      Eski turkiy tilda "meng" so'zi inson tanasidagi tug'ma xolni anglatgan.
                      Jaloliddinning yuzida tug'ma qora xol bo'lganligi sababli xalq orasida unga
                      <strong> "Mengliberdi" </strong> — ya'ni xolli qilib ato etilgan muborak o'g'il nomi berilgan.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
                    <div className="flex items-center gap-2 font-bold text-amber-300 text-sm">
                      <span className="w-6 h-6 rounded-full bg-amber-500 text-black flex items-center justify-center text-xs">2</span>
                      "Mangu Berdi" (Abadiy Ehtirom)
                    </div>
                    <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                      Ikkinchi ma'no: Tangri tomonidan millatga va yurtga berilgan mangu o'chmas botir,
                      mangu matonat sohibi ma'nosini bildiradi. Qadimiy xalq rivoyatlarida u yurtni
                      zulmdan asrovchi ilohiy inoyat sifatida qabul qilingan.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Nasl-nasabi */}
            {activeTab === "lineage" && (
              <div className="royal-card p-6 sm:p-8 space-y-5 animate-fadeIn">
                <h3 className="text-2xl font-bold text-amber-300 font-serif">
                  Xorazmshohlar Sulolasi va Valiahdlik
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Jaloliddin qudratli Anushteginiylar sulolasining vakili edi. Biroq saroyda uning buvisi —
                  qipchoq qavmidan bo'lgan nufuzli Turkon xotun Jaloliddinga qarshilik ko'rsatib, taxtga o'z
                  urug'idan bo'lgan boshqa nabirasi Uzloqshohni valiahd qilishga uringan.
                </p>
                <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 space-y-3">
                  <h4 className="font-bold text-amber-400 text-sm">Ashurada Orolidagi Tarixiy Qaror (1220)</h4>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    Mo'g'ullar zarbasidan so'ng Kaspiy dengizidagi bepoyon orolga chekingan xasta Xorazmshoh Muhammad
                    saroy fitnalarining xato ekanligini angladi. Vafotidan bir necha kun oldin barcha o'g'illarini yig'ib:
                  </p>
                  <blockquote className="italic text-xs text-amber-200 border-l-2 border-amber-500 pl-3">
                    "Mo'g'ullarning qora bulutini faqat o'g'lim Jaloliddin tarqatishi mumkin.
                    Shuning uchun valiahdlik qilichimni faqat unga topshiraman!"
                  </blockquote>
                </div>
              </div>
            )}

            {/* Tab 4: Harbiy san'ati */}
            {activeTab === "tactics" && (
              <div className="royal-card p-6 sm:p-8 space-y-5 animate-fadeIn">
                <h3 className="text-2xl font-bold text-amber-300 font-serif">
                  Jaloliddinning Harbiy Dahosi va Taktikasi
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Jaloliddin oddiy jangchi emas, balki chuqur harbiy strateg edi. U mo'g'ullarning manyovrli
                  otliq hujumlari taktikasini puxta o'rgangan va unga qarshi mutlaqo yangicha uslublarni ishlab chiqqan:
                </p>
                <ul className="space-y-3 text-xs sm:text-sm text-zinc-300">
                  <li className="flex items-start gap-2.5">
                    <span className="text-amber-400 font-bold">✓</span>
                    <span><strong>Piyoda himoya devori:</strong> Otliqlarni tushirib, qalqon va nayzalar bilan dushman zarbasini yutish (Parvon jangi).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-amber-400 font-bold">✓</span>
                    <span><strong>Qanotdan to'satdan zarba:</strong> Zaxiradagi saralangan suvoriylarni tog' ortida yashirib, hal qiluvchi lahzada jangga kiritish.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-amber-400 font-bold">✓</span>
                    <span><strong>Tezkor hujum va harakatchanlik:</strong> Kuniga yuzlab kilometr masofani bosib o'tib, dushmanning kutilmagan tomoniga yetib borish.</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
