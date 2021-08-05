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


