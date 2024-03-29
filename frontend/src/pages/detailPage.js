import React, { useState, useEffect } from 'react';

import '../Styles/detailPage.css';

import Nav from '../components/navBar';
import Footer from '../components/Footer';


const Card = ({ title, serviceName, description }) => {
    const [showCardBody, setShowCardBody] = useState(false);

    const handleCardClick = () => {
        setShowCardBody(!showCardBody);
    }

    return (
        <div className="col-12 col-md-8 col-lg-6 mx-auto mb-4">
            <div className="card-container" onClick={handleCardClick}>
                <div className="card_header">
                    <h2>{title}</h2>
                </div>
                {showCardBody && (
                    <div className="card-body">
                        <h5 className="card-title">Service Name: {serviceName}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

const fetchCards = () => {
    // If runs locally: http://localhost:3001/api/cards
    return fetch('https://render-react-jpc3.onrender.com/api/cards')
      .then(response => response.json())
      .catch(error => console.error('Error:', error));
};
  

function Detail() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetchCards().then(data => setCards(data));
      }, []);

    return (
        <div>   
            {/* ======= Start Main ======= */}
            <main>
                <div className="header-blue-DP">
                    <Nav/>
                    <div className="container hero my-5">
                        <h1 className="mb-4 text-center">Service Details</h1>
                        <div className="row justify-content-center">

                            {cards.map((card) => (
                                <Card
                                    title={card.title} 
                                    serviceName={card.serviceName} 
                                    description={card.description} 
                                />
                            ))}

                        </div>
                    </div>  
                    <Footer/>
                </div>
            </main>
            {/* ======= End Main ======= */}
        </div>
    );
}

export default Detail;
