import { useState } from "react";
import Home from "./Home";

const HomeContainer = ({ nombre }) => {
  const [contador, setContador] = useState(0);
  const [userName, setUserName] = useState("pepito");
  console.log("me renderize");

  const sumar = () => {
    setContador(contador + 1);
  };

  return (
    <Home
      nombre={nombre}
      userName={userName}
      sumar={sumar}
      setUserName={setUserName}
      contador={contador}
    />
  );
};

export default HomeContainer;
