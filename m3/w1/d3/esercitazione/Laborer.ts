class Laborer {
    codredd: number;
    redditoannuolordo: number
    tasseinps!: number;
    tasseirpef!: number;

    constructor(codredd: number, redditoannuolordo: number,) {
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
    }

    //abstract getUtileTasse(): number

    getTasseInps(): number {
        return 0;
    }

    getTasseIrpef(): number {

        let tax!: number;

        switch (true) {
            case (this.redditoannuolordo >= 0 && this.redditoannuolordo <= 15000):
                tax = 23
                break;
            case (this.redditoannuolordo >= 15001 && this.redditoannuolordo <= 28000):
                tax = 27
                break;
            case (this.redditoannuolordo >= 28001 && this.redditoannuolordo <= 55000):
                tax = 38
                break;
            case (this.redditoannuolordo >= 55001 && this.redditoannuolordo <= 75000):
                tax = 41
                break;
            case (this.redditoannuolordo > 75000):
                tax = 43
                break;
        }

        this.tasseirpef = (this.redditoannuolordo / 100) * tax;

        return this.tasseirpef;
    }

    getRedditoAnnuoNetto(): number {
        let redditoAnnuoNetto = this.redditoannuolordo - (this.tasseinps + this.tasseirpef);
        return redditoAnnuoNetto
    }

}

let x = new Laborer(2, 5000)

console.log(x.getTasseIrpef())

