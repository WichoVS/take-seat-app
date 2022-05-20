/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../Assets/Styles/Global/global.css';
import '../../Assets/Styles/menuRestaurant.css';
import NavBarra from '../../Layouts/Header/NavBar';
import FooterBarra from '../../Layouts/Footer/Footer';

import { GetItemsMenuByRestaurante } from '../../Services/ItemsMenu/itemsMenu';

export default function Menu() {
  const { restaurante: restauranteId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(async () => {
    const { success: sI, message: mI, data: dI } = await GetItemsMenuByRestaurante(restauranteId);
    if (sI) {
      setItems(dI);
    } else {
      console.log(dI);
    }
  }, []);

  return (
    <div>
      <NavBarra />
      <div className="main-wrapper">
        <section className="page_header">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="text-uppercase text-white">Menu</h2>
              </div>
            </div>
          </div>
        </section>

        <div className="d-flex justify-content-center mt-5 mb-4">
          <hr className="bar-under-text" />
        </div>

        <section className="menu space60">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="page-header wow fadeInDown" />
              </div>
            </div>
            <div className="food-menu wow fadeInUp">
              <div className="row">
                <div className="col-md-12">
                  <div className="menu-tags">
                    <span data-filter="*" className="tagsort-active">
                      Todos
                    </span>
                    <span data-filter=".starter">Entradas</span>
                    <span data-filter=".breakfast">Desayuno</span>
                    <span data-filter=".lunch">Platos Fuertes</span>
                    <span data-filter=".dinner">Bebidas</span>
                    <span data-filter=".desserts">Postres</span>
                  </div>
                </div>
              </div>
              <div className="row menu-items">
                {items.map((i) => (
                  <div key={i._id} className="menu-item col-sm-6 col-xs-12 starter dinner desserts">
                    <div className="clearfix menu-wrapper">
                      <h4>{i.Nombre}</h4>
                      <span className="price">{`$${i.Costo}`}</span>
                      <div className="dotted-bg" />
                    </div>
                    <p>{i.Descripcion}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <FooterBarra />
      </div>
    </div>
  );
}
