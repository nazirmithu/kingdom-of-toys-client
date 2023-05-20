import { useState } from "react";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";

const AllToys = () => {
    const allToys = useLoaderData();
    const location = useLocation();
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState('');
    const from = location.state?.from?.pathname || '/'
    navigate(from, { replace: true });

    // const handleInputSearch = event=>{
    //     event.preventDefault();
    //     const form = event.target;
    //     const search = form.search.value;
    //     console.log(search)
    // }


    return (
        <div>
            <div className="mt-24">
                <h2 className="mb-20 text-5xl text-center text-purple-600 font-bold mb-20'">All Toys</h2>
                <div className="form-control">
                    <div className="input-group text-center">
                        <input onChange={(e) => setSearchText(e.target.value)} type="text"
                            placeholder="Search…"
                            name="search"
                            className="input input-bordered mb-8" />
                        <button className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
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
                                            <Link >
                                                <button className="btn btn-outline btn-info">Details</button>
                                            </Link>

                                        </th>
                                    </tr>
                                </>)
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>

    );
};

export default AllToys;