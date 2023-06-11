import React from 'react';
import Slider from './Slider';
import PopularClasses from './PopularClasses/PopularClasses';
import PopularInstructor from './PopularInstructor/PopularInstructor';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
        </div>
    );
};

export default Home;