import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const CartContainer = () => {
  return (
    <div style={{display:"flex", flexDirection:"column", width:"50%", textAlign:"center", gap:"40px", marginLeft:"25%", marginTop:"5%"}}>
        <h1>Bolsa de Compra:</h1>
        <h2>Aun no hay productos en tu Bolsa de Compra</h2>
        <Link to="/"> <Button variant="contained" > Descubrir Productos</Button></Link>
    </div>
  )
}

export default CartContainer