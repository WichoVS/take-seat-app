/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  CancelarReservacion,
  GetReservacionesByRestaurante,
} from '../../Services/Reservaciones/reservaciones';

export default function ReservacionesComponent() {
  const [reservaciones, setReservaciones] = useState([]);
  const { restaurante: restauranteId } = useParams();

  useEffect(async () => {
    const { success, message, data } = await GetReservacionesByRestaurante(restauranteId);
    if (success) {
      setReservaciones(data);
    } else {
      console.log(data);
    }
  }, []);

  const onCancelar = async (e) => {
    e.stopPropagation();
    const { id } = e.target.dataset;
    const { success, message, data } = await CancelarReservacion(id);
    if (success) {
      const {
        success: s,
        message: m,
        data: d,
      } = await GetReservacionesByRestaurante(restauranteId);
      if (success) {
        setReservaciones(d);
      } else {
        console.log(data);
      }
    } else {
      console.log(data);
    }
  };

  const NumberToHora = (numero) => {
    const hora = numero.toString();
    const fP = hora.slice(0, 2);
    const sP = hora.slice(2);

    return `${fP}:${sP}`;
  };

  const DateToFecha = (date) => {
    const _date = new Date(date).toLocaleDateString();
    return _date;
  };

  return (
    <>
      <div className="row col-12 mt-4">
        <h2 className="col-12 text-center">Reservaciones</h2>
      </div>
      <div style={{ minHeight: '368px' }} className="col-12 d-flex justify-content-center my-4">
        <div className="col-10">
          <div className="row">
            <table className="col-12 table table-bordered table-striped table-responsive-xl">
              <thead className="table-success">
                <tr>
                  <th className="col-2 text-center">Id Reservación</th>
                  <th className="col-3 text-center">Reservado Por</th>
                  <th className="col-1 text-center">Horario</th>
                  <th className="col-2 text-center">Dia</th>
                  <th className="col-1 text-center">Costo</th>
                  <th className="col-1 text-center">Pagado</th>
                  <th className="col-1 text-center">Cancelado</th>
                  <th className="col-2 text-center">Cancelar</th>
                </tr>
              </thead>
              <tbody>
                {reservaciones.map((r) => (
                  <tr key={r._id}>
                    <td>{r._id}</td>
                    <td>{r.UsuarioReservo}</td>
                    <td>{NumberToHora(r.Horario)}</td>
                    <td>{DateToFecha(r.Dia)}</td>
                    <td>{`$ ${r.Costo}`}</td>
                    <td>{r.Pagado ? 'Pagado' : 'No Pagado'}</td>
                    <td>{r.Activo ? 'Activo' : 'Cancelado'}</td>
                    <td className="text-center">
                      <button type="button" onClick={onCancelar} data-id={r._id}>
                        Cancelar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
