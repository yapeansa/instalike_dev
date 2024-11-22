import express from "express";
import multer from "multer";
import cors from "cors";
import { atualizarNovoPost, criarNovoPost, listarPosts, uploadImagem } from "../controllers/postsController.js";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
};

const upload = multer({ dest: "./uploads" });

const routes = (app) => {
    // **Converte o corpo das requisições para formato JSON**
    app.use(express.json());
    app.use(cors(corsOptions))

    // **Rota GET para obter todos os posts**
    app.get("/posts", listarPosts);
    // Rota para criar um post
    app.post("/posts", criarNovoPost); // Chama a função controladora para criação de posts

    // Rota para upload de imagens (assumindo uma única imagem chamada "imagem")
    app.post("/upload", upload.single("imagem"), uploadImagem); // Chama a função controladora para processamento da imagem

    app.put("/upload/:id", atualizarNovoPost);
};

export default routes;
