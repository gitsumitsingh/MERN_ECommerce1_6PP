import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} href="https://play.google.com/" alt="playstore" />
        <img
          src={appStore}
          href="https://www.apple.com/in/store"
          alt="Appstore"
        />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights {new Date().getFullYear()} &copy; ProDev Ltd</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://instagram.com/"
        >
          Instagram
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://youtube.com/"
        >
          Youtube
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://facebook.com/"
        >
          Facebook
        </a>
      </div>
    </footer>
  );
};

export default Footer;
