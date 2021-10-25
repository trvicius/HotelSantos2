import 'reflect-metadata';
import express from 'express'
import './database/connect'
import routes from './routes'
import cors from 'cors';
import * as bodyParser from "body-parser";

const app = express();

app.use(cors())

app.use(bodyParser.json());
app.use(routes)

app.listen(4000, () => console.log('Server Started at http://localhost:4000'))