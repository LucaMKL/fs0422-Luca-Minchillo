let memory = document.querySelector('#memory');
let start = document.querySelector('#start')
let arrayComparison = [];

start.addEventListener('click',initMemory)

function createCard(icona){
    //<div class="icon"><div>🐱</div></div>
    let card = document.createElement('div');//<div></div>
    card.classList.add('icon');//<div class="icon"></div>

    let content = document.createElement('div');//<div></div>
    content.innerHTML = icona//<div>🐱</div>

    card.addEventListener('click',checkCard)

    card.append(content)
    memory.append(card)
}
function checkCard(){
    
    arrayComparison.push(this)//this è la card su cui si è cliccato
    this.classList.add('show')

    console.log(arrayComparison)

    if(arrayComparison.length == 2){

        if(arrayComparison[0].innerHTML == arrayComparison[1].innerHTML){
            
        }else{   
            console.log(' sono diversi')
            //arrayComparison[0].classList.remove('show')
            //arrayComparison[1].classList.remove('show')
            arrayComparison = []
        };

    }else{
        console.log('sono troppi o troppo pochi')
    }


}


function shuffle(a){
    let i = 0;
    let newA = []
    while (i < a.length){
        let rand = Math.floor(Math.random() * a.length);//affidiamo a rand un numero randomico che va da 0 alla lunghezza di a
        newA.push(a[rand])//utilizzando il numero randomico, pesco un valore dall'array a, e lo inserisco nell'array newA
        a.splice(rand,1)//elimino l'elemento pescato
    }
    return newA;
}

function initMemory(){

    let arrayAnimali = ['🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐰', '🐯', '🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐯', '🐰'];

    memory.innerHTML = ''//svuoto l'html eliminando tutte le card

    let shuffleArray = shuffle(arrayAnimali)//mescolo l'array generandone uno nuovo

    for(let icon of shuffleArray){
        createCard(icon)
    }

}
initMemory();

