const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('Mis on õhutemperatuur?', sisestatudTemp => {
if (sisestatudTemp >= 4.0) {
    console.log('Ei ole jäätumise ohtu')

} else { (sisestatudTemp < 4.0) 
console.log('On jäätumise oht!!!')
}
readline.close();
});