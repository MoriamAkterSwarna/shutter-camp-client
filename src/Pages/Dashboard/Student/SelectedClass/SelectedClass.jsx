import React, { useEffect, useState } from 'react';
import useSelectedClasses from '../../../../hooks/useSelectedClasses';
import {  TiDeleteOutline } from 'react-icons/ti';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const SelectedClass = () => {
    const [selected, refetch] = useSelectedClasses()
    
    console.log(selected)

    const handleDelete =selectedCls  => {
      // console.log(selectedCls)
      Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#095399',
          cancelButtonColor: '#d73',
          confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
          if (result.isConfirmed) {
              fetch(`https://shutter-camp-server-nine.vercel.app/selected/${selectedCls._id}`, {
                  method: 'DELETE'
              })
                  .then(res => res.json())
                  .then(data => {
                      if (data.deletedCount > 0) {
                          refetch();
                          Swal.fire(
                              'Deleted!',
                              'Your file has been deleted.',
                              'success'
                          )
                      }
                  })
          }
      })
  }

    return (
        <div>
            <h2 className='text-center text-3xl text-blue-500 font-bold'>Selected Classes : {selected.length}</h2>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Class Name</th>
        <th>Image</th>
        <th>Price</th>
        <th>Seat</th>
        <th>Delete</th>
        <th>PAY</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
                selected.map((selectedCls, index)=> (<tr key={selectedCls._id}>
                    <th>{index + 1}</th>
                    <td>{selectedCls.cName}</td>
                    <td><img className='w-24 border-2 p-1 mask mask-parallelogram' src={selectedCls.image} alt="" /></td>
                    <td>{selectedCls.price}</td>
                    <td>{selectedCls.seat}</td>
                    <td><button onClick={()=>handleDelete(selectedCls)}><TiDeleteOutline className='text-2xl text-rose-600'></TiDeleteOutline></button></td>
                    <td> <Link to={`/dashboard/payments/${selectedCls._id}`}><button className='uppercase btn bg-teal-600 text-white px-5'>Pay</button></Link></td>
                  </tr>))
            }
      
      
    </tbody>
  </table>
</div>
            

        </div>
    );
};

export default SelectedClass;