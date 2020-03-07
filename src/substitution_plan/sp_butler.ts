import express from 'express';
import getData from '../utils/data';
import { getSubstitutionPlanVersion } from './sp_db';

const substitutionPlanRouter = express.Router();

substitutionPlanRouter.get('/:day', async (req, res) => {
    const version = getData().substitutionPlan[parseInt(req.params.day) - 1];
    const data = await getSubstitutionPlanVersion(version);
    if (!data) {
        console.log('No substitution plan with the version: ', version);
    }
    res.send(data);
});

export default substitutionPlanRouter;