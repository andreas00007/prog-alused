const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
// l2bi kasutajarea on input teksti formaadis, see on vaja teisendada numbriteks et saaks arvutada.
readline.question('Sisestage enda nimi: ', nimi => {
readline.question('Sisestage lubatud kiirus (km/h): ', lubatudKiirus => {
    readline.question('Sisestage tegelik kiirus (km/h): ', tegelikKiirus => {
        let yletatud = parseInt(tegelikKiirus) - parseInt(lubatudKiirus)
        let arvutatudTrahv = yletatud * 3.0
        let tegelikTrahv = Math.min(190, arvutatudTrahv)
        if ( tegelikKiirus <= lubatudKiirus ){
            console.log('Te ei ületanud kiirust, seega trahvi Teile ei määrata!')
        }
        else {
console.log(nimi + ', kiiruse yletamise eest on teie trahv ' + tegelikTrahv + 'eurot.')
        }

    
    // See on ainult muutujate tyybi kontrollimiseks //
        // NIMI V6RDUB V22RTUS ja ylevalt-alla - pole tarvis kasutada tingimuslauseid
    /* console.log(typeof nimi)
    console.log(typeof lubatudKiirus)
    console.log(typeof tegelikKiirus) */
        readline.close();

        })
    })
});