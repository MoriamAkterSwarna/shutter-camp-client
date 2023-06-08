
import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const image_token = import.meta.env.VITE_imageHostingKey;
// console.log(image_token)
const AddClass = () => {

    const {user} = useContext(AuthContext);
    // console.log({user})
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_token}`
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('Uploaded Image', data.image[0])
        console.log(formData)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 md:grid-cols-2 bg-emerald-50 p-8 gap-6'>
                <div className="form-control w-full mb-4 ml-4">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name</span>
                    </label>
                    <input type="text" placeholder="Class Name"
                        {...register("className", { required: true})}
                        className="input input-bordered w-full " />
                </div>
              
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Class Image</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
                    
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Name</span>
                        </label>
                        <input type="text" {...register("instructorName", { required: true, readOnly: true })}  className="input input-bordered w-full " defaultValue={user?.displayName} />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Email</span>
                        </label>
                        <input type="email" {...register("instructorEmail", { required: true , readOnly: true })}  className="input input-bordered w-full " defaultValue={user?.email} />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Available Seats</span>
                        </label>
                        <input type="number" {...register("seats", { required: true })} placeholder="Available Seats" className="input input-bordered w-full "  />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Price</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full "  />
                    </div>
                
                
                <div>
                <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Status</span>
                        </label>
                        <input type="text" {...register("status", { required: true })} defaultValue="pending" className="input input-bordered w-full "  />
                    </div>
                <div>
                <input className="btn bg-emerald-500 mt-4 ml-20" type="submit" value="Add class" />
                </div>
                </div>
            </form>
        </div>
    );
};

export default AddClass;