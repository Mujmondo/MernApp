import { useContext, useEffect } from "react";
import { WorkoutCard, WorkoutForm } from "../components";
import { WorkoutContext } from "../context/WorkoutContext";
import { authContext } from "../context/AuthContext";

const Home = () => {
    const {workouts, dispatch} = useContext(WorkoutContext)
    const {user} = useContext(authContext);
    useEffect(() => {
        const fetchWorkouts = async () => {
            if(!user){
                return
            }

            const response = await fetch('/api/workouts', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()
            if (response.ok) {
               dispatch({type: 'SET_WORKOUTS', payload: json})
            }
        }

        if(user){
        fetchWorkouts()
        }
    }, [dispatch, user]);

    return (
        <>
            <div className="container py-3">
                <div className="row">
                    <div className="col-12 col-md-9 order-2 order-md-1">
                        {workouts && workouts.map((workout) => (
                            <WorkoutCard key={workout._id} workout={workout} />
                        ))}
                    </div> 
                    <div className="col-12 col-md-3 order-1 order-md-2 mb-3">
                        <WorkoutForm />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;