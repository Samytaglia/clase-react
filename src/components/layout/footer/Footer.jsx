import './Footer.css'
import { BsInstagram } from "react-icons//bs";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <ul className="footerContainer">
      <li><a href="" className="pages"><BsInstagram/></a></li>
      <li><a href="" className="pages"><BsTwitter/></a></li>
      <li><a href="" className="pages"><FaFacebookF/></a></li>
    </ul>
  );
};

export default Footer;
