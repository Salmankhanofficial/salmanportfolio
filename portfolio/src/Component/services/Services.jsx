import React from 'react';
import "./services.css";

function Services() {
    const servicesData = [
        {
            image: './images/frontend.png',
            title: 'front end development',
            description: 'Lorem ipsum dolor, sit amet consectetur. Et officiis, veniam natus porro minima tempora libero accusantium sequi ullam veritatis .'
        },
        {
            image: './images/backend.png',
            title: 'backend development',
            description: 'Lorem ipsum dolor, sit amet consectetur. Et officiis, veniam natus porro minima tempora libero accusantium sequi ullam veritatis .'
        },
        {
            image: './images/ui.png',
            title: 'ui/ux design',
            description: 'Lorem ipsum dolor, sit amet consectetur. Et officiis, veniam natus porro minima tempora libero accusantium sequi ullam veritatis .'
        }
    ];

    return (
        <div className="services-wrapper" >
            <div className="heading-text">
                <h1  id="services"> <span><Script:module></Script:module>ervices</span></h1>
            </div>

            <div className="cards-container">
                {servicesData.map((service, index) => (
                    <div key={index} className="card">
                        <img src={service.image} alt={service.title} />
                        <h1>{service.title}</h1>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
