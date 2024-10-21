import React, { useState } from 'react';
import axios from 'axios';

const ReviewForm = ({ onAddReview }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const reviewData = { name, email, rating, review };

        try {
            const response = await axios.post('/api/reviews', reviewData);
            alert('Review submitted!');
            
            onAddReview(response.data);  // Pass the submitted review back to the parent component
            setName('');
            setEmail('');
            setRating(0);
            setReview('');
        } catch (error) {
            console.error('Error submitting review:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="review-form">
            <h2>Submit a Review</h2>
            <label>
                Your Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </label>
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </label>
            <label>
                Rating:
                {[1, 2, 3, 4, 5].map((star) => (
                    <label key={star}>
                        <input
                            type="radio"
                            value={star}
                            checked={rating === star}
                            onChange={() => setRating(star)}
                        />
                        {star}
                    </label>
                ))}
            </label>
            <label>
                Review:
                <textarea
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ReviewForm;
