import React, { Fragment,useState,useContext } from 'react';
import {FirebaseContext,AuthContext} from '../../store/fireBaseContext'
import './Create.css';
import {useHistory} from 'react-router-dom'
import Header from '../Header/Header';

const Create = () => {
  const {firebase}= useContext(FirebaseContext)
  const {user} =  useContext(AuthContext)
  const [name,setName]=useState('')
const [category,setCategory]=useState('')
const [price,setPrice]=useState('')
const [image,setImage]=useState(null)
const history = useHistory()
const date = new Date()
const handleSubmit=()=>{
  firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
    ref.getDownloadURL().then((url)=>{
    firebase.firestore().collection('products').add({
      name,
      category,
      price,
      url,
      userid:user.uid,
      CreatedAt:date.toDateString()
    })
    history.push('/')
    })
  })
}
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              value={name}
              type="text"
              id="fname"
              onChange={(e)=>{
                setName(e.target.value)
              }}
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={category}
              id="fname"
              name="category"
              onChange={(e)=>{
                setCategory(e.target.value)
              }}
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" value={price} type="number" onChange={(e)=>{setPrice(e.target.value)}} id="fname" name="Price" />
            <br />
          <br />
          <img alt="Posts" width="200px" height="200px" src={image?URL.createObjectURL(image):''}></img>
            <br />
            <input onChange={(e)=>{
              setImage(e.target.files[0])
            }} type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
