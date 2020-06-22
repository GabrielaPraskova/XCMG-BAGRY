// nosnost a hmotnost je uvedena v tunách (t)
//motor: Perkins, Cummins, Kubota jsou EU 
//ostatní bude možnost měnit motor
//možnost volení barvy
// !!cesta k obrazku je jen přednastavená
//pokud EU motor navíc přidává se cena 


export default {
    stroje:
      [
        {
          popis:'Kolový nakladač série ZL a LW společnosti XCMG vyvážející ho do 183 zemí světa patří do segmentu odolných heavy-duty nakladačů. Model vyznačující se výkonem, ekonomičností, komfortem a spolehlivostí je uživateli vysoce hodnocen již od uvedení jeho prvního generace na mezinárodní trh před více než 30 lety.',
          id: 1,
          typ: "bagr",
          nazev: "LW180K",
          obrazek: "LW180K.jpg",
          motor: [
            { nazevMotoru: "Yuchai YC4D80-T3A1", cenaMotoruBez: 0, vykon: "58 kW/2300 rpm", krouticiMoment: "305 Nm / 1400~1600 rpm", prevodovka: "převodník točivého momentu" },
            { nazevMotoru: "Perkins 404J-E22TA", cenaMotoruBez: 129000, vykon: "55 kW/2800 rpm", krouticiMoment: "270Nm / 1600 rpm", prevodovka: "převodník točivého momentu" }
          ],
          prislusentvi: true,
          nadstandart: true,
          cenaBezDPH: 890000,
          cenaSDPH: 1076900,
          technickeParametry:
          {
            CelkovaDelka: "5980 mm", 
            SirkaLopaty: "2060 mm", 
            Vyska: "3200 mm", 
            Rozvor: "2300", 
            SvetlaVyska: "298 mm" ,
            Nosnost: 1.8,
            Hmotnost: 6.2,
            ObjemLopaty: "0.9～1.1 m3",
            Rychlost: { vpredI: "9 km/h", vpredII: "26 km/h", vzadI: "9 km/h", vzadII: "26 km/h" },
            MaxTaznaSila: "45 KN",
            MaxStoupani: "28 °",
            MaxSklopnyUhel: "45 °",
            MaxSklopnaVyska: "2680",
            AutoVyrovnaniLopaty: "ano",
            MaxPreklopnaSika: "55KN",
            PracovniCyklu: "≦ 8.5 S",
            MinPolomerOtaceni: "5180 mm",
            Pneu: "16/70-20"
        }
        },
        {
          popis:'Kolový nakladač série ZL a LW společnosti XCMG vyvážející ho do 183 zemí světa patří do segmentu odolných heavy-duty nakladačů. Model vyznačující se výkonem, ekonomičností, komfortem a spolehlivostí je uživateli vysoce hodnocen již od uvedení jeho prvního generace na mezinárodní trh před více než 30 lety.',
          id: 2,
          typ: "bagr",
          nazev: "ZL30G",
          obrazek: "ZL30G.jpg",
          motor: [
            { nazevMotoru: "Perkins 1006D-6TA92", cenaMotoruBez: 0, vykon: "92 kW/ 2300 rpm", krouticiMoment: "460Nm / 1400~1600 rpm", prevodovka: "převodník točivého momentu" },
            { nazevMotoru: "Perkins 904J-E36TA", cenaMotoruBez: 198000, vykon: "100 kW/2000- 2400 rpm", krouticiMoment: "550Nm / 1500 rpm", prevodovka: "převodník točivého momentu" }],
          prislusentvi: true,
          nadstandart: true,
          cenaBezDPH: 1190000,
          cenaSDPH: 1439900,
          technickeParametry:{            
            rozmery: { celkovaDelka: "7250 mm", sirkaLopaty: "2470 mm", vyska: "3290 mm", rozvor: "2900", svetlaVyska: "370 mm" } ,
            nosnost: 3,
            hmotnost: 10.8,
            objemLopaty: "1,8 m3",
            rychlost:
              { vpredI: "8 km/h", vpredII: "13 km/h", vpredIII: "27 km/h", vzadI: "8 km/h", vzadII: "13 km/h", vzadIII: "27 km/h" },
            maxStoupani: "28 °",
            maxSklopnyUhel: "45 °",
            maxSklopnaVyska: "2930",
            fceAutoVyrovnaniLopaty: "ano",
            maxPreklopnaSika: "130KN",
            pracovniCyklus: "10 S",
            minPolomerOtaceni: "6000 mm",
            pneu: "17.5 - 25"                  
              }
              },
        {
          popis:'Kolový nakladač série ZL a LW společnosti XCMG vyvážející ho do 183 zemí světa patří do segmentu odolných heavy-duty nakladačů. Model vyznačující se výkonem, ekonomičností, komfortem a spolehlivostí je uživateli vysoce hodnocen již od uvedení jeho prvního generace na mezinárodní trh před více než 30 lety.',
          id: 3,
          typ: "bagr",
          nazev: "ZL40G",
          obrazek: "ZL40G.jpg",
          motor: [
            { nazevMotoru: "Shanchai Sc8d", cenaMotoruBez: 0, vykon: "125 kW/2200 rpm", krouticiMoment: "700 Nm / 1400~1600 rpm", prevodovka: "převodník točivého momentu" },
            { nazevMotoru: "Perkins 1204J-E44", cenaMotoruBez: 198000, vykon: "100 kW/2000 - 2400 rpm", krouticiMoment: "550Nm / 1500 rpm", prevodovka: "převodník točivého momentu" }],
          prislusentvi: true,
          nadstandart: true,
          cenaBezDPH: 1590000,
          cenaSDPH: 1923900,
          technickeParametry:{ 
              rozmery: { celkovaDelka: "7913 mm", sirkaLopaty: "2786 mm", vyska: "3494 mm", rozvor: "3100", svetlaVyska: "430 mm" },
              nosnost: 4,
              hmotnost: 14.5,
              objemLopaty: "2.4 m3",
              rychlost:
                { vpredI: "7 km/h", vpredII: "12 km/h", vpredIII: "23 km/h", vzadI: "7 km/h", vzadII: "12 km/h", vzadIII: "23 km/h" },
              maxTaznaSila: "123 KN",
              maxStoupani: "28 °",
              maxSklopnyUhel: "45 °",
              maxSklopnaVyska: "≥2841 mm",
              fceAutoVyrovnaniLopaty: "ano",
              maxPreklopnaSika: "130 KN",
              pracovniCyklus: "≤10.5 S",
              minPolomerOtaceni: "6905 mm",
              pneu: "20.5 - 25"}       
        },
        {
          popis:'Kolový nakladač série ZL a LW společnosti XCMG vyvážející ho do 183 zemí světa patří do segmentu odolných heavy-duty nakladačů. Model vyznačující se výkonem, ekonomičností, komfortem a spolehlivostí je uživateli vysoce hodnocen již od uvedení jeho prvního generace na mezinárodní trh před více než 30 lety.',
          id: 4,
          typ: "bagr",
          nazev: "ZL50G",
          obrazek: "ZL50G.jpg",
          motor: [
            { nazevMotoru: "Shanchai Sc8d", cenaMotoruBez: 0, vykon: "125 kW/2200 rpm", krouticiMoment: "700 Nm / 1400~1600 rpm", prevodovka: "převodník točivého momentu" },
            { nazevMotoru: "Perkins 1204J-E44", cenaMotoruBez: 258000, vykon: "39.8 kW/2000 - 2200 rpm", krouticiMoment: "815Nm / 1400 rpm", prevodovka: "převodník točivého momentu" }],
          prislusentvi: false,
          nadstandart: false,
          cenaBezDPH: 2190000,
          cenaSDPH: 2649900,
          technickeParametry:{ 
            rozmery:{ celkovaDelka: "8513 mm", sirkaLopaty: "2986 mm", vyska: "3494 mm", rozvor: "3100", svetlaVyska: "430 mm" } ,
          nosnost: 5,
          hmotnost: 19.5,
          'objem Lopaty': "3.2 m3",
          rychlost:
            { vpredI: "7 km/h", vpredII: "12 km/h", vpredIII: "23 km/h", vzadI: "7 km/h", vzadII: "12 km/h", vzadIII: "23 km/h" },
          maxTaznaSila: "183 KN",
          maxStoupani: "28 °",
          maxSklopnyUhel: "45 °",
          maxSklopnaVyska: "≥2841 mm",
          fceAutoVyrovnaniLopaty: "ano",
          maxPreklopnaSika: "180 KN",
          pracovniCyklus: "≤10.5 S",
          minPolomerOtaceni: "6905 mm",
          pneu: "20.5 - 25"
                  }                  
        },
        {
          popis:'Kolový nakladač série ZL a LW společnosti XCMG vyvážející ho do 183 zemí světa patří do segmentu odolných heavy-duty nakladačů. Model vyznačující se výkonem, ekonomičností, komfortem a spolehlivostí je uživateli vysoce hodnocen již od uvedení jeho prvního generace na mezinárodní trh před více než 30 lety.',
          id: 5,
          typ: "bagr",
          nazev: "LW800KN",
          obrazek: "LW800KN.jpg",
          motor: [
            { nazevMotoru: "Cummins QSM11-C335", cenaMotoruBez: 0, vykon: "250 kW/2100 rpm", krouticiMoment: "1674 Nm / 1400 rpm", prevodovka: "převodník točivého momentu" }],
          prislusentvi: false,
          nadstandart: false,
          cenaBezDPH: 2890000,
          cenaSDPH: 3496900,
          technickeParametry: { 
            rozmery: { celkovaDelka: "9300 mm", sirkaLopaty: "3550 mm", vyska: "3700 mm", rozvor: "3600", svetlaVyska: "500 mm" },
            nosnost: 8,
            hmotnost: 28.5,
            objemLopaty: "4.5 m3",
            rychlost:
              { vpredI: "7 km/h", vpredII: "12 km/h", vpredIII: "23 km/h", vpredIV: "36 km/H", vzadI: "7 km/h", vzadII: "12 km/h", vzadIII: "24 km/h" },
            maxTaznaSila: "245 KN",
            maxStoupani: ">25 °",
            maxSklopnyUhel: "45 °",
            maxSklopnaVyska: "3400 mm",
            fceAutoVyrovnaniLopaty: "ano",
            maxPreklopnaSika: "260 KN",
            pracovniCyklus: "≤12 S",
            minPolomerOtaceni: "6175 mm",
            pneu: "29.5 - 25"
            }                  
        },
        {
          popis:'Kolový nakladač série ZL a LW společnosti XCMG vyvážející ho do 183 zemí světa patří do segmentu odolných heavy-duty nakladačů. Model vyznačující se výkonem, ekonomičností, komfortem a spolehlivostí je uživateli vysoce hodnocen již od uvedení jeho prvního generace na mezinárodní trh před více než 30 lety.',
          id: 6,
          typ: "bagr",
          nazev: "LW1100KN",
          obrazek: "LW1100KN.jpg",
          motor: [
            { nazevMotoru: "Cummins QSM11-C335", cenaMotoruBez: 0, vykon: "250 kW/2100 rpm", krouticiMoment: "1674 Nm / 1400 rpm", prevodovka: "převodník točivého momentu" }],
          prislusentvi: false,
          nadstandart: false,
          cenaBezDPH: 4390000,
          cenaSDPH: 5311900,
          technickeParametry:{ 
            rozmery: { celkovaDelka: "10139 mm", sirkaLopaty: "3639 mm", vyska: "4028 mm", rozvor: "3700", svetlaVyska: "500 mm" },
          nosnost: 22,
          hmotnost: 35,
          objemLopaty: "5.5 m3",
          rychlost:
            { vpredI: "7 km/h", vpredII: "12 km/h", vpredIII: "23 km/h", vpredIV: "36 km/H", vzadI: "7 km/h", vzadII: "12 km/h", vzadIII: "25 km/h" },
          maxTaznaSila: "290 KN",
          maxStoupani: ">25 °",
          maxSklopnyUhel: "45 °",
          maxSklopnaVyska: "3400 mm",
          fceAutoVyrovnaniLopaty: "ano",
          maxPreklopnaSika: "260 KN",
          pracovniCyklus: "≤13.5 S",
          minPolomerOtaceni: "6308 mm",
          pneu: "29.5 - 25"
          }
        },
        {
          popis:'XE série je ekologický typ hydraulických rypadel specielně navržených na evropský a americký trh. Tato série slaví úspěchy zejména ve vyspělých evropských (Německo, Francie, Holandsko atd.) a spojených státech amerických kde se klade důraz na kvalitu spojenou vysokým komfortem i přes o trochu vyšší pořizovací náklady v porovnání s neznačkovými dovozy. XCMG vyvážející do 183 zemí světa patří s 30-ti letou historií tohoto modelu vyznačující se výkonem, ekonomičností, komfortem a spolehlivostí do top 5 největších výrobců světa.',
          id: 7,
          typ: "rypadlo",
          nazev: "XE35U",
          obrazek: "XE35U.jpg",
          motor: [
            { nazevMotoru: "3TNV88-B", pocetValcu: 3, cenaMotoruBez: 0, vykon: "21.4 kW/2400 rpm", krouticiMoment: "106.4 Nm / 1000 rpm" },
            { nazevMotoru: "Perkins 403J-E17T", pocetValcu: 3, cenaMotoruBez: 98000, vykon: "36 kW/2800 rpm", krouticiMoment: "166 Nm / 1600 rpm" }
          ],
          prislusentvi: true,
          nadstandart: false,
          cenaBezDPH: 999000,
          cenaSDPH: 1197900,
          technickeParametry:{ 
            hmotnost: 4.2, 
            'objem Lopaty': "0.11 m3", 
            rychlost: "3.6/2.2 km/h", 
            maxStoupani: "30°", 
            rypnaSila: "27 kN" ,
            celkovaDelka: "4960 mm", 
            celkovaSirka: "1740", 
            vyska: "2550 mm", 
            sirkaPodvozku: "1340 mm", 
            delkaPodvozku: "1440 mm", 
            sirkaPasu: "300 mm", 
            svetlaVyska: "297 mm", 
            maxDosahRamene: "5415", 
            polomerOtaceni: "2170" 
        }
      },
        {
          popis:'XE série je ekologický typ hydraulických rypadel specielně navržených na evropský a americký trh. Tato série slaví úspěchy zejména ve vyspělých evropských (Německo, Francie, Holandsko atd.) a spojených státech amerických kde se klade důraz na kvalitu spojenou vysokým komfortem i přes o trochu vyšší pořizovací náklady v porovnání s neznačkovými dovozy. XCMG vyvážející do 183 zemí světa patří s 30-ti letou historií tohoto modelu vyznačující se výkonem, ekonomičností, komfortem a spolehlivostí do top 5 největších výrobců světa.',
          id: 8,
          typ: "rypadlo",
          nazev: "XE60C",
          obrazek: "XE60C.jpg",
          motor: [
            { nazevMotoru: "4TNV94L-BVXG", pocetValcu: 4, cenaMotoruBez: 0, vykon: "33.7 kW/2100 rpm", krouticiMoment: "193.2 - 210.6 Nm / 1260 rpm" },
            { nazevMotoru: "Perkins 404J-E22T", pocetValcu: 4, cenaMotoruBez: 128000, vykon: "45 kW/2800 rpm", krouticiMoment: "222 Nm / 1600 rpm" }
          ],
          prislusentvi: true,
          nadstandart: false,
          cenaBezDPH: 1490000,
          cenaSDPH: 1802900,
          technickeParametry:{ 
            hmotnost: 6, 
            objemLopaty: "0.23 m3", 
            rychlost: "4.2/2.2 km/h", 
            maxStoupani: "35°", 
            rypnaSila: "48.3 kN" ,
            rozmery: { celkovaDelka: "5860 mm", celkovaSirka: "1920", vyska: "2585 mm", sirkaPodvozku: "1920 mm", delkaPodvozku: "1990 mm", sirkaPasu: "400 mm", svetlaVyska: "385 mm", maxDosahRamene: "6130", polomerOtaceni: "2460" } 
        }},
        {
          popis:'XE série je ekologický typ hydraulických rypadel specielně navržených na evropský a americký trh. Tato série slaví úspěchy zejména ve vyspělých evropských (Německo, Francie, Holandsko atd.) a spojených státech amerických kde se klade důraz na kvalitu spojenou vysokým komfortem i přes o trochu vyšší pořizovací náklady v porovnání s neznačkovými dovozy. XCMG vyvážející do 183 zemí světa patří s 30-ti letou historií tohoto modelu vyznačující se výkonem, ekonomičností, komfortem a spolehlivostí do top 5 největších výrobců světa.',
          id: 9,
          typ: "rypadlo",
          nazev: "XE150D",
          obrazek: "XE150D.jpg",
          motor: [
            { nazevMotoru: "Cummins 4BTAAA4.9", pocetValcu: 4, cenaMotoruBez: 0, vykon: "85.4 kW/2200 rpm", krouticiMoment: "447 Nm / 1500 rpm" },
          ],
          prislusentvi: true,
          nadstandart: false,
          cenaBezDPH: 2379000,
          cenaSDPH: 2878590,
          technickeParametry:{ 
            hmotnost: 14.4, 
            'objem Lopaty': "0.4-0.61 m3", 
            rychlost: "5.2/3.4 km/h", 
            maxStoupani: "70°", 
            rypnaSila: "85 kN",
            celkovaDelka: "7801 mm", 
            celkovaSirka: "2590", 
            vyska: "2880 mm", 
            sirkaPodvozku: "2512 mm", 
            delkaPodvozku: "3660 mm", 
            sirkaPasu: "600 mm", 
            svetlaVyska: "478 mm", 
            maxDosahRamene: "8296", 
            polomerOtaceni: "2335" }
        },
        {
          popis:'XE série je ekologický typ hydraulických rypadel specielně navržených na evropský a americký trh. Tato série slaví úspěchy zejména ve vyspělých evropských (Německo, Francie, Holandsko atd.) a spojených státech amerických kde se klade důraz na kvalitu spojenou vysokým komfortem i přes o trochu vyšší pořizovací náklady v porovnání s neznačkovými dovozy. XCMG vyvážející do 183 zemí světa patří s 30-ti letou historií tohoto modelu vyznačující se výkonem, ekonomičností, komfortem a spolehlivostí do top 5 největších výrobců světa.',
          id: 10,
          typ: "rypadlo",
          nazev: "XE210C",
          obrazek: "XE210C.jpg",
          motor: [
            { nazevMotoru: "QSB6.7", pocetValcu: 6, cenaMotoruBez: 0, vykon: "116 kW/2000 rpm", krouticiMoment: "622 Nm / 1500 rpm" },
            { nazevMotoru: "Perkins 904J-E36TA", pocetValcu: 6, cenaMotoruBez: 198000, vykon: "100 kW/2000 - 2400 rpm", krouticiMoment: "550 Nm / 1500 rpm" }
          ],
          prislusentvi: false,
          nadstandart: false,
          cenaBezDPH: 3691815,
          cenaSDPH: 4467097,
          technickeParametry:{ 
            hmotnost: 21.1, 
            objemLopaty: "0.8-1.2 m3", 
            rychlost: "5.4/3.1 km/h", 
            maxStoupani: "70°", 
            rypnaSila: "149 kN",
            rozmery: { celkovaDelka: "9625 mm", celkovaSirka: "2990", vyska: "3100 mm", sirkaPodvozku: "2990 mm", delkaPodvozku: "4255 mm", sirkaPasu: "600 mm", svetlaVyska: "475 mm", maxDosahRamene: "9940", polomerOtaceni: "3530" }}
        },
        {
          popis:'XE série je ekologický typ hydraulických rypadel specielně navržených na evropský a americký trh. Tato série slaví úspěchy zejména ve vyspělých evropských (Německo, Francie, Holandsko atd.) a spojených státech amerických kde se klade důraz na kvalitu spojenou vysokým komfortem i přes o trochu vyšší pořizovací náklady v porovnání s neznačkovými dovozy. XCMG vyvážející do 183 zemí světa patří s 30-ti letou historií tohoto modelu vyznačující se výkonem, ekonomičností, komfortem a spolehlivostí do top 5 největších výrobců světa.',
          id: 11,
          typ: "rypadlo",
          nazev: "XE250C",
          obrazek: "XE250C.jpg",
          motor: [
            { nazevMotoru: "QSB6.7", pocetValcu: 6, cenaMotoruBez: 0, vykon: "142 kW/2200 rpm", krouticiMoment: "756 Nm / 1800 rpm" },
            { nazevMotoru: "Perkins 1204J-E44", pocetValcu: 4, cenaMotoruBez: 258000, vykon: "139.8 kW/2000 - 2200 rpm", krouticiMoment: "815 Nm / 1400 rpm" }
          ],
          prislusentvi: false,
          nadstandart: false,
          cenaBezDPH: 4590000,
          cenaSDPH: 5553900,
          technickeParametry:{ 
            hmotnost: 24.8, 
            objemLopaty: "1.2 m3", 
            rychlost: "5.5/3.5 km/h", 
            maxStoupani: "70°", 
            rypnaSila: "163 kN",
          rozmery: { celkovaDelka: "10195 mm", celkovaSirka: "3190", vyska: "3100 mm", sirkaPodvozku: "2830 mm", delkaPodvozku: "4640 mm", sirkaPasu: "600 mm", svetlaVyska: "485 mm", maxDosahRamene: "9760", polomerOtaceni: "3850" }}
                },
        {
          popis:'XE série je ekologický typ hydraulických rypadel specielně navržených na evropský a americký trh. Tato série slaví úspěchy zejména ve vyspělých evropských (Německo, Francie, Holandsko atd.) a spojených státech amerických kde se klade důraz na kvalitu spojenou vysokým komfortem i přes o trochu vyšší pořizovací náklady v porovnání s neznačkovými dovozy. XCMG vyvážející do 183 zemí světa patří s 30-ti letou historií tohoto modelu vyznačující se výkonem, ekonomičností, komfortem a spolehlivostí do top 5 největších výrobců světa.',
          id: 12,
          typ: "rypadlo",
          nazev: "XE370CB",
          obrazek: "XE370CB.jpg",
          motor: [
            { nazevMotoru: "QSC8.3-C260", pocetValcu: 6, cenaMotoruBez: 0, vykon: "194 kW/2200 rpm", krouticiMoment: "1180 Nm / 1500 rpm" },
            { nazevMotoru: "Perkins 1206J-E70TTA", pocetValcu: 6, cenaMotoruBez: 328000, vykon: "239 kW/2000 - 2200 rpm", krouticiMoment: "1268 Nm / 1500 rpm" }
          ],
          prislusentvi: false,
          nadstandart: false,
          cenaBezDPH: 5301571,
          cenaSDPH: 6414901,
          technickeParametry:
          { hmotnost: 36.8, 
            objemLopaty: "1.4 m3", 
            rychlost: "5.4/3.2 km/h", 
            maxStoupani: "70°", 
            rypnaSila: "263 kN",
            rozmery: { celkovaDelka: "11386 mm", celkovaSirka: "3190", vyska: "3530 mm", sirkaPodvozku: "3030 mm", delkaPodvozku: "5035 mm", sirkaPasu: "600 mm", svetlaVyska: "500 mm", maxDosahRamene: "10720", polomerOtaceni: "4510" }}
        },
      ],
      prislusenstvi:[
        {id:1, typ:"bagr", nazev:"Paletové vidle", cenaSDPH: 29000, cenaBezDPH: 35090, obrazek:"smetak.jpg"},
        {id:2, typ:"bagr", nazev:"Lžíce 4 v 1", cenaSDPH: 44900, cenaBezDPH: 54329, obrazek:"lzice4v1.jpg"},
        {id:3, typ:"bagr", nazev:"Míchačka betonu", cenaSDPH: 89000, cenaBezDPH: 107690, obrazek:"michackaBetonu.jpg"},    
        {id:4, typ:"bagr", nazev:"Smeták", cenaSDPH: 79000, cenaBezDPH: 95590, obrazek:"smetak.jpg"},
        {id:5, typ:"bagr", nazev:"Sněhová fréza", cenaSDPH: 87900, cenaBezDPH: 106359, obrazek:"snehovaFreza.jpg"},
        {id:6, typ:"bagr", nazev:"Snežná radlice", cenaSDPH: 34900, cenaBezDPH: 42229, obrazek:"sneznaRadlice.jpg"},
        {id:7, typ:"bagr", nazev:"Vidle na dřevo", cenaSDPH: 49000, cenaBezDPH: 59290, obrazek:"vidleNaDrevo.jpg"},
        {id:8, typ: "rypadlo", nazev:"Paletovací vidle", cenaSDPH: 29000, cenaBezDPH: 35090, obrazek:"" },
        {id:9, typ: "rypadlo", nazev:"Rozrývač", cenaSDPH: 24900, cenaBezDPH: 30129, obrazek:"" },
        {id:10, typ: "rypadlo", nazev:"Sekačka", cenaSDPH: 59000, cenaBezDPH: 71390, obrazek:"" },
        {id:11, typ: "rypadlo", nazev:"Třídící lžíce", cenaSDPH: 79000, cenaBezDPH: 95590, obrazek:"" },
        {id:12, typ: "rypadlo", nazev:"Vidle na kulatinu", cenaSDPH: 44900, cenaBezDPH: 54329, obrazek:"" },
        {id:13, typ: "rypadlo", nazev:"Vrták", cenaSDPH: 54000, cenaBezDPH: 65340, obrazek:"" },
        {id:14, typ: "rypadlo", nazev:"Zametač", cenaSDPH: 56900, cenaBezDPH: 65340, obrazek:"" },
          ],
    nadstandart:[
      {id:1, typ: "bagr", nazev:"Klimatizace", cenaSDPH: 59290 , cenaBezDPH:49000 },
      {id:2, typ: "bagr", nazev:"Elektronicky ovládaný joystick", cenaSDPH: 30129 , cenaBezDPH:24900 },
      {id:3, typ: "bagr", nazev:"Zpětná kamera", cenaSDPH:5929 , cenaBezDPH:4900 },
      {id:4, typ: "bagr", nazev:"SPZ", cenaSDPH:30129 , cenaBezDPH:24900 }
    ],

    barvy:{red: "červená", black: "černá", blue:"modrá", yellow:"žlutá", green:"zelená"}
  }