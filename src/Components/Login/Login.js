import React, { useState,useContext} from 'react';
import {FirebaseContext} from '../../store/fireBaseContext'
import Logo from '../../olx-logo.png';
import {Link,useHistory} from 'react-router-dom'
import './Login.css';

function Login() {
  const history = useHistory()
  const {firebase} = useContext(FirebaseContext)
  const [email, setEmail] = useState('')
  const [password,setPassword] = useState('')
  const handleLogin=(e)=>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      history.push('/')
    }).catch((err)=>{
      alert(err.message)
    })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            value={email}
            type="email"
            id="fname"
            onChange={(e)=>{setEmail(e.target.value)}}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            id="lname"
            onChange={(e)=>{setPassword(e.target.value)}}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link style={{textDecoration:'none',color:'black'}} to='/signup'>Signup</Link>
      </div>
    </div>
  );
}

export default Login;
