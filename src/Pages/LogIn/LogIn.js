import React from 'react';
import './LogIn.css';
import useAuth from '../../Hooks/useAuth';
import { Link } from 'react-router-dom';

const LogIn = () => {
    const { allContext } = useAuth()
    
    const { GoogleSignUp, GitHubSignUp, signInWithEmail, getEmail, getPassword } = allContext;
    return (
        <div class="loginForm">
                  <h1>Please LogIn</h1>
            <form onSubmit={signInWithEmail}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input onBlur={getEmail} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input onBlur={getPassword} type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3 form-check">
                        {/* <input type="checkbox" class="form-check-input" id="exampleCheck1"/> */}
                        <label class="form-check-label" for="exampleCheck1">I Have No Account <Link to="/register">Please Register</Link></label>
                    </div>
                    <button className="button-login" type="submit" class="btn btn-primary">Log In Here</button>
                    </form>
            <button className="button me-5 " onClick={GoogleSignUp}>
               <img src={'https://i.ibb.co/F3HgnJM/download-3.png' } alt="" />  Google Sign Up</button>
            <button className="button " onClick={GitHubSignUp}><img src={'https://i.ibb.co/59q2xCG/github-collab-retina-preview.gif'} alt="" />  GitHub Sign Up</button>
            
        </div>
    );
};

export default LogIn;