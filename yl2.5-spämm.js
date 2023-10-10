
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('Sisestage kirja suurus megabaitides: ', (kiriSuurusMB) => {
    readline.question('Sisestage kirja teema pealkiri: ', (teemaPealkiri) => {
        readline.question('Kas kirjaga on kaasas fail? (jah/ei): ', (onFail) => {
            kiriSuurusMB = parseFloat(kiriSuurusMB);
            const kirjalEiOleTeemaPealkirja = !teemaPealkiri.trim();
            const kirjagaOnKaasasFail = onFail.toLowerCase() === 'jah';

            if (kirjalEiOleTeemaPealkirja || (kirjagaOnKaasasFail && kiriSuurusMB > 1)) {
                console.log('Kiri on spämm');
            } else {
                console.log('Kiri ei ole spämm');
            }

            readline.close();
        });
    });
});
