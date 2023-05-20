
import Album from '../Album';
import Banner from '../Banner/Banner';
import Tabs from '../Tabs/ReactTabs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Album></Album>
            <Tabs></Tabs>
            <h2>this is home</h2>
        </div>
    );
};

export default Home;