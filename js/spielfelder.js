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
        case 1:for(let i = 2; i <= 25; i++) {
            aendereFeld(spielfeld, 10, i, "wand");
			kollisionsarrray.push("wand");
		}
		
            break;
        case 2:
            
            break;
        case 3:

            break;
        case 4:for(let i = 2; i <= 27; i++) {
            aendereFeld(spielfeld, 10, i, "wand");
		}

            break;
        case 5:

            break;
    }
    zeigeSpielfeld(spielfeld);
    return spielfeld;
}