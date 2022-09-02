interface Smartphone {
    carica: number                  //credito residuo
    numeroChiamate: number          //chiamate effettuate

    ricarica(accredito: number): void
    chiamata(durata: number): void
}    

class newChiamata {
    carica: number
    numeroChiamate: number
    credito!: number
    costoChiamata!: number

    constructor(credito: number, chiamate: number){
        this.carica = credito
        this.numeroChiamate = chiamate
    }
    chiamata(durata: number): void {
        if(durata >= 60){
            var moltip = durata / 60
        }else{
            var moltip = 1
        }

        this.credito = this.credito - (moltip * this.costoChiamata)
    }
    ricarica(accredito: number): void {
        this.credito += accredito
    }

    numero404(credito:number) {
        return this.carica
    }

    getNumeroChiamate(){
        return this.numeroChiamate
    }

}

class FirstUser implements Smartphone {
    carica: number
    numeroChiamate: number
    credito!: number
    costoChiamata!: number

    constructor(credito: number, chiamate: number){
        this.carica = credito
        this.numeroChiamate = chiamate
    }
    chiamata(durata: number): void {
        if(durata >= 60){
            var moltip = durata / 60
        }else{
            var moltip = 1
        }

        this.credito = this.credito - (moltip * this.costoChiamata)
    }
    ricarica(accredito: number): void {
        this.credito += accredito
    }

    numero404(credito:number) {
        return this.carica
    }

    getNumeroChiamate(){
        return this.numeroChiamate
    }
}

class SecondUser implements Smartphone {
    carica: number
    numeroChiamate: number
    credito!: number
    costoChiamata!: number

    constructor(credito: number, chiamate: number){
        this.carica = credito
        this.numeroChiamate = chiamate
    }
    chiamata(durata: number): void {
        if(durata >= 60){
            var moltip = durata / 60
        }else{
            var moltip = 1
        }

        this.credito = this.credito - (moltip * this.costoChiamata)
    }
    ricarica(accredito: number): void {
        this.credito += accredito
    }

    public numero404(credito:number) {
        return this.carica
    }

    getNumeroChiamate(){
        return this.numeroChiamate
    }
}

class ThirdUser implements Smartphone {
    carica: number
    numeroChiamate: number
    credito!: number
    costoChiamata!: number

    constructor(credito: number, chiamate: number){
        this.carica = credito
        this.numeroChiamate = chiamate
    }

    
    chiamata(durata: number): void {
        if(durata >= 60){
            var moltip = durata / 60
        }else{
            var moltip = 1
        }
        
        this.credito = this.credito - (moltip * this.costoChiamata)
    }
    ricarica(accredito: number): void {
        this.credito += accredito
    }

    public numero404(credito:number) {
        return this.carica
    }

    getNumeroChiamate(){
        return this.numeroChiamate
    }
}

var myPhone = new newChiamata(15, 0.20)

myPhone.ricarica(20)
console.log(myPhone.credito)

myPhone.chiamata(320)
console.log(myPhone.credito)