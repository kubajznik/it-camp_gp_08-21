const reihe = 20;
const spalte = 30;

function erzeugeSpielfeldEins() {
    let spielfeld = [];

    for (let i = 1; i <= reihe; i++) {
        for (let u = 1; u <= spalte; u++) {
            let feld;
            if (i === 1 && u === 15) {
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

    /*  So kann man neue Kollisionsblöcke hinzufügen
     *  kollisionsarrray.push('Neue_Wand');
     */

    /*  So kann man einzelne Felder nachträglich ändern
     *  aendereFeld(spielfeld, reihe, spalte, gelaende)
     *
     */


    return spielfeld;
}