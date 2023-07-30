import Counter from "./Counter";
import useCounter from "../../../utils/hooks/useCounter";

const CounterContainer = ({ agregarAlCarrito, stock, quantityInCart=1 }) => {
  const { counter, sumar, restar } = useCounter(stock, quantityInCart);

  return (
    <Counter
      counter={counter}
      sumar={sumar}
      restar={restar}
      agregarAlCarrito={agregarAlCarrito}
      stock={stock}
    />
  );
};

export default CounterContainer;