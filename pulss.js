/* Treeningu tüübid
1 - tervisetreening
2 - põhivastupidavuse treening
3 - intensiivne aeroobne treening)
*/


const readline = require('readline').createInterface({
		input: process.stdin,
		output: process.stdout,
});

readline.question('Sisestage enda vanus:', vanus =>{
	readline.question('Sisestage enda sugu (M, m või N, n)', sugu =>{
		readline.question('Sisestage treeningutüüp (1, 2, 3)', treeninguTyyp =>{
			let maxPulss
			if( sugu == 'm' || sugu == 'M'){
				maxPulss = 220 - vanus
			}
			if( sugu == 'n' || sugu == 'N'){
				maxPulss = 200 - 0.05 * age
			}
			let min
			let max
			if (treeninguTyyp == '1'){
				min = 0.5 * maxPulss
				max = 0.7 * maxPulss
			} else if (treeninguTyyp == '2') {
				min = 0.7 * maxPulss
				max = 0.8 * maxPulss
			} else if (treeninguTyyp == '3'){
				min = 0.8 * maxPulss 
				max = 0.87 * maxPulss
			}
console.log('Pulsisagedus peaks olema vahemikus ' + Math.round(min) + ' kuni ' + Math.round(max) + '.')

		})
	})
}) 