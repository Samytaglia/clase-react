import { useState } from "react";

const useCounter = (stock, quantityInCart = 1) => {
  const [counter, setCounter] = useState(quantityInCart);

  const sumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const restar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return { counter, sumar, restar };
};

export default useCounter;
