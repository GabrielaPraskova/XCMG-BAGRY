// nosnost a hmotnost je uvedena v tunách (t)
//motor: Perkins, Cummins, Kubota jsou EU => vždy jeden motor 
//ostatní bude možnost měnit motor
//možnost volení barvy
// !!cesta k obrazku je jen přednastavená
//pokud EU motor navíc přidává se cena + cenaEU


export default [
  { stroje:
    [
      {id: 1, 
      typ: "bagr",
      nazev: "LW180K",       
      obrazek: "LW180K.jpg", 
      motor:[
          {nazevMotoru:"Yuchai YC4D80-T3A1", cenaMotoruBez:0, vykon: "58 kW/2300 rpm", krouticiMoment: "305 Nm / 1400~1600 rpm", prevodovka: "převodník točivého momentu"},
          {nazevMotoru:"Perkins 404J-E22TA", cenaMotoruBez:129000, vykon: "55 kW/2800 rpm", krouticiMoment: "270Nm / 1600 rpm", prevodovka: "převodník točivého momentu"}
        ], 
      prislusentvi: true,
      nadstandart: true,
      cenaBezDPH: 890000, 
      cenaSDPH: 1076900, 
      technickeParametry: 
        [
          {rozmery:[{celkovaDelka :"5980 mm", sirkaLopaty: "2060 mm", vyska: "3200 mm", rozvor: "2300", svetlaVyska: "298 mm"}]},
          {specifikace: 
              [{nosnost: 1.8, 
                hmotnost: 6.2, 
                objemLopaty: "0.9～1.1 m3", 
                rychlost: 
                  [{vpredI: "9 km/h", vpredII: "26 km/h", vzadI: "9 km/h", vzadII: "26 km/h"}],
                maxTaznaSila: "45 KN",
                maxStoupani: "28 °",
                maxSklopnyUhel: "45 °",
                maxSklopnaVyska: "2680",
                fceAutoVyrovnaniLopaty: "ano",
                maxPreklopnaSika: "55KN",
                pracovniCyklus: "≦ 8.5 S",
                minPolomerOtaceni: "5180 mm",
                pneu: "16/70-20"}]}
    ]},
    {id: 2,    
      typ: "bagr",
      nazev: "ZL3OG",       
      obrazek: "ZL3OG.jpg", 
      motor:[
        {nazevMotoru:"Perkins 1006D-6TA92", cenaMotoruBez:0, vykon: "92 kW/ 2300 rpm", krouticiMoment: "460Nm / 1400~1600 rpm", prevodovka: "převodník točivého momentu"},
        {nazevMotoru:"Perkins 904J-E36TA", cenaMotoruBez:198000, vykon: "100 kW/2000- 2400 rpm", krouticiMoment: "550Nm / 1500 rpm", prevodovka: "převodník točivého momentu"}], 
      prislusentvi: true,
      nadstandart: true,
      cenaBezDPH: 1190000, 
      cenaSDPH: 1439900, 
      technickeParametry: 
        [
          {rozmery:[{celkovaDelka :"7250 mm", sirkaLopaty: "2470 mm", vyska: "3290 mm", rozvor: "2900", svetlaVyska: "370 mm"}]},
          {specifikace: 
              [{nosnost: 3, 
                hmotnost: 10.8, 
                objemLopaty: "1,8 m3", 
                rychlost: 
                  [{vpredI: "8 km/h", vpredII: "13 km/h", vpredIII: "27 km/h", vzadI: "8 km/h", vzadII: "13 km/h", vzadIII: "27 km/h"}],
                maxTaznaSila: "90 KN",
                maxStoupani: "28 °",
                maxSklopnyUhel: "45 °",
                maxSklopnaVyska: "2930",
                fceAutoVyrovnaniLopaty: "ano",
                maxPreklopnaSika: "130KN",
                pracovniCyklus: "10 S",
                minPolomerOtaceni: "6000 mm",
                pneu: "17.5 - 25"}]}
        ]},
    {id: 3, 
      typ: "bagr",
      nazev: "ZL40G",       
      obrazek: "ZL40G.jpg", 
      motor:[
          {nazevMotoru:"Shanchai Sc8d", cenaMotoruBez:0, vykon: "125 kW/2200 rpm", krouticiMoment: "700 Nm / 1400~1600 rpm", prevodovka: "převodník točivého momentu"},
          {nazevMotoru:"Perkins 1204J-E44", cenaMotoruBez:198000, vykon: "100 kW/2000 - 2400 rpm", krouticiMoment: "550Nm / 1500 rpm", prevodovka: "převodník točivého momentu"}], 
      prislusentvi: true,
      nadstandart: true,
      cenaBezDPH: 1590000, 
      cenaSDPH: 1923900, 
      technickeParametry: 
          [
            {rozmery:[{celkovaDelka :"7913 mm", sirkaLopaty: "2786 mm", vyska: "3494 mm", rozvor: "3100", svetlaVyska: "430 mm"}]},
            {specifikace: 
              [{nosnost: 4, 
                hmotnost: 14.5, 
                objemLopaty: "2.4 m3", 
                rychlost: 
                    [{vpredI: "7 km/h", vpredII: "12 km/h", vpredIII: "23 km/h", vzadI: "7 km/h", vzadII: "12 km/h", vzadIII: "23 km/h"}],
                maxTaznaSila: "123 KN",
                maxStoupani: "28 °",
                maxSklopnyUhel: "45 °",
                maxSklopnaVyska: "≥2841 mm",
                fceAutoVyrovnaniLopaty: "ano",
                maxPreklopnaSika: "130 KN",
                pracovniCyklus: "≤10.5 S",
                minPolomerOtaceni: "6905 mm",
              pneu: "20.5 - 25"}]}]},
    {id: 4, 
    typ: "bagr",
    nazev: "ZL5OG",       
    obrazek: "ZZL5OG.jpg", 
    motor:[
          {nazevMotoru:"Shanchai Sc8d", cenaMotoruBez:0, vykon: "125 kW/2200 rpm", krouticiMoment: "700 Nm / 1400~1600 rpm", prevodovka: "převodník točivého momentu"},
          {nazevMotoru:"Perkins 1204J-E44", cenaMotoruBez:258000, vykon: "39.8 kW/2000 - 2200 rpm", krouticiMoment: "815Nm / 1400 rpm", prevodovka: "převodník točivého momentu"}], 
    prislusentvi: false,
    nadstandart: false,
    cenaBezDPH: 2190000, 
    cenaSDPH: 2649900, 
    technickeParametry: 
            [
              {rozmery:[{celkovaDelka :"8513 mm", sirkaLopaty: "2986 mm", vyska: "3494 mm", rozvor: "3100", svetlaVyska: "430 mm"}]},
              {specifikace: 
                  [{nosnost: 5, 
                    hmotnost: 19.5, 
                    objemLopaty: "3.2 m3", 
                    rychlost: 
                      [{vpredI: "7 km/h", vpredII: "12 km/h", vpredIII: "23 km/h", vzadI: "7 km/h", vzadII: "12 km/h", vzadIII: "23 km/h"}],
                    maxTaznaSila: "183 KN",
                    maxStoupani: "28 °",
                    maxSklopnyUhel: "45 °",
                    maxSklopnaVyska: "≥2841 mm",
                    fceAutoVyrovnaniLopaty: "ano",
                    maxPreklopnaSika: "180 KN",
                    pracovniCyklus: "≤10.5 S",
                    minPolomerOtaceni: "6905 mm",
                    pneu: "20.5 - 25"}
        ]}]},
    {id: 5, 
    typ: "bagr",
    nazev: "LW800KN",       
    obrazek: "LW800KN.jpg", 
    motor:[
           {nazevMotoru:"Cummins QSM11-C335", cenaMotoruBez:0, vykon: "250 kW/2100 rpm", krouticiMoment: "1674 Nm / 1400 rpm", prevodovka: "převodník točivého momentu"}], 
    prislusentvi: false,
    nadstandart: false,
    cenaBezDPH: 2890000, 
    cenaSDPH: 3496900, 
    technickeParametry: 
      [
        {rozmery:[{celkovaDelka :"9300 mm", sirkaLopaty: "3550 mm", vyska: "3700 mm", rozvor: "3600", svetlaVyska: "500 mm"}]},
        {specifikace: 
            [{nosnost: 8, 
              hmotnost: 28.5, 
              objemLopaty: "4.5 m3", 
              rychlost: 
                [{vpredI: "7 km/h", vpredII: "12 km/h", vpredIII: "23 km/h", vpredIV: "36 km/H", vzadI: "7 km/h", vzadII: "12 km/h", vzadIII: "24 km/h"}],
              maxTaznaSila: "245 KN",
              maxStoupani: ">25 °",
              maxSklopnyUhel: "45 °",
              maxSklopnaVyska: "3400 mm",
              fceAutoVyrovnaniLopaty: "ano",
              maxPreklopnaSika: "260 KN",
              pracovniCyklus: "≤12 S",
               minPolomerOtaceni: "6175 mm",
              pneu: "29.5 - 25"}
            ]}]},
    {id: 6, 
    typ: "bagr",
    nazev: "LW1100KN",       
    obrazek: "LW1100KN.jpg", 
    motor:[
              {nazevMotoru:"Cummins QSM11-C335", cenaMotoruBez:0, vykon: "250 kW/2100 rpm", krouticiMoment: "1674 Nm / 1400 rpm", prevodovka: "převodník točivého momentu"}], 
    prislusentvi: false,
    nadstandart: false,
    cenaBezDPH: 4390000, 
    cenaSDPH: 5311900, 
    technickeParametry: 
        [
          {rozmery:[{celkovaDelka :"10139 mm", sirkaLopaty: "3639 mm", vyska: "4028 mm", rozvor: "3700", svetlaVyska: "500 mm"}]},
          {specifikace: 
          [{nosnost: 22, 
            hmotnost: 35, 
            objemLopaty: "5.5 m3", 
             rychlost: 
               [{vpredI: "7 km/h", vpredII: "12 km/h", vpredIII: "23 km/h", vpredIV: "36 km/H", vzadI: "7 km/h", vzadII: "12 km/h", vzadIII: "25 km/h"}],
             maxTaznaSila: "290 KN",
             maxStoupani: ">25 °",
             maxSklopnyUhel: "45 °",
             maxSklopnaVyska: "3400 mm",
             fceAutoVyrovnaniLopaty: "ano",
             maxPreklopnaSika: "260 KN",
             pracovniCyklus: "≤13.5 S",
             minPolomerOtaceni: "6308 mm",
             pneu: "29.5 - 25"}
            ]}]},
      ]}];