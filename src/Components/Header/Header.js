import React, { useContext} from 'react';
import {useHistory,Link} from 'react-router-dom'
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/fireBaseContext';
function Header() {
  const {user} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  const history = useHistory()
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
        <span>{user?"":<span style={{cursor:'pointer'}} onClick={()=>{
            history.push('/signup')
          }}>SignUp</span>}</span>&nbsp;&nbsp;
          <span>{user?`Welcome ,${user.displayName}`:<span style={{cursor:'pointer'}} onClick={()=>{
            history.push('/login')
          }}>Login</span>}</span>
          <hr />
          {user&&<span style={{cursor:'pointer'}} onClick={()=>{
            firebase.auth().signOut();
            history.push('/login')
          }}>Logout</span>}
        </div>

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <Link to='/create' style={{textDecoration:'none'}}><span>SELL</span></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
