/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import '../../Assets/Styles/Global/global.css';
import '../../Assets/Styles/historial.css';
import NavBarra from '../../Layouts/Header/NavBar';
import FooterBarra from '../../Layouts/Footer/Footer';
import { GetMisReservaciones } from '../../Services/Reservaciones/reservaciones';

export default function Historial() {
  const [reservaciones, setReservaciones] = useState([]);
  const [userLog] = useState(JSON.parse(localStorage.getItem('user')));

  useEffect(async () => {
    const { success, message, data } = await GetMisReservaciones(userLog);
    if (success) {
      setReservaciones(data);
    } else {
      Swal.fire(message);
    }
  }, []);

  const FechaToLocal = (fecha) => {
    const newF = new Date(fecha).toLocaleDateString();
    return newF;
  };

  return (
    <div className="body">
      <NavBarra />
      <div className="main-wrapper">
        <section className="page_header">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="text-uppercase">HISTORIAL DE RESERVACIÓN</h2>
              </div>
            </div>
          </div>
        </section>

        <section className="shop-content">
          <div>
            <div className="container">
              <div className="row">
                <div style={{ minHeight: '368px' }} className="col-md-12 mt-4">
                  <h3 className="historial-h3">Órdenes Recientes</h3>
                  <br />
                  <table className="cart-table account-table table table-bordered">
                    <thead>
                      <tr>
                        <th>Restaurante</th>
                        <th>Fecha</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {reservaciones.map((r) => (
                        <tr key={r._id}>
                          <td>{r.Restaurante.Nombre}</td>
                          <td>{FechaToLocal(r.Dia)}</td>
                          <td>${r.Costo}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <FooterBarra />
    </div>
  );
}
