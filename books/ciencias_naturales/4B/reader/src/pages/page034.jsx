import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_034.css";

function Page034(props) {
  const pagina = "034";
  var indexInput = 0;
  const etapa = "3"
  const background = "bgc-android18";
  const color = "color-android18";
  const borderColor = "border-color-android18"
  const borderColorTable = "border-color-azuka"
  const bgc_cajas = "bgc-goku";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div
          className="page bgc-white overflow-hidden position-relative"
          id={"page_" + pagina}
        >
          <div className="cabecera-v2 bgc-android18 d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className="caja wp-150 text-center fsp-24 f-IntroRustG-Base color-balrog">
                SESIÓN 7
              </div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">
                ¿Qué tan preparados estamos?
              </div>
            </div>

            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-90"></div>
          </div>


          <div className="ptp-50 container-titulo-global mbp-0">
            <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
              Hacemos un inventario
            </div>
            <div className="d-flex psp-20">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_002.svg"} alt="" />
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                1
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Leemos la revista y averiguamos las herramientas que tiene el
                colegio para enfrentar una emergencia.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image={"images/page_" + pagina + "/img_003.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
            </div>
          </div>


          <div className="psp-160-r pep-160-r ptp-20 position-relative">
            <div className="giro--2deg">
              <div className="p-1 bgc-ryu sombra giro-2deg">
                <div className="p-1 bgc-ryu sombra giro--3deg">
                  <div className="bgc-white sombra p-3 giro-3deg ">
                    <div className="row pbp-20">
                      <div className="col-6">
                        <div className="ptp-10 pbp-10 psp-20">
                          <div className="d-flex">
                            <div className="cuadrado bgc-white border-style-solid border-1 border-color-dark">
                              <InputBox
                                id={"p" + pagina + "_input" + (indexInput += 1)}
                                className="p-0 px-1 text-start flex-grow-1 hp-25 min-hp-25"
                              />
                            </div>
                            <div className="f-Ubuntu-L psp-15 ptp-5 text-start">
                              Chaleco reflectante
                            </div>
                          </div>
                        </div>
                        <div className="ptp-10 pbp-10 psp-20">
                          <div className="d-flex">
                            <div className="cuadrado bgc-white border-style-solid border-1 border-color-dark">
                              <InputBox
                                id={"p" + pagina + "_input" + (indexInput += 1)}
                                className="p-0 px-1 text-start flex-grow-1 hp-25 min-hp-25"
                              />
                            </div>
                            <div className="f-Ubuntu-L psp-15 ptp-5 text-start">
                              Botiquín
                            </div>
                          </div>
                        </div>
                        <div className="ptp-10 pbp-10 psp-20">
                          <div className="d-flex">
                            <div className="cuadrado bgc-white border-style-solid border-1 border-color-dark">
                              <InputBox
                                id={"p" + pagina + "_input" + (indexInput += 1)}
                                className="p-0 px-1 text-start flex-grow-1 hp-25 min-hp-25"
                              />
                            </div>
                            <div className="f-Ubuntu-L psp-15 ptp-5 text-start">
                              Alcohol gel
                            </div>
                          </div>
                        </div>
                        <div className="ptp-10 pbp-10 psp-20">
                          <div className="d-flex">
                            <div className="cuadrado bgc-white border-style-solid border-1 border-color-dark">
                              <InputBox
                                id={"p" + pagina + "_input" + (indexInput += 1)}
                                className="p-0 px-1 text-start flex-grow-1 hp-25 min-hp-25"
                              />
                            </div>
                            <div className="f-Ubuntu-L psp-15 ptp-5 text-start">
                              Mascarillas
                            </div>
                          </div>
                        </div>
                        <div className="ptp-10 pbp-10 psp-20">
                          <div className="d-flex">
                            <div className="cuadrado bgc-white border-style-solid border-1 border-color-dark">
                              <InputBox
                                id={"p" + pagina + "_input" + (indexInput += 1)}
                                className="p-0 px-1 text-start flex-grow-1 hp-25 min-hp-25"
                              />
                            </div>
                            <div className="f-Ubuntu-L psp-15 ptp-5 text-start">
                              Guantes de seguridad
                            </div>
                          </div>
                        </div>
                        <div className="ptp-10 pbp-10 psp-20">
                          <div className="d-flex">
                            <div className="cuadrado bgc-white border-style-solid border-1 border-color-dark">
                              <InputBox
                                id={"p" + pagina + "_input" + (indexInput += 1)}
                                className="p-0 px-1 text-start flex-grow-1 hp-25 min-hp-25"
                              />
                            </div>
                            <div className="f-Ubuntu-L psp-15 ptp-5 text-start">
                              Directorio telefónico
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="ptp-10 pbp-10 psp-20">
                          <div className="d-flex">
                            <div className="cuadrado bgc-white border-style-solid border-1 border-color-dark">
                              <InputBox
                                id={"p" + pagina + "_input" + (indexInput += 1)}
                                className="p-0 px-1 text-start flex-grow-1 hp-25 min-hp-25"
                              />
                            </div>
                            <div className="f-Ubuntu-L psp-15 ptp-5 text-start">
                              Extintor
                            </div>
                          </div>
                        </div>
                        <div className="ptp-10 pbp-10 psp-20">
                          <div className="d-flex">
                            <div className="cuadrado bgc-white border-style-solid border-1 border-color-dark">
                              <InputBox
                                id={"p" + pagina + "_input" + (indexInput += 1)}
                                className="p-0 px-1 text-start flex-grow-1 hp-25 min-hp-25"
                              />
                            </div>
                            <div className="f-Ubuntu-L psp-15 ptp-5 text-start">
                              Linterna
                            </div>
                          </div>
                        </div>
                        <div className="ptp-10 pbp-10 psp-20">
                          <div className="d-flex">
                            <div className="cuadrado bgc-white border-style-solid border-1 border-color-dark">
                              <InputBox
                                id={"p" + pagina + "_input" + (indexInput += 1)}
                                className="p-0 px-1 text-start flex-grow-1 hp-25 min-hp-25"
                              />
                            </div>
                            <div className="f-Ubuntu-L psp-15 ptp-5 text-start">
                              Generador eléctrico
                            </div>
                          </div>
                        </div>
                        <div className="ptp-10 pbp-10 psp-20">
                          <div className="d-flex">
                            <div className="cuadrado bgc-white border-style-solid border-1 border-color-dark">
                              <InputBox
                                id={"p" + pagina + "_input" + (indexInput += 1)}
                                className="p-0 px-1 text-start flex-grow-1 hp-25 min-hp-25"
                              />
                            </div>
                            <div className="f-Ubuntu-L psp-15 ptp-5 text-start">
                              Guantes quirúrgicos
                            </div>
                          </div>
                        </div>
                        <div className="ptp-10 pbp-10 psp-20">
                          <div className="d-flex">
                            <div className="cuadrado bgc-white border-style-solid border-1 border-color-dark">
                              <InputBox
                                id={"p" + pagina + "_input" + (indexInput += 1)}
                                className="p-0 px-1 text-start flex-grow-1 hp-25 min-hp-25"
                              />
                            </div>
                            <div className="f-Ubuntu-L psp-15 ptp-5 text-start">
                              Señaléticas
                            </div>
                          </div>
                        </div>
                        <div className="ptp-10 pbp-10 psp-20">
                          <div className="d-flex">
                            <div className="cuadrado bgc-white border-style-solid border-1 border-color-dark">
                              <InputBox
                                id={"p" + pagina + "_input" + (indexInput += 1)}
                                className="p-0 px-1 text-start flex-grow-1 hp-25 min-hp-25"
                              />
                            </div>
                            <div className="f-Ubuntu-L psp-15 ptp-5 text-start">
                              Silbatos
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="psp-20 pep-20 border-style-solid border-2 border-color-goku rounded-p-20">
                      <div className="f-Ubuntu-L text-start ptp-10">Otras:</div>
                      <InputBox
                        id={"p" + pagina + "_input" + (indexInput += 1)}
                        className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-370"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img src="images/page_034/img_004.png" className="position-absolute top-0 start-0 mtp-120 msp-80-r" alt="" />
            <img src="images/page_034/img_005.png" className="position-absolute top-0 start-100 msp--180-r mtp-180" alt="" />
            <img src="images/page_034/img_006.png" className="position-absolute top-100 start-0 mtp--80 msp-100-r" alt="" />
          </div>
          <div className="pbp-80"></div>
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
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">
              {props.numeroPagina(pagina)}
            </div>
          </div>
          <div
            className="row w-100 position-absolute caja-flotante2 p-0 m-0 align-items-end"
            style={{ bottom: 0 }}
          >
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_motivacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_planificacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-7 col-sm-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_investigacion.svg"
                className="visible rotulo-etapa position-absolute top-0 start-0"
                alt=""
              />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_experimentacion.svg"
                className="oculto"
                alt=""
              />
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
          {/*FIN PIE DE PAGINA */}
        </div>
      </div>
    </div>
  );
}

export default Page034;
