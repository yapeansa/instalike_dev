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

export { getTodosPosts };
