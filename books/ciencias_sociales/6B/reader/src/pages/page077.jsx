import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import "./page_077.css";

function Page077(props) {

  const pagina = "077";
  var indexInput = 0;
  const etapa = "6"
  const background = "bgc-pikachu";
  const color = "color-pikachu";
  const borderColor = "border-color-pikachu"
  const borderColorTabla = "border-color-kokomi"
  const bgc_cajas = "bgc-kokomi";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
              <div className={"dosier-e" + etapa + " page bgc-white overflow-hidden position-relative"} id={"page_" + pagina}>
                <img src={"images/cabecera/dosier_e" + etapa + ".svg"} className="w-100" alt="" />
                <div className="position-relative w-100 mbp-10">
                  <div className="psp-80 pep-70 ptp-30 pbp-0 position-relative">
                    <div className="fsp-16 f-Ubuntu-R text-start psp-50 pbp-10">Esta página fue completada por:</div>
                    <div className={"psp-50 pep-50 ptp-5 pbp-5 bgc-white rounded-p-10 border-style-solid border-1 " + borderColor + " d-flex justify-content-center position-relative"}>
                      <div className="position-absolute top-50 start-100 translate-middle wp-100 msp-0 mtp--10"><img src={"images/page_" + pagina + "/img_002.png"} className="w-50" alt="" /></div>
                      <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp--10"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-60" alt="" /></div>
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                    </div>
                  </div>
                </div>
                <div className="d-flex msp-60 mep-60 mbp-20 mtp-30 position-relative">
                  <div className="position-absolute top-50 start-100 translate-middle wp-100 msp-0 mtp--40 visible-768"><img src={"images/page_" + pagina + "/img_003.png"} className="w-70" alt="" /></div>
                  <div className="row w-100 p-0 m-0">
                    <div className="col-12">
                      <div className="d-flex flex-wrap w-100 align-items-end titulo-linea ">
                        <div className="w-100 p-2 pb-3 rounded-p-10">
                          <table className="w-100">
                            <tbody>
                              <tr>
                                <td><div className="w-24 f-Ubuntu-L text-start justify-content-start">¿Cómo hemos aprendido en equipo?</div></td>
                                <td className={"style-caja bgc-obiwan tf-letra border-style-solid border-1 border-color-obiwan f-colby-compres-bold ps-2 pe-2"}>
                                  Nunca</td>
                                <td style={{ minWidth: "55px" }} className={"style-caja bgc-obiwan tf-letra  border-style-solid border-1 border-color-obiwan f-colby-compres-bold ps-2 pe-2"}>
                                  A veces</td>
                                <td className={"style-caja bgc-obiwan tf-letra border-style-solid border-1 border-color-obiwan f-colby-compres-bold ps-2 pe-2"}>
                                  Generalmente</td>
                                <td className={"style-caja bgc-obiwan tf-letra  border-style-solid border-1 border-color-obiwan f-colby-compres-bold ps-2 pe-2"}>
                                  Siempre</td>
                              </tr>
                              <tr className="bgc-white">
                                <td className={"bgc-honda f-Ubuntu-L fsp-16 text-start psp-5 border-style-solid border-1 border-color-obiwan"}>Nos involucramos en la realización de la tarea y nos responsabilizamos de las tareas que tuvimos que hacer.</td>
                                <td className={"border-style-solid border-1 border-color-obiwan"}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                                <td className={"border-style-solid border-1 border-color-obiwan"}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                                <td className={"border-style-solid border-1 border-color-obiwan"}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                                <td className={"border-style-solid border-1 border-color-obiwan"}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                              </tr>
                              <tr className="bgc-white">
                                <td className={"bgc-honda f-Ubuntu-L fsp-16 text-start psp-5 border-style-solid border-1 border-color-obiwan"}>Ante una petición de ayuda, dejamos de hacer otras cosas e intentamos ayudar antes de preguntarle al profesor</td>
                                <td className={"border-style-solid border-1 border-color-obiwan"}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                                <td className={"border-style-solid border-1 border-color-obiwan"}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                                <td className={"border-style-solid border-1 border-color-obiwan"}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                                <td className={"border-style-solid border-1 border-color-obiwan"}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                              </tr>
                              <tr className="bgc-white">
                                <td className={"bgc-honda f-Ubuntu-L fsp-16 text-start psp-5 border-style-solid border-1 border-color-obiwan"}>Respetamos el turno de la palabra.</td>
                                <td className={"border-style-solid border-1 border-color-obiwan"}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                                <td className={"border-style-solid border-1 border-color-obiwan"}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                                <td className={"border-style-solid border-1 border-color-obiwan"}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                                <td className={"border-style-solid border-1 border-color-obiwan"}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                              </tr>
                              <tr className="bgc-white">
                                <td className={"bgc-honda f-Ubuntu-L fsp-16 text-start psp-5 border-style-solid border-1 border-color-obiwan"}>Llegamos a acuerdos y decisiones compartidas después de que cada uno dio su opinión.</td>
                                <td className={"border-style-solid border-1 border-color-obiwan"}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                                <td className={"border-style-solid border-1 border-color-obiwan"}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                                <td className={"border-style-solid border-1 border-color-obiwan"}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                                <td className={"border-style-solid border-1 border-color-obiwan"}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                              </tr>

                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* BEGIN EJERCICIO 2 */}
                <div className="max-wp-640 f-Ubuntu-L fsp-15 text-start mx-auto mbp-10">
                  Después de todo el trabajo, valoramos así lo que hemos hecho:
                </div>
                <div className="row mx-auto d-flex f-Ubuntu-R fsp-15 mbp-20 justify-content-center">
                  <div className="col-sm-12 col-md-5 position-relative">
                    <div className="position-absolute top-100 start-0 translate-middle msp-10 mtp-0 visible-768 zindex-10"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-60" alt="" /></div>
                    <div className="text-center w-100 border-1 border-style-solid border-color-dark rounded-p-10 pbp-30 bgc-white mtp-10">
                      <div className="f-Ubuntu-L fsp-15 rounded-p-10 max-wp-200 mx-auto hp-40 pep-20 psp-20 ptp-10 mtp--5 pbp-10 bgc-trans-tomoe d-flex justify-content-center align-items-center">
                        Lo más difícil fue
                      </div>
                      <div className="psp-10 pep-10 pbp-10 ptp-0 w-100 d-flex">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-5 position-relative">
                    <div className="text-center w-100 border-1 border-style-solid border-color-dark rounded-p-10 pbp-30 bgc-white mtp-10">
                      <div className="f-Ubuntu-L fsp-15 rounded-p-10 max-wp-200 mx-auto  hp-40 pep-20 psp-20 ptp-10 pbp-10 mtp--5 bgc-trans-madoka d-flex justify-content-center align-items-center">
                        Lo más divertido fue
                      </div>
                      <div className="psp-10 pep-10 pbp-10 ptp-0 w-100 d-flex">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="max-wp-640 mx-auto position-relative">
                  <div className="position-absolute top-100 start-100 translate-middle msp-0 mtp--50 visible-768 zindex-10"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-100" alt="" /></div>
                  <div className="text-center w-100 border-1 border-style-solid border-color-dark rounded-p-10 pbp-15 bgc-white">
                    <div className="f-Ubuntu-L fsp-15 rounded-p-10 max-wp-300 mx-auto hp-40 pep-20 psp-20 ptp-10 pbp-10 mtp--5 bgc-trans-homura d-flex justify-content-center align-items-center">
                      Ponernos de acuerdo ha sido:
                    </div>
                    <div className="d-flex mx-auto max-wp-400 justify-content-center ">
                      <div className="d-flex justify-content-start align-items-center mbp-5 psp-15 ">
                        <div className="wp-30 hp-30 mtp-10 bgc-white border-1 border-style-solid border-color-dark rounded-1 mep-5">
                          <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                        </div>
                        <div className="text-start msp-5 mtp-10 pep-5  bgc-white  rounded-1 f-Ubuntu-L fsp-13 d-flex align-items-start">
                          fácil
                        </div>
                      </div>
                      <div className="d-flex justify-content-start align-items-center mbp-5 psp-15">
                        <div className="wp-30 hp-30 mtp-10 bgc-white border-1 border-style-solid border-color-dark rounded-1 mep-5">
                          <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                        </div>
                        <div className="text-start msp-5 mtp-10 pep-5  bgc-white  rounded-1 f-Ubuntu-L fsp-13 d-flex align-items-start">
                          difícil
                        </div>
                      </div>
                    </div>
                    <div className="psp-10 f-Ubuntu-L fsp-15 text-start">
                      porque:
                    </div>
                    <div className="psp-10 pep-10">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                    </div>
                  </div>
                </div>
                {/* BEIGN PIE DE PAGINA */}
                <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
                  <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>ABP &copy; SM</div>
                  <div className="bgc-goku wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
                </div>
                {/* END PIE DE PAGINA */}
              </div>
            </div>
          </div>
          {/* END PIE DE PAGINA */}
        </div>
      </div>
    </div>
  );
}

export default Page077;
