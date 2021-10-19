import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Register.css';

const Register = () => {
    const{allContext}=useAuth();
    const { registerWithEmailPss, getEmail, getPassword } = allContext;
    return (
        <div class="loginForm">
        <h1>Please Register</h1>
       <form onSubmit={registerWithEmailPss}>
          
          <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input onBlur={getEmail} type="email" placeholder="Enter your email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input onBlur={getPassword} placeholder="Enter your password" type="password" class="form-control" id="exampleInputPassword1"/>
          </div>
          <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Re-Password</label>
              <input placeholder="Re-Enter your password" type="password" class="form-control" id="exampleInputPassword1"/>
          </div>
         
                <button className="button-register" type="submit" class="btn btn-primary">Register Here</button>
         <div class="mb-3 form-check">
                <label class="" for="exampleCheck1">Already Have an Account ? <Link to="/login">Please logIn</Link> </label>
                 
          </div>
     </form>
</div>
    );
};

export default Register;