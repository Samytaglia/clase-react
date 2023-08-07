import { useState } from "react";
import "./Product.css";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const StyledButton = styled(Button)({
    color: "white",
    backgroundColor: "black",
    borderColor: "black",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
  });
  return (
    <div
      className="cardContainer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Card sx={{ Width: 345 }}>
        <CardMedia
          sx={{ height: 510 }}
          image={isHovered ? item.img1 : item.img}
          title="imagen prenda"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${item.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/detail/${item.id}`}>
            <StyledButton variant="outlined" color="inherit">
              Ver Detalle
            </StyledButton>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductCard;
