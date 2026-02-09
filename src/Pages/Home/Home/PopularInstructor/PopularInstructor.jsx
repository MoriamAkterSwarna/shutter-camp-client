import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import SinglePopularInstructor from "./SinglePopularInstructor";

const PopularInstructor = () => { 
    const [popularInstructor, setPopularInstructor] = useState([])
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        fetch('https://shutter-camp-server-nine.vercel.app/popularinstructor')
        .then(res => {
            if (!res.ok) {
                throw new Error('Server error');
            }
            return res.json();
        })
        .then(data => {
            console.log("Instructors Data:", data);
            setPopularInstructor(data)
            setLoading(false);
        })
        .catch(error => {
            console.error("Error fetching instructors:", error);
            console.log("Using mock data instead...");
            
            // Mock data for development when server is down
            const mockData = [
                {
                    _id: "1",
                    name: "Alex Rodriguez",
                    email: "alex@shuttercamp.com",
                    photoURL: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500",
                    students: 450
                },
                {
                    _id: "2",
                    name: "Emma Thompson",
                    email: "emma@shuttercamp.com",
                    photoURL: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
                    students: 385
                },
                {
                    _id: "3",
                    name: "David Chen",
                    email: "david@shuttercamp.com",
                    photoURL: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
                    students: 320
                }
            ];
            
            setPopularInstructor(mockData);
            setLoading(false);
        })
    }, [])
    
  return (
    <div className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FaChalkboardTeacher className="text-blue-500 text-3xl" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Meet Our <span className="text-blue-500">Expert Instructors</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn from industry professionals with years of experience in photography
          </p>
        </div>
        
        {loading ? (
          <div className="text-center py-10">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
            <p className="mt-4 text-gray-600">Loading instructors...</p>
          </div>
        ) : popularInstructor.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-600">No instructors found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                popularInstructor.map((popular, index) => <SinglePopularInstructor key={popular._id} popular={popular} index={index}></SinglePopularInstructor>)
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularInstructor;
