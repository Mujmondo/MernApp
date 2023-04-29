import { useContext, useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../context/AuthContext";

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, isLoading, error } = useLogin()
    const { user } = useContext(authContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(email, password)

    }
    return (
        <div className="signup d-flex justify-content-center my-5">
            <form onSubmit={handleSubmit}>
                <h1 className="mb-3">Login</h1>
                <label className="w-100">Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label className="w-100">Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <br />

                <p>Don't have account? 
                <Link className="mx-2" style={{color: '#fff'}} to="/signup">Sign up</Link></p>

                <button
                    className="btn btn-light"
                    disabled={isLoading}
                    >Login</button>
                    {error && <div className="error my-1">{error}</div>}
            </form>
        </div>
    );
}

export default Login;