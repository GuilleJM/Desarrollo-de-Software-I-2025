/*06 Eliminar los espacios en blanco al inicio y final de una cadena:

Crear una función que reciba una cadena de texto y elimine los espacios en blanco al inicio y
final de la misma.
● Ejemplo: Si la entrada es " JavaScript es divertido “, la salida debería ser "JavaScript
es divertido".
● Ayuda: Se sugiere utilizar un ciclo exacto para recorrer toda la frase y que cada vez que
se encuentre un caracter no “vacío” (espacio) se lo considere para la nueva palabra “sin
espacios”. Si se le busca la vuelta, se puede reutilizar la función del punto 2.*/

/*Para este ejercicio también podría usar función para simplificar todo (trim()),
pero pide que se resuelva con ciclos exactos.

function quitarEspaciosDelanterosYTraseros (frase) {
    frase = frase.trim();
    return frase;
}

*/

const frase1 = " JavaScript es divertido ";
const frase2 = "   la caperuzita roja   ";

function quitarEspaciosDelanterosYTraseros(frase) {
    let fraseFinal = "";
    let inicio = 0;
    let final = frase.length - 1;

    for (let i = 0; i < frase.length; i++) {
        if (frase[i] !== ' ') {
            inicio = i;
            break;
        }
    }

    for (let i = frase.length - 1; i >= 0; i--) {
        if (frase[i] !== ' ') {
            final = i;
            break;
        }
    }

    for (let i = inicio; i <= final; i++) {
        fraseFinal += frase[i];
    }

    return fraseFinal;
}

console.log("\nEjercicio 6:\n\nFrase: \"" + frase1 + "\"\nFrase sin espacios: \"" + quitarEspaciosDelanterosYTraseros(frase1) + "\"");
console.log("\nFrase: \"" + frase2 + "\"\nFrase sin espacios: \"" + quitarEspaciosDelanterosYTraseros(frase2) + "\"\n");