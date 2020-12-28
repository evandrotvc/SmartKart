import express from 'express';
import routes from './routes';
import cors from 'cors';
const app = express();
app.use(cors());

app.use(routes);// importa todas as rotas
app.get('/', (req, resp) => {
    return resp.send("hello world!")
})

app.listen(3334 , () => {
    console.log("Listen port 3334 🤙");
});