import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../context/authProvider";
import { useNavigate } from "react-router-dom";
function FormLogin() {
  const navigate = useNavigate()
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [alert, setAlert] = useState(false);
  const auth = useAuth();
  const handleGoogle = () => {
    auth.loginWithGoogle();
  };
  const handleEmail = (e) => {
    e.preventDefault();
    if (email && password) {
      auth.login(email, password);
      navigate('/home')
    } else {
      setAlert("Debes llenar todos los campos para continuar");
    }
  };
  return (
    <form>
      <p className="text-danger">{alert}</p>
      <div className="form-outline mb-4">
        <input
          type="email"
          id="form3Example3"
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="form-label" htmlFor="form3Example3">
          Email / Correo Electronico
        </label>
      </div>

      <div className="form-outline mb-4">
        <input
          type="password"
          id="form3Example4"
          className="form-control"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className="form-label" htmlFor="form3Example4">
          Contraseña
        </label>
      </div>
      <div className="form-check d-flex justify-content-center mb-4">
        <input
          className="form-check-input me-2"
          type="checkbox"
          value=""
          id="form2Example33"
        />
        <label className="form-check-label" htmlFor="form2Example33">
          Recibir ofertas y descuentos
        </label>
      </div>
      <button onClick={(e)=> handleEmail(e)} className="btn btn-primary btn-block mb-4">
        Iniciar Sesion
      </button>
      <div className="text-center">
        <p>Inicia Sesion con Google</p>
        <button type="button" className="btn btn-link btn-floating mx-1">
          <FcGoogle onClick={() => handleGoogle()} className="icon-google" />
        </button>
      </div>
    </form>
  );
}

export default FormLogin;
