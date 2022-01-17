import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_051.css";

function Page051(props) {
  const pagina = "051";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20"> <div className="page ep-page51 bgc-white overflow-hidden position-relative" id={"page_" + pagina}
        >
          <img src="images/page_051/cabecera.svg" alt="" />
          <div className="position-relative w-100">
            <div className="row psp-80 pep-70 ptp-10 pbp-50 ">
              <div className="f-Ubuntu-R text-left fsp-18 pbp-10">
                Esta página es completada por:
              </div>
              <div className="d-flex position-relative">
                <img src="images/page_051/img_001.png" class="hp-60 position-absolute start-0 top-0 mtp--10" alt="" />
                <div className="bgc-white rounded-p-10 border-style-solid border-1 border-color-bulma w-100 py-1 psp-50 pep-20">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-35" />
                </div>
                <img src="images/page_051/img_002.png" class="position-absolute top-50 end-0 translate-middle-y msp--50 mtp--10 " alt="" />
              </div>


              




            </div>



          </div>


                <div className="bgc-red msp-60 mep-60 mtp-100  ptp-10 w-100 ">123</div>





          {/* PIE DE PAGINA */}
          <div
            className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2"
            style={{ bottom: 70, right: 0 }} >
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }} >
              ABP &copy; SM
            </div>
            <div className="bgc-jawa wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">
              {props.numeroPagina(pagina)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page051;
