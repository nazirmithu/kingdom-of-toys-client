import React from 'react';

const OurServices = () => {
    return (
        <div className='mt-28 drop-shadow-2xl'>
            <p className='text-lg text-rose-400 font-semibold text-center'>THE PRODUCTS</p>
            <h2 className='mb-20 text-3xl font-bold text-center text-purple-500'>Our Services</h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 flex items-center p-10'>
                <div className='space-y-4'>
                    <div className='flex  items-center gap-2'>
                        <div><img className='w-20' src="https://i.ibb.co/2MYvxgJ/download.png" alt="" />
                        </div>
                        <div>
                            <p>Worldwide Delivery</p>
                            <p>On order over $150-7 days</p>
                        </div>
                    </div>
                    <div className='flex  items-center gap-2'>
                        <div><img className='w-20' src="https://i.ibb.co/4YHRMxr/Screenshot-2.jpg" />
                        </div>
                        <div>
                            <p>Great Saving</p>
                            <p>How to save money?
                            </p>
                        </div>
                    </div>
                    <div className='flex  items-center gap-2'>
                        <div><img className='w-20' src="https://i.ibb.co/tpMysxj/Screenshot-4.png" alt="" />
                        </div>
                        <div>
                            <p>Gift Voucher</p>
                            <p>Good Gifts for Good Relations!</p>
                        </div>
                    </div>
                </div>
                <div><img src="https://i.ibb.co/31jwyjW/servicecenterimg.png" alt="" /></div>
                <div className='ml-20 space-y-4'>
                    <div className='flex  items-center gap-2'>
                        <div><img className='w-20' src="https://i.ibb.co/HByVY6g/Screenshot-3.jpg" alt="" />
                        </div>
                        <div>
                            <p>Money Back Guarantee</p>
                            <p>Send within 30 days
                            </p>
                        </div>
                    </div>
                    <div className='flex  items-center gap-2'>
                        <div><img className='w-20' src="https://i.ibb.co/MVHwyp0/Screenshot-4.png" alt="" />
                        </div>
                        <div>
                            <p>24X7 Support</p>
                            <p>Call us 24/7 at 000-123-456
                            </p>
                        </div>
                    </div>
                    <div className='flex  items-center gap-2'>
                        <div><img className='w-20' src="https://i.ibb.co/tqyDB1D/Screenshot-1-1.png" alt="" />
                        </div>
                        <div>
                            <p>Shopping Guide</p>
                            <p>Shopping guide here</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default OurServices;