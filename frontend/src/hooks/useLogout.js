import { useContext } from "react";
import { authContext } from "../context/AuthContext";

export const useLogout = () => {
    const { dispatch } = useContext(authContext)
    const logout = () => {

        // set user to null
        dispatch({ type: 'LOGOUT'})
        
        // remove the token from the localStorage
        localStorage.removeItem('user')
    }
    return { logout }
}
