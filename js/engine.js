let spielfeld;
let Aussehen = 3;
let player = {};

$(document).ready(e => {
    spielfeld = erzeugeSpielfeld(20, 30);
    zeigeSpielfeld(spielfeld);
    setStartPosition();

    $('#Start_Button').on('click', event => {
        /*Startet das Spiel*/
    });

    $('#Player').on('click', event => {
        $('.Charaktere').toggleClass('hide');
        $('#Player').on('click', envent => {
            Aussehen = 0;
            Aussehenaendern()
        });
        $('#Charakter2').on('click', envent => {
            Aussehen = 1;
            Aussehenaendern()
        });
        $('#Charakter3').on('click', envent => {
            Aussehen = 2;
            Aussehenaendern()
        });
        $('#Charakter4').on('click', envent => {
            Aussehen = 3;
            Aussehenaendern()
        });
        console.log(Aussehen);
    });

    // Bewegung des Spielers
    $(document).on('keydown', event => {
        let tmp;
        switch (event.code) {
            case "ArrowDown":
            case "KeyS":
                if(checkNextMovement('runter')) {
                    tmp = $('#Player').css('top');
                    $('#Player').css('top', parseInt(tmp) + 40);
                    player.reihe += 1;
                }
                break;
            case "ArrowUp":
            case "KeyW":
                if(checkNextMovement('hoch')) {
                    tmp = $('#Player').css('top');
                    $('#Player').css('top', parseInt(tmp) - 40);
                    player.reihe -= 1;
                }
                break;
            case "ArrowLeft":
            case "KeyA":
                if(checkNextMovement('links')) {
                    tmp = $('#Player').css('left');
                    $('#Player').css('left', parseInt(tmp) - 40);
                    player.spalte -= 1;
                }
                break;
            case "ArrowRight":
            case "KeyD":
                if(checkNextMovement('rechts')) {
                    tmp = $('#Player').css('left');
                    $('#Player').css('left', parseInt(tmp) + 40);
                    player.spalte += 1;
                }
                break;
            default:
                console.log('wrong key');
                break;
        }
        console.log(player);
    });
});