document.write('Hello World!'); //stringa
document.write('Hello World!');

document.getElementById('test').innerHTML = 'ciao'
document.getElementById('test').style.backgroundColor = 'red'

//console.log('% ciao', 'color: red')
console.log('posso scriverer quello che voglio')
console.log(3 + 4);

/**
 * Variabili
 */

var nomeVariabile = 'ciao';                     //l'uguale è l'operatore di assegnamento
                                                //var è una delle parole chiave
                                        
var a = 4; //valore numerico
var b = 5;

console.log(a, b);
console.log(a + b);

var c = 5;


/**
 * tipi di dato 
 *      
 * 
 * 
 *      number
 *      string ''
 *      boolean true/false
 *      array []
 *      object {}
 * 
 * 
 */

var x = 5; //valore numerico
var y = '5';//stringa               il + è un operatore associativo per i valori stringa e addizionale per i numerici

var nome = 'Mario';
var saluto = 'Ciao';

console.log(saluto + '' + nome + ',sono già le' + y);

var h = [1,2,3,4,40, 'ciao']; //variabile array
console.log (h[5])

var o = { //variabile oggetto 
    nome: "sto",
    cognome: "cazzo",
    eta: 69,
    sposato: false
}

console.log(o.nome, o.cognome);
console.table(o)


/*
conversioni e operazioni 

operatori
* = moltiplicazione
+ = somma
/ = divisione
- = sottrazione

*/
a = 2;
b = 2; 

console.log(a/b)

c = '2';
d = b + c;//string

console.log (d)  // la var numerica ha subito una conversione in stringa

console.log(b * c) //conversione di c in numero

e='2a';
console. log(a * e); //Not a Number(NaN)

//casting

console.log(typeof a, typeof c)

console.log(typeof String(a)) //conversione in stringa usando String()

/*
funzioni
*/

function saluta(){ //la funzione è stata definita, ma non verrà eseguita se non sarà invocata in maniera diretta
    console.log('ciao')
    console.log(e);
    var xy ='prova';

}

saluta();
saluta();
saluta();