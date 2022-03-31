import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import ModalPDF from "../components/ModalPDF";

import "./page_040.css";

function Page040(props) {

  const pagina = "040";
  var indexInput = 0;
  const etapa = "4"
  const background = "bgc-pidgey";
  const color = "color-pidgey";
  const borderColor = "border-color-pidgey"
  const borderColorTabla = "border-color-pantro"
  const bgc_cajas = "bgc-pantro";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>

          {/* BEGIN CABECERA VERSIÓN 1 */}
          <div className={"cabecera-v1 hp-80 " + background}></div>
          {/* END CABECERA VERSIÓN 1 */}


          <div className="d-flex global-margin mtp-20 mbp-0 psp-0 pep-0 ptp-0 pbp-0 bgc-bobafett rounded-p-10">
            <div className="row p-0 m-0 w-100 f-Ubuntu-R fsp-15 position-relative">
              <div className="col-sm-12 p-0 m-0">
                <div className="d-flex psp-20 pep-20 ptp-10 pbp-0">
                  Las 3 preguntas para nuestra encuesta son...
                </div>
              </div>
              <div className="col-sm-12 col-md-4 p-0 m-0 position-relative">
                <div className="d-flex mtp-20 psp-20 pep-20 ptp-0 pbp-10 position-relative">
                  <div className="position-absolute top-0 start-50 translate-middle msp-0 mtp-0 zindex-1">
                    <div className="wp-25 hp-25 d-flex center-center color-white f-Ubuntu-B rounded-p-5 bgc-android18">1</div>
                  </div>
                  <div className="d-flex w-100 psp-10 pep-10 ptp-0 pbp-0 bgc-white rounded-p-10 ptp-10">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 w-100 min-hp-300" />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 p-0 m-0 position-relative">
                <div className="d-flex mtp-20 psp-20 pep-20 ptp-0 pbp-10 position-relative">
                  <div className="position-absolute top-0 start-50 translate-middle msp-0 mtp-0 zindex-1">
                    <div className="wp-25 hp-25 d-flex center-center color-white f-Ubuntu-B rounded-p-5 bgc-goten">2</div>
                  </div>
                  <div className="d-flex w-100 psp-10 pep-10 ptp-0 pbp-0 bgc-white rounded-p-10 ptp-10">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 w-100 min-hp-300" />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 p-0 m-0 position-relative">
                <div className="d-flex mtp-20 psp-20 pep-20 ptp-0 pbp-10 position-relative">
                  <div className="position-absolute top-0 start-50 translate-middle msp-0 mtp-0 zindex-1">
                    <div className="wp-25 hp-25 d-flex center-center color-white f-Ubuntu-B rounded-p-5 bgc-saitama">3</div>
                  </div>
                  <div className="d-flex w-100 psp-10 pep-10 ptp-0 pbp-0 bgc-white rounded-p-10 ptp-10">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 w-100 min-hp-300" />
                  </div>
                </div>
              </div>
              <div className="position-absolute top-100 start-100 translate-middle msp-0 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/bolsa.png"} className="wp-60" alt="" /></div>
            </div>
          </div>


          <div className="ptp-50 container-titulo-global mbp-30">
            <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
              Aplicamos la encuesta
            </div>
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                3
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Traspasamos las preguntas a la tabla que se nos entregará. Luego, aplicamos las preguntas a nuestros encuestados.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image={"images/page_" + pagina + "/circ_descarga.png"} clasesImagen="wp-40 text-center mtp-20 mep-10" className="p-0 px-0" /> */}
              <ModalPDF
                id={"p" + pagina + "_video" + (indexInput += 1)}
                link="https://www.smconecta.cl/resources/1894/portadas.pdf"
                titulo="Material descargable"
                tipo="PDF"
                image={"images/generales/descargable.svg"}
                colorUnidad={background}
                clasesImagen="cambio hp-40 mtp-10"
                className="p-0 px-1"
              />
              <img src={"images/page_" + pagina + "/mono.png"} className="hp-150" alt="" />
            </div>
          </div>

          <div className={"w-100 " + bgc_cajas + " border-top-style-solid " + borderColor + " border-2"}>
            <div className="d-flex flex-column global-margin mtp-20 mbp-0 psp-0 pep-0 ptp-0 pbp-150">
              <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-10">¿Cómo voy?</div>
              <div className="d-flex flex-column bgc-white rounded-p-10 psp-10 pep-10 ptp-10 pbp-10 mtp-0 mbp-0">
                <div className="row p-0 m-0 w-100">
                  <div className="col-12 p-0 m-0">
                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-start">
                        <div className="mtp-0 pep-5">
                          <img src={"images/generales/flecha_e" + etapa + ".svg"} className="wp-15" />
                        </div>
                        <div className="f-Ubuntu-L fsp-15 ptp-2 text-start"> ¿Para qué utilizaré lo que he aprendido hoy?</div>
                      </div>
                      <div className="d-flex w-100 psp-20 pep-10 ptp-0 pbp-0">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 w-100 min-hp-80" />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 p-0 m-0">
                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-start">
                        <div className="mtp-0 pep-5">
                          <img src={"images/generales/flecha_e" + etapa + ".svg"} className="wp-15" />
                        </div>
                        <div className="f-Ubuntu-L fsp-15 ptp-2 text-start"> ¿Qué hago si no he comprendido algo?</div>
                      </div>
                      <div className="d-flex w-100 psp-20 pep-10 ptp-0 pbp-0">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 w-100 min-hp-80" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* BEGIN PIE DE PAGINA */}
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
            <div className="col-7 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_experimentacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
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

export default Page040;
