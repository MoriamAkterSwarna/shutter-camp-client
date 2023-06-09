import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useSelectedClasses from '../../hooks/useSelectedClasses';

const SingleClass = ({classItem}) => {
    const {user} = useContext(AuthContext)
    const [selected, refetch] = useSelectedClasses()
    const {_id, cName, image, instructorName,instructorEmail, price, seats, status} = classItem;
    
    const navigate = useNavigate();
    const location = useLocation();

    const handleSelect = (classItem) =>{
        // console.log(classItem);
        // console.log(selected)
        if( user && user?.email){
            const selectedClass = {classId:_id, cName, image, instructorName,instructorEmail, price, seats, status, studentEmail: user?.email}
            console.log(selectedClass)
            fetch('http://localhost:5000/selected', {
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
    
    return (
        <div className="card w-96 bg-base-100 shadow-lg">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {cName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>Instructor: {instructorName}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline bg-teal-500">Seat: {seats}</div> 
      <div className="badge badge-outline ">Price: {price}</div>
    </div>
    <div className='mx-auto'>
        <button onClick={()=>handleSelect(classItem)} className=' bg-emerald-500 px-6 py-3 rounded-3xl font-bold text-white mt-3'>Select</button>
    </div>
  </div>
</div>
    );
    }

export default SingleClass;