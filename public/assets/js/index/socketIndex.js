import gerarCorAleatoria from "../utils/gerarCor.js";
import { salvarNome } from "./script.js";

const socket = io();

function mandarNomeUsuario(nome){
    socket.emit("mandar_nome_usuario", ({
        nome, 
        cor: gerarCorAleatoria()}));
}

socket.on("salvar_nome_usuario", (usuario) => {
    salvarNome(usuario);
})

socket.on("erro_nome_usuario", () => {
    alert("Erro no nome de usuario desejado, provavel que ja esteja em uso.");
})

export {mandarNomeUsuario};