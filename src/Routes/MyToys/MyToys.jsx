import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyToys = () => {
    const { user, _id } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);

    useEffect(() => {
        fetch(`https://kingdom-toys-server-nazirmithu.vercel.app/mytoys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })
    }, [user])

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://kingdom-toys-server-nazirmithu.vercel.app/mytoys/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your toy has been deleted.',
                                'success'
                            )
                            const remaining = myToys.filter(myToy => myToy._id !== _id)
                            setMyToys(remaining);
                        }
                    })
            }
        })
    }

    return (
        <div className="mt-24">
            <h2 className="mb-20 text-5xl text-center text-purple-600 font-bold mb-20'">My Toys</h2>
            <div className="btn-group btn-group-vertical mb-20 ml-96 pl-36 md:btn-group-horizontal">
  <button className="btn btn-active">Button</button>
  <button className="btn">Button</button>

</div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead className="text-center">
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Picture</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            myToys.map((myToy) => <>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={myToy.picture} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{myToy.toy_name}</td>
                                    <td>{myToy.sub_category}</td>
                                    <td>{myToy.price}</td>
                                    <td>{myToy.quantity}</td>
                                    <th>
                                        <Link to={`/updatetoys/${myToy._id}`}>
                                            <button className="btn btn-outline btn-info">Update</button>
                                        </Link>
                                    </th>
                                    <th>
                                        <button onClick={() => handleDelete(myToy._id)} className="btn btn-outline btn-info">Delete</button>
                                    </th>
                                </tr>
                            </>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;