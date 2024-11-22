import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

// **Conecta ao banco de dados**
// Importa a função para conectar ao banco de dados e a executa,
// armazenando a conexão em uma constante.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// **Função assíncrona para obter todos os posts**
async function getTodosPosts() {
    // **Seleciona o banco de dados 'imersao-instalike'**
    const db = conexao.db("imersao-instalike");
    // **Seleciona a coleção 'posts'**
    const colecao = db.collection("posts");
    // **Executa a consulta e retorna um array com todos os documentos**
    return colecao.find().toArray();
}

async function criarPost(novoPost) {
    const db = conexao.db("imersao-instalike");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
}

async function atualizarPost(id, novoPost) {
    const db = conexao.db("imersao-instalike");
    const colecao = db.collection("posts");
    const objId = ObjectId.createFromHexString(id);
    return colecao.updateOne({ _id: new ObjectId(objId) }, { $set: novoPost });
}

export { getTodosPosts, criarPost, atualizarPost };
