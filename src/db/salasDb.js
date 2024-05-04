import { salasColecao } from "./dbConnect.js";

async function atualizaSala(dados){
    const sala = await pegarSala(dados.nomeSala);
    const historico = sala.historico;
    historico.push(dados);

    const res = salasColecao.updateOne({
        nome: dados.nomeSala
    }, {
        $set: {
            historico: historico
        }
    })

    return res;
}

async function pegarSala(sala){
    const salaAchada = await salasColecao.findOne({nome: sala});
    return salaAchada;
}

async function pegarHistorico(sala){
    const salaAchada = await salasColecao.findOne({nome: sala});
    return salaAchada.historico;
}

export {atualizaSala, pegarHistorico};