import { useEffect } from "react";
import axios from "axios"
import WorkoutDetails from "../components/Workoutdetails"
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";


const Home= ()=>{
   

   const {workouts,dispatch}=useWorkoutsContext();
    useEffect(()=>{
   const fetchWorkouts= async ()=>{
    try{
        const response= await axios.get("/api/workouts");
        console.log(response.data)

        if (response.status>=200 && response.status<=299){
          

       dispatch({type:'SET_WORKOUTS', payload: response.data})
        
        }

    }catch(error){
        console.log(error)
       

    }
   }
   fetchWorkouts();

}, [dispatch]);




    return(

    <div className="home">
   <div className="workouts">

   {workouts && workouts.map((workout)=>(
    <WorkoutDetails  workout={workout} key={workout._id} />
    
   ))}


   

     </div>
     <WorkoutForm/>
       
    </div>

)}
export default Home;