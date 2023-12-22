import React from 'react';
import client1 from '../images/client.png'; // Example path
import client2 from '../images/client.png';
import client3 from '../images/client.png';
import '../Css/Home.css'; // Replace with the correct path to your CSS file

function ClientCarousel() {
    const clients = [
        { id: 1, image: client1 },
        { id: 2, image: client2 },
        { id: 3, image: client3 },
        { id: 4, image: client1 },
        { id: 5, image: client2 },
        { id: 6, image: client3 },
        { id: 7, image: client1 },
        { id: 8, image: client2 },
        { id: 9, image: client3 },
        { id: 10, image: client1 },
        { id: 11, image: client2 },
        { id: 12, image: client3 },
        // Add more clients as needed
    ];

    return (
        <div className='w-full  scroll-container'>
            {clients.map((clientItem) => (
                <img
                    key={clientItem.id}
                    src={clientItem.image}
                    alt={`Client ${clientItem.id}`}
                    className='h-32 w-32 scroll-item rounded-md'
                />
            ))}
        </div>
    );
}

export default ClientCarousel;
