import { Button, styled } from "@mui/material";

const Counter = ({ counter, agregarAlCarrito, stock, sumar, restar }) => {
  const isOutOfStock = counter >= stock;

  const StyledButton = styled(Button)({
    color: "white",
    backgroundColor: "black",
    borderColor: "black",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
  });
  
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Button
          disabled={counter <= 1}
          variant="outlined"
          onClick={restar}
          style={{ minWidth: "30px", color: "gray" }} 
        >
          -
        </Button>
        <input
          type="text"
          style={{ width: "30px", textAlign: "center", color: "black", borderColor: "white"}}
          value={isOutOfStock ? "SIN STOCK" : counter} 
          readOnly
        />
        <Button
          disabled={isOutOfStock}
          variant="outlined"
          onClick={sumar}
          style={{ minWidth: "30px", borderColor: "gray", color: "black" }} 
        >
          +
        </Button>
      </div>
      <StyledButton
        variant="outlined"
        color="inherit"
        onClick={() => agregarAlCarrito(counter)}
        disabled={isOutOfStock}
      >
        Agregar a la bolsa
      </StyledButton>
    </div>
  );
};

export default Counter;