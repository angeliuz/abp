import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_053.css";

function Page053(props) {

  const pagina = "053";
  var indexInput = 0;
  const etapa = "4"
  const background = "bgc-pidgey";
  const color = "color-pidgey";
  const borderColor = "border-color-pidgey"
  const borderColorTabla = "border-color-pantro"
  const bgc_cajas = "bgc-pantro";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className={"dosier-e" + etapa + " page bgc-white overflow-hidden position-relative"} id={"page_" + pagina}>
          <img src={"images/cabecera/dosier_e" + etapa + ".svg"} className="w-100" alt="" />
          <div className="position-relative w-100 mbp-10">
            <div className="psp-80 pep-70 ptp-30 pbp-0 position-relative">
              <div className="fsp-16 f-Ubuntu-R text-start psp-50 pbp-10">Esta página fue completada por:</div>
              <div className={"psp-50 pep-50 ptp-5 pbp-5 bgc-white rounded-p-10 border-style-solid border-1 " + borderColor + " d-flex justify-content-center position-relative"}>
                <div className="position-absolute top-50 start-100 translate-middle wp-100 msp-0 mtp--10"><img src={"images/page_" + pagina + "/img_002.png"} className="w-80" alt="" /></div>
                <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp--10"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-80" alt="" /></div>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
              </div>
            </div>
          </div>

          <div className="psp-80 pep-70 ptp-30 pbp-60">
            <div className="ptp-20">
              <div className="bgc-white border-style-solid border-1 border-color-dark rounded-p-10 position-relative">
                <div className="bgc-guile mxwp-230 rounded-p-10">
                  <div className="f-Ubuntu-R psp-20 py-2 text-start">La encuesta nos permitió:</div>
                </div>
                <div className="psp-20 pep-20 pbp-20">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" />
                </div>
                <div className="position-absolute top-50 start-0 translate-middle msp--10 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-60" alt="" /></div>
              </div>
              <div className="ptp-30"></div>
              <div className="bgc-white border-style-solid border-1 border-color-dark rounded-p-10 position-relative">
                <div className="bgc-chitara mxwp-280 rounded-p-10">
                  <div className="f-Ubuntu-R psp-20 py-2 text-start">La consulta pública nos sirvió para:</div>
                </div>
                <div className="psp-20 pep-20 pbp-20">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" />
                </div>
                <div className="position-absolute top-50 start-100 translate-middle msp-0 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-40" alt="" /></div>
              </div>
              <div className="ptp-30"></div>
              <div className="bgc-white border-style-solid border-1 border-color-dark rounded-p-10 position-relative">
                <div className="bgc-tigro mxwp-520 rounded-p-10">
                  <div className="f-Ubuntu-R psp-20 py-2 text-start"> Las ventajas de nuestra propuesta de
                    alimentación saludable son:</div>
                </div>
                <div className="psp-20 pep-20 pbp-20">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" />
                </div>
                <div className="position-absolute top-50 start-0 translate-middle msp--10 mtp-30  zindex-1"><img src={"images/page_" + pagina + "/img_006.png"} className="wp-60" alt="" /></div>
                <div className="position-absolute top-50 start-100 translate-middle msp-0 mtp-0  zindex-1"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-40" alt="" /></div>
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

export default Page053;
