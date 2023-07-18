import React, { useState } from "react";
import "./loginPage.css";
import "../App.css";
import FormLogin from "../components/form";
import { useAuth } from "../context/authProvider";
import { FcGoogle } from "react-icons/fc";
import { useNavigate} from "react-router-dom";

function LoginPage() {
  const auth = useAuth();
  const navigate = useNavigate()
  const [question, setQuestion] = useState(false);
  const [alert, setAlert] = useState(false);
  const [name, setName] = useState(false);
  const [lastname, setLastname] = useState(false);
  const [number, setNumber] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const handleContinue = () => {
    if (name && lastname && number && email) {
      auth.addUser({
        nombre: name,
        apellido: lastname,
        numero: number,
        correo: email,
      });
      auth.register(email,password)
      navigate('/home')
    } else {
      setAlert("Primero debes llenar todos los campos");
    }
  };
  const handleGoogle = () => {
    if(name && lastname && number){
      auth.loginWithGoogle()
    }else{
      setAlert("Primero debes llenar los primeros tres campos")
    }
  }
  return (
    <section className="background-radial-gradient mt-5 overflow-hidden min-vh-100">
      <div className="container text-center text-lg-start my-5">
        <div className="row gx-lg-5 align-items-center mb-5">
          <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
            <h1
              className="my-5 display-5 fw-bold ls-tight"
              style={{ color: "#000" }}
            >
              GARAGE PANAMA <br />
              <span className="text-primary">Todo en un solo lugar</span>
            </h1>
            <p className="mb-4 opacity-70" style={{ color: "#000" }}>
              Crea o Inicia sesion, nuestro sistema automaticamente guardara tus
              datos para brindarte las mejores ofertas y descuentos , si deseas
              asesoria totalmente gratis puedes contactar a nuestro equipo de
              soporte para brindarte mas informacion .
            </p>
          </div>
          <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div
              id="radius-shape-1"
              className="position-absolute rounded-circle shadow-5-strong example-animation"
            ></div>
            <div
              id="radius-shape-2"
              className="position-absolute shadow-5-strong example-animation"
            ></div>

            <div className="card bg-glass">
              <div className="card-body px-4 py-5 px-md-5">
                {question === false ? (
                  <div className="row">
                    <p className="text-danger">{alert}</p>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example1"
                          className="form-control"
                          onChange={(e) => setName(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form3Example1">
                          Nombre
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example10"
                          className="form-control"
                          onChange={(e) => setLastname(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form3Example2">
                          Apellido
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="number"
                          id="form3Example8"
                          className="form-control"
                          onChange={(e) => setNumber(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form3Example2">
                          Numero de Telefono / Celular
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example2"
                          className="form-control"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form3Example2">
                          Correo Electronico / E-mail
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="password"
                          id="form3Example7"
                          className="form-control"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form3Example2">
                          Contraseña
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          id="form3Example2"
                          className="form-check-input"
                        />
                        <label className="form-label" htmlFor="form3Example2">
                          click aqui para recibir descuentos y promociones?
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <button
                          className="btn btn-primary example-animation"
                          onClick={() => handleContinue()}
                        >
                          Continuar
                        </button>
                      </div>
                    </div>
                    <div className="text-center">
                      <p>Inicia Sesion con Google</p>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <FcGoogle
                          onClick={() => handleGoogle()}
                          className="icon-google"
                        />
                      </button>
                    </div>
                    <div className="col-md-12 mb-4">
                      <div className="form-outline cursor-pointer">
                        <p
                          onClick={() => setQuestion(true)}
                          className="text-primary text-center"
                        >
                          si ya tiene una cuenta existente , continue aqui
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <FormLogin />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
