import React, { useEffect, useState } from 'react';
import useSelectedClasses from '../../../../hooks/useSelectedClasses';
import {  TiDeleteOutline } from 'react-icons/ti';


const SelectedClass = () => {
    const [selected, refetch] = useSelectedClasses()
    
    console.log(selected)
    return (
        <div>
            <h2 className='text-center text-3xl text-emerald-500 font-bold'>Selected Classes : {selected.length}</h2>

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
                    <td><button><TiDeleteOutline className='text-2xl text-rose-600'></TiDeleteOutline></button></td>
                    <td ><button className='uppercase btn bg-teal-600 text-white px-5'>Pay</button></td>
                  </tr>))
            }
      
      
    </tbody>
  </table>
</div>
            

        </div>
    );
};

export default SelectedClass;