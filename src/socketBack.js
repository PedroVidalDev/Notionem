import "dotenv/config";

import { atualizaSala, criarSala, pegarHistorico, pegarTodasSalas } from "./db/salasDb.js";
import io from "./server.js";

const nomesUsuarios = [];

io.on("connection", (socket) => {
    console.log("Cliente conectado: " + socket.id);

    socket.on("mandar_nome_usuario", async (usuario) => {

        if(nomesUsuarios.includes(usuario.nome)){
            socket.emit("erro_nome_usuario");
        } 
       
        else{
            nomesUsuarios.push(usuario.nome);
            socket.emit("salvar_nome_usuario", (usuario));
        }

    })

    socket.on("entrou_salas_menu", async (callback) => {
        const salas = await pegarTodasSalas();

        callback(salas);
    })

    socket.on("criar_sala", async (nome, callback) => {
        const salas = await criarSala(nome);
        console.log(salas)
        callback();
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