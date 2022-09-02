"use strict";
class Sim {
    constructor(cr, cC) {
        this.credito = cr;
        this.costoChiamata = cC;
    }
    ricarica(accredito) {
        this.credito += accredito;
    }
    chiamata(secDurata) {
        //+1m paghi al minuto quindi in base alla durata dividi per 60 e sotto al min paghi 1min intero
        if (secDurata >= 60) {
            var moltip = secDurata / 60;
        }
        else {
            var moltip = 1;
        }
        this.credito = this.credito - (moltip * this.costoChiamata);
    }
}
let newPhone = new Sim(15, 0.15);
myPhone.ricarica(20);
console.log(myPhone.credito);
myPhone.chiamata(320);
console.log(myPhone.credito);
