import CounterContainer from "../../common/counter/CounterContainer";

const ItemDetail = ({ product, agregarAlCarrito }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "44%",
          marginTop: "1%",
        }}
      >
        <img src={product.img} alt="" style={{ width: "30%" }} />
        <h2 style={{ marginLeft: "1%" }}>{product.title}</h2>
        <h3 style={{ marginLeft: "8%" }}>${product.price}</h3>

        <CounterContainer
          stock={product.stock}
          agregarAlCarrito={agregarAlCarrito}
        />
      </div>
      <div>
        <p
          style={{
            marginLeft: "-50%",
            marginTop: "5%",
            textAlign: "center",
            fontSize: "1.2rem",
            width: "300px",
          }}
        >
          {product.more}
        </p>
      </div>
    </div>
  );
};

export default ItemDetail;
