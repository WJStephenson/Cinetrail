import React, { useEffect, useState } from 'react'
import './Slider.css'
import axios from 'axios'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'

function Slider({ baseURL, apiKey }) {

    const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;

    //store upcoming movies in state from api call when page loads
    const [upcomingMovies, setUpcomingMovies] = useState([])

    //store current image to show on slider
    const [index, setIndex] = useState(0)

    //get upcoming movie data from api when page loads
    useEffect(() => {
        console.log(imageBaseUrl)
        axios.get(`${baseURL}/movie/upcoming?api_key=${apiKey}`)
            .then(res => {
                setUpcomingMovies(res.data.results)
            })
            .catch(err => console.log(err))
    }, [])

    const sliderStyle = {
        backgroundImage: `url("${imageBaseUrl}${upcomingMovies[index]?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "60vh",
        position: "relative",
        marginTop: "70px",
    };

    const handleRight = () => {
        if (index == upcomingMovies.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    const handleLeft = () => {
        if (index == 0) {
            setIndex(upcomingMovies.length - 1)
        } else {
            setIndex(index - 1)
        }
    }

    return (
        <div style={sliderStyle}>
            <div className='slider-overlay'>
                <MdKeyboardArrowRight className='right-arrow' onClick={handleRight} />
                <MdKeyboardArrowLeft className='left-arrow' onClick={handleLeft} />
                <div className='slider-info'>
                    <h1>{upcomingMovies[index]?.title}</h1>
                    <p className='slider-description'>{upcomingMovies[index]?.overview.slice(0, 130)}</p>
                    <p className='release-date'>{upcomingMovies[index]?.release_date}</p>
                </div>
            </div>
        </div>
    )
}

export default Slider