import Badge from "@mui/material/Badge";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const cartWidget = () => {
  return (
    <div>
      <Badge badgeContent={1} color="error">
        <ShoppingBagIcon color="action" />
      </Badge>
    </div>
  );
};

export default cartWidget;
