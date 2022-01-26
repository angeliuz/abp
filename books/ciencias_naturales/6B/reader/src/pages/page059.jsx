import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_059.css";

function Page059(props) {

  const pagina = "059";
  var indexInput = 0;
  const etapa = "5"
  const background = "bgc-saitama";
  const color = "color-saitama";
  const bgc_cajas = "bgc-bobafett";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          <div className={"cabecera-v1 hp-80 " + background}>
          </div>

          <div className="ptp-10 container-titulo-global mbp-20">
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_062/g_i.svg" alt="" /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>5</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Asignamos entre los integrantes del equipo las siguientes tareas:
              </div>
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_031/img_002.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>







          <div className="msp-60 mep-60 mb-20">
            <div className="row">
              <div className="col-12 bgc-ryu p-2 rounded-p-20 position-relative">
                <div className="position-absolute top-0 start-100 translate-middle  zindex-2  mtp--150 "><img class="hp-60 " src="images/page_059/img_001.png" alt="" /></div>


                <div className="d-flex justify-content-center p-1 position-relative mbp-30">

                  <div className="position-absolute top-0 start-0 translate-middle  msp-50  mtp-5 zindex-1 gira-5">
                    <img class="wp-140 position-relative   " src="images/page_059/img_002.png" alt="" />
                    <div className="ptp-15  msp-20 mtp--50  gira-5 color-white  f-pixilate-bold fsp-18"> Ilustraciones </div>
                  </div>

                  <div className="row bgc-white w-100 f-Ubuntu-R fsp-16 fw-700 color-white rounded-p-10 border-style-solid border-2 border-color-yamcha">
                    <div className="col ptp-20">
                      <div className="d-flex w-100 p-2 rounded-p-20 ">
                        <div className="wp-5 hp-5 bgc-dark  rounded-p-50 mtp-10"> </div>
                        <div className="d-flex justify-content-start align-items-center psp-5 text-start f-Ubuntu-R color-dark   ">La persona que realice las ilustraciones debe ser alguien a quien le guste dibujar y pintar.</div>
                      </div>
                      <div className="d-flex w-100 p-2 ">
                        <div className="wp-5 hp-5 bgc-dark  rounded-p-50 mtp-10"> </div>
                        <div className="d-flex justify-content-start align-items-center psp-5 text-start f-Ubuntu-R color-dark   ">Debe retratar a los entrevistados y dibujar la portada.</div>
                      </div>
                      <div className="d-flex align-items-center w-100 p-2 ">
                        <div className="d-flex justify-content-start align-items-center wp-360 hp-60 psp-10 p-2 bgc-haendel rounded-tbs-10 text-start f-Ubuntu-R color-dark lh-sm "> La persona encargada de las ilustraciones será:</div>
                        <div className="d-flex w-100 hp-90 psp-5 text-start color-dark rounded-p-10 border-style-solid border-2 border-color-yamcha ">
                          <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="d-flex justify-content-center p-1 position-relative mbp-30">

                  <div className="position-absolute top-0 start-0 translate-middle  msp-30  mtp-5 zindex-1 gira-5">
                    <img class="wp-110 position-relative mtp--20  " src="images/page_059/img_003.png" alt="" />
                    <div className=" msp-20 mtp--35  gira-5 color-white zindex-2 f-pixilate-bold fsp-18"> Textos </div>
                  </div>

                  <div className="row bgc-white w-100 f-Ubuntu-R fsp-16 fw-700 color-white rounded-p-10 border-style-solid border-2 border-color-goro">
                    <div className="col ptp-20">
                      <div className="d-flex w-100 p-2 rounded-p-20 ">
                        <div className="wp-5 hp-5 bgc-dark  rounded-p-50 mtp-10"> </div>
                        <div className="d-flex justify-content-start align-items-center psp-5 text-start f-Ubuntu-R color-dark   ">La persona encargada de los textos debe escribir bien y saber transmitir información en pocas palabras.</div>
                      </div>
                      <div className="d-flex w-100 p-2 ">
                        <div className="wp-5 hp-5 bgc-dark  rounded-p-50 mtp-10"> </div>
                        <div className="d-flex justify-content-start align-items-center psp-5 text-start f-Ubuntu-R color-dark   ">Debe escribir la introducción que explica el álbum y sus partes.</div>
                      </div>
                      <div className="d-flex align-items-center w-100 p-2 ">
                        <div className="d-flex justify-content-start align-items-center wp-360 hp-60 psp-10 p-2 bgc-goro rounded-tbs-10 text-start f-Ubuntu-R color-dark lh-sm "> La persona encargada
                          de los textos será:</div>
                        <div className="d-flex w-100 hp-90 psp-5 text-start color-dark rounded-p-10 border-style-solid border-2 border-color-goro ">
                          <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center p-1 position-relative mbp-30">

                  <div className="position-absolute top-0 start-0 translate-middle  msp-30  mtp-5 zindex-1 gira-5">
                    <img class="wp-110 position-relative mtp--20  " src="images/page_059/img_004.png" alt="" />
                    <div className=" msp-20 mtp--35  gira-5 color-white zindex-2 f-pixilate-bold fsp-18"> Diseño </div>
                  </div>

                  <div className="row bgc-white w-100 f-Ubuntu-R fsp-16 fw-700 color-white rounded-p-10 border-style-solid border-2 border-color-yoda">
                    <div className="col ptp-20">
                      <div className="d-flex w-100 p-2 rounded-p-20 ">
                        <div className="wp-5 hp-5 bgc-dark  rounded-p-50 mtp-10"> </div>
                        <div className="d-flex justify-content-start align-items-center psp-5 text-start f-Ubuntu-R color-dark   ">La persona encargada del diseño debe distribuir los espacios, colores y formas del álbum.</div>
                      </div>
                      <div className="d-flex w-100 p-2 ">
                        <div className="wp-5 hp-5 bgc-dark  rounded-p-50 mtp-10"> </div>
                        <div className="d-flex justify-content-start align-items-center psp-5 text-start f-Ubuntu-R color-dark   ">Debe crear el soporte material del álbum.</div>
                      </div>
                      <div className="d-flex align-items-center w-100 p-2 ">
                        <div className="d-flex justify-content-start align-items-center wp-360 hp-60 psp-10 p-2 bgc-yoda rounded-tbs-10 text-start f-Ubuntu-R color-dark lh-sm "> La persona encargada del diseño será:</div>
                        <div className="d-flex w-100 hp-90 psp-5 text-start color-dark rounded-p-10 border-style-solid border-2 border-color-yoda ">
                          <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center p-1 position-relative mbp-10">

                  <div className="position-absolute top-0 start-0 translate-middle  msp-30  mtp-5 zindex-1 gira-5">
                    <img class="wp-110 position-relative mtp--20  " src="images/page_059/img_005.png" alt="" />
                    <div className=" msp-20 mtp--35  gira-5 color-white zindex-2 f-pixilate-bold fsp-18"> Edición </div>
                  </div>

                  <div className="row bgc-white w-100 f-Ubuntu-R fsp-16 fw-700 color-white rounded-p-10 border-style-solid border-2 border-color-brahms">
                    <div className="col ptp-20">
                      <div className="d-flex w-100 p-2 rounded-p-20 ">
                        <div className="wp-5 hp-5 bgc-dark  rounded-p-50 mtp-10"> </div>
                        <div className="d-flex justify-content-start align-items-center psp-5 text-start f-Ubuntu-R color-dark   ">La persona encargada de la edición debe revisar y procurar un justo equilibrio entre las partes del álbum.</div>
                      </div>
                      <div className="d-flex w-100 p-2 ">
                        <div className="wp-5 hp-5 bgc-dark  rounded-p-50 mtp-10"> </div>
                        <div className="d-flex justify-content-start align-items-center psp-5 text-start f-Ubuntu-R color-dark   ">Debe ser capaz de presentar y explicar el álbum a otros.</div>
                      </div>
                      <div className="d-flex align-items-center w-100 p-2 ">
                        <div className="d-flex justify-content-start align-items-center wp-360 hp-60 psp-10 p-2 bgc-brahms rounded-tbs-10 text-start f-Ubuntu-R color-dark lh-sm "> La persona encargada de la edición será:</div>
                        <div className="d-flex w-100 hp-90 psp-5 text-start color-dark rounded-p-10 border-style-solid border-2 border-color-brahms ">
                          <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                        </div>
                      </div>
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

export default Page059;
