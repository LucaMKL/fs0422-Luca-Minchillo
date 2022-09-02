interface SmartPhone {
    carica: number
    costoChiamata: number
    ricarica(accredito: number): void
    chiamata(durata: number): void
}

class Sim implements SmartPhone {

    credito: number
    costoChiamata: number;

    constructor(cr: number, cC: number) {
        this.credito = cr
        this.costoChiamata = cC
    }
    

    ricarica(accredito: number): void {
        this.credito += accredito
    }

    chiamata(secDurata: number): void {
        //+1m paghi al minuto quindi in base alla durata dividi per 60 e sotto al min paghi 1min intero

        if(secDurata >= 60){
            var moltip = secDurata / 60
        }else{
            var moltip = 1
        }

        this.credito = this.credito - (moltip * this.costoChiamata)
    }

}



let newPhone = new Sim(15, 0.15)

myPhone.ricarica(20)
console.log(myPhone.credito)

myPhone.chiamata(320)
console.log(myPhone.credito)