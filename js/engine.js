let spielfeld;
let Aussehen = 3;
let player = {};
let kollisionsarrray = ["wand_unten", "wand_oben", "wand_links", "wand_rechts", "tuer_oben"];
let aktiveSpielfeld;

// Um die Tür aus einem Level heraus zu erlauben, muss man spielfeld[14].kollidiert = false setzen.


$(document).ready(e => {
    aktivesSpielfeld = 1;
    spielfeld = erzeugeSpielfeld(aktivesSpielfeld);

    $('#Start_Button').on('click', event => {
        /*Startet das Spiel*/
    });

    $('#Player').on('click', event => {
        aendereAussehen();
    });

    // Bewegung des Spielers
    $(document).on('keydown', event => {
        bewegeSpieler(event);
    });
});