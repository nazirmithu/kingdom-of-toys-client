import React from 'react';

const Album = () => {
    return (
        <div>
            <h2 className='text-5xl font-bold text-center mt-24 text-purple-600'>Photo Gallery</h2>
            <div className='grid md:grid-cols-2 items-center p-28 space-y-8'>
                <div className="mockup-phone border-primary w-96 h-96">
                    <div className="camera"></div>
                    <div className="display">
                        <img src="https://i.ibb.co/7VkGDqL/2896369.jpg" alt="" />
                    </div>
                </div>
                <div className="mockup-phone border-primary w-96 h-96">
                    <div className="camera"></div>
                    <div className="display">
                        <img src="https://i.ibb.co/jJcS8Bp/2.jpg" alt="" />
                    </div>
                </div>
                <div className="mockup-phone border-primary w-96 h-96">
                    <div className="camera"></div>
                    <div className="display">
                        <img src="https://i.ibb.co/sKzv6Kd/3.png" alt="" />
                    </div>
                </div>
                <div className="mockup-phone border-primary w-96 h-96">
                    <div className="camera"></div>
                    <div className="display">
                        <img src="https://i.ibb.co/zstM2gf/4.png" alt="" />
                    </div>
                </div>
                <div className="mockup-phone border-primary w-96 h-96">
                    <div className="camera"></div>
                    <div className="display">
                        <img src="https://i.ibb.co/0BMcZ29/5.png" alt="" />
                    </div>
                </div>
                <div className="mockup-phone border-primary w-96 h-96">
                    <div className="camera"></div>
                    <div className="display">
                        <img src="https://i.ibb.co/CBjYwT0/6.png" alt="" />
                    </div>
                </div>
                <div className="mockup-phone border-primary w-96 h-96">
                    <div className="camera"></div>
                    <div className="display">
                        <img src="https://i.ibb.co/Gvhh9QC/7.png" alt="" />
                    </div>
                </div>
                <div className="mockup-phone border-primary w-96 h-96">
                    <div className="camera"></div>
                    <div className="display">
                        <img src="https://i.ibb.co/hf36khp/8.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Album;