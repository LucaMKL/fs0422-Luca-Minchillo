async function getUsers(){
    let link = 'users.json';
    try {
        let res = await res.json();
    } catch (error) {
        console.log(error);
    }
}
let users = await getUsers();

function creaTabella(){
    let div = utenti.createElement('div');
    let h2 = utenti.createElement('h2');
    let span = utenti.createElement('span');
    let p = utenti.createElement('p');
    let fine = utenti.createElement('div');

    div.h2.innerHtml = `${users.firstname} ${user.lastname}`;
    span.innerHtml = `${users.email}`;
    p.innerHtml = `${users.gender}`; 
}

let container = document.querySelector('container');
container.innerHTML = table;

renderUsers();