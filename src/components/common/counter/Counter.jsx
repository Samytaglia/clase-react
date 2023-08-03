import { Button } from "@mui/material";

const Counter = ({ counter, agregarAlCarrito, stock, sumar, restar }) => {
  const isOutOfStock = counter >= stock;

  return (
    <div>
      <div style={{ display: "flex" }}>
        <Button
          disabled={counter <= 1}
          variant="contained"
          color="warning"
          onClick={restar}
        >
          -
        </Button>
        <h3>{isOutOfStock ? "SIN STOCK" : counter}</h3>
        <Button
          disabled={isOutOfStock}
          variant="contained"
          color="warning"
          onClick={sumar}
        >
          +
        </Button>
      </div>
      <Button
        variant="contained"
        color="error"
        onClick={() => agregarAlCarrito(counter)}
        disabled={isOutOfStock}
      >
        Agregar a la bolsa
      </Button>
    </div>
  );
};

export default Counter;