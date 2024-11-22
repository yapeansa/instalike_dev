import express from "express";
import multer from "multer";
import { criarNovoPost, listarPosts, uploadImagem } from "../controllers/postsController.js";

const upload = multer({ dest: "./uploads" });

const routes = (app) => {
    // **Converte o corpo das requisições para formato JSON**
    app.use(express.json());

    // **Rota GET para obter todos os posts**
    app.get("/posts", listarPosts);
    // Rota para criar um post
    app.post("/posts", criarNovoPost);
    app.post("/upload", upload.single("imagem"), uploadImagem);
};

export default routes;
