import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import Check from "../components/Check";

import "./page_035.css";

function Page035(props) {
  const pagina = "035";
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
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v1 hp-80 bgc-android18"></div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-50 container-titulo-global mbp-20">
            <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
              Preparamos una encuesta
            </div>
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                2
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Leo la revista y completo.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} pagina={"85"} image={"images/page_" + pagina + "/img_001.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
            </div>
          </div>


          <div className="row mx-4 position-relative">
            <div className="col-sm-12 col-md-6 position-relative mbp-10">


              <div className="box-color-24-1 mtp-12">
                <div className="f-Ubuntu-M alinea fsp-18 rounded-caja bgc-vegeta w-100 pbp-20 ptp-20 px-2 text-center color-white min-hp-70">
                  El propósito de una encuesta es:
                </div>
                <div className=" linea1 bgc-white min-hp-200 p-2  rounded-seb-20 border-style-solid border-color-vegeta border-2">
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-175"
                  />
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 mbp-40 position-relative">
              <div className="position-absolute posicion-centro-centro translate-middle zindex-1"><img src={"images/page_" + pagina + "/img_005.png"} className="rotacion-centro-centro" alt="" /></div>
              <div className="box-color-24-2 mtp-12">
                <div className="f-Ubuntu-M alinea fsp-18 rounded-caja bgc-saitama w-100 h-100 p-2 text-center color-white min-hp-70 d-flex center-center">
                  Para el proyecto, sería útil realizar una encuesta sobre:
                </div>
                <div className="linea1 bgc-white min-hp-200 p-2 rounded-seb-20 border-style-solid border-color-saitama border-2 position-relative">
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-175"
                  />

                </div>
              </div>
            </div>
          </div>
          <div className="ptp-10 container-titulo-global mbp-20">
            <div className="d-flex">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">
                3
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Con mi equipo, elegimos 4 preguntas para aplicar en nuestra
                encuesta.
              </div>
            </div>
          </div>
          <div className="psp-60 pep-60 f-Ubuntu-R">
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="ptp-10 pbp-10 psp-20">
                  <div className="d-flex">
                    <div className="wp-30 hp-30">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                    </div>
                    <div className="f-Ubuntu-L psp-15 ptp-5 text-start">
                      ¿Está al tanto del plan de seguridad del colegio?
                    </div>
                  </div>
                </div>
                <div className="ptp-10 pbp-10 psp-20">
                  <div className="d-flex">
                    <div className="wp-30 hp-30">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                    </div>
                    <div className="f-Ubuntu-L psp-15 ptp-5 text-start">
                      ¿Conoce las vías de evacuación en el colegio?
                    </div>
                  </div>
                </div>
                <div className="ptp-10 pbp-10 psp-20">
                  <div className="d-flex">
                    <div className="wp-30 hp-30">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                    </div>
                    <div className="f-Ubuntu-L psp-15 ptp-5 text-start">
                      ¿Sabe dónde se ubican las zonas de seguridad en el
                      colegio?
                    </div>
                  </div>
                </div>
                <div className="ptp-10 pbp-10 psp-20">
                  <div className="d-flex">
                    <div className="wp-30 hp-30">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                    </div>
                    <div className="f-Ubuntu-L psp-15 ptp-5 text-start">
                      ¿Sabe usar un extintor?
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="ptp-10 pbp-10 psp-20">
                  <div className="d-flex">
                    <div className="wp-30 hp-30">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                    </div>
                    <div className="f-Ubuntu-L psp-15 ptp-5 text-start">
                      ¿Qué haría en caso de presenciar un accidente en el
                      colegio?
                    </div>
                  </div>
                </div>
                <div className="ptp-10 pbp-10 psp-20">
                  <div className="d-flex">
                    <div className="wp-30 hp-30">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                    </div>
                    <div className="f-Ubuntu-L psp-15 ptp-5 text-start">
                      ¿Quién cree que es el encargado de la seguridad en el
                      colegio?
                    </div>
                  </div>
                </div>
                <div className="ptp-10 pbp-10 psp-20">
                  <div className="d-flex">
                    <div className="wp-30 hp-30">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                    </div>
                    <div className="f-Ubuntu-L psp-15 ptp-5 text-start">
                      ¿A quién pediría ayuda en caso de una emergencia?
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ptp-10 container-titulo-global mbp-20">
            <div className="d-flex">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">
                4
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Planteamos otras preguntas para incorporar a la encuesta.
              </div>
            </div>
          </div>
          <div className="psp-90 pep-50">
            <div className="mtp--20">
              <InputBox
                id={"p" + pagina + "_input" + (indexInput += 1)}
                className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120"
              />
            </div>
          </div>
          <div className="ptp-10 container-titulo-global mbp-20">
            <div className="d-flex">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">
                5
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Ideamos un plan para aplicar la encuesta.
              </div>
            </div>
          </div>
          <div className="psp-50 pep-50 f-Ubuntu-R">
            <div className="bgc-white border-style-solid border-1 border-color-lightDark sombra w-100 psp-40 pep-15 ptp-10 pbp-130 position-relative">
              <div className="ptp-10 text-start">Personas a quienes se encuestará:</div>
              <div className="flex-grow-1 mtp--5">
                {" "}
                <InputBox
                  id={"p" + pagina + "_input" + (indexInput += 1)}
                  className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-75 w-100"
                />
              </div>
              <div className="row">
                <div className="col-md-6 d-flex">
                  <div className="ptp-10">Cantidad de personas:</div>
                  <div className="flex-grow-1">
                    {" "}
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35 w-100"
                    />
                  </div>
                </div>
                <div className="col-md-6 d-flex">
                  <div className="ptp-10">Fecha de la encuesta</div>
                  <div className="flex-fill">
                    {" "}
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35 w-100"
                    />
                  </div>
                  <span className="ptp-10">/</span>
                  <div className="flex-fill">
                    {" "}
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35 w-100"
                    />
                  </div>
                  <span className="ptp-10">/</span>
                  <div className="flex-fill">
                    {" "}
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35 w-100"
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <div className="ptp-10">Tiempo destinado para encuestar:</div>
                <InputBox
                  id={"p" + pagina + "_input" + (indexInput += 1)}
                  className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35"
                />
              </div>
              <div className="d-flex">
                <div className="ptp-10">Lugar de realización de la encuesta:</div>
                <InputBox
                  id={"p" + pagina + "_input" + (indexInput += 1)}
                  className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35"
                />
              </div>
              <div className="position-absolute top-50 start-0 translate-middle h-100 ptp-10 pbp-10 visible-768">
                <div className="anillos-b-p35 wp-30 h-100"></div>
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
            className="row w-100 position-absolute caja-flotante2 p-0 m-0 align-items-end"
            style={{ bottom: 0 }}
          >
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_motivacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_planificacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-7 col-md-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_investigacion.svg"
                className="visible rotulo-etapa position-absolute top-0 start-0"
                alt=""
              />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_experimentacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
              <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
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

export default Page035;
