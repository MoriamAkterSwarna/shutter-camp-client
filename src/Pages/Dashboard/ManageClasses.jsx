import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Fade, Slide } from "react-awesome-reveal";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery(["clsss"], async () => {
    const res = await fetch("https://shutter-camp-server.vercel.app/classes");
    return res.json();
  });


  const  handleMakeDeny= (clss) => {
    
    Swal.fire({
      title: "Send Feedback",
      icon: "info",
      html: '<input type="text" id="feedbackInput" placeholder="Enter your feedback" class="input bg-emerald-300 w-full max-w-xs border-error">',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: "Send",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        const feedback = document.getElementById("feedbackInput").value;
        console.log(feedback)

        axiosSecure
          .put(`/classes/${clss._id}`, { feedback })
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              Swal.fire({
                icon: "success",
                title: "Class Denied Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              refetch();
            }
          })
          .catch((error) => {
            console.error("Error sending feedback:", error);
          });
      }
    });
 
  };
  const handleMakeApprove = (clss) => {
    fetch(`https://shutter-camp-server.vercel.app/classes/${clss._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: ` approved now!!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
 
  return (
    <div className="bg-emerald-50 py-6 ml-0 px-4">
      <Slide>
        <h3 className="text-3xl font-semibold text-center text-emerald-500">
          Total Classes: {classes.length}
        </h3>
      </Slide>
      <Fade delay={1e3} cascade damping={1e-1}>
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
                <th>Approve </th>
                <th>Deny</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(classes) &&
                classes.map((clss, index) => (
                  <tr key={clss._id}>
                    <th>{index + 1}</th>
                    <th>
                      <img className="w-20" src={clss.image} alt="" />
                    </th>
                    <td>{clss.cName}</td>
                    <td>{clss.seats}</td>
                    <td>{clss.price}</td>
                    <td>{clss.status}</td>
                    <td>
                      {clss.status === "approved" ? (
                        <span className="text-emerald-500 font-semibold">
                          Approved
                        </span>
                      ) : (
                        <button
                          onClick={() => handleMakeApprove(clss)}
                          className="btn bg-emerald-400 text-white hover:bg-emerald-600"
                        >
                          Approve
                        </button>
                      )}
                    </td>

                    <td>
                      {clss.status === "denied" ? (
                        <span className="text-emerald-500 font-semibold">
                          Denied
                        </span>
                      ) : (
                        <button
                          onClick={() => handleMakeDeny(clss)}
                          className="btn bg-emerald-400 text-white hover:bg-emerald-600"
                        >
                          Deny
                        </button>
                      )}
                    </td>

                   
                  </tr>
                ))}

              {Array.isArray(classes) &&
                classes.map((cls, index) => {
                  <tr key={cls._id}>
                    <th>{index + 1}</th>
                    <td>{cls.cName}</td>
                    <td>{cls.price}</td>
                  </tr>;
                })}
            </tbody>
          </table>
        </div>
      </Fade>
    </div>
  );
};

export default ManageClasses;
