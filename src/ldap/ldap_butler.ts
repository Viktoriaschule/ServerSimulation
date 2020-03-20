import express from 'express';
import getData from '../utils/data';
import getAuth from '../Server/src/utils/auth';

const ldapRouter = express.Router();

type user = { username: string, password: string, grade: string, isTeacher: boolean };

ldapRouter.get('/login', (req, res) => {
    const users: user[] = getData().ldap;
    const auth = getAuth(req);
    if (!users) {
        console.log('No users defined');
    }
    const user = users.filter((u) => u.username === auth.username)[0];
    if (user && user.password === auth.password) {
        res.json({ status: true, grade: user.grade, isTeacher: user.isTeacher });
        return;
    }
    res.json({ status: false });
});

ldapRouter.get('/user', (req, res) => res.json(true));

export default ldapRouter;