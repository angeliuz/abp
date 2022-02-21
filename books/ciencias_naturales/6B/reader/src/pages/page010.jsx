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
              <div class="d-flex justify-content-center">
                <div class="cb-titulo-aceptamos text-center fsp-25 f-IntroRustG-Base mbp-20">ACEPTAMOS EL DESAFÍO</div>
              </div>
              <div className="text-start f-Ubuntu-L fsp-15 psp-30">Diseñamos un logo que nos represente:</div>
              <div class="w-100 cb-inicio d-flex text-center align-items-center justify-content-center position-relative">
                <div className="position-absolute top-0 start-100 translate-middle msp--90 mtp-50 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-50" alt="" /></div>
                <div className="position-absolute top-50 start-0 translate-middle msp-90 mtp-150 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-50" alt="" /></div>
                <div class="cb-block-superior p-2 pb-2 text-center ">
                  <div class="cb-bloque-0 bgc-white p-2 pb-2 f-Ubuntu-B fw-700 fsp-15 border-1 border-style-solid border-color-dark zindex-1 color-sektor">Hay que tener en cuenta</div>
                  <div class="cb-bloque-4 text-center bgc-white p-2 pb-2 f-Ubuntu-L fw-700 fsp-13 cb-outline-p10 border-1 border-style-solid border-color-dark">
                    <div className="f-Ubuntu-R fsp-13 color-ken fw-700 text-start psp-5">Simplicidad</div>
                    <div className="psp-10 pep-10 pbp-10 ptp-5">
                      <div className="d-flex align-items-center w-100 ">
                        <div className="wp-5 hp-5 bgc-ken rounded-circle"></div>
                        <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-L fsp-13 psp-5">
                          Tiene pocos elementos y colores.
                        </div>
                      </div>
                      <div className="d-flex align-items-center w-100 ">
                        <div className="wp-5 hp-5 bgc-ken rounded-circle"></div>
                        <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-L fsp-13 psp-5">
                          Incluye solo lo necesario.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="cb-bloque-5 text-center bgc-white p-2 pb-2 f-Ubuntu-L fw-700 fsp-13 cb-outline-p10 border-1 border-style-solid border-color-dark">
                    <div className="f-Ubuntu-R fsp-13 color-saitama fw-700 text-start psp-5">Representatividad</div>
                    <div className="psp-10 pep-10 pbp-10 ptp-5">
                      <div className="d-flex align-items-center w-100 ">
                        <div className="wp-5 hp-5 bgc-saitama rounded-circle"></div>
                        <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-L fsp-13 psp-5">
                          Refleja el espíritu del equipo.
                        </div>
                      </div>
                      <div className="d-flex align-items-center w-100 ">
                        <div className="wp-5 hp-5 bgc-saitama rounded-circle"></div>
                        <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-L fsp-13 psp-5">
                          Debe estar relacionado con el desafío.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="cb-bloque-6 text-center bgc-white p-2 pb-2 f-Ubuntu-L fw-700 fsp-13 cb-outline-p10 border-1 border-style-solid border-color-dark">
                    <div className="f-Ubuntu-R fsp-13 color-obiwan fw-700 text-start psp-5">Imagen</div>
                    <div className="psp-10 pep-10 pbp-10 ptp-5">
                      <div className="d-flex align-items-center w-100 ">
                        <div className="wp-5 hp-5 bgc-obiwan rounded-circle"></div>
                        <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-L fsp-13 psp-5">
                          Es visualmente atractivo.
                        </div>
                      </div>
                      <div className="d-flex align-items-center w-100 ">
                        <div className="wp-5 hp-5  bgc-obiwan rounded-circle"></div>
                        <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-L fsp-13 psp-5">
                          Es fácil de recordar.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-wp-600 mx-auto bgc-white border-1 border-style-solid border-color-dark rounded-p-20 mbp-20 position-relative">
                <div className="position-absolute top-100 start-0 translate-middle msp-0 mtp--50 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-70" alt="" /></div>
                <div className="ptp-10 f-Ubuntu-L fsp-15">Nuestro logo:</div>
                <div className="psp-30 pep-30">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-130" />
                </div>
              </div>
              {/* SECCION COMO VOY */}

              <div className="row w-100 p-0 m-0">
                <div className="col-12 position-relative max-wp-600 mx-auto">
                  <div className="position-absolute top-50 start-100 translate-middle msp-0 mtp-50 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-100" alt="" /></div>
                  <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-5">¿Cómo voy?</div>
                  <div className="d-flex flex-column mbp-20 mtp-10 w-100">
                    <div className="p-2 min-hp-80 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                      <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 text-start">
                        <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 wp-15" alt="" />
                        <span>Lo que nos motiva como equipo es:</span>
                      </div>
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                      <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 mtp-20 text-start">
                        <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 wp-15" alt="" />
                        <span>Lo que podemos mejorar hasta el momento es:</span>
                      </div>
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
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
