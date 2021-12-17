import React, {useState} from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import {auth} from "../firebase";

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))

    }

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            console.log(auth);
            if(auth){
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
        setEmail('');
        setPassword('');
        
    }

	return (
		<div className="login">
            <Link to='/'>
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
				alt="amazon"
				className="login__logo"
			/>
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <button onClick={signIn} className='login__signinButton'>Sign In</button>
                    <button onClick={register} className='login__registerButton'>Create your Amazon account</button>
                </form>
            </div>
		</div>
	);
};

export default Login;
