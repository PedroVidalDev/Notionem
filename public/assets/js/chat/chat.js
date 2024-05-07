import gerarCorAleatoria from "../utils/gerarCor.js";
import "./socketChat.js";
import { entrouNoChat, enviarMensagem, saiuDoChat } from "./socketChat.js";

const parametrosUrl = new URLSearchParams(window.location.search);
const nomeSala = parametrosUrl.get("nome");
const titulo = document.querySelector("#titulo-chat");

const usuario = localStorage.getItem("nome");
const cor = localStorage.getItem("cor");

const campoMensagem = document.querySelector("#container-mensagens");

const form = document.querySelector("#form-digitar");

const botaoSair = document.querySelector("#sair");

titulo.textContent = nomeSala;

entrouNoChat({usuario, cor, nomeSala, acao:"entrou"});

if(!localStorage.getItem("nome")){
    window.location.href = "/";
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const usuario = localStorage.getItem("nome");
    const cor = localStorage.getItem("cor");
    const texto = document.querySelector("#mensagem-input").value;
    
    enviarMensagem({nomeSala, usuario, texto, cor});

    document.querySelector("#mensagem-input").value = "";
})

botaoSair.addEventListener("click", (event) => {
    event.preventDefault();

    saiuDoChat({usuario, cor, nomeSala, acao:"saiu"});

    window.location.href = "salas.html";
})

function atualizarCampoMensagens(mensagem){
    
    const div = document.createElement("div");
    div.className = "mensagem";

    if(mensagem.texto){
        const autor = document.createElement("p");
        autor.className = "autor";
        autor.innerHTML = mensagem.usuario;
        autor.style.color = localStorage.getItem("cor");
        autor.style.textAlign = "left";
        autor.style.color = mensagem.cor;
    
        const texto = document.createElement("p");
        texto.className = "texto";
        texto.innerHTML = mensagem.texto;

        const data = document.createElement("p");
        data.className = "data";
        data.innerHTML = mensagem.data;
        
        if(mensagem.usuario == localStorage.getItem("nome")){
            autor.style.textAlign = "right";
            texto.style.textAlign = "right";
            data.style.textAlign = "right";
        }
    
        div.appendChild(autor);
        div.appendChild(texto);
        div.appendChild(data);
    } 
    
    else{
        let entrada = "";

        if(mensagem.acao == "entrou"){
            entrada = `
                <p class="aviso-entrada-saida"> <span class="negrito"> ${mensagem.usuario} </span> entrou no chat! </p>
            `
        }
        else if(mensagem.acao == "saiu"){
            entrada = `
                <p class="aviso-entrada-saida"> <span class="negrito"> ${mensagem.usuario} </span> saiu do chat! </p>
            ` 
        }
        
        div.innerHTML += entrada;
    }
    
    campoMensagem.appendChild(div);// pedrohvidals lZLk6TNdOjUqC3j3
    
    campoMensagem.scrollTop = campoMensagem.scrollHeight;
}

export {atualizarCampoMensagens};