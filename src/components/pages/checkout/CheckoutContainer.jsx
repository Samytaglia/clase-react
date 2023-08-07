import { useState, useContext } from "react";
import "./Checkout.css";
import { CartContext } from "../../../context/CartContext";
import { conn } from "../../../firebaseConfig";
import { css } from "@emotion/react"; 
import { RingLoader } from "react-spinners";

import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";

const CheckoutContainer = () => {
  const { cart, totalPrice } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false); 

  let total = totalPrice();

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true); 
    let purchaseOrder = {
      buyer: userData,
      items: cart,
      total, 
      date: serverTimestamp(),
    };

    let orderCollection = collection(conn, "orders");
    addDoc(orderCollection, purchaseOrder)
      .then((res) => {
        setOrderId(res.id);
        setLoading(false); 
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error al generar la orden:", error);
      });

    cart.forEach((element) => {
      updateDoc(doc(conn, "products", element.id), {
        stock: element.stock - element.quantity,
      });
    });
  };

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red; 
  `;

  return (
    <div className="checkoutContainer">
      {!orderId ? (
        <>
          <h1>Iniciar Compra</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nombre Completo"
              name="name"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              required
            />
            <input
              type="number"
              placeholder="Teléfono"
              name="phone"
              onChange={handleChange}
              required
            />
            <button disabled={loading}>Comprar</button> 
            <div className="spinner-container">
              <RingLoader
                css={override}
                size={60}
                color={"#123abc"} 
                loading={loading}
              />
            </div>
          </form>
        </>
      ) : (
        <div className="checkoutPurchase">
          {" "}
          <h2>¡Muchas gracias por su compra!</h2>
          <h3>Su número de orden es: {orderId} </h3>
        </div>
      )}
    </div>
  );
};

export default CheckoutContainer;