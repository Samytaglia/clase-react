import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || 
  []);

  const addToCart = (product) => {
    let inCart = cart.some((element) => element.id === product.id);
    if (inCart) {
      let addQuantity = cart.map((element) => {
        if(product.id === element.id){
          return{...element, quantity: product.quantity}
          }else{
            return element
          }
      });

      localStorage.setItem("cart", JSON.stringify(addQuantity))
      setCart(addQuantity);
    } else {
      localStorage.setItem("cart", JSON.stringify([...cart, product]) )
      setCart([...cart, product]);
    }
  };

  const deleteFromCart = (id) => {
    let deletedCart = cart.filter((element) => element.id !== id);
    localStorage.setItem("cart", JSON.stringify(deletedCart))
    setCart(deletedCart);
  };

  const clearCart = () => {
    localStorage.removeItem("cart")
    setCart([]);
  };

  const totalQuantities = ()=>{
    let total = cart.reduce((acc, element)=>{
      return acc + element.quantity
    }, 0)
    return total
  };

  const totalPrice = ()=>{
    let total = cart.reduce((acc, element)=>{
      return acc + (element.quantity * element.price)
    }, 0)
    return total
  };

  const quantityById = (id)=>{
    let product = cart.find((element)=>element.id === +id)
    return product?.quantity 
  };

  let data = {
    cart,
    addToCart,
    deleteFromCart,
    clearCart,
    totalQuantities,
    totalPrice,
    quantityById
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;
