// Semanas de la quiniela: líneas y picks tal como vienen en la hoja.
// fav = equipo que da los puntos, dog = equipo que los recibe; local en MAYÚSCULAS.
// La página abre sola en la semana actual: cambia a la siguiente al terminar el día (hora de Guatemala) del último juego.
// Semana sin picks todavía: participantes: [] (se muestran juegos y líneas).
window.QUINIELA = {
  temporada: 2026,
  yo: "Stuardo Zimeri / Ian Zimeri",
  semanas: {
  3: {
    juegos: [
      {fav:"PACKERS", ln:6.5, dog:"Falcons", hora:"2026-09-25T00:15:00Z"},
      {fav:"Bengals", ln:3.5, dog:"STEELERS", hora:"2026-09-27T17:00:00Z"},
      {fav:"LIONS", ln:6.5, dog:"Jets", hora:"2026-09-27T17:00:00Z"},
      {fav:"Panthers", ln:2.5, dog:"BROWNS", hora:"2026-09-27T17:00:00Z"},
      {fav:"Texans", ln:2.5, dog:"COLTS", hora:"2026-09-27T17:00:00Z"},
      {fav:"Chiefs", ln:8.5, dog:"DOLPHINS", hora:"2026-09-27T17:00:00Z"},
      {fav:"JAGUARS", ln:2.5, dog:"Patriots", hora:"2026-09-27T17:00:00Z"},
      {fav:"GIANTS", ln:6.5, dog:"Titans", hora:"2026-09-27T17:00:00Z"},
      {fav:"BILLS", ln:7.5, dog:"Chargers", hora:"2026-09-27T17:00:00Z"},
      {fav:"Seahawks", ln:5.5, dog:"COMMANDERS", hora:"2026-09-27T17:00:00Z"},
      {fav:"Vikings", ln:2.5, dog:"BUCCANEERS", hora:"2026-09-27T20:05:00Z"},
      {fav:"49ERS", ln:8.5, dog:"Cardinals", hora:"2026-09-27T20:05:00Z"},
      {fav:"Ravens", ln:2.5, dog:"COWBOYS", hora:"2026-09-27T20:25:00Z"},
      {fav:"SAINTS", ln:2.5, dog:"Raiders", hora:"2026-09-27T20:25:00Z"},
      {fav:"Rams", ln:2.5, dog:"BRONCOS", hora:"2026-09-28T00:20:00Z"},
      {fav:"Eagles", ln:3.5, dog:"BEARS", hora:"2026-09-29T00:15:00Z"}
    ],
    participantes: [
      ["Andrés De León","Falcons,Bengals,Jets,Panthers,Texans,Chiefs,JAGUARS,Titans,BILLS,Seahawks,BUCCANEERS,49ERS,Ravens,SAINTS,Rams,Eagles"],
      ["Arturo Zimeri / Xavier Zimeri","PACKERS,Bengals,Jets,Panthers,COLTS,Chiefs,JAGUARS,Titans,Chargers,COMMANDERS,Vikings,49ERS,COWBOYS,SAINTS,BRONCOS,BEARS"],
      ["Carlos Noguera / Ignacio Noguera","Falcons,STEELERS,LIONS,Panthers,Texans,Chiefs,JAGUARS,Titans,Chargers,Seahawks,BUCCANEERS,Cardinals,Ravens,SAINTS,BRONCOS,Eagles"],
      ["Edgar Bran / Andrés Bran","PACKERS,Bengals,LIONS,Panthers,Texans,Chiefs,Patriots,Titans,Chargers,Seahawks,Vikings,49ERS,Ravens,Raiders,Rams,Eagles"],
      ["Edgar Sarceño / Mario Zirion","PACKERS,STEELERS,LIONS,Panthers,COLTS,Chiefs,Patriots,Titans,BILLS,Seahawks,BUCCANEERS,49ERS,Ravens,SAINTS,BRONCOS,Eagles"],
      ["Federico Zimeri","Falcons,STEELERS,Jets,BROWNS,COLTS,DOLPHINS,Patriots,GIANTS,BILLS,Seahawks,BUCCANEERS,Cardinals,COWBOYS,SAINTS,BRONCOS,BEARS"],
      ["Gerardo Villa e hijos","PACKERS,Bengals,LIONS,Panthers,COLTS,Chiefs,Patriots,GIANTS,BILLS,Seahawks,BUCCANEERS,49ERS,Ravens,SAINTS,Rams,Eagles"],
      ["German García / Carlos Abreu","PACKERS,Bengals,LIONS,Panthers,Texans,Chiefs,Patriots,GIANTS,BILLS,Seahawks,Vikings,49ERS,COWBOYS,SAINTS,BRONCOS,Eagles"],
      ["Gustavo Anzueto / Guille Anzueto","PACKERS,Bengals,LIONS,BROWNS,COLTS,Chiefs,Patriots,Titans,BILLS,Seahawks,Vikings,49ERS,Ravens,SAINTS,Rams,Eagles"],
      ["J.C. Sandoval / J.C. Sandoval Jr.","Falcons,Bengals,LIONS,Panthers,Texans,Chiefs,JAGUARS,Titans,BILLS,COMMANDERS,Vikings,49ERS,Ravens,Raiders,Rams,Eagles"],
      ["Javier Arzú Pérez","PACKERS,Bengals,Jets,Panthers,Texans,Chiefs,JAGUARS,Titans,Chargers,Seahawks,Vikings,Cardinals,Ravens,SAINTS,Rams,Eagles"],
      ["Joe Pasarelli / Everst Figueroa","Falcons,STEELERS,LIONS,BROWNS,COLTS,Chiefs,Patriots,GIANTS,Chargers,Seahawks,Vikings,49ERS,Ravens,Raiders,BRONCOS,Eagles"],
      ["José Gabriel Cummings","PACKERS,STEELERS,Jets,Panthers,COLTS,Chiefs,Patriots,GIANTS,Chargers,Seahawks,BUCCANEERS,Cardinals,Ravens,SAINTS,Rams,Eagles"],
      ["José Luis Contreras / Diego Contreras","PACKERS,STEELERS,Jets,BROWNS,COLTS,Chiefs,Patriots,Titans,Chargers,COMMANDERS,BUCCANEERS,49ERS,COWBOYS,SAINTS,BRONCOS,Eagles"],
      ["José Porres","Falcons,Bengals,Jets,Panthers,COLTS,Chiefs,Patriots,Titans,BILLS,Seahawks,Vikings,Cardinals,COWBOYS,Raiders,Rams,Eagles"],
      ["Luis Grazioso / Luigi Grazioso","PACKERS,Bengals,LIONS,BROWNS,Texans,Chiefs,Patriots,Titans,BILLS,Seahawks,Vikings,49ERS,Ravens,SAINTS,BRONCOS,Eagles"],
      ["Luis Herrera / Orlando Diab","PACKERS,Bengals,LIONS,Panthers,Texans,Chiefs,Patriots,Titans,Chargers,Seahawks,Vikings,49ERS,COWBOYS,Raiders,BRONCOS,Eagles"],
      ["Mario Zedan","PACKERS,STEELERS,LIONS,Panthers,Texans,Chiefs,JAGUARS,Titans,BILLS,Seahawks,BUCCANEERS,49ERS,COWBOYS,Raiders,Rams,Eagles"],
      ["Stuardo Zimeri / Ian Zimeri","PACKERS,STEELERS,Jets,BROWNS,COLTS,Chiefs,JAGUARS,Titans,BILLS,Seahawks,Vikings,49ERS,Ravens,SAINTS,BRONCOS,Eagles"],
      ["Willy Zaid / Guille Zaid","Falcons,Bengals,LIONS,Panthers,COLTS,Chiefs,JAGUARS,Titans,BILLS,Seahawks,BUCCANEERS,49ERS,Ravens,SAINTS,BRONCOS,Eagles"]
    ],
    respaldo: {corte:"final", juegos:[[14, 35, "post"], [27, 30, "post"], [31, 24, "post"], [18, 21, "post"], [17, 19, "post"], [24, 10, "post"], [35, 6, "post"], [12, 7, "post"], [24, 16, "post"], [31, 33, "post"], [23, 16, "post"], [36, 30, "post"], [34, 31, "post"], [27, 35, "post"], [26, 30, "post"], [7, 27, "post"]]}
  },
  4: {
    juegos: [
      {fav:"Steelers", ln:2.5, dog:"BROWNS", hora:"2026-10-02T00:15:00Z"},
      {fav:"Colts", ln:3.5, dog:"COMMANDERS", hora:"2026-10-04T13:30:00Z"},
      {fav:"GIANTS", ln:1.5, dog:"Cardinals", hora:"2026-10-04T17:00:00Z"},
      {fav:"TEXANS", ln:2.5, dog:"Cowboys", hora:"2026-10-04T17:00:00Z"},
      {fav:"Packers", ln:2.5, dog:"BUCCANEERS", hora:"2026-10-04T17:00:00Z"},
      {fav:"BENGALS", ln:2.5, dog:"Jaguars", hora:"2026-10-04T17:00:00Z"},
      {fav:"Rams", ln:2.5, dog:"EAGLES", hora:"2026-10-04T17:00:00Z"},
      {fav:"BILLS", ln:7.5, dog:"Patriots", hora:"2026-10-04T17:00:00Z"},
      {fav:"BEARS", ln:3.5, dog:"Jets", hora:"2026-10-04T17:00:00Z"},
      {fav:"RAVENS", ln:11.5, dog:"Titans", hora:"2026-10-04T17:00:00Z"},
      {fav:"VIKINGS", ln:10.5, dog:"Dolphins", hora:"2026-10-04T20:05:00Z"},
      {fav:"49ERS", ln:3.5, dog:"Broncos", hora:"2026-10-04T20:25:00Z"},
      {fav:"Chiefs", ln:5.5, dog:"RAIDERS", hora:"2026-10-04T20:25:00Z"},
      {fav:"SEAHAWKS", ln:6.5, dog:"Chargers", hora:"2026-10-04T20:25:00Z"},
      {fav:"Lions", ln:2.5, dog:"PANTHERS", hora:"2026-10-05T00:20:00Z"},
      {fav:"SAINTS", ln:2.5, dog:"Falcons", hora:"2026-10-06T00:15:00Z"}
    ],
    participantes: [],
    respaldo: null
  }
  }
};
