import "./socketSalas.js";
import { entrarNaSala } from "./socketSalas.js";

if(!localStorage.getItem("nome")){
    window.location.href = "/";
}

const salas = document.querySelectorAll("#sala");

salas.forEach((sala) => {
    sala.addEventListener("click", () => {
        const nomeSala = sala.innerHTML.trim();
        entrarNaSala(nomeSala);
    })
})

function redirecionarSala(nomeSala){
    window.location.href = `chat.html?nome=${nomeSala}`;
}

export {redirecionarSala};