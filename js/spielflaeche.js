function aendereFeld(spielfeld, reihe, spalte, gelaende) {
    spielfeld[getFeldNummer(reihe, spalte)] = erzeugeFeld(gelaende, reihe, spalte);
    zeigeSpielfeld(spielfeld);
}

function getFeldNummer(reihe, spalte) {
    return (reihe - 1) * 30 + spalte - 1;
}

function kollidiert(gelaende) {
    return kollisionsarrray.includes(gelaende);
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
        $('#spielfeld').append('<div class="'+e.gelaende+'">');
    }
    setStartPosition();
}

function erzeugeGrundSpielfeld() {
    let spielfeld = [];
    const reihe = 20;
    const spalte = 30;
    for (let i = 1; i <= reihe; i++) {
        for (let u = 1; u <= spalte; u++) {
            let feld;
            if (i == 1 && u == 1) {
                feld = erzeugeFeld("wand_links", i, u);
            } else if(i == 1 && u == spalte) {
                feld = erzeugeFeld("wand_rechts", u);
            } else if(i == reihe && u == spalte) {
                feld = erzeugeFeld("wand_unten_rechts", i, u);
            } else if(i == reihe && u == 1) {
                feld = erzeugeFeld("wand_unten_links", i, u);
            } else if (i === 1 && u === 15) {
                feld = erzeugeFeld("tuer_oben", i, u);
            } else if (i === 20 && u === 15) {
                feld = erzeugeFeld("tuer_unten", i, u);
            } else if (i === reihe) {
                feld = erzeugeFeld("wand_unten", i, u);
            } else if (i === 1) {
                feld = erzeugeFeld("wand_oben", i, u);
            } else if (u === spalte) {
                feld = erzeugeFeld("wand_rechts", i, u);
            } else if (u === 1) {
                feld = erzeugeFeld("wand_links", i, u);
            } else {
                feld = erzeugeFeld("boden", i, u);
            }
            spielfeld.push(feld);
        }
    }
    return spielfeld;
}

function tuerOeffnet() {
    $(".tuer_oben").css("background-image", "url('./pics/Wand/TuerOffen.png')");
}