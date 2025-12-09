import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        {/* LEFT SECTION */}
        <div className="footer-content-left">
          <img src={assets.logo} alt="SwadKart Logo" />

          <p className="footer-description">
            SwadKart is your trusted platform for fast, reliable, and seamless
            online food delivery. We connect users with the best restaurants,
            ensuring fresh food, quick service, and a smooth ordering
            experience—anytime, anywhere.
          </p>

          <div className="footer-social-icons">
            <a
              href="https://www.facebook.com/sadanandkumar.modi.71"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.facebook_icon} alt="Facebook" />
            </a>

            <a
              href="https://www.linkedin.com/in/sadanand8789/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.linkedin_icon} alt="LinkedIn" />
            </a>

            <a
              href="https://github.com/Sadanand87"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.github_icon} alt="GitHub" />
            </a>
          </div>
        </div>

        {/* CENTER SECTION */}
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* RIGHT SECTION */}
        <div className="footer-content-right">
          <h2>Get in touch</h2>
          <ul>
            <li>+91 9708116723</li>
            <li>sadanandkumar8789@gmail.com</li>
          </ul>
        </div>
      </div>

      <hr />

      <p className="footer-copyright">
        © 2025 SwadKart.com — All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
