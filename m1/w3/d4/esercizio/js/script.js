//consegna 1 

let title = 'Corso javascript'
console.log(title);

let minuscolo = title.toLowerCase();
console.log(minuscolo);

let maiuscolo = title.toUpperCase();
console.log(maiuscolo);

//array di cose

let list = title.split(' ');
console.log(list);

let title2 = (list [0])+(list [2]);
console.log(title2);

//leggi il 3° elemento

let auto = ['Golf', 'Punto', 'Mito'];
console.log(auto[2]);

//consegna 4

let garage = 'A45 amg';
auto.push(garage);
console.log(auto);
console.log(auto.length);

//funzione con numeri tratti da un array

function sommaNumeri(){
    let numeri = [4, 5, 8];
    return numeri [0] + numeri [1] + numeri [2];
}
console.log(sommaNumeri())

//push, pop / shift,unshift

let aggiungi = auto.push ('AudiRs3');
console.log(aggiungi)
console.log(auto)

let elimina = auto.shift();
console.log(elimina);

let aggiungiPrima = auto.shift ();
console.log(aggiungiPrima);

let eliminaPrima = auto.unshift();
console.log(eliminaPrima);


//verifica
console.log(auto)
console.log(garage)