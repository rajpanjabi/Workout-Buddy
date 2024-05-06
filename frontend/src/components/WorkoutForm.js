import axios from "axios";
import { useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";



const WorkoutForm =()=>{
    const {dispatch} =useWorkoutsContext();

    const [title, setTitle]=useState('');
    const [load, setLoad]=useState('');
    const [reps, setReps]=useState('');
    const [error, setError]=useState('');
    


    const result= async()=>{
        try{
            const postreq= await axios.post("/api/workouts", {title:title, load:load, reps:reps})
            console.log(postreq);
            if (postreq.status >= 200 && postreq.status < 300) {
                
                setError(null)
                setTitle('')
                setLoad('')
                setReps('')

                console.log('new workout added:', postreq)  
                dispatch({type: 'CREATE_WORKOUT', payload: postreq.data})
                
            }

        }catch(error){
            console.log(error)
            setError(error)
           

        }


        
    }

    function handleSubmit(e){
        e.preventDefault();
        result();



    }

    return(
        <div className="form">
        <h3> Add a new Workout</h3>
        <form className="create" onSubmit={handleSubmit}>
        <label>Title </label>
            <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} ></input>
            <label>Load </label>
            <input type="number" onChange={(e)=>setLoad(e.target.value)} value={load}></input>
            <label>Reps </label>
            <input type="number" onChange={(e)=>setReps(e.target.value)} value={reps}></input>
            <button>Add Workout</button>
            
       {error && <div className="error"> error</div>}

        </form>


        </div>
    )
}

export default WorkoutForm;