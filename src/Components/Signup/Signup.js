import React, { useState,useContext} from 'react';
import {useHistory,Link} from 'react-router-dom'
import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/fireBaseContext';
import './Signup.css';

export default function Signup() {
  const history =  useHistory()
  const [username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [number,setNumber]=useState('')
  const [password,setPassword]=useState('')
  const {firebase} = useContext(FirebaseContext)
  const handleSubmit=(e)=>{
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email,password).then((data)=>{
      data.user.updateProfile({displayName:username}).then(()=>{
        firebase.firestore().collection('users').add({
          id:data.user.uid,
          username:username,
          phone:number
        }).then(()=>{
          history.push('/login')
        })
      })
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            value={username}
            type="text"
            id="fname"
            name="name"
            onChange={(e)=>setUsername(e.target.value)}
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            value={email}
            type="email"
            id="fname"
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={number}
            id="lname"
            name="phone"
            onChange={(e)=>setNumber(e.target.value)}
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            id="lname"
            name="password"
            onChange={(e)=>setPassword(e.target.value)}
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <Link style={{textDecoration:'none',color:'black'}} to='/login'>Login</Link>
      </div>
    </div>
  );
}
