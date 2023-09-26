/* Yks ainepukt on 26 tundi
Kolme ainepunkti kursuse ajakulu on 3*26=78h
Kui see jaotada 10 n2dala peale on yhe n2dala eeldatav ajakulu 78 / 10 = 7,8 tundi. (Mis tuleks suuremaks ymardada! - sest muidu j22b meil 6ppetooks aega puudu)

*/

const readline = require('readline').createInterface({
		input: process.stdin,
		output: process.stdout,
});

readline.question('Sisesta ainepunktide arv: ', ainepunktideKogus => {
	let ajaKuluKokku = ainepunktideKogus * 26
	readline.question('Sisesta n2dalate arv: ', nadalateArv => {
		let ainepunktideKogus = parseInt(ainepunktideKogus)
		let nadalateArv = parseInt(nadalateArv)
		let 6piTunnidN2dalas = parseInt(ajaKuluKokku) / parseInt(nadalateArv)
			console.log('N2dalas pead 6ppeainele kulutama v2hemalt: ', 6piTunnidN2dalas);
			readline.close();
		})
});
