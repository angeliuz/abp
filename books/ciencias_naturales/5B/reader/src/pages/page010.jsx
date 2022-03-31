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
  const borderColorTabla = "border-color-genos"
  const bgc_cajas = "bgc-genos";

  return (

    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className={"dosier-e" + etapa + "_2 page bgc-white overflow-hidden position-relative"} id={"page_" + pagina}>

          <div className="mtp-90">
            <div className="d-flex justify-content-center ">
              <div className="cb-titulo-aceptamos text-center fsp-25 f-IntroRustG-Base mbp-20 border-top-style-solid border-bottom-style-solid">¡ACEPTAMOS EL DESAFÍO!</div>
            </div>
          </div>

          <div className="d-flex global-margin mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">
                <div className="position-absolute top-50 start-100 translate-middle msp--70 mtp-20 zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-80" alt="" /></div>
                <img src={"images/page_" + pagina + "/img_010.svg"} className="w-100 max-wp-500" alt="" />
              </div>
            </div>
          </div>


          <div className="d-flex global-margin mtp-20 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">
                <div className="position-absolute top-50 start-0 translate-middle msp-50 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-60" alt="" /></div>
                <div className="d-flex global-margin mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
                  <div className="row p-0 m-0 w-100">
                    <div className="col-12 p-0 m-0 position-relative">
                      <div className="border-style-solid border-1 border-color-goten rounded-p-10">
                        <div className="d-flex flex-column bgc-yamcha border-style-solid border-2 border-color-genos rounded-p-10">
                          <div className="psp-20 pep-20 ptp-20 pbp-20 f-Ubuntu-R fsp-15">
                            <strong>“Hoy empiezo a vivir sano”</strong> es el <strong>lema</strong> de la campaña de <i>Elige vivir sano</i>, que busca incentivar a las personas a adoptar hábitos más saludables.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className="d-flex global-margin mtp-20 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">

                <div className="d-flex global-margin mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
                  <div className="row p-0 m-0 w-100">
                    <div className="col-12 p-0 m-0 position-relative">
                      <div className="position-absolute top-0 start-100 translate-middle msp--30 mtp-20 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-30" alt="" /></div>
                      <div className="position-absolute top-100 start-100 translate-middle msp--30 mtp--20 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_006.png"} className="wp-130" alt="" /></div>
                      <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-80" alt="" /></div>
                      <div className="border-style-solid border-2 border-color-dark rounded-p-120">
                        <div className="d-flex flex-column align-items-center bgc-white border-style-solid border-2 border-color-genos rounded-p-120">
                          <div className="psp-10 pep-10 ptp-10 pbp-10 f-Ubuntu-R fsp-15 text-start w-90 d-flex flex-column align-items-center ">
                            Este es nuestro lema:

                            <div className="w-100 d-flex center-center msp-10 mep-10 psp-5 pep-5">
                              <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 w-100 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-200" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>


          <div className="d-flex flex-column global-margin mtp-20 mbp-130 psp-0 pep-0 ptp-0 pbp-0">
            <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-10">¿Cómo vamos?</div>
            <div className="d-flex flex-column bgc-white rounded-p-10 psp-10 pep-10 ptp-10 pbp-10 mtp-0 mbp-0">
              <div className="row p-0 m-0 w-100">
                <div className="col-12 p-0 m-0">
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-start">
                      <div className="mtp-0 pep-5">
                        <img src={"images/generales/flecha_e" + etapa + ".svg"} className="wp-15" />
                      </div>
                      <div className="f-Ubuntu-L fsp-15 ptp-2 text-start">  ¿Cuáles son las fortalezas del equipo?</div>
                    </div>
                    <div className="w-100 psp-20 pep-10 ptp-0 pbp-0">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                    </div>
                  </div>
                </div>
                <div className="col-12 p-0 m-0 position-relative">
                  <div className="position-absolute top-100 start-0 translate-middle msp-0 mtp-30 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_008.png"} className="wp-60" alt="" /></div>
                  <div className="position-absolute top-100 start-100 translate-middle msp-25 mtp--75 zindex-1"><img src={"images/page_" + pagina + "/img_009.png"} className="wp-70" alt="" /></div>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-start">
                      <div className="mtp-0 pep-5">
                        <img src={"images/generales/flecha_e" + etapa + ".svg"} className="wp-15" />
                      </div>
                      <div className="f-Ubuntu-L fsp-15 ptp-2 text-start">  Lo que tenemos que mejorar es...</div>
                    </div>
                    <div className="w-100 psp-20 pep-10 ptp-0 pbp-0">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                    </div>
                  </div>
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

export default Page010;
