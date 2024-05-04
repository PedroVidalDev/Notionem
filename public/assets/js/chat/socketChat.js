import { atualizarCampoMensagens } from "./chat.js";

const socket = io();

function enviarMensagem(mensagem){
    socket.emit("enviar_mensagem", mensagem, (mensagemRecebida) => {
        atualizarCampoMensagens(mensagemRecebida);
    });
}

function entrouNoChat(nomeSala){
    socket.emit("entrar_sala", nomeSala)
}

socket.on("recebeu_mensagem", mensagem => {
    atualizarCampoMensagens(mensagem);
})

socket.on("notificar_entrada_na_sala", dados => {
    atualizarCampoMensagens(dados);
})

export {enviarMensagem, entrouNoChat};