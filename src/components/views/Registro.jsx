
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import { registrarse } from "../helpers/queries";
// import Swal from "sweetalert2";


const Registro = () => {
  const {register, handleSubmit, formState: { errors }, reset} = useForm();
  const navegacion = useNavigate();

  // const onSubmit = (usuarioRegistrado) => {
  //   console.log(usuarioRegistrado);
  //   registrarse(usuarioRegistrado).then((respuesta)=>{
  //     if (respuesta) {
  //       sessionStorage.setItem("usuarioRegistrado", JSON.stringify(respuesta));
  //       reset();
  //       navegacion("/login");
  //     } else {
  //       Swal.fire({
  //         icon: "error",
  //         title: "Error",
  //         text: "El nombre, email o la contraseña son incorrectos!",
  //       });
  //     } 
  //   })
  // }

  return (
    <div className="mt-5 mainSection">
      <h3 className="text-center">Registro</h3>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-2">
              <Form.Control
                type="text"
                placeholder="Ingrese un nombre de usuario"
                {...register("nombre",{
                  required:"El nombre es un dato obligatorio", 
                  pattern:{value:/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/, message: "El nombre debe tener el siguiente formato: Malena Avila"}})}
              />
              <Form.Text className="text-danger">
                {errors.nombre?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control placeholder="Ingrese un email" {...register("email", {
                  required: "El email es un dato obligatorio",
                  pattern: {
                    value:
                      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=? ^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a -z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message:
                      "El email debe tener el siguiente formato: mail@dominio.com",
                  },
                })} />
                <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control type="password" placeholder="Ingrese un password" {...register("password", {
                  required: "La contraseña es un dato obligatorio",
                  pattern: {
                    value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                    message:
                      "La contraseña debe tener entre 8 y 16 caracteres, al menos una mayúscula, una minúsculas y un número. No puede tener simbolos especiales",
                  },
                })}/>
                <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <div className="row">
              <Button
                className="btn btn-dark btn-lg btn-block mb-2"
                type="submit"
              >
                Registrar
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Registro;
