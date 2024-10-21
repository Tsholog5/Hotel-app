import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { selectUser } from '../Redux/dbSlice'; 
import { getUser } from '../Redux/dbSlice'; 
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Config/Firebase';
import './UserProfile.css';

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user,loading,error}=useSelector((state) => state.room);
  console.log('User from Redux:', user);





  const user1 = useSelector((state)=> state.auth.user)
  console.log(user1)

  useEffect(()=>{
   // console.log(auth.currentUser.uid)
    //dispatch(getUser(auth.currentUser.uid))
  })
 
  const handleHome = () => {
    navigate("/home");
  };


  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <button className='back' onClick={handleHome}>Back</button>
      <p>Name: </p>
      <p>Email: </p>
      <h6>Your Favourite Rooms</h6>  
     
      <h6>Your Bookings:</h6> 
      <ul>
       
      </ul>
    </div>
  );
};

export default UserProfile;
