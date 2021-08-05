

			function setPosition(player) {
				player
					.css('top', 500)
					.css('left', 250);
			}
			$('#Start_Button').on('click', event =>{
				/*Startet das Spiel*/
			});
			$('.Player').on('click', event =>{

			});
				$(document).on('keydown', event => {
					let tmp;
					switch (event.code) {
						case "ArrowDown":
							tmp = $('.Player').css('top');
							$('.Player').css('top', parseInt(tmp) + 10);
							break;
						case "ArrowUp":
							tmp = $('.Player').css('top');
							$('.Player').css('top', parseInt(tmp) - 10);
							break;
						case "ArrowLeft":
							tmp = $('.Player').css('left');
							$('.Player').css('left', parseInt(tmp) - 10);
							break;
						case "ArrowRight":
							tmp = $('.Player').css('left');
							$('.Player').css('left', parseInt(tmp) + 10);
							break;
							case "KeyS":
								tmp = $('.Player').css('top');
								$('.Player').css('top', parseInt(tmp) + 10);
								break;
							case "KeyW":
								tmp = $('.Player').css('top');
								$('.Player').css('top', parseInt(tmp) - 10);
								break;
							case "KeyA":
								tmp = $('.Player').css('left');
								$('.Player').css('left', parseInt(tmp) - 10);
								break;
							case "KeyD":
								tmp = $('.Player').css('left');
								$('.Player').css('left', parseInt(tmp) + 10);
								break;
						default:
							console.log('wrong key');
							break;
					}
				});
