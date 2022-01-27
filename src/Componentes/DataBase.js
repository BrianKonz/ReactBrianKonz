const ARTISTAS = [
    {
    id: 0,
    imagenArtista: '/images/HernanCattaneo.png',
    artista: 'Hernan Cattaneo',
    fecha: '10-02-2022',
    hora: '16.00 hs a 22.00 hs',
    lugar: 'Campo de Polo',
    precio: 5000, 
    stock: 10,        
    },

    {
    id: 1,
    imagenArtista:'/images/MaceoPlex.png',
    artista: 'Maceo Plex',
    fecha: '18-02-2022',
    hora: '22.00 hs a 06.00 hs',
    lugar: 'Mandarin Park',
    precio: 3500,
    stock: 35,
    },

    {
    id: 2,  
    imagenArtista: '/images/Ame.png',
    artista: 'Amelie Lens',
    fecha: '24-02-2022',
    hora: '23.00 hs a 07.00 hs',
    lugar: 'Crobar',
    precio: 4700,
    stock: 20,
    },

    {
    id: 3,
    imagenArtista: '/images/Peggy.png',
    artista: 'Peggy Gou',
    fecha: '28-02-2022',
    hora: '21.00 hs a 05.00 hs',
    lugar: 'Mandarin Park',
    precio: 3750,
    stock: 40,
    },
];

export function getArtists() {
    return new Promise ((resolve,reject) => {
        setTimeout (() => resolve(ARTISTAS),3000)
    });
}
