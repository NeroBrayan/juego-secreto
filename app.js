
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto){
    let elementoHtml = document.querySelector(elemento);
elementoHtml.innerHTML = texto;
return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value); 

if (numeroDeUsuario === numeroSecreto){
    asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
    document.getElementById("reiniciar").removeAttribute("disabled");
} else {
    if (numeroDeUsuario > numeroSecreto){
        asignarTextoElemento("p", "el número secreto es menor");
    } else {
        asignarTextoElemento("p", "el número secreto es mayor");
    }
    intentos ++;
    limpiarCaja();
}
    return;
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value = "";
    
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p", "Ya se sortearon todos los números posibles");
    }
    //si el numero generado esta incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto(); 
    }else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado; 
    }
}

function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del número secreto!");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo} `);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;  
}
function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros    
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
//deshabilitar el boton de nuevo juego
document.querySelector("#reiniciar").setAttribute("disabled","true");
    

}

condicionesIniciales();
