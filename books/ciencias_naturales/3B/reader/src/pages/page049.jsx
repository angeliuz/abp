import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_049.css";

function Page049(props) {

  const pagina = "049";
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
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>

          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className={"cabecera-v2 d-flex flex-column " + background}>
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className={"caja-seccion wp-160 hp-70 text-center fsp-24 f-IntroRustG-Base " + color}>SESIÓN 13</div>
              <div className="d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">¡Manos a la obra!  </div>
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-30 container-titulo-global mbp-0">
            <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
              ¡Todos trabajamos!
            </div>
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                1
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Asignamos responsables y tareas.
              </div>
              {/* <img src={"images/page_"+pagina+"/img_001.svg"} className="wp-100" alt=""/> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="d-flex flex-column global-margin mtp-0 mbp-0 psp-20 pep-20 ptp-20 pbp-20 bgc-buzz rounded-p-10">
            <div className="row p-0 msp-0 mep-0 mtp-0 mbp-10 w-100 ">
              <div className="d-flex justify-content-evenly">
                <div className="col-md-3 col-6">¿Qué hay que hacer?</div>
                <div className="col-md-9 col-6">¿Quiénes lo harán?</div>
              </div>

              <div className="col-3 p-0 m-0 position-relative d-flex justify-content-end align-items-center ">
                <div className="position-absolute top-50 start-100 translate-middle msp-0 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_001.svg"} className="wp-25" alt="" /></div>
                <div className="bgc-bulma color-white f-Ubuntu-B fsp-15 psp-10 pep-10 ptp-10 pbp-10 mep-10 rounded-p-10 max-wp-200 wp-200 min-hp-50 d-flex align-items-center justify-content-start text-start">Construir el modelo.</div>
              </div>
              <div className="col-9 p-0 m-0 position-relative d-flex center-center ">
                <div className="bgc-white border-style-solid border-2 border-color-bulma f-Ubuntu-R fsp-15 psp-10 pep-10 ptp-10 pbp-10 msp-0 min-hp-40 w-100 rounded-p-10 min-hp-50 d-flex center-center">
                  <div className="d-flex w-100 psp-10 pep-10 ptp-0 pbp-0">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="w-100 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row m-0 w-100 pbp-10 ps-0 pe-0 pt-0">
              <div className="col-3 p-0 m-0 position-relative d-flex justify-content-end align-items-center ">
                <div className="position-absolute top-50 start-100 translate-middle msp-0 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_001.svg"} className="wp-25" alt="" /></div>
                <div className="bgc-bulma color-white f-Ubuntu-B fsp-15 psp-10 pep-10 ptp-10 pbp-10 mep-10 rounded-p-10 max-wp-200 wp-200 min-hp-50 d-flex center-center text-start">Preparar la infografía que explique el modelo.</div>
              </div>
              <div className="col-9 p-0 m-0 position-relative d-flex center-center ">
                <div className="bgc-white border-style-solid border-2 border-color-bulma  f-Ubuntu-r fsp-15 psp-10 pep-10 ptp-10 pbp-10 msp-0 min-hp-40 w-100 rounded-p-10 min-hp-50 d-flex center-center">
                  <div className="d-flex w-100 psp-10 pep-10 ptp-0 pbp-0">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="w-100 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row p-0 m-0 w-100 ">
              <div className="col-3 p-0 m-0 position-relative d-flex justify-content-end align-items-center ">
                <div className="position-absolute top-50 start-100 translate-middle msp-0 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_001.svg"} className="wp-25" alt="" /></div>
                <div className="bgc-bulma color-white f-Ubuntu-B fsp-15 psp-10 pep-10 ptp-10 pbp-10 mep-10 rounded-p-10 max-wp-200 wp-200 min-hp-50 d-flex center-center text-start">Realizar decoraciones para el stand.</div>
              </div>
              <div className="col-9 p-0 m-0 position-relative d-flex center-center ">
                <div className="bgc-white border-style-solid border-2 border-color-bulma f-Ubuntu-R fsp-15 psp-10 pep-10 ptp-10 pbp-10 msp-0 min-hp-40 w-100 rounded-p-10 min-hp-50 d-flex center-center">
                  <div className="d-flex w-100 psp-10 pep-10 ptp-0 pbp-0">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="w-100 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="mtp-10 ptp-0 container-titulo-global mbp-0">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 "+color}>
          xxx
          </div> */}
            <div className="d-flex psp-20">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_002.svg"} alt="" />
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                2
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Observamos la sección Paso a paso en la revista. Con este ejemplo podré dibujar y describir los pasos para realizar mi tarea.
              </div>
              {/* <img src={"images/page_"+pagina+"/img_00.svg"} className="wp-100" alt=""/> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} pagina={"75"} image={"images/page_" + pagina + "/img_003.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
            </div>
          </div>


          <div className="d-flex global-margin mtp-20 mbp-100 psp-0 pep-0 ptp-0 pbp-0 bgc-ryu rounded-p-10">
            <div className="row p-0 m-0 w-100 f-Ubuntu-R fsp-15">

              <div className="col-sm-4 col-md-4 p-0 m-0 position-relative ">
                <div className="d-flex mtp-20 psp-20 pep-20 ptp-0 pbp-10 position-relative">
                  <div className="d-flex w-100 psp-10 pep-10 ptp-30 pbp-0 bgc-white rounded-p-10 ">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className=" max-wp-170 w-100 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                  </div>
                </div>
                <div className="d-flex mtp-5 psp-20 pep-20 ptp-0 pbp-10 w-100">

                  <div className="border-style-solid border-2 border-color-saitama w-100 rounded-p-10">
                    <div className="d-flex flex-column bgc-white rounded-p-10 w-100">
                      <div className="bgc-bobafett w-100 f-Ubuntu-B color-saitama text-start fsp-15 rounded-set-10 psp-10 pep-10 ptp-5 pbp-5">
                        Paso 1
                      </div>
                      <div className="psp-10 pep-10">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="max-wp-170 w-100 p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-120" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-4 p-0 m-0 position-relative">
                <div className="d-flex mtp-20 psp-20 pep-20 ptp-0 pbp-10 position-relative">
                  <div className="d-flex w-100 psp-10 pep-10 ptp-30 pbp-0 bgc-white rounded-p-10">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="max-wp-170 w-100 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                  </div>
                </div>
                <div className="d-flex mtp-5 psp-20 pep-20 ptp-0 pbp-10 w-100">

                  <div className="border-style-solid border-2 border-color-saitama w-100 rounded-p-10">
                    <div className="d-flex flex-column bgc-white rounded-p-10 w-100">
                      <div className="bgc-bobafett w-100 f-Ubuntu-B color-saitama text-start fsp-15 rounded-set-10 psp-10 pep-10 ptp-5 pbp-5">
                        Paso 2
                      </div>
                      <div className="psp-10 pep-10">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className=" p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-120" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-4 p-0 m-0 position-relative">
                <div className="d-flex mtp-20 psp-20 pep-20 ptp-0 pbp-10 position-relative">
                  <div className="d-flex w-100 psp-10 pep-10 ptp-30 pbp-0 bgc-white rounded-p-10">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="max-wp-170 w-100 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                  </div>
                </div>
                <div className="d-flex mtp-5 psp-20 pep-20 ptp-0 pbp-10 w-100">

                  <div className="border-style-solid border-2 border-color-saitama w-100 rounded-p-10">
                    <div className="d-flex flex-column bgc-white rounded-p-10 w-100">
                      <div className="bgc-bobafett w-100 f-Ubuntu-B color-saitama text-start fsp-15 rounded-set-10 psp-10 pep-10 ptp-5 pbp-5">
                        Paso 3
                      </div>
                      <div className="psp-10 pep-10">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-120" />
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

            <div className={etapa == 1 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
              <img src="images/rotulo_motivacion.svg" className={etapa == 1 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className={etapa == 2 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
              <img src="images/rotulo_planificacion.svg" className={etapa == 2 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className={etapa == 3 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
              <img src="images/rotulo_investigacion.svg" className={etapa == 3 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className={etapa == 4 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
              <img src="images/rotulo_experimentacion.svg" className={etapa == 4 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className={etapa == 5 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
              <img src="images/rotulo_creacion.svg" className={etapa == 5 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className={etapa == 6 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
              <img src="images/rotulo_difusion.svg" className={etapa == 6 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
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

export default Page049;
