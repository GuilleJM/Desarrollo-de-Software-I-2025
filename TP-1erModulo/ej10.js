/*10 Resumen de cantidad de likes:

Desarrollar una función que, dada una cantidad numérica de likes, devuelva un texto informativo
de la cantidad de likes en formato de “K” para miles y “M” para millones.
● Ejemplo: Si la entrada fuera 1400, la salida debería ser “1.4K”; o si la entrada fuera “34
567” la salida debería ser “34.5K”.*/

const likes1 = 34;
const likes2 = 1400;
const likes3 = 34567;
const likes4 = 1432000;

function resumenLikes(likes) {
    let resumen = "";

    if (likes >= 1000 && likes < 1000000) {
        resumen = (likes / 1000).toFixed(1) + "K";
    } else if (likes >= 1000000) {
        resumen = (likes / 1000000).toFixed(1) + "M";
    } else {
        resumen = likes;
    }

    //.toFixed() redondea a los decimales indicados en el argumento

    return resumen;
}

console.log("\nEjercicio 10: \n\nLikes: " + likes1 + "\nResumen: " + resumenLikes(likes1));
console.log("\nLikes: " + likes2 + "\nResumen: " + resumenLikes(likes2));
console.log("\nLikes: " + likes3 + "\nResumen: " + resumenLikes(likes3));
console.log("\nLikes: " + likes4 + "\nResumen: " + resumenLikes(likes4) + "\n");