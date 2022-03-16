import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_063.css";

function Page063(props) {

  const pagina = "063";
  var indexInput = 0;
  const etapa = "5"
  const background = "bgc-saitama";
  const color = "color-saitama";
  const bgc_cajas = "bgc-bobafett";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className={"cabecera-v2 " + background + " d-flex flex-column"}>
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className="caja-seccion wp-160 hp-70 text-center fsp-24 f-IntroRustG-Base">SESIÓN 16</div>
              <div className="d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">El diseño de la revista</div>
            </div>
            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-90">
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Mis objetivos <br />en  esta sesión son:
              </div>
              <div className="p-0 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Acordar los elementos visuales<br /> básicos de la revista.
              </div>
              <div className="p-0 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_2.svg"} className="wp-40 arrow-global rotate-90" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Diseñar la portada de la revista.
              </div>
              {/* <div className="p-0 align-self-center">
                <img src={"images/generales/flecha_sesion_e"+etapa+"_1.svg"} className="wp-40 arrow-global" alt="" />
              </div>
               <div className="p-3 align-self-center f-colby-compres-bold fsp-15 lh-sm text-center text-white">
               Elaborar el editorial <br/>de la revista.
              </div> */}

            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}
          <div className="ptp-10 container-titulo-global mbp-20">
            <div className="d-flex">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_063/i_g.svg" alt="" />
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>1</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Propongo un color, un símbolo y una imagen que identifiquen la revista.</div>
              <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image="images/page_063/revista.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
            </div>
          </div>

          <div className="bgc-tatooine rounded-p-20 mtp-0 msp-60 mep-60 mbp-7 ptp-30 psp-10 f-Ubuntu-R">

            <div className="d-flex mbp-150">

              <div className="row w-100 ">

                <div className="col-sm-12 col-md-6 d-flex justify-content-center pbp-30">
                  <div className="d-flex flex-column w-100 ptp-40 pbp-30 psp-20 pep-20 bgc-white rounded-p-20 position-relative">
                    <div className="position-absolute top-0 start-50 translate-middle msp-0 mtp-10 zindex-1 min-wp-180">
                      <div className="d-flex justify-content-center align-items-center text-center w-100 bgc-arlo border-style-solid border-1 border-color-white rounded-p-20 p-2 fsp-13 color-white f-Ubuntu-M">
                        Color
                      </div>
                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
                  </div>
                </div>

                <div className="col-sm-12 col-md-6 d-flex justify-content-center pbp-30 position-relative">
                  <div className="position-absolute top-0 start-100 translate-middle msp--20 mtp--30 visible-768 zindex-1"><img src="images/page_063/img_003.png" className="wp-60 " alt="" /></div>
                  <div className="d-flex flex-column w-100 ptp-40 pbp-30 psp-20 pep-20 bgc-white rounded-p-20 position-relative">
                    <div className="position-absolute top-0 start-50 translate-middle msp-0 mtp-10 zindex-1 min-wp-180">
                      <div className="d-flex justify-content-center align-items-center text-center w-100 bgc-saitama border-style-solid border-1 border-color-white rounded-p-20 p-2 fsp-13 color-white f-Ubuntu-M">
                        ¿Qué quiero transmitir?
                      </div>
                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 d-flex justify-content-center pbp-30">
                  <div className="d-flex flex-column w-100 ptp-40 pbp-30 psp-20 pep-20 bgc-white rounded-p-20 position-relative">
                    <div className="position-absolute top-0 start-50 translate-middle msp-0 mtp-10 zindex-1 min-wp-180">
                      <div className="d-flex justify-content-center align-items-center text-center w-100 bgc-arlo border-style-solid border-1 border-color-white rounded-p-20 p-2 fsp-13 color-white f-Ubuntu-M">
                        Símbolo
                      </div>
                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
                  </div>
                </div>

                <div className="col-sm-12 col-md-6 d-flex justify-content-center pbp-30 position-relative">

                  <div className="d-flex flex-column w-100 ptp-40 pbp-30 psp-20 pep-20 bgc-white rounded-p-20 position-relative">
                    <div className="position-absolute top-0 start-50 translate-middle msp-0 mtp-10 zindex-1 min-wp-180">
                      <div className="d-flex justify-content-center align-items-center text-center w-100 bgc-saitama border-style-solid border-1 border-color-white rounded-p-20 p-2 fsp-13 color-white f-Ubuntu-M">
                        ¿Qué quiero transmitir?
                      </div>
                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 d-flex justify-content-center pbp-30 position-relative">
                  <div className="position-absolute top-100 start-0 translate-middle msp--20 mtp--30 visible-768 zindex-1"><img src="images/page_063/img_004.png" className="wp-60 " alt="" /></div>
                  <div className="d-flex flex-column w-100 ptp-40 pbp-30 psp-20 pep-20 bgc-white rounded-p-20 position-relative">
                    <div className="position-absolute top-0 start-50 translate-middle msp-0 mtp-10 zindex-1 min-wp-180">
                      <div className="d-flex justify-content-center align-items-center text-center w-100 bgc-arlo border-style-solid border-1 border-color-white rounded-p-20 p-2 fsp-13 color-white f-Ubuntu-M">
                        Imagen
                      </div>
                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
                  </div>
                </div>

                <div className="col-sm-12 col-md-6 d-flex justify-content-center pbp-30 position-relative ">

                  <div className="d-flex flex-column w-100 ptp-40 pbp-30 psp-20 pep-20 bgc-white rounded-p-20 position-relative">
                    <div className="position-absolute top-0 start-50 translate-middle msp-0 mtp-10 zindex-1 min-wp-180">
                      <div className="d-flex justify-content-center align-items-center text-center w-100 bgc-saitama border-style-solid border-1 border-color-white rounded-p-20 p-2 fsp-13 color-white f-Ubuntu-M">
                        ¿Qué quiero transmitir?
                      </div>
                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 d-flex justify-content-center pbp-30 position-relative">
                  <div className="position-absolute top-100 start-100 translate-middle msp--60 mtp-30 visible-768 zindex-1"><img src="images/page_063/img_005.png" className="wp-150 " alt="" /></div>

                  <div className="d-flex flex-column w-100 ptp-10 pbp-30 psp-20 pep-20 bgc-white rounded-p-20 position-relative fsp-15">
                    <span>¿En qué partes de la revista podríamos incorporar cada elemento?</span>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                  </div>

                </div>

              </div>

            </div>
          </div>




          {/* PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
              ABP &copy; SM
            </div>
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>
          <div className="row w-100 position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_planificacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-7 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_creacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_difusion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-leono rounded-caja-end"></div>
              <div className="w-100 hp-25 bgc-pikachu"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Page063;
