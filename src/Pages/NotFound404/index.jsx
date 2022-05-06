import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h2>Página no Encontrada</h2>
      <p>
        <Link to="/">Volver a Inicio</Link>
      </p>
    </div>
  );
}
