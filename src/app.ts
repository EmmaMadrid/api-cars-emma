import "dotenv/config";
import express from 'express';
import cors from 'cors';
import { router } from './routes';
import dbConnect from './config/mongo';
const PORT = process.env.PORT || 3002;
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
dbConnect().then(() => { console.log('Conectado a la base de datos') });
app.listen(PORT, () => console.log(`Listo en el puerto ${PORT}`));

