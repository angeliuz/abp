import React from "react";
import ModalVideo from "../components/ModalVideo";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_069.css";

function Page069(props) {

  const pagina = "069";
  var indexInput = 0;
  const etapa = "5"
  const background = "bgc-saitama";
  const color = "color-saitama";
  const borderColor = "border-color-saitama"
  const borderColorTabla = "border-color-bobafett"
  const bgc_cajas = "bgc-bobafett";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className={"dosier-e" + etapa + " page bgc-white overflow-hidden position-relative"} id={"page_" + pagina}>
          <img src={"images/cabecera/dosier_e" + etapa + ".svg"} className="w-100" alt="" />
          <div className="position-relative w-100 mbp-10">
            <div className="psp-80 pep-70 ptp-30 pbp-0 position-relative">
              <div className="fsp-16 f-Ubuntu-R text-start psp-50 pbp-10">Esta página fue completada por:</div>
              <div className={"psp-50 pep-50 ptp-5 pbp-5 bgc-white rounded-p-10 border-style-solid border-1 " + borderColor + " d-flex justify-content-center position-relative"}>
                <div className="position-absolute top-50 start-100 translate-middle wp-100 msp-0 mtp--10"><img src={"images/page_" + pagina + "/img_001.png"} className="w-60" alt="" /></div>
                <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp--10">         <img src={"images/page_" + pagina + "/img_002.png"} className="wp-80" alt="" /></div>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
              </div>
            </div>
          </div>



          <div className="psp-50 pep-70 ">

            <div className="d-flex justify-content-start msp-10 f-Ubuntu-R fsp-16  mtp-20 mbp-0 psp-20 pep-0 ptp-0 pbp-0">¿Cómo imaginábamos que iba a ser nuestra obra de arte?</div>

            <div className="max-wp-640 mx-auto position-relative mtp-20">
              <div className="position-absolute top-50 start-0 translate-middle   msp-0 mtp--0 visible-768 zindex-10 msp--20"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-70" alt="" /></div>
              <div className="position-absolute top-100 start-100 translate-middle   msp-0 mtp--0 visible-768 zindex-10 msp-20 mtp--20"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-90" alt="" /></div>
              <div className="text-center w-100 border-1 border-style-solid border-color-dark rounded-p-10 pbp-15 ptp-15 bgc-white">
                <div className="psp-10 pep-10">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-290" />
                </div>
              </div>
            </div>





            <div className="d-flex justify-content-start msp-10 f-Ubuntu-R fsp-16  mtp-20 mbp-0 psp-20 pep-0 ptp-0 pbp-0">¿Qué ha cambiado desde entonces?</div>

            <div className="max-wp-640 mx-auto position-relative mtp-20">
              <div className="position-absolute top-100 start-0 translate-middle   msp--25 mtp--50 visible-768 zindex-10"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-90" alt="" /></div>
              <div className="text-center w-100 border-1 border-style-solid border-color-dark rounded-p-10 pbp-15 ptp-15 bgc-white">

                <div className="psp-10 pep-10">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-290" />
                </div>
              </div>
            </div>


          </div>












          {/* BEIGN PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>ABP &copy; SM</div>
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>
          {/* END PIE DE PAGINA */}
        </div>
      </div>
    </div>
  );
}

export default Page069;
