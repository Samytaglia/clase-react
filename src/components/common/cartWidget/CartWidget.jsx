import Badge from "@mui/material/Badge";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { totalQuantities } = useContext(CartContext);
  let total = totalQuantities()
  return (
    <div style={{ display: "flex" }}>
      <Link to="/cart">
        <Badge badgeContent={total} color="error" showZero>
          <ShoppingBagIcon color="action" fontSize="large" />
        </Badge>
      </Link>
    </div>
  );
};

export default CartWidget;
