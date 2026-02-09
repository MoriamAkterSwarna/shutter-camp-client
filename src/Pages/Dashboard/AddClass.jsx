import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Fade, Slide } from "react-awesome-reveal";
const image_token = import.meta.env.VITE_Image_Upload_token;

const AddClass = () => {
  console.log(image_token)
  const { user } = useContext(AuthContext);
  // console.log({user})
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_token}`;
  console.log(img_hosting_url);

  const onSubmit = (data) => {
    console.log(data);
    console.log(data.image[0]);

    const formData = new FormData();
    formData.append("image", data.image[0]);
    console.log(formData);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData
    })
      .then((res) => res.json())
      .then((imgResponse) => {console.log(imgResponse)
        if(imgResponse.success){
          const imgURL = imgResponse.data.display_url;
          console.log(imgURL)
          const {cName, price,instructorName,instructorEmail, seats, status} = data;
          const newClasses = {cName,image:imgURL,instructorName,instructorEmail,seats:parseInt(seats), price: parseInt(price), status}
          console.log(newClasses)
          axiosSecure.post('/classes', newClasses)
          .then(data => {
              console.log('after posting new menu item', data.data)
              if(data.data.insertedId){
          //         reset();
                  Swal.fire({
                      position: 'top-end',
                      icon: 'success',
                      title: 'Item added successfully',
                      showConfirmButton: false,
                      timer: 1500
                    })
              }
          })
      }
    }
      );
  };
  return (
    <div className="my-10">
      <Slide>
          <h3 className="text-3xl font-semibold text-center text-blue-500 mb-2"> Add a Class: </h3>
      </Slide>

      <Fade delay={1e3} cascade damping={1e-1}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 bg-blue-50 p-8 gap-6"
      >
        <div className="form-control w-full mb-4 ml-4">
          <label className="label">
            <span className="label-text font-semibold">Class Name</span>
          </label>
          <input
            type="text"
            placeholder="Class Name"
            {...register("cName", { required: true })}
            className="input input-bordered w-full "
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Class Image</span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full "
          />
        </div>

        <div className="form-control w-full ml-4">
          <label className="label">
            <span className="label-text font-semibold">Instructor Name</span>
          </label>
          <input
            type="text"
            {...register("instructorName", { required: true, readOnly: true })}
            className="input input-bordered w-full "
            defaultValue={user?.displayName}
          />
        </div>
        <div className="form-control w-full ml-4">
          <label className="label">
            <span className="label-text font-semibold">Instructor Email</span>
          </label>
          <input
            type="email"
            {...register("instructorEmail", { required: true, readOnly: true })}
            className="input input-bordered w-full "
            defaultValue={user?.email}
          />
        </div>
        <div className="form-control w-full ml-4">
          <label className="label">
            <span className="label-text font-semibold">Available Seats</span>
          </label>
          <input
            type="number"
            {...register("seats", { required: true })}
            placeholder="Available Seats"
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full ml-4">
          <label className="label">
            <span className="label-text font-semibold">Price</span>
          </label>
          <input
            type="number"
            {...register("price", { required: true })}
            placeholder="Price"
            className="input input-bordered w-full "
          />
        </div>

        <div>
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Status</span>
            </label>
            <input
              type="text"
              {...register("status", { required: true })}
              defaultValue="pending"
              className="input input-bordered w-full "
            />
          </div>
          <div>
            <input
              className="btn bg-blue-500 mt-4 ml-20"
              type="submit"
              value="Add class"
            />
          </div>
        </div>
      </form>
      </Fade>
      
    </div>
  );
};

export default AddClass;
