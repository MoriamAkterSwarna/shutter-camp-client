import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useSelectedClasses from '../../hooks/useSelectedClasses';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';
import { ToastContainer, toast } from "react-toastify";
const SingleClass = ({classItem}) => {
    const [disable, setDisable] = useState(false);
    const [isAdmin] =useAdmin();
    const [isInstructor] = useInstructor()
    const {user} = useContext(AuthContext)
    const [, refetch] = useSelectedClasses()
    const {_id, cName, image, instructorName,instructorEmail, price, seats, status} = classItem;
    
    const navigate = useNavigate();
    const location = useLocation();

    // Remove hardcoded cardStyle for background color
    const isFull = seats === 0;
    const handleSelect = (classItem) =>{
        // console.log(classItem);
        if( isAdmin || isInstructor){
          toast('🦄 Admin or instructor can not select class!', {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            setDisable(true);
           
        }
        
        else{
            if( user && user?.email){
                const selectedClass = {classId:_id, cName, image, instructorName,instructorEmail, price, seats, status, studentEmail: user?.email}
                // console.log(selectedClass)
                fetch('https://shutter-camp-server-nine.vercel.app/selected', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(selectedClass)
                })
                .then(res => res.json())
                .then(data => {
                    if(data.insertedId){
                        // refetch(); 
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class has been selected.',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
            else{
                Swal.fire({
                    title: 'Please login to enroll the course',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Login now!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      navigate('/login', {state: {from: location}})
                    }
                  })
            }
        }
    
        }
    
    return (
      <div
        className={`w-full max-w-md bg-white rounded-2xl shadow-lg flex flex-col transition-shadow duration-300 border border-blue-100 hover:border-blue-300 ${isFull ? 'opacity-60 grayscale' : ''}`}
      >
        <div className="w-full h-48 bg-gray-100 rounded-t-2xl flex items-center justify-center overflow-hidden">
          <img
            src={image}
            alt={cName}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-5 flex flex-col flex-1">
          <h2 className="font-bold text-lg md:text-xl text-blue-800 flex items-center gap-2">
            {cName}
            <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-fuchsia-100 text-fuchsia-600 font-semibold">NEW</span>
          </h2>
          <p className="text-gray-600 mt-1 mb-2 text-sm md:text-base">Instructor: <span className="font-medium text-blue-700">{instructorName}</span></p>
          <div className="flex justify-between items-center mb-3 mt-2">
            <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">Seat: {seats}</span>
            <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">Price: {price}</span>
          </div>
          <button
            onClick={() => handleSelect(classItem)}
            disabled={disable || isFull}
            className={`w-full bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-3xl font-bold text-white mt-auto transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed`}
          >
            Select
          </button>
        </div>
        <ToastContainer />
      </div>
    );
}

export default SingleClass;