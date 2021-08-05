$(function() {

  let spielfeld = new Array();
  const rows = 20;
  const columns = 30;

for(let i = 1; i<=rows; i++){
 for(let u = 1; u<=columns; u++){
 let feld;
 if((i==1 && u==15)||(i==20 && u==15)){
   feld=erzeugeFeld("Tuer", i, u);
 }
 else if(i==rows || u==1 || i==1|| u==columns){
   feld = erzeugeFeld("Wand", i, u);
 }
 else{
   feld=erzeugeFeld("Boden", i, u);
 }

 spielfeld.push(feld);
 }
}

zeigeSpielfeld(spielfeld);
});

function erzeugeFeld(gelaende, i, u) {
return {
 gelaende: gelaende,
 reihe: i,
 spalte: u,
 besetzt: 0
}
}

function zeigeSpielfeld (spielfeld) {
for(let e of spielfeld) {
 if(e.gelaende == 'Wand')	$('#spielfeld').append('<div class="wand">');
 if(e.gelaende == 'Boden')	$('#spielfeld').append('<div class="boden">');
 if(e.gelaende == 'Tuer')	$('#spielfeld').append('<div class="tuer">');
}
}
