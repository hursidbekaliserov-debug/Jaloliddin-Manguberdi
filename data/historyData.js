// Jaloliddin Manguberdi haqida to'liq tarixiy ma'lumotlar, janglar, FAQ va viktorina savollari

export const heroDetails = {
  fullName: "Jaloliddin Manguberdi (Jaloliddin ibn Alovuddin Muhammad)",
  birthYear: "1198-yil",
  deathYear: "1231-yil (avgust)",
  dynasty: "Anushteginiylar (Xorazmshohlar davlati)",
  father: "Alovuddin Muhammad Xorazmshoh",
  mother: "Oychechak (turkman kanizaklaridan, oqila va jasur ayol)",
  titles: [
    "Xorazmshohlar so'nggi sultoni",
    "Islom qalqoni va xaloskori",
    "Manguberdi (Yuzida xoli bo'lgan / Mangu berilgan botir)",
    "Mo'g'ullarga zarba bergan birinchi qo'mondon"
  ],
  epithet: "Dunyoni larzaga solgan Chingizxonni tiz cho'ktirgan va hayratda qoldirgan yagona sarkarda"
};

export const historicalTimeline = [
  {
    year: "1198",
    title: "Dunyoga kelishi",
    location: "Xorazm (Ko'hna Urganch)",
    description: "Alovuddin Muhammad oilasida dunyoga keldi. Bolaligidanoq harbiy san'at, chavandozlik, kamonbozlik va qilichbozlikda tengsiz mahorat ko'rsatdi.",
    type: "life",
    icon: "crown"
  },
  {
    year: "1220",
    title: "G'azna noibligi va Valiahdlik",
    location: "G'azna, Xuroson",
    description: "Otasi Xorazmshoh Muhammad Kaspiy dengizidagi Ashurada orolida vafot etishidan oldin o'z qilichini Jaloliddinga topshirib, uni rasman taxt vorisi (valiahd) deb e'lon qildi.",
    type: "politics",
    icon: "scroll"
  },
  {
    year: "1221 (Bahor)",
    title: "Niso va Valiyon janglari",
    location: "Xuroson va Qandahor yaqinida",
    description: "Gurganjdan atigi 300 suvoriy bilan chiqib, Niso yaqinida 700 kishilik mo'g'ul qo'shinini tor-mor etdi. So'ngra Valiyon qal'asini qamal qilayotgan Tekechuk va Moloqor qo'shinlarini yakson qildi.",
    type: "battle",
    result: "G'alaba",
    icon: "sword"
  },
  {
    year: "1221 (Kuz)",
    title: "Mashhur Parvon Jangi",
    location: "Parvon dashti (Kobul yaqinida)",
    description: "Chingizxonning asrandi o'g'li va bosh sarkardasi Shiki Xutuxu boshliq 30-45 ming kishilik saralangan mo'g'ul armiyasiga qarshi 2 kunlik shiddatli jang. Jaloliddin otliqlarini piyoda jangga kiritib, mo'g'ullarning tarixdagi ilk va dahshatli mag'lubiyatini ta'minladi!",
    type: "battle",
    result: "Buyuk G'alaba",
    icon: "award"
  },
  {
    year: "1221 (9-dekabr)",
    title: "Afsonaviy Sind (Hind) Daryosi Jangi",
    location: "Sind daryosi bo'yi",
    description: "Chingizxon shaxsan boshchiligidagi 50 mingdan ortiq qo'shin Jaloliddinni qurshab oldi. 700 kishi bilan qahramonona kurashgan Jaloliddin asir tushmaslik uchun otini 20 metrli tik qoyadan daryoning shiddatli to'lqinlariga sakratdi. Chingizxon barmog'ini tishlab: 'Otasiga shunday o'g'il yarashadi!' deya o'q uzishni taqiqladi.",
    type: "legend",
    result: "Mangu Qahramonlik",
    icon: "water"
  },
  {
    year: "1221 - 1224",
    title: "Hindiston yurishlari",
    location: "Panjob, Sind, Dehli sultonligi",
    description: "Hindistonda o'z qo'shinini qayta tikladi, mahalliy rojalarni bo'ysundirdi va qudratli otliq qo'shin yig'ib, qayta Markaziy Osiyo va Eronga yurish rejasini tuzdi.",
    type: "campaign",
    icon: "shield"
  },
  {
    year: "1225",
    title: "Garni Jangi va Tabriz fathi",
    location: "Ozarbayjon va Gruziya",
    description: "Ozarbayjon atobegi O'zbek taslim bo'ldi. Garni yaqinida 60 ming kishilik gruzin va arman birlashgan qo'shinini tor-mor keltirib, Tiflisni (Tbilisini) o'z tasarrufiga oldi.",
    type: "battle",
    result: "G'alaba",
    icon: "flag"
  },
  {
    year: "1227",
    title: "Isfahon jangi",
    location: "Isfahon atrofi",
    description: "Eronga bostirib kirgan yangi mo'g'ul lashkarlariga qarshi qaqshatqich zarba berdi. Mo'g'ul sarkardalari Jaloliddinning nomini eshitganda chekinishga majbur bo'lishardi.",
    type: "battle",
    result: "G'alaba",
    icon: "sword"
  },
  {
    year: "1231",
    title: "So'nggi Kurash va Boqiylik",
    location: "Kurd tog'lari (Mayyaforiqin)",
    description: "Chingizxon vafotidan so'ng O'qtoy qoon 150 minglik lashkar yubordi. Mo'g'ullar xiyonat va ayg'oqchilik orqali qisqartirdi. Jaloliddin 1231-yil avgust oyida tog'da xiyonatkorona hujum qurboni bo'ldi. U mangu qahramon sifatida tarix sahifalarida qoldi.",
    type: "legacy",
    icon: "star"
  }
];

