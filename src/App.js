import React from 'react';
import './style.css';
import Login from './compo/Login/Login';
import Registrar from './compo/Regis/Registrar';
import Home from './compo/Home/home';
import Publish from './compo/Publish';
import Navbar from './layout/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
export default function App() {
  return (
    <div>
      {
        // <Login />
        //<Registrar />
        // <Home />
     // <Publish />
      }
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="Registrar" element={<Registrar />} />
          <Route path="Login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
