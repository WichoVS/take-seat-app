/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../../Assets/Styles/Global/global.css';
import '../../Assets/Styles/pagoReservacion.css';
import NavBarra from '../../Layouts/Header/NavBar';
import FooterBarra from '../../Layouts/Footer/Footer';
import { GetReservacionById, PagarReservacion } from '../../Services/Reservaciones/reservaciones';

export default function Pago() {
  const { reservacion: reservacionId } = useParams();
  const [reservacion, setReservacion] = useState({});
  const [tyC, setTyC] = useState(false);

  const navigate = useNavigate();

  useEffect(async () => {
    const { success, message, data } = await GetReservacionById(reservacionId);
    if (success) {
      setReservacion(data);
    } else {
      Swal.fire(message);
    }
  }, []);

  const onCheckboxHandle = (e) => {
    setTyC(!tyC);
  };

  const onPagar = async () => {
    if (tyC) {
      const { success, message } = await PagarReservacion(reservacionId);
      if (success) {
        navigate('/ReservacionCreada');
      } else {
        Swal.fire({ icon: 'error', text: message });
      }
    } else {
      Swal.fire({ icon: 'error', text: 'Debes de aceptar los términos y condiciones' });
    }
  };

  return (
    <div>
      <NavBarra />
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
                <h4 className="text-start pago-h4">Tu Reservación: {reservacion._id}</h4>
                <br />
                <table className="table table-bordered extra-padding">
                  <tbody>
                    <tr>
                      <th>Subtotal</th>
                      <td>
                        <span className="amount">${reservacion.Costo}</span>
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
                          <span className="amount">${reservacion.Costo}</span>
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
                          <input
                            style={{ display: 'none' }}
                            name="payment"
                            id="radio1"
                            className="css-checkbox"
                            type="radio"
                          />
                          <span>Transferencia Interbancaria</span>
                        </label>
                        <div className="space20" />
                        <p>
                          Realice el pago directamente en nuestra cuenta bancaria y use su ID de
                          Reservacion como referencia.
                        </p>
                        <p>
                          <strong> Cuenta:</strong> 4423 4151 0985 4721
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
                      value={tyC}
                      onChange={onCheckboxHandle}
                      checked={tyC}
                    />
                    <span>Acepto los Términos y Condiciones</span>
                  </form>

                  <div className="text-center top-space-lg">
                    <button
                      type="button"
                      onClick={onPagar}
                      to="/ReservacionCreada"
                      className="btn btn-default btn-lg"
                    >
                      Pagar
                    </button>
                  </div>
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
