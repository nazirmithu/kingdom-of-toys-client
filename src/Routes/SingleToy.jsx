import { useLoaderData } from "react-router-dom";
import SingleToyDetails from "./SingleToyDetails";

const SingleToy = () => {

    const toyDetails = useLoaderData();

    return (
        <div>
            <h2 className='text-3xl text-center font-bold mt-10 mb-10'>Toy Details</h2>

            <div className="grid grid-cols-2 gap-8">
                {
                    toyDetails?.map(toyDetail => <SingleToyDetails
                        key={toyDetail._id}
                        toyDetail={toyDetail}
                    ></SingleToyDetails> )
                }
            </div>
        </div>
    );
};

export default SingleToy;