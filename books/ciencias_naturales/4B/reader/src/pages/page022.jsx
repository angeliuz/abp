import React from "react";
import InputBox from "../components/InputBox";
import "./page_022.css";

function Page022(props) {
  const pagina = "022";
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
        <div className={"dosier-e" + etapa + " page bgc-white overflow-hidden position-relative"} id={"page_" + pagina}>


          <div className="psp-60 pep-60 ptp-70">
            <div className="d-flex pbp-10 position-relative">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-bulma">
                2
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-15 psp-10 text-start">
                Nos distribuimos los roles de la siguiente manera:
              </div>
            </div>
            <div className="row w-100 position-relative">
              <div className="col-md-6 col-12 pbp-20 ptp-20">
                <div className="bgc-pantro border-style-solid border-color-pidgey border-1">
                  <div className="mtp--20 msp--10 bgc-white ptp-5 border-style-solid border-1 border-color-pidgey caja-uno color-pidgey f-pixilate-bold fsp-18">
                    Coordinación
                  </div>
                  <div className="psp-20 ptp-10">
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 flex-grow-1 lhp-35 min-hp-100 mtp--10 text-start"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12 pbp-20 ptp-20">
                <div className="bgc-klee border-style-solid border-color-saitama border-1">
                  <div className="mtp--20 msp--10 bgc-white ptp-5 border-style-solid border-1 border-color-saitama caja-uno color-saitama f-pixilate-bold fsp-18">
                    Supervisión
                  </div>
                  <div className="psp-20 ptp-10">
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 flex-grow-1 lhp-35 min-hp-100 mtp--10 text-start"
                    />
                  </div>
                </div>
              </div>
              <div className="position-absolute translate-middle top-0 start-100">
                <img
                  src="images/page_022/img_005.png"
                  className="hp-130"
                  alt=""
                />
              </div>
            </div>
            <div className="row w-100 position-relative">
              <div className="col-md-6 col-12 pbp-20 ptp-20">
                <div className="bgc-sargento border-style-solid border-color-yanfei border-1">
                  <div className="mtp--20 msp--10 bgc-white ptp-5 border-style-solid border-1 border-color-yanfei caja-uno color-goten f-pixilate-bold fsp-18">
                    Relaciones públicas
                  </div>
                  <div className="psp-20 ptp-10">
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 flex-grow-1 lhp-35 min-hp-100 mtp--10 text-start"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12 pbp-20 ptp-20">
                <div className="bgc-jarek border-style-solid border-color-blaze border-1">
                  <div className="mtp--20 msp--10 bgc-white ptp-5 border-style-solid border-1 border-color-blaze caja-uno color-blaze f-pixilate-bold fsp-18">
                    Intendencia
                  </div>
                  <div className="psp-20 ptp-10">
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 flex-grow-1 lhp-35 min-hp-100 mtp--10 text-start"
                    />
                  </div>
                </div>
              </div>
              <div className="position-absolute translate-middle top-100 start-0">
                <img
                  src="images/page_022/img_006.png"
                  className="hp-130 mtp--70"
                  alt=""
                />
              </div>
            </div>
            <div className="d-flex pbp-10 ptp-30 position-relative">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-bulma">
                3
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-15 psp-10 text-start">
                Pensamos en lo que vamos a necesitar para realizar nuestro
                proyecto.
              </div>
            </div>
            <div className="d-flex msp-20">
              <div className="position-relative">
                <img
                  src="images/page_021/img_005.png"
                  className="hp-220 position-absolute msp--28 mtp-10 start-0 top-0"
                  alt=""
                />
              </div>
              <div className="row bgc-color-papel border-style-solid border-color-papel border-1 psp-10 w-100 position-relative">
                <div className="col-md-6 text-left ptp-15 border-derecha">
                  <div className="f-Ubuntu-L text-start">
                    Pediremos la colaboración de:
                  </div>
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 flex-grow-1 lhp-35 min-hp-135 text-start"
                  />
                </div>
                <div className="col-md-6 text-left ptp-15">
                  <div className="f-Ubuntu-L text-start">
                    Tendremos que aprender sobre:
                  </div>
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 flex-grow-1 lhp-35 min-hp-135 text-start"
                  />
                </div>
                <div className="">
                  <img
                    src="images/page_022/img_011.png"
                    className="hp-160 position-absolute start-0 top-50 translate-middle"
                    alt=""
                  />
                  <img
                    src="images/page_022/img_008.png"
                    className="hp-60 position-absolute start-100 top-100 translate-middle"
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* BEGIN TABLE */}
            <div className="global-margin mbp-50 psp-0 pep-0 ptp-10 pbp-10  f-Ubuntu-L fsp-13 rounded-p-10 ">

              <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mbp-0">
                {/* <span className="w-24 f-Ubuntu-L mtp-5 mbp-10">Marco con un <img src="images/generales/ticket.svg" className="hp-17 mtp--3 msp-5 mep-5" alt=""/>el recuadro que mejor me represente.</span> */}
                <div className="w-100 p-0 pb-3 position-relative">
                  <div className="position-absolute top-0 start-0 msp-10 mtp--5 f-pixilate-bold fsp-18 lh-sm text-start">¿Cómo vamos?</div>

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
                            Nos involucramos en el proyecto y nos responsabilizamos por las tareas que debemos hacer.
                          </div>
                        </td>
                        <td className={"bgc-white f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                              <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                            </div>
                          </div>
                        </td>
                        <td className={"bgc-white min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                              <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                            </div>
                          </div>
                        </td>
                        <td className={"bgc-white min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                              <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                            </div>
                          </div>
                        </td>
                        <td className={"bgc-white rounded-te-10  min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                              <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                            </div>
                          </div>
                        </td>


                      </tr>
                      <tr>
                        <td className={"f-Ubuntu-L fsp-14 text-start p-0 m-0 "}>
                          <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10 bgc-white ">
                            <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                            Ante una petición de apoyo de alguien del equipo, intentamos ayudar antes de preguntarle al profesor.
                          </div>
                        </td>
                        <td className={"bgc-white f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                              <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                            </div>
                          </div>
                        </td>
                        <td className={"bgc-white f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                              <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                            </div>
                          </div>
                        </td>
                        <td className={"bgc-white f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                              <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                            </div>
                          </div>
                        </td>
                        <td className={"bgc-white f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                              <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
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
                            <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                              <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                            </div>
                          </div>
                        </td>
                        <td className={"bgc-white f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                              <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                            </div>
                          </div>
                        </td>
                        <td className={"bgc-white f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                              <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                            </div>
                          </div>
                        </td>
                        <td className={"bgc-white f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                              <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className={"bgc-white rounded-bs-10 f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-bottom-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                          <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10">
                            <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                            Llegamos a acuerdos y decisiones compartidas después de que cada uno expresa su opinión.
                          </div>
                        </td>
                        <td className={"bgc-white f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-2 " + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                              <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                            </div>
                          </div>
                        </td>
                        <td className={"bgc-white f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-2 " + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                              <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                            </div>
                          </div>
                        </td>
                        <td className={"bgc-white f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-2 " + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                              <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                            </div>
                          </div>
                        </td>
                        <td className={"bgc-white rounded-be-10   f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-bottom-hidden border-right-hidden border-2 " + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                              <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
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
          {/* FIN PIE DE PAGINA */}



        </div >
      </div >
    </div >
  );
}

export default Page022;
