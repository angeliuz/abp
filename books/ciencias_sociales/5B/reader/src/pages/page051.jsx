import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_051.css";

function Page051(props) {

  const pagina = "051";
  var indexInput = 0;
  const etapa = "4"
  const background = "bgc-pidgey";
  const bgc_cajas = "bgc-tertiary";
  
  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v2 bgc-pidgey d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className="caja-seccion wp-160 hp-70 text-center fsp-24 f-IntroRustG-Base color-dark">SESIÓN 12</div>
              <div className="d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Realizamos las entrevistas</div>
            </div>
            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-90">
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Mis objetivos en <br /> esta sesión son:
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_051/flecha.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Elaborar las preguntas de las<br /> entrevistas.
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_051/flecha1.svg" className="wp-40 arrow-global rotate-90" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Asegurar que todo esté<br /> preparado para las entrevistas.
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_051/flecha.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-3 align-self-center f-colby-compres-bold fsp-15 lh-sm text-center text-white">
                Realizar las entrevistas.
              </div>
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}
          <div className="ptp-10 container-titulo-global mbp-20">
            <div className="d-flex">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_051/g.svg" alt="" />
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">1</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Leo la información de la revista. Luego, con mi grupo planteo cuatro preguntas para mi entrevista. Explicamos su importancia.</div>
              <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} colorUnidad={background} pagina={"94"} image={"images/page_" + pagina + "/revista.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
            </div>
          </div>

          <div className="d-flex msp-60 mep-60 mbp-70">

            <div className="row bgc-ryu w-100 f-Ubuntu-R fsp-15 rounded-p-20 position-relative">
              <div className="position-absolute top-0 start-100 translate-middle visible-768 zindex-1"><img src="images/page_051/img_005.png" className="wp-60" alt="" /></div>
              <div className="position-absolute top-100 start-0 translate-middle visible-768 zindex-1"><img src="images/page_051/img_006.png" className="wp-100 msp-250" alt="" /></div>
              <div className="col-6 ptp-10">Preguntas</div>
              <div className="col-6 ptp-10">Importancia</div>

              <div className="col-sm-6 d-flex pbp-30 position-relative">
              <div className="position-absolute top-50 start-100 translate-middle wp-100 msp--5 mtp--10 zindex-1"><img src="images/page_051/flechablanca.svg" className="wp-45" alt="" /></div>
              <div className="position-absolute top-50 start-0 translate-middle msp-10 mtp--10 wp-30 hp-30 d-flex align-items-center justify-content-center rounded-p-5 border-2 color-pidgey border-style-solid border-color-pidgey bgc-bison zindex-2">1</div>
          
                  <div className="d-flex flex-column w-100 p-2 bgc-white rounded-p-10 position-relative">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" />
                  </div>
                </div>
                <div className="col-sm-6 d-flex pbp-30 position-relative">
                  
                  <div className="d-flex flex-column w-100 p-2 bgc-white rounded-p-10 position-relative">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" />
                  </div>
                </div>

              <div className="col-sm-6 d-flex pbp-30 position-relative">
              <div className="position-absolute top-50 start-100 translate-middle wp-100 msp--5 mtp--10 zindex-1"><img src="images/page_051/flechablanca.svg" className="wp-45" alt="" /></div>
              <div className="position-absolute top-50 start-0 translate-middle msp-10 mtp--10 wp-30 hp-30 d-flex align-items-center justify-content-center rounded-p-5 border-2 color-pidgey border-style-solid border-color-pidgey bgc-bison zindex-2">2</div>
          
                  <div className="d-flex flex-column w-100 p-2 bgc-white rounded-p-10 position-relative">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" />
                  </div>
                </div>
                <div className="col-sm-6 d-flex pbp-30 position-relative">
                  
                  <div className="d-flex flex-column w-100 p-2 bgc-white rounded-p-10 position-relative">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" />
                  </div>
                </div>

              <div className="col-sm-6 d-flex pbp-30 position-relative">
              <div className="position-absolute top-50 start-100 translate-middle wp-100 msp--5 mtp--10 zindex-1"><img src="images/page_051/flechablanca.svg" className="wp-45" alt="" /></div>
              <div className="position-absolute top-50 start-0 translate-middle msp-10 mtp--10 wp-30 hp-30 d-flex align-items-center justify-content-center rounded-p-5 border-2 color-pidgey border-style-solid border-color-pidgey bgc-bison zindex-2">3</div>
          
                  <div className="d-flex flex-column w-100 p-2 bgc-white rounded-p-10 position-relative">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" />
                  </div>
                </div>
                <div className="col-sm-6 d-flex pbp-30 position-relative">
                  
                  <div className="d-flex flex-column w-100 p-2 bgc-white rounded-p-10 position-relative">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" />
                  </div>
                </div>

              <div className="col-sm-6 d-flex pbp-30 position-relative">
              <div className="position-absolute top-50 start-100 translate-middle wp-100 msp--5 mtp--10 zindex-1"><img src="images/page_051/flechablanca.svg" className="wp-45" alt="" /></div>
              <div className="position-absolute top-50 start-0 translate-middle msp-10 mtp--10 wp-30 hp-30 d-flex align-items-center justify-content-center rounded-p-5 border-2 color-pidgey border-style-solid border-color-pidgey bgc-bison zindex-2">4</div>
          
                  <div className="d-flex flex-column w-100 p-2 bgc-white rounded-p-10 position-relative">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" />
                  </div>
                </div>
                <div className="col-sm-6 d-flex pbp-30 position-relative">
                  
                  <div className="d-flex flex-column w-100 p-2 bgc-white rounded-p-10 position-relative">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" />
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
              <img src="images/rotulo_experimentacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
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

export default Page051;
