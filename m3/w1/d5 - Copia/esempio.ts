interface IEsempio {
    credito: number
    costoChiamata: number
    ricarica(accredito: number): void
    chiamata(durata: number): void

}

class Timer {
    recordingTimer: any = '00:00:00';
    timer: boolean = true;

    recording() {
        if (this.timer) {
            let seconds = 0;
            let minutes = 0;
            let hours = 0;

            seconds += 1;

            if (seconds >= 60) {
                seconds = 0;
                minutes += 1

                if (minutes >= 60) {
                    hours += 1
                    minutes = 0;
                }

                this.recordingTimer = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
                console.log(this.recordingTimer)
            }
        }
    }

    repeat() {
        setInterval(() => this.recording(), 1000);
    }
}
class Sim implements IEsempio {

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

        if (secDurata >= 60) {
            var moltip = secDurata / 60
        } else {
            var moltip = 1
        }

        this.credito = this.credito - (moltip * this.costoChiamata)
    }

}



let myPhone = new Sim(15, 0.15)

myPhone.ricarica(20)
console.log(myPhone.credito)

myPhone.chiamata(320)
console.log(myPhone.credito)


function repeat() {
    throw new Error("Function not implemented.");
}
/*
recordingTimer: any = '00:00:00';
timer: boolean = true;
recording(){
  ////// please type recording meeting functionality here
  if (this.timer) {
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    seconds += 1;

    if (seconds >= 60) {
      seconds = 0;
      minutes += 1

      if (minutes >= 60) {
        minutes = 0;
        hours += 1
      }
    }

    /// update recording time
    this.recordingTimer = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    console.log(this.recordingTimer)

  }


}

repeat() {
  setInterval(() => this.recording(), 1000);
}
*/
