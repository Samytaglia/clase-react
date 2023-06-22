// import { useState } from "react";
import Navbar from "./components/layout/navbar/Navbar";
import HomeContainer from './components/pages/home/HomeContainer';
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import Footer from "./components/layout/footer/Footer";

function App() {


  return (
  <div>
   <Navbar/>
      <HomeContainer/>
      <ItemListContainer greeting={'Colección 2023'}/>
   <Footer/>
  </div>
  );
  }
export default App;
