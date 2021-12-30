import React from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const RatingIcon = ({ ratings }) => {
    let ratingNumber;
    if (+ratings > 5) {
        ratingNumber = 5
    }
    else {
        ratingNumber = +ratings
    }

    const ratingFloor = Math.floor(ratingNumber);
    const ratingRound = Math.round(ratingNumber);

    const halfStar = ratingRound - ratingFloor;
    const star = 5 - ratingRound;

    return (
        <div className="d-flex align-items-center justify-center gap-1 mx-5 mt-1">
            {[...Array(ratingFloor)].map((_, i) => (
                <BsStarFill key={i} />
            ))}

            {[...Array(halfStar)].map((_, i) => (
                <BsStarHalf key={i} />
            ))}

            {[...Array(star)].map((_, i) => (
                <BsStar key={i} />
            ))}
        </div>
    );
};

export default RatingIcon;

