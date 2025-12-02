//import React from 'react';
import './Services.css';
import burgerIcon from './assets/burger_illustration_1.png';
import veggie from './assets/burger_illustration_2.png'
import milkshake from './assets/burger_illustration_3.png'
import dessert from './assets/burger_illustration_4.png'
const Services = () => {
  const services = [
    {
      id: 1,
      title: "GRILL'D BURGERS",
      description: "Beetroot water spinach okra water chestnut ricebean pea.",
      icon: burgerIcon
    },
    {
      id: 2,
      title: "VEGGIE OPTIONS",
      description: "Water spinach arugula pea tatsoi aubergine spring onion.",
      icon: veggie
    },
    {
      id: 3,
      title: "MILKSHAKES",
      description: "Dandelion zucchini burdock yarrow chickpea dandelion sorrel.",
      icon: milkshake
    },
    {
      id: 4,
      title: "DESSERTS",
      description: "Chickweed okra pea winter purslane coriander yarrow sweet.",
      icon: dessert
    }
  ];

  return (
    <section className="services">
      <div className="services-container">
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                 <img src={service.icon} alt={service.title} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;