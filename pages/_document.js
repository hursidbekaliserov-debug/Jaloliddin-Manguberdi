import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="uz">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Jaloliddin Manguberdi - Buyuk sarkarda, Xorazmshohlar davlatining so'nggi sultoni, harbiy yurishlari, Parvon jangi, Sind daryosi qahramonligi, savol-javoblar va interaktiv tarixiy o'yinlar." />
        <meta name="keywords" content="Jaloliddin Manguberdi, Xorazmshohlar, Parvon jangi, Sind daryosi, Chingizxon, O'zbekiston tarixi, harbiy yurishlar, o'yinlar, test" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <body className="antialiased selection:bg-amber-500 selection:text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
