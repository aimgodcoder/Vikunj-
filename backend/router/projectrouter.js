import { createProject,getProjects } from "../controller/projectcontroller.js";


import express from 'express';
const router = express.Router();

router.post('/create', createProject);
router.get('/getprojects', getProjects);

export default router;