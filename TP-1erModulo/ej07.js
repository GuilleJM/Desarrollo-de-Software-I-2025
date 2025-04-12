/*07 Extraer el dominio de una dirección de correo electrónico:

Crear una función que reciba una dirección de correo electrónico y devuelva únicamente el
dominio de la misma.
● Ejemplo: Si la entrada es “jhondoe@ahk.com.ar”, la salida debería ser “ahk.com.ar”*/

const email = "jhondoe@ahk.com.ar";

function extraerDominio(email) {
    let dominio = "";

    for (let i = 0; i < email.length; i++) {
        if (email[i] === "@") {
            i++;
            while (i < email.length) {
                dominio += email[i];
                i++;
            }
        }
    }
    
    return dominio;
}

console.log("\nEjercicio 7: \n\nEmail: " + email + "\nDominio: " + extraerDominio(email) + "\n");