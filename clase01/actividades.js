//Dado un array de 10 valores numericos, informar cual es el mayor de ellos

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

var array10 = [0];

for (var i = 0; i < 10; i++) {
    array10[i] = getRandomInt(20);
}

function getMaximumNum(array) {
    var max = array[0]
    for (var j = 1; j < 10; j++) {
        if (max < array[j]) {
            max = array[j]
        }
    } 
    return max
} 

console.log(array10);
console.log(getMaximumNum(array10));

//Dado un array de 15 numeros, informar por pantalla el promedio de los mayores que 100 
//y la suma de los menores de 10

var array15 = [0];

for (var i = 0; i < 10; i++) {
    array15[i] = getRandomInt(200);
}

function getPromedioYSuma(array) {
    var suma = 0;
    var cantSuma = 0;

    var promedio = 0;
    var cantPromedio = 0;

    for (var j = 0; j < array.length; j++) {
        if (array15[j] > 100) {
            promedio += array15[j];
            cantPromedio++;
        } else if (array15[j] < 10){
            suma += array15[j];
            cantSuma++;
        }

    }

    if (cantPromedio == 0) {
        promedio = "No hay promedios";
    } else {
        promedio = promedio / cantPromedio;
    }

    if (cantSuma == 0) {
        suma = "No hay sumas";
    } 

    return "Promedios de los >100: " + promedio + " Suma de los <10: " + suma
}

console.log(array15);
console.log(getPromedioYSuma(array15));

//Dado un array de 20 numeros, generar/rellenar otros dos arrays: Uno de numeros pares y otro de numeros impares

var array20 = [0];

