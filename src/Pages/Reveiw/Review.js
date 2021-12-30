import React from 'react';
import RatingIcon from '../Rating/RatingIcon';
import './Review.css'

const Review = (props) => {
    const { email, comments, rating } = props.review
    return (
        <div className="col-md-4 my-2" data-aos="zoom-in" data-aos-duration="2000">
            <div className="mx-2 my-1 p-2 border border-2 cart-1">
                <p>{email}</p>
                <div>
                    <h3 className="rating-size hover" data-aos="zoom-in" data-aos-duration="1000">  <RatingIcon ratings={rating}></RatingIcon>
                    </h3>
                    <p className='spacing'><small>{comments}</small></p>
                </div>


            </div>

        </div >
    );
};

export default Review;