import fs from "fs";
import { criarPost, getTodosPosts } from "../models/postsModel.js";

async function listarPosts(req, res) {
    // **Chama a função para obter os posts**
    const posts = await getTodosPosts();
    // **Envia uma resposta com status 200 (OK) e os posts no formato JSON**
    res.status(200).json(posts);
}

async function criarNovoPost(req, res) {
    const novoPost = req.body;
    try {
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ "Erro": "Falha na requisição" });
    }
}

async function uploadImagem(req, res) {
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };

    try {
        const postCriado = await criarPost(novoPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
        fs.renameSync(req.file.path, imagemAtualizada);
        res.status(200).json(postCriado);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ "Erro": "Falha na requisição" });
    }
}

export { listarPosts, criarNovoPost, uploadImagem };
