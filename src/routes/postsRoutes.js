import express from "express";
import multer from "multer";
import { listarPosts, listarUsuarios, postarNovopost,uploadImagem, atualizarNovoPost} from "../controllers/postsControllers.js";
import cors from "cors";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage})

const routes = (app) => {
    // Habilita o parsing de requisições JSON
app.use(express.json());
app.use(cors(corsOptions))

app.get("/posts", listarPosts);

app.get("/usuarios", listarUsuarios );

app.post("/posts", postarNovopost);
app.post("/uploads", upload.single("imagem"), uploadImagem)

app.put("/upload/:id", atualizarNovoPost)


}
export default routes;
