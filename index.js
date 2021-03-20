const inicio = () => console.log("Inicio ejemplo funciones arrays");

const pruebaFindIndex = (letra, arr) => {
    console.log('INDEX:', arr.findIndex(x => x === letra)); // 1
}

const pruebaEvery = (arr) => {
    const todosMayorA = (currentValue) => currentValue % 2 === 0;

    console.log('EVERY (numeros pares):', arr.every(todosMayorA));
}

const pruebaSome = (numero, arr) => {
    const algunosMayorA = currentValue => currentValue % numero === 0;

    console.log('SOME (multiplos de 3):', arr.some(algunosMayorA));
}

const pruebaFilter = (letras, words) => {
    const result = words.filter(word => word.includes(letras));

    console.log('FILTER:', result);
}

const pruebaMap = (numbers) => {
    const absolutos = numbers.map(x => Math.abs(x));

    console.log('MAP (valores absolutos):', numbers, absolutos);
}

// Constantes simulación funciones arrays
const arr_index = ['el', 'tesoro', 'esta', 'aqui'];
const arr_every = [2, 30, 36, 24, 14, 18, 12, 8];
const arr_some = [3, 30, 41, 27, 10, 13, 19, 18];
const arr_filter = ['aqui no hay nada', 'aqui si hay una palabra', 'aqui tambien hay una', 'existe la palabra?', 'existe una aqui'];
const arr_map = [-1, -5, 10, -15, 20, -25];

inicio();
pruebaFindIndex('tesoro', arr_index);
pruebaEvery(arr_every);
pruebaSome(3, arr_some);
pruebaFilter('una', arr_filter);
pruebaMap(arr_map);