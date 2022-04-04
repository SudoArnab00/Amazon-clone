import React from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (event) => {
    event.preventDefault(); //stops page refresh
    

  }

  const register = (event) => {
    event.preventDefault();


  }

  return (
    <div className='login'> 
      <Link to='/'>
      <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'/>
      </Link>
           

      <div className='login__container'>
       <h1> Sign In </h1>
       <form>
         <h5>Email</h5>
         <input value={email} type='email'/>
         <h5>Password</h5>
         <input value={password} type='password'/>
         <button onClick={login} type='submit' className='login__signInButton'> Sign In </button>
       </form>

       <p> By signing-in you agree to my Conditions of Service Agreement. For more info see our privacy Notice, our cookies Notice and gather data. </p>
       <button onClick={register} type='submit' className='login__registerButton'> Create your Amazon account</button>
      </div>
    </div>
  )
}

export default Login