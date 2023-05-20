import { useLoaderData } from "react-router-dom";


const SingleToyDetails = () => {

    const toyDetails = useLoaderData();
    // const { toy_name, picture, price,
    //     quantity, description, rating,
    //     seller_email, seller_name
    // } = toyDetails;
    console.log(toyDetails)

    return (
        <div>
            <h2>single toy details page: {toyDetails.length}</h2>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={toyDetails.picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{toyDetails.toy_name}</h2>
                    <p>{toyDetails.seller_name}</p>
                    <p>{toyDetails.seller_email}</p>
                    <p>{toyDetails.rating}</p>
                    <p>{toyDetails.quantity}</p>
                    <p>{toyDetails.description}</p>
                </div>
            </div>

        </div>
    );
};

export default SingleToyDetails;