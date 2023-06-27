import { Navigate } from "react-router-dom";

// logica para saber si el usuario es o no es administrador


const RutasProtegidas = ({children}) => {
    const usuarioLogueado = JSON.parse(sessionStorage.getItem("usuario")) || null;
    // quiero saber si el usuario no esta logueado
    if(!usuarioLogueado){
        return <Navigate to="/login"></Navigate>
    } else {
        return children;
    }
};

export default RutasProtegidas;