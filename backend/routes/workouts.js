import express from "express";


import {getWorkout, getWorkouts, createWorkout, deleteWorkout, updateWorkout} from "../controllers/workoutController.js"

const router =express.Router();



//Get all workouts
router.get("/", getWorkouts);


//Get single workout
router.get("/:id", getWorkout);

//Post a workout
router.post("/", createWorkout );

//delete a workout
router.delete("/:id", deleteWorkout);

//Update a workout
router.patch("/:id", updateWorkout)




export default router;
