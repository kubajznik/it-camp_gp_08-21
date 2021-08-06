function erzeugeSpielfeld(nummer) {
    spielfeld = erzeugeGrundSpielfeld();

    /*  So kann man neue Kollisionsblöcke hinzufügen
     *  kollisionsarrray.push('Neue_Wand');
     */

    /*  So kann man einzelne Felder nachträglich ändern
     *  aendereFeld(spielfeld, reihe, spalte, gelaende)
     *
     */

    switch(nummer) {
        case 1:
            aendereFeld(spielfeld, 11, 15, 'Druckplatte');
            break;
        case 2:

            break;
        case 3:
            aendereFeld(spielfeld, 19, 29, 'axt');
            aendereFeld(spielfeld, 19, 2, 'kiste');
            for(let i=2; i<30; i++){
            aendereFeld(spielfeld, 12, i, 'fluss');
            aendereFeld(spielfeld, 12, 15, 'bruecke');
            }
            break;
        case 4:

            break;
        case 5:

            break;
    }
    zeigeSpielfeld(spielfeld);
    return spielfeld;
}