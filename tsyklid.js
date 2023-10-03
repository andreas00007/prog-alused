/*
Tsükleid kasutame siis kui meil on vaja midagi teha korduvalt
tsüklid = loops 

for on üldtsükkel - lahendab suurema osa probleeme, kui on täpselt teada mitu korda tööd teha

++ suurenda ühe võrra
Semikooloniga tuleb eraldada tsüklid erinevad käsud
Kõik moodli ülesandeid saab teha for tsükliga hetkel

do....while tee midagi nii kaua kuni tingimus kehtib. tsükkel läheb ühe korra käima ja alles siis katkestab
while kuiniks tingimus kehtib tee midagi eelkontrolltsükkel, esmalt kontrollib tingimuse kehtivust ja siis jookustab koodi

kasuta kindlasti for ja while 
for in - objektidega
for of - objektidega
forEach() - massiivide tarbeks
break - tsükli täielik peatamine
continue - tsüklis mingi sammu vahele jätmine


*/

/*
let sum = 0 
for (let number = 1; number < 20; number++){
	sum = sum + number
	console.log(sum);
}
*/

/*
let sum = 0
let number = 1
while (number <= 5){
	if (number == '3'){
		break
	}
	sum = sum + number
	console.log(sum)
	number++
}
*/
let sum = 0
let number = 1
while (number <= 5){
	if (number == '3'){
		continue
	}
	sum = sum + number
	console.log(sum)
	number++
}
