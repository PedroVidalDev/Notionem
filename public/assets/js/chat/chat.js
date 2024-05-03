import "./socketChat.js";
import { enviarMensagem } from "./socketChat.js";

const parametrosUrl = new URLSearchParams(window.location.search);
const nomeSala = parametrosUrl.get("nome");
const titulo = document.querySelector("#titulo-chat");

const campoMensagem = document.querySelector("#container-mensagens");

const form = document.querySelector("#form-digitar");

titulo.textContent = nomeSala;

if(!localStorage.getItem("nome")){
    window.location.href = "/";
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const usuario = localStorage.getItem("nome");
    const texto = document.querySelector("#mensagem-input").value;
    
    enviarMensagem({usuario, texto});
})

function atualizarCampoMensagens(mensagem){
    const div = document.createElement("div");
    div.className = "mensagem";
    div.innerHTML = mensagem.usuario + ": " + mensagem.texto;

    campoMensagem.appendChild(div);
}

export {atualizarCampoMensagens};