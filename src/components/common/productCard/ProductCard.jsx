import "./Product.css";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <div className="cardContainer">
      <Card sx={{ Width: 345 }}>
        <CardMedia
          sx={{ height: 500 }}
          image={item.img}
          title="imagen prenda"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/detail/${item.id}`}>
            <Button size="small" variant="contained">
              Ver Detalle
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductCard;
