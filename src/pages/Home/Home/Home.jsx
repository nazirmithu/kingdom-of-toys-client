
import Album from '../Album';
import Banner from '../Banner/Banner';
import OurServices from '../OurServices/OurServices';
import Tabs from '../Tabs/ReactTabs';
import OurBlog from './OurBlog/OurBlog';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Album></Album>
            <Tabs></Tabs>
            <OurServices></OurServices>
            <OurBlog></OurBlog>
            <h2>this is home</h2>
        </div>
    );
};

export default Home;