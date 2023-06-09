import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const ManageClasses = () => {
    const { data: classes = [], refetch } = useQuery(["clsss"], async () => {
        const res = await fetch("http://localhost:5000/classes");
        return res.json();
      });
      console.log(classes)
      const handleMakePending = clss =>{
        fetch(`http://localhost:5000//classes/approve/${clss._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${user.name} is an admin now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
      
    return (
        <div className="bg-emerald-50 py-6 ml-0">
      <h3 className="text-3xl font-semibold"> Total Classes: {classes.length}</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Image</th>
              <th>Class Name: </th>
              <th>Seats</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
          {Array.isArray(classes) && classes.map((clss, index) => (
              <tr key={clss._id}>
                <th>{index + 1}</th>
                <th><img className="w-20" src={clss.image} alt="" /></th>
                <td>{clss.cName}</td>
                <td>{clss.seats}</td>
                <td>{clss.price}</td>
                <td>{clss.status === "pending" ? <span className=" text-emerald-500 font-semibold">Pending</span> : <button
                    onClick={() => handleMakePending(clss)}
                    className="btn bg-emerald-400 text-white hover:bg-emerald-600"
                  >
                    Pending
                  </button>}
                  
                  </td>
                  <td>{clss.role === "approve" ? <span className="btn text-emerald-500 font-semibold">Approve</span> : <button
                    onClick={() => handleMakeApprove(clss)}
                    className="btn bg-emerald-400 text-white hover:bg-emerald-600"
                    
                  >
                    Approve
                  </button>}</td>
                <td>{clss.role === "deny" ? <span className="btn text-emerald-500 font-semibold">Deny</span> : <button
                    onClick={() => handleMakeDeny(clss)}
                    className="btn bg-emerald-400 text-white hover:bg-emerald-600"
                  >
                    Deny
                    
                  </button>}</td>
                
                
              </tr>
            ))}

            {
               Array.isArray(classes) && classes.map((cls , index)=> {
                    <tr key={cls._id}>
                       <th>{index + 1}</th>
                       <td>{cls.cName}</td>
                       <td>{cls.price}</td>
                    </tr>
                })
            }
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default ManageClasses;