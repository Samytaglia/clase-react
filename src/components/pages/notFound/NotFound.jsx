import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
      <h1>404 - Not Found</h1>
      <p>Oops! La página que estás buscando no se pudo encontrar.</p>
      <p className="not-found-message">Verifica la URL o </p>
      <Link  to="/">
        visítanos
      </Link>
      <iframe
        src="https://giphy.com/embed/8L0Pky6C83SzkzU55a"
        width="480"
        height="480"
        className="giphy-embed"
        allowFullScreen
      ></iframe>
      <p>
        <a href="https://giphy.com/gifs/mini-italia-8L0Pky6C83SzkzU55a">
          via GIPHY
        </a>
      </p>
    </div>
  );
};

export default NotFound;
