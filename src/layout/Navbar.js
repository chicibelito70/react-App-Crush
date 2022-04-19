import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to="Login">
              Iniciar
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to="Registrar ">
              Registrarse
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
