import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_078.css";

function Page078(props) {

  const pagina = "078";
  var indexInput = 0;
  const etapa = "6"
  const background = "bgc-pikachu";
  const bgc_cajas = "bgc-quaternary";
  const color = "color-pikachu";

  return (

    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className={"dosier-e" + etapa + " page bgc-white overflow-hidden position-relative"} id={"page_" + pagina}>
          {/* BEGIN EJERCICIO 1 */}
          <div className="d-flex msp-60 mep-60 mbp-20 mtp-90">
            <div className="row w-100 p-0 m-0">
              <div className="max-wp-640 f-Ubuntu-R fsp-15 text-center mx-auto mbp-10 ">
                Si volviéramos a trabajar juntos en otro proyecto...
              </div>
              <div className="row mx-auto d-flex f-Ubuntu-R fsp-15 mbp-20">
                <div className="position-relative">
                  <div className="position-absolute top-0 start-0 translate-middle msp-20 mtp-5 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-60" alt="" /></div>
                  <div className="position-absolute top-0 start-100 translate-middle msp--40 mtp--5 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-70" alt="" /></div>
                  <div className="position-absolute top-50 start-50 translate-middle msp--0 mtp-270 visible-768 zindex-1"><img src={"images/page_" + pagina + "/espiral.svg"} className="wp-60" alt="" /></div>
                </div>

                <div className="col-sm-12 col-md-6 position-relative">
                  <div className="position-absolute top-100 start-50 translate-middle msp-0 mtp-5 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-50" alt="" /></div>
                  <div className="text-center bgc-white w-100 border-1 border-style-solid border-color-chopin rounded-p-10">
                    <div className="color-white fw-700 rounded-set-6 hp-40 pep-20 psp-20 ptp-5 pbp-5 bgc-chopin d-flex justify-content-center align-items-center">
                      ...intentaremos mantener
                    </div>
                    <div className="psp-15 pep-15">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-470" />
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 position-relative">
                  <div className="position-absolute top-100 start-100 translate-middle msp--20 mtp-5 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_006.png"} className="wp-40" alt="" /></div>
                  <div className="text-center bgc-white w-100 border-1 border-style-solid border-color-obiwan rounded-p-10 mtp-15">
                    <div className="color-white fw-700 rounded-set-6 hp-40 ptp-5 pbp-5 bgc-obiwan d-flex justify-content-center align-items-center">
                      ...intentaremos mejorar
                    </div>
                    <div className="psp-15 pep-15">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-470" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-wp-640 mx-auto">
                <img src={"images/page_" + pagina + "/img_007.png"} className="w-100" alt="" />
              </div>
            </div>
          </div>
          {/* BEIGN PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>ABP &copy; SM</div>
            <div className="bgc-goku wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>
          {/* END PIE DE PAGINA */}
        </div>
      </div>
    </div>

  );
}

export default Page078;
