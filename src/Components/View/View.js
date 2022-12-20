import React,{useState,useEffect, useContext} from 'react';
import { FirebaseContext } from '../../store/fireBaseContext';
import { PostContext } from '../../store/productContext';


import './View.css';
function View() {
  const [userDetails,setUserDetails] = useState()
  const {productDetails}=useContext(PostContext)
  const {firebase}= useContext(FirebaseContext)
  useEffect(()=>{
    const {userid}=productDetails
    firebase.firestore().collection('users').where('id','==',userid).get().then((res)=>{
      res.forEach(element => {
        setUserDetails(element.data())
      });
    })
  },[])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={productDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {productDetails.price} </p>
          <span>{productDetails.name}</span>
          <p>{productDetails.category}</p>
          <span>{productDetails.CreatedAt}</span>
        </div>
        { userDetails &&
          <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>
        }
        
      </div>
    </div>
  );
}
export default View;
