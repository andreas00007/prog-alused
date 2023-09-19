// data types

// String tekst

let firstName = 'Andreas'
let lastname = 'Kirs'
console.log(firstName + ' ' + lastname) 

// v22rtuse tyybi tuvastamine
console.log(typeof firstName)

let goodMark = 5
console.log(typeof goodMark)

let percent = 50.3
console.log(typeof percent)

// BOOLEAN

let isToday = true
console.log(typeof isToday)

// CONVERTING DATA TYPES

// Number to String Conversion
console.log(typeof String(555))

// liidab aga vastus on string
console.log(String(5+5))

console.log(String(5.5) + String(5.5))

// boolean to String
console.log(typeof String(true))

// String to Number - nr kuvatakse outputis teist v2rvi
console.log(Number('666'))
console.log(Number('66,6'))

// parseInt t2isarvuni ei ymarda
console.log(parseInt(100.8))

// parseFloat convertimine koma arvuga
console.log(parseFloat('100.3'))