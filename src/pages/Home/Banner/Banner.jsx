import cover from '../../../assets/cover.png';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-purple-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={cover} className="w-1/2 h-96 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">WELL COME <br /> KINGDOM OF TOYS</h1>
                    <p className="py-6">Welcome to our toys website, a wonderland of fun and imagination! We are passionate about bringing joy to children of all ages through a wide selection <br /> of toys and games. </p>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;