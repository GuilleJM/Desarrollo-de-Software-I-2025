/*03 Revertir las palabras de una frase:

Crear una función que reciba una cadena de texto y devuelva la misma cadena con las palabras
en orden inverso.
● Ejemplo: Si la entrada es "JavaScript es divertido", la salida debería ser “divertido es
JavaScript”
● Ayuda: Se sugiere recorrer la frase con algún ciclo de repetición. Cada vez que se
encuentre un espacio en blanco se habrá encontrado una palabra. Cada palabra podría
ser insertada en un array (¿para qué?)*/

const frase1 = "JavaScript es divertido";
const frase2 = "la caperuzita roja";

function revertirFrase (frase) {
    let palabras = frase.split(" ");
    let palabrasInvertidas = [];

    for (let i = palabras.length - 1; i >= 0; i--) {
        palabrasInvertidas.push(palabras[i]);
    }

    return palabrasInvertidas.join(" ");
    //.join() une todos los strings de un array con un separador en un solo string
}

console.log("\nEjercicio 3:\n\nFrase: " + frase1 + "\nPalabras invertidas: " + revertirFrase(frase1));
console.log("\nFrase: " + frase2 + "\nPalabras invertidas: " + revertirFrase(frase2) + "\n");