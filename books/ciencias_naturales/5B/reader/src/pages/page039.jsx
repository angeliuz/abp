import React from "react";
import "./page_039.css";

function Page039(props) {

  const pagina = "039";
  var indexInput = 0;
  const etapa = "4"
  const background = "bgc-pidgey";
  const color = "color-pidgey";
  const borderColor = "border-color-android18"
  const bgc_cajas = "bgc-goku";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-10">
        <div className="page position-relative bgc-experimentacion" id={"page_" + pagina}>

          <div className="mep-0 position-absolute top-0 end-0">
            <div className={"d-flex justify-content-start " + bgc_cajas + " " + color + " ptp-55 pb-2 px-3 text-center mep-55 rounded-seb-20 lh-1"}>
              <div className="f-pixilate-regular fsp-25"> APRENDO CON <br /> <span className="f-Ubuntu-B fsp-22">PROYECTOS</span> </div>
            </div>
          </div>
          <div className="position-absolute top-50 start-50 translate-middle">
            <div className="fw-700 fsp-80 text-center color-white ft-m-45">
              <span className="f-hanoded-butterflyball t-shadow-experimentacion">EXPERIMENTACIÓN</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page039;

