import React from 'react'
import './Rating.css'
import StarRatings from 'react-star-ratings'

function Rating({ movieRating }) {
    return (
        <div>
            <StarRatings 
                rating={movieRating}
                starRatedColor={'var(--red)'}
                starEmptyColor='grey'
                numberOfStars={5}
                name='rating'
                starDimension='15px'
                starSpacing='1px'
            />
        </div>
    )
}

export default Rating