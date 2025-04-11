/*02 Concatenar elementos de un array con un separador personalizado:

Crear una función que reciba un array de strings y un separador, y devuelva una sola cadena de
texto que contenga todos los elementos del array concatenados con el separador especificado.
● Ejemplo: Si la entrada es ["Hola", "Mundo", "JavaScript"] y el separador “-”, la
salida debería ser "Hola-Mundo-JavaScript"*/

const array1 = ["Hola", "Mundo", "JavaScript"];
const separador1 = "-";
const array2 = ["Mesa", "Silla", "Teclado", "Escritorio", "Computadora"];
const separador2 = ",";
const array3 = ["Strings", "Aleatorios"];
const separador3 = ".";

function concatenadorDeStrings (strings, separador) {
    let cadenaFinal = "";
    for (i = 0; i < strings.length - 1; i++) {
        let string = strings[i];
        cadenaFinal += string + separador;
    }
    return cadenaFinal + strings[strings.length - 1];
}

console.log("\nEjercicio 2:\n\nArray: [" + array1 + "]\nSeparador: \"" + separador1 + "\"\nCadena final: " + concatenadorDeStrings(array1, separador1));
console.log("\nArray: [" + array2 + "]\nSeparador: \"" + separador2 + "\"\nCadena final: " + concatenadorDeStrings(array2, separador2));
console.log("\nArray: [" + array3 + "]\nSeparador: \"" + separador3 + "\"\nCadena final: " + concatenadorDeStrings(array3, separador3) + "\n");