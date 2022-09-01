var Laborer = /** @class */ (function () {
    function Laborer(codredd, redditoannuolordo) {
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
    }
    //abstract getUtileTasse(): number
    Laborer.prototype.getTasseInps = function () {
        return 0;
    };
    Laborer.prototype.getTasseIrpef = function () {
        var tax;
        switch (true) {
            case (this.redditoannuolordo >= 0 && this.redditoannuolordo <= 15000):
                tax = 23;
                break;
            case (this.redditoannuolordo >= 15001 && this.redditoannuolordo <= 28000):
                tax = 27;
                break;
            case (this.redditoannuolordo >= 28001 && this.redditoannuolordo <= 55000):
                tax = 38;
                break;
            case (this.redditoannuolordo >= 55001 && this.redditoannuolordo <= 75000):
                tax = 41;
                break;
            case (this.redditoannuolordo > 75000):
                tax = 43;
                break;
        }
        this.tasseirpef = (this.redditoannuolordo / 100) * tax;
        return this.tasseirpef;
    };
    Laborer.prototype.getRedditoAnnuoNetto = function () {
        var redditoAnnuoNetto = this.redditoannuolordo - (this.tasseinps + this.tasseirpef);
        return this.getRedditoAnnuoNetto;
    };
    return Laborer;
}());
var x = new Laborer(2, 5000);
console.log(x.getTasseIrpef());
