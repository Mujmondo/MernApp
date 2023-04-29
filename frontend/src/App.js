import { Navigate, Route, Routes } from "react-router-dom";
import {Home, Signup} from "./pages"
import { Navbar } from "./components";
import Login from "./pages/Login";
import { useContext } from "react";
import { authContext } from "./context/AuthContext";
function App() {
  const {user} = useContext(authContext)
  
  return (
    <div className="App">
      <Navbar />
    <Routes>
      <Route path="/" element={user? <Home /> : <Navigate to="/login" />} />
      <Route path="/signup" element={!user? <Signup /> : <Navigate to="/" />} />
      <Route path="/login" element={!user? <Login /> : <Navigate to="/" />} />
    </Routes>
    </div>
  );
}

export default App;
