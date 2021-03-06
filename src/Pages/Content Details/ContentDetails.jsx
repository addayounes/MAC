import React, { useEffect } from 'react'
import Slideshow from '../../Components/Slideshow/Slideshow'
import "./ContentDetails.css"

const ContentDetails = ({ SliderData, ContentDetails }) => {

    useEffect(() => {window.scrollTo(0,0)})

    return (
        <div className="ContentDetails">
            { ContentDetails.slideshow && <Slideshow SliderData={SliderData} /> }
            <div className="content__text">
                <h2 className="content__heading">{ContentDetails.heading}</h2>
                <p className="content__description">{ContentDetails.description}</p>
            </div>
        </div>
    )
}

export default ContentDetails
