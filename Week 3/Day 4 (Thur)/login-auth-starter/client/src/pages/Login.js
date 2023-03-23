import axios from 'axios'

import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login({ setUser }) {

    const navigate = useNavigate()

    let [form, setForm] = useState({ 
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(form)
        try {

            const authResponse = await axios.post('/auth/login', form)
            console.log(authResponse.data.token)
            localStorage.setItem("token", authResponse.data.token)

            const infoResponse = await axios.get(`/users`)
            console.log(infoResponse)
            setUser(infoResponse.data)
            navigate('/profile')

        } catch(err) {
            console.log(err.response.data.error)
        }
    }

    return ( 
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <br />
                <input 
                    type="text" 
                    id="username"
                    name="username"
                    onChange={handleChange}
                    value={form.username}
                />
                <br /><br />
                <label htmlFor="password">Password:</label>
                <br />
                <input 
                    type="password" 
                    id="password"
                    name="password"
                    onChange={handleChange}
                    value={form.password}
                />
                <br /><br />
                <button>Submit</button>
            </form>
        </>
     );
}

export default Login;