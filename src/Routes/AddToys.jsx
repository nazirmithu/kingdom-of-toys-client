
const AddToys = () => {

    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const sellername = form.sellername.value;
        const selleremail = form.selleremail.value;
        const subcategory = form.subcategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const newToy = {name, sellername, selleremail, subcategory, price, rating, quantity, description, photo}

        console.log(newToy)

    }


    return (
        <div className=' bg-purple-100 p-24 mt-40 mb-40 rounded-3xl'>
            <h2 className='text-5xl text-center text-purple-600 font-bold mb-20'>Add Toys</h2>
            <form onSubmit={handleAddToy}>
                {/* from row */}
                <div className='md:flex'>
                    <div className="form-control md:w-1/2 mr-8">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' placeholder="Toy Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='sellername' placeholder="Seller Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* from row */}
                <div className='md:flex'>
                    <div className="form-control md:w-1/2 mr-8">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='selleremail' placeholder="Seller Email" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Sub Category </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='subcategory ' placeholder="Sub Category " className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* from row */}
                <div className='md:flex'>
                    <div className="form-control md:w-1/2 mr-8">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='price' placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='rating' placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* from row */}
                <div className='md:flex'>
                    <div className="form-control md:w-1/2 mr-8">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='quantity' placeholder="Available quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='description' placeholder="Detail description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className=''>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Picture URL Of The Toy</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='photo' placeholder="Picture URL Of The Toy" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
            <input type="submit" value="Add Toys" className="btn btn-block mt-8" />
            </form>
        </div>
    );
};

export default AddToys;