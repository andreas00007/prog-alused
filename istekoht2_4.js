const readline = require('readline').createInterface({
		input: process.stdin,
		output: process.stdout,
});

readline.question('Kas soovite istekoha valida ("ise") või loosida ("loos")? ', istekohaValik => {
	readline.question('Kas soovite istuda akna ääres ("aken") või mitte ("muu")? ', asukoht => {
			let aken
			let vahekäik
			if (istekohaValik == "ise") {
					readline.question('vali istekoht ("aken") või ("muu")')
				if (asukoht == "aken"){
					console.log('Valisite ise istekoha: ' + asukoht)}
					else {
					asukoht = 'vahekäigukoht'
					console.log('Teie istekoht on ' + asukoht)
					}
				}
			if (istekohaValik == "loos"){
				console.log('loosiTest')
			}
			



			readline.close();
		})
		});