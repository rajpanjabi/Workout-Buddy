import express from "express"
import dotenv from "dotenv";
import workoutRoutes from "./routes/workouts.js"
import mongoose from "mongoose";
dotenv.config();
const port=process.env.PORT;

const app =express();



app.use(express.json());

app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()

})


app.use('/api/workouts',workoutRoutes)





//connect to db

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
//listen for requests
app.listen(4000, ()=>{
    console.log(`Connected to db &Server running on ${port}`)

});
    
    
})
.catch((error)=>{
    console.log(error)
})


