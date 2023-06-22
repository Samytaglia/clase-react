import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navContainer">
       <a href="../../pages/home" className="pages"><img src="https://res.cloudinary.com/davctp85m/image/upload/v1687473002/logoMF_mm8kyw.png" alt="logo" width="80px"/></a>
      <ul className="containerPages">
        <li>
          <a href="../../pages/home" className="pages">Inicio</a>
        </li>
        <li>
          <a href="../../pages/itemList" className="pages">Tienda</a>
        </li>
        <li>
          <a href="../../pages/about" className="pages">Acerca De</a>
        </li>
        <li>
          <a href="../../pages/contact" className="pages">Contacto</a>
        </li>
        <li>
          <a href="../../pages/faq" className="pages">FAQ</a>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
