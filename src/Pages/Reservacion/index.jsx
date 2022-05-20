/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../../Assets/Styles/Global/global.css';
import '../../Assets/Styles/reservacion.css';
import NavBarra from '../../Layouts/Header/NavBar';
import FooterBarra from '../../Layouts/Footer/Footer';
import {
  GetInfoReservacionesRestaurante,
  GetRestauranteById,
} from '../../Services/Restaurantes/restaurantes';
import InputText from '../../Components/InputText';
import { CreateReservacion } from '../../Services/Reservaciones/reservaciones';

export default function Reservacion() {
  const { restaurante: restauranteId } = useParams();
  const [reservacion, setReservacion] = useState({
    _id: null,
    UsuarioReservo: JSON.parse(localStorage.getItem('user')),
    Restaurante: restauranteId,
    Horario: 0,
    Dia: '',
    Costo: 0,
    FechaCreacion: null,
    FechaModificacion: null,
    Activo: true,
    Pagado: false,
  });
  const [informacion, setInformacion] = useState({});
  const [getInfo, setGetInfo] = useState({
    _id: restauranteId,
    Fecha: new Date().toISOString(),
    Hora: 0,
  });

  const navigate = useNavigate();

  const NumberToHora = (numero) => {
    const hora = numero.toString();
    const fP = hora.slice(0, 2);
    const sP = hora.slice(2);

    return `${fP}:${sP}`;
  };

  useEffect(async () => {
    const { success: sR, message: mR, data: dR } = await GetInfoReservacionesRestaurante(getInfo);
    if (sR) {
      setReservacion({ ...reservacion, Costo: dR.Costo });
      dR.LugaresDisponibles = dR.LugaresDisponibles.toString();
      dR.Costo = `$${dR.Costo.toString()}`;
      dR.HorarioApertura = NumberToHora(dR.HorarioApertura);
      dR.HorarioCierre = NumberToHora(dR.HorarioCierre);
      setInformacion(dR);
    } else {
      Swal.fire(dR);
    }
  }, [getInfo]);

  const onChangeText = (e) => {
    setReservacion({ ...reservacion, [e.target.name]: e.target.value });
  };
  const onChangeFecha = (e) => {
    const year = parseInt(e.target.value.split('-')[0], 10);
    const mes = parseInt(e.target.value.split('-')[1], 10) - 1;
    const dia = parseInt(e.target.value.split('-')[2], 10);

    const fecha = new Date(year, mes, dia);
    fecha.setHours(0, 0, 0);

    setGetInfo({ ...getInfo, Fecha: fecha.toString() });
    setReservacion({ ...reservacion, Dia: fecha.toString() });
  };
  const onChangeHora = (e) => {
    const Hora = e.target.value.split(':')[0];
    const Minutos = '00';
    const HoraToInt = `${Hora}${Minutos}`;

    setGetInfo({ ...getInfo, Hora: parseInt(HoraToInt, 10) });
    setReservacion({ ...reservacion, Horario: parseInt(HoraToInt, 10) });
  };

  const validateData = async () => {
    const HA = parseInt(informacion.HorarioApertura.replace(':', ''), 10);
    const HC = parseInt(informacion.HorarioCierre.replace(':', ''), 10);

    if (reservacion.Horario === 0 || reservacion.Horario < HA || reservacion.Horario > HC) {
      Swal.fire({
        icon: 'error',
        title: 'Elige un Horario',
        text: 'Elige un Horario Valido',
      });
    } else if (reservacion.Dia === '') {
      Swal.fire({
        icon: 'error',
        title: 'Elige un Día',
      });
    } else if (parseInt(informacion.LugaresDisponibles, 10) < 1) {
      Swal.fire({
        icon: 'error',
        title: 'No hay lugares disponibles en este Horario',
      });
    } else {
      const { success, message, data } = await CreateReservacion(reservacion);
      if (success) {
        Swal.fire('Se ha creado la Reservación');
        navigate(`/Pago/${data._id}`);
      } else {
        Swal.fire(data);
      }
    }
  };

  return (
    <div>
      <NavBarra />
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
            <div className="reservation-form wow fadeInUp">
              <form>
                <div className="row col-12 justify-content-center">
                  <div className="col-3">
                    <InputText
                      label="Horario de Apertura"
                      onChangeText={onChangeText}
                      name="HorarioApertura"
                      id="HorarioApertura"
                      value={informacion.HorarioApertura}
                      active={false}
                    />
                  </div>
                  <div className="col-3">
                    <InputText
                      label="Horario de Cierre"
                      onChangeText={onChangeText}
                      name="HorarioCierre"
                      id="HorarioCierre"
                      value={informacion.HorarioCierre}
                      active={false}
                    />
                  </div>
                  <div className="col-3">
                    <InputText
                      label="Lugares Disponibles"
                      onChangeText={onChangeText}
                      name="LugaresDisponibles"
                      id="LugaresDisponibles"
                      value={informacion.LugaresDisponibles}
                      active={false}
                    />
                  </div>
                  <div className="col-3">
                    <InputText
                      label="Costo"
                      onChangeText={onChangeText}
                      name="Costo"
                      id="Costo"
                      value={informacion.Costo}
                      active={false}
                    />
                  </div>
                </div>
              </form>
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
                        onChange={onChangeFecha}
                        type="date"
                        name="date"
                        className="form-control"
                        id="datepicker"
                        placeholder="Seleccione una fecha"
                        title="Por favor, seleccione una fecha"
                      />
                      <i className="fa fa-calendar-o" />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="form-group">
                      <label htmlFor="timepicker">Hora</label>
                      <input
                        type="time"
                        onChange={onChangeHora}
                        className="form-control"
                        id="timepicker"
                        name="time"
                        placeholder="Selecciona tu horario"
                        title="Selecciona tu horario"
                        step="3600"
                        min="10"
                        max="23"
                        required
                      />
                      <i className="fa fa-clock-o" />
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-12">
                    <div className="reservation-btn">
                      <button
                        type="button"
                        className="btn btn-default btn-lg"
                        onClick={validateData}
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
      <FooterBarra />
    </div>
  );
}
