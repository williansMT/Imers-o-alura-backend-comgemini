        import { getTodosDaColecao,criarPost, atualizarPost, } from "../models/postsModel.js";
        import fs from "fs"; 
        import gerarDescricaoComGemini from "../services/geminiService.js";
        export async function listarPosts(req, res) {
        try {
            const posts = await getTodosDaColecao("posts");
            res.status(200).json(posts);
        } catch (error) {
            console.error("Erro ao listar posts:", error);
            res.status(500).json({ error: "Erro ao buscar os posts" });
        }
        }
        export async function postarNovopost(req,res) {
            const novoPost = req.body;
            try {
                const postCriado = await criarPost(novoPost)
                res.status(200).json(postCriado);
            }
            catch(erro) {
                console.error (erro.message);
                res.status(500).json({"erro":"falha na requisição"})
            }
            
            
        };
        export async function uploadImagem(req, res) {
            const novoPost = {
                descricao: "",
                imgUrl: req.file.originalname,
                alt: ""
            };
        
            try {
                const postCriado = await criarPost(novoPost);
                const imagemAtualizada = `uploads/${postCriado.insertedId}.png`
                fs.renameSync(req.file.path, imagemAtualizada)
                res.status(200).json(postCriado);  
            } catch(erro) {
                console.error(erro.message);
                res.status(500).json({"Erro":"Falha na requisição"})
            }
        }


        export async function atualizarNovoPost(req,res) {
            const id = req.params.id;
            const urlImagem =`http://localhost:3000/${id}.png`

            try {

                const imageBuffer = fs.readFileSync(`uploads/${id}.png`)
                const descricao = await gerarDescricaoComGemini(imageBuffer)
                const postAtualizar ={
                    imgUrl: urlImagem,
                    descricao: descricao,
                    alt: req.body.alt
                }
                const postCriado = await atualizarPost(id,postAtualizar)
                
                res.status(200).json(postCriado);
            }
            catch(erro) {
                console.error (erro.message);
                res.status(500).json({"erro":"falha na requisição"})
            }
            
            
        };

        export async function listarUsuarios(req, res) {
        try {
            const usuarios = await getTodosDaColecao("usuarios");
            res.status(200).json(usuarios);
        } catch (error) {
            console.error("Erro ao listar usuários:", error);
            res.status(500).json({ error: "Erro ao buscar os usuários" });
        }
        };