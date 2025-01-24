// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigosSorteados = [];

function agregarAmigo() {
    //let nombre = document.getElementById('amigo');
    let nombreAmigo = document.getElementById('amigo').value;
    if(nombreAmigo == ""){
        alert("Ingrese un nombre valido");
    }else {
        amigos.push(document.getElementById('amigo').value);
        document.getElementById('amigo').value = "";
        mostrarAmigos();
    }
}

function mostrarAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for(let i = 0; i < amigos.length; i++){
        let elemento = document.createElement('li');
        elemento.textContent = amigos[i];
        lista.appendChild(elemento);
    }
}

function sortearAmigo(){
    if(amigos.length == 0){
        alert("No hay amigos para sortear");
    } else if(amigosSorteados.length == amigos.length){
        alert("Ya se sortaron todos los amigos");
    }

   let amigoSorteado;
    do {
        amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    } while (amigosSorteados.includes(amigoSorteado));
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = "El amigo secreto sorteado es: " + amigoSorteado;
    amigosSorteados.push(amigoSorteado);
}