"use strict";
class newChiamata {
    constructor(credito, chiamate) {
        this.carica = credito;
        this.numeroChiamate = chiamate;
    }
    chiamata(durata) {
        if (durata >= 60) {
            var moltip = durata / 60;
        }
        else {
            var moltip = 1;
        }
        this.credito = this.credito - (moltip * this.costoChiamata);
    }
    ricarica(accredito) {
        this.credito += accredito;
    }
    numero404(credito) {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
}
class FirstUser {
    constructor(credito, chiamate) {
        this.carica = credito;
        this.numeroChiamate = chiamate;
    }
    chiamata(durata) {
        if (durata >= 60) {
            var moltip = durata / 60;
        }
        else {
            var moltip = 1;
        }
        this.credito = this.credito - (moltip * this.costoChiamata);
    }
    ricarica(accredito) {
        this.credito += accredito;
    }
    numero404(credito) {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
}
class SecondUser {
    constructor(credito, chiamate) {
        this.carica = credito;
        this.numeroChiamate = chiamate;
    }
    chiamata(durata) {
        if (durata >= 60) {
            var moltip = durata / 60;
        }
        else {
            var moltip = 1;
        }
        this.credito = this.credito - (moltip * this.costoChiamata);
    }
    ricarica(accredito) {
        this.credito += accredito;
    }
    numero404(credito) {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
}
class ThirdUser {
    constructor(credito, chiamate) {
        this.carica = credito;
        this.numeroChiamate = chiamate;
    }
    chiamata(durata) {
        if (durata >= 60) {
            var moltip = durata / 60;
        }
        else {
            var moltip = 1;
        }
        this.credito = this.credito - (moltip * this.costoChiamata);
    }
    ricarica(accredito) {
        this.credito += accredito;
    }
    numero404(credito) {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
}
var myPhone = new newChiamata(15, 0.15);
myPhone.ricarica(20);
console.log(myPhone.credito);
myPhone.chiamata(320);
console.log(myPhone.credito);
