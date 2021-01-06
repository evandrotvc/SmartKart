import 'reflect-metadata';
import express from 'express';
import routes from './routes';
import './database';
import cors from 'cors';

const app = express();
app.use(cors());

app.use(express.json())
app.use(routes);// importa todas as rotas

app.get('/', (req, resp) => {
    return resp.send("hello world!")
})

app.listen(3333 , () => {
    console.log("Listen port 3333 🤙");
});