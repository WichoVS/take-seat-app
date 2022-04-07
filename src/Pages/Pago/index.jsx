/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import '../../Assets/Styles/pagoReservacion.css';

export default function Pago() {
  return (
    <div>
      <div className="main-wrapper">
        <section className="page_header">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="text-uppercase">PAGO</h2>
              </div>
            </div>
          </div>
        </section>

        <section className="shop-content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-md-offset-1">
                <br />
                <h4 className="text-start pago-h4">Tu Reservación</h4>
                <br />
                <table className="table table-bordered extra-padding">
                  <tbody>
                    <tr>
                      <th>Subtotal</th>
                      <td>
                        <span className="amount">$225</span>
                      </td>
                    </tr>
                    <tr>
                      <th>IVA</th>
                      <td>$0</td>
                    </tr>
                    <tr>
                      <th>Total</th>
                      <td>
                        <strong>
                          <span className="amount">$225</span>
                        </strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <h4 className="text-left">Método de Pago</h4>
                <br />
                <div className="payment-method">
                  <div className="row">
                    <form className="d-flex justify-content-between">
                      <div className="col-md-4">
                        <label>
                          <input name="payment" id="radio1" className="css-checkbox" type="radio" />
                          <span>Transferencia Interbancaria</span>
                        </label>
                        <div className="space20" />
                        <p>
                          Realice el pago directamente en nuestra cuenta bancaria y use su ID de
                          pedido como referencia.
                        </p>
                      </div>
                      <div className="col-md-4">
                        <label>
                          <input name="payment" id="radio3" className="css-checkbox" type="radio" />
                          <span>Paypal</span>
                        </label>
                        <div className="space20" />
                        <p>
                          Pagar a través de PayPal; puede pagar con su tarjeta de crédito si no
                          tiene una cuenta de PayPal
                        </p>
                      </div>
                    </form>
                  </div>
                  <br />
                  <form className="text-center">
                    <input
                      name="checkboxG2"
                      id="checkboxG2"
                      className="css-checkbox"
                      type="checkbox"
                    />
                    <span>Acepto los Términos y Condiciones</span>
                  </form>

                  <div className="text-center top-space-lg">
                    <Link to="/ReservacionCreada" className="btn btn-default btn-lg">
                      Pagar
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
