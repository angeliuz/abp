import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_051.css";

function Page051(props) {

  const pagina = "051";
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

          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className={"cabecera-v2 d-flex flex-column " + background}>
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className={"caja-seccion wp-160 hp-70 text-center fsp-24 f-IntroRustG-Base color-dark"}>SESIÓN 14</div>
              <div className="d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Elaboramos y presentamos la propuesta</div>
            </div>
            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-0 pep-0 align-self-center justify-content-between w-95">
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Mis objetivos en <br /> esta sesión son:
              </div>
              <div className="p-0 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Pensar qué tenemos<br />que incluir en el documento<br />con la propuesta
              </div>
              <div className="psp-5 pep-5 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_2.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Establecer una<br />modalidad de trabajo
              </div>
              <div className="p-0 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="psp-5 pep-5 ptp-10 pbp-10 position-relative align-self-center f-colby-compres-bold fsp-17 lh-sm text-center color-white">
                <div className="position-relative">
                  Escribir la propuesta<br />y presentarla a<br />los encargados del<br />colegio
                </div>
              </div>
              <div className="p-0 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_2.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="psp-5 pep-5 ptp-10 pbp-10 position-relative align-self-center f-colby-compres-bold fsp-17 lh-sm text-center color-dark">
                <div className="position-absolute top-0 start-0 w-100 h-100">
                  <img src="images/cabecera/caja_blanca.png" width="100%" height="100%" alt="" />
                </div>
                <div className="position-relative mnwp-120">
                  Evaluar cómo<br />trabajamos en equipo<br />y cómo podemos<br />mejorar
                </div>
              </div>
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="container-titulo-global mtp-20 mbp-0">
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                1
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Repaso las características que debe tener el documento de nuestra propuesta.
              </div>
              {/* <img src={"images/page_"+pagina+"/img_00.svg"} className="wp-100" alt=""/> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="psp-120 pep-120 ptp-20">
            <div className="giro--2deg">
              <div className="p-1 bgc-ryu sombra-2 giro-2deg">
                <div className="p-1 bgc-ryu sombra-2 giro--3deg">
                  <div className="bgc-white sombra-2 p-3 giro-3deg ">
                    <div className="row pbp-20 psp-40 position-relative">

                      <div className="ptp-10 pbp-10 psp-20">
                        <div className="d-flex">
                          <div className="cuadrado-p51 bgc-white border-style-solid border-1 border-color-dark">
                            <InputBox
                              id={"p" + pagina + "_input" + (indexInput += 1)}
                              className="p-0 px-1 text-start flex-grow-1 hp-30 min-hp-30"
                            />
                          </div>
                          <div className="f-Ubuntu-L psp-15 ptp-5 text-start">
                            Tiene un título.
                          </div>
                        </div>
                      </div>
                      <div className="ptp-10 pbp-10 psp-20">
                        <div className="d-flex">
                          <div className="cuadrado-p51 bgc-white border-style-solid border-1 border-color-dark">
                            <InputBox
                              id={"p" + pagina + "_input" + (indexInput += 1)}
                              className="p-0 px-1 text-start flex-grow-1 hp-30 min-hp-30"
                            />
                          </div>
                          <div className="f-Ubuntu-L psp-15 ptp-5 text-start">
                            Señala los objetivos.
                          </div>
                        </div>
                      </div>
                      <div className="ptp-10 pbp-10 psp-20">
                        <div className="d-flex">
                          <div className="cuadrado-p51 bgc-white border-style-solid border-1 border-color-dark">
                            <InputBox
                              id={"p" + pagina + "_input" + (indexInput += 1)}
                              className="p-0 px-1 text-start flex-grow-1 hp-30 min-hp-30"
                            />
                          </div>
                          <div className="f-Ubuntu-L psp-15 ptp-5 text-start">
                            El lenguaje es sencillo y fácil de comprender.
                          </div>
                        </div>
                      </div>
                      <div className="ptp-10 pbp-10 psp-20">
                        <div className="d-flex">
                          <div className="cuadrado-p51 bgc-white border-style-solid border-1 border-color-dark">
                            <InputBox
                              id={"p" + pagina + "_input" + (indexInput += 1)}
                              className="p-0 px-1 text-start flex-grow-1 hp-30 min-hp-30"
                            />
                          </div>
                          <div className="f-Ubuntu-L psp-15 ptp-5 text-start">
                            La información es clara y aparece ordenada.
                          </div>
                        </div>
                      </div>
                      <div className="ptp-10 pbp-10 psp-20">
                        <div className="d-flex">
                          <div className="cuadrado-p51 bgc-white border-style-solid border-1 border-color-dark">
                            <InputBox
                              id={"p" + pagina + "_input" + (indexInput += 1)}
                              className="p-0 px-1 text-start flex-grow-1 hp-30 min-hp-30"
                            />
                          </div>
                          <div className="f-Ubuntu-L psp-15 ptp-5 text-start">

                            Considera la incorporación de imágenes, tablas o gráficos.
                          </div>
                        </div>
                      </div>
                      <div className="ptp-10 pbp-10 psp-20">
                        <div className="d-flex">
                          <div className="cuadrado-p51 bgc-white border-style-solid border-1 border-color-dark">
                            <InputBox
                              id={"p" + pagina + "_input" + (indexInput += 1)}
                              className="p-0 px-1 text-start flex-grow-1 hp-30 min-hp-30"
                            />
                          </div>
                          <div className="f-Ubuntu-L psp-15 ptp-5 text-start">
                            Recoge las ideas más importantes de las sesiones anteriores.
                          </div>
                        </div>
                      </div>
                      <div className="ptp-10 pbp-10 psp-20">
                        <div className="d-flex">
                          <div className="cuadrado-p51 bgc-white border-style-solid border-1 border-color-dark">
                            <InputBox
                              id={"p" + pagina + "_input" + (indexInput += 1)}
                              className="p-0 px-1 text-start flex-grow-1 hp-30 min-hp-30"
                            />
                          </div>
                          <div className="f-Ubuntu-L psp-15 ptp-5 text-start">
                            Contiene una sección explicativa que detalla la variedad de nutrientes de las alternativas de alimentación.
                          </div>
                        </div>
                      </div>
                      <div className="ptp-10 pbp-10 psp-20">
                        <div className="d-flex">
                          <div className="cuadrado-p51 bgc-white border-style-solid border-1 border-color-dark">
                            <InputBox
                              id={"p" + pagina + "_input" + (indexInput += 1)}
                              className="p-0 px-1 text-start flex-grow-1 hp-30 min-hp-30"
                            />
                          </div>
                          <div className="f-Ubuntu-L psp-15 ptp-5 text-start">
                            Contiene un sección que analiza los resultados obtenidos en la consulta pública.
                          </div>
                        </div>
                      </div>
                      <div className="ptp-10 pbp-10 psp-20">
                        <div className="d-flex">
                          <div className="cuadrado-p51 bgc-white border-style-solid border-1 border-color-dark">
                            <InputBox
                              id={"p" + pagina + "_input" + (indexInput += 1)}
                              className="p-0 px-1 text-start flex-grow-1 hp-30 min-hp-30"
                            />
                          </div>
                          <div className="f-Ubuntu-L psp-15 ptp-5 text-start">
                            Contiene un apartado con recomendaciones de una alimentación saludable.
                          </div>
                        </div>
                      </div>
                      <div className="ptp-10 pbp-10 psp-20">
                        <div className="d-flex">
                          <div className="cuadrado-p51 bgc-white border-style-solid border-1 border-color-dark">
                            <InputBox
                              id={"p" + pagina + "_input" + (indexInput += 1)}
                              className="p-0 px-1 text-start flex-grow-1 hp-30 min-hp-30"
                            />
                          </div>
                          <div className="f-Ubuntu-L psp-15 ptp-5 text-start">
                            Señala consejos relacionados con los beneficios de mantener una alimentación saludable.
                          </div>
                        </div>
                      </div>
                      <div className="ptp-10 pbp-10 psp-20">
                        <div className="d-flex">
                          <div className="cuadrado-p51 bgc-white border-style-solid border-1 border-color-dark">
                            <InputBox
                              id={"p" + pagina + "_input" + (indexInput += 1)}
                              className="p-0 px-1 text-start flex-grow-1 hp-30 min-hp-30"
                            />
                          </div>
                          <div className="f-Ubuntu-L psp-15 ptp-5 text-start">
                            Contiene una sección que justifique por qué la propuesta se considera un ejemplo alimentación saludable.
                          </div>
                        </div>
                      </div>
                      <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-80" alt="" /></div>
                      <div className="position-absolute top-100 start-100 translate-middle msp-0 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_007.png"} className="wp-80" alt="" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-titulo-global mtp-20 mbp-0">
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                2
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Pinto cómo vamos a escribir la propuesta.
              </div>
              {/* <img src={"images/page_"+pagina+"/img_00.svg"} className="wp-100" alt=""/> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="ptp-5 ps-15 pe-15 ">
            <div className="row w-60 align-items-center justify-content-end position-relative">
              <div className="col-12 col-md-6 p-2">
                <div className="rounded-p-5 border-style-solid border-1 border-color-hardDark p-2 text-center">Lo escribiremos con un computador</div>
              </div>
              <div className="col-12 col-md-6 p-2">
                <div className="rounded-p-5 border-style-solid border-1 border-color-hardDark p-2 text-center">Lo haremos a mano</div>
              </div>
              <div className="col-12 col-md-9 p-2">
                <div className="rounded-p-5 border-style-solid border-1 border-color-hardDark p-2 text-center">Todos juntos redacteremos el documento completo</div>
              </div>
              <div className="position-absolute top-50 start-100 translate-middle msp-150 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_008.png"} className="hp-180" alt="" /></div>
            </div>
          </div>

          <div className="pbp-100"></div>


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

export default Page051;
