import { Link } from "react-router-dom";
import { authContext } from "../context/AuthContext";
import { useContext } from "react";
import { useLogout } from "../hooks/useLogout";


const Navbar = () => {
    const { user } = useContext(authContext)
    const {logout} = useLogout()

    const handleLogout = () => {
        logout()
    }
    
    return (
        <header className="d-flex align-items-center">
            <div className="container d-flex justify-content-between align-items-center py-3">
                <div className="logo">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <h1>Workout Application</h1>
                    </Link>
                </div>
                {!user &&
                <div className="d-flex align-items-center">
                     <Link className="btn btn-light ms-2" to="/signup">
                        Signup
                    </Link>
                        <Link className="btn btn-light ms-2" to="/login">
                            Login
                        </Link>
                        </div>
                    }
                    {user && <div className="d-flex align-items-center">
                    <p className="m-0">{user.email}</p>
                    <button onClick={handleLogout} className="btn btn-light ms-2">
                            Logout
                        </button>
                    </div>
                    }
            </div>
        </header>
    );
}

export default Navbar;