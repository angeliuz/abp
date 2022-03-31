import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";

import "./page_019.css";

function Page019(props) {
  const pagina = "019";
  var indexInput = 0;
  const etapa = "2";
  const background = "bgc-bulma";
  const color = "color-bulma";
  const borderColor = "border-color-bulma";
  const borderColorTabla = "border-color-buzz";
  const bgc_cajas = "bgc-piccolo";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div
          className="cb-page19 page bgc-white overflow-hidden position-relative"
          id={"page_" + pagina}
        >
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v2 bgc-bulma d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 align-items-center ptp-40 psp-30 pep-30">
              <div className="caja-seccion wp-160 hp-60 d-flex justify-content-center ptp-10 mtp-5 color-bulma fsp-24 f-IntroRustG-Base">
                SESIÓN 3
              </div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">
                ¡Este es nuestro plan!
              </div>
            </div>
          </div>
          {/* END CABECERA */}

          <div className="ptp-30 container-titulo-global mbp-40">
            <div className={"f-Ubuntu-B fsp-20 psp-40 text-start lhp-20 " + color}>
              Las tareas de cada etapa
            </div>
            <div className="d-flex">
              <img src={"images/page_" + pagina + "/img_002.svg"} className="hp-20 align-center mt-3 me-0 mb-2" alt="" />
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                1
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Vemos el video y rotulamos las siguientes etapas del proyecto según corresponda.
              </div>
              {/* <img src={"images/page_"+pagina+"/img_001.svg"} className="w-50" alt="" /> */}
              <ModalVideo
                                            id={"p" + pagina + "_video" + (indexInput += 1)}
                                            linkVideo="682622701"
                                            tituloVideo="Brigadas al rescate II"
                                            tipoVideo="vimeo"
                                            image={"images/generales/play.svg"}
                                            colorUnidad={background}
                                            clasesImagen="cambio hp-40 mtp-10"
                                            className="p-0 px-1"
                                        />
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_"+pagina+"/
              _001.png" className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_007/revista65.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>



          <div className="ptp-0 psp-60 pep-60 pbp-60 f-Ubuntu-R">

            <div className="diline-res-p19 justify-content-between pbp-20">
              <img
                src="images/page_019/img_004.svg"
                className="mxhp-40"
                alt=""
              />
              <img
                src="images/page_019/img_005.svg"
                className="mxhp-20 giro90-res"
                alt=""
              />
              <img
                src="images/page_019/img_006.svg"
                className="mxhp-40"
                alt=""
              />
              <img
                src="images/page_019/img_007.svg"
                className="mxhp-20 giro90-res"
                alt=""
              />
              <img
                src="images/page_019/img_008.svg"
                className="mxhp-40"
                alt=""
              />
              <img
                src="images/page_019/img_009.svg"
                className="mxhp-20 giro90-res"
                alt=""
              />
              <img
                src="images/page_019/img_010.svg"
                className="mxhp-40"
                alt=""
              />
            </div>

            <div className="bgc-urien p-2 d-flex rounded-p-10 box-shadow-simple">
              <div className="mnwp-160 bgc-white centrar-ver rounded-p-10 position-relative">
                <img
                  src="images/page_019/img_011.png"
                  className="position-absolute top-0 start-0 translate-middle msp-5 mtp-5 hp-40 "
                  alt=""
                />
                <InputBox
                  id={"p" + pagina + "_input" + (indexInput += 1)}
                  className="p-0 px-1 text-center flex-grow-1 lhp-80 wp-160 min-hp-80"
                />
              </div>
              <div className="centrar-ver">
                <div className="text-start psp-10">
                  <div className="dot mep-10 mtp-10"></div>
                  <div className="f-ubuntu-L py-1 mtp--26 msp-20">
                    Presentar la brigada a la comunidad educativa.
                  </div>
                </div>
                <div className="text-start psp-10 pep-20">
                  <div className="dot mep-10 mtp-10"></div>
                  <div className="f-ubuntu-L py-1 mtp--26 msp-20">
                    Reflexionar sobre nuestro trabajo en equipo.
                  </div>
                </div>
                <div className="text-start psp-10 pep-20">
                  <div className="dot mep-10 mtp-10"></div>
                  <div className="f-ubuntu-L py-1 mtp--26 msp-20">
                    Valorar lo aprendido y el trabajo realizado.
                  </div>
                </div>
              </div>
            </div>
            <div className="ptp-15"></div>
            <div className="bgc-urien p-2 d-flex rounded-p-10 box-shadow-simple">
              <div className="mnwp-160 bgc-white centrar-ver rounded-p-10 position-relative">
                <img
                  src="images/page_019/img_011.png"
                  className="position-absolute top-0 start-0 translate-middle msp-5 mtp-5 hp-40 "
                  alt=""
                />
                <InputBox
                  id={"p" + pagina + "_input" + (indexInput += 1)}
                  className="p-0 px-1 text-center flex-grow-1 lhp-80 wp-160 min-hp-80"
                />
              </div>
              <div className="centrar-ver">
                <div className="text-start psp-10">
                  <div className="dot mep-10 mtp-10"></div>
                  <div className="f-ubuntu-L py-1 mtp--26 msp-20">
                    Conocer las tareas de la brigada.
                  </div>
                </div>
                <div className="text-start psp-10 pep-20">
                  <div className="dot mep-10 mtp-10"></div>
                  <div className="f-ubuntu-L py-1 mtp--26 msp-20">
                    Simular una situación de emergencia.
                  </div>
                </div>
                <div className="text-start psp-10 pep-20">
                  <div className="dot mep-10 mtp-10"></div>
                  <div className="f-ubuntu-L py-1 mtp--26 msp-20">
                    Evaluar la misión de la brigada ante el simulacro de emergencia.
                  </div>
                </div>
              </div>
            </div>
            <div className="ptp-15"></div>
            <div className="bgc-urien p-2 d-flex rounded-p-10 box-shadow-simple">
              <div className="mnwp-160 bgc-white centrar-ver rounded-p-10 position-relative">
                <img
                  src="images/page_019/img_011.png"
                  className="position-absolute top-0 start-0 translate-middle msp-5 mtp-5 hp-40 "
                  alt=""
                />
                <InputBox
                  id={"p" + pagina + "_input" + (indexInput += 1)}
                  className="p-0 px-1 text-center flex-grow-1 lhp-80 wp-160 min-hp-80"
                />
              </div>
              <div className="centrar-ver">
                <div className="text-start psp-10">
                  <div className="dot mep-10 mtp-10"></div>
                  <div className="f-ubuntu-L py-1 mtp--26 msp-20">
                    Crear un folleto para divulgar la misión de las brigadas.
                  </div>
                </div>
                <div className="text-start psp-10 pep-20">
                  <div className="dot mep-10 mtp-10"></div>
                  <div className="f-ubuntu-L py-1 mtp--26 msp-20">
                    Preparar la presentación de la brigada a la comunidad educativa.
                  </div>
                </div>
                <div className="text-start psp-10 pep-20">
                  <div className="dot mep-10 mtp-10"></div>
                  <div className="f-ubuntu-L py-1 mtp--26 msp-20">
                    Elaborar encuestas para conocer la opinión de los asistentes sobre la misión de la brigada.
                  </div>
                </div>
              </div>
            </div>
            <div className="ptp-15"></div>
            <div className="bgc-urien p-2 d-flex rounded-p-10 box-shadow-simple">
              <div className="mnwp-160 bgc-white centrar-ver rounded-p-10 position-relative">
                <img
                  src="images/page_019/img_011.png"
                  className="position-absolute top-0 start-0 translate-middle msp-5 mtp-5 hp-40 "
                  alt=""
                />
                <InputBox
                  id={"p" + pagina + "_input" + (indexInput += 1)}
                  className="p-0 px-1 text-center flex-grow-1 lhp-80 wp-160 min-hp-80"
                />
              </div>
              <div className="centrar-ver">
                <div className="text-start psp-10">
                  <div className="dot mep-10 mtp-10"></div>
                  <div className="f-ubuntu-L py-1 mtp--26 msp-20">
                    Investigar los riesgos naturales y situaciones de emergencia a los que estamos expuestos.
                  </div>
                </div>
                <div className="text-start psp-10 pep-20">
                  <div className="dot mep-10 mtp-10"></div>
                  <div className="f-ubuntu-L py-1 mtp--26 msp-20">
                    Analizar el plan de seguridad del colegio y encuestar a la comunidad educativa para saber cuánto lo conoce.
                  </div>
                </div>
                <div className="text-start psp-10 pep-20">
                  <div className="dot mep-10 mtp-10"></div>
                  <div className="f-ubuntu-L py-1 mtp--26 msp-20">
                    Resumir lo investigado en fichas de seguridad.
                  </div>
                </div>
              </div>
            </div>
            <div className="ptp-15"></div>
          </div>
          {/* PIE DE PAGINA */}
          <div
            className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2"
            style={{ bottom: 70, right: 0 }}
          >
            <div
              className="f-Ubuntu-M fsp-10 position-absolute mbp-60"
              style={{ transform: `rotate(270deg)`, color: "dark" }}
            >
              ABP &copy; SM
            </div>
            <div className="bgc-jawa wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">
              {props.numeroPagina(pagina)}
            </div>
          </div>
          <div
            className="row position-absolute caja-flotante2 p-0 m-0 align-items-end"
            style={{ bottom: 0 }}
          >
            <div className="col-1 position-relative col-md-2 p-0 m-0">
              <img
                src="images/rotulo_motivacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-7 position-relative col-md-2 p-0 m-0">
              <img
                src="images/rotulo_planificacion.svg"
                className="visible rotulo-etapa position-absolute top-0 start-0"
                alt=""
              />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-1 position-relative col-md-2 p-0 m-0">
              <img
                src="images/rotulo_investigacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 position-relative col-md-2 p-0 m-0">
              <img
                src="images/rotulo_experimentacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-1 position-relative col-md-2 p-0 m-0">
              <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className="col-1 position-relative col-md-2 p-0 m-0">
              <img src="images/rotulo_difusion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-leono rounded-caja-end"></div>
              <div className="w-100 hp-25 bgc-pikachu"></div>
            </div>
          </div>
          {/* FIN PIE DE PAGINA */}
        </div>
      </div>
    </div>
  );
}

export default Page019;
