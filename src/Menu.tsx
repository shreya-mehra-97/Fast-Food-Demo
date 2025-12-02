//import React from 'react';
import './Menu.css';
import img9 from './assets/img9.jpeg';
import img8 from './assets/img8.jpeg';
import img10 from './assets/img10.jpg';
import img7 from './assets/img7.jpeg';
import img6 from './assets/img6.jpeg';
import img5 from './assets/img5.jpeg';

const Menu = () => {
  const menuCategories = [
    {
      id: 1,
      title: "BEST BURGERS",
      description: "Reduces water content with water content, moisture mix, etc.",
      icon: img9
    },
    {
      id: 2,
      title: "ONICKEN BURGERS",
      description: "Water content may be less than a sharpest spray punch.",
      icon: img8
    },
    {
      id: 3,
      title: "VEGAN OPTIONS",
      description: "Directions should become more or better about the water.",
      icon: img10
    },
    {
      id: 4,
      title: "SALADS & WRAPS",
      description: "Water content may be less than a sharpest spray punch.",
      icon: img7
    },
    {
      id: 5,
      title: "FRENCH FIRES",
      description: "Directions should be made up to or higher depending on their comfort levels.",
      icon: img6
    },
    {
      id: 6,
      title: "GREAT DESSERTS",
      description: "Cholesterol can be a better provision for nutrition rather warm.",
      icon: img5
    }
  ];

  return (
    <section className="menu-grid">
      <div className="menu-container">
        {/* Header Section */}
        <div className="menu-header">
          <h1 className="menu-title">Choose & enjoy</h1>
          <p className="menu-subtitle">
            Inspired by recipes and customs of world's best chefs.
          </p>
          <div className="divider"></div>
        </div>

        {/* Menu Items Grid */}
        <div className="menu-items-grid-menu">
          {menuCategories.map((item, index) => (
            <div key={item.id} className="menu-item-menu">
              <div className="menu-item-icon"><img src={item.icon} alt={item.title}></img></div>
              <h2 className="menu-item-title-menu">{item.title}</h2>
              <p className="menu-item-description">{item.description}</p>
              
              {/* Add horizontal rule after every 3rd item except the last row */}
              {(index + 1) % 3 === 0 && index !== menuCategories.length - 1 && (
                <div className="row-divider"></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="menu-cta">
          <button className="cta-button">
            VIEW OUR FULL MENU
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;