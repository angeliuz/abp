import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_026.css";

function Page026(props) {

  const pagina = "026";
  var indexInput = 0;
  const etapa = "3"
  const background = "bgc-android18";
  const color = "color-android18";
  const borderColor = "border-color-android18"
  const borderColorTabla = "border-color-azuka"
  const bgc_cajas = "bgc-azuka";

  return (

    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>

          {/* BEGIN CABECERA VERSIÓN 1 */}
          <div className={"cabecera-v1 hp-80 " + background}></div>
          {/* END CABECERA VERSIÓN 1 */}

          <div className="container-titulo-global mtp-20 mbp-0">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
              xxx
            </div> */}
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                4
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Veo la infografía de la revista e identifico las recomendaciones de variedad, tamaño y frecuencia de las porciones que las personas deben ingerir para alimentarse saludablemente. Luego, completo.
              </div>
              {/* <img src={"images/page_"+pagina+"/img_00.svg"} className="wp-100" alt=""/> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} colorUnidad={background} pagina={"84"} image={"images/page_" + pagina + "/img_001.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
            </div>
          </div>

          <div className="d-flex global-margin mtp-40 mbp-60 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">

              <div className="col-6 p-0 m-0 position-relative">
                <div className="position-absolute top-50 start-100 translate-middle msp--35 mtp-60 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="hp-400" alt="" /></div>
                <div className="position-absolute top-0 start-0 translate-middle zindex-1 msp--10 mtp-25 visible-768"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-90" alt="" /></div>

                <div className="position-relative mep-80">

                  <div className="position-absolute top-0 start-50 translate-middle w-100 msp-0 mtp-0 lhp-17 d-flex center-center">
                    <div className="bgc-saitama rounded-p-10 w-70 psp-10 pep-10 ptp-10 pbp-10">
                      <span className="color-white f-Ubuntu-M fsp-15">¿Qué piensa mi equipo?</span>
                    </div>
                  </div>

                  <div className="bgc-white rounded-p-10 border-style-solid border-color-saitama border-2 w-100 p-1 f-Ubuntu-L fsp-15 mbp-20">
                    <div className="d-flex bgc-bobafett border-style-solid border-color-white border-0 rounded-p-10 p-2">

                      <div className="d-flex flex-column position-relative w-100 text-start mtp-10">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-500" />
                      </div>

                    </div>

                  </div>

                </div>

              </div>

              <div className="col-6 p-0 m-0 position-relative">
                <div className="position-absolute top-0 start-0 translate-middle visible-768 mtp-60"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-120" alt="" /></div>

                <div className="d-flex msp-30 mep-0 mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
                  <div className="row p-0 m-0 w-100">

                    <div className="col-12 p-0 m-0 position-relative">
                      <div className="d-flex center-center mbp-20">
                        <div className="bgc-saitama rounded-p-10 w-70 psp-10 pep-10 ptp-10 pbp-10">
                          <span className="color-white f-Ubuntu-M fsp-15 lhp-20">¿Para qué lo puedo utilizar?</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 p-0 m-0 position-relative">

                      <div className="border-style-solid border-2 border-color-saitama rounded-p-10 mbp-10">
                        <div className="d-flex flex-column bgc-bobafett rounded-p-10 border-style-solid border-3 border-color-white ">
                          <div className="bgc-white w-100 f-Ubuntu-B text-center color-saitama fsp-15 rounded-set-10 psp-10 pep-10 ptp-5 pbp-5">
                            En casa
                          </div>
                          <div className="psp-10 pep-10 f-Ubuntu-L">
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-120" />
                          </div>
                        </div>
                      </div>


                    </div>
                    <div className="col-12 p-0 m-0 position-relative">

                      <div className="border-style-solid border-2 border-color-saitama rounded-p-10 mbp-10">
                        <div className="d-flex flex-column bgc-bobafett rounded-p-10 border-style-solid border-3 border-color-white ">
                          <div className="bgc-white w-100 f-Ubuntu-B text-center color-saitama fsp-15 rounded-set-10 psp-10 pep-10 ptp-5 pbp-5">
                            Con los amigos
                          </div>
                          <div className="psp-10 pep-10 f-Ubuntu-L">
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-120" />
                          </div>
                        </div>
                      </div>


                    </div>
                    <div className="col-12 p-0 m-0 position-relative">

                      <div className="border-style-solid border-2 border-color-saitama rounded-p-10 mbp-10">
                        <div className="d-flex flex-column bgc-bobafett rounded-p-10 border-style-solid border-3 border-color-white ">
                          <div className="bgc-white w-100 f-Ubuntu-B text-center color-saitama fsp-15 rounded-set-10 psp-10 pep-10 ptp-5 pbp-5">
                            En este proyecto
                          </div>
                          <div className="psp-10 pep-10 f-Ubuntu-L">
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-120" />
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
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
              ABP &copy; SM
            </div>
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>
          <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>

            <div className={etapa == 1 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
              <img src="images/rotulo_motivacion.svg" className={etapa == 1 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className={etapa == 2 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
              <img src="images/rotulo_planificacion.svg" className={etapa == 2 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className={etapa == 3 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
              <img src="images/rotulo_investigacion.svg" className={etapa == 3 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className={etapa == 4 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
              <img src="images/rotulo_experimentacion.svg" className={etapa == 4 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className={etapa == 5 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
              <img src="images/rotulo_creacion.svg" className={etapa == 5 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className={etapa == 6 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
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

export default Page026;
