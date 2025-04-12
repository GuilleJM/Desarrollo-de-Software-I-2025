/*04  Contar la cantidad de veces que aparece una palabra en una cadena:

Crear una función que reciba una cadena de texto y una palabra, y devuelva la cantidad de
veces que aparece esa palabra en la cadena.
● Ejemplo: Si la entrada es "El sol brilla y el cielo está despejado.", y la palabra que se
quiere buscar es “el”, la salida debería ser el número 2.
● Ayuda: Se sugiere recorrer la frase con algún ciclo de repetición. Cada vez que se
encuentre un espacio en blanco se habrá encontrado una palabra. Cuando se tenga una
palabra, se la podrá comparar con la palabra buscada y si coincide … (siga usted!)*/

const frase = "El sol brilla y el cielo está despejado.";
const palabra1 = "el";
const palabra2 = "despejado";
const palabra3 = "luna";

function contarRepeticionDePalabraEnFrase (frase, palabra) {
    frase = frase.toLowerCase();
    if (frase.endsWith(".")) {
        frase = frase.slice(0, -1); 
        //.slice() corta una parte de un string, en este caso empieza en el 
        // caracter inicial (0) y finaliza un caracter menos al final (-1)
    }
    let palabras = frase.split(" ");
    let repeticionPalabra = 0;

    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i] == palabra) { 
            repeticionPalabra += 1;
        }
    }

    return repeticionPalabra;
}

console.log("\nEjercicio 4:\n\nFrase: " + frase + "\nPalabra: " + palabra1 + "\nRepeticiones: " + contarRepeticionDePalabraEnFrase(frase, palabra1));
console.log("\nFrase: " + frase + "\nPalabra: " + palabra2 + "\nRepeticiones: " + contarRepeticionDePalabraEnFrase(frase, palabra2));
console.log("\nFrase: " + frase + "\nPalabra: " + palabra3 + "\nRepeticiones: " + contarRepeticionDePalabraEnFrase(frase, palabra3) + "\n");