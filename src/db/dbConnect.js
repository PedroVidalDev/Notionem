import { MongoClient } from "mongodb";

const cliente = new MongoClient("mongodb+srv://pedrohvidals:CkzddjF3cHjfEdzm@cluster0.iegdbmd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

let salasColecao;

try{
    await cliente.connect();

    const db = cliente.db("Notionem");

    salasColecao = db.collection("salas");
} catch(erro){
    console.log(erro);
}

export {salasColecao};