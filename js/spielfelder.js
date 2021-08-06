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
            
            kollisionsarrray.push('wand');
            kollisionsarrray.push('fackel');
            aendereFeld(spielfeld, 19, 8, 'wand' ) 
           aendereFeld(spielfeld, 19, 7, 'wand' )
           aendereFeld(spielfeld, 18, 8, 'wand' )
           aendereFeld(spielfeld, 18, 7, 'wand' )
           aendereFeld(spielfeld, 17, 8, 'wand' )
           aendereFeld(spielfeld, 17, 7, 'wand' )
           aendereFeld(spielfeld, 16, 8, 'wand' )
           aendereFeld(spielfeld, 16, 7, 'wand' )
           aendereFeld(spielfeld, 16, 9, 'wand' )
           aendereFeld(spielfeld, 16, 10, 'wand' )
           aendereFeld(spielfeld, 16, 11, 'wand' )
           aendereFeld(spielfeld, 16, 12, 'wand' )
           aendereFeld(spielfeld, 16, 13, 'wand' )
           aendereFeld(spielfeld, 16, 14, 'wand' )
           aendereFeld(spielfeld, 16, 15, 'wand' )
           aendereFeld(spielfeld, 16, 16, 'wand' )
           aendereFeld(spielfeld, 16, 17, 'wand' )
           aendereFeld(spielfeld, 16, 18, 'wand' )
           aendereFeld(spielfeld, 16, 19, 'wand' )
           aendereFeld(spielfeld, 16, 20, 'wand' )
           aendereFeld(spielfeld, 16, 21, 'wand' )
           aendereFeld(spielfeld, 16, 22, 'wand' )
           aendereFeld(spielfeld, 16, 23, 'wand' )
           aendereFeld(spielfeld, 16, 24, 'wand' )
           aendereFeld(spielfeld, 16, 25, 'wand' )
           aendereFeld(spielfeld, 16, 26, 'fackel')
           aendereFeld(spielfeld, 16, 29, 'fackel')
           aendereFeld(spielfeld, 2, 2, 'fackel')
           aendereFeld(spielfeld, 2,29, 'fackel')
           aendereFeld(spielfeld, 19, 2, 'fackel')
           aendereFeld(spielfeld, 19, 29, 'fackel')
         


            break;
        case 5:

            break;
    }
    zeigeSpielfeld(spielfeld);
    return spielfeld;
}