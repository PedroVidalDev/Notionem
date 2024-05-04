import "./socketSalas.js";

if(!localStorage.getItem("nome")){
    window.location.href = "/";
}

const salas = document.querySelectorAll("#sala");

salas.forEach((sala) => {
    sala.addEventListener("click", () => {
        const nomeSala = sala.innerHTML.trim();
        window.location.href = `chat.html?nome=${nomeSala}`
    })
})