export const battlesData = [
  {
    id: "parvon",
    name: "Parvon Jangi (1221)",
    opponent: "Shiki Xutuxu (Mo'g'ul imperiyasi)",
    myForces: "30 000 (Xorazm, afg'on, xalaj va qang'li jangchilari)",
    enemyForces: "35 000 - 45 000 saralangan mo'g'ul qo'shini",
    outcome: "Mutlaq g'alaba (Mo'g'ullarning tarixdagi ilk mag'lubiyati)",
    tactic: "Otliqlar otlaridan tushib, nayza va kamon bilan qat'iy mudofaa qildilar. Ikkinchi kuni zaxira kuchlar bilan to'satdan qanot zarbasi berildi.",
    importance: "Chingizxon qo'shinlari yengilmas degan vahimali afsona butunlay barbod etildi.",
    badge: "Eng Yirik G'alaba"
  },
  {
    id: "sind",
    name: "Sind Daryosi Jangi (1221)",
    opponent: "Chingizxon (Shaxsan o'zi va bosh no'yonlari)",
    myForces: "700 - 4 000 qahramon fidoyi",
    enemyForces: "50 000 dan ziyod mo'g'ul saralangan qo'shini",
    outcome: "Qahramonona chekinish va daryoga sakrash",
    tactic: "Tengsiz jangda dushman markaziga bir necha bor shiddatli qarshi hujum qilindi. So'ng qoyadan qurollangan holda ot bilan daryoni kechib o'tildi.",
    importance: "Chingizxon uning jasoratiga qoyil qolib: 'Dunyo xalqlari bunday o'g'lonni ko'rmagan!' deb tan oldi.",
    badge: "Dunyoni Hayratga Solgan Sahna"
  },
  {
    id: "garni",
    name: "Garni Jangi (1225)",
    opponent: "Ivane Mxargrdzeli (Kavkaz birlashgan armiyasi)",
    myForces: "25 000 xorazmiylar",
    enemyForces: "60 000 gruzin va ittifoqchilar",
    outcome: "Hal qiluvchi g'alaba",
    tactic: "Tog'li dovonlarda dushmanning asosiy kuchlarini bo'lib tashlab, o'ng qanotdan hal qiluvchi zarba berish.",
    importance: "Tiflis va Kavkazda Xorazmshohlar davlatining qudrati qayta tiklandi.",
    badge: "Strategik Zafar"
  },
  {
    id: "valiyon",
    name: "Valiyon va Niso Janglari (1221)",
    opponent: "Tekechuk va Moloqor no'yonlar",
    myForces: "300 suvoriy (dastlab) -> 10 000",
    enemyForces: "1 000 dan 15 000 gacha mo'g'ul otliqlari",
    outcome: "Ketma-ket g'alabalar",
    tactic: "Pinhona tungi yurish, to'satdan hujum va dushman saflarini sarosimaga solish.",
    importance: "Mo'g'ullarga qarshi xalq isyonlari va kurash ruhi qayta alangalandi.",
    badge: "Ilk Zafar Qadami"
  }
];

