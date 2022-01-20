import React from "react";
import "./page_057.css";

function Page057(props) {
  const pagina = "057";
  var indexInput = 0;


  return (
      <div className="wrapper bgc-light">
        <div className="d-flex flex-column align-items-center pbp-10">
          <div className="page position-relative bgc-creacion" id={"page_"+pagina}>
            <div className="mep-0 position-absolute top-0 end-0">
              <div className="d-flex justify-content-start bgc-goku color-saitama ptp-55 pb-2 px-3 text-center mep-55 rounded-seb-20 lh-1">
                <div className="f-pixilate-regular fsp-25">
                  APRENDO CON <br /> <span className="f-Ubuntu-R fw-800 fsp-22">PROYECTOS</span>
                </div>
              </div>
            </div>
            <div className="position-absolute top-50 start-50 translate-middle">
              <div className="fw-700 fsp-80 text-center color-white ft-m">
                <span className="f-hanoded-butterflyball t-shadow-creacion">CREACIÓN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Page057;