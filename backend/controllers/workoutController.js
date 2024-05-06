
import Workout from "../models/workoutModel.js"
import mongoose from "mongoose";

//Get all workouts

const getWorkouts = async(req,res)=>{
    try{
        const workouts= await Workout.find({}).sort({createdAt:-1});
        res.status(200).json(workouts)

    }catch(error){
        res.status(400).json({error:error})
    }

}

//Get single workout

const getWorkout= async(req,res)=>{
try {
    const id= req.params.id;
    if (!(mongoose.Types.ObjectId.isValid(id))){
        res.status(404).json({error: "No such workout available"})

    }
    const singleWorkout= await Workout.findById(id)
    if (!singleWorkout){
        return res.status(404).json({error: "No such workout available"})
    }
    res.status(200).json(singleWorkout)
    
} catch (error) {
    res.status(400).json(error)
    
}

}


//Post single workout
const createWorkout= async (req,res)=>{

const{title, load, reps} =req.body;

    try{
        const workout= await Workout.create({title, load, reps})
        //console.log(workout);
        res.status(200).json(workout);
    }catch(error){
        res.status(400).json({error:error.message})

    }

}

//Delete single workout

const deleteWorkout= async(req,res)=>{
    try {
        const id= req.params.id;
        if (!(mongoose.Types.ObjectId.isValid(id))){
            res.status(404).json({error: "No such workout available"})
    
        }
        const singleWorkout= await Workout.findOneAndDelete({_id:id})
        if (!singleWorkout){
            return res.status(404).json({error: "No such workout available"})
        }
        res.status(200).json({msg:"Workout deleted"})
        
    } catch (error) {
        res.status(400).json(error)
        
    }
    
    }




//Update single workout

const updateWorkout= async(req,res)=>{
    try {
        const id= req.params.id;
        if (!(mongoose.Types.ObjectId.isValid(id))){
            res.status(404).json({error: "No such workout available"})
    
        }
        const singleWorkout= await Workout.findOneAndUpdate({_id:id}, {... req.body})


        if (!singleWorkout){
            return res.status(404).json({error: "No such workout available"})
        }
        res.status(200).json({msg:"Updated successfully"})
        
    } catch (error) {
        res.status(400).json(error)
        
    }
    
    }








export  {getWorkouts, getWorkout, createWorkout, deleteWorkout, updateWorkout};