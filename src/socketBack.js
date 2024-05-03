import io from "./server.js";

io.on("connection", (socket) => {
    console.log("Cliente conectado: " + socket.id);

    socket.on("mandar_nome_usuario", async (nome) => {
        socket.emit("salvar_nome_usuario", nome);
    })

    socket.on("entrar_sala", async (nomeSala) => {
        console.log(nomeSala);
    })
})