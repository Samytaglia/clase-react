import './Footer.css'
import { BsInstagram } from "react-icons//bs";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <ul className="footerContainer">
      <li><BsInstagram/></li>
      <li><BsTwitter/></li>
      <li><FaFacebookF/></li>
    </ul>
  );
};

export default Footer;
