import { useState } from "react";
import Home from "./Home";

const HomeContainer = ({ nombre }) => {
  const [userName, setUserName] = useState("pepito");
  console.log("me renderize");

  return <Home nombre={nombre} userName={userName} setUserName={setUserName} />;
};

export default HomeContainer;
