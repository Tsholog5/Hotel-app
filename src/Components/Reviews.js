import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore"; 
import { db } from '../Config/Firebase';
import StarRating from './star' ;
import "./Reviews.css";
import {getReviews} from '../Redux/dbSlice';
import {useDispatch, useSelector} from 'react-redux' ;

const Reviews = () => {
  const [reviews, setReviews] = useState([]); 
  const {  data ,loading } = useSelector((state) => state.room);
  console.log (data)

  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getReviews());
  }, []);

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  return (
    <div className="review-list-container">
    <h2>Reviews</h2>
    {data.length === 0 ? (
      <p>No reviews yet!</p>
    ) : (
      <ul className="review-list"> 
        {data.map((review, index) => (
          <li key={index} className="review-card"> 
            <h3>{review.username || "Anonymous"}</h3>
            <p>{review.email}</p>
            <StarRating rating={review.rating} setRating={() => {}} />
            <p>{review.review}</p>
          </li>
        ))}
      </ul>
    )}
  </div>
);
};
export default Reviews;