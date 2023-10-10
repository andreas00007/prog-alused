const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('Kas soovite istekoha valida ("ise") või loosida ("loos")? ', istekohaValik => {
    if (istekohaValik == "ise") {
readline.question('Kas soovite istuda akna ääres ("aken") või mitte ("muu")? ', asukoht => {
        if (asukoht == "aken") {
            console.log('Valisite ise istekoha: Aknakoht')
        } else {
            console.log('Valisite ise istekoha: Vahekäigukoht')
        }
        readline.close();
    })
    } else {
    let istekoht = Math.ceil(Math.random() * 3 )
    if (istekoht < 1 / 3){
        console.log('Istekoht Loositi. Aknakoht')
    }  else {
        console.log('Istekoht loositi. Vahekäigukoht')
    }
    readline.close()
    }
});

