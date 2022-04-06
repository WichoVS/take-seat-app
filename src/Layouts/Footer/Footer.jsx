import React from 'react';
import '../../Assets/Styles/Global/footer.css';

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer-copyrights">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="d-flex justify-content-center align-content-center">
                <span className="material-icons md-18">copyright</span> Take seat
                <span className="material-icons primary-color md-18">favorite </span> by
                Programación Web 2
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
