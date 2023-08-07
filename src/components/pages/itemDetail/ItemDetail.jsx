import CounterContainer from "../../common/counter/CounterContainer";
import "./ItemDetail.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ItemDetail = ({ product, agregarAlCarrito }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2200,
    centerMode: true,
    centerPadding: "0",
  };

  const handleAgregarAlCarrito = (quantity) => {
    agregarAlCarrito(quantity);
  };

  return (
    <div className="detailContainer">
      <div className="slider">
        {" "}
        <Slider {...settings}>
          <div className="sliderContainer">
            <img src={product.img} alt="imagen1" />{" "}
          </div>
          <div className="sliderContainer">
            <img src={product.img1} alt="imagen2" />{" "}
          </div>
          <div className="sliderContainer">
            <img src={product.img2} alt="imagen3" />{" "}
          </div>
          <div className="sliderContainer">
            <img src={product.img3} alt="imagen4" />{" "}
          </div>
        </Slider>
      </div>
      <div style={{ width: "50%", maxWidth: "400px", marginLeft: "150px" }}>
        {" "}
        <h2>
          {product.title}
        </h2>
        <h3>${product.price}</h3>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography component="div">DETALLES DEL PRODUCTO</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{product.more}</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography component="div">MÉTODOS DE PAGO</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="div">
              <ul>
                <li>*Podes abonar con Ahora 3 y Ahora 6 sin interés.</li>
                <li>
                  *Podés realizar tu compra a través de todos los medios de pago
                  habilitados en Mercado Pago.
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography component="div">MÉTODOS DE ENVÍO</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="div">
              <ul>
                <li>*Pick up in Store.</li>
                <li>*Envío express para CABA y GBA.</li>
                <li>*Envío a domicilio estándar por Correo Andreani.</li>
                <li>*Retiro en Sucursal Andreani.</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <div className="counter" style={{ marginTop: "5%" }}>
          <CounterContainer
            stock={product.stock}
            agregarAlCarrito={handleAgregarAlCarrito}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
