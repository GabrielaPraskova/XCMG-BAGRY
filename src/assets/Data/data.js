// nosnost a hmotnost je uvedena v tunách (t)
//motor: Perkins, Cummins, Kubota jsou EU => vždy jeden motor 
//ostatní bude možnost měnit motor
//možnost volení barvy
// !!cesta k obrazku je jen přednastavená


export default [
  { koloveBagry:[
    { id: 1, nazev: "LW180K", nosnost: 1.8, hmotnost: 6.2, obrazek: "LW180K.jpg", motor: "Yuchai YC4D80-T3A1", prislusenstviKolove: true, nadstandart: true},
    { id: 2, nazev: "ZL3OG", nosnost: 3, hmotnost: 10.8, obrazek: "ZL3OG.jpg", motor: "Perkins 1006D-6TA92", prislusenstviKolove: true, nadstandart: true},
    { id: 3, nazev: "ZL40G", nosnost: 4, hmotnost: 14.5, obrazek: "ZL40G.jpg", motor: "Shanchai Sc8d", prislusenstviKolove: true, nadstandart: true},
    { id: 4, nazev: "ZL5OG",obrazek: "ZL5OG.jpg", motor: "", prislusenstviKolove: false, nadstandart: false},
    { id: 5, nazev: "LW800KN", nosnost: 8, hmotnost: 28.5, obrazek: "LW800KN.jpg", motor: "Cummins QSM11-C335", prislusenstviKolove: false, nadstandart: false},
    { id: 6, nazev: "LW1100KN", nosnost: 22, hmotnost: 35, obrazek: "LW1100KN.jpg", motor: "Cummins QSM11-C335", prislusenstviKolove: false, nadstandart: false}
    ],
    
    rypadla:[
      { id: 11, nazev: "XE35E", hmotnost: 4.2, obrazek: "XE35E.jpg", motor:"3TNV88-B", prislusenstviRypadla: true},
      { id: 12, nazev: "XE60C", hmotnost: 6, obrazek: "XE60C.jpg", motor: "4TNV94L-BVXG", prislusenstviRypadla: true},
      { id: 14, nazev: "XE150D", hmotnost: 14.4, obrazek: "XE150D.jpg", motor: "Cummins 4BTAA3.9", prislusenstviRypadla: true},
      { id: 15, nazev: "XE210C", hmotnost: 21, obrazek: "XE210C.jpg", motor: "QSB6.7", prislusenstviRypadla: false},
      { id: 16, nazev: "XE250C", hmotnost: 24.8, obrazek: "XE250C.jpg", motor: "QSB6.7", prislusenstviRypadla: false},
      { id: 18, nazev: "XE370cb", hmotnost: 36.8, obrazek: "XE370cb.jpg", motor: "QSCB.3-C260", prislusenstviRypadla: false},],
  

  prislusenstviKolove:[
    {id:21, nazev:"paletové vidle", cenaSDPH: 29000, cenaBezDPH: 35090, obrazekPrislusentviKola:""},
    {id:22, nazev:"lžíce 4 v 1", cenaSDPH: 44900, cenaBezDPH: 54329, obrazekPrislusentviKola:"lzice4v1.jpg"},
    {id:23, nazev:"míchačka betonu", cenaSDPH: 89000, cenaBezDPH: 107690, obrazekPrislusentviKola:"michackaBetonu.jpg"},    
    {id:24, nazev:"smeták", cenaSDPH: 79000, cenaBezDPH: 95590, obrazekPrislusentviKola:"smetak.jpg"},
    {id:25, nazev:"sněhová fréza", cenaSDPH: 87900, cenaBezDPH: 106359, obrazekPrislusentviKola:"snehovaFreza.jpg"},
    {id:26, nazev:"snežná radlice", cenaSDPH: 34900, cenaBezDPH: 42229, obrazekPrislusentviKola:"sneznaRadlice.jpg"},
    {id:27, nazev:"vidle na dřevo", cenaSDPH: 49000, cenaBezDPH: 59290, obrazekPrislusentviKola:"vidleNaDrevo.jpg"},
      ],

  prislusenstviRypadla:[
    {id:31, nazev:"paletovací vidle", cenaSDPH: 29000, cenaBezDPH: 35090, obrazekPrislusentviRypadla:"" },
    {id:32, nazev:"rozrývač", cenaSDPH: 24900, cenaBezDPH: 30129, obrazekPrislusentviRypadla:"" },
    {id:33, nazev:"sekačka", cenaSDPH: 59000, cenaBezDPH: 71390, obrazekPrislusentviRypadla:"" },
    {id:34, nazev:"třídící lžíce", cenaSDPH: 79000, cenaBezDPH: 95590, obrazekPrislusentviRypadla:"" },
    {id:35, nazev:"vidle na kulatinu", cenaSDPH: 44900, cenaBezDPH: 54329, obrazekPrislusentviRypadla:"" },
    {id:36, nazev:"vrták", cenaSDPH: 54000, cenaBezDPH: 65340, obrazekPrislusentviRypadla:"" },
    {id:31, nazev:"zametač", cenaSDPH: 56900, cenaBezDPH: 65340, obrazekPrislusentviRypadla:"" },
  ],
  nadstandart:[
    {id:41, nazev:"klimatizace", cenaSDPH: 49000, cenaBezDPH: 59290},
    {id:42, nazev:"elektronicky ovládaný joystick", cenaSDPH: 24900, cenaBezDPH: 30129},
    {id:43, nazev:"zpětná kamera", cenaSDPH: 4900, cenaBezDPH: 5929},
    {id:44, nazev:"SPZ", cenaSDPH: 24900, cenaBezDPH: 30129}
  ]


}]
    
    
    