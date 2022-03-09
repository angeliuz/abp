import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import Check from "../components/Check";

import "./page_018.css";

function Page018(props) {
  const pagina = "018";
  var indexInput = 0;
  const etapa = "2"
  const background = "bgc-bulma";
  const color = "color-bulma";
  const colorSesion = "color-bulma";
  const borderColor = "border-color-bulma"
  const borderColorTabla = "border-color-draco"
  const bgc_cajas = "bgc-draco";


  return (
    <div className="wrapper bgc-light">
        <div className="d-flex flex-column align-items-center pbp-20">
            <div className={"dosier-e"+etapa+" page bgc-white overflow-hidden position-relative"} id={"page_"+pagina}>

          {/*  ENCABEZADO FIN PARTE 3 */}
          <div className=" ptp-60 psp-80 pep-80 pbp-0 mbp-10">
            <div className="f-Ubuntu-R fsp-16 py-3 mbp-20">
              Nos comprometemos a asumir los siguientes roles:
            </div>
            <div className="row">
              <div className="col-md-6 col-12 pbp-20">
                <div className="bgc-pantro border-style-solid border-color-pidgey border-1">
                  <div className="bgc-white  border-style-solid border-1 border-color-pidgey d-flex center-center p-1 rotate--6 mtp--10 msp--10 wp-130 color-pidgey f-pixilate-bold fsp-18">
                    Coordinación
                  </div>
                  <div>
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="text-start ptp-15p-0 px-1 flex-grow-1 lhp-35 min-hp-75"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12 pbp-20">
                <div className="bgc-klee border-style-solid border-color-saitama border-1 ">
                  <div className="bgc-white border-style-solid border-1 border-color-saitama d-flex center-center p-1 rotate--6 mtp--10 msp--10 wp-130 color-saitama f-pixilate-bold fsp-18">
                    Supervisión
                  </div>
                  <div>
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="text-start ptp-15p-0 px-1 flex-grow-1 lhp-35 min-hp-75"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-12 pbp-20">
                <div className="bgc-sargento border-style-solid border-color-yanfei border-1 ">
                  <div className="bgc-white d-flex center-center p-1 rotate--6 mtp--10 msp--10 wp-150  border-style-solid border-1 border-color-yanfei color-goten f-pixilate-bold fsp-18">
                    Relaciones públicas
                  </div>
                  <div>
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="text-start ptp-15p-0 px-1 flex-grow-1 lhp-35 min-hp-75 "
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12 pbp-20">
                <div className="bgc-jarek border-style-solid border-color-blaze border-1 ">
                  <div className=" bgc-white d-flex center-center p-1 rotate--6 mtp--10 msp--10 wp-130  border-style-solid border-1 border-color-blaze color-blaze f-pixilate-bold fsp-18">
                    Intendencia
                  </div>
                  <div>
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="text-start ptp-15 p-0 px-1 flex-grow-1 lhp-35 min-hp-75"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        
        <div>
            <div className="f-Ubuntu-R fsp-16 py-3">
              Creemos que para cumplir nuestro desafío necesitaremos...
            </div>
        </div>
        
        
        <div className="d-flex global-margin mbp-20 psp-20 pep-20">
              <div className="position-relative ajuste-anillos">
                <img
                  src="images/page_018/img_005.png"
                  className="hp-220 position-absolute msp--28 mtp-10 start-0 top-0"
                  alt=""
                />
                <img
                  src="images/page_018/img_005.png"
                  className="visible-res hp-220 position-absolute msp--28 mtp--40 start-0 top-50 "
                  alt=""
                />
              </div>
              <div className="row bgc-color-papel border-style-solid border-color-papel border-1 psp-30">
                <div className="col-md-4 text-left ptp-15 border-derecha">
                  <div className="d-flex">
                    <div className="ptp-5 f-pixilate-bold color-goten fsp-18">
                      Personas
                    </div>
                    <img
                      src="images/page_018/img_001.png"
                      className="hp-35 psp-10 pep-10"
                      alt=""
                    />
                  </div>
                  <div className="f-Ubuntu-L">
                    Necesitaremos la colaboración de...
                  </div>
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 flex-grow-1 lhp-35 min-hp-135"
                  />
                </div>
                <div className="col-md-4 text-left ptp-15 border-derecha">
                  <div className="d-flex">
                    <div className="ptp-5 f-pixilate-bold color-goten fsp-18">
                      Lugares
                    </div>
                    <img
                      src="images/page_018/img_002.png"
                      className="hp-35 psp-10 pep-10"
                      alt=""
                    />
                  </div>
                  <div className="f-Ubuntu-L">Haremos nuestra fiesta en...</div>
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 flex-grow-1 lhp-35 min-hp-135"
                  />
                </div>
                <div className="col-md-4 text-left ptp-15">
                  <div className="d-flex">
                    <div className="ptp-5 f-pixilate-bold color-goten fsp-18">
                      Materiales
                    </div>
                    <img
                      src="images/page_018/img_003.png"
                      className="hp-35 psp-10 pep-10"
                      alt=""
                    />
                  </div>
                  <div className="f-Ubuntu-L">
                    Creemos que para nuestro proyecto vamos a necesitar...
                  </div>
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 flex-grow-1 lhp-35 min-hp-120"
                  />
                </div>
              </div>
            </div>
          

        {/* BEGIN TABLE */}
        <div className="global-margin mbp-100 psp-0 pep-0 ptp-10 pbp-10  f-Ubuntu-L fsp-13 rounded-p-10 ">

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
                                        <td className={"bgc-white rounded-ts-10 f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 "+borderColorTabla}>
                                          <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10 ">
                                          <img src={"images/generales/flecha_e"+etapa+".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                                          Nos implicamos en la realización de la tarea y nos responsabilizamos del trabajo que tenemos que hacer.
                                          </div> 
                                        </td>
                                        <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 "+borderColorTabla}>
                                          <div className="d-flex center-center">
                                            <div className="wp-30 hp-30 bgc-white rounded-1">
                                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                            </div>
                                          </div>
                                        </td>
                                        <td className={"bgc-white min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 "+borderColorTabla}>
                                          <div className="d-flex center-center">
                                            <div className="wp-30 hp-30 bgc-white rounded-1">
                                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                            </div>
                                          </div>
                                        </td>
                                        <td className={"bgc-white min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 "+borderColorTabla}>
                                          <div className="d-flex center-center">
                                            <div className="wp-30 hp-30 bgc-white rounded-1">
                                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                            </div>
                                          </div>
                                        </td>
                                        <td className={"bgc-white rounded-te-10  min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 "+borderColorTabla}>
                                          <div className="d-flex center-center">
                                            <div className="wp-30 hp-30 bgc-white rounded-1">
                                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                            </div>
                                          </div>
                                        </td>


                                    </tr>
                                    <tr>
                                        <td className={"f-Ubuntu-L fsp-12 text-start p-0 m-0 "}>
                                          <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10 bgc-white ">
                                            <img src={"images/generales/flecha_e"+etapa+".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                                            Ante una petición de apoyo de alguien del grupo, intentamos ayudar antes de preguntarle al profesor.
                                          </div> 
                                        </td>
                                        <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 "+borderColorTabla}>
                                          <div className="d-flex center-center">
                                            <div className="wp-30 hp-30 bgc-white rounded-1">
                                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                            </div>
                                          </div>
                                        </td>
                                        <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 "+borderColorTabla}>
                                          <div className="d-flex center-center">
                                            <div className="wp-30 hp-30 bgc-white rounded-1">
                                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                            </div>
                                          </div>
                                        </td>
                                        <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 "+borderColorTabla}>
                                          <div className="d-flex center-center">
                                            <div className="wp-30 hp-30 bgc-white rounded-1">
                                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                            </div>
                                          </div>
                                        </td>
                                        <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 "+borderColorTabla}>
                                          <div className="d-flex center-center">
                                            <div className="wp-30 hp-30  bgc-white rounded-1">
                                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                            </div>
                                          </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={"bgc-white rounded-bs-10 f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 "+borderColorTabla}>
                                          <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10 bgc-white ">
                                            <img src={"images/generales/flecha_e"+etapa+".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                                            Respetamos el turno de la palabra.
                                          </div> 
                                        </td>
                                        <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 "+borderColorTabla}>
                                          <div className="d-flex center-center">
                                            <div className="wp-30 hp-30 bgc-white rounded-1">
                                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                            </div>
                                          </div>
                                        </td>
                                        <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 "+borderColorTabla}>
                                          <div className="d-flex center-center">
                                            <div className="wp-30 hp-30 bgc-white rounded-1">
                                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                            </div>
                                          </div>
                                        </td>
                                        <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 "+borderColorTabla}>
                                          <div className="d-flex center-center">
                                            <div className="wp-30 hp-30 rounded-1">
                                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                            </div>
                                          </div>
                                        </td>
                                        <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 "+borderColorTabla}>
                                          <div className="d-flex center-center">
                                            <div className="wp-30 hp-30  rounded-1">
                                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                            </div>
                                          </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={"bgc-white rounded-bs-10 f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-bottom-hidden border-left-hidden border-right-hidden border-2 "+borderColorTabla}>
                                          <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10">
                                            <img src={"images/generales/flecha_e"+etapa+".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                                            Llegamos a acuerdos y decisiones compartidas después de que cada uno da su opinión.
                                          </div>
                                        </td>
                                        <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-2 "+borderColorTabla}>
                                          <div className="d-flex center-center">
                                            <div className="wp-30 hp-30 bgc-white rounded-1">
                                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                            </div>
                                          </div>
                                        </td>
                                        <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-2 "+borderColorTabla}>
                                          <div className="d-flex center-center">
                                            <div className="wp-30 hp-30 bgc-white rounded-1">
                                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                            </div>
                                          </div>
                                        </td>
                                        <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-2 "+borderColorTabla}>
                                          <div className="d-flex center-center">
                                            <div className="wp-30 hp-30 bgc-white rounded-1">
                                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                            </div>
                                          </div>
                                        </td>
                                        <td className={"bgc-white rounded-be-10   f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-bottom-hidden border-right-hidden border-2 "+borderColorTabla}>
                                          <div className="d-flex center-center">
                                            <div className="wp-30 hp-30 bgc-white rounded-1">
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
        </div>
      </div>
    </div>
  );
}

export default Page018;
