    import  'dotenv/config';
    import { ObjectId } from "mongodb";
    import conectarAoBanco from "../config/dbconfig.js";
    // Chama a função para conectar ao banco de dados, passando a string de conexão como argumento
    // A string de conexão é obtida da variável de ambiente STRING_CONEXAO
    const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

    // Função genérica para buscar dados em uma coleção
    export async function getTodosDaColecao(nomeDaColecao) {
        try {
        const db = conexao.db("imersao-instabytes");
        const colecao = db.collection(nomeDaColecao);
        const resultados = await colecao.find().toArray();
        return resultados;
        } catch (error) {
        console.error(`Erro ao buscar dados da coleção ${nomeDaColecao}:`, error);
        throw error; // Rejeita a promessa com o erro
        }
    }

    // Funções específicas para posts e usuários
    export async function getTodosPosts() {
        return getTodosDaColecao("posts");
    }
    export async function getTodosUsuarios() {
        return getTodosDaColecao("usuarios");
    }

    export async function criarPost(novoPost) {
        const db = conexao.db("imersao-instabytes");
        const colecao = db.collection("posts");
        return colecao.insertOne(novoPost)
    }

    export async function atualizarPost(id, novoPost) {
        const db = conexao.db("imersao-instabytes");
        const colecao = db.collection("posts");
        const objID = ObjectId.createFromHexString(id);
        return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost});
    }