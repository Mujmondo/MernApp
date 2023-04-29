import { useContext } from "react";
import { authContext } from "../context/AuthContext";
import { WorkoutContext } from "../context/WorkoutContext";

export const useLogout = () => {
    const { dispatch } = useContext(authContext)
    const { dispatch: workoutDispatch} = useContext(WorkoutContext)
    const logout = () => {

        // set user to null
        dispatch({ type: 'LOGOUT'})

        // set workouts to null
        workoutDispatch({ type: 'SET_WORKOUTS', payload: null})
        
        // remove the token from the localStorage
        localStorage.removeItem('user')
    }
    return { logout }
}
