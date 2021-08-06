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
            
            break;
        case 2:

            break;
        case 3:
            aendereFeld(spielfeld, 19, 29, 'axt');
            aendereFeld(spielfeld, 19, 2, 'kiste');
            aendereFeld(spielfeld, 12, 15, 'bruecke');
            for(let i=1; i<31; i++){
            aendereFeld(spielfeld, 12, i, 'fluss');
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