import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_049.css";

function Page049(props) {

  const pagina = "049";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v2 bgc-pidgey d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className="caja wp-160 text-center fsp-24 f-IntroRustG-Base">SESIÓN 11</div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Diseñamos las entrevistas</div>
            </div>
            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-90">
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Mis objetivos en <br /> esta sesión son:
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_049/flecha.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Diferenciar las partes que<br /> componen una entrevista.
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_049/flecha1.svg" className="wp-40 arrow-global rotate-90" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Identificar las <br />características de una<br></br> entrevista.
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_049/flecha.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-3 align-self-center f-colby-compres-bold fsp-15 lh-sm text-center text-white">
                Enviar las invitaciones<br /> a las entrevistas.
              </div>
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}
          <div className="ptp-10 container-titulo-global mbp-20">
            <div className="d-flex">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_049/i_g.svg" alt="" />
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">1</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Leo la entrevista y completo.</div>
              {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image="images/page_049/revista.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
              <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} pagina={"49"} image={"images/page_" + pagina + "/revista.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
            </div>
          </div>

          <div className="d-flex psp-0 pep-0 ptp-0 pbp-0 mtp-0 msp-60 mep-60 mbp-70">
            <div className="row ptp-10 pbp-10 m-0 w-100 fondo-49 f-Ubuntu-M fsp-14 lh-sm text-center position-relative">

              <div className="position-absolute top-50 start-100 translate-middle visible-768 zindex-1"><img src="images/page_049/carta.png" className="wp-50 " alt="" /></div>

              <div className="col-sm-4 position-relative d-flex align-items-center justify-content-center lh-sm">Sección</div>
              <div className="col-sm-4 position-relative d-flex align-items-center justify-content-center lh-sm">¿Cómo la identifico visualmente?</div>
              <div className="col-sm-4 position-relative d-flex align-items-center justify-content-center lh-sm">¿Qué tipo de información presenta?</div>

              <div className="col-sm-4 position-relative d-flex align-items-center justify-content-center">
                <div className="position-absolute top-50 start-100 translate-middle msp-3 mtp-0 zindex-1">
                  <img src="images/page_049/flecha_amarilla.svg" className="wp-30" alt="" />
                </div>
                <div className="d-flex align-items-center justify-content-center flex-column mbp-5 mtp-10 w-100 rounded-p-10 h-80" style={{ backgroundColor: "#22b9d8" }}>Título</div>
              </div>
              <div className="col-sm-4 position-relative d-flex align-items-center">
                <div className="position-absolute top-50 start-100 translate-middle msp-3 mtp-0 zindex-1">
                  <img src="images/page_049/flecha_amarilla.svg" className="wp-30" alt="" />
                </div>
                <div className="d-flex flex-column mbp-5 mtp-10 w-100 rounded-p-10 bgc-white border-style-solid border-1 border-color-white">
                  <div className="p-2 w-100 max-wp-300">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-70" />
                  </div>
                </div>
              </div>
              <div className="col-sm-4 position-relative d-flex align-items-center">
                <div className="d-flex flex-column mbp-5 mtp-10 w-100 rounded-p-10 bgc-white border-style-solid border-1 border-color-white">
                  <div className="p-2 w-100 max-wp-300">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-70" />
                  </div>
                </div>
              </div>

              <div className="col-sm-4 position-relative d-flex align-items-center justify-content-center">
                <div className="position-absolute top-50 start-100 translate-middle msp-3 mtp-0 zindex-1">
                  <img src="images/page_049/flecha_amarilla.svg" className="wp-30" alt="" />
                </div>
                <div className="d-flex align-items-center justify-content-center flex-column mbp-5 mtp-10 w-100 rounded-p-10 h-80" style={{ backgroundColor: "#60c4de" }}>Presentación</div>
              </div>
              <div className="col-sm-4 position-relative d-flex align-items-center">
                <div className="position-absolute top-50 start-100 translate-middle msp-3 mtp-0 zindex-1">
                  <img src="images/page_049/flecha_amarilla.svg" className="wp-30" alt="" />
                </div>
                <div className="d-flex flex-column mbp-5 mtp-10 w-100 rounded-p-10 bgc-white border-style-solid border-1 border-color-white">
                  <div className="p-2 w-100 max-wp-300">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-70" />
                  </div>
                </div>
              </div>
              <div className="col-sm-4 position-relative d-flex align-items-center">
                <div className="d-flex flex-column mbp-5 mtp-10 w-100 rounded-p-10 bgc-white border-style-solid border-1 border-color-white">
                  <div className="p-2 w-100 max-wp-300">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-70" />
                  </div>
                </div>
              </div>

              <div className="col-sm-4 position-relative d-flex align-items-center justify-content-center">
                <div className="position-absolute top-50 start-100 translate-middle msp-3 mtp-0 zindex-1">
                  <img src="images/page_049/flecha_amarilla.svg" className="wp-30" alt="" />
                </div>
                <div className="d-flex align-items-center justify-content-center flex-column mbp-5 mtp-10 w-100 rounded-p-10 h-80" style={{ backgroundColor: "#85cee4" }}>Preguntas</div>
              </div>
              <div className="col-sm-4 position-relative d-flex align-items-center">
                <div className="position-absolute top-50 start-100 translate-middle msp-3 mtp-0 zindex-1">
                  <img src="images/page_049/flecha_amarilla.svg" className="wp-30" alt="" />
                </div>
                <div className="d-flex flex-column mbp-5 mtp-10 w-100 rounded-p-10 bgc-white border-style-solid border-1 border-color-white">
                  <div className="p-2 w-100 max-wp-300">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-70" />
                  </div>
                </div>
              </div>
              <div className="col-sm-4 position-relative d-flex align-items-center">
                <div className="d-flex flex-column mbp-5 mtp-10 w-100 rounded-p-10 bgc-white border-style-solid border-1 border-color-white">
                  <div className="p-2 w-100 max-wp-300">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-70" />
                  </div>
                </div>
              </div>

              <div className="col-sm-4 position-relative d-flex align-items-center justify-content-center">
                <div className="position-absolute top-50 start-100 translate-middle msp-3 mtp-0 zindex-1">
                  <img src="images/page_049/flecha_amarilla.svg" className="wp-30" alt="" />
                </div>
                <div className="d-flex align-items-center justify-content-center flex-column mbp-5 mtp-10 w-100 rounded-p-10 h-80" style={{ backgroundColor: "#a3d9ea" }}>Respuestas</div>
              </div>
              <div className="col-sm-4 position-relative d-flex align-items-center">
                <div className="position-absolute top-50 start-100 translate-middle msp-3 mtp-0 zindex-1">
                  <img src="images/page_049/flecha_amarilla.svg" className="wp-30" alt="" />
                </div>
                <div className="d-flex flex-column mbp-5 mtp-10 w-100 rounded-p-10 bgc-white border-style-solid border-1 border-color-white">
                  <div className="p-2 w-100 max-wp-300">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-70" />
                  </div>
                </div>
              </div>
              <div className="col-sm-4 position-relative d-flex align-items-center">
                <div className="d-flex flex-column mbp-5 mtp-10 w-100 rounded-p-10 bgc-white border-style-solid border-1 border-color-white">
                  <div className="p-2 w-100 max-wp-300">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-70" />
                  </div>
                </div>
              </div>

              <div className="col-sm-4 position-relative d-flex align-items-center justify-content-center">
                <div className="position-absolute top-50 start-100 translate-middle msp-3 mtp-0 zindex-1">
                  <img src="images/page_049/flecha_amarilla.svg" className="wp-30" alt="" />
                </div>
                <div className="d-flex align-items-center justify-content-center flex-column mbp-5 mtp-10 w-100 rounded-p-10 h-80" style={{ backgroundColor: "#bde3f0" }}>Imágenes de apoyo</div>
              </div>
              <div className="col-sm-4 position-relative d-flex align-items-center">
                <div className="position-absolute top-50 start-100 translate-middle msp-3 mtp-0 zindex-1">
                  <img src="images/page_049/flecha_amarilla.svg" className="wp-30" alt="" />
                </div>
                <div className="d-flex flex-column mbp-5 mtp-10 w-100 rounded-p-10 bgc-white border-style-solid border-1 border-color-white">
                  <div className="p-2 w-100 max-wp-300">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-70" />
                  </div>
                </div>
              </div>
              <div className="col-sm-4 position-relative d-flex align-items-center">
                <div className="d-flex flex-column mbp-5 mtp-10 w-100 rounded-p-10 bgc-white border-style-solid border-1 border-color-white">
                  <div className="p-2 w-100 max-wp-300">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-70" />
                  </div>
                </div>
              </div>

              <div className="col-sm-4 position-relative d-flex align-items-center">
                <div className="position-absolute top-50 start-100 translate-middle msp-3 mtp-0 zindex-1">
                  <img src="images/page_049/flecha_amarilla.svg" className="wp-30" alt="" />
                </div>
                <div className="d-flex align-items-center justify-content-center flex-column mbp-5 mtp-10 w-100 rounded-p-10 h-80" style={{ backgroundColor: "#d5ecf6" }}>Pie de imagen</div>
              </div>
              <div className="col-sm-4 position-relative d-flex align-items-center">
                <div className="position-absolute top-50 start-100 translate-middle msp-3 mtp-0 zindex-1">
                  <img src="images/page_049/flecha_amarilla.svg" className="wp-30" alt="" />
                </div>
                <div className="d-flex flex-column mbp-5 mtp-10 w-100 rounded-p-10 bgc-white border-style-solid border-1 border-color-white">
                  <div className="p-2 w-100 max-wp-300">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-70" />
                  </div>
                </div>
              </div>
              <div className="col-sm-4 position-relative d-flex align-items-center">
                <div className="d-flex flex-column mbp-5 mtp-10 w-100 rounded-p-10 bgc-white border-style-solid border-1 border-color-white">
                  <div className="p-2 w-100 max-wp-300">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-70" />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* <div className="d-flex msp-60 mep-60 mbp-70">

            <div className="row ptp-20 pbp-20 psp-0 pep-10 m-0 w-100 fondo-49">

              <div className="row pbp-15 m-0 align-items-center f-Ubuntu-M fsp-14 lh-sm text-center">
                <div className="col p-0 m-0 d-flex justify-content-center align-items-center hp-30">Sección</div>
                <div className="col p-0 m-0 d-flex justify-content-center align-items-center hp-30">¿Cómo la identifico<br /> visualmente?</div>
                <div className="col p-0 m-0 d-flex justify-content-center align-items-center hp-30">¿Qué tipo de información presenta?</div>
              </div>

              <div className="row pbp-15 m-0 align-items-center f-Ubuntu-M fsp-14 lh-sm text-center">
                <div className="col d-flex justify-content-center align-items-center rounded-p-5 hp-80" style={{ backgroundColor: "#22b9d8" }}>Título</div>
                <div className="col-auto p-0 m-0 zindex-1"><img src="images/page_049/flecha_amarilla.svg" className="wp-25 msp--2 mep--11" alt="" /></div>
                <div className="col d-flex justify-content-center align-items-center rounded-p-5 bgc-white pbp-10">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70 max-wp-200" />
                </div>
                <div className="col-auto p-0 m-0 zindex-1"><img src="images/page_049/flecha_amarilla.svg" className="wp-25 msp--2 mep--11" alt="" /></div>
                <div className="col d-flex justify-content-center align-items-center rounded-p-5 bgc-white pbp-10">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70 max-wp-200" />
                </div>
              </div>

              <div className="row pbp-15 m-0 align-items-center f-Ubuntu-M fsp-14 lh-sm text-center">
                <div className="col d-flex justify-content-center align-items-center rounded-p-5 hp-80" style={{ backgroundColor: "#60c4de" }}>Presentación</div>
                <div className="col-auto p-0 m-0 zindex-1"><img src="images/page_049/flecha_amarilla.svg" className="wp-25 msp--2 mep--11" alt="" /></div>
                <div className="col d-flex justify-content-center align-items-center rounded-p-5 bgc-white pbp-10">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                </div>
                <div className="col-auto p-0 m-0 zindex-1"><img src="images/page_049/flecha_amarilla.svg" className="wp-25 msp--2 mep--11" alt="" /></div>
                <div className="col d-flex justify-content-center align-items-center rounded-p-5 bgc-white pbp-10">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                </div>
              </div>
              <div className="row pbp-15 m-0 align-items-center f-Ubuntu-M fsp-14 lh-sm text-center">
                <div className="col d-flex justify-content-center align-items-center rounded-p-5 hp-80" style={{ backgroundColor: "#85cee4" }}>Peguntas</div>
                <div className="col-auto p-0 m-0 zindex-1"><img src="images/page_049/flecha_amarilla.svg" className="wp-25 msp--2 mep--11" alt="" /></div>
                <div className="col d-flex justify-content-center align-items-center rounded-p-5 bgc-white pbp-10">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                </div>
                <div className="col-auto p-0 m-0 zindex-1"><img src="images/page_049/flecha_amarilla.svg" className="wp-25 msp--2 mep--11" alt="" /></div>
                <div className="col d-flex justify-content-center align-items-center rounded-p-5 bgc-white pbp-10">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                </div>
              </div>
              <div className="row pbp-15 m-0 align-items-center f-Ubuntu-M fsp-14 lh-sm text-center">
                <div className="col d-flex justify-content-center align-items-center rounded-p-5 hp-80" style={{ backgroundColor: "#a3d9ea" }}>Respuestas</div>
                <div className="col-auto p-0 m-0 zindex-1"><img src="images/page_049/flecha_amarilla.svg" className="wp-25 msp--2 mep--11" alt="" /></div>
                <div className="col d-flex justify-content-center align-items-center rounded-p-5 bgc-white pbp-10">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                </div>
                <div className="col-auto p-0 m-0 zindex-1"><img src="images/page_049/flecha_amarilla.svg" className="wp-25 msp--2 mep--11" alt="" /></div>
                <div className="col d-flex justify-content-center align-items-center rounded-p-5 bgc-white pbp-10">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                </div>
              </div>
              <div className="row pbp-15 m-0 align-items-center f-Ubuntu-M fsp-14 lh-sm text-center">
                <div className="col d-flex justify-content-center align-items-center rounded-p-5 hp-80" style={{ backgroundColor: "#bde3f0" }}>Imágenes de apoyo</div>
                <div className="col-auto p-0 m-0 zindex-1"><img src="images/page_049/flecha_amarilla.svg" className="wp-25 msp--2 mep--11" alt="" /></div>
                <div className="col d-flex justify-content-center align-items-center rounded-p-5 bgc-white pbp-10">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                </div>
                <div className="col-auto p-0 m-0 zindex-1"><img src="images/page_049/flecha_amarilla.svg" className="wp-25 msp--2 mep--11" alt="" /></div>
                <div className="col d-flex justify-content-center align-items-center rounded-p-5 bgc-white pbp-10">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                </div>
              </div>
              <div className="row pbp-15 m-0 align-items-center f-Ubuntu-M fsp-14 lh-sm text-center">
                <div className="col d-flex justify-content-center align-items-center rounded-p-5 hp-80" style={{ backgroundColor: "#d5ecf6" }}>Pie de imagen</div>
                <div className="col-auto p-0 m-0 zindex-1"><img src="images/page_049/flecha_amarilla.svg" className="wp-25 msp--2 mep--11" alt="" /></div>
                <div className="col d-flex justify-content-center align-items-center rounded-p-5 bgc-white pbp-10">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                </div>
                <div className="col-auto p-0 m-0 zindex-1"><img src="images/page_049/flecha_amarilla.svg" className="wp-25 msp--2 mep--11" alt="" /></div>
                <div className="col d-flex justify-content-center align-items-center rounded-p-5 bgc-white pbp-10">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                </div>
              </div>
            </div>

          </div> */}

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

export default Page049;
