import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutContainer = () => {
  const navigate = useNavigate();

   const [userData, setUserData] = useState({
    name: "",
    email: "",
  });

  const obtenerDatos = (event) => {
    event.preventDefault();
    console.log(userData);
    navigate("/");
  };

  const controlarInputs = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <h1>Iniciar Compra</h1>
      <form onSubmit={obtenerDatos}>
        <input
          type="text"
          placeholder="Nombre Completo"
          name="name"
          // value={userData.name}
          onChange={controlarInputs}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          // value={userData.email}
          onChange={controlarInputs}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default CheckoutContainer;
