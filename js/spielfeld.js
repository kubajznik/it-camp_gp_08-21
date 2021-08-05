let level1;
$(function () {
    level1 = erzeugeSpielfeld(20, 30);
    zeigeSpielfeld(level1);
});

function aendereFeld(spielfeld, reihe, spalte, gelaende) {
    spielfeld[(reihe - 1) * 30 + spalte - 1].gelaende = gelaende;
    //spielfeld.find(arr => {arr.reihe === reihe && arr.spalte === spalte});

    zeigeSpielfeld(spielfeld);
}

function erzeugeSpielfeld(reihe, spalte) {
    let spielfeld = [];

    for (let i = 1; i <= reihe; i++) {
        for (let u = 1; u <= spalte; u++) {
            let feld;
            if ((i === 1 && u === 15) || (i === 20 && u === 15)) {
                feld = erzeugeFeld("Tuer", i, u);
            } else if (i === reihe) {
                feld = erzeugeFeld("Wand_Unten", i, u);
            } else if (i === 1) {
                feld = erzeugeFeld("Wand_Oben", i, u);
            } else if (u === spalte) {
                feld = erzeugeFeld("Wand_Rechts", i, u);
            } else if (u === 1) {
                feld = erzeugeFeld("Wand_Links", i, u);
            } else {
                feld = erzeugeFeld("Boden", i, u);
            }
            spielfeld.push(feld);
        }
    }

    return spielfeld;
}

function kollidiert(gelaende) {
    let arr = ["Wand_Unten", "Wand_Oben", "Wand_Links", "Wand_Rechts"];
    return arr.includes(gelaende);
}

function erzeugeFeld(gelaende, reihe, spalte) {
    return {
        gelaende: gelaende,
        reihe: reihe,
        spalte: spalte,
        besetzt: 0,
        kollidiert: kollidiert(gelaende)
    }
}

function zeigeSpielfeld(spielfeld) {
    $('#spielfeld')
        .empty()
        .append('<div id="Player">');
    for (let e of spielfeld) {
        if (e.gelaende === 'Wand_Unten') $('#spielfeld').append('<div class="wand_unten">');
        if (e.gelaende === 'Wand_Oben') $('#spielfeld').append('<div class="wand_oben">');
        if (e.gelaende === 'Wand_Rechts') $('#spielfeld').append('<div class="wand_rechts">');
        if (e.gelaende === 'Wand_Links') $('#spielfeld').append('<div class="wand_links">');
        if (e.gelaende === 'Boden') $('#spielfeld').append('<div class="boden">');
        if (e.gelaende === 'Tuer') $('#spielfeld').append('<div class="tuer">');
    }
}
