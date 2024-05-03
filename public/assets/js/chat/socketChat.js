import { atualizarCampoMensagens } from "./chat.js";

const socket = io();

function enviarMensagem(mensagem){
    socket.emit("enviar_mensagem", mensagem, (mensagemRecebida) => {
        atualizarCampoMensagens(mensagemRecebida);
    });
}

socket.on("recebeu_mensagem", mensagem => {
    atualizarCampoMensagens(mensagem);
})

export {enviarMensagem};