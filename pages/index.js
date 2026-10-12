import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Biography from "@/components/Biography";
import CampaignsMap from "@/components/CampaignsMap";
import GamesSection from "@/components/Games/GamesSection";
import QuizAndFAQ from "@/components/QuizAndFAQ";
import LegacyAndQuotes from "@/components/LegacyAndQuotes";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jaloliddin Manguberdi — Buyuk Sarkarda va Qahramon | Yurishlar, Viktorina va O'yinlar</title>
        <meta
          name="description"
          content="Jaloliddin Manguberdining 11 yillik shonli harbiy yurishlari, Parvon jangi, Sind daryosi qahramonligi, interaktiv mini-o'yinlar va savol-javoblar viktorinasi."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-[#070a13] text-zinc-100 flex flex-col font-sans selection:bg-amber-500 selection:text-black">
        {/* Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* Hero Section */}
          <Hero />

          {/* Biography & Character */}
          <Biography />

          {/* Battles & Military Campaigns */}
          <CampaignsMap />

          {/* Interactive Games Arena (3 Games) */}
          <GamesSection />

          {/* Quiz & FAQs */}
          <QuizAndFAQ />

          {/* Legacy, Orders & Historical Testimonials */}
          <LegacyAndQuotes />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
