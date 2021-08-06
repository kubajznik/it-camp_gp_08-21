
function interaktionenLaden() {
		if (spielerAufFeld($(".Druckplatte"))) {
			spielfeld[14].kollidiert = false;
			alert("----Eine Tür hat sich geöffnet.----")
		}
};