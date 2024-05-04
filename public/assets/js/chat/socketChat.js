import { atualizarCampoMensagens } from "./chat.js";

const socket = io();

function enviarMensagem(mensagem){
    socket.emit("enviar_mensagem", mensagem, (mensagemRecebida) => {
        atualizarCampoMensagens(mensagemRecebida);
    });
}

function entrouNoChat(dados){
    socket.emit("entrar_sala", dados)
}

function saiuDoChat(dados){
    socket.emit("sair_sala", dados);
}

socket.on("recebeu_mensagem", mensagem => {
    atualizarCampoMensagens(mensagem);
})

socket.on("notificar_entrada_ou_saida_na_sala", dados => {
    atualizarCampoMensagens(dados);
})

export {enviarMensagem, entrouNoChat, saiuDoChat};