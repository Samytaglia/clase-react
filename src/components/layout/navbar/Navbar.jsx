import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  let userRol = "admin";

  return (
    <div className="navContainer">
      <ul className="navContainer">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/davctp85m/image/upload/v1691018980/Captura_de_pantalla_2023-08-02_202028-removebg-preview_ywpy3v.png"
            alt="logo"
            width="70px"
          />
        </Link>
        <li>
          <Link to="/">Todos</Link>
        </li>
        <li>
          <Link to="/category/abrigos">Abrigos</Link>
        </li>
        <li>
          <Link to="/category/pantalones">Pantalones</Link>
        </li>
        <CartWidget />
      </ul>
      {userRol === "admin" && <Link to="/dashboard">Admin</Link>}
    </div>
  );
};

export default Navbar;
