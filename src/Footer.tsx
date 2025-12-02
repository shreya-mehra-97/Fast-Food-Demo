// import React from "react";
import "./Footer.css";
import footer from './assets/footer.png';

const Footer = () => {
  return (
    <footer className="contact-footer">
      {/* Top: contact + map */}
      <div className="contact-footer-top">
        <div className="contact-panel">
          <div className="contact-call-tag">CALL US</div>
          <h2 className="contact-phone">+1-202-555-016</h2>

          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon">⏱</span>
              <div>
                <p>mon-thu: 11.00 – 23.00</p>
                <p>sat: 12.00 – 23.00</p>
                <p>sun: 12.00 – 21.00</p>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <p>60 East 65th Street</p>
                <p>New York City</p>
                <p>NY 10065</p>
              </div>
            </div>

            <div className="social-row">
              <button className="social-btn">f</button>
              <button className="social-btn">t</button>
              <button className="social-btn">in</button>
              <button className="social-btn">⧉</button>
            </div>
          </div>
        </div>

        <div className="map-panel">
          {/* Replace src with your own Google Maps embed URL */}
          <img src={footer} />
        </div>
      </div>

      {/* Middle red strip */}
      <section className="download-strip">
        <div className="download-inner">
          <h3 className="download-title">DOWNLOAD OUR MENU</h3>
          <button className="download-btn">DOWNLOAD</button>
        </div>
      </section>

      {/* Bottom mini footer */}
      <div className="footer-bottom">
        <p className="footer-copy">Copyright Bold Themes 2017.</p>
        <nav className="footer-links">
          <a href="#home">Home</a>
          <a href="#pages">Pages</a>
          <a href="#offer">Our offer</a>
          <a href="#galleries">Galleries</a>
          <a href="#blog">Blog</a>
          <a href="#shop">Shop</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
