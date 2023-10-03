const readline = require('readline').createInterface({
		input: process.stdin,
		output: process.stdout,
});

readline.question('Kas soovite istekoha valida ("ise") või loosida ("loos")? ', istekohaValik => {
	readline.question('Kas soovite istuda akna ääres ("aken") või mitte ("muu")? ', asukoht => {
			
			if (istekohaValik == "ise") {
					readline.question('vali istekoht')
			if (istekohaValik == "muu"){
				console.log('test')
			}	
			



			readline.close();
		}
		})
});