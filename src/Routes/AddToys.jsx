import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../providers/AuthProvider";
import Swal from 'sweetalert2';

const AddToys = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = (data) => {


        fetch('https://kingdom-toys-server-nazirmithu.vercel.app/addtoys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
        console.log(data)
    }

    return (
        <div className=" bg-purple-100 p-24 mt-40 mb-40 rounded-3xl">
            <div>
                <h2 className="mb-20 text-5xl text-center text-purple-600 font-bold mb-20'">Add Toys</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input className="mb-2 input input-bordered w-1/2"
                        {...register("toy_name", { required: true })}
                        type="text"
                        placeholder="Toy Name"
                    />

                    <input className="input input-bordered w-1/2"
                        {...register("seller_name", { required: true })}
                        type="text"
                        value={user?.displayName}
                        placeholder="Seller Name" />

                    <input className="mb-2 input input-bordered w-1/2"
                        {...register("seller_email")}
                        type="email"
                        value={user?.email}
                        placeholder="Seller Email"
                    />

                    <select {...register("category")}>
                        <option value="SuperCars">Super Cars</option>
                        <option value="MiniPoliceCar">Mini Police Car</option>
                        <option value="MiniFireTruck">Mini Fire Truck</option>
                    </select>

                    <input className="input input-bordered w-1/2"
                        {...register("sub_category", { required: true })}
                        type="text"
                        placeholder="Sub Category "
                    />

                    <input className="mb-2 input input-bordered w-1/2"
                        defaultValue="" {...register("price", { required: true })}
                        type="number"
                        placeholder="Price"
                    />

                    <input className="input input-bordered w-1/2"
                        {...register("rating", { required: true })}
                        type="text"
                        placeholder="Rating"
                    />

                    <input className="mb-2 input input-bordered w-1/2"
                        {...register("quantity", { required: true })}
                        type="number"
                        placeholder="Available quantity"
                    />

                    <input className="input input-bordered w-1/2"
                        {...register("description", { required: true })}
                        type="text"
                        placeholder="Detail description"
                    />

                    <input className="input input-bordered w-1/2"
                        {...register("picture", { required: true })}
                        type="photo"
                        placeholder="Picture URL Of The Toy"
                    />

                    {errors.exampleRequired && <span>This field is required</span>}

                    <input type="submit" value="Add Toys" className="btn btn-block mt-8" />
                </form>
            </div>
        </div>
    );
};

export default AddToys;