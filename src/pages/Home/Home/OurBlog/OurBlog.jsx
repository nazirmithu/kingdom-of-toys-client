

const OurBlog = () => {
    return (
        <div className='mt-28'>
            <p className='font-semibold text-red-400 text-center mb-2'>OUR STORY</p>
            <h2 className='text-3xl mb-28 font-bold text-purple-500 text-center '>From Our Blog</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 text-center'>
                <div className='mr-8 border shadow-md rounded-lg p-4' data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <img className='w-96' src="https://i.ibb.co/Y83gPp7/81z4jpg80-RL.jpg" alt="" />
                    <h3 className='mt-4 mb-4 font-semibold'>Upon Of Seasons Earth Dominion</h3>
                    <p>As you step into the toy shop, your senses are instantly greeted with a symphony of colors, sounds, and scents. Vibrant displays of toys, stacked from floor to ceiling, create a kaleidoscope of hues that ignite excitement within you. </p>
                    <button className="mt-4 btn btn-outline btn-success gap-2">
                        READ MORE
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </button>
                </div>
                <div className='mr-8 border shadow-md rounded-lg p-4' data-aos="fade-up"
                    data-aos-duration="3000">
                    <h3 className='mb-4 font-semibold'>Christmas Sale Is Here</h3>
                    <p>It's that wonderful time of the year again, and we're thrilled to announce that our highly anticipated Christmas sale is finally here! Get ready to immerse yourself in the festive spirit as we bring you amazing discounts, special offers, and a wide array of delightful gifts to make your holiday season merry and bright. </p>
                    <button className="mt-4 mb-8 btn btn-outline btn-success gap-2">
                        READ MORE
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </button>
                    <img className='w-96' src="https://i.ibb.co/mvwnCs8/giant-134846.jpg" alt="" />
                </div>
                <div className='border shadow-md rounded-lg p-4' data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <img className='w-96' src="https://i.ibb.co/XtMGtBd/3.jpg" alt="" />
                    <h3 className='mb-4 font-semibold'>Upon Of Seasons Earth Dominion</h3>
                    <p>As you step into the toy shop, your senses are instantly greeted with a symphony of colors, sounds, and scents. Vibrant displays of toys, stacked from floor to ceiling, create a kaleidoscope of hues that ignite excitement within you. </p>
                    <button className="mt-4 btn btn-outline btn-success gap-2">
                        READ MORE
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OurBlog;