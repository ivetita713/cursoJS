var age = parseInt(prompt("¿Cual es tu edad?")); //18
//Convirtiendo edad a segundos
var ageInSeconds = age*365*24*60*60;
console.log(ageInSeconds);

// mostrando edad en la web
document.write("Tu edad es " + age + " y en segundos sería " + ageInSeconds);

