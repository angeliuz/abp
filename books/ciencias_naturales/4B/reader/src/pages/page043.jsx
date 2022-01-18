import React from "react";
import "./page_043.css";

function Page043(props) {
  const pagina = "043";
  var indexInput = 0;

  return (
      <div className="wrapper bgc-light">
        <div className="d-flex flex-column align-items-center pbp-10">
          <div className="page position-relative fondo" id={"page_"+pagina}>

            <div className="position-absolute end-0">
                <div className="bgc-goku color-pidgey ptp-65 pb-2 px-3 mep-55 rounded-seb-20 lh-1">
                    <div className="f-pixilate-regular fsp-27">APRENDO CON<br /><span className="f-Ubuntu-B fsp-22">PROYECTOS</span></div>
                </div>
            </div>
            <div className="position-absolute top-50 start-50 translate-middle">
                <div className="fw-700 fsp-80 color-white f-hanoded-butterflyball t-shadow-experimentacion ft-m">EXPERIMENTACIÓN</div>
            </div>

          </div>
        </div>
      </div>
  );
}

export default Page043;
