/*09 Calcular impuestos:

Desarrollar una función que permita conocer los impuestos que debe abonar una persona dada
su edad y sus ingresos mensuales. Los impuestos a abonar por una persona entre 18 y 20 años
es un 10% de los ingresos; las personas entre 21 y 30 deben abonar 15% de los ingresos; y
todo el resto un 40%. Los menores de edad no abonan impuestos.
● Ejemplo: Si la entrada fuera la edad 18 e ingreso 1000, la salida esperada debería ser
100.*/

const edad1 = 17;
const edad2 = 18;
const edad3 = 25;
const edad4 = 35;
const ingresos = 1000;

function calcularImpuestos(edad, ingresos) {

    if (edad < 18) {
        return 0;
    } else if (edad >= 18 && edad <= 20) {
        return ingresos * 0.1;
    } else if (edad >= 21 && edad <= 30) {
        return ingresos * 0.15;
    } else {
        return ingresos * 0.4;
    }
    
}

console.log("\nEjercicio 9: \n\nEdad: " + edad1 + "\nIngresos: " + ingresos + "\nImpuestos: " + calcularImpuestos(edad1, ingresos));
console.log("\nEdad: " + edad2 + "\nIngresos: " + ingresos + "\nImpuestos: " + calcularImpuestos(edad2, ingresos));
console.log("\nEdad: " + edad3 + "\nIngresos: " + ingresos + "\nImpuestos: " + calcularImpuestos(edad3, ingresos));
console.log("\nEdad: " + edad4 + "\nIngresos: " + ingresos + "\nImpuestos: " + calcularImpuestos(edad4, ingresos) + "\n");