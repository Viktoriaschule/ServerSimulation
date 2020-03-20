import express from 'express';
import cors from 'cors';
import { initDatabase } from './Server/src/utils/database';
import substitutionPlanRouter from './substitution_plan/sp_butler';
import ldapRouter from './ldap/ldap_butler';

const app = express();
app.use(cors());

initDatabase();

app.use('/substitutionplan', substitutionPlanRouter);
app.use('/ldap', ldapRouter);

export default app;