import Badge from "@mui/material/Badge";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const cartWidget = () => {
  return (
    <div style={{display:"flex"}}>   
      <AccountCircleIcon color="action" fontSize="large"/>
      <Badge badgeContent={1} color="error">
        <ShoppingBagIcon color="action" fontSize="large"/>
      </Badge>
    </div>
  );
};

export default cartWidget;
