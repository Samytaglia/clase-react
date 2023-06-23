import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navContainer">
       <a href="../../pages/home" className="pages"><img src="https://res.cloudinary.com/davctp85m/image/upload/v1687473002/logoMF_mm8kyw.png" alt="logo" width="100px"/></a>
      <ul className="containerPages">
        <li>
          <a href="../../pages/home" className="pages">Inicio</a>
        </li>
        <li>
          <a href="../../pages/itemList" className="pages">Tienda</a>
        </li>
        <li>
          <a href="../../pages/about" className="pages">Acerca de</a>
        </li>
        <li>
          <a href="../../pages/contact" className="pages">Contacto</a>
        </li>
        <li>
          <a href="../../pages/faq" className="pages">FAQ</a>
        </li>
      </ul>
      <a href=""><CartWidget /></a>
    </div>
  );
};

export default Navbar;
