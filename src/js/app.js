// console.log("Hola, desde JS");
// console.log('Hola, desde Js');

// /* Estructura de funciones */
// function saludar(){
//     console.log(`Hola, desde JS`);    
// }
// const SALUDO_ARROW = () => {
//     console.log('Hola, desde Js');
// }
// const SALUDO_ANONIMO = function(){
//     const nombre_persona = "Jhoe Doe"
//     console.log(`Hola, ${nombre_persona}`);
//     console.log('Hola, ', nombre_persona);
// }

// /* Ejecucion de las funciones */
// saludar();
// SALUDO_ARROW();
// SALUDO_ANONIMO();

/* function Saludar(nombreP){
    console.log(nombreP);
    console.log("Hola", nombreP)
    console.log("Hola", nombreP)
    console.log(`Hola ${nombreP}`)

} */

const BASE_PATH_POKEMON_API = "https://pokeapi.co/api/v2/pokemon";

const GET_POKEMONS = async(cantidad) => {
    /* console.log(`${BASE_PATH_POKEMON_API}?limit=${cantidad}`) */
    const response = await fetch(`${BASE_PATH_POKEMON_API}?limit=${cantidad}`);
    const pokemons = await response.json();

    /* console.log(pokemons); */
    /* Convertir texto plano... */

    /* Acceder a un elemento especifico del HTML */
    const container = document.getElementById("pokemons-cards"); /* Forma tradicional (No es la forma en que la que ahora se maneja) */


    const container2 = document.querySelector(".pokemons-cards");

    pokemons.results.forEach(async(pokemon) => {

        const detailResponse = await fetch(pokemon.url);
        const detail = await detailResponse.json();

        container2.innerHTML += `<div class="pokemon-card">
                                  <h3>${pokemon.name}</h3>
                                  <h5></h5>
                                  <img src="${detail.sprites.front_default}" alt="${pokemon.name}">
                                  <button class="btn">Ver mas</button>
                                </div>`;
    });

    /* en src es donde se mira donde 
    mirar como se obtiene la url de cada pokemons para hacer el fetch */

}