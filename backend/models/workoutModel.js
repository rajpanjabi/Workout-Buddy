import mongoose from "mongoose";


const Schema = mongoose.Schema;
const workoutSchema= new Schema({
    title:{
        type:String,
        required:true
    },
    reps:{
        type:Number,
        required:true
    },
    load:{
        type:Number,
        required:true
    }


}, {timestamps: true});



const workoutModel=  mongoose.model('workoutModel', workoutSchema);

 
export default workoutModel;


//Workout.find()