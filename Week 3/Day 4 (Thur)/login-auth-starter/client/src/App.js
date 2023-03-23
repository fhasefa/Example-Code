import { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";


function App() {

    const [user, setUser] = useState({})

    useEffect(() => {

    }, [])

    let loggedIn = false

    return ( 
        <div className="app">
            <Navbar user={user.username} setUser={setUser} />
            <Routes>
                <Route path="/" element={<Home />} />
                {loggedIn ?
                    <>
                        <Route path="/profile" element={<Profile username={user.username} email={user.email} />} /> 
                        <Route path="*" element={<Navigate to="/" />} />
                    </>
                    :
                    <>
                        <Route path="/login" element={<Login setUser={setUser} />} />
                        <Route path="/register" element={<Register setUser={setUser} />} />
                        <Route path="*" element={<Navigate to="/login" />} />
                    </>
                }
            </Routes>
        </div>
     );
}

export default App;