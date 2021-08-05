let Aussehen = 3;

function setPosition(player) {
  player
    .css('top', 500)
    .css('left', 250);
}

function Aussehenaendern() {
  $('.Charaktere').toggleClass('hide');
  switch (Aussehen) {
    case 0:
      $('#Player').css('background-image', 'url("./css/Frau.png")');
      console.log($('#Player').css('background-image'));
      break;
    case 1:
      $('#Player').css('background-image', 'url("./css/Mann.png")');
      console.log($('#Player').css('background-image'))
      break;
    case 2:
      $('#Player').css('background-image', 'url("./css/Prinz.png")');
      console.log($('#Player').css('background-image'))
      break;
    case 3:
      $('#Player').css('background-image', 'url("./css/Prinzessin.png")');
      console.log($('#Player').css('background-image'))
      break;
    default:
      console.log('Something wrong');
  }

}

$('#Start_Button').on('click', event => {
  /*Startet das Spiel*/
});
$(document).ready(e => {
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

  $(document).on('keydown', event => {
    let tmp;
    switch (event.code) {
      case "ArrowDown":
        tmp = $('#Player').css('top');
        $('#Player').css('top', parseInt(tmp) + 10);
        break;
      case "ArrowUp":
        tmp = $('#Player').css('top');
        $('#Player').css('top', parseInt(tmp) - 10);
        break;
      case "ArrowLeft":
        tmp = $('#Player').css('left');
        $('#Player').css('left', parseInt(tmp) - 10);
        break;
      case "ArrowRight":
        tmp = $('#Player').css('left');
        $('.Player').css('left', parseInt(tmp) + 10);
        break;
      case "KeyS":
        tmp = $('#Player').css('top');
        $('#Player').css('top', parseInt(tmp) + 10);
        break;
      case "KeyW":
        tmp = $('#Player').css('top');
        $('#Player').css('top', parseInt(tmp) - 10);
        break;
      case "KeyA":
        tmp = $('#Player').css('left');
        $('#Player').css('left', parseInt(tmp) - 10);
        break;
      case "KeyD":
        tmp = $('#Player').css('left');
        $('#Player').css('left', parseInt(tmp) + 10);
        break;
      default:
        console.log('wrong key');
        break;
    }
  });
})