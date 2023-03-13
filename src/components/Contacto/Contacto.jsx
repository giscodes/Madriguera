import { useRef } from "react";

export const Contacto = () => {
  const datosForm = useRef();
  const consultarForm = (e) => {
    e.preventDefault();
    
    
  }

  return (
    <>
      <div className="container contForm">
        <form onSubmit={consultarForm} ref={datosForm}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre y Apellido
            </label>
            <input type="text" className="form-control" name="nombre" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" name="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="verificarEmail" className="form-label">
              Verificar Email
            </label>
            <input type="email" className="form-control" name="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="mensaje" className="form-label">
              Mensaje
            </label>
            <input type="text" className="form-control" name="mensaje" />
          </div>
          <div className="mb-3">
            <label htmlFor="celular" className="form-label">
              Numero telefonico
            </label>
            <input type="number" className="form-control" name="celular" />
          </div>
          <div className="mb-3">
            <label htmlFor="direccion" className="form-label">
              Direccion
            </label>
            <input type="text" className="form-control" name="direccion" />
          </div>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};
