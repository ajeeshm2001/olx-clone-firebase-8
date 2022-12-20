import React,{useContext,useEffect} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Signup from './Pages/Signup'
import Create from './Pages/Create'
import './App.css';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import LoginPage from './Pages/Login';
import { AuthContext, FirebaseContext } from './store/fireBaseContext';
import ViewPost from './Pages/ViewPost';
import Post from './store/productContext';

function App() {
  const {user,setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  
  return (
    <div>
      <Post>
      <Router>
      <Route exact path='/'> <Home /></Route>
      <Route path='/signup'> <Signup/></Route>
      <Route path='/login'> <LoginPage/></Route>
      <Route path='/create'> <Create/></Route>
      <Route path='/view'> <ViewPost/></Route>

      </Router>
      </Post>
      
    </div>
  );
}

export default App;
