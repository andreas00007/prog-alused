/* Ülesanne */

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let infoks = ' Traditsiooniliselt näitab leedu naiste perekonnanimedes nime lõpp perekonnaseisu. Näiteks on Adamkienė abielus ja Adamkutė mitte. Alates 2003. aastast on lubatud ka lühem vorm, mis perekonnaseisu ei näita, nt Adamkė.'
console.log( infoks + ' ')
readline.question('Sisesta Leedu naise perekonnanimi: ', nimi => {

    let viimasedKaksTähte = nimi.slice(-2)
    let viimaneTäht = nimi.slice(-1)

        if (viimasedKaksTähte === "ne") {
            console.log('Abielus')
        } else if (viimasedKaksTähte === "te") {
            console.log('Vallaline') 
        } else if (viimaneTäht === "e") {
            console.log('Määramata')
        } else {
            console.log('Pole leedulanna perekonnanimi')    
        }
        
        readline.close();
});
