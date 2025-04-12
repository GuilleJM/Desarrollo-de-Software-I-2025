/*05 Comprobar si una cadena de texto termina con un determinado sufijo:

Crear una función que reciba una cadena de texto y un sufijo, y devuelva true si la cadena
termina con ese sufijo, false en caso contrario.
● Ejemplo: Si la entrada es "JavaScript es un lenguaje de programación" y se pretende
saber si termina con “ción”, debería devolver true.
● Ayuda: Se espera que el ejercicio se resuelva con ciclos inexactos.*/

/*Para este ejercicio podría usar la función endsWith() que usé en el ejercicio anterior, 
pero pide que se resuelva con ciclos inexactos.

function terminaConSufijo (frase, sufijo) {
    return frase.endsWith(sufijo);
}
    
*/

const frase = "JavaScript es un lenguaje de programación";
const sufijo = "ción";

function terminaConSufijo (frase, sufijo) {
    let i = frase.length - 1;
    let j = sufijo.length - 1;
    
    while (i >= 0 && j >= 0) {
        if (frase[i] != sufijo[j]) {
            return false;
        }
        i--;
        j--;
    }
    
    if (j == -1) {
        return true;
    }
    
    return false;
}

console.log("\nEjercicio 5:\n\nFrase: " + frase + "\nSufijo: " + sufijo + "\nTermina con el sufijo?: " + terminaConSufijo(frase, sufijo) + "\n");