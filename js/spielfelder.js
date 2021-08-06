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

            break;
        case 4: 
		aendereFeld(spielfeld,5,2,"wand")
		aendereFeld(spielfeld,5,3,"wand")
		aendereFeld(spielfeld,5,4,"wand")
		aendereFeld(spielfeld,5,5,"wand")
		aendereFeld(spielfeld,5,6,"wand")
		aendereFeld(spielfeld,5,7,"wand")
		aendereFeld(spielfeld,5,8,"wand")
		aendereFeld(spielfeld,5,9,"wand")
		aendereFeld(spielfeld,5,10,"wand")
		aendereFeld(spielfeld,5,11,"wand")
		aendereFeld(spielfeld,5,12,"wand")
		aendereFeld(spielfeld,4,12,"wand")
		aendereFeld(spielfeld,3,12,"wand")
		aendereFeld(spielfeld,3,13,"wand")
		aendereFeld(spielfeld,3,14,"wand")
		aendereFeld(spielfeld,3,15,"wand")
		aendereFeld(spielfeld,6,16,"wand")
		aendereFeld(spielfeld,6,17,"wand")
		aendereFeld(spielfeld,6,18,"wand")
		aendereFeld(spielfeld,6,19,"wand")
            break;
        case 5:

            break;
    }
    zeigeSpielfeld(spielfeld);
    return spielfeld;
}