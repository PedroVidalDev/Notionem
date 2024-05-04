import "dotenv/config";

import { atualizaSala, pegarHistorico } from "./db/salasDb.js";
import io from "./server.js";

io.on("connection", (socket) => {
    console.log("Cliente conectado: " + socket.id);

    socket.on("mandar_nome_usuario", async (usuario) => {
        console.log(usuario)
        socket.emit("salvar_nome_usuario", (usuario));
    })

    socket.on("entrar_sala", async (dados) => {
        socket.join(dados.nomeSala);
        console.log(dados)
        socket.broadcast.to(dados.nomeSala).emit("notificar_entrada_ou_saida_na_sala", dados);

        const historicoSala = await pegarHistorico(dados.nomeSala);
        historicoSala.forEach(mensagem => {
            socket.emit("recebeu_mensagem", mensagem)
        });
    })

    socket.on("sair_sala", async (dados) => {
        socket.broadcast.to(dados.nomeSala).emit("notificar_entrada_ou_saida_na_sala", dados);
    })

    socket.on("enviar_mensagem", async (mensagem, callback) => {
        socket.broadcast.to(mensagem.nomeSala).emit("recebeu_mensagem", mensagem)

        const res = await atualizaSala(mensagem);

        callback(mensagem);
    })
})