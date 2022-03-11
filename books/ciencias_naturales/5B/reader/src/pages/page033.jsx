import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_033.css";

function Page033(props) {
  const pagina = "033";
  var indexInput = 0;
  const etapa = "3";
  const background = "bgc-android18";
  const color = "color-android18";
  const colorSesion = "color-primary";
  const borderColor = "border-color-android18";
  const bgc_cajas = "bgc-goku";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div
          className="page bgc-white overflow-hidden position-relative"
          id={"page_" + pagina}
        >
          {/* BEGIN CABECERA VERSIÓN 2 */}
          {/* <div className={"cabecera-v2 d-flex flex-column " + background}>
                        <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
                            <div className={"caja wp-150 text-center fsp-24 f-IntroRustG-Base " + colorSesion}>SESIÓN 9</div>
                            <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Confeccionamos una infografía</div>
                        </div>

                    </div> */}
          {/* END CABECERA VERSIÓN 2 */}
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className={"cabecera-v2 d-flex flex-column " + background}>
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div
                className={
                  "caja-seccion wp-160 hp-70 text-center fsp-24 f-IntroRustG-Base color-dark"
                }
              >
                SESIÓN 7
              </div>
              <div className="d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">
                Información nutricional
              </div>
            </div>
            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-95">
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Mis objetivos en esta sesión son:
              </div>
              <div className="p-0 align-self-center">
                <img
                  src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"}
                  className="wp-40 arrow-global"
                  alt=""
                />
              </div>
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Entender la información que entregan las etiquetas nutricionales
              </div>
              <div className="psp-5 pep-5 align-self-center">
                <img
                  src={"images/generales/flecha_sesion_e" + etapa + "_2.svg"}
                  className="wp-40 arrow-global"
                  alt=""
                />
              </div>
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Reflexionar sobre los aprendizajes de la sesión y su <br />
                importancia para el desafío
              </div>
              <div className="p-0 align-self-center">
                <img
                  src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"}
                  className="wp-40 arrow-global"
                  alt=""
                />
              </div>
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Calcular el aporte <br /> energético de un alimento
              </div>
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-30 container-titulo-global mbp-20">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 " + color}>Creo e informo</div> */}
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_001.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                1
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Leo la historieta de la revista y completo la información de la
                etiqueta nutricional de la leche que se muestra a continuación.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              <ModalBook
                id={"p" + pagina + "_book" + (indexInput += 1)}
                pagina={"89"}
                image={"images/page_" + pagina + "/img_002.svg"}
                clasesImagen="hp-40 text-center mtp-10 "
                className="p-0 px-0"
              />
            </div>
          </div>

          <div className="d-flex global-margin mtp-0 mbp-20 psp-30 pep-30 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-md-12 col-md-5 position-relative">
                <table className=" f-Ubuntu-L fsp-16 border-2 border-style-solid border-color-dark text-start mbp-20 ">
                  <tr>
                    <td
                      className=" f-Ubuntu-B border-2 border-style-solid border-color-dark text-center p-1"
                      colspan="3"
                    >
                      INFORMACIÓN NUTRICIONAL
                    </td>
                  </tr>
                  <tr>
                    <td
                      className=" border-2 border-style-solid border-color-dark text-center p-1"
                      colspan="3"
                    >
                      Porción: 1 vaso (200 mL)
                    </td>
                  </tr>
                  <tr>
                    <td
                      className=" border-2 border-style-solid border-color-dark p-1"
                      colspan="3"
                    >
                      Porciones por envase: 1
                    </td>
                  </tr>
                  <tr>
                    <td className=" border-2 border-style-solid border-color-dark p-1 bgc-kagome"></td>
                    <td className=" border-2 border-style-solid border-color-dark text-center p-1 bgc-kagome">
                      100 mL
                    </td>
                    <td className=" border-2 border-style-solid border-color-dark text-center p-1 bgc-kagome">
                      1 porción
                    </td>
                  </tr>

                  <tr>
                    <td className=" border-2 border-style-solid border-color-dark bgc-azuka p-1">
                      Energía (kcal)
                    </td>
                    <td className=" border-2 border-style-solid border-color-dark text-center p-1">
                      29
                    </td>
                    <td className=" border-2 border-style-solid border-color-dark text-center p-1">
                      58
                    </td>
                  </tr>
                  <tr>
                    <td className=" border-2 border-style-solid border-color-dark bgc-azuka p-1">
                      Proteínas (g)
                    </td>
                    <td className=" border-2 border-style-solid border-color-dark text-center p-1">
                      0,3
                    </td>
                    <td className=" border-2 border-style-solid border-color-dark text-center p-1">
                      0,6
                    </td>
                  </tr>
                  <tr>
                    <td className=" border-2 border-style-solid border-color-dark bgc-azuka p-1">
                      Grasa (g)
                    </td>
                    <td className=" border-2 border-style-solid border-color-dark text-center p-1">
                      0,1
                    </td>
                    <td className=" border-2 border-style-solid border-color-dark text-center p-1">
                      0,2
                    </td>
                  </tr>
                  <tr>
                    <td className=" border-2 border-style-solid border-color-dark bgc-azuka p-1">
                      H. de C. Disp. (g)
                    </td>
                    <td className=" border-2 border-style-solid border-color-dark text-center p-1">
                      7
                    </td>
                    <td className=" border-2 border-style-solid border-color-dark text-center p-1">
                      14
                    </td>
                  </tr>
                  <tr>
                    <td className=" border-2 border-style-solid border-color-dark bgc-azuka p-1">
                      Azúcar (g)
                    </td>
                    <td className=" border-2 border-style-solid border-color-dark text-center p-1">
                      6
                    </td>
                    <td className=" border-2 border-style-solid border-color-dark text-center p-1">
                      12
                    </td>
                  </tr>
                  <tr>
                    <td className=" border-2 border-style-solid border-color-dark bgc-azuka p-1">
                      Sodio (mg)
                    </td>
                    <td className=" border-2 border-style-solid border-color-dark text-center p-1">
                      5
                    </td>
                    <td className=" border-2 border-style-solid border-color-dark text-center p-1">
                      10
                    </td>
                  </tr>
                  <tr>
                    <td className=" border-2 border-style-solid border-color-dark bgc-azuka p-1"></td>
                    <td className=" border-2 border-style-solid border-color-dark p-1"></td>
                    <td className=" border-2 border-style-solid border-color-dark text-center p-1">
                      (*)
                    </td>
                  </tr>
                  <tr>
                    <td className=" border-2 border-style-solid border-color-dark bgc-azuka p-1">
                      Vitamina C (mg)
                    </td>
                    <td className=" border-2 border-style-solid border-color-dark text-center p-1">
                      60
                    </td>
                    <td className=" border-2 border-style-solid border-color-dark text-center p-1">
                      15%
                    </td>
                  </tr>
                  <tr>
                    <td className=" border-2 border-style-solid border-color-dark bgc-azuka p-1">
                      Vitamina B6 (mg)
                    </td>
                    <td className=" border-2 border-style-solid border-color-dark text-center p-1">
                      60
                    </td>
                    <td className=" border-2 border-style-solid border-color-dark text-center p-1">
                      15%
                    </td>
                  </tr>
                  <tr>
                    <td
                      className=" border-2 border-style-solid border-color-dark p-1"
                      colspan="3"
                    >
                      (*) Porcentaje en relación con la dosis diaria
                      recomendada.
                    </td>
                  </tr>
                </table>
              </div>
              <div className="col-md-12 col-md-7 p-0 m-0 position-relative">
                <div className="position-absolute top-100 start-100 translate-middle  zindex-1">
                  <img
                    src={"images/page_" + pagina + "/img_003.png"}
                    className=""
                    alt=""
                  />
                </div>

                <div className="d-flex msp-10 mep-10 mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
                  <div className="row p-0 m-0 w-100">
                    <div className="col-12 p-0 m-0 position-relative">
                      <div className="border-style-solid border-4 border-color-kitana">
                        <div className="d-flex flex-column bgc-white">
                          <div className="psp-10 pep-10 ptp-10 pbp-10 f-Ubuntu-R fsp-15">
                            <div className="d-flex align-items-start justify-content-start    f-Ubuntu-R fsp-15   ">
                              <div className="f-Ubuntu-L msp-10 ptp-10 fsp-15 lh-sm pep-5 text-start     ">
                                El tamaño de la porción es{" "}
                              </div>
                              <InputBox
                                id={"p" + pagina + "_input" + (indexInput += 1)}
                                className="mtp-0 w-10 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35"
                              />
                            </div>
                            <div className="d-flex align-items-start justify-content-start f-Ubuntu-R fsp-15   ">
                              <div className="f-Ubuntu-L msp-10 ptp-10 fsp-15 lh-sm pep-5 text-start     ">
                                El producto tiene{" "}
                              </div>
                              <InputBox
                                id={"p" + pagina + "_input" + (indexInput += 1)}
                                className="mtp-0 w-10 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35"
                              />
                            </div>
                            <div className="text-start f-Ubuntu-L fsp-14 msp-10">
                              porciones por envase.
                            </div>
                            <div className="d-flex align-items-start justify-content-start    f-Ubuntu-R fsp-15   ">
                              <div className="f-Ubuntu-L msp-10 ptp-10 fsp-15 lh-sm pep-5 text-start     ">
                                Una porción aporta{" "}
                              </div>
                              <InputBox
                                id={"p" + pagina + "_input" + (indexInput += 1)}
                                className="mtp-0 w-10 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35"
                              />
                            </div>
                            <div className="d-flex align-items-start justify-content-start    f-Ubuntu-R fsp-15   ">
                              <div className="f-Ubuntu-L msp-10 ptp-10 fsp-15 lh-sm pep-5 text-start     ">
                                kcal de energía, 0,6 gramos de{" "}
                              </div>
                              <InputBox
                                id={"p" + pagina + "_input" + (indexInput += 1)}
                                className="mtp-0 w-10 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35"
                              />
                              <div className="f-Ubuntu-L msp-10 ptp-10 fsp-15 lh-sm pep-5 text-start     ">
                                ,{" "}
                              </div>
                            </div>

                            <div className="d-flex align-items-start justify-content-start    f-Ubuntu-R fsp-15   ">
                              <InputBox
                                id={"p" + pagina + "_input" + (indexInput += 1)}
                                className="mtp-0 w-10 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35"
                              />
                              <div className="f-Ubuntu-L msp-10 ptp-10 fsp-15 lh-sm pep-5 text-start     ">
                                gramos de grasa,{" "}
                              </div>
                            </div>
                            <div className="d-flex align-items-start justify-content-start    f-Ubuntu-R fsp-15   ">
                              <InputBox
                                id={"p" + pagina + "_input" + (indexInput += 1)}
                                className="mtp-0 w-10 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35"
                              />
                              <div className="f-Ubuntu-L msp-10 ptp-10 fsp-15 lh-sm pep-5 text-start     ">
                                gramos de hidratos de carbono,{" "}
                              </div>
                            </div>
                            <div className="d-flex align-items-start justify-content-start    f-Ubuntu-R fsp-15   ">
                              <InputBox
                                id={"p" + pagina + "_input" + (indexInput += 1)}
                                className="mtp-0 w-10 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35"
                              />
                              <div className="f-Ubuntu-L msp-10 ptp-10 fsp-15 lh-sm pep-5 text-start     ">
                                gramos de azúcar y{" "}
                              </div>
                            </div>
                            <div className="d-flex align-items-start justify-content-start    f-Ubuntu-R fsp-15   ">
                              <InputBox
                                id={"p" + pagina + "_input" + (indexInput += 1)}
                                className="mtp-0 w-10 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35"
                              />
                              <div className="f-Ubuntu-L msp-10 ptp-10 fsp-15 lh-sm pep-5 text-start     ">
                                miligramos de sodio.{" "}
                              </div>
                            </div>
                            <div className="text-start f-Ubuntu-L fsp-14 ptp-20 psp-10">
                              El porcentaje en relación a la dosis diaria
                              
                            </div>
                            <div className="d-flex align-items-start justify-content-start    f-Ubuntu-R fsp-15   ">
                              <div className="f-Ubuntu-L msp-10 ptp-10 fsp-15 lh-sm pep-5 text-start     ">
                              recomendada de la vitamina C es{" "}
                              </div>
                              <InputBox
                                id={"p" + pagina + "_input" + (indexInput += 1)}
                                className="mtp-0 w-10 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35"
                              />
                            </div>
                            <div className="d-flex align-items-start justify-content-start    f-Ubuntu-R fsp-15   ">
                              <div className="f-Ubuntu-L msp-10 ptp-10 fsp-15 lh-sm pep-5 text-start     ">
                              y de la vitamina B6{" "}
                              </div>
                              <InputBox
                                id={"p" + pagina + "_input" + (indexInput += 1)}
                                className="mtp-0 w-10 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35"
                              />
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

          <div className="ptp-30 container-titulo-global mbp-20">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 "+color}>Creo e informo</div> */}
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_001.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                2
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Reflexiono para responder las preguntas.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_002.jpg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="d-flex global-margin mtp-0 mbp-100 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-md-12 col-md-6 p-0 m-0 position-relative">
                <div className="d-flex msp-10 mep-10 mtp-10 mbp-20 psp-0 pep-0 ptp-0 pbp-0">
                  <div className="row p-0 m-0 w-100">
                    <div className="col-12 p-0 m-0 position-relative">
                      <div className="border-style-solid border-2 border-color-dark">
                        <div className="d-flex flex-column bgc-white">
                          <div className="psp-10 pep-10 ptp-10 pbp-10 f-Ubuntu-R fsp-15">
                            <div className="text-center f-Ubuntu-L fsp-14">
                               ¿Qué estoy aprendiendo?
                            </div>
                            <InputBox
                              id={"p" + pagina + "_input" + (indexInput += 1)}
                              className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-170"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12 col-md-6 p-0 m-0 position-relative">
                <div className="position-absolute top-0 start-100 translate-middle  zindex-1">
                  <img
                    src={"images/page_" + pagina + "/img_004.png"}
                    className=""
                    alt=""
                  />
                </div>
                <div className="d-flex msp-10 mep-10 mtp-10 mbp-20 psp-0 pep-0 ptp-0 pbp-0">
                  <div className="row p-0 m-0 w-100">
                    <div className="col-12 p-0 m-0 position-relative">
                      <div className="border-style-solid border-2 border-color-dark">
                        <div className="d-flex flex-column bgc-white">
                          <div className="psp-10 pep-10 ptp-10 pbp-10 f-Ubuntu-R fsp-15">
                            <div className="text-center f-Ubuntu-L fsp-14">
                              ¿Para qué lo puedo utilizar en el desafío?
                            </div>
                            <InputBox
                              id={"p" + pagina + "_input" + (indexInput += 1)}
                              className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-170"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BEGIN PIE DE PAGINA */}
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
            <div className="col-1 position-relative col-md-2 p-0 m-0">
              <img
                src="images/rotulo_planificacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-7 position-relative col-md-2 p-0 m-0">
              <img
                src="images/rotulo_investigacion.svg"
                className="visible rotulo-etapa position-absolute top-0 start-0"
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
          {/* END PIE DE PAGINA */}
        </div>
      </div>
    </div>
  );
}

export default Page033;
