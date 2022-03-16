import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_055.css";

function Page055(props) {

  const pagina = "055";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v2 bgc-pidgey d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className="caja-seccion wp-160 hp-70 text-center fsp-24 f-IntroRustG-Base">SESIÓN 14</div>
              <div className="d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Escribimos las entrevistas</div>
            </div>
            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-90">
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Mis objetivos <br />en  esta sesión son:
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_055/flecha.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Definir cómo transcribir <br />las entrevistas.
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_055/flecha1.svg" className="wp-40 arrow-global rotate-90" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Transcribir las <br /> entrevistas.
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_055/flecha.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-3 align-self-center f-colby-compres-bold fsp-15 lh-sm text-center text-white">
                Revisar y corregir <br /> las entrevistas.
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_055/flecha1.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-3 position-relative align-self-center f-colby-compres-bold fsp-17 lh-sm text-center color-dark">
                <div className="position-absolute top-0 start-0 w-100 h-100">
                  <img src="images/cabecera/caja_blanca.png" width="100%" height="100%" alt="" />
                </div>
                <div className="position-relative">
                  Analizar el trabajo<br /> realizado.
                </div>
              </div>

            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}
          <div className="ptp-10 container-titulo-global mbp-20">
            <div className="d-flex">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_055/i_g.svg" alt="" />
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">1</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Reviso los siguientes criterios para transcribir la entrevista. Luego, planteo posibles inquietudes al grupo y decidimos cómo resolverlas.</div>
              {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image="images/page_055/revista.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="bgc-55 mtp-0 msp-60 mep-60 mbp-7 ptp-30 psp-10 corcho-borde">



            <div className="d-flex">

              <div className="row w-100">
                <div className="col-md-6 d-flex justify-content-center pbp-30">
                  <div className="d-flex flex-column w-90 ptp-40 pbp-30 psp-20 pep-20 bgc-white box-shadow-55-1 rounded-p-20 border-style-solid border-1 border-color-saitama position-relative">
                    <div className="position-absolute top-0 start-50 translate-middle wp-100 msp-0 mtp-10 zindex-1"><img src="images/page_055/img_005.svg" className="wp-40" /></div>
                    <span className="f-Ubuntu-R fsp-13 text-start">
                      La transcripción tiene una estructura clara, que diferencia preguntas de quienes entrevistan y respuestas de la persona entrevistada.
                    </span>
                  </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center pbp-30">
                  <div className="d-flex flex-column w-90 ptp-40 pbp-30 psp-20 pep-20 bgc-white box-shadow-55-2 rounded-p-20 border-style-solid border-1 border-color-freezer rounded-p-20 position-relative">
                    <div className="position-absolute top-0 start-50 translate-middle wp-100 msp-0 mtp-10 zindex-1"><img src="images/page_055/img_006.svg" className="wp-40" /></div>
                    <span className="f-Ubuntu-R fsp-13 text-start">
                      El texto transcrito respeta las páginas acordadas y permite un uso atractivo de recursos gráficos (imágenes, título de entrevista, entre otros).
                    </span>
                  </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center pbp-30">
                  <div className="d-flex flex-column w-90 ptp-40 pbp-30 psp-20 pep-20 bgc-white box-shadow-55-3 rounded-p-20 border-style-solid border-2 border-color-goku  rounded-p-20 position-relative">
                    <div className="position-absolute top-0 start-50 translate-middle wp-100 msp-0 mtp-10 zindex-1"><img src="images/page_055/img_007.svg" className="wp-40" /></div>
                    <span className="f-Ubuntu-R fsp-13 text-start">
                      Cada idea principal está presentada en un párrafo diferente.
                    </span>
                  </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center pbp-30">
                  <div className="d-flex flex-column w-90 ptp-40 pbp-30 psp-20 pep-20 bgc-white box-shadow-55-4 rounded-p-20 border-style-solid border-2 border-color-android18  rounded-p-20 position-relative">
                    <div className="position-absolute top-0 start-50 translate-middle wp-100 msp-0 mtp-10 zindex-1"><img src="images/page_055/img_008.svg" className="wp-40" /></div>
                    <span className="f-Ubuntu-R fsp-13 text-start">
                      El uso de puntuación es correcto, puesto que permite la comprensión del texto.
                    </span>
                  </div>
                </div>


              </div>

            </div>


            <div className="d-flex msp-20">

              <div className="row w-100">
                <div className="col-sm-12 col-md-6 position-relative">
                  <div className="position-absolute top-100 start-0 translate-middle wp-100 mtp--30 visible-695"><img src="images/page_055/img_011.png" className="wp-60" /></div>
                  <div className="bgc-bison exterior-caja-v1 border-style-solid  border-color-dark border-2 w-100 p-2 f-Ubuntu-L fsp-15 mbp-20">
                    <div className="d-flex interior-caja-v1 bgc-white text-start min-hp-60">
                      <div className="w-100 text-center">¿Qué aspectos de la transcripción preocupan al grupo?</div>
                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-250" />
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 position-relative">
                  <div className="position-absolute top-0 start-100 translate-middle msp--10 mtp-40 visible-695"><img src="images/page_055/img_009.png" className="hp-90" /></div>
                  <div className="position-absolute top-50 start-0 translate-middle visible-695"><img src="images/page_055/img_010.svg" className="hp-40" /></div>
                  <div className="bgc-bison exterior-caja-v1 border-style-solid  border-color-dark border-2 w-100 p-2 f-Ubuntu-L fsp-15 mbp-20">
                    <div className="d-flex interior-caja-v1 bgc-white text-start min-hp-60">
                      <div className="w-100 text-center">¿Qué solución le daremos?</div>
                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-250" />
                  </div>
                </div>

              </div>

            </div>


          </div>


          <div className="ptp-10 container-titulo-global mbp-100">
            <div className="d-flex">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_055/g_i.svg" alt="" />
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">2</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">A partir de los criterios mencionados, transcribo los fragmentos seleccionados con el equipo que realicé la entrevista.</div>
              <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image="images/page_055/revista.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
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

export default Page055;
