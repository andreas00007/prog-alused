/*
if - k2sk lauseehituseks t6ev22rtuse kontroll / kui t6si, siis teeme midagi ja nii on v6i ja nii ei ole
else - kui tulemus on v22r, siis teeme midagi muud, ehk kui tingimus ei kehti
else if - meil on t6ene ja v22r v22rtused vastanditena, else if kui on veel mingeid variante.
	See on seostatud tingimuslause ja on protsessorile kergem, sest kui lahendus leitakse varem, siis ei 
	pea tervet koodi l2bi protsessima, et tulemuseni saada.

switch - 


if(x < 10) {
	if(y > 1) {
		// ok
	}
}

if(x < 10 && y > 1){
	//ok
}

let voteable = (age < 18) ? "Too young":"Old enough";
let voteable
if (age < 18){
	voteable = "Too young"
	else(
		let voteable = "Old enough"
		)
}
*/

const readline = require('readline').createInterface({
		input: process.stdin,
		output: process.stdout,
});

readline.question('Sisesta 6hutemperatuur ', 6hutemperatuur => {
	
			console.log('Tulemus: ');
			readline.close();
});