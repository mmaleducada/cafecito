//Llamar a la variable de entorno
const URL_usuario = import.meta.env.VITE_API_USUARIO
const URL_producto = import.meta.env.VITE_API_PRODUCTO

export const iniciarSesion = async (usuario)=>{
    try{
        const respuesta = await fetch(URL_usuario);
        const listaUsuarios = await respuesta.json();
        const usuarioBuscado = listaUsuarios.find((itemUsuario)=> itemUsuario.email === usuario.email);
        if(usuarioBuscado){
            // el mail era correcto
            if(usuarioBuscado.password === usuario.password){
                return usuarioBuscado;
            }else{
                console.log('password incorrecto');
                return null
            }
        }else{
            console.log('el mail no existe');
            //el mail no existe
            return null
        }
    }catch(error){
       console.log(error); 
    }
} 