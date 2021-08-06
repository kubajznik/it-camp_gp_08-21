Code = [1, 4, 2, 3];
Eingabe = [];

function interaktionenLaden() {
		if (Eingabe.length <= 5){
			Eingabe.shift();
			Eingabe.shift();
			Eingabe.shift();
			Eingabe.shift();
		} 
        else if (spielerAufFeld($(".Fackel1_aus"))) {
			Eingabe.push(1);
        }
		else if (spielerAufFeld($(".Fackel2_aus"))) {
			Eingabe.push(2);
        }
		else if (spielerAufFeld($(".Fackel4_aus"))) {
			Eingabe.push(3);
        }
		else if (spielerAufFeld($(".Fackel3_aus"))) {
			Eingabe.push(4);
        }
		if (Code == Eingabe){
			tuerOeffnet();
		}
};
