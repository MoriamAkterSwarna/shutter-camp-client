import React from 'react';
import Slider from './Slider';
import PopularClasses from './PopularClasses/PopularClasses';
import PopularInstructor from './PopularInstructor/PopularInstructor';
import Feedback from './Feedback/Feedback';



const Home = () => {
    

    return (
        <div >
            
            <Slider></Slider>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;