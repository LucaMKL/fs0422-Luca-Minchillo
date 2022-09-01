"use strict";
let prodotti = [
    {
        tipo: 'Maglietta',
        prezzo: 35,
        varianti: [
            {
                taglia: 'xs',
                colore: 'giallo',
                q: 3
            },
            {
                taglia: 'xs',
                colore: 'Rosse',
                q: 1
            },
            {
                taglia: 'm',
                colore: 'Giallo fosforescente',
                q: 100
            }
        ]
    },
    {
        tipo: 'Canottiera',
        prezzo: 25,
        varianti: [
            {
                taglia: 'xs',
                colore: 'giallo',
                q: 3
            },
            {
                taglia: 'xs',
                colore: 'Giallo fosforescente',
                q: 100
            }
        ]
    }
];
let taglie = prodotti.map(p => p.varianti);
console.log(taglie);
prodotti;
