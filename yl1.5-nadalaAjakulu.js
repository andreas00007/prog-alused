/* Yks ainepukt on 26 tundi
Kolme ainepunkti kursuse ajakulu on 3*26=78h
Kui see jaotada 10 n2dala peale on yhe n2dala eeldatav ajakulu 78 / 10 = 7,8 tundi. (Mis tuleks suuremaks ymardada! - sest muidu j22b meil 6ppetooks aega puudu)

*/
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('Sisestage ainepunktide arv: ', (ainepunktid) => {
    readline.question('Sisestage nädalate arv: ', (nadalad) => {
        let ajakulu = (ainepunktid * 26) / nadalad
        let ymardatudAjakulu = Math.round(ajakulu)
        console.log('Ainepunktide saavutamiseks eeldatav ajakulu on: ' + ymardatudAjakulu + ' tundi nädalas. ')
        readline.close();
    })
})
