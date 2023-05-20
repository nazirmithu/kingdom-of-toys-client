import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ReactTabs = () => {
    const [toggleState, setToggleState] = useState(1);

    useEffect(() => {
        fetch('http://localhost:5000/reacttabs')
            .then(res => res.json())
            .then(data => {
                setToggleState(data)
            })
    }, [])
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
                                <figure><img src={toggle.picture} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{toggle.
                                        sub_category}</h2>
                                    <p>{toggle.price}</p>
                                    <p>{toggle.rating}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">View Details</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src={toggle.picture} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{toggle.
                                        sub_category}</h2>
                                    <p>{toggle.price}</p>
                                    <p>{toggle.rating}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">View Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='flex gap-8'>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src={toggle.picture} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{toggle.sub_category}</h2>
                                    <p>{toggle.price}</p>
                                    <p>{toggle.rating}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">View Details</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src={toggle.picture} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{toggle.sub_category}</h2>
                                    <p>{toggle.price}</p>
                                    <p>{toggle.rating}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">View Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='flex gap-8'>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src={toggle.picture} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{toggle.sub_category}</h2>
                                    <p>{toggle.price}</p>
                                    <p>{toggle.rating}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">View Details</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src={toggle.picture} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{toggle.sub_category}</h2>
                                    <p>{toggle.price}</p>
                                    <p>{toggle.rating}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">View Details</button>
                                    </div>
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