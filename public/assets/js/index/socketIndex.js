import { salvarNome } from "./script.js";

const socket = io();

function mandarNomeUsuario(nome){
    socket.emit("mandar_nome_usuario", nome);
}

socket.on("salvar_nome_usuario", (nome) => {
    salvarNome(nome);
})

export {mandarNomeUsuario};