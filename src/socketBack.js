import io from "./server.js";

io.on("connection", (socket) => {
    console.log("Cliente conectado: " + socket.id);

    socket.on("mandar_nome_usuario", async (nome) => {
        socket.emit("salvar_nome_usuario", nome);
    })

    socket.on("entrar_sala", async (nomeSala) => {
        socket.join(nomeSala);
        socket.emit("entrou_na_sala", nomeSala);
    })

    socket.on("enviar_mensagem", async (mensagem, callback) => {
        // salvar no banco
        socket.broadcast.emit("recebeu_mensagem", mensagem)

        callback(mensagem);
    })
})