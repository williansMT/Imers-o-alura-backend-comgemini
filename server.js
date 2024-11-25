import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();
app.use(express.static("uploads"))
routes(app);

//Inicia o servidor na porta 3000
app.listen(3000, () => {
console.log("Servidor escutando na porta 3000");
});












































//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// // Importa o framework Express para criar a aplicação
// import express from "express";

// // Importa a função para conectar ao banco de dados
// import conectarAoBanco from "./src/config/dbconfig.js";

// // Chama a função para conectar ao banco de dados, passando a string de conexão como argumento
// // A string de conexão é obtida da variável de ambiente STRING_CONEXAO
// const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
//         // const posts = [
//         //     {
//         //         id:1,
//         //         descricao: "umafototeste",
//         //         img: "https://placecats.com/millie/300/150"
//         //     },
//         //     // Novo objeto
//         //     {
//         //         id:2,
//         //         descricao: "Outro post incrível!",
//         //         img: "https://picsum.photos/id/237/300/200"
//         //     },
//         //     // Mais um objeto
//         //     {
//         //         id:3,
//         //         descricao: "Gato fofinho",
//         //         img: "https://placekitten.com/400/300"
//         //     }
//         // ];

// // Inicializa uma aplicação Express
// const app = express();

// // Habilita o parsing de requisições JSON
// app.use(express.json());

// // Inicia o servidor na porta 3000
// app.listen(3000, () => {
// console.log("Servidor escutando na porta 3000");
// });

// // Função assíncrona para buscar todos os posts do banco de dados
// async function getTodosPosts() {
//   // Conecta ao banco de dados MongoDB e seleciona a coleção "posts"
// const db = conexao.db("imersao-instabytes");
// const colecao = db.collection("posts");

//   // Busca todos os documentos da coleção e retorna um array
// return colecao.find().toArray();
// }

// // Define um endpoint para buscar todos os posts
// app.get("/posts", async (req, res) => {
//   // Chama a função para buscar os posts e armazena o resultado
// const posts = await getTodosPosts();

//   // Envia uma resposta HTTP com status 200 (OK) e os posts em formato JSON
// res.status(200).json(posts);
// });
//         // app.get("/posts",(req,res) => {
//         //     res.status(200).json(posts);
//         // });
//         // function buscarPostPorID(id){
//         //     return posts.findIndex((post) => {
//         //         return post.id === Number(id)
//         //     })
//         // };
//         // app.get("/posts/:id",(req,res) => {
//         //     const index = buscarPostPorID(req.params.id)
//         //     res.status(200).json(posts[index]);
//         // });

//         // app.get("/posts",(req,res) => {
//         //     res.status(200).json(posts);
//         // });
//         // function buscarPorDescricao(descricao){
//         //     return posts.findIndex((post) =>{
//         //         return post.descricao === String(descricao)
//         //     } )
//         // };
//         // app.get("/posts/descricao/:descricao", (req,res) => {
//         //     const descricao =buscarPorDescricao(req.params.descricao)
//         //     res.status(200).json(posts[descricao]);
//         // });

