
import express from 'express';

import { createTask, getTasks } from '../controller/taskcontroller.js';


const router = express.Router();

router.post('/create', createTask);

router.get('/tasks', getTasks);


export default router;