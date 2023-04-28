const WorkoutCard = ({workout}) => {
    return ( 
        <div className="workout-card mb-2 p-4">
            <h1 className="mb-1">{workout.title}</h1>
            <p className="mb-1"><strong>Load (kg):</strong> {workout.load}</p>
            <p><strong>Reps:</strong> {workout.reps}</p>
            <p className="createdat mb-0">{workout.createdAt}</p>
        </div>
     );
}
 
export default WorkoutCard;