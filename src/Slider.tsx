import React, { useState, useEffect } from 'react';
import './Slider.css';
import beefburger from "./assets/img10.jpg";
import burgerimg from "./assets/img8.jpeg";
import salad from "./assets/img7.jpeg";


const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      type:"ONLY $4.99",
      title: "QUINOA & BLACK BEAN BURGER",
      description: "We can’t think of a better way to celebrate summer than with these empowering hamburgers.",
      ctaText: "ORDER NOW",
      image: beefburger, // Replace with your image path
      bgColor: "#F5E6D3"
    },
    {
      id: 2,
      type:"GREAT CHOICE",
      title: "FARMHOUSE BURGER",
      description: "This burger’s name explains itself. Of course, you can also top it with crisp lettuce, tomatoes and anything else.",
      ctaText: "ORDER NOW",
      image: burgerimg,
      bgColor: "#E8F4F8"
    },
    {
      id: 3,
      type:"NEW",
      title: "STANDARD CAESAR BURGER",
      description: "A great Caesar salad gets its swagger from a great dressing",
      ctaText: "ORDER NOW",
      image: salad,
      bgColor: "#F8F0E3"
    }
  ];

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index:any) => {
    setCurrentSlide(index);
  };

  return (
    <div className="burger-slider">
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <div className="slide-content">
              <div className="text-content">
                <img src={slide.image} alt="" />
              </div>
              <div className="image-content">
                <h5 className="burger-type">{slide.type}</h5>
                <h2 className="burger-title">{slide.title}</h2>
                <p className="burger-description">{slide.description}</p>
                <button className="cta-button">
                  {slide.ctaText}
                </button>
                {/* <div className="image-wrapper">
                  <img 
                    src={slide.image} 
                    alt={slide.title}
                    className="burger-image"
                    onError={(e:any) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = `
                        <div class="image-placeholder" style="background: ${slide.bgColor}22">
                          <span>${slide.title}</span>
                        </div>
                      `;
                    }}
                  />
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className="slider-arrow prev-arrow" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="slider-arrow next-arrow" onClick={nextSlide}>
        &#10095;
      </button>

      {/* Dots Indicator */}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%` 
          }} 
        />
      </div>
    </div>
  );
};

export default Slider;