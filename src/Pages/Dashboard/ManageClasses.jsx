import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Fade, Slide } from "react-awesome-reveal";
import { Controller, useForm } from "react-hook-form";

const ManageClasses = () => {
  const { control, handleSubmit } = useForm();
  const { data: classes = [], refetch } = useQuery(["clsss"], async () => {
    const res = await fetch("http://localhost:5000/classes");
    return res.json();
  });
  console.log(classes);

  const onSubmit= (data) =>{
    console.log(data)
  }

  const handleMakeApprove = (clss) => {
    fetch(`http://localhost:5000/classes/${clss._id}`, {
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
          {" "}
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
                      {clss.status === "approve" ? (
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
                      {
                        clss.status === "deny" ? (
                          <span className="text-emerald-500 font-semibold">
                            Denied
                          </span>
                        ) : (
                          <label
                            htmlFor="my_modal_6"
                            className="btn bg-emerald-400 text-white hover:bg-emerald-600"
                          >
                            Deny
                          </label>
                        )
                      }
                    </td>

                    <input
                      type="checkbox"
                      id="my_modal_6"
                      className="modal-toggle"
                    />
                    <div className="modal">
                      <div className="modal-box">
                        <form 
                        onSubmit={handleSubmit(onSubmit)}
                        >
                          <Controller 
                            name="myTextarea" 
                            control={control}
                            defaultValue="" 
                            render={({ field }) => (
                              <textarea {...field} className="border w-full h-32"/> 
                            )}
                          />
                          
                        </form>
                        <div className="modal-action">
                          <label type="submit" 
                          htmlFor="my_modal_6"
                           className="btn bg-emerald-500 hover:bg-emerald-700">
                            Close!
                          </label>
                        </div>
                      </div>
                    </div>
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
