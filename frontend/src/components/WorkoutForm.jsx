import { useState } from "react";

const WorkoutForm = () => {

    const [title, setTitle] = useState('');
    const [reps, setReps] = useState('');
    const [load, setLoad] = useState('');
    const [error, setError] = useState(null);

    const handleForm = async (e) => {
        e.preventDefault()
        const workout = {title, reps, load}
        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setError(null)
            setTitle('')
            setReps('')
            setLoad('')
            console.log('post successful', json)
        }
    }

    return (
        <div className="workout-form">
            <h4 className="mb-2">Add new workouts</h4>
            <form onSubmit={handleForm}>
                <label>Exersize Title:</label><br/>
                <input
                    type="name"
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                />
<br/>
                <label>Reps:</label><br/>
                <input
                    type="number"
                    onChange={e => setReps(e.target.value)}
                    value={reps}
                /><br/>
                <label>Load (in kg):</label><br/>
                <input
                    type="number"
                    onChange={e => setLoad(e.target.value)}
                    value={load}
                /><br/>
                {error && <div className="error">{error}</div>}
                <button>Submit</button>
            </form>
        </div>
    );
}

export default WorkoutForm;