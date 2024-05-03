import "./socketChat.js";

const parametrosUrl = new URLSearchParams(window.location.search);
const nomeSala = parametrosUrl.get("nome");
const titulo = document.querySelector("#titulo-chat");
titulo.textContent = nomeSala;

if(!localStorage.getItem("nome")){
    window.location.href = "/";
}

