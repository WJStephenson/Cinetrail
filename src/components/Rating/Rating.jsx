import React from "react";
import "./Rating.css";
import StarRatings from "react-star-ratings";

const Rating = ({ movieRating }) => {
  return (
    <div className="rating">
      <StarRatings
        rating={movieRating}
        numberOfStars={5}
        name="rating"
        starDimension="15px"
        starSpacing="1px"
        starRatedColor="#e50916"
        starEmptyColor="grey"
      />
    </div>
  );
};

export default Rating;
