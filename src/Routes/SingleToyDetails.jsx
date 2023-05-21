import { useLoaderData } from "react-router-dom";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';


const SingleToyDetails = () => {

    const toyDetails = useLoaderData();
    // const { toy_name, picture, price,
    //     quantity, description, rating,
    //     seller_email, seller_name
    // } = toyDetails;
    console.log(toyDetails)

    return (
        <div className="mt-28 ">
            <p className="text-purple-500 text-center text-3xl font-bold mb-28">Single Toy Details</p>
            <div className="card bg-purple-100 w-full shadow-2xl p-8">
                <figure><img className="w-full" src={toyDetails.picture} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Toy Name: {toyDetails.toy_name}</h2>
                    <p>Seller Name: {toyDetails.seller_name}</p>
                    <p>Seller Email:{toyDetails.seller_email}</p>
                    <Rating style={{ maxWidth: 150 }} value={toyDetails.rating} readOnly />
                    <p>Price: ${toyDetails.price}</p>
                    <p>Quantity: {toyDetails.quantity}</p>
                    <p>Description: {toyDetails.description}</p>
                </div>
            </div>

        </div>
    );
};

export default SingleToyDetails;