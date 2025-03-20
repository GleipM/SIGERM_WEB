import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para navegación
import 'bootstrap/dist/css/bootstrap.min.css';
import mesero from './../img/mesero.png';
import categorias from './../img/categorias.png';
import Home from './../img/home.png';
import menu from './../img/menu.png';
import mesa from './../img/mesas.png';
import reseñas from './../img/reseña.png';

function Sidebar() {
  return (
    <div className="d-flex flex-column text-white" style={{ width: '250px', backgroundColor: '#9B1C31' }}>
      <div className="pt-3 px-3">
        <h4 className="text-center">RESTAURANT</h4>
        <hr />
      </div>
      <ul className="nav nav-pills flex-column mb-auto">
        <li>
          <Link to="/home" className="nav-link text-white" style={{ backgroundColor: '#F47497' }}>
            <img
              src={Home}
              alt="Dashboard"
              style={{ width: '40px', height: '40px', marginRight: '8px' }}
            />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/meseros" className="nav-link text-white">
            <img
              src={mesero}
              alt="Meseros"
              style={{ width: '40px', height: '40px', marginRight: '8px' }}
            />
            Meseros
          </Link>
        </li>
        <li>
          <Link to="/mesas" className="nav-link text-white">
            <img
              src={mesa}
              alt="Mesas"
              style={{ width: '40px', height: '40px', marginRight: '8px' }}
            />
            Mesas
          </Link>
        </li>
        <li>
          <Link to="/categorias" className="nav-link text-white">
            <img
              src={categorias}
              alt="Categorías"
              style={{ width: '40px', height: '40px', marginRight: '8px' }}
            />
            Categorías
          </Link>
        </li>
        <li>
          <Link to="/productos" className="nav-link text-white">
            <img
              src={menu}
              alt="Productos"
              style={{ width: '40px', height: '40px', marginRight: '8px' }}
            />
            Productos
          </Link>
        </li>
        <li>
          <Link to="/reseñas" className="nav-link text-white">
            <img
              src={reseñas}
              alt="Reseñas"
              style={{ width: '40px', height: '40px', marginRight: '8px' }}
            />
            Reseñas
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;