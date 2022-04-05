/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {} from 'reactstrap';
import '../../Assets/Styles/Global/global.css';
import '../../Assets/Styles/Global/inicio.css';
import '../../Assets/Styles/Global/login.css';

export default function Login() {
  return (
    <div className="body">
      <div className="main-wrapper">
        <nav className="navbar navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar"
                aria-expanded="false"
                aria-controls="navbar"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a href="./index.html">
                <h3>
                  {' '}
                  Take Seat <i className="fa fa-cutlery" />{' '}
                </h3>
              </a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                  <a
                    href="./index.html"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Home
                    <span className="caret" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="./index.html">Home - Image</a>
                    </li>
                    <li>
                      <a href="./index_slider.html">Home - Header Slider</a>
                    </li>
                    <li>
                      <a href="./index_video.html">Home - Video Background</a>
                    </li>
                    <li>
                      <a href="./index_parallax.html">Home - Parallax</a>
                    </li>
                    <li>
                      <a href="./index_animation.html">Home - Scroll Animation</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    href="./menu_all.html"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Menu
                    <span className="caret" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="./menu_list.html">Menu - List</a>
                    </li>
                    <li>
                      <a href="./menu_overlay.html">Menu - Overlay</a>
                    </li>
                    <li>
                      <a href="./menu_tile.html">Menu - Tile</a>
                    </li>
                    <li>
                      <a href="./menu_grid.html">Menu - Grid</a>
                    </li>
                    <li>
                      <a href="./menu_all.html">Menu All</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    href="./reservation.html"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Reservation
                    <span className="caret" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="./reservation.html">Reservation</a>
                    </li>
                    <li>
                      <a href="./reservation-ot.html">Reservation - Opentable</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    href="./about.html"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pages
                    <span className="caret" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="./about.html">About</a>
                    </li>
                    <li>
                      <a href="./gallery.html">Gallery</a>
                    </li>
                    <li>
                      <a href="./elements.html">Shortcodes</a>
                    </li>
                    <li>
                      <a href="./shop_account.html">Login / Signup</a>
                    </li>
                    <li>
                      <a href="./404.html">404 Page</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    href="./recipe.html"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Recipe
                    <span className="caret" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="./recipe.html">Recipe - 2Col</a>
                    </li>
                    <li>
                      <a href="./recipe_3col.html">Recipe - 3Col</a>
                    </li>
                    <li>
                      <a href="./recipe_4col.html">Recipe - 4Col</a>
                    </li>
                    <li>
                      <a href="./recipe_masonry.html">Recipe - Masonry</a>
                    </li>
                    <li>
                      <a href="./recipe_detail-image.html">
                        Recipe - Single <span className="caret-right" />
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="./recipe_detail-image.html">Recipe - Image</a>
                        </li>
                        <li>
                          <a href="./recipe_detail-slider.html">Recipe - Gallery</a>
                        </li>
                        <li>
                          <a href="./recipe_detail-video.html">Recipe - Video</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    href="./blog_right_sidebar.html"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Blog
                    <span className="caret" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="./blog_right_sidebar.html">Blog - Right Sidebar</a>
                    </li>
                    <li>
                      <a href="./blog_left_sidebar.html">Blog - Left Sidebar</a>
                    </li>
                    <li>
                      <a href="./blog_fullwidth.html">Blog - Fullwidth</a>
                    </li>
                    <li>
                      <a href="./blog_masonry.html">Blog - Masonry</a>
                    </li>
                    <li>
                      <a href="./blog_single_image.html">
                        Blog - Single <span className="caret-right" />
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="./blog_single_image.html">Blog - Image</a>
                        </li>
                        <li>
                          <a href="./blog_single_slider.html">Blog - Gallery</a>
                        </li>
                        <li>
                          <a href="./blog_single_video.html">Blog - Video</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    href="./shop_fullwidth.html"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Shop
                    <span className="caret" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="./shop_fullwidth.html">Shop - Full</a>
                    </li>
                    <li>
                      <a href="./shop_left_sidebar.html">Shop - Left Sidebar</a>
                    </li>
                    <li>
                      <a href="./shop_right_sidebar.html">Shop - Right Sidebar</a>
                    </li>
                    <li>
                      <a href="./shop_single_full.html">
                        Shop - Single <span className="caret-right" />
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="./shop_single_full.html">Shop - Full</a>
                        </li>
                        <li>
                          <a href="./shop_single_left.html">Shop - Left Sidebar</a>
                        </li>
                        <li>
                          <a href="./shop_single_right.html">Shop - Right Sidebar</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="./shop_cart.html">Shop - Cart</a>
                    </li>
                    <li>
                      <a href="./shop_checkout.html">Shop - Checkout</a>
                    </li>
                    <li>
                      <a href="./shop_account.html">Shop - Account</a>
                    </li>
                    <li>
                      <a href="./shop_account_detail.html">Shop - Account Detail</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="./contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <section className="page_header login">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2>Inicia sesión</h2>
              </div>
            </div>
          </div>
        </section>

        <section className="shop-content">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="row shop-login">
                  <div className="col-md-3" />
                  <div className="col-md-6">
                    <div className="box-content">
                      <h3 className="text-center">Usuario Existente</h3>
                      <br />
                      <form className="logregform">
                        <div className="row">
                          <div className="form-group">
                            <div className="col-md-12">
                              <label htmlFor="emailLogin">Correo Electrónico</label>
                              <input
                                id="emailLogin"
                                type="text"
                                value=""
                                className="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="clearfix" />
                        <div className="row">
                          <div className="form-group">
                            <div className="col-md-12">
                              <label htmlFor="passwLogin">Contraseña</label>
                              <input
                                id="passwLogin"
                                type="password"
                                value=""
                                className="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="clearfix" />
                        <div className="row">
                          <div className="col-md-12">
                            <button type="submit" className="btn btn-default pull-right">
                              Entrar
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
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
