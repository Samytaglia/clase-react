import { Button } from "@mui/material";
import { products } from "../../../productsMock";
import { conn } from "../../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

const Dashboard = () => {

  const fillDb = () => {
    let refCollection = collection(conn, "products")
    products.forEach((product) => {
addDoc(refCollection, product)
    });
  };

  return (
    <div>
      <h1>Dashboard de Administrador</h1>
      <Button variant="contained" onClick={fillDb}>
        Rellenar Base de Datos
      </Button>
    </div>
  );
};

export default Dashboard;
