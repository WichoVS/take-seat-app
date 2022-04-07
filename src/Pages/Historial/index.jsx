import React from 'react';
import '../../Assets/Styles/Global/global.css';
import '../../Assets/Styles/historial.css';
import NavBarra from '../../Layouts/Header/NavBar';
import FooterBarra from '../../Layouts/Footer/Footer';

export default function Historial() {
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
                <div className="col-md-12 mt-4">
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
                      <tr>
                        <td>Tomatillos</td>
                        <td>Enero 15, 2022</td>
                        <td>$225</td>
                      </tr>
                      <tr>
                        <td>Olive Garden</td>
                        <td>Febrero 02, 2022</td>
                        <td>$225</td>
                      </tr>
                      <tr>
                        <td>Giardinno&apos;s</td>
                        <td>Marzo 23, 2022</td>
                        <td>$225</td>
                      </tr>
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
