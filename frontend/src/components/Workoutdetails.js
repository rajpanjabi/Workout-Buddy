
import axios from "axios"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"


const WorkoutDetails=({workout})=>{

  const {dispatch}=useWorkoutsContext();
  

  const handleDelete= async()=>{

    const response= await axios.delete("/api/workouts/"+ `${workout._id}`)

    if (response.status>=200 && response.status<=299) {
   
      dispatch({type: 'DELETE_WORKOUT', payload: response.data})
    }


  }

return (

    <div className="workout-details">
  <h4>{workout.title}</h4>
  <p> <strong>Title: </strong> {workout.title}</p>
  <p> <strong>Load (kg): </strong> {workout.load}</p>
  <p> <strong>Reps: </strong>{workout.reps}</p>
   <p>{workout.createdAt}</p>
   <span onClick={handleDelete}>delete</span>
   
    </div>
)

}

export default WorkoutDetails