
let nome2 = 'Ignazio';
console.log(nome2);
var caratteristiche = 'Frontista';
console.log(caratteristiche);
const detto = 'Il Surname';
console.log(detto);

console.log(nome2);
caratteristiche = 'Amico di Aldo Baglio';
console.log(caratteristiche);

let Aldo = "Perché sei il migliore ";
let Giovanni = "Allora ripeti sei venuto da me per..";
console.log('il passaggio di mano');

console.log(Giovanni + Aldo + ' Sai come mi chiamano? ' + ' Lo so, ' + nome2 + ' lo sanno tutti.. ' + ' Ma non Ignazio, intendo ' + detto + '...Non sapevo, ma fa paura.. I bambini non ci dormono.. Guarda che se non dormi chiamo ' + nome2  +  detto);

function myFunction() {
    //prendi il valore del campo di input con id "num"
    let x = document.getElementById("num").value;
    //se x non è un numero oppure minore di 1 o maggiore di 10 allora l'input non sarà valida
    let text;
    if (isNaN(x) || x < 1 || x > 10) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
}

window.alert('Dati, numeri ed uno sketch');

var a = 24;
var b = 49;
let c = a + b;
console.log(c);

let d = 56;
let e = 44;
console.log(a + e);
console.log(c + a - 4 * 6 / a);

var utente = {
    nome: 'Matteo',
    cognome: 'Verdi',
    età: '27 anni',
    città: 'Treviso',
    cap: 31022,
    sposato: true,
    automunito: false,
}

console.table(utente);

var nome = "Mario";
{
    var nome = 'Carla';
}
console.log(nome);

var nome = 'Mario';
{
    let nome = 'Carla';   //tale opereazione farà venire fuori l'output della prima variabile
}
console.log(nome);


var nome = 'Mario';
{
    let nome = 'Carla';
    nome = 'Sergio';        //posso riassegnarla 
    console.log(nome);
}

const numb = 86;
numb = 23;      //se cerco di riassegnare un valore mi indica un errore
console.log(numb)

/*
const number;  -cosi' non è consentito dalla console
number = 34;   -assegnare una variabile costante può essere utile a mantenere un valore fisso per una qualche 
                operazione matematica basandosi su regole per l'appunto matematiche
                oppure date, es. jhonny ha 'anni' quando const è impostato sul 2021

*/