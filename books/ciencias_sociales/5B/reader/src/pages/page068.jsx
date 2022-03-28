import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import Check from "../components/Check2";

import "./page_068.css";

function Page068(props) {



  const pagina = "068";
  var indexInput = 0;
  const etapa = "5"
  const background = "bgc-saitama";
  const color = "color-saitama";
  const bgc_cajas = "bgc-bobafett";
  const borderColor = "border-color-saitama";


  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          <div className={"cabecera-v1 hp-80 " + background}>
          </div>

          <div className="ptp-10 container-titulo-global mbp-20">
            <div className="d-flex">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_068/i_g.svg" alt="" />
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>2</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Elaboro una lista de las cosas que debería hacer para cumplir mi tarea de forma adecuada. Marco un ticket cuando haya realizado cada una.
              </div>
              {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image="images/page_068/revista.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="bgc-tatooine rounded-p-20 mtp-0 msp-60 mep-60 mbp-0 ptp-10 psp-10 f-Ubuntu-R">

            <div className="d-flex mbp-0 psp-20 pep-20">

              <div className="row w-100 ">

                <div className="col-sm-9 col-md-10">
                  Tareas específicas
                </div>
                <div className="col-sm-3 col-md-2">
                  ¿Realizada?
                </div>

                <div className="col-sm-9 col-md-10 d-flex justify-content-center pbp-10 ptp-10">
                  <div className="d-flex flex-column w-100 ptp-0 pbp-10 psp-20 pep-20 bgc-white rounded-p-20 position-relative">
                    <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0">
                      <div className="wp-30 hp-30 d-flex align-items-center justify-content-center rounded-p-5 border-2 color-saitama border-style-solid border-color-saitama bgc-bobafett f-Ubuntu-B">
                        1
                      </div>
                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-75" />
                  </div>
                </div>

                <div className="col-sm-3 col-md-2 d-flex center-center position-relative pbp-10">
                  {/* <div className="wp-30 hp-30 d-flex align-items-center justify-content-center rounded-p-5 border-2 border-style-solid border-color-dark bgc-white f-Ubuntu-B"></div> */}
                  <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg"></Check>
                </div>
                <div className="col-sm-9 col-md-10 d-flex justify-content-center pbp-10 ptp-10">
                  <div className="d-flex flex-column w-100 ptp-0 pbp-10 psp-20 pep-20 bgc-white rounded-p-20 position-relative">
                    <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0">
                      <div className="wp-30 hp-30 d-flex align-items-center justify-content-center rounded-p-5 border-2 color-saitama border-style-solid border-color-saitama bgc-bobafett f-Ubuntu-B">
                        2
                      </div>
                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-75" />
                  </div>
                </div>

                <div className="col-sm-3 col-md-2 d-flex center-center position-relative pbp-10">
                  <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg"></Check>
                </div>
                <div className="col-sm-9 col-md-10 d-flex justify-content-center pbp-10 ptp-10">
                  <div className="d-flex flex-column w-100 ptp-0 pbp-10 psp-20 pep-20 bgc-white rounded-p-20 position-relative">
                    <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0">
                      <div className="wp-30 hp-30 d-flex align-items-center justify-content-center rounded-p-5 border-2 color-saitama border-style-solid border-color-saitama bgc-bobafett f-Ubuntu-B">
                        3
                      </div>
                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-75" />
                  </div>
                </div>

                <div className="col-sm-3 col-md-2 d-flex center-center position-relative pbp-10">
                  <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg"></Check>
                </div>
                <div className="col-sm-9 col-md-10 d-flex justify-content-center pbp-10 ptp-10">
                  <div className="d-flex flex-column w-100 ptp-0 pbp-10 psp-20 pep-20 bgc-white rounded-p-20 position-relative">
                    <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0">
                      <div className="wp-30 hp-30 d-flex align-items-center justify-content-center rounded-p-5 border-2 color-saitama border-style-solid border-color-saitama bgc-bobafett f-Ubuntu-B">
                        4
                      </div>
                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-75" />
                  </div>
                </div>

                <div className="col-sm-3 col-md-2 d-flex center-center position-relative pbp-10">
                  <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg"></Check>
                </div>


              </div>

            </div>
          </div>


          <div className="ptp-10 container-titulo-global mbp-20">
            <div className="d-flex">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_068/i_g.svg" alt="" />
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>3</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                A partir de los esquemas realizados y la información recopilada, elaboramos la revista. Creamos una versión impresa y una digital para la siguiente sesión.
              </div>
              {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image="images/page_068/revista.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="d-flex w-100 mtp-50 psp-60 pep-60 ptp-20 mbp-0 bgc-windu border-top-style-solid border-color-dark border-2 pbp-80">
            <div className="row w-100 p-0 m-0">
              <div className="col-12 position-relative">
                <div className="position-absolute top-0 start-100 translate-middle msp--10 mtp--104 visible-768"><img src="images/page_068/img_003.png" className="wp-80 " alt="" /></div>
                <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-5">¿Cómo voy?</div>
                <div className="d-flex flex-column mbp-20 mtp-10 w-100">
                  <div className="p-2 min-hp-80 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                    <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 text-start">
                      <img src="images/generales/flecha_e5.svg" className="mep-5 wp-15" alt="" />
                      <span>Las tareas en las que más me comprometo son</span>
                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-20" />
                    <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 mtp-20 text-start">
                      <img src="images/generales/flecha_e5.svg" className="mep-5 wp-15" alt="" />
                      <span>La estrategia que más me ha ayudado es</span>
                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-20" />
                  </div>

                </div>
              </div>
              <div className="col-12">
                <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-5">¿Cómo me siento?</div>
                <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mbp-30">
                  <span className="w-24 f-Ubuntu-L mtp-5 mbp-10">Marco con un <img src="images/page_018/img_005.svg" className="hp-17 mtp--2" alt="" /> el recuadro que mejor me represente.</span>
                  <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mbp-30">
                    {/* <span className="w-24 f-Ubuntu-L mtp-5 mbp-10">Marco con un <img src="images/page_018/img_005.svg" className="hp-17 mtp--2" alt=""/> el recuadro que mejor me represente.</span> */}
                    <div className="w-100 p-2 pb-3 bgc-white rounded-p-10">
                      <table className="w-100">
                        <tbody>
                          <tr>
                            <td>&nbsp;</td>
                            <td className={"style-caja " + background + " tf-letra border-style-solid border-1 " + borderColor + " f-colby-compres-bold color-white ps-2 pe-2"}>
                              Nunca</td>
                            <td style={{ minWidth: "55px" }} className={"style-caja " + background + " tf-letra  border-style-solid border-1 " + borderColor + " f-colby-compres-bold color-white ps-2 pe-2"}>
                              A veces</td>
                            <td className={"style-caja " + background + " tf-letra border-style-solid border-1 " + borderColor + " f-colby-compres-bold color-white ps-2 pe-2"}>
                              Generalmente</td>
                            <td className={"style-caja " + background + " tf-letra  border-style-solid border-1 " + borderColor + " f-colby-compres-bold color-white ps-2 pe-2"}>
                              Siempre</td>
                          </tr>
                          <tr>
                            <td className={"" + bgc_cajas + " f-Ubuntu-L fsp-14 text-start psp-5 border-style-solid border-1 " + borderColor + ""}>Confío en mi capacidad para aprender y me valoro.</td>
                            <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                            <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                            <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                            <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                          </tr>
                          <tr>
                            <td className={"" + bgc_cajas + " f-Ubuntu-L fsp-14 text-start psp-5 border-style-solid border-1 " + borderColor + ""}>Confío en mis compañeros y me ayudan cuando lo necesito.</td>
                            <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                            <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                            <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                            <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
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
            <div className="col-7 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_creacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
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

export default Page068;
