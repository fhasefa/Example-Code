import axios from 'axios'

import { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";


function App() {

    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        
        let token = localStorage.getItem("token")

        if (token) {
            getLoggedInUser()
        }

        async function getLoggedInUser() {
            try {
                const response = await axios.get('/users', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setUser(response.data)
            } catch(err) {
                localStorage.removeItem("token")
                alert(err.response.data.error)
            } finally {
                setIsLoading(false)
            }
        }

    }, [])

    let loggedIn = user.username

    return ( 
        <div className="app">
            <Navbar user={user.username} setUser={setUser} />
            <Routes>
                <Route path="/" element={<Home />} />
                {loggedIn ?
                    <>
                        <Route path="/profile" element={<Profile username={user.username} email={user.email} />} /> 
                        {!isLoading && <Route path="*" element={<Navigate to="/" />} />}
                    </>
                    :
                    <>
                        <Route path="/login" element={<Login setUser={setUser} />} />
                        <Route path="/register" element={<Register setUser={setUser} />} />
                        {!isLoading && <Route path="*" element={<Navigate to="/login" />} />}
                    </>
                }
            </Routes>
        </div>
     );
}

export default App;