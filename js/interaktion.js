
function interaktionenLaden() {
		if (spielerAufFeld($(".Druckplatte"))) {
			spielfeld[14].kollidiert = false;
			tuerOeffnet();
		}
};