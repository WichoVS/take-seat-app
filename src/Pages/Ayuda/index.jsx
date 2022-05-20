import React from 'react';
import Header from '../../Layouts/Header/NavBar';
import Footer from '../../Layouts/Footer/Footer';

function Ayuda() {
  return (
    <div className="body">
      <div className="main-wrapper">
        <Header />
      </div>

      <section className="page_header">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="text-text-uppercase wow fadeInDown">Ayuda</h2>
              <p className="text-white wow fadeInUp">Consula las Preguntas frecuentes</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-header wow fadeInDown">
                <h1 className="white">
                  Servicio especial<small>Preguntas Frecuentes</small>
                </h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="services-slider wow fadeIn">
                <div className="row justify-content-between">
                  <div className="col-5 service-content text-center">
                    <h4 className="text-uppercase">¿Por qué usar Take Seat?</h4>
                    <p>
                      Take Seat ayuda a que los clientes puedan hacer reservaciones a restaurantes
                      donde la demanda suele ser grande, así con tiempo podrás seleccionar tu hora y
                      fecha de llegada sin ningún inconveniente.
                    </p>
                  </div>
                  <div className="col-5 service-content text-center">
                    <h4 className="text-uppercase">El Secreto Detrás de las Reservaciones</h4>
                    <p>
                      Cuando reservas una mesa en el sitio web de Take Seat, su reservación al
                      instante se registra en la base de datos del restaurante, el mismo que el
                      anfitrión del restaurante utiliza para rastrear todas las reservaciones.
                    </p>
                  </div>
                </div>
                <div className="row justify-content-between">
                  <div className="col-5 service-content text-center">
                    <h4 className="text-uppercase">¿Cuál es su política de inasistencia?</h4>
                    <p>
                      Puede anular una reservación llamando al restaurante, La inasistencias son
                      perjudiciales para el negocio, por lo que si un usuario acumula 4
                      inasistencias dentro de de 12 meses, su cuenta de Take Seat se desactivará.
                    </p>
                  </div>
                  <div className="col-5 service-content text-center">
                    <h4 className="text-uppercase">¿Cómo veo mi reservación?</h4>
                    <p>En el menú principal, en el apartado de Reservación.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />

      <section className="services">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-header wow fadeInDown">
                <h1 className="white">
                  Servicios Especiales<small>Reservaciones</small>
                </h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="services-slider wow fadeIn">
                <div className="row justify-content-between">
                  <div className="col-5 service-content text-center">
                    <h4 className="text-uppercase">¿Cómo hacer una reservación?</h4>
                    <p>
                      Ingrese en la página principal y seleccione el restaurante deseado, después en
                      la página del restaurante aparecerá la opción de hacer la reservación,
                      selecciona el horario, método de pago y haga la reservación.
                    </p>
                  </div>
                  <div className="col-5 service-content text-center">
                    <h4 className="text-uppercase">¿El método de pago es seguro?</h4>
                    <p>
                      En Take Seat te garantizamos que tu dinero está a salvo para poder disfrutar
                      de la mejor experiencia dentro de nuestra fácil y accesible página.
                    </p>
                  </div>
                </div>
                <div className="row justify-content-between">
                  <div className="col-5 service-content text-center">
                    <h4 className="text-uppercase">
                      ¿Hay tarifas de anulación por inasistencia en las reservaciones?
                    </h4>
                    <p>
                      Este restaurante se reserva el derecho de cobrar una tarifa de anulación de
                      acuerdo con su política.
                    </p>
                  </div>
                  <div className="col-5 service-content text-center">
                    <h4 className="text-uppercase">Puntos Take Seat</h4>
                    <p>
                      Los puntos ganados a través de ciertas reservas se acumulan y se asocian con
                      su cuenta de Take Seat y pueden canjearse en una variedad de recompensas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />

      <Footer />
    </div>
  );
}

export default Ayuda;
