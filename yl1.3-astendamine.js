const readline = require('readline').createInterface({
		input: process.stdin,
		output: process.stdout,
});

readline.question('Sisestage astme alus: ', astmeAlus => {
	readline.question('Sisestage astendaja: ', astendaja => {
		astmeAlus = Number(Math.floor(astmeAlus))
		astendaja = Number(Math.floor(astendaja))

		// See on ainult muutujate tyybi kontrollimiseks //
		//console.log(typeof astmeAlus);
		//console.log(typeof astendaja);
		// Kasuta ka Math.pow(astmeAlus, astendaja)

		console.log(astmeAlus)
		console.log(astendaja)
		let = vastus = astmeAlus * astmeAlus * astendaja
		console.log('Vastus on: ' + vastus)
			readline.close();
		})
});
