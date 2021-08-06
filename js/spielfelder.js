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
            aendereFeld(spielfeld, 6, 15, 'kompass_n');
			aendereFeld(spielfeld, 14, 15, 'kompass_s');
			aendereFeld(spielfeld, 10, 19, 'kompass_o');
			aendereFeld(spielfeld, 10, 11, 'kompass_w');
			
			aendereFeld(spielfeld, 5, 10, 'fackel1_aus');
			aendereFeld(spielfeld, 5, 20, 'fackel2_aus');
			aendereFeld(spielfeld, 15, 20, 'fackel3_aus');
			aendereFeld(spielfeld, 15, 10, 'fackel4_aus');

            break;
        case 3:
            aendereFeld(spielfeld, 19, 29, 'axt');
            aendereFeld(spielfeld, 19, 2, 'kiste');
            aendereFeld(spielfeld, 19, 2, 'druckPlatte');
            for(let i=1; i<31; i++){
            aendereFeld(spielfeld, 12, i, 'fluss');
            }
            break;
        case 4:for(let i = 2; i <= 25; i++) {
            aendereFeld(spielfeld, 10, i, "wand");
			kollisionsarrray.push("wand");
		}

            break;
        case 5:

            break;
    }
    zeigeSpielfeld(spielfeld);
    return spielfeld;
}
