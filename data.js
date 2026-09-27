// Semana activa: líneas y picks tal como vienen en la hoja de la quiniela.
// fav = equipo que da los puntos, dog = equipo que los recibe; local en MAYÚSCULAS.
window.QUINIELA = {
  temporada: 2026,
  semana: 3,
  yo: "Stuardo Zimeri / Ian Zimeri",
  juegos: [
    {fav:"PACKERS",  ln:6.5, dog:"Falcons"},
    {fav:"Bengals",  ln:3.5, dog:"STEELERS"},
    {fav:"LIONS",    ln:6.5, dog:"Jets"},
    {fav:"Panthers", ln:2.5, dog:"BROWNS"},
    {fav:"Texans",   ln:2.5, dog:"COLTS"},
    {fav:"Chiefs",   ln:8.5, dog:"DOLPHINS"},
    {fav:"JAGUARS",  ln:2.5, dog:"Patriots"},
    {fav:"GIANTS",   ln:6.5, dog:"Titans"},
    {fav:"BILLS",    ln:7.5, dog:"Chargers"},
    {fav:"Seahawks", ln:5.5, dog:"COMMANDERS"},
    {fav:"Vikings",  ln:2.5, dog:"BUCCANEERS"},
    {fav:"49ERS",    ln:8.5, dog:"Cardinals"},
    {fav:"Ravens",   ln:2.5, dog:"COWBOYS"},
    {fav:"SAINTS",   ln:2.5, dog:"Raiders"},
    {fav:"Rams",     ln:2.5, dog:"BRONCOS"},
    {fav:"Eagles",   ln:3.5, dog:"BEARS"}
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
  // Respaldo si ESPN no responde: marcadores conocidos al publicar (fav, dog, estado)
  respaldo: {
    corte: "dom 27-sep 13:15",
    juegos: [
      [14,35,"post"],[27,30,"post"],[31,24,"post"],[18,21,"in"],[17,19,"post"],[24,10,"post"],
      [35,6,"post"],[12,7,"post"],[24,16,"post"],[31,33,"in"],[3,0,"in"],[0,0,"in"],
      null,null,null,null
    ]
  }
};
