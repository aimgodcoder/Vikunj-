import express from 'express';
import {createTeam,getTeams} from '../controller/teamcontroller.js';


const router = express.Router();
router.post('/createteam', createTeam);
router.get('/getteams', getTeams);

export default router;