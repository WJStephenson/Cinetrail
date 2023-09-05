import React, { useEffect, useState } from 'react'
import './Homepage.css'
import Slider from '../../components/Slider/Slider'

function Homepage({ apiKey, baseURL }) {
    

    return (
        <>
            <Slider apiKey={apiKey} baseURL={baseURL}/>
        </>
    )
}

export default Homepage