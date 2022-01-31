import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_053.css";

function Page053(props) {

  const pagina = "053";
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
          <div className="cabecera-v2 bgc-pidgey d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className="caja wp-160 text-center fsp-24 f-IntroRustG-Base">SESIÓN 14</div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Grabamos un video</div>
            </div>
            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-90">
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Mis objetivos <br />en  esta sesión son:
              </div>
              <div className="p-0 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Seleccionar los temas <br />que vamos a incluir en<br /> el video
              </div>
              <div className="psp-5 pep-5 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_2.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Escribir una secuencia<br /> de ideas para incluir<br />en el video
              </div>
              <div className="p-0 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-3 align-self-center f-colby-compres-bold fsp-15 lh-sm text-center text-white">
                Distribuir las<br /> tareas
              </div>
              <div className="psp-5 pep-5 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_2.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-3 align-self-center f-colby-compres-bold fsp-15 lh-sm text-center text-white">
                Grabar el video
              </div>
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}
          <div className="ptp-10 container-titulo-global mbp-20">
            <div className="d-flex">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_053/g.svg" alt="" />
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">1</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Grabaremos el prototipo de nuestro proyecto. Para ello:</div>
              <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image="images/page_053/revista.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
            </div>
          </div>

          <div className="psp-60 pep-60">
            <div className="d-flex psp-20 pbp-20">
              <div className={"f-Ubuntu-B fsp-21 mtp--6 " + color}>
                a.
              </div>
              <div className="f-Ubuntu-R fsp-16 psp-10 pep-10 text-start">
                Seleccionamos los temas que vamos a incluir:
              </div>
            </div>
          </div>
          <div className="w-100 h-100 position-relative">


            <div className="msp-80 mep-60 position-relative  ">
              {/* <div className="position-absolute top-100 start-0 translate-middle   zindex-4 visible-768 msp--30 mtp--20 "><img src="images/page_061/img_007.png" className="wp-50 " alt="" /></div> */}
              <div className="row w-100">
                <div className="cb-ep-paper-53 ">
                  <div className="cb-ep-paper-content-53 f-Ubuntu-L text-start">
                    <div className="mtp-5 ">


                      <div className="row p-0 m-0 ">
                        <div className="col-6 d-flex p-2">
                          <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 wp-30 text-center flex-grow-1 lhp-30 min-hp-35" />
                          </div>
                          <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-L fsp-15 psp-5">Aportes del prototipo a la
                            sostenibilidad del colegio.</div>
                        </div>

                        <div className="col-6 d-flex  p-2">
                          <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 wp-30 text-center flex-grow-1 lhp-30 min-hp-35" />
                          </div>
                          <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-L fsp-15 psp-5 pbp-10">Ventajas del prototipo.</div>
                        </div>
                        <div className="col-6 d-flex p-2">
                          <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 wp-30 text-center flex-grow-1 lhp-30 min-hp-35" />
                          </div>
                          <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-L fsp-15 psp-5">Funcionamiento y uso adecuado
                            del prototipo.</div>
                        </div>
                        <div className="col-6 d-flex p-2">
                          <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 wp-30 text-center flex-grow-1 lhp-30 min-hp-35" />
                          </div>
                          <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-L fsp-15 psp-5 pbp-10">Mejoras del prototipo.</div>
                        </div>

                        <div className="col-6 d-flex  p-2">
                          <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 wp-30 text-center flex-grow-1 lhp-30 min-hp-35" />
                          </div>
                          <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-L fsp-15 psp-5">Proceso de construcción del
                            prototipo.</div>
                        </div>

                        <div className="col-6 d-flex  p-2">
                          <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 wp-30 text-center flex-grow-1 lhp-30 min-hp-35" />
                          </div>
                          <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-L fsp-15 psp-5">Diseño del prototipo.</div>
                        </div>
                        <div className="col-6 "></div>

                        <div className="col-6 d-flex  p-2">
                          <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 wp-30 text-center flex-grow-1 lhp-30 min-hp-35" />
                          </div>
                          <div className="d-flex justify-content-start align-items-start text-start f-Ubuntu-L fsp-15 wp-250 ptp-10 psp-10">Otro:
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
          <div className="psp-60 pep-60">
            <div className="d-flex psp-20 pbp-20">
              <div className={"f-Ubuntu-B fsp-21 mtp--6 " + color}>
                b.
              </div>
              <div className="f-Ubuntu-R fsp-16 psp-10 pep-10 text-start">
                Escribimos la secuencia de ideas que queremos que incluya el video:
              </div>
            </div>
          </div>
          <div className="d-flex msp-60 mep-60 mbp-0 mtp-10 mbp-">

            <div className="row m-0 psp-10 pep-10 ptp-0 pbp-10 rounded-p-20 w-100">



              <div className="col-md-12 col-lg-12 position-relative">
                <div className="position-absolute top-0 start-100 translate-middle "><img src="images/page_053/img_005.png" className="wp-90 " alt="" /></div>
                <div className="d-flex mbp-20 mtp-10 w-100">
                  <div className="p-2 min-hp-100 w-100 border-style-solid border-1 border-color-dark bgc-azuka ">
                    <div className="d-flex  bgc-white text-start min-hp-0 bgc-white">
                      {/* <div className="w-100 text-center ">
            <span className="f-pixilate-semibold ">Como grupo, opinamos que</span>
            <br />
            
          </div> */}
                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-400" />
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
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-7 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_experimentacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
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

export default Page053;
