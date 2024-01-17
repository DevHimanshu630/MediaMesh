import React from 'react';
import client1 from '../images/ichrlogo.png'; // Example path
import client2 from '../images/moe.png';
import client3 from '../images/ngma-logo.png';
import '../Css/Home.css'; // Replace with the correct path to your CSS file

function ClientCarousel() {
    const clients = [
        { id: 1, image: client1 },
        { id: 3, image: client3 },
        { id: 2, image: client2 },


    ];

    return (
        <div className='w-full flex   mt-8 scroll-container'>
            {clients.map((clientItem) => (
                <img
                    key={clientItem.id}
                    src={clientItem.image}
                    alt={`Client ${clientItem.id}`}
                    className={`w-60 h-24 scroll-item  object-contain  client-item ${clientItem.id === 3 ? 'specific-height' : ''}`}

                />
            ))}
        </div>
    );
}

export default ClientCarousel;
