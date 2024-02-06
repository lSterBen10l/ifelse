//oppgave 1

var tall = prompt("Skriv inn et tall:");
if (tall > 0) {
  alert("Tallet er positivt.");
} else if (tall < 0) {
  alert("Tallet er negativt.");
} else {
  alert("Tallet er null.");
}

//oppgave 2

var tall = prompt("Skriv inn et tall:");
if (tall % 2 == 0) {
  alert("Tallet er partall.");
} else {
  alert("Tallet er oddetall.");
}

//oppgave 3

var karakter = prompt("Skriv inn karakteren:");
if (karakter >= 50) {
  alert("Bestått");
} else {
  alert("Ikke bestått");
}

//oppgave 4

var karakter = prompt("Skriv inn karakteren:");
if (karakter < 0 || karakter > 100) {
  alert("Ugyldig karakter");
} else if (karakter >= 50) {
  alert("Bestått");
} else {
  alert("Ikke bestått");
}

//oppgave 5

var dagNummer = prompt("Skriv inn dagsnummeret:");
if (dagNummer == 1) {
  alert("Mandag");
} else if (dagNummer == 2) {
  alert("Tirsdag");
} 
// resten av ukedagene...

//oppgave 6

var dagNummer = prompt("Skriv inn dagsnummeret:");
switch(dagNummer) {
  case "1":
    alert("Mandag");
    break;
  case "2":
    alert("Tirsdag");
    break;
  // Fortsett med resten av ukedagene
}

//oppgave 7

var a = prompt("Skriv inn første tall:");
var b = prompt("Skriv inn andre tall:");
var operasjon = prompt("Skriv inn regne metode (+, -, *, /):");
switch(operasjon) {
  case "+":
    alert(`${a} + ${b} = ${Number(a) + Number(b)}`);
    break;
  case "-":
    alert(`${a} - ${b} = ${a - b}`);
    break;
  case "*":
    alert(`${a} * ${b} = ${a * b}`);
    break;
  case "/":
    alert(`${a} / ${b} = ${a / b}`);
    break;
  default:
    alert("Ugyldig metode");
}

//oppgave 8

var a = prompt("Skriv inn første tall:");
var b = prompt("Skriv inn andre tall:");
if (a > b) {
  alert(`${a} er større enn ${b}`);
} else if (a < b) {
  alert(`${a} er mindre enn ${b}`);
} else {
  alert(`${a} er lik ${b}`);
}

//oppgave 9

var karakter1 = prompt("Skriv inn første karakter:");
var karakter2 = prompt("Skriv inn andre karakter:");
var gjennomsnitt = (Number(karakter1) + Number(karakter2)) / 2;
if (gjennomsnitt >= 50) {
  alert("Din karakter: Bestått");
} else {
  alert("Din karakter: Ikke bestått");
}

//oppgave 10

var tall = prompt("Skriv inn et tall:");
if (tall % 3 == 0) {
  alert("Tallet kan deles helt i 3.");
} else {
  alert("Tallet kan ikke deles helt i 3.");
}

//oppgave 11

var tall = prompt("Skriv inn et tall:");
if (tall % 5 == 0) {
  alert("Tallet kan deles helt i 5.");
} else {
  alert("Tallet kan ikke deles helt i 5.");
}

//oppgave 12

var tall = prompt("Skriv inn et tall:");
if (tall % 3 == 0 && tall % 5 == 0) {
  alert("Tallet kan deles helt i både 3 og 5.");
} else {
  alert("Tallet kan ikke deles helt i både 3 og 5.");
}

//oppgave 13

var tall = prompt("Skriv inn et tall:");
if (tall % 3 == 0 || tall % 5 == 0) {
  alert("Tallet kan deles helt i 3 eller 5.");
} else {
  alert("Tallet kan ikke deles helt i 3 eller 5.");
}

//oppgave 14

var tall1 = prompt("Skriv inn første tall:");
var tall2 = prompt("Skriv inn andre tall:");
var tall3 = prompt("Skriv inn tredje tall:");
var minste = Math.min(tall1, tall2, tall3);
alert("Det minste tallet er " + minste);

//oppgave 15

var bokstav = prompt("Skriv inn en bokstav:");
bokstav = bokstav.toLowerCase();
if (bokstav == 'a' || bokstav == 'e' || bokstav == 'i' || bokstav == 'o' || bokstav == 'u') {
  alert("Det er en vokal.");
} else {
  alert("Det er ikke en vokal.");
}

//oppgave 16
function printcolor() {
    var colorinput = document.getElementById('colorinput').value;
    var outputDiv = document.getElementById('output');

    outputDiv.style.color = colorinput

    outputDiv.innerHTML = "denne teksten er" + colorinput;
}