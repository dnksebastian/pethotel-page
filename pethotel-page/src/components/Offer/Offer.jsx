import { useState } from 'react';
import './Offer.css';

import PlayfulCat from './../../assets/images/undraw_playful_cat.svg'
import DogWalking from './../../assets/images/undraw_dog_walking.svg'
import GoodDoggy from './../../assets/images/undraw_good_doggy.svg'

const Offer = () => {

    const [activeTab, setActiveTab] = useState(1);
    
    return (
        <section id='offer'>
            <div className="offer-desc-wrap">
                <h2 className='offer-heading'>Our Services</h2>
                <p className='offer-desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo eius repellat omnis, delectus fugiat ex labore ducimus at a quam harum blanditiis doloribus! Fuga odit necessitatibus reiciendis quisquam atque enim!</p>
            </div>
            <div className="offer-tabs-helper">
                <div className="tab-controls-wrap">
                    <button className={`service-tab-btn ${activeTab === 1 ? 'btn-hl' : ''}`} id="btn-offer-1" onClick={() => setActiveTab(1)}>Hotel</button>
                    <button className={`service-tab-btn ${activeTab === 2 ? 'btn-hl' : ''}`} id="btn-offer-2" onClick={() => setActiveTab(2)}>Training</button>
                    <button className={`service-tab-btn ${activeTab === 3 ? 'btn-hl' : ''}`} id="btn-offer-3" onClick={() => setActiveTab(3)}>Daycare</button>
                </div>
                <ul className="tab-cards-wrap">
                    <li className={`tab-card-wrap ${activeTab === 1 ? 'show-tab' : ''}`}>
                        <div className="card-img-wrap">
                            <img src={PlayfulCat} alt="Happy cat playing" />
                        </div>
                        <div className="card-content-wrap">
                            <h3>Hotel</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, beatae dolor. Facilis, corrupti atque deleniti sunt molestiae minus hic alias.</p>
                        </div>
                    </li>
                    <li className={`tab-card-wrap ${activeTab === 2 ? 'show-tab' : ''}`}>
                        <div className="card-img-wrap">
                            <img src={GoodDoggy} alt="Dog being pet" />
                        </div>
                        <div className="card-content-wrap">
                            <h3>Training</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, beatae dolor. Facilis, corrupti atque deleniti sunt molestiae minus hic alias.</p>
                        </div>
                    </li>
                    <li className={`tab-card-wrap ${activeTab === 3 ? 'show-tab' : ''}`}>
                        <div className="card-img-wrap">
                            <img src={DogWalking} alt="Illustration of walking a dog" />
                        </div>
                        <div className="card-content-wrap">
                            <h3>Daycare</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, beatae dolor. Facilis, corrupti atque deleniti sunt molestiae minus hic alias.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
};

export default Offer