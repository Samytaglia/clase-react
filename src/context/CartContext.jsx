import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState([]);

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
      setCart(addQuantity);
    } else {
      setCart([...cart, product]);
    }
  };

  const deleteFromCart = (id) => {
    let deletedCart = cart.filter((element) => element.id !== id);
    setCart(deletedCart);
  };

  const clearCart = () => {
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
