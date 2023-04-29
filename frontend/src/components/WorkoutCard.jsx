import { useContext } from "react";
import { WorkoutContext } from "../context/WorkoutContext";
import {formatDistanceToNow} from "date-fns"
import { authContext } from "../context/AuthContext";

const WorkoutCard = ({workout}) => {
const {dispatch} = useContext(WorkoutContext)
const {user} = useContext(authContext)

    const handleClick = async () => {
        if(!user){
            return
        }

        const response = await fetch('/api/workouts/' + workout._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()
        
        if(response.ok){
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        } 
    }

    return ( 
        <div className="workout-card mb-2 p-4 d-flex justify-content-between">
           <div>
           <h1 className="mb-1">{workout.title}</h1>
            <p className="mb-1"><strong>Load (kg):</strong> {workout.load}</p>
            <p className="mb-1"><strong>Reps:</strong> {workout.reps}</p>
            <p className="createdat mb-0">{formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}</p>
           </div>
           <div>
            <button 
            className="btn btn-dark btn-sm delete-btn"
            onClick={handleClick}
            >delete</button>
           </div>
        </div>
     );
}
 
export default WorkoutCard;