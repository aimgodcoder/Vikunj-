import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true,
  },
  
    color:{
    type: String,
    required: true,
    }
    })

export const Project = mongoose.model('Project', projectSchema);