export const historicalQuotes = [
  {
    author: "Chingizxon",
    role: "Mo'g'ul imperiyasi asoschisi (Bosh dushmani)",
    quote: "Otasiga mana shunday o'g'il yarashadi! U o'lim changalidan o'zini qutqarish uchun emas, nomus va millat sha'ni uchun kurashdi. Har bir ota o'z o'g'lining mana shunday mard bo'lishini orzu qiladi!",
    source: "Tarixi Jahongushoy (Ato Malik Juvayniy)"
  },
  {
    author: "Shihobiddin Muhammad an-Nasaviy",
    role: "Jaloliddinning shaxsiy kotibi va tarixchisi",
    quote: "Sulton Jaloliddin qoramag'iz, o'rta bo'yli, turkcha so'zlashadigan kishi edi. U qahramonlarning qahramoni, sheryurak va adolatpesha hukmdor bo'lib, g'azablanganda ham og'ir-bosiqlikni yo'qotmasdi.",
    source: "Siyrat al-sulton Jalol ad-Din Mankburni"
  },
  {
    author: "Ibn al-Asir",
    role: "XIII asr buyuk arab tarixchisi",
    quote: "Agar Jaloliddin bo'lmaganida, mo'g'ul toshqini butun Islom olamini bir zumda yer bilan yakson qilgan bo'lardi. U yolg'iz o'zi butun dunyoni titratgan qudratga qarshi turdi.",
    source: "Al-Kāmil fit-Tārīkh"
  },
  {
    author: "Mirzo Ulug'bek",
    role: "Temuriy davlat arbobi va alloma",
    quote: "Jaloliddin Manguberdi kabi jasur va fidoyi sarkardalar millatning mangu faxridir. Uning ismi mardlik va ozodlik ramziga aylandi.",
    source: "To'rt ulus tarixi"
  }
];

