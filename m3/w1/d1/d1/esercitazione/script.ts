const G1 = document.querySelector('#g1') as HTMLInputElement;
const G2 = document.querySelector('#g2') as HTMLInputElement;
const BTN = document.querySelector('#btn') as HTMLElement;
const RAND = document.querySelector('#rand') as HTMLElement;
const WINNER = document.querySelector('#winner') as HTMLElement;;

function genNum(): number { return Math.floor(Math.random() * 100 + 1); }

function win(diffG1: number, diffG2: number): string {
    if (diffG1 < diffG2) {

        return diffG1 == 0 ? 'IL giocatore 1 ha vinto' :
            'Nessuno dei due ha indovinato ma il giocatore 1 si è avvicinato di più'

    } else if (diffG1 > diffG2) {

        return diffG2 == 0 ? 'Il giocatore 2 ha vinto' :
            'Nessuno dei due ha indovinato ma il giocatore 2 si è avvicinato di più'

    } else {
        return 'Parità'
    }
}

BTN.addEventListener('click', (): void => {

    let random: number = genNum()
    RAND.innerHTML = 'Il numero estratto è: ' + random;

    let giocatore1: number = parseInt(G1.value);
    let giocatore2: number = parseInt(G2.value)

    let diffG1: number = Math.abs(random - giocatore1);
    let diffG2: number = Math.abs(random - giocatore2);

    WINNER.innerHTML = (giocatore1 && giocatore2) ? win(diffG1, diffG2) : 'Valori inseriti errati'

})

