import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import WorkOffIcon from '@mui/icons-material/WorkOff';
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";

const CartContainer = () => {
  const { cart, clearCart, deleteFromCart, totalPrice } =
    useContext(CartContext);

   let clear = ()=>{
    Swal.fire({
      title: '¿Deseas vaciar tu bolsa de compra?',
      text: "¡Perderás todos los productos que elegiste!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Vaciar bolsa!'
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart()
        Swal.fire(
          '<Productos eliminados>!',
          'Tu bolsa está vacía.',
          'success'
        )
      }
    })
   }

  let total = totalPrice();

  return (
    <div>
      <h1>Bolsa de Compra</h1>

      {cart.map((element) => {
        return (
          <div
            key={element.id}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
              textAlign: "center",
              gap: "40px",
              marginLeft: "25%",
              marginTop: "5%",
            }}
          >
            <h3>{element.title}</h3>
            <h3>{element.price}</h3>
            <h3>Cantidad: {element.quantity}</h3>
            <button onClick={() => deleteFromCart(element.id)}>Eliminar</button>
          </div>
        );
      })}
      {cart.length > 0 && (
        <div>
          <button onClick={clear}>Eliminar Bolsa de Compra</button>
          <h2>Total a pagar: {total}</h2>
          <button>Finalizar Compra</button>
        </div>
      )}

      {cart.length === 0 && (
        <div>
          <h2>Aun no hay productos en tu Bolsa de Compra</h2>
          <WorkOffIcon/>
          <Link to="/">
            {" "}
            <Button variant="contained"> Descubrir Productos</Button>
          </Link> 
        </div>
      )}
    </div>
  );
};

export default CartContainer;
