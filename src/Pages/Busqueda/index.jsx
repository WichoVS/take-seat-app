/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Header from '../../Layouts/Header/NavBar';
import Footer from '../../Layouts/Footer/Footer';
import InputText from '../../Components/InputText';
import InputSelect from '../../Components/InputSelect';
import { GetAllCategorias } from '../../Services/Categorias/categorias';
import { GetRestaurantesByFilter } from '../../Services/Restaurantes/restaurantes';

export default function Busqueda() {
  const [categorias, setCategorias] = useState([]);
  const [busqueda, setBusqueda] = useState({
    Restaurante: '',
    Categoria: '',
  });
  const [restaurantes, setRestaurantes] = useState([]);

  const onChangeText = (e) => {
    setBusqueda({ ...busqueda, [e.target.name]: e.target.value });
  };

  useEffect(async () => {
    const { success: cS, message: cM, data: cD } = await GetAllCategorias();
    if (cS) {
      setCategorias(cD);
    } else {
      Swal.fire(cM);
    }

    const { success: rS, message: rM, data: rD } = await GetRestaurantesByFilter(busqueda);
    if (rS) {
      setRestaurantes(rD);
    } else {
      Swal.fire(rM);
    }
  }, []);

  const onBuscar = async () => {
    const { success: rS, message: rM, data: rD } = await GetRestaurantesByFilter(busqueda);
    if (rS) {
      setRestaurantes(rD);
    } else {
      Swal.fire(rM);
    }
  };

  return (
    <div className="body">
      <Header />

      <div className="main-wrapper">
        <section className="page_header">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="text-uppercase">Búsqueda</h2>
              </div>
            </div>
          </div>
        </section>

        <div className="shop-content">
          <div className="container">
            <div className="row">
              <aside className="col-md-3">
                <div className="side-widget">
                  <div className="search">
                    <InputText
                      label="Restaurante"
                      onChangeText={onChangeText}
                      name="Restaurante"
                      id="Restaurante"
                      value={busqueda.Restaurante}
                      active
                    />
                  </div>
                </div>
                <div className="side-widget">
                  <div className="search">
                    <InputSelect
                      label="Categoría"
                      onChangeText={onChangeText}
                      name="Categoria"
                      id="Categoria"
                      obj={busqueda.Categoria}
                      dataOptions={categorias}
                    />
                  </div>
                </div>
                <button type="button" onClick={onBuscar} className="btn btn-default load-more">
                  BUSCAR
                </button>
              </aside>

              <div style={{ minHeight: '368px' }} className="col-md-9">
                <div className="shop-grid">
                  <span>Resultados</span>
                </div>
                <div className="shop-products">
                  <div className="row">
                    {restaurantes.map((r) => (
                      <div key={r._id} className="col-md-4 col-sm-6">
                        <div className="product-info">
                          <div className="product-img">
                            <img className="img-fluid" src={r.Imagen} alt="" />
                          </div>
                          <h4>
                            <Link to={`/Restaurante/${r._id}`}>{r.Nombre}</Link>
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
