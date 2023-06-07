
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../assets/bannerImage/30857.jpg'
import banner2 from '../../../assets/bannerImage/camera-photographic-with-smartphone-devices-generative-ai.jpg'
import banner3 from '../../../assets/bannerImage/portrait-smiling-girl-looking-camera-against-blue-backdrop.jpg'
import banner4 from '../../../assets/bannerImage/preschooler-boy-taking-pictures-with-professional-photo-camera-isolated-grey-background.jpg'
import banner5 from '../../../assets/bannerImage/side-view-girl-with-camera.jpg'
import './Slider.css'
const Slider = () => {
    return (
        <Carousel className="carousel-container">
                <div className="carousel-slide">
                    <img className='carousel-image' src={banner1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div className="carousel-slide">
                    <img className='carousel-image' src={banner2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div className="carousel-slide">
                    <img className='carousel-image' src={banner3} />
                    <p className="legend">Legend 3</p>
                </div>
                <div className="carousel-slide">
                    <img v src={banner4} />
                    <p className="legend">Legend 3</p>
                </div>
                <div className="carousel-slide">
                    <img className='carousel-image' src={banner5} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    );
};

export default Slider;