const socket = io();

function entrarNaSala(nomeSala){
    socket.emit("entrar_sala", nomeSala)
}

export {entrarNaSala};