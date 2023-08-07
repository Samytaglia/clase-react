import "./Cart.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import WorkOffIcon from "@mui/icons-material/WorkOff";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import DeleteIcon from "@mui/icons-material/Delete";

const CartContainer = () => {
  const { cart, clearCart, deleteFromCart, totalPrice } =
    useContext(CartContext);

  let clear = () => {
    Swal.fire({
      title: "¿Deseas vaciar tu bolsa de compra?",
      text: "¡Perderás todos los productos que elegiste!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Vaciar bolsa!",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("<Productos eliminados>!", "Tu bolsa está vacía.", "success");
      }
    });
  };

  let total = totalPrice();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
        marginTop: "2%",
      }}
    >
      {cart.length > 0 ? (
        <div>
          <h1>BOLSA DE COMPRA</h1>
          <table
            className="cart-table"
            style={{ width: "70%", marginLeft: "15%", marginTop: "2%" }}
          >
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: "5px 10px" }}>
                  ARTÍCULO
                </th>
                <th style={{ padding: "5px 10px" }}>CANTIDAD</th>
                <th style={{ padding: "5px 10px" }}>PRECIO</th>
                <th style={{ padding: "5px 10px" }}>BORRAR</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((element) => (
                <tr key={element.id}>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <img src={element.img} alt="" style={{ width: "10%" }} />
                      <div style={{ marginLeft: "10px" }}>
                        <h3
                          style={{
                            textTransform: "uppercase",
                            fontWeight: "bold",
                          }}
                        >
                          {element.title}
                        </h3>
                        <p>{element.description}</p>
                      </div>
                    </div>
                  </td>
                  <td style={{ textAlign: "center" }}>{element.quantity}</td>
                  <td>${element.price}</td>
                  <td style={{ textAlign: "center" }}>
                    <DeleteIcon
                      color="action"
                      fontSize="small"
                      style={{ cursor: "pointer" }}
                      onClick={() => deleteFromCart(element.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "20%",
              marginLeft: "40%",
              marginTop: "2%",
            }}
          >
            <Button variant="contained" onClick={clear}>
              Eliminar Bolsa de Compra
            </Button>
            <h2 style={{ textAlign: "center" }}>Total a pagar: ${total}</h2>
            <Link to="/checkout">
              <Button variant="contained">Finalizar Compra</Button>
            </Link>

            <Link style={{ textAlign: "center" }} to="/">
              Seguir comprando
            </Link>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
            gap: "20px",
            marginTop: "1%",
          }}
        >
          <img
            src="https://res.cloudinary.com/davctp85m/image/upload/v1691020079/logoMF-removebg-preview_wi2fms.png"
            alt="logo"
            style={{ width: "150px" }}
          />
          <h2>Aún no hay productos en tu Bolsa de Compra</h2>
          <WorkOffIcon fontSize="large" />
          <Link to="/">
            <Button variant="contained"> Descubrir Productos</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
