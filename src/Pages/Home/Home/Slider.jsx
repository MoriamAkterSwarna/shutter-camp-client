
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import banner2 from '../../../assets/bannerImage/camera-photographic-with-smartphone-devices-generative-ai.jpg'
import banner3 from '../../../assets/bannerImage/portrait-smiling-girl-looking-camera-against-blue-backdrop.jpg'
import banner4 from '../../../assets/bannerImage/preschooler-boy-taking-pictures-with-professional-photo-camera-isolated-grey-background.jpg'
import banner5 from '../../../assets/bannerImage/side-view-girl-with-camera.jpg'
import './Slider.css'
const Slider = () => {
    return (
        <AwesomeSlider animation="cubeAnimation" className='h-[500px] mb-20'>
         
                <div className='relative'>
                    <img  src={banner5} />
                    <p className="text-emerald-500 absolute top-36 left-24 w-96 text-4xl bg-emerald-100 p-6">Unleash Your Inner Photographer: Join our Summer Camp Photography Classes</p>
                </div>
                <div >
                    <img className='carousel-image' src={banner2} />
                    <p className="text-emerald-500 absolute top-36 left-24 w-96 text-4xl bg-emerald-100 p-6">Unleash Your Inner Photographer: Join our Summer Camp Photography Classes</p>
                </div>
                <div >
                    <img className='carousel-image' src={banner3} />
                    <p className="text-emerald-500 absolute top-36 left-24 w-96 text-4xl bg-emerald-100 p-6">Unleash Your Inner Photographer: Join our Summer Camp Photography Classes</p>
                </div>
                <div >
                    <img v src={banner4} />
                    <p className="text-emerald-500 absolute top-36 left-24 w-96 text-4xl bg-emerald-100 p-6">Unleash Your Inner Photographer: Join our Summer Camp Photography Classes</p>
                </div>
                
            
        </AwesomeSlider>
    );
};

export default Slider;