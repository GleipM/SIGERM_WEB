import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar'; // Importa el Sidebar

const meseros = [
  { img: 'https://via.placeholder.com/50', nombre: 'Maximiliano Torres', correo: 'maximiliano@gmail.com', tipo: 'líder' },
  { img: 'https://via.placeholder.com/50', nombre: 'Ana Hernandez', correo: 'anahernandez@gmail.com', tipo: 'mesero' },
  { img: 'https://via.placeholder.com/50', nombre: 'Julio Alvares', correo: 'julioalvares@gmail.com', tipo: 'mesero' },
  { img: 'https://via.placeholder.com/50', nombre: 'Alison Martínez', correo: 'alisonmartinez@gmail.com', tipo: 'mesero' }
];

function GestionMeseros() {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="container-fluid p-4">
        <div className="d-flex justify-content-between align-items-center">
          <h3>Gestión de Meseros</h3>
          <button className="btn btn-danger">+ Agregar</button>
        </div>

        {/* Tabla de Meseros */}
        <table className="table table-bordered mt-4">
          <thead className="table-danger">
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Contraseña</th>
              <th>Tipo</th>
            </tr>
          </thead>
          <tbody>
            {meseros.map((mesero, index) => (
              <tr key={index}>
                <td><img src={mesero.img} alt={mesero.nombre} className="rounded" width="50" /></td>
                <td>{mesero.nombre}</td>
                <td>{mesero.correo}</td>
                <td>******</td>
                <td>
                  <button className="btn btn-outline-danger">{mesero.tipo}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GestionMeseros;
