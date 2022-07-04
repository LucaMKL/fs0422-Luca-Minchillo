var bloccoRosso = document.getElementById('blocco-rosso')

console.log(bloccoRosso)
console.log(bloccoRosso.id)
console.log(bloccoRosso.innerHTML) //innerHTML è una proprietà degli oggetti HTML, che comprende il contenuto dell'elemento preso in causa
bloccoRosso.style.backgroundColor = 'red'

var div = document.getElementsByTagName('div'); //array di elementi 
console.log(div)
console.log(div[1].innerHTML)
div[1].style.backgroundColor ='blue'
div[2].style.backgroundColor ='blue'
div[3].style.backgroundColor ='blue'

var blocchiGialli = document.getElementsByClassName('blocchi-gialli') //array
console.log(blocchiGialli)

var primoBlocco = document.getElementsByClassName('blocchi-gialli')[0] //1 solo elemento HTML

primoBlocco.style.backgroundColor = 'yellow';
blocchiGialli[1].style.backgroundColor ='yellow';
blocchiGialli[1].style.backgroundColor ='yellow';



//consigli

var bloccoRossoNew = document.querySelector('#blocco-rosso')
//accetta qualunque query di css, restituisce il primo elemento trovato

var primoBloccoNew = document.querySelector('.blocchi-gialli')//il primo elemento con la classe blocchi-gialli

var blocchiGialliNew = document.querySelectorAll('.blocchi-gialli')//array

var tutto =  document.querySelectorAll('#blocco-rosso, .blocchi-gialli')

onclick = function