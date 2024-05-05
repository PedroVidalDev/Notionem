const socket = io();

function criarSala(nome){
    socket.emit("criar_sala", nome, () => {
        window.location.href = "salas.html";
    });
}

export {criarSala};