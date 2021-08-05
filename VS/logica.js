
window.onload = init

function init() {
    var button = document.getElementById("buttonToExit");
    button.onclick = handleButtonClick;
}
function handleButtonClick() {
    
    let senden=confirm('Willst du wirklich das Spielfeld verlassen und ein neues betreten')
    
    if (senden==true) {
        //In das src müsst ihr dann die html adresse von eurem nächsten spielfeld eitragen
        open(src='duhastgecklickt.html');
    } else {alert('Kein Problem ;)');
        
    } 
    }


