import ItemList from "./ItemList";
import "./ItemList.css";
import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const {categoryName} = useParams()

  useEffect(() => {
    let filteredProducts = products.filter( element => element.category === categoryName)

    const catalogue = new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve( categoryName ? filteredProducts : products);
      }, 1000);
    });

    catalogue.then((res) => setItems(res)).catch((err) => console.log(err));
  }, [categoryName]);

  // if(items.length === 0){
  //   return <h1>Cargando...</h1>
  // }
  return <ItemList items={items} />;
 
};

export default ItemListContainer;
