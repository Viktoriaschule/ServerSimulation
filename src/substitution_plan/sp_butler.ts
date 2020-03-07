import express from 'express';
import getData from '../utils/data';
import { getSubstitutionPlanVersion } from './sp_db';

const substitutionPlanRouter = express.Router();

substitutionPlanRouter.get('/:day', async (req, res) => {
    const version = getData().substitutionPlan[parseInt(req.params.day)];
    const data = getSubstitutionPlanVersion(version);
    if (!data) {
        console.log('No substitution plan with the version: ', version);
    }
    res.json(data);
});

export default substitutionPlanRouter;