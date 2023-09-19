// variables
// Kasuta camelCase muutujate nimestiilis
// JavaScriptis esinevaid võtmesõnu ei tohi muutujate nimedeks kasutada
// Kasuta võimalikult kirjeldavat muutujate nime
// Muutuja nimi peab algama tähega, aga võib sisaldada numbreid
// JavaScriptis kasuta sõne ehk teksti väärtus ülakomadega. 
// let programmingLanguage - on muutuja defineerimine arvuti mälus ja hiljem kasuta palju tahad
// Ühesuguse nimega muutujat saab deklareerida üks kord, aga kasutada lõputult
// JavaScript lubab luua endas tühjad muutujad, mis reserveerib mälus koha ja saame talle hiljem väärtuse omistada
// Koodis on 2-tüüpi erroreid: syntaksi error ja andmetüübierror

//let

let programmingLanguage = 'JavaScript' // muutuja deklareerimine
console.log(programmingLanguage) // muutuja väljastamine nime järgi

programmingLanguage = 'PHP' // Muutujale uue väärtuse andmine assignment - save new value into the variable ehk väärtus omistatakse mälu kohale paremalt vasakule
// nimi võrdub väärtus on kõige alus, kus väärtus võib olla mis iganes
console.log(programmingLanguage)

let loppTulemus // Deklareeritud aga ilma väärtuseta st tühi muutuja - undefined
console.log(loppTulemus)


//const
//const objekti sisene muutumine on siiski võimalik massiivide, objektide, funktsioonidega ja regulaaravaldiste puhul. 
// objekt on mitme muutujaga muutuja :D
const group = 'VS23'
// const-ile uue  väärtuse andmine ei sobi group = 'PG23'
console.log(group)
