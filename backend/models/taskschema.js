import mongoose from "mongoose";


const taskschema = new mongoose.Schema({
    description:{
        type: String,
        required:true
    }
})

export const Task = new mongoose.model("Task",taskschema);