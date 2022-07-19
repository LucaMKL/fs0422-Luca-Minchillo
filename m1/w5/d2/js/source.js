//creare una funzione che dato un certo budget di partenza possa essere scalato progressivamente.

const BUDGET = 10000
let rand = (max=0) => Math.floor(Math.random()*max) + 1     //con funz freccia

function scale() {
    let spese = 0

    while (spese <= BUDGET) {
        spese += rand(BUDGET - spese);

        if (spese >= BUDGET / 2 && BUDGET - spese > BUDGET / 100 * 5) {
            console.log(BUDGET - spese)
            console.log('hai raggiunto metà del tuo budget');

        } else if (BUDGET - spese <= BUDGET / 100 * 5) {
            console.log(BUDGET - spese)
            return console.log('hai quasi esaurito il tuo budget');

        }
    }
}

scale()



/*function rand(max){
    max = max || 0  //coalescenza
    return Math.floor(Math.random()*max)
}*/

/*
1 = true
0 = false

!
x > r
1 = 0
0 = 1

&& and
 x y r
 0 0 0
 0 1 0
 1 0 0
 1 1 1

|| or
 x y r
 0 0 0
 0 1 1
 1 0 1 
 1 1 1

if ((x >= 0 && x <= 3) && (y => 0 && y <= 3)) 
  x y r
  2 2 1
  3 6 0
  4 4 0

if ((x >= 0 && x <= 3) || (y => 0 && y <= 3)) 
  x y r
  2 2 1
  3 6 1
  4 4 0

x=2 y=4

((x >= 0 && x <= 3) || (y => 0 && y <= 3)) = true || false > true

  if(x >= 0 && x <= 3) => (true && true) > true
        if(x >= 0) > true
        if(x <= 3) > true

  if(y => 0 && y <= 3) = (true && false) > false
        if(y => 0) > true
        if(y <= 3) > false
 */