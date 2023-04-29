import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {signup, isLoading, error } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(email, password)    
    }
    return (
        <div className="signup d-flex justify-content-center my-5">
            <form onSubmit={handleSubmit}>
                <h1 className="mb-3">Sign up</h1>
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
                <button
                className="btn btn-light"
                disabled={isLoading}
                >Sign up</button>
                {error && <div className="error my-1">{error}</div>} 
            </form>
        </div>
    );
}

export default Signup;