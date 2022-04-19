import React, { useRef } from 'react';
import './registrar.css';
import { Agreusuario } from '../../logic/InicioS';
export default function Registrar() {
  const agaemail = useRef();
  const agaConstra = useRef();
  const arr = async () => {
    const email = agaemail.current.value;
    const constra = agaConstra.current.value;

    const art = await Agreusuario(email, constra);
    console.log(art);
  };

  return (
    <div class="overlay">
      <form onSubmit={arr}>
        <h1> Registrar</h1>
        <div class="con">
          <header class="head-form"></header>
          <br />
          <div class="field-set">
            <span class="input-item">
              <i class="fa fa-user-circle"></i>
            </span>
            <input
              ref={agaemail}
              class="form-input"
              id="txt-input"
              type="text"
              placeholder="Correo"
              required
            />

            <br />
            <span class="input-item">
              <i class="fa fa-key"></i>
            </span>
            <input
              ref={agaConstra}
              class="form-input"
              type="password"
              placeholder="Contraseña"
              id="pwd"
              name="Password"
              required
            />
            <span>
              <i
                class="fa fa-eye"
                aria-hidden="true"
                type="button"
                id="eye"
              ></i>
            </span>
            <br />
            <button class="log-in"> Registrar </button>
          </div>
          <div class="other">
            <button class="btn submits sign-up">
              <i class="fa fa-user-plus" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
