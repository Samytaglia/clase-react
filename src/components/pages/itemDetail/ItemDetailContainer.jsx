import ItemDetail from "./ItemDetail";
import { useContext, useEffect, useState } from "react";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  let { id } = useParams();

  const { addToCart, quantityById } = useContext(CartContext);
  let quantityInCart = quantityById(id);

  useEffect(() => {
    let promise = new Promise((resolve) => {
      let productSelected = products.find((product) => product.id === +id);
      resolve(productSelected);
    });

    promise.then((res) => setProduct(res)).catch((err) => console.log(err));
  }, [id]);

  const agregarAlCarrito = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };
    addToCart(data);
    toast.success("¡Producto agregado!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div>
      <ItemDetail
        product={product}
        agregarAlCarrito={agregarAlCarrito}
        quantityInCart={quantityInCart}
      />
      <ToastContainer />
    </div>
  );
};

export default ItemDetailContainer;
