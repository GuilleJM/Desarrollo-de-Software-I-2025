//EJERCICIO 1 Crear un array vacío y rellenarlo con N números mediante un ciclo for. 
//Mostrarlo por pantalla al finalizar, junto con su longitud.

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

var N = 10; 
var array1 = [];

for (var i = 0; i < N; i++) {
    array1.push(i + 1);
}

console.log("Array:", array1);
console.log("Longitud del array:", array1.length);

//EJERCICIO 2 Dado un array con 10 nombres de personas, generar un nuevo array con 
//aquellos nombres que tengan como máximo 6 letras.

var array2 = ["Joaquin", "Lucca", "Martina", "Mikel", "Luca", "Matias", "Martin", 
"Nahuel", "Leonardo", "Leandro", "Joaquin", "Lucas", "Nancy"];

var array3 = [];

for (var i = 0; i < array2.length; i++) {
    if (array2[i].length <= 6) {
        array3.push(array2[i]);
    }
}

//console.log(array3);

//EJERCICIO 3 Dado un array con 10 palabras, generar un nuevo array que contenga 
//únicamente las palabras que comiencen con las letras "A", "E" o "S".

var array4 = ["Alfa", "Beta", "Gamma", "Delta", "Epsilon", "Zeta", "Eta", "Theta", 
"Iota", "Kappa"];

var array5 = [];

for (var i = 0; i < array4.length; i++) {
    if (array4[i].startsWith("A") || array4[i].startsWith("E") || array4[i].startsWith("S")) {
        array5.push(array4[i]);
    }
}

//console.log(array5);

//EJERCICIO 4 Dado un array de 10 números, generar un nuevo array que contenga los 
//mismos números pero con el orden inverso.

var array6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var array7 = [];

for (var i = array6.length - 1; i >= 0; i--) {
    array7.push(array6[i]);
}

//console.log(array7);

//EJERCICIO 4 Dado un array de 10 números, generar un nuevo array que contenga los 
//mismos números pero con el orden inverso.

var array8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var array9 = [];
var i = array8.length - 1;

while (i >= 0) {
    array9.push(array8[i]);
    i--;
}

//console.log(array7);

//EJERCICIO 5 Crear una función "sumarSoloPares", que dado un array retorna la suma de 
//los números pares. También crear una función "sumarSoloImpares".

var arrayEnteros = [];

for (var i = 0; i < 10; i++) {
    arrayEnteros.push(getRandomInt(20));
}

function sumarSoloPares(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sum += array[i];
        }
    }
    return sum;
}

function sumarSoloImpares(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            sum += array[i];
        }
    }
    return sum;
}

console.log(arrayEnteros);
console.log("Suma de los pares: " + sumarSoloPares(arrayEnteros));
console.log("Suma de los impares: " + sumarSoloImpares(arrayEnteros));

//EJERCICIO 6 Crear una función que dado un número N, devuelva un array con los 
//primeros N números múltiplos de 3 que no sean múltiplos de 5.

var N = 10;

function MultiplosDeTresNoMultiplosDeCinco(numero) {
    let array = [];
    for (let i = 1; i <= numero * 3; i++) {
        if (sonMultiplos(i, 3) && !sonMultiplos(i, 5)) {
            array.push(i);
        }
    }
    return array;
}

console.log(MultiplosDeTresNoMultiplosDeCinco(N));

//EJERCICIO 7 Desarrollar una función que, dado dos números, nos diga si son múltiplos.

function sonMultiplos(num1, num2) {
    return (num1 % num2 === 0);
}

/*EJERCICIO 8 Desarrollar una función que nos diga si un alumno aprobó o no una cursada. 
La función debe recibir dos arrays: el primero representa las notas del primer parcial 
y el segundo las del segundo parcial. Cada array puede tener como máximo tres notas 
(por cada parcial hay un máximo de 2 recuperatorios). El alumno aprueba la cursada si 
al menos sacó 4 en el primer y segundo parcial, ya sea en primera vuelta o en 
recuperatorios.*/

function aproboCursada(notasParcial1, notasParcial2) {
    let aprobado = false;
    for (let i = 0; i < notasParcial1.length && !aprobado; i++) {
        if (notasParcial1[i] >= 4) {
            aprobado = true;
            for (let j = 0; j < notasParcial2.length && !aprobado; j++) {
                if (notasParcial2[j] >= 4) {
                    aprobado = true;
                }
            }
        }
    }
    if (aprobado) {
        return "Aprobó";
    } else {
        return "No aprobó";
    }
}

console.log(aproboCursada([3, 2, 4], [6]));

