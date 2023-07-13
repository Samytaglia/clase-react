import { Button } from "@mui/material";

const Counter = ({ counter, agregarAlCarrito, stock, sumar, restar }) => {

  return (
    <div>
        <div style={{ display: "flex" }}>
            <Button 
            disabled={counter <= 1}
            variant="contained" 
            color="warning" 
            onClick={restar}>
                -
            </Button>
            <h2>{counter}</h2>
            <Button 
            disabled={counter >= stock } 
            variant="contained" 
            color="warning" 
            onClick={sumar}>
                +
            </Button>
        </div>
        <Button 
        variant="contained" 
        color="error" 
        onClick={() => agregarAlCarrito(counter)}>
            Agregar al carrito
        </Button>
        </div>
  );
};

export default Counter;
