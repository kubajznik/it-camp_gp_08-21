function aendereFeld(spielfeld, reihe, spalte, gelaende) {
    spielfeld[getFeldNummer(reihe, spalte)].gelaende = gelaende;
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
}
