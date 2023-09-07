import React, { useEffect, useState } from 'react'
import './Homepage.css'
import Slider from '../../components/Slider/Slider'
import axios from 'axios'

function Homepage({ apiKey, baseURL }) {

    const [popularMovies, setPopularMovies] = useState([])
    const [topRatedMovies, setTopRatedMovies] = useState([])

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const popularMoviesResponse = await axios.get(`${baseURL}/movie/popular?api_key=${apiKey}`)
                const topRatedMoviesResponse = await axios.get(`${baseURL}/movie/top_rated?api_key=${apiKey}`)
                setPopularMovies(popularMoviesResponse.data.results)
                setTopRatedMovies(topRatedMoviesResponse.data.results)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchMovie();
    }, [])

    return (
        <div className='homepage-container'>
            <Slider apiKey={apiKey} baseURL={baseURL} />
            <div className='movies-wrapper'>
                <div className='popular-container'>
                    <h3 className='popular-title'>Popular Movies</h3>
                    <div className='popular-cards-wrapper'>
                        {popularMovies.map(movie => {
                            return <p key={movie?.id}>{movie?.title}</p>
                        })}
                    </div>
                </div>
                <div className="top-rated-container">
                    <h3 className="top-rated-movies">Top Rated Movies</h3>
                    <div className="top-rated-cards-wrapper">
                        {
                            topRatedMovies.map(movie => {
                                return <p key={movie?.id}>{movie?.title}</p>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage