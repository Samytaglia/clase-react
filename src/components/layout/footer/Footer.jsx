import "./Footer.css";
import { BsInstagram } from "react-icons//bs";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <ul className="footerContainer">
        <li>
          <a href="">
            <BsInstagram />
          </a>
        </li>
        <li>
          <a href="">
            <BsTwitter />
          </a>
        </li>
        <li>
          <a href="">
            <FaFacebookF />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
