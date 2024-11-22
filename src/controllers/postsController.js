import { getTodosPosts } from "../models/postsModel.js";

async function listarPosts(req, res) {
    // **Chama a função para obter os posts**
    const posts = await getTodosPosts();
    // **Envia uma resposta com status 200 (OK) e os posts no formato JSON**
    res.status(200).json(posts);
}

export { listarPosts };
