function aussehenAendern() {
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

function setStartPosition() {
  let p = $('.tuer_unten').position();
  $('#Player')
      .css('top', p.top)
      .css('left', p.left);
  player = {reihe: 20, spalte: 15}
}

function checkNextMovement(richtung) {
  switch(richtung) {
    case 'hoch':
      // Check um ins nächste Level zu kommen
      if(spielfeld[getFeldNummer(player.reihe - 1, player.spalte)] === undefined)  {
        aktiveSpielfeld += 1;
        erzeugeSpielfeld(aktiveSpielfeld);
      }
      if(spielfeld[getFeldNummer(player.reihe - 1, player.spalte)].kollidiert)
      return false;
      break;
    case 'runter':
      if(spielfeld[getFeldNummer(player.reihe + 1, player.spalte)].kollidiert)
        return false;
      break;
    case 'links':
      if(spielfeld[getFeldNummer(player.reihe, player.spalte - 1)].kollidiert)
        return false;
      break;
    case 'rechts':
      if(spielfeld[getFeldNummer(player.reihe, player.spalte + 1)].kollidiert)
        return false;
      break;
  }
  return true;

}

function bewegeSpieler(event) {
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
}

function aendereAussehen() {
  $('.Charaktere').toggleClass('hide');
  $('#Player').on('click', event => {
    Aussehen = 0;
    aussehenAendern()
  });
  $('#Charakter2').on('click', event => {
    Aussehen = 1;
    aussehenAendern()
  });
  $('#Charakter3').on('click', event => {
    Aussehen = 2;
    aussehenAendern()
  });
  $('#Charakter4').on('click', event => {
    Aussehen = 3;
    aussehenAendern()
  });
  console.log(Aussehen);
}


