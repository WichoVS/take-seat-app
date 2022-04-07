import React from 'react';
import { Link } from 'react-router-dom';
import '../../Assets/Styles/reservacionCreada.css';
import check from '../../Assets/Styles/Global/img/check.png';

export default function ReservacionCreada() {
  return (
    <div className="body">
      <div className="main-wrapper">
        <section className="page_header">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="text-uppercase">Reservacion Creada</h2>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="giant-space">
                <p>
                  <img src={check} alt="Tick" />
                </p>
                <h2>GRACIAS</h2>
                <p className="wow fadeInUp">
                  Impresionante. Su solicitud ha sido recibida y su reservación hecha.{' '}
                </p>
                <p className="top-space-lg">
                  <Link to="/" onclick="history.go(-1);" className="btn btn-success btn-lg">
                    Volver
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
