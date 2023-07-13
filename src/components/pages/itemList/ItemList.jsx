import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  return (
    <div
      style={{
        width: "95%",
        marginTop: "1%",
        marginLeft: "2.5%",
        display: "flex",
        justifyContent: "space-around",
        gap: "20px",
      }}
    >
      {items.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
