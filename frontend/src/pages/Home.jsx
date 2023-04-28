import { useEffect, useState } from "react";
import { WorkoutCard, WorkoutForm } from "../components";

const Home = () => {

    const [workouts, setWorkouts] = useState(null)

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()
            if (response.ok) {
                setWorkouts(json)
            }
        }
        fetchWorkouts()
    }, []);

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