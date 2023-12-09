//Variables
let numConversiones = 1;
//Array
let divisas = [
    { id: 1, name: "dolares", price: 0.026, },
    { id: 2, name: "euro", price: 0.024, },
    { id: 3, name: "libra", price: 0.020, },
    { id: 4, name: "reales", price: 0.13, },
    { id: 5, name: "Dolar canadiense", price: 0.035, },
];
// Funcion calcular cambio
function cambio(divisa, pesos) {
    let moneda = divisas.find(item => item.id === divisa);
    let precio = moneda.price;
    let total = pesos * precio;
    let nombre = moneda.name;
    alert("Su cambio sería " + total + " " + nombre);
    return total;
}
// Funcion consultar divisa
function consultardivisa() {
    let divisa;
    while (true) {
        divisa = parseInt(prompt("A cuál moneda quieres cambiar?\n1-Dolares\n2-Euro\n3-Libra\n4-Reales\n5-Dolar Canadiense"));

        // Comprobar si el usuario toco cancelar
        if (divisa === null) {
            alert("Gracias por visitarnos :)");
            break;
        }

        // Comprobar si la opción es valida
        if (divisa >= 1 && divisa <= 5) {
            break;
        } else {
            alert("Por favor, elige una opcion válida U.U ");
        }
    }

    return divisa;
}
// Funcion consultar pesos 
function consultarpesos() {
    let pesos;
    while (true) {
        pesos = parseInt(prompt("¿Cuantos pesos uruguayos deseas cambiar?"));

        // Comprobar si el usuario toco cancelar
        if (pesos === null) {
            alert("Gracias por visitarnos :)");
            break;
        }

        // Comprobar si la cantidad es valida
        if (!isNaN(pesos) && pesos > 0) {
            break;
        } else {
            alert("Por favor, ingresa una cantidad valida U.U ");
        }
    }

    return pesos;
}

let divisa = consultardivisa();
let pesos = consultarpesos();

if (divisa !== null && pesos !== null) {
    cambio(divisa, pesos);
    alert("Gracias por visitarnos :) ");
}


