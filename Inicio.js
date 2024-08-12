import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./estilos.css"
import { Navigate } from "react-router-dom"

function FormularioRegistro() {
  const [redirect, setRedirect] = useState(false);

  const handleButtonClick = () => {
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="./App" />;
  }

  return (
    <div className="modal-body modal-dialog-centered"> {/* Centra el modal verticalmente */}
      <div className="container col-lg-6"> {/* Reduce el ancho del contenedor */}
        <div className="modal-content bg-dark bg-opacity-75"> {/* Añade transparencia */}
          {/* Botones de cambio */}
          <br />
          <h1 className="text-center blanco">Registro</h1>
          {/* Formulario */}
          <form className="text-center">
            <img className="logo" src="./logo.png" width="130px" height="130px" alt="Logo" />
            <div className="mb-3"><br />
              <label htmlFor="txtNombre" className="form-label blanco">Nombre Completo</label>
              <input type="text" className="form-control bg-light" name="txtNombre" />
            </div>
            <div className="mb-3">
              <label htmlFor="txtUsuario" className="form-label blanco">Usuario</label>
              <input type="text" className="form-control bg-light" name="txtUsuario" />
            </div>
            <div className="mb-3">
              <label htmlFor="txtContraseña" className="form-label blanco">Contraseña</label>
              <input type="password" className="form-control bg-light" name="txtContraseña" />
              <div id="emailHelp" className="verde">Verifique los datos proporcionados</div>
            </div>
            <button 
              type="button" 
              className="btn btn-success"
              onClick={handleButtonClick}
            >
              Registrar
            </button>
          </form><br />
        </div>
      </div>
    </div>
  );
}

export default FormularioRegistro;
