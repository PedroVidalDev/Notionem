import { redirecionarSala } from "./salas.js";

const socket = io();

function entrarNaSala(nomeSala){
    socket.emit("entrar_sala", nomeSala)
}

socket.on("entrou_na_sala", (nomeSala) => {
    redirecionarSala(nomeSala);
})

export {entrarNaSala};