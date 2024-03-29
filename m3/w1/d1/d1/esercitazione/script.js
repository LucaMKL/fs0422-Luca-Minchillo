var G1 = document.querySelector('#g1');
var G2 = document.querySelector('#g2');
var BTN = document.querySelector('#btn');
var RAND = document.querySelector('#rand');
var WINNER = document.querySelector('#winner');
;
function genNum() { return Math.floor(Math.random() * 100 + 1); }
function win(diffG1, diffG2) {
    if (diffG1 < diffG2) {
        return diffG1 == 0 ? 'IL giocatore 1 ha vinto' :
            'Nessuno dei due ha indovinato ma il giocatore 1 si è avvicinato di più';
    }
    else if (diffG1 > diffG2) {
        return diffG2 == 0 ? 'Il giocatore 2 ha vinto' :
            'Nessuno dei due ha indovinato ma il giocatore 2 si è avvicinato di più';
    }
    else {
        return 'Parità';
    }
}
BTN.addEventListener('click', function () {
    var random = genNum();
    RAND.innerHTML = 'Il numero estratto è: ' + random;
    var giocatore1 = parseInt(G1.value);
    var giocatore2 = parseInt(G2.value);
    var diffG1 = Math.abs(random - giocatore1);
    var diffG2 = Math.abs(random - giocatore2);
    WINNER.innerHTML = (giocatore1 && giocatore2) ? win(diffG1, diffG2) : 'Valori inseriti errati';
});
