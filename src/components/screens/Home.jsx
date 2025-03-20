import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { VictoryBar, VictoryPie } from 'victory';
import { data } from '../utils/informe';
import Sidebar from './Sidebar'; // Importa el Sidebar

const pieData = [
  { x: 'Día', y: 60 },
  { x: 'Noche', y: 40 },
];

function AdminPanel() {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="container-fluid p-4">
        <div className="d-flex justify-content-between align-items-center">
          <h3>Panel de Administración</h3>
          <button className="btn btn-danger">PDF</button>
        </div>

        {/* Chart Section */}
        <div className="d-flex justify-content-between mt-4">
          <div className="p-3 rounded mt-3">
            <h5>Ventas</h5>
            <VictoryBar data={data} x="day" y="earnings" style={{ data: { fill: 'maroon' } }} />
          </div>
          <div>
            <h5>Ventas Totales: <strong>980</strong></h5>
            <VictoryPie data={pieData} colorScale={["#D81B60", "#F06292"]} radius={80} />
          </div>
        </div>

        {/* Table */}
        <table className="table table-striped table-bordered mt-4">
          <thead className="table-dark">
            <tr>
              <th>Día</th>
              <th>Ingresos Día ($)</th>
              <th>Ingresos Tarde ($)</th>
              <th>Total ($)</th>
              <th>Clientes Día</th>
              <th>Clientes Tarde</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Lunes</td><td>2500</td><td>1500</td><td>4000</td><td>120</td><td>90</td></tr>
            <tr><td>Martes</td><td>500</td><td>300</td><td>800</td><td>40</td><td>30</td></tr>
            <tr><td>Miércoles</td><td>600</td><td>400</td><td>1000</td><td>50</td><td>40</td></tr>
            <tr><td>Jueves</td><td>2000</td><td>1500</td><td>3500</td><td>100</td><td>80</td></tr>
            <tr><td>Viernes</td><td>800</td><td>1200</td><td>2000</td><td>70</td><td>60</td></tr>
            <tr><td>Sábado</td><td>2800</td><td>1700</td><td>4500</td><td>150</td><td>120</td></tr>
            <tr><td>Domingo</td><td>5000</td><td>3000</td><td>8000</td><td>200</td><td>180</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminPanel;