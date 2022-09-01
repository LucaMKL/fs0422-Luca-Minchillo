let lista:number[] = [1,2,3,4]

let [n1,n2,n3,n4] = lista

console.log(n4)

let [num1,,,num4] = lista
let [nm1,...n] = lista

//destrutturazione oggetti
let res = {
    gusto: "margherita",
    tipo: "napoletana",
    prezzo: "5"
}

let {gusto, tipo, prezzo} = res