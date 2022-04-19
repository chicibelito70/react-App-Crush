import React from 'react';
//import './login.css';
export default function publish() {
  return (
    <div class="form-group">
      <label for="examplepublic">Publicaciones </label>
      <input
        type="public"
        class="form-control"
        id="publi"
        aria-describedby="publiclHelp"
        placeholder="Introducir una Publicacion"
      />
      <button type="button" className="btn btn-dark">
        Publicar
      </button>
    </div>
  );
}
