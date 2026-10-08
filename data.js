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
      {fav:"PACKERS", ln:6.5, dog:"Falcons", hora:"2026-09-25T00:15:00Z", rf:"1-1", rd:"0-2"},
      {fav:"Bengals", ln:3.5, dog:"STEELERS", hora:"2026-09-27T17:00:00Z", rf:"2-0", rd:"1-1"},
      {fav:"LIONS", ln:6.5, dog:"Jets", hora:"2026-09-27T17:00:00Z", rf:"1-1", rd:"1-1"},
      {fav:"Panthers", ln:2.5, dog:"BROWNS", hora:"2026-09-27T17:00:00Z", rf:"1-1", rd:"1-1"},
      {fav:"Texans", ln:2.5, dog:"COLTS", hora:"2026-09-27T17:00:00Z", rf:"0-2", rd:"0-2"},
      {fav:"Chiefs", ln:8.5, dog:"DOLPHINS", hora:"2026-09-27T17:00:00Z", rf:"2-0", rd:"0-2"},
      {fav:"JAGUARS", ln:2.5, dog:"Patriots", hora:"2026-09-27T17:00:00Z", rf:"1-1", rd:"1-1"},
      {fav:"GIANTS", ln:6.5, dog:"Titans", hora:"2026-09-27T17:00:00Z", rf:"1-1", rd:"0-2"},
      {fav:"BILLS", ln:7.5, dog:"Chargers", hora:"2026-09-27T17:00:00Z", rf:"2-0", rd:"0-2"},
      {fav:"Seahawks", ln:5.5, dog:"COMMANDERS", hora:"2026-09-27T17:00:00Z", rf:"2-0", rd:"0-2"},
      {fav:"Vikings", ln:2.5, dog:"BUCCANEERS", hora:"2026-09-27T20:05:00Z", rf:"2-0", rd:"0-2"},
      {fav:"49ERS", ln:8.5, dog:"Cardinals", hora:"2026-09-27T20:05:00Z", rf:"2-0", rd:"1-1"},
      {fav:"Ravens", ln:2.5, dog:"COWBOYS", hora:"2026-09-27T20:25:00Z", rf:"1-1", rd:"1-1"},
      {fav:"SAINTS", ln:2.5, dog:"Raiders", hora:"2026-09-27T20:25:00Z", rf:"1-1", rd:"2-0"},
      {fav:"Rams", ln:2.5, dog:"BRONCOS", hora:"2026-09-28T00:20:00Z", rf:"1-1", rd:"1-1"},
      {fav:"Eagles", ln:3.5, dog:"BEARS", hora:"2026-09-29T00:15:00Z", rf:"2-0", rd:"1-1"}
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
      {fav:"Steelers", ln:2.5, dog:"BROWNS", hora:"2026-10-02T00:15:00Z", rf:"2-1", rd:"2-1"},
      {fav:"Colts", ln:3.5, dog:"COMMANDERS", hora:"2026-10-04T13:30:00Z", rf:"1-2", rd:"1-2"},
      {fav:"GIANTS", ln:1.5, dog:"Cardinals", hora:"2026-10-04T17:00:00Z", rf:"2-1", rd:"1-2"},
      {fav:"TEXANS", ln:2.5, dog:"Cowboys", hora:"2026-10-04T17:00:00Z", rf:"0-3", rd:"1-2"},
      {fav:"Packers", ln:2.5, dog:"BUCCANEERS", hora:"2026-10-04T17:00:00Z", rf:"1-2", rd:"0-3"},
      {fav:"BENGALS", ln:2.5, dog:"Jaguars", hora:"2026-10-04T17:00:00Z", rf:"2-1", rd:"2-1"},
      {fav:"Rams", ln:2.5, dog:"EAGLES", hora:"2026-10-04T17:00:00Z", rf:"1-2", rd:"2-1"},
      {fav:"BILLS", ln:7.5, dog:"Patriots", hora:"2026-10-04T17:00:00Z", rf:"3-0", rd:"1-2"},
      {fav:"BEARS", ln:3.5, dog:"Jets", hora:"2026-10-04T17:00:00Z", rf:"2-1", rd:"1-2"},
      {fav:"RAVENS", ln:11.5, dog:"Titans", hora:"2026-10-04T17:00:00Z", rf:"2-1", rd:"0-3"},
      {fav:"VIKINGS", ln:10.5, dog:"Dolphins", hora:"2026-10-04T20:05:00Z", rf:"3-0", rd:"0-3"},
      {fav:"49ERS", ln:3.5, dog:"Broncos", hora:"2026-10-04T20:25:00Z", rf:"3-0", rd:"2-1"},
      {fav:"Chiefs", ln:5.5, dog:"RAIDERS", hora:"2026-10-04T20:25:00Z", rf:"3-0", rd:"3-0"},
      {fav:"SEAHAWKS", ln:6.5, dog:"Chargers", hora:"2026-10-04T20:25:00Z", rf:"2-1", rd:"0-3"},
      {fav:"Lions", ln:2.5, dog:"PANTHERS", hora:"2026-10-05T00:20:00Z", rf:"2-1", rd:"1-2"},
      {fav:"SAINTS", ln:2.5, dog:"Falcons", hora:"2026-10-06T00:15:00Z", rf:"1-2", rd:"1-2"}
    ],
    participantes: [
      ["Andrés De León", "Steelers,COMMANDERS,Cardinals,Cowboys,Packers,BENGALS,Rams,Patriots,Jets,Titans,VIKINGS,Broncos,RAIDERS,SEAHAWKS,Lions,SAINTS"],
      ["Arturo Zimeri / Xavier Zimeri", "BROWNS,COMMANDERS,Cardinals,TEXANS,BUCCANEERS,Jaguars,Rams,Patriots,BEARS,RAVENS,VIKINGS,Broncos,RAIDERS,Chargers,PANTHERS,SAINTS"],
      ["Carlos Noguera / Ignacio Noguera", "Steelers,COMMANDERS,Cardinals,TEXANS,Packers,BENGALS,Rams,Patriots,Jets,Titans,VIKINGS,Broncos,RAIDERS,SEAHAWKS,Lions,Falcons"],
      ["Edgar Bran / Andrés Bran", "Steelers,Colts,Cardinals,TEXANS,Packers,BENGALS,Rams,Patriots,BEARS,RAVENS,VIKINGS,49ERS,RAIDERS,SEAHAWKS,Lions,SAINTS"],
      ["Edgar Sarceño / Mario Zirion", "BROWNS,Colts,GIANTS,Cowboys,Packers,BENGALS,EAGLES,Patriots,BEARS,RAVENS,VIKINGS,49ERS,RAIDERS,SEAHAWKS,PANTHERS,SAINTS"],
      ["Federico Zimeri", "BROWNS,COMMANDERS,Cardinals,Cowboys,Packers,BENGALS,Rams,Patriots,Jets,Titans,Dolphins,49ERS,RAIDERS,Chargers,Lions,Falcons"],
      ["Gerardo Villa e hijos", "Steelers,Colts,GIANTS,TEXANS,BUCCANEERS,BENGALS,Rams,BILLS,BEARS,RAVENS,VIKINGS,49ERS,RAIDERS,SEAHAWKS,Lions,SAINTS"],
      ["German García / Carlos Abreu", "Steelers,COMMANDERS,Cardinals,TEXANS,BUCCANEERS,BENGALS,Rams,BILLS,BEARS,Titans,VIKINGS,49ERS,Chiefs,SEAHAWKS,Lions,SAINTS"],
      ["Gustavo Anzueto / Guille Anzueto", "Steelers,COMMANDERS,Cardinals,Cowboys,Packers,Jaguars,Rams,BILLS,BEARS,RAVENS,VIKINGS,49ERS,Chiefs,SEAHAWKS,Lions,SAINTS"],
      ["J.C. Sandoval / J.C. Sandoval Jr.", "Steelers,Colts,GIANTS,TEXANS,Packers,Jaguars,EAGLES,BILLS,Jets,Titans,VIKINGS,Broncos,RAIDERS,Chargers,Lions,Falcons"],
      ["Javier Arzú Pérez", "BROWNS,COMMANDERS,GIANTS,TEXANS,Packers,BENGALS,EAGLES,BILLS,BEARS,RAVENS,VIKINGS,Broncos,RAIDERS,Chargers,Lions,SAINTS"],
      ["Joe Pasarelli / Everst Figueroa", "Steelers,Colts,Cardinals,TEXANS,BUCCANEERS,BENGALS,EAGLES,BILLS,BEARS,RAVENS,VIKINGS,49ERS,Chiefs,SEAHAWKS,Lions,SAINTS"],
      ["José Gabriel Cummings", "Steelers,Colts,Cardinals,TEXANS,Packers,BENGALS,EAGLES,Patriots,Jets,Titans,Dolphins,49ERS,RAIDERS,Chargers,PANTHERS,SAINTS"],
      ["José Luis Contreras / Diego Contreras", "BROWNS,Colts,GIANTS,TEXANS,BUCCANEERS,Jaguars,EAGLES,BILLS,BEARS,Titans,VIKINGS,49ERS,RAIDERS,SEAHAWKS,PANTHERS,Falcons"],
      ["José Porres", "Steelers,COMMANDERS,Cardinals,Cowboys,Packers,Jaguars,Rams,BILLS,BEARS,RAVENS,Dolphins,Broncos,RAIDERS,SEAHAWKS,Lions,SAINTS"],
      ["Luis Grazioso / Luigi Grazioso", "Steelers,Colts,Cardinals,TEXANS,BUCCANEERS,Jaguars,EAGLES,BILLS,BEARS,RAVENS,VIKINGS,49ERS,RAIDERS,SEAHAWKS,Lions,SAINTS"],
      ["Luis Herrera / Orlando Diab", "Steelers,COMMANDERS,Cardinals,TEXANS,Packers,BENGALS,Rams,BILLS,Jets,Titans,Dolphins,Broncos,RAIDERS,SEAHAWKS,Lions,Falcons"],
      ["Mario Zedan", "Steelers,COMMANDERS,GIANTS,TEXANS,Packers,Jaguars,EAGLES,Patriots,BEARS,Titans,Dolphins,Broncos,Chiefs,Chargers,Lions,Falcons"],
      ["Stuardo Zimeri / Ian Zimeri", "BROWNS,COMMANDERS,Cardinals,TEXANS,Packers,BENGALS,EAGLES,Patriots,Jets,Titans,Dolphins,49ERS,RAIDERS,Chargers,Lions,SAINTS"],
      ["Willy Zaid / Guille Zaid", "BROWNS,COMMANDERS,Cardinals,TEXANS,Packers,BENGALS,Rams,BILLS,BEARS,Titans,VIKINGS,49ERS,RAIDERS,SEAHAWKS,Lions,Falcons"]
    ],
    respaldo: {corte:"final", juegos:[[24, 27, "post"], [30, 13, "post"], [36, 24, "post"], [30, 34, "post"], [17, 14, "post"], [17, 22, "post"], [24, 20, "post"], [26, 29, "post"], [23, 12, "post"], [24, 18, "post"], [15, 10, "post"], [24, 14, "post"], [30, 27, "post"], [30, 23, "post"], [26, 32, "post"], [24, 45, "post"]]}
  },
  5: {
    juegos: [
      {fav:"COWBOYS", ln:10.5, dog:"Buccaneers", hora:"2026-10-09T00:15:00Z", rf:"2-2", rd:"0-4"},
      {fav:"JAGUARS", ln:4.5, dog:"Eagles", hora:"2026-10-11T13:30:00Z", rf:"3-1", rd:"2-2"},
      {fav:"Bears", ln:2.5, dog:"PACKERS", hora:"2026-10-11T17:00:00Z", rf:"3-1", rd:"2-2"},
      {fav:"Bengals", ln:7.5, dog:"DOLPHINS", hora:"2026-10-11T17:00:00Z", rf:"2-2", rd:"0-4"},
      {fav:"JETS", ln:2.5, dog:"Browns", hora:"2026-10-11T17:00:00Z", rf:"1-3", rd:"3-1"},
      {fav:"Texans", ln:6.5, dog:"TITANS", hora:"2026-10-11T17:00:00Z", rf:"0-4", rd:"0-4"},
      {fav:"STEELERS", ln:2.5, dog:"Colts", hora:"2026-10-11T17:00:00Z", rf:"2-2", rd:"2-2"},
      {fav:"PATRIOTS", ln:3.5, dog:"Raiders", hora:"2026-10-11T17:00:00Z", rf:"2-2", rd:"3-1"},
      {fav:"Vikings", ln:1.5, dog:"SAINTS", hora:"2026-10-11T17:00:00Z", rf:"4-0", rd:"1-3"},
      {fav:"COMMANDERS", ln:3.5, dog:"Giants", hora:"2026-10-11T17:00:00Z", rf:"1-3", rd:"3-1"},
      {fav:"Broncos", ln:3.5, dog:"CHARGERS", hora:"2026-10-11T20:05:00Z", rf:"2-2", rd:"0-4"},
      {fav:"Lions", ln:5.5, dog:"CARDINALS", hora:"2026-10-11T20:25:00Z", rf:"2-2", rd:"1-3"},
      {fav:"SEAHAWKS", ln:3.5, dog:"49ers", hora:"2026-10-11T20:25:00Z", rf:"3-1", rd:"4-0"},
      {fav:"Ravens", ln:3.5, dog:"FALCONS", hora:"2026-10-12T00:20:00Z", rf:"3-1", rd:"2-2"},
      {fav:"RAMS", ln:2.5, dog:"Bills", hora:"2026-10-13T00:15:00Z", rf:"2-2", rd:"3-1"}
    ],
    participantes: [
      ["Andrés De León", "Buccaneers,JAGUARS,Bears,DOLPHINS,Browns,Texans,Colts,Raiders,Vikings,Giants,Broncos,CARDINALS,49ers,FALCONS,RAMS"],
      ["Arturo Zimeri / Xavier Zimeri", "Buccaneers,JAGUARS,Bears,DOLPHINS,Browns,TITANS,STEELERS,Raiders,Vikings,Giants,Broncos,Lions,49ers,FALCONS,RAMS"],
      ["Carlos Noguera / Ignacio Noguera", "Buccaneers,JAGUARS,PACKERS,DOLPHINS,Browns,Texans,STEELERS,Raiders,Vikings,COMMANDERS,CHARGERS,CARDINALS,49ers,FALCONS,RAMS"],
      ["Edgar Bran / Andrés Bran", "COWBOYS,JAGUARS,PACKERS,Bengals,Browns,Texans,STEELERS,Raiders,Vikings,Giants,CHARGERS,Lions,49ers,FALCONS,Bills"],
      ["Edgar Sarceño / Mario Zirion", "Buccaneers,Eagles,PACKERS,DOLPHINS,Browns,TITANS,STEELERS,Raiders,Vikings,Giants,Broncos,CARDINALS,49ers,Ravens,Bills"],
      ["Federico Zimeri", "Buccaneers,Eagles,PACKERS,DOLPHINS,Browns,TITANS,STEELERS,PATRIOTS,Vikings,Giants,Broncos,CARDINALS,49ers,FALCONS,Bills"],
      ["Gerardo Villa e hijos", "COWBOYS,JAGUARS,PACKERS,Bengals,Browns,TITANS,STEELERS,Raiders,Vikings,Giants,Broncos,Lions,49ers,FALCONS,RAMS"],
      ["German García / Carlos Abreu", "Buccaneers,Eagles,Bears,Bengals,Browns,Texans,Colts,PATRIOTS,Vikings,COMMANDERS,Broncos,Lions,49ers,Ravens,Bills"],
      ["Gustavo Anzueto / Guille Anzueto", "COWBOYS,JAGUARS,Bears,Bengals,Browns,Texans,STEELERS,PATRIOTS,Vikings,Giants,Broncos,Lions,49ers,FALCONS,RAMS"],
      ["J.C. Sandoval / J.C. Sandoval Jr.", "Buccaneers,JAGUARS,PACKERS,Bengals,JETS,Texans,Colts,Raiders,Vikings,COMMANDERS,Broncos,Lions,49ers,FALCONS,Bills"],
      ["Javier Arzú Pérez", "Buccaneers,Eagles,Bears,Bengals,Browns,Texans,STEELERS,PATRIOTS,Vikings,Giants,CHARGERS,CARDINALS,49ers,FALCONS,Bills"],
      ["Joe Pasarelli / Everst Figueroa", "COWBOYS,JAGUARS,PACKERS,DOLPHINS,Browns,TITANS,STEELERS,PATRIOTS,Vikings,COMMANDERS,CHARGERS,Lions,SEAHAWKS,FALCONS,RAMS"],
      ["José Gabriel Cummings", "Buccaneers,JAGUARS,PACKERS,Bengals,Browns,Texans,STEELERS,PATRIOTS,Vikings,COMMANDERS,CHARGERS,Lions,SEAHAWKS,FALCONS,RAMS"],
      ["José Luis Contreras / Diego Contreras", "Buccaneers,JAGUARS,PACKERS,Bengals,JETS,TITANS,STEELERS,PATRIOTS,SAINTS,COMMANDERS,Broncos,Lions,SEAHAWKS,FALCONS,Bills"],
      ["José Porres", "Buccaneers,JAGUARS,Bears,DOLPHINS,Browns,Texans,Colts,Raiders,SAINTS,Giants,CHARGERS,CARDINALS,SEAHAWKS,Ravens,RAMS"],
      ["Luis Grazioso / Luigi Grazioso", "Buccaneers,Eagles,Bears,DOLPHINS,Browns,Texans,Colts,Raiders,Vikings,Giants,Broncos,CARDINALS,49ers,FALCONS,Bills"],
      ["Luis Herrera / Orlando Diab", "Buccaneers,JAGUARS,PACKERS,DOLPHINS,Browns,TITANS,STEELERS,Raiders,Vikings,COMMANDERS,CHARGERS,Lions,49ers,FALCONS,RAMS"],
      ["Mario Zedan", "Buccaneers,Eagles,PACKERS,DOLPHINS,Browns,Texans,STEELERS,PATRIOTS,Vikings,COMMANDERS,Broncos,Lions,SEAHAWKS,Ravens,Bills"],
      ["Stuardo Zimeri / Ian Zimeri", "Buccaneers,JAGUARS,PACKERS,DOLPHINS,Browns,TITANS,STEELERS,PATRIOTS,Vikings,COMMANDERS,CHARGERS,Lions,49ers,FALCONS,Bills"],
      ["Willy Zaid / Guille Zaid", "Buccaneers,JAGUARS,PACKERS,DOLPHINS,Browns,Texans,STEELERS,PATRIOTS,SAINTS,Giants,CHARGERS,CARDINALS,SEAHAWKS,FALCONS,RAMS"]
    ],
    respaldo: null
  }
  }
};
