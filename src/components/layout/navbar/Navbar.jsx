import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (

     
      <div className="navContainer">

        <ul className="navContainer">
        <Link to="/">
        <img
          src="https://res.cloudinary.com/davctp85m/image/upload/v1687473002/logoMF_mm8kyw.png"
          alt="logo"
          width="100px"
        />
      </Link>
          <li><Link to="/">Todos</Link></li>
          <li><Link to="/category/abrigos">Abrigos</Link></li>
          <li><Link to="/category/pantalones">Pantalones</Link></li>
          <CartWidget />
        </ul>

      </div>
 
  );
};

export default Navbar;
