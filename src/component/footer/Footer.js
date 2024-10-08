import React from "react";
import './Footer.css';
import Facebook from '../../img/facebook.svg'
import Linkedin from '../../img/linkedin.svg'
import Instagram from '../../img/instagram.svg'
import Twitter from '../../img/twitter.svg'
import Youtube from '../../img/youtube.svg'
import Quora from '../../img/quora.svg'
import Location from '../../img/location.svg'
import Clock from '../../img/clock.svg'
import Transport from '../../img/transport.svg'


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footerContainerInner">
            <div className="footer-section social">
            <h3>Contact us</h3>
            <ul className="contact-links">
                <li>Address: amet, consetetur sadipscing elitr, sed diam Email id: eirmod tempor invidunt ut labore et dolore Phone no: 123456789</li>
                
            </ul>
            </div>

            <div className="footer-section links">
            <h3 style={{textAlign: "center"}}>Follow us</h3>
            <ul className="social-links">
                <li><a href="#facebook"><img src={Facebook} alt="" /></a></li>
                <li><a href="#linkedin"><img src={Linkedin} alt="" /></a></li>
                <li><a href="#instagram"><img src={Instagram} alt="" /></a></li>
                <li><a href="#Twitter"><img src={Twitter} alt="" /></a></li>
                <li><a href="#youtube"><img src={Youtube} alt="" /></a></li>
                <li><a href="#quora"><img src={Quora} alt="" /></a></li>
            </ul>
            </div>

            <div className="footer-section contact">
            <h3>Head Office</h3>
                <ul className="head-officeBox">
                    <li><span className="head-imgBox"><img src={Location} alt="" /></span> <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p></li>
                    <li><span className="head-imgBox"><img src={Clock} alt="" /></span> <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p></li>
                    <li><span className="head-imgBox"><img src={Clock} alt="" /></span> <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p></li>
                    <li><span className="head-imgBox"><img src={Transport} alt="" /></span><p>Lorem ipsum asd asdsaweeq Lorem Ipsum</p></li>
                </ul>
            </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 All Rights Reserved. Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
