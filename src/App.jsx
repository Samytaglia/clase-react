import { useState } from "react";
import Navbar from "./components/layout/navbar/Navbar";
import HomeContainer from './components/pages/home/HomeContainer';
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import Footer from "./components/layout/footer/Footer";
// import './App.jsx';

function App() {
  const [nombre, setNombre] = useState("oscar");

  const saludo = "Hola como estas? Espero que muy bien!"

  return (
  <div>
   <Navbar/>
      <button onClick={() => setNombre("fulanito")}>Cambiar nombre</button>
      <HomeContainer nombre={nombre} />
      <ItemListContainer saludo={saludo} />
   <Footer/>
  </div>
  );
  }
export default App;
