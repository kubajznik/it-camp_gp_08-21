function setPosition(player) {
	player
	.css('top', 500)
	.css('left', 250);
}
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
            $('#Player').css('left', parseInt(tmp) + 10);
			break;
		default:
			console.log('wrong key');
			break;
	}
});
