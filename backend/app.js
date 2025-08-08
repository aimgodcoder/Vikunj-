import express from 'express';
import dbConnection from './database/dbconnection.js';
import {config} from "dotenv";
import cookieParser from 'cookie-parser';
import cors from 'cors';
import {errorMiddleware} from './middlewares/errorMiddleware.js';
import userRouter from './router/userrouter.js';
import taskrouter from './router/taskrouter.js';
import projectRouter from './router/projectrouter.js';
import teamrouter from './router/teamrouter.js';

const app = express();

config({path:'./config/config.env'});

app.use(cors({
    origin: "http://localhost:5173",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));

app.use('/api/v1/user', userRouter);
app.use('/api/v1/task',taskrouter);
app.use('/api/v1/project', projectRouter);
app.use('/api/v1/team', teamrouter);


app.use(errorMiddleware);

dbConnection();

export default app;