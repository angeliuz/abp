import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_010.css";

function Page010(props) {

  const pagina = "010";
  var indexInput = 0;
  const etapa = "1"
  const background = "bgc-goten";
  const color = "color-goten";
  const borderColor = "border-color-goten"
  const bgc_cajas = "bgc-genos";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page cb-page10 overflow-hidden position-relative" id={"page_" + pagina}>

          <div className="msp-60 mep-60 mtp-90 mbp-10">
            <div className="p-0 m-0">
              <div className="col-sm-12 col-md-3 position-relative"></div>
              <div className="text-start fsp-15 f-Ubuntu-R w-100 psp-20">
                Creamos un logo o insignia que nos represente como equipo.
              </div>
              <div className="bgc-white w-100 max-wp-600 mx-auto rounded-p-10 p-2 cb-outline-p10 mtp-10 position-relative">
                <div className="position-absolute top-0 start-100 translate-middle msp--0 mtp-30 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-150" alt="" /></div>
                <div className="position-absolute top-50 start-0 translate-middle msp--0 mtp-30 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-20" alt="" /></div>
                <div className="position-absolute top-100 start-100 translate-middle msp--0 mtp--40 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-60" alt="" /></div>

                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-230" />
              </div>
              <div className="max-wp-600 mx-auto d-flex f-Ubuntu-R fsp-15 mbp-20 position-relative mtp-20">
                <div className="position-absolute top-0 start-0 translate-middle msp-60 mtp--15 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_005.svg"} className="wp-10" alt="" /></div>
                <div className="position-absolute top-0 start-100 translate-middle msp--60 mtp--15 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_005.svg"} className="wp-10" alt="" /></div>
                <div className="position-absolute top-100 start-100 translate-middle msp--0 mtp--30 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-120" alt="" /></div>
                <div className=" bgc-white text-center w-100 border-1 border-style-solid border-color-palpatine rounded-p-10">
                  <div className="rounded-set-6 hp-50 pep-20 psp-20 ptp-10 pbp-10 bgc-palpatine color-white fw-700 d-flex justify-content-center align-items-center">
                    Este logo nos representa porque:
                  </div>
                  <div className="psp-15 pep-15">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170" />
                  </div>
                </div>
              </div>
              {/* SECCION COMO VOY */}

              <div className="row w-100 p-0 m-0">
                <div className="col-12 position-relative max-wp-600 mx-auto">
                  <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-5">¿Cómo vamos?</div>
                  <div className="d-flex flex-column mbp-20 mtp-10 w-100">
                    <div className="p-2 min-hp-80 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                      <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 text-start">
                        <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 wp-15" alt="" />
                        <span>Lo que nos motiva como equipo es:</span>
                      </div>
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-100" />
                      <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 mtp-20 text-start">
                        <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 wp-15" alt="" />
                        <span>Lo que podemos mejorar hasta el momento es:</span>
                      </div>
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-100" />
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>


          {/* Begin pie de página */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "white" }}>
              ABP &copy; SM
            </div>
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>
          {/* End pie de página */}

        </div>
      </div>
    </div>



  );
}

export default Page010;
