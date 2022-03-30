import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import Check from "../components/Check";

import "./page_061.css";

function Page061(props) {

  const pagina = "061";
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
        <div className={"dosier-e" + etapa + " page bgc-white overflow-hidden position-relative"} id={"page_" + pagina}>
          <img src={"images/cabecera/dosier_e" + etapa + ".svg"} className="w-100" alt="" />
          <div className="position-relative w-100 mbp-10">
            <div className="psp-80 pep-70 ptp-30 pbp-0 position-relative">
              <div className="fsp-16 f-Ubuntu-R text-start psp-50 pbp-10">Esta página ha sido completada por:</div>
              <div className={"psp-50 pep-50 ptp-5 pbp-5 bgc-white rounded-p-10 border-style-solid border-1 " + borderColor + " d-flex justify-content-center position-relative"}>
                <div className="position-absolute top-50 start-100 translate-middle wp-100 msp-0 mtp--10"><img src={"images/page_" + pagina + "/img_002.png"} className="w-60" alt="" /></div>
                <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp--10"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-60" alt="" /></div>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35 max-wp-550" />
              </div>
            </div>
          </div>

          <div className="d-flex global-margin mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">
                <div className="position-absolute top-100 start-100 translate-middle msp-0 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-80" alt="" /></div>
                <div className="border-style-solid border-2 border-color-android18 rounded-p-10">
                  <div className="d-flex flex-column bgc-white rounded-p-10">
                    <div className="bgc-android18 w-100 f-Ubuntu-B text-center color-white fsp-15 rounded-set-6 psp-10 pep-10 ptp-5 pbp-5">
                      Lo más divertido de este proyecto ha sido...
                    </div>
                    <div className="psp-10 pep-10">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-190" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* BEGIN TABLE */}
          <div className="global-margin mtp-20 mbp-0 psp-0 pep-0 ptp-10 pbp-10  f-Ubuntu-L fsp-13 rounded-p-10 ">
            <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mbp-0">
              {/* <span className="w-24 f-Ubuntu-L mtp-5 mbp-10">Marco con un <img src="images/generales/ticket.svg" className="hp-17 mtp--3 msp-5 mep-5" alt=""/>el recuadro que mejor me represente.</span> */}
              <div className="w-100 p-0 pb-3 position-relative">
                <div className="position-absolute top-0 start-0 msp-10 mtp--5 f-pixilate-bold fsp-18 lh-sm text-start">¿Cómo hemos trabajado en equipo?</div>
                <table className="w-100">
                  <tbody>
                    <tr>
                      <td> </td>
                      <td className={"color-dark f-colby-compres-bold p-0 m-0 "}>
                        <div className="d-flex w-100 center-center psp-10 pep-10 ptp-0 pbp-0 text-center ">Nunca</div>
                      </td>
                      <td className={"color-dark f-colby-compres-bold p-0 m-0 min-wp-55 "}>
                        <div className="d-flex w-100 center-center psp-5 pep-5 ptp-0 pbp-0 text-center ">A veces</div>
                      </td>
                      <td className={"color-dark f-colby-compres-bold p-0 m-0 "}>
                        <div className="d-flex center-center psp-10 pep-10 ptp-0 pbp-0 text-center ">Generalmente</div>
                      </td>
                      <td className={"color-dark f-colby-compres-bold p-0 m-0 "}>
                        <div className="d-flex center-center psp-5 pep-5 ptp-0 pbp-0 text-center ">Siempre</div>
                      </td>
                    </tr>
                    <tr>
                      <td className={"bgc-white rounded-ts-10 f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                        <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10 ">
                          <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                          Nos involucramos en la realización de la tarea y nos responsabilizamos del trabajo que debimos hacer.
                        </div>
                      </td>
                      <td className={"bgc-white f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                        <div className="d-flex center-center">
                          <div className="wp-30 hp-30">
                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                          </div>
                        </div>
                      </td>
                      <td className={"bgc-white min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                        <div className="d-flex center-center">
                          <div className="wp-30 hp-30">
                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                          </div>
                        </div>
                      </td>
                      <td className={"bgc-white min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                        <div className="d-flex center-center">
                          <div className="wp-30 hp-30">
                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                          </div>
                        </div>
                      </td>
                      <td className={"bgc-white rounded-te-10  min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                        <div className="d-flex center-center">
                          <div className="wp-30 hp-30">
                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className={"f-Ubuntu-L fsp-14 text-start p-0 m-0 "}>
                        <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10 bgc-white ">
                          <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                          Ante una petición de apoyo de alguien del grupo, intentamos ayudar antes de preguntarle al profesor.
                        </div>
                      </td>
                      <td className={"bgc-white f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                        <div className="d-flex center-center">
                          <div className="wp-30 hp-30">
                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                          </div>
                        </div>
                      </td>
                      <td className={"bgc-white f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                        <div className="d-flex center-center">
                          <div className="wp-30 hp-30">
                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                          </div>
                        </div>
                      </td>
                      <td className={"bgc-white f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                        <div className="d-flex center-center">
                          <div className="wp-30 hp-30">
                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                          </div>
                        </div>
                      </td>
                      <td className={"bgc-white f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                        <div className="d-flex center-center">
                          <div className="wp-30 hp-30">
                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className={"bgc-white rounded-bs-10 f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                        <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10 bgc-white ">
                          <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                          Respetamos el turno de la palabra.
                        </div>
                      </td>
                      <td className={"bgc-white f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                        <div className="d-flex center-center">
                          <div className="wp-30 hp-30">
                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                          </div>
                        </div>
                      </td>
                      <td className={"bgc-white f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                        <div className="d-flex center-center">
                          <div className="wp-30 hp-30">
                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                          </div>
                        </div>
                      </td>
                      <td className={"bgc-white f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                        <div className="d-flex center-center">
                          <div className="wp-30 hp-30">
                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                          </div>
                        </div>
                      </td>
                      <td className={"bgc-white f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                        <div className="d-flex center-center">
                          <div className="wp-30 hp-30">
                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className={"bgc-white rounded-bs-10 f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-bottom-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                        <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10">
                          <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                          Llegamos a acuerdos y decisiones compartidas después de que cada uno dio su opinión.
                        </div>
                      </td>
                      <td className={"bgc-white f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-2 " + borderColorTabla}>
                        <div className="d-flex center-center">
                          <div className="wp-30 hp-30">
                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                          </div>
                        </div>
                      </td>
                      <td className={"bgc-white f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-2 " + borderColorTabla}>
                        <div className="d-flex center-center">
                          <div className="wp-30 hp-30">
                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                          </div>
                        </div>
                      </td>
                      <td className={"bgc-white f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-2 " + borderColorTabla}>
                        <div className="d-flex center-center">
                          <div className="wp-30 hp-30">
                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                          </div>
                        </div>
                      </td>
                      <td className={"bgc-white rounded-be-10   f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-bottom-hidden border-right-hidden border-2 " + borderColorTabla}>
                        <div className="d-flex center-center">
                          <div className="wp-30 hp-30">
                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* END TABLE */}


          <div className="d-flex global-margin mtp-0 mbp-100 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100 f-Ubuntu-R fsp-16">
              <div className="col-12 p-0 m-0 position-relative">
                En general, creemos que hemos trabajado en equipo...
              </div>
              <div className="col-3 p-0 m-0 position-relative">
                <div className="border-style-solid border-2 border-color-white rounded-p-10 mtp-10 msp-10 mep-10">
                  <div className="d-flex flex-column align-items-center bgc-white rounded-p-5">
                    <div className="wp-30 hp-30 ptp-5">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                    </div>
                    <div className="psp-10 pep-10 ptp-5 pbp-10 f-pixilate-semibold d-flex flex-column">
                      Muy bien
                      <img src={"images/page_" + pagina + "/img_005.svg"} className="wp-70 mtp-10" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3 p-0 m-0 position-relative">
                <div className="border-style-solid border-2 border-color-white rounded-p-10 mtp-10 msp-10 mep-10">
                  <div className="d-flex flex-column align-items-center bgc-white rounded-p-5">
                    <div className="wp-30 hp-30 ptp-5">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                    </div>
                    <div className="psp-10 pep-10 ptp-5 pbp-10 f-pixilate-semibold d-flex flex-column">
                      Bien
                      <img src={"images/page_" + pagina + "/img_006.svg"} className="wp-70 mtp-10" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3 p-0 m-0 position-relative">
                <div className="border-style-solid border-2 border-color-white rounded-p-10 mtp-10 msp-10 mep-10">
                  <div className="d-flex flex-column align-items-center bgc-white rounded-p-5">
                    <div className="wp-30 hp-30 ptp-5">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                    </div>
                    <div className="psp-10 pep-10 ptp-5 pbp-10 f-pixilate-semibold d-flex flex-column">
                      Regular
                      <img src={"images/page_" + pagina + "/img_007.svg"} className="wp-70 mtp-10" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3 p-0 m-0 position-relative">
                <div className="border-style-solid border-2 border-color-white rounded-p-10 mtp-10 msp-10 mep-10">
                  <div className="d-flex flex-column align-items-center bgc-white rounded-p-5">
                    <div className="wp-30 hp-30 ptp-5">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                    </div>
                    <div className="psp-1 pep-1 ptp-5 pbp-10 f-pixilate-semibold d-flex flex-column align-items-center text-center">
                      Tenemos que mejorar
                      <img src={"images/page_" + pagina + "/img_008.svg"} className="wp-70 mtp-10" alt="" />
                    </div>
                  </div>
                </div>
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
  );
}

export default Page061;
