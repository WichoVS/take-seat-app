/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../../Assets/Styles/reservacion.css';

export default function Reservacion() {
  return (
    <div>
      <div className="main-wrapper">
        <section className="page_header mb-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="text-uppercase text-white">Menu</h2>
              </div>
            </div>
          </div>
        </section>

        <section className="reservation">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="page-header wow fadeInDown">
                  <h1>Reservación</h1>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <hr className="bar-under-text mb-4" />
            </div>
            <div className="reservation-form wow fadeInUp">
              <form action="php/reservation.php" id="reservationform" method="POST">
                <div className="row">
                  <div className="col-md-4 col-sm-6">
                    <div className="form-group">
                      <label htmlFor="datepicker">Fecha</label>
                      <input
                        type="text"
                        name="date"
                        className="form-control"
                        id="datepicker"
                        placeholder="Seleccione una fecha"
                        title="Por favor, seleccione una fecha"
                        required
                      />
                      <i className="fa fa-calendar-o" />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="form-group">
                      <label htmlFor="name">Nombre</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Nombre completo"
                        title="Nombre Completo"
                        required
                      />
                      <i className="fa fa-pencil-square-o" />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="form-group">
                      <label htmlFor="timepicker">Hora</label>
                      <input
                        type="text"
                        className="form-control"
                        id="timepicker"
                        name="time"
                        placeholder="Selecciona tu horario"
                        title="Selecciona tu horario"
                        required
                      />
                      <i className="fa fa-clock-o" />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="form-group">
                      <label htmlFor="email">Correo Electrónico</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Correo Electrónico"
                        title="Ingresa tu correo electrónico"
                        required
                      />
                      <i className="fa fa-envelope-o" />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="form-group">
                      <label htmlFor="guests">Acompañantes</label>
                      <input
                        className="form-control"
                        type="number"
                        id="guests"
                        name="guests"
                        placeholder="Número de acompañantes"
                        title="Escriba el número de acompañantes"
                        required
                      />
                      <i className="fa fa-user" />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="form-group">
                      <label htmlFor="phone">Número Telefónico</label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        placeholder="Número Telefónico"
                        title="Escriba su número telefónico"
                        required
                      />
                      <i className="fa fa-phone" />
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-12">
                    <div className="reservation-btn">
                      <button
                        type="submit"
                        className="btn btn-default btn-lg"
                        id="js-reservation-btn"
                        href="RESERVACION_HECHA.html"
                      >
                        Hacer Reservacion
                      </button>
                      <div
                        id="js-reservation-result"
                        data-success-msg="Reservación Exitosa"
                        data-error-msg="Oops. Algo Salió Mal."
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
