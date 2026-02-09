import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { BsFillChatLeftQuoteFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import img1 from "../../../../assets/feedbackimg/img1.jpg";
import img2 from "../../../../assets/feedbackimg/img2.jpg";
import img3 from "../../../../assets/feedbackimg/img3.jpg";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Feedback = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const testimonials = [
    {
      image: img1,
      name: "Parker Robert",
      role: "Professional Photographer",
      feedback: "The photography course at the summer camp was fantastic! The instructor was knowledgeable and passionate, and they provided clear explanations and hands-on practice. I learned so much about composition, lighting, and post-processing techniques. It was a valuable experience that improved my photography skills."
    },
    {
      image: img2,
      name: "Sarah Johnson",
      role: "Amateur Photographer",
      feedback: "An incredible learning experience! The instructors are truly experts in their field. The course structure is well-organized, and the practical assignments helped me apply what I learned immediately. I highly recommend this to anyone serious about photography."
    },
    {
      image: img3,
      name: "Michael Chen",
      role: "Photography Enthusiast",
      feedback: "This course exceeded my expectations! The combination of theory and practical work was perfect. The feedback from instructors was invaluable, and I've seen tremendous improvement in my photography skills. Worth every penny!"
    }
  ];

  return (
    <div className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 text-xl" />
            ))}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our Students <span className="text-blue-500">Say</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our successful students about their transformative learning experience
          </p>
        </div>
      </div>

      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={6000}
        className="h-[600px] md:h-[500px]"
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white mx-4 md:mx-auto max-w-6xl rounded-3xl shadow-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row items-center h-full">
              {/* Image Section */}
              <div className="w-full md:w-1/2 h-64 md:h-full">
                <img 
                  className="w-full h-full object-cover" 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                />
              </div>
              
              {/* Content Section */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <BsFillChatLeftQuoteFill className="text-blue-500 text-5xl mb-6" />
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-xl" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    "{testimonial.feedback}"
                  </p>
                  
                  <div className="border-t-2 border-blue-500 pt-6 inline-block">
                    <p className="text-xl font-bold text-gray-800">{testimonial.name}</p>
                    <p className="text-blue-600 font-medium">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </AutoplaySlider>
    </div>
  );
};

export default Feedback;