export const faqList = [
  {
    id: 1,
    question: "Nega unga 'Manguberdi' nomi berilgan?",
    answer: "Tarixiy manbalarga ko'ra ikkita asosiy sabab bor: 1) Tug'ilganida yuzida xoli (bengi/mengi) bo'lgani sababli xalq orasida 'Mengliberdi' yoki 'Manguberdi' deyilgan; 2) 'Tangri mangu bergan qahramon' ma'nosida jasorati va matonati uchun unga ushbu unvon nisbat berilgan."
  },
  {
    id: 2,
    question: "Parvon jangida Jaloliddin qanday noyob harbiy taktikani qo'llagan?",
    answer: "Parvon jangida Jaloliddin o'z otliqlarini otlaridan tushirib, piyoda jang qilishni buyurgan. Sababi tog'li va notekis Parvon dashtida mo'g'ul otliqlarining manyovrini cheklash kerak edi. Xorazm askarlari nayza va qalqon bilan mustahkam mudofaa tuzib, dushmanning otliq hujumlarini qaytardilar, ikkinchi kuni esa zaxiradagi saralangan suvoriy kuchlar bilan mo'g'ul qo'shinini o'rab olib butunlay tor-mor qildilar."
  },
  {
    id: 3,
    question: "Sind daryosiga sakrash voqeasi qanday sodir bo'lgan?",
    answer: "1221-yil 9-dekabrda Sind daryosi bo'yida 50 mingdan ortiq mo'g'ul qo'shini Jaloliddinning oz sonli qo'shinini qurshovga oldi. Barcha askarlari qurbon bo'lgach, asir tushishni or deb bilgan sulton to'liq qurollangan holda tulporini 20 metrli baland tik qoyadan shiddatli oqayotgan Sind (Hind) daryosiga sakratdi. Daryoni suzib o'tib, narigi qirg'oqdan dushmanga qilich ko'tarib qaqshatqich nigoh tashladi. Chingizxon bu mislsiz jasoratdan hayratda qolib, unga o'q uzishni taqiqladi va o'g'illariga uni o'rnak qilib ko'rsatdi."
  },
  {
    id: 4,
    question: "Jaloliddin Manguberdi necha yil davomida mo'g'ullarga qarshi kurashgan?",
    answer: "U 1220-yildan to 1231-yilgacha — qariyb 11 yil davomida uzluksiz, tinimsiz kurash olib bordi. Xorazm, Xuroson, Afg'oniston, Hindiston, Eron, Kavkaz va Iroq kabi bepoyon hududlarda Chingizxon va uning no'yonlariga qarshi 14 dan ortiq yirik janglarda qatnashdi."
  },
  {
    id: 5,
    question: "Bugungi O'zbekistonda Jaloliddin Manguberdi xotirasi qanday e'zozlanadi?",
    answer: "2000-yil 30-avgustda O'zbekiston Respublikasining 'Jaloliddin Manguberdi' oliy harbiy ordeni ta'sis etilgan. Urganch shahrida uning ulug'vor haykali va xiyoboni barpo etilgan. Shuningdek, harbiy maktablar, ko'chalar uning nomi bilan ataladi va uning 800 yilligi xalqaro miqyosda nishonlangan."
  },
  {
    id: 6,
    question: "Jaloliddinning onasi Oychechak kim bo'lgan?",
    answer: "Oychechak jasur, aql-zakovatli turkman ayoli bo'lgan. U o'g'liga harbiy saboqlar berishda va vatanparvarlik ruhini singdirishda beqiyos hissa qo'shgan. Sind daryosi jangida asir tushmaslik uchun daryoga o'zini tashlashni so'ragan qahramon ona sifatida tarixda qolgan."
  }
];

