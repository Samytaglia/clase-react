import { useState } from "react";

const useCounter = (initial = 0, max) => {
  const [counter, setCounter] = useState(initial);

  const sumar = () => {
    counter < max && setCounter(counter + 1);
  };

  const restar = () => {
    counter > 1 && setCounter(counter - 1);
  };

  return { counter, sumar, restar };
};

export default useCounter;