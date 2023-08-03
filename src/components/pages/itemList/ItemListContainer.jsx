import ItemList from "./ItemList";
import "./ItemList.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { conn } from "../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    let consulta;
    let productsCollection = collection(conn, "products");

    if (!categoryName) {
      consulta = productsCollection
    } else {
      consulta = query(productsCollection, where("category", "==", categoryName))
    }

    getDocs(consulta).then((res) => {
  //res.docs trae un arrego de documentos, menos el id; se mapea para conseguir el id
      let arrProducts = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setItems(arrProducts)
    });
  }, [categoryName]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