/*EJERCICIO 9 Generar una función "contarNumerosSegunPositividad", que dado un array de 
números devuelve un array de números con tres posiciones: la primera posición representa 
la cant. de números positivos, la segunda posición representa la cant. de números 
negativos, y la tercera posición representa la cant. de ceros. Se pide no usar IF.*/

function contarNumerosSegunPositividad(array) {
    let arrayContador = [0, 0, 0];
    for (let i = 0; i < array.length; i++) {
        switch (Math.sign(array[i])) {
            case 1:
                arrayContador[0]++;
                break;
            case -1:
                arrayContador[1]++;
                break;
            case 0:
                arrayContador[2]++;
                break;
        }
    }
    return arrayContador;
}

console.log(contarNumerosSegunPositividad([-9, 0, 20]));

/*EJERCICIO 10 Desarrollar una función que, dada la cantidad de meses de noviazgo que 
lleva una pareja, nos diga si la misma puede estar en crisis. Se considera que las 
parejas pueden estar en crisis a los 4 o 7 años, fuera de eso ya no existe "peligro" 
de crisis.*/

function crisisNoviazgo(meses) {
    let crisis = false;
    let anyos = Math.floor(meses / 12);
    if (anyos === 4 || anyos === 7) {
        crisis = true;
    }
    return crisis;
}

console.log(crisisNoviazgo(47));

/*EJERCICIO 11 Generar una función "contarFechasPorEstacion", que dado un array de 
fechas en formato "YYYY-MM-DD" retorne un array con cuatro posiciones: la primera 
posición corresponde a la cant. de fechas que caen en primavera, la segunda a las 
fechas de verano, la tercera a las fechas de otoño y la cuarta a las fechas de invierno.
Verano: inicia el 21 de diciembre y finaliza el 20 de marzo.
Otoño: inicia el 20 de marzo al 21 de junio.
Invierno: inicia el 21 de junio y finaliza el 23 de septiembre.
Primavera: inicia el 23 de septiembre al 21 de diciembre.*/

function contarFechasPorEstacion(fechas) {
    let arrayEstaciones = [0, 0, 0, 0];
    for (let i = 0; i < fechas.length; i++) {
        let mes = Math.floor(fechas[i].split("-")[1]);
        let dia = Math.floor(fechas[i].split("-")[2]);
        if ((mes === 9 && dia >= 21) || (mes === 10 || mes === 11) || (mes === 12 && dia <= 20)) {
            arrayEstaciones[0]++;
        } else if ((mes === 12 && dia >= 21) || (mes === 1 || mes === 2) || (mes === 3 && dia <= 20)) {
            arrayEstaciones[1]++;
        } else if ((mes === 3 && dia >= 21) || (mes === 4 || mes === 5) || (mes === 6 && dia <= 20)) {
            arrayEstaciones[2]++;
        } else if ((mes === 6 && dia >= 21) || (mes === 7 || mes === 8) || (mes === 9 && dia <= 20)) {
            arrayEstaciones[3]++;
        }
    }
    return arrayEstaciones;
}

console.log(contarFechasPorEstacion(["2022-01-01", "2022-12-31", "2023-01-01", "2023-02-28", "2023-03-01", "2023-06-20", "2023-06-21", "2023-09-20", "2023-09-21", "2023-12-21", "2023-12-22"]));

/*EJERCICIO 12 Crear una función que dado un número D que representa una suma de dinero, 
devuelva un array que indique qué cantidades de billetes de $20 000, $10 000, $2000, 
$1000, $500, $200 y $100 se deben utilizar para alcanzar dicho monto, dando prioridad a 
los billetes de mayor valor. Si sobra algo de dinero, devolverlo en la última posición 
como "resto". Cada posición del array se corresponde con los billetes de monto 
mencionados. Ejemplo: si la entrada es 20500, entonces la salida deberá ser un array 
[1, 0, 0, 0, 1, 0, 0, 0]; o si la entrada es 41000, la salida deberá ser 
[2, 0, 0, 1, 0, 0, 0, 0]*/

var D = 130235;

function devolverBilletes(dinero) {
    let billetes = [0, 0, 0, 0, 0, 0, 0, 0];
    let montoBilletes = [20000, 10000, 2000, 1000, 500, 200, 100];
    for (let i = 0; i < montoBilletes.length; i++) {
        billetes[i] = Math.floor(dinero / montoBilletes[i]);
        dinero = dinero % montoBilletes[i];
    }
    billetes[7] = dinero;
    return billetes;
}

console.log(devolverBilletes(D));