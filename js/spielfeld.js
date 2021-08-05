$(function() {
    let spielfeld = new Array();
    const rows = 20;
    const columns = 30;

    for(let i = 1; i <= rows; i++){
        for(let u = 1; u <= columns; u++){
            let feld;
            if((i == 1 && u == 15) || (i == 20 && u == 15)){
                feld = erzeugeFeld("Tuer", i, u);
            } else if(i == rows){
                feld = erzeugeFeld("Wand_Unten", i, u);
            } else if (i == 1) {
                feld = erzeugeFeld("Wand_Oben", i, u);
            } else if (u == columns) {
                feld = erzeugeFeld("Wand_Links", i, u);
            } else if (u == 1) {
                feld = erzeugeFeld("Wand_Rechts", i, u);
            } else{
                feld=erzeugeFeld("Boden", i, u);
            }
            spielfeld.push(feld);
        }
    }
    zeigeSpielfeld(spielfeld);
    });

function erzeugeFeld(gelaende, reihe, spalte) {
    return {
        gelaende: gelaende,
        reihe: reihe,
        spalte: spalte,
        besetzt: 0
    }
}

function zeigeSpielfeld (spielfeld) {
for(let e of spielfeld) {
 if(e.gelaende == 'Wand_Unten')	$('#spielfeld').append('<div class="wand_unten">');
 if(e.gelaende == 'Wand_Oben')	$('#spielfeld').append('<div class="wand_oben">');
 if(e.gelaende == 'Wand_Rechts')$('#spielfeld').append('<div class="wand_rechts">');
 if(e.gelaende == 'Wand_Links')	$('#spielfeld').append('<div class="wand_links">');
 if(e.gelaende == 'Boden')	    $('#spielfeld').append('<div class="boden">');
 if(e.gelaende == 'Tuer')	    $('#spielfeld').append('<div class="tuer">');
}
}
