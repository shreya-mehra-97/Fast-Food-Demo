import React from 'react';
import './MenuItem.css';
import img4 from './assets/img4.jpeg';
import img1 from './assets/img1.jpeg';
import img2 from './assets/img2.jpeg';
import img3 from './assets/img3.jpeg';
import img11 from './assets/img11.jpg';
import img12 from './assets/img12.jpg';

const MenuItems = () => {
  const menuItems = [
    {
      id: 1,
      type:"New",
      title: "FARMHOUSE BURGER",
      description: "The burgers' home explains most of course, you can also buy a nice shop below. Sometimes, fetching, cleaning, and printing are nice.",
      originalPrice: 2.99,
      discountedPrice: 2.49,
     
      hasDiscount: true,
      icon:img4
    },
    {
      id: 2,
      type:"New",
      title: "QUINOA & BLACK BEAN BURGER",
      description: "This is one of the best way to celebrate our new family with our new country in Singapore. Plus, by contrast, we have two special stores:",
      price: 3.99,
      
      hasDiscount: false,
      icon:img1
    },
    {
       id: 3,
       type:"New",
      title: "CHOCOLATE MILKSHAKE",
      description: "Milkshakes always take over 1 years as a classic ice-ever. You can be welcome together with someone else without a visit at all times in place.",
      price: 2.49,
      
      hasDiscount: false,
      icon:img2
    },
    {
      id: 4,
      type:"New",
      title: "STANDARD BURGER MEAL",
      description: "These incredible buyer mail offer, unique visits to the classic newspaper, accompanying questions like generous cheese and sauces.",
      originalPrice: 5.99,
      discountedPrice: 4.99,
      
      hasDiscount: true,
      icon:img3
    },
    {
      id: 4,
      type:"New",
      title: "CHECKOUT OUR CATERING MENU",
      description: "Throwing the party is never been easier. Order now and let us spice up your party. Burger meals, french fries and cheeseburgers will cheer up your friends.",
      originalPrice: 5.99,
      discountedPrice: 4.99,
   
      hasDiscount: true,
      icon:img11
    },
    {
      id: 4,
      type:"New",
      title: "HOW TO MAKE APERFECT BURGER",
      description: "We will tell you a little secret. Mixing best quality steak and pork and serves them on homemade herb-butter rolls is the best version we know.",
      originalPrice: 5.99,
      discountedPrice: 4.99,
      
      hasDiscount: true,
      icon:img12
    }
  ];

  return (
    <section className="menu-items">
      <div className="menu-items-container">
        <div className="menu-items-grid1">
          {menuItems.map((item: any) => (
            <div key={item.id} className="menu-card"
            style={{ backgroundImage: `url(${item.icon})`}}>
              {/* Content */}
              <div className="menu-card-content">
                <h5 className="menu-item-type">{item.type}</h5>
                <h2 className="menu-item-title">{item.title}</h2>
                <p className="menu-item-description">{item.description}</p>
                
                {/* Pricing */}
                <div className="menu-pricing">
                  {item.hasDiscount ? (
                    <>
                      <span className="discounted-price">${item.discountedPrice.toFixed(2)}</span>
                      <span className="original-price">${item.originalPrice.toFixed(2)}</span>
                    </>
                  ) : (
                    <span className="regular-price">${item.price.toFixed(2)}</span>
                  )}
                </div>
              </div>

              {/* Divider */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuItems;