import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import ModalBook from "../components/ModalBook";
import Check2 from "../components/Check2"

import "./page_065.css";

function Page065(props) {

  const pagina = "065";
  var indexInput = 0;
  const etapa = "5"
  const background = "bgc-saitama";
  const color = "color-saitama";
  const borderColor = "border-color-saitama"
  const borderColorTabla = "border-color-bobafett"
  const bgc_cajas = "bgc-bobafett";
  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page cb-page66 bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v2 bgc-saitama d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className="caja wp-150 text-center fsp-24 color-saitama f-IntroRustG-Base">SESIÓN 14</div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">¡Últimos ajustes antes de presentar!</div>
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}
          <div className="ptp-30 psp-60 pep-60">
            <div className="f-Ubuntu-M fsp-20 color-saitama text-start">Conocer la opinión de los asistentes</div>
          </div>
          <div className="container-titulo-global mbp-∫0">
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_033/img_002.svg" alt=""  /> */}
              <div className="f-ccdigitaldelivery-bold fsp-35 color-saitama">1</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Como equipo, elaboramos la encuesta que los visitantes del stand responderán para evaluar la brigada.</div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.jpg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_031/img_002.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>
          {/* CONTENIDO*/}
          <div className="bgc-arena cb-calc cb-600 mx-auto ptp-5 pbp-20 rounded-p-10 mtp-10 position-relative f-Ubuntu-R">
            <img src="images/page_065/img_004.png" class="wp-260 position-absolute cb-personaje-65" alt="" />
            <img src="images/page_065/img_002.png" class="wp-20 position-absolute cb-lapiz-65" alt="" />
            <div className="mtp-20 cb-calc bgc-white mx-auto rounded-p-10 border-style-solid border-1 border-color-pikachu position-relative">
              <span className="d-flex text-start p-2 f-pixilate-bold fsp-15"> NOMBRE DE LA BRIGADA:</span>
              <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-40" />
              <div className="text-start psp-10" ></div>
            </div>
            {/* BEGIN TABLE */}
            <div className="msp-5 mep-5 psp-0 pep-0 ptp-10 pbp-10  f-Ubuntu-L fsp-13 rounded-p-10 ">
              <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mbp-0">
                {/* <span className="w-24 f-Ubuntu-L mtp-5 mbp-10">Marco con un <img src="images/generales/ticket.svg" className="hp-17 mtp--3 msp-5 mep-5" alt=""/>el recuadro que mejor me represente.</span> */}
                <div className="w-100 p-0 pb-3 position-relative">
                  <table className="w-100">
                    <tbody>
                      <tr>
                        <td> </td>
                        <td className={"color-dark f-colby-compres-bold p-0 m-0"}>
                          <div className="d-flex w-100 center-center psp-5 pep-5 ptp-0 pbp-0 text-center bgc-pikachu wp-50 hp-30 color-white rounded-p-10 ">Sí</div>
                        </td>
                        <td className={"color-dark f-colby-compres-bold p-0 m-0 "}>
                          <div className="d-flex center-center psp-10 pep-10 ptp-0 pbp-0 text-center bgc-pikachu wp-80 hp-30 color-white rounded-p-10 mep-5 msp-5">Más o menos</div>
                        </td>
                        <td className={"color-dark f-colby-compres-bold p-0 m-0 "}>
                          <div className="d-flex center-center psp-5 pep-5 ptp-0 pbp-0 text-center bgc-pikachu wp-35 hp-35 color-white rounded-p-10">No</div>
                        </td>
                      </tr>
                      <tr>
                        <td className={" rounded-ts-10 f-Ubuntu-L fsp-12 text-start p-0 m-0 " + borderColorTabla}>
                          <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10 ">
                            <div className="p-2 pbp-5  border-1 border-color-pikachu border-style-solid w-100 rounded-p-10 bgc-white">
                              ¿Consideras importante que el colegio cuente con brigadas de seguridad?
                            </div>
                          </div>
                        </td>
                        <td className={" f-Ubuntu-L fsp-12 text-start p-0 m-0 " + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-35 hp-35 bgc-white border-style-solid border-1 border-color-pikachu bgc-white rounded-1">
                            <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2>
                            </div>
                          </div>
                        </td>
                        <td className={" min-hp-100 p-0 m-0" + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-35 hp-35 bgc-white border-style-solid border-1 border-color-pikachu bgc-white rounded-1">
                              <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2>
                            </div>
                          </div>
                        </td>
                        <td className={"rounded-te-10  min-hp-100 pep-10 m-0 b " + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-35 hp-35 bgc-white border-style-solid border-1 border-color-pikachu bgc-white rounded-1">
                              <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className={"f-Ubuntu-L fsp-12 text-start p-0 m-0 "}>
                          <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10">
                            <div className="p-2 border-1 border-color-pikachu border-style-solid w-100 rounded-p-10 bgc-white">
                              ¿Te parece adecuado y útil disponer de fichas de seguridad?
                            </div>
                          </div>
                        </td>
                        <td className={"f-Ubuntu-L fsp-12 text-start p-0 m-0" + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-35 hp-35 bgc-white border-style-solid border-1 border-color-pikachu bgc-white rounded-1">
                              <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2>
                            </div>
                          </div>
                        </td>
                        <td className={"f-Ubuntu-L fsp-12 text-start p-0 m-0" + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-35 hp-35 bgc-white border-style-solid border-1 border-color-pikachu bgc-white rounded-1">
                              <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2>
                            </div>
                          </div>
                        </td>
                        <td className={"f-Ubuntu-L fsp-12 text-start pep-10 m-0" + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-35 hp-35 bgc-white border-style-solid border-1 border-color-pikachu bgc-white rounded-1">
                              <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className={"rounded-bs-10 f-Ubuntu-L fsp-12 text-start p-0 m-0 " + borderColorTabla}>
                          <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10 ">
                            <div className="psp-10 ptp-5 pbp-5  border-1 border-color-pikachu border-style-solid w-100 rounded-p-10 bgc-white">
                              ¿Consideras valioso contar con folletos para enseñar a actuar responsablemente ante una emergencia?
                            </div>
                          </div>
                        </td>
                        <td className={"f-Ubuntu-L fsp-12 text-start p-0 m-0 " + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-35 hp-35 bgc-white border-style-solid border-1 border-color-pikachu bgc-white rounded-1">
                              <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2>
                            </div>
                          </div>
                        </td>
                        <td className={"f-Ubuntu-L fsp-12 text-start p-0 m-0" + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-35 hp-35 bgc-white border-style-solid border-1 border-color-pikachu bgc-white rounded-1">
                              <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2>
                            </div>
                          </div>
                        </td>
                        <td className={"f-Ubuntu-L fsp-12 text-start pep-10 m-0 " + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-35 hp-35 bgc-white border-style-solid border-1 border-color-pikachu bgc-white rounded-1">
                              <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className={"rounded-bs-10 f-Ubuntu-L fsp-12 text-start p-0 m-0 " + borderColorTabla}>
                          <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10">
                            <div className="psp-5 border-1 border-color-pikachu border-style-solid w-100 rounded-p-10 bgc-white">
                              <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-start flex-grow-1 lhp-30 min-hp-35" />
                            </div>
                          </div>
                        </td>
                        <td className={"f-Ubuntu-L fsp-12 text-start p-0 m-0 " + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-35 hp-35 bgc-white border-style-solid border-1 border-color-pikachu bgc-white rounded-1">
                              <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2>
                            </div>
                          </div>
                        </td>
                        <td className={"f-Ubuntu-L fsp-12 text-start p-0 m-0  " + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-35 hp-35 bgc-white border-style-solid border-1 border-color-pikachu bgc-white rounded-1">
                              <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2>
                            </div>
                          </div>
                        </td>
                        <td className={"f-Ubuntu-L fsp-12 text-start pep-10 m-0 " + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-35 hp-35 bgc-white border-style-solid border-1 border-color-pikachu bgc-white rounded-1">
                              <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className={"rounded-bs-10 f-Ubuntu-L fsp-12 text-start p-0 m-0 " + borderColorTabla}>
                          <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10  ">
                            <div className="psp-5 border-1 border-color-pikachu border-style-solid w-100 rounded-p-10 bgc-white">
                              <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-start flex-grow-1 lhp-30 min-hp-35" />
                            </div>
                          </div>
                        </td>
                        <td className={"f-Ubuntu-L fsp-12 text-start p-0 m-0 " + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-35 hp-35 bgc-white border-style-solid border-1 border-color-pikachu bgc-white rounded-1">
                              <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2>
                            </div>
                          </div>
                        </td>
                        <td className={"f-Ubuntu-L fsp-12 text-start p-0 m-0" + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-35 hp-35 bgc-white border-style-solid border-1 border-color-pikachu bgc-white rounded-1">
                              <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2>
                            </div>
                          </div>
                        </td>
                        <td className={" f-Ubuntu-L fsp-12 text-start pep-10 m-0 " + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-35 hp-35 bgc-white border-style-solid border-1 border-color-pikachu bgc-white rounded-1">
                              <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className={"rounded-bs-10 f-Ubuntu-L fsp-12 text-start p-0 m-0 " + borderColorTabla}>
                          <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10">
                            <div className="psp-5 border-1 border-color-pikachu border-style-solid w-100 rounded-p-10 bgc-white">
                              <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-start flex-grow-1 lhp-30 min-hp-35" />
                            </div>
                          </div>
                        </td>
                        <td className={"f-Ubuntu-L fsp-12 text-start p-0 m-0 " + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-35 hp-35 bgc-white border-style-solid border-1 border-color-pikachu bgc-white rounded-1">
                              <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2>
                            </div>
                          </div>
                        </td>
                        <td className={"f-Ubuntu-L fsp-12 text-start p-0 m-0 " + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-35 hp-35 bgc-white border-style-solid border-1 border-color-pikachu bgc-white rounded-1">
                              <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2>
                            </div>
                          </div>
                        </td>
                        <td className={"f-Ubuntu-L fsp-12 text-start pep-10 m-0" + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-35 hp-35 bgc-white border-style-solid border-1 border-color-pikachu bgc-white rounded-1">
                              <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td className={"rounded-bs-10 f-Ubuntu-L fsp-12 text-start p-0 m-0 " + borderColorTabla}>
                          <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10">
                            <div className="psp-5 border-1 border-color-pikachu border-style-solid w-100 rounded-p-10 bgc-white">
                              <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-start flex-grow-1 lhp-30 min-hp-35" />
                            </div>
                          </div>
                        </td>

                        <td className={"f-Ubuntu-L fsp-12 text-start p-0 m-0 " + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-35 hp-35 bgc-white border-style-solid border-1 border-color-pikachu bgc-white rounded-1">
                              <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2>
                            </div>
                          </div>
                        </td>
                        <td className={"e f-Ubuntu-L fsp-12 text-start p-0 m-0 " + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-35 hp-35 bgc-white border-style-solid border-1 border-color-pikachu bgc-white rounded-1">
                              <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2>
                            </div>
                          </div>
                        </td>
                        <td className={"rounded-be-10   f-Ubuntu-L fsp-12 text-start pep-10 m-0 " + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-35 hp-35 bgc-white border-style-solid border-1 border-color-pikachu bgc-white rounded-1">
                              <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2>
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
          <div className="container-titulo-global mbp-150 wp-410">
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_033/img_002.svg" alt=""  /> */}
              <div className="f-ccdigitaldelivery-bold fsp-35 color-saitama">2</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Creamos un buzón para que los visitantes del <i> stand</i> depositen la encuesta.</div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.jpg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_031/img_002.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>



          {/* PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
              ABP &copy; SM
            </div>
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>
          <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>

            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_planificacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-7 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_creacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
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

export default Page065;
