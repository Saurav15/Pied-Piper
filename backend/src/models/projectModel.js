import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
    projectManager:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Auth",
        required:true
    },
    projectName:{
        type:String,
        required:true,
        trim:true
    },
    tentativeStartingDate:{
        type:String,
        required:true,
        trim:true
    },
    duration:{
        type:Number,
        required:true
    },
    selectedCandidates:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Developer"
        },
        
    ],
})

const Project = mongoose.model("Project",projectSchema)
export default Project;
