import React from 'react';
import '../../Assets/Styles/Global/global.css';
import '../../Assets/Styles/menuRestaurant.css';

export default function Menu() {
  return (
    <div>
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
                <div className="menu-item col-sm-6 col-xs-12 starter dinner desserts">
                  <div className="clearfix menu-wrapper">
                    <h4>Pasta Alfredo</h4>
                    <span className="price">$225</span>
                    <div className="dotted-bg" />
                  </div>
                  <p>Fetuccini con crema de queso y camarón</p>
                </div>
                <div className="menu-item col-sm-6 col-xs-12 starter">
                  <div className="clearfix menu-wrapper">
                    <h4>Pasta Alfredo</h4>
                    <span className="price">$225</span>
                    <div className="dotted-bg" />
                  </div>
                  <p>Fetuccini con crema de queso y camarón</p>
                </div>
                <div className="menu-item col-sm-6 col-xs-12 breakfast desserts starter">
                  <div className="clearfix menu-wrapper">
                    <h4>Pasta Alfredo</h4>
                    <span className="price">$225</span>
                    <div className="dotted-bg" />
                  </div>
                  <p>Fetuccini con crema de queso y camarón</p>
                </div>
                <div className="menu-item col-sm-6 col-xs-12 breakfast">
                  <div className="clearfix menu-wrapper">
                    <h4>Pasta Alfredo</h4>
                    <span className="price">$225</span>
                    <div className="dotted-bg" />
                  </div>
                  <p>Fetuccini con crema de queso y camarón</p>
                </div>
                <div className="menu-item col-sm-6 col-xs-12 lunch starter breakfast">
                  <div className="clearfix menu-wrapper">
                    <h4>Pasta Alfredo</h4>
                    <span className="price">$225</span>
                    <div className="dotted-bg" />
                  </div>
                  <p>Fetuccini con crema de queso y camarón</p>
                </div>
                <div className="menu-item col-sm-6 col-xs-12 lunch">
                  <div className="clearfix menu-wrapper">
                    <h4>Pasta Alfredo</h4>
                    <span className="price">$225</span>
                    <div className="dotted-bg" />
                  </div>
                  <p>Fetuccini con crema de queso y camarón</p>
                </div>
                <div className="menu-item col-sm-6 col-xs-12 dinner breakfast lunch">
                  <div className="clearfix menu-wrapper">
                    <h4>Pasta Alfredp</h4>
                    <span className="price">$225</span>
                    <div className="dotted-bg" />
                  </div>
                  <p>Fetuccini con crema de queso y camarón</p>
                </div>
                <div className="menu-item col-sm-6 col-xs-12 dinner">
                  <div className="clearfix menu-wrapper">
                    <h4>Pasta Alfredo</h4>
                    <span className="price">$225</span>
                    <div className="dotted-bg" />
                  </div>
                  <p>Fetuccini con crema de queso y camarón</p>
                </div>
                <div className="menu-item col-sm-6 col-xs-12 desserts lunch dinner">
                  <div className="clearfix menu-wrapper">
                    <h4>Pasta Alfredo</h4>
                    <span className="price">$225</span>
                    <div className="dotted-bg" />
                  </div>
                  <p>Fetuccini con crema de queso y camarón</p>
                </div>
                <div className="menu-item col-sm-6 col-xs-12 desserts">
                  <div className="clearfix menu-wrapper">
                    <h4>Pasta Alfredo</h4>
                    <span className="price">$225</span>
                    <div className="dotted-bg" />
                  </div>
                  <p>Fetuccini con crema de queso y camarón</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
