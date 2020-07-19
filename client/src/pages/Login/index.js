import React, { useState } from 'react';
import api from '../../services/api';
import Container from '../Container';
import './style.css'



const Login = ({ history }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("false"); 

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        //console.log("result of submit", email, password);

        const response = await api.post('/login', { email, password })
        const userId = response.data._id || false;
        try {
            if (userId) {
                localStorage.setItem('user', userId)
                history.push('/dashboard')
            } else {
             const { message } = response.data
             setError(true)
             setErrorMessage(message)
                setTimeout(() => {
                    setError(false)
                    setErrorMessage("")
                }, 2000)
            }

        }catch(error){
            Promise.reject(error);
            console.log(error.message);
            
        }
    }

    return (

        <div>
            <Container>
                <h1 className="logHeader"> Login</h1>
                <div className="field" >
                    <div className="control">
                        <input className="input is-danger" type="email" placeholder="Your email" name="email" id="email" onChange={evt => setEmail(evt.target.value)} />
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <input className="input is-info" type="password" name="password" id="password" placeholder="Password" onChange={evt => setPassword(evt.target.value)} />
                    </div>
                </div>
                <div className="control">
                    <button className="button is-link" onClick={handleSubmit}>Submit</button>
                </div>
                { error ? (
                    <div className="notification is-danger is-light login-validation"> Missing require Information</div>
                ): ''}
            </Container>
        </div>

    )
}

export default Login;
