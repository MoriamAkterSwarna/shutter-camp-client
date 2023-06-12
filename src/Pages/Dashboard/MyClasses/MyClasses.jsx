import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Bounce, Slide } from "react-awesome-reveal";
import { FcFeedback } from 'react-icons/fc';
import { GrDocumentUpdate } from 'react-icons/gr';
const MyClasses = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(user?.email);
        const filteredClass = data.filter(
          (filtered) => filtered.instructorEmail === user?.email
        );
        setClasses(filteredClass);
      });
  }, []);
  console.log(classes);
            return (
                    <div>
                    <Slide>
                    <h3 className="text-3xl font-semibold text-emerald-500 text-center" > Total Classes: {classes.length}</h3>
                    </Slide>
                    <Bounce delay={1e3} cascade damping={1e-1}>
      <div className="overflow-x-auto bg-emerald-100 p-6 mt-4 rounded-lg border-2">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Status</th>
              <th>Enrolled Students</th>
              <th>Feedback</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {Array.isArray(classes) && classes.map((mycls, index) => (
              <tr key={mycls._id}>
                <th>{index + 1}</th>
                <td>{mycls.cName}</td>
                <td><img className="w-24  mask mask-squircle" src={mycls.image} alt="" /></td>
                <td>{mycls.price}</td>
                <td>{mycls.status}</td>
                <td>{mycls.enrolled ? mycls.enrolled : 0}</td>
                <td><button className="bg-orange-300 hover:bg-orange-500 px-2 py-1 rounded-sm"><FcFeedback className="text-2xl"></FcFeedback></button></td>
                <td><button className="bg-orange-400 hover:bg-orange-600 px-3 py-2 rounded-sm"><GrDocumentUpdate className="text-xl"></GrDocumentUpdate></button></td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </Bounce>
                </div>
  );
};

export default MyClasses;