export const quizQuestions = [
  {
    id: 1,
    question: "Jaloliddin Manguberdining otasi kim bo'lgan?",
    options: [
      "Alovuddin Muhammad Xorazmshoh",
      "Tekesh Xorazmshoh",
      "Sulton Sanjar",
      "Qutbiddin Muhammad"
    ],
    correctIndex: 0,
    explanation: "Jaloliddin Xorazmshoh Alovuddin Muhammadning to'ng'ich o'g'li bo'lgan."
  },
  {
    id: 2,
    question: "Mo'g'ul qo'shinlarining tarixdagi ilk yirik mag'lubiyati qaysi jangda sodir bo'lgan?",
    options: [
      "Sind daryosi jangi (1221)",
      "Parvon jangi (1221)",
      "Garni jangi (1225)",
      "Niso jangi (1220)"
    ],
    correctIndex: 1,
    explanation: "1221-yilgi Parvon jangida Jaloliddin Shiki Xutuxu boshliq 45 minglik saralangan mo'g'ul armiyasini yakson qilgan."
  },
  {
    id: 3,
    question: "Chingizxon Jaloliddinning jasoratini ko'rib qaysi daryo bo'yida mashhur so'zlarini aytgan?",
    options: [
      "Amudaryo (Jayhun)",
      "Sirdaryo (Sayhun)",
      "Sind (Hind) daryosi",
      "Furot daryosi"
    ],
    correctIndex: 2,
    explanation: "1221-yil 9-dekabrda Sind daryosiga sakragan Jaloliddinni ko'rib Chingizxon: 'Otasiga shunday o'g'il yarashadi!' deb tan olgan."
  },
  {
    id: 4,
    question: "Jaloliddin Manguberdi Parvon jangida qaysi mashhur mo'g'ul sarkardasini mag'lub etgan?",
    options: [
      "Subutoy Bahodir",
      "Jebe no'yon",
      "Shiki Xutuxu",
      "Jochi xon"
    ],
    correctIndex: 2,
    explanation: "Shiki Xutuxu — Chingizxonning eng ishongan bosh qozi va no'yoni edi."
  },
  {
    id: 5,
    question: "Parvon jangida Jaloliddin qanday taktik buyruq bergan?",
    options: [
      "Qo'shinni kemalarga mindirish",
      "Otliqlarni otlaridan tushirib, piyoda mudofaada jang qilish",
      "Dushman ichiga soxta elchilar yuborish",
      "Kechasi daryo to'g'onini buzish"
    ],
    correctIndex: 1,
    explanation: "Tog'li Parvon vodiysida mo'g'ul suvoriy zarbalarini to'xtatish uchun Jaloliddin o'z lashkariga otlardan tushib, nayza va qalqonlar bilan mustahkam devor hosil qilishni buyurgan."
  },
  {
    id: 6,
    question: "Sind daryosidan o'tgach, Jaloliddin qaysi mamlakatda bir necha yil turib yangi qo'shin to'plagan?",
    options: [
      "Misr",
      "Hindiston (Panjob va Sind)",
      "Rum Saljuqiylari",
      "Xitoy"
    ],
    correctIndex: 1,
    explanation: "Jaloliddin 1221-1224 yillarda Hindistonda bo'lib, Dehli sultoni bilan muzokaralar o'tkazib yangi qudratli armiya tuzgan."
  },
  {
    id: 7,
    question: "Jaloliddin Manguberdining shaxsiy kotibi va uning hayoti haqida kitob yozgan tarixchi kim?",
    options: [
      "Shihobiddin Muhammad an-Nasaviy",
      "Abu Rayhon Beruniy",
      "Rashididdin Fazlulloh",
      "Mahmud Qoshg'ariy"
    ],
    correctIndex: 0,
    explanation: "Nasaviy Jaloliddinning safdoshi bo'lib, 'Siyrat al-sulton Jalol ad-Din Mankburni' asarini yozgan."
  },
  {
    id: 8,
    question: "Jaloliddin 1225-yilda Garni jangida qaysi davlat armiyasini mag'lub etgan?",
    options: [
      "Gurjiston (Gruziya) va ittifoqchilar armiyasini",
      "Vizantiya imperiyasini",
      "Xochparvarlar ritsarlarini",
      "G'aznaviylar davlatini"
    ],
    correctIndex: 0,
    explanation: "1225-yil Garni yaqinida Jaloliddin 60 minglik gruzin qo'shinini tor-mor etib, Tiflisni o'z davlatiga qo'shgan."
  },
  {
    id: 9,
    question: "O'zbekiston Respublikasida 'Jaloliddin Manguberdi' ordeni qachon ta'sis etilgan?",
    options: [
      "1991-yil",
      "2000-yil",
      "2010-yil",
      "2016-yil"
    ],
    correctIndex: 1,
    explanation: "2000-yil 30-avgustda O'zbekiston Respublikasining oliy harbiy 'Jaloliddin Manguberdi' ordeni qabul qilingan."
  },
  {
    id: 10,
    question: "Jaloliddin Manguberdining mo'g'ullarga qarshi kurashi jami necha yil davom etgan?",
    options: [
      "3 yil",
      "5 yil",
      "11 yil",
      "20 yil"
    ],
    correctIndex: 2,
    explanation: "U 1220-yildan 1231-yilgacha (11 yil) butun Yaqin Sharq va Markaziy Osiyo bo'ylab tinimsiz kurashgan."
  }
];

export const chronologyCards = [
  { id: "c1", year: 1198, text: "Jaloliddin Manguberdi tavallud topdi", correctOrder: 1 },
  { id: "c2", year: 1220, text: "Alovuddin Muhammad valiahdlik qilichini Jaloliddinga topshirdi", correctOrder: 2 },
  { id: "c3", year: 1221, text: "Parvon jangida Shiki Xutuxu qo'shini tor-mor etildi", correctOrder: 3 },
  { id: "c4", year: 1221, text: "Sind daryosiga afsonaviy sakrash sahnasi yuz berdi", correctOrder: 4 },
  { id: "c5", year: 1225, text: "Garni jangida g'alaba qozonilib, Tiflis zabt etildi", correctOrder: 5 },
  { id: "c6", year: 1231, text: "Mayyaforiqin tog'laridagi so'nggi kurash va boqiylikka ertalish", correctOrder: 6 }
];
