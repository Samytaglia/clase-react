import { useState, useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { conn } from "../../../firebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const CheckoutContainer = () => {
  const { cart, totalPrice } = useContext(CartContext);
  const [orderId, setOrderId] = useState("")
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  let total = totalPrice();

  const handleSubmit = (event) => {
    event.preventDefault();

    let purchaseOrder = {
      buyer: userData,
      items: cart,
      total, //tiene el mismo nombre de la variable y puede omitirse
      date: serverTimestamp()
    };

    let orderCollection = collection(conn, "orders");
    addDoc(orderCollection, purchaseOrder).then(res=> setOrderId(res.id));
  };

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  return (
      <div>
        {!orderId ? (
          <>
            <h1>Iniciar Compra</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Nombre Completo"
                name="name"
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
              />
              <input
                type="number"
                placeholder="Teléfono"
                name="phone"
                onChange={handleChange}
              />
              <button>Enviar</button>
            </form>
          </>
        ) : (
          <h2>Su número de orden es: {orderId} </h2>
        )}
      </div>
    );
  };
export default CheckoutContainer;
