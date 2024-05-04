import "./socketChat.js";
import { entrouNoChat, enviarMensagem } from "./socketChat.js";

const parametrosUrl = new URLSearchParams(window.location.search);
const nomeSala = parametrosUrl.get("nome");
const titulo = document.querySelector("#titulo-chat");

const campoMensagem = document.querySelector("#container-mensagens");

const form = document.querySelector("#form-digitar");

const botaoSair = document.querySelector("#sair");

titulo.textContent = nomeSala;

entrouNoChat(nomeSala);

if(!localStorage.getItem("nome")){
    window.location.href = "/";
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const usuario = localStorage.getItem("nome");
    const texto = document.querySelector("#mensagem-input").value;
    
    enviarMensagem({nomeSala, usuario, texto});

    document.querySelector("#mensagem-input").value = "";
})

botaoSair.addEventListener("click", (event) => {
    event.preventDefault();

    window.location.href = "salas.html";
})

function atualizarCampoMensagens(mensagem){
    const div = document.createElement("div");
    div.className = "mensagem";

    const autor = document.createElement("p");
    autor.className = "autor";
    autor.innerHTML = mensagem.usuario;

    const texto = document.createElement("p");
    texto.className = "texto";
    texto.innerHTML = mensagem.texto;

    if(mensagem.usuario == localStorage.getItem("nome")){
        autor.style.color = "var(--cor-destaque)";
        autor.style.textAlign = "right"
        texto.style.textAlign = "right"
    }

    div.appendChild(autor);
    div.appendChild(texto);
    
    campoMensagem.appendChild(div);
}

export {atualizarCampoMensagens};