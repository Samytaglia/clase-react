const Navbar = () => {

    const ingresar = () {
        console.log("Has iniciado sesión")
    }

    let nombreUsuario = "Samy"
    return (
        <header>
            <ul>
                <li>Inicio</li>
                <li>About</li>
                <li>Contacto</li>
            </ul>
            <button>Iniciar</button>
            <h3>{nombreUsuario}</h3>
        </header>
   
    );
};

export default Navbar