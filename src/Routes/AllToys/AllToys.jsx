import { useLoaderData } from "react-router-dom";

const AllToys = () => {
    const allToys = useLoaderData();

    return (
        <div className="mt-24">
            <h2 className="mb-20 text-5xl text-center text-purple-600 font-bold mb-20'">All Toys</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
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
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            allToys.map((allToy) => <>
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
                                                    <img src={allToy.picture} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {allToy.toy_name}
                                    </td>
                                    <td>{allToy.sub_category}</td>
                                    <td>{allToy.price}</td>
                                    <td>{allToy.quantity}</td>
                                    <th>
                                        <button className="btn btn-outline btn-info">Details</button>
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

export default AllToys;