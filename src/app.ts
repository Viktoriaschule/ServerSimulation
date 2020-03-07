import express from 'express';
import cors from 'cors';
import { initDatabase } from './Server/src/utils/database';

const app = express();
app.use(cors());

initDatabase();

export default app;