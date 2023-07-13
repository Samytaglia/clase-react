import  Badge  from "@mui/material/Badge";
import  ShoppingBagIcon  from "@mui/icons-material/ShoppingBag";
import  AccountCircleIcon  from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";


const CartWidget = () => {
  return (
    <div style={{ display: "flex" }}>
      <AccountCircleIcon color="action" fontSize="large" />
      <Link to="/cart">
        <Badge badgeContent={1} color="error">
          <ShoppingBagIcon color="action" fontSize="large" />
        </Badge>
      </Link>
    </div>
  );
};

export default CartWidget;

