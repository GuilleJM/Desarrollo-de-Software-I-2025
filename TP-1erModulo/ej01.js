/*01 Convertir una cadena de texto a formato de título:

Crear una función que reciba una frase (string) y devuelva la misma frase con el formato de
título, donde la primera letra de cada palabra está en mayúscula y el resto en minúscula.
● Ejemplo: Si la entrada es “mi amigo me invitó a comer”, la salida debería ser “Mi
Amigo Me Invitó A Comer”.
● Ayuda: Los strings entienden una función “toLowerCase()” que convierte la primera
letra del texto en mayúscula. Además, se espera que se resuelva con algún ciclo (exacto
o inexacto) y utilizando la función anteriormente mencionada.*/

const frase1 = "mi amigo me invitó a comer";
const frase2 = "la caperuzita roja";
const frase3 = "Mi AmIgO Me InViTó A CoMer";

function convertirATitulo (frase) {
    let palabras = frase.split(" ");
    let titulo = "";

    for (let i = 0; i < palabras.length; i++) {
        let palabra = palabras[i];
        let primeraLetra = palabra[0];
        let restoPalabra = "";

        for (let j = 1; j < palabra.length; j++) {
            restoPalabra += palabra[j];
        }

        titulo += primeraLetra.toUpperCase() + restoPalabra.toLowerCase() + " ";
    }

    return titulo;
}

console.log("\nEjercicio 1:\n\nFrase: " + frase1 + "\nTitulo: " + convertirATitulo(frase1));
console.log("\nFrase: " + frase2 + "\nTitulo: " + convertirATitulo(frase2));
console.log("\nFrase: " + frase3 + "\nTitulo: " + convertirATitulo(frase3) + "\n"); 