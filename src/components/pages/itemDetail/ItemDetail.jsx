import CounterContainer from "../../common/counter/CounterContainer";
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

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "1%",
      }}
    >
      <div style={{ width: "50%", maxWidth: "300px" }}>
        {" "}
        <Slider {...settings}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={product.img} alt="" style={{ width: "100%" }} />{" "}
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={product.img1} alt="" style={{ width: "100%" }} />{" "}
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={product.img2} alt="" style={{ width: "100%" }} />{" "}
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={product.img3} alt="" style={{ width: "100%" }} />{" "}
          </div>
        </Slider>
      </div>
      <div style={{ width: "50%", maxWidth: "400px", marginLeft: "150px" }}>
        {" "}
        <h2 style={{ textTransform: "uppercase", fontWeight: "bold" }}>
          {product.title}
        </h2>
        <h3 style={{ fontSize: "1.1rem" }}>${product.price}</h3>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>DETALLES DEL PRODUCTO</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{product.more}</Typography>
          </AccordionDetails>
        </Accordion>
        <div style={{ marginTop: "5%" }}>
          <CounterContainer
            stock={product.stock}
            agregarAlCarrito={agregarAlCarrito}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
