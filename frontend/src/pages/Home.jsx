import { useContext, useEffect } from "react";
import { WorkoutCard, WorkoutForm } from "../components";
import { WorkoutContext } from "../context/WorkoutContext";

const Home = () => {
    const {workouts, dispatch} = useContext(WorkoutContext)

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()
            if (response.ok) {
               dispatch({type: 'SET_WORKOUTS', payload: json})
            }
        }
        fetchWorkouts()
    }, [dispatch]);

    return (
        <>
            <div className="container py-3">
                <div className="row">
                    <div className="col-9">
                        {workouts && workouts.map((workout) => (
                            <WorkoutCard key={workout._id} workout={workout} />
                        ))}
                    </div> 
                    <div className="col-3">
                        <WorkoutForm />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;