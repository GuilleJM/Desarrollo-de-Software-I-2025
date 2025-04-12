/*08 Combinar dos arrays alternando sus elementos:

Crear una función que reciba dos arrays y devuelva un nuevo array con los elementos de ambos
arrays combinados alternativamente.
● Ejemplo: Si la entrada fueran los arrays [1, 2, 3] y ['a', 'b', 'c', ‘d’], la salida debería ser [1,
‘a’, 2, ‘b’, 3, ‘c’, ‘d’]*/

const array1 = [1, 2, 3];
const array2 = ['a', 'b', 'c', 'd'];

function combinarArrays(array1, array2) {
    let array3 = [];

    for (let i = 0; i < array1.length; i++) {
        array3.push(array1[i]);
        array3.push(array2[i]);
    }
    
    return array3;
}

console.log("\nEjercicio 8: \n\nArray 1: [" + array1 + "]\nArray 2: [" + array2 + "]\nArray combinado: [" + combinarArrays(array1, array2) + "]\n");