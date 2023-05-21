import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const UpdateMyToys = () => {

    const { user, _id } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        fetch(`https://kingdom-of-toys-server.vercel.app/alltoys/:${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Information Updated Successfully',
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
                        defaultValue="" {...register("price", { required: true })}
                        type="number"
                        placeholder="Price"
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
                    
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input type="submit" value="Update Toys" className="btn btn-block mt-8" />
                </form>
            </div>
        </div>
    );
};

export default UpdateMyToys;