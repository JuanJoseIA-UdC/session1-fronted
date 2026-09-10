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

function Saludar(nombreP){
    console.log(nombreP);
    console.log("Hola", nombreP)
    console.log("Hola", nombreP)
    console.log(`Hola ${nombreP}`)

}

const BASE_PATH_POKEMON_API = 'https://pokeapi.co/api/v2/pokemon'

const GET_POKEMONS = async()=> {
    const response = await fetch(BASE_PATH_POKEMON_API);
    console.log(response)
}



