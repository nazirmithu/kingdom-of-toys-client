import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import toast, { Toaster } from 'react-hot-toast';
import 'react-tabs/style/react-tabs.css';

const ReactTabs = () => {
    const [toggleState, setToggleState] = useState([]);

    useEffect(() => {
        fetch('https://kingdom-of-toys-server.vercel.app/reacttabs')
            .then(res => res.json())
            .then(data => {
                setToggleState(data)
                console.log(data)
            })
    }, [])
    console.log(toggleState)

    const handelViewDetails = () => {
        toast.success('You have to log in first to view details!');
    }
    return (
        <Tabs>
                <TabList>
                    <Tab>Tab 1</Tab>
                    <Tab>Tab 2</Tab>
                    <Tab>Tab 3</Tab>
                </TabList>
                {

                    toggleState.map(toggle => <>
                        <TabPanel>
                            <div className='flex gap-8'>
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <figure><img src={toggle.picture} alt="Car" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{toggle.
                                            sub_category}</h2>
                                        <p>{toggle.price}</p>
                                        <p>{toggle.rating}</p>
                                        <div className="card-actions">
                                            <Link to={`/toy/${toggle._id}`}>
                                                <button onClick={handelViewDetails} className="btn btn-primary">View Details</button>
                                            </Link>
                                            <Toaster />
                                        </div>
                                    </div>
                                </div>
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <figure><img src={toggle.picture} alt="Car" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{toggle.
                                            sub_category}</h2>
                                        <p>{toggle.price}</p>
                                        <p>{toggle.rating}</p>
                                        <Link to={`/toy/${toggle._id}`}>
                                            <button className="btn btn-primary">View Details</button>
                                        </Link>
                                        <Toaster />
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='flex gap-8'>
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <figure><img src={toggle.picture} alt="Car" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{toggle.sub_category}</h2>
                                        <p>{toggle.price}</p>
                                        <p>{toggle.rating}</p>
                                        <Link to={`/toy/${toggle._id}`}>
                                            <button className="btn btn-primary">View Details</button>
                                        </Link>
                                        <Toaster />
                                    </div>
                                </div>
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <figure><img src={toggle.picture} alt="Car" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{toggle.sub_category}</h2>
                                        <p>{toggle.price}</p>
                                        <p>{toggle.rating}</p>
                                        <Link to={`/toy/${toggle._id}`}>
                                            <button className="btn btn-primary">View Details</button>
                                        </Link>
                                        <Toaster />
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='flex gap-8'>
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <figure><img src={toggle.picture} alt="Car" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{toggle.sub_category}</h2>
                                        <p>{toggle.price}</p>
                                        <p>{toggle.rating}</p>
                                        <Link to={`/toy/${toggle._id}`}>
                                            <button className="btn btn-primary">View Details</button>
                                        </Link>
                                        <Toaster />
                                    </div>
                                </div>
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <figure><img src={toggle.picture} alt="Car" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{toggle.sub_category}</h2>
                                        <p>{toggle.price}</p>
                                        <p>{toggle.rating}</p>
                                        <Link to={`/toy/${toggle._id}`}>
                                            <button className="btn btn-primary">View Details</button>
                                        </Link>
                                        <Toaster />
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                    </>)
                }

            </Tabs>
    );
};

export default ReactTabs;