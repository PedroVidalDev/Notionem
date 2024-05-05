import { criarBotoesDeSalas } from "./salas.js";

const socket = io();

function entrouSalasMenu(){
    socket.emit("entrou_salas_menu", (salas) => {
        criarBotoesDeSalas(salas);
    });
}

function encerrandoSessao(nome){
    socket.emit("encerrando_sessao", nome);
}

export {entrouSalasMenu, encerrandoSessao};