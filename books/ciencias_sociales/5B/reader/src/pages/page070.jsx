import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_070.css";

function Page070(props) {

  const pagina = "070";
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
              <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_070/img_001.svg" alt="" />
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>2</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Defino con mi grupo cuatro aspectos que mejoraremos de la revista. En la elección consideramos la importancia del cambio y el tiempo con el que contamos para hacerlo.
              </div>
              {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image="images/page_070/revista.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="d-flex msp-60 mep-60 mbp-20 mtp-30 bgc-bobafett rounded-p-20 border-style-solid border-1 border-color-dark">
            <div className="row w-100 p-0 m-0">
              <div className="col-sm-4 position-relative p-2 f-Ubuntu-M">¿Qué mejoraremos?</div>
              <div className="col-sm-4 position-relative p-2 f-Ubuntu-M">¿Cómo lo haremos?</div>
              <div className="col-sm-4 position-relative p-2 f-Ubuntu-M">Responsable</div>

              <div className="col-sm-4 position-relative align-items-stretch mbp-20">
                <div className="position-absolute top-0 start-0 translate-middle msp-3 mtp-0 zindex-1"><img src="images/page_070/img_002.png" className="wp-60 " alt="" /></div>
                <div className="position-absolute top-50 start-100 translate-middle msp-3 mtp-0 zindex-1"><img src="images/page_070/img_003.svg" className="wp-30 " alt="" /></div>
                <div className="h-100 mbp-5 mtp-10 w-100 rounded-p-10 bgc-white border-style-solid border-1 border-color-saitama">
                  <div className="h-100 p-2 w-100 d-flex">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140 w-90 h-100" />
                  </div>
                </div>
              </div>
              <div className="col-sm-4 position-relative align-items-stretch mbp-20">
                <div className="position-absolute top-50 start-100 translate-middle msp-3 mtp-0 zindex-1"><img src="images/page_070/img_003.svg" className="wp-30 " alt="" /></div>
                <div className="h-100 mbp-5 mtp-10 w-100 rounded-p-10 bgc-white border-style-solid border-1 border-color-saitama">
                  <div className="h-100 p-2 w-100 d-flex">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140 w-90 h-100" />
                  </div>
                </div>
              </div>
              <div className="col-sm-4 position-relative align-items-stretch mbp-20">
                <div className="position-absolute top-50 start-100 translate-middle msp-3 mtp-20 zindex-1"><img src="images/page_070/img_004.png" className="wp-40 " alt="" /></div>
                <div className="h-100 mbp-5 mtp-10 w-100 rounded-p-10 bgc-white border-style-solid border-1 border-color-saitama">
                  <div className="h-100 p-2 w-100 d-flex">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140 w-90 h-100" />
                  </div>
                </div>
              </div>
              <div className="col-sm-4 position-relative align-items-stretch mbp-20">
                <div className="position-absolute top-50 start-100 translate-middle msp-3 mtp-0 zindex-1"><img src="images/page_070/img_003.svg" className="wp-30 " alt="" /></div>
                <div className="h-100  mbp-5 mtp-10 w-100 rounded-p-10 bgc-white border-style-solid border-1 border-color-saitama">
                  <div className="h-100 p-2 w-100 d-flex">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140 w-90 h-100" />
                  </div>
                </div>
              </div>
              <div className="col-sm-4 position-relative align-items-stretch mbp-20">
                <div className="position-absolute top-50 start-100 translate-middle msp-3 mtp-0 zindex-1"><img src="images/page_070/img_003.svg" className="wp-30 " alt="" /></div>
                <div className="h-100  mbp-5 mtp-10 w-100 rounded-p-10 bgc-white border-style-solid border-1 border-color-saitama">
                  <div className="h-100 p-2 w-100 d-flex">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140 w-90 h-100" />
                  </div>
                </div>
              </div>
              <div className="col-sm-4 position-relative align-items-stretch mbp-20">

                <div className="h-100 mbp-5 mtp-10 w-100 rounded-p-10 bgc-white border-style-solid border-1 border-color-saitama">
                  <div className="h-100 p-2 w-100 d-flex">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140 w-90 h-100" />
                  </div>
                </div>
              </div>
              <div className="col-sm-4 position-relative align-items-stretch mbp-20">
                <div className="position-absolute top-50 start-100 translate-middle msp-3 mtp-0 zindex-1"><img src="images/page_070/img_003.svg" className="wp-30 " alt="" /></div>
                <div className="h-100 mbp-5 mtp-10 w-100 rounded-p-10 bgc-white border-style-solid border-1 border-color-saitama">
                  <div className="h-100 p-2 w-100 d-flex">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140 w-90 h-100" />
                  </div>
                </div>
              </div>
              <div className="col-sm-4 position-relative align-items-stretch mbp-20">
                <div className="position-absolute top-50 start-100 translate-middle msp-3 mtp-0 zindex-1"><img src="images/page_070/img_003.svg" className="wp-30 " alt="" /></div>
                <div className="h-100 mbp-5 mtp-10 w-100 rounded-p-10 bgc-white border-style-solid border-1 border-color-saitama">
                  <div className="h-100 p-2 w-100 d-flex">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140 w-90 h-100" />
                  </div>
                </div>
              </div>
              <div className="col-sm-4 position-relative align-items-stretch mbp-20">

                <div className="h-100 mbp-5 mtp-10 w-100 rounded-p-10 bgc-white border-style-solid border-1 border-color-saitama">
                  <div className="h-100 p-2 w-100 d-flex">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140 w-90 h-100" />
                  </div>
                </div>
              </div>
              <div className="col-sm-4 position-relative align-items-stretch mbp-20">
                <div className="position-absolute top-50 start-100 translate-middle msp-3 mtp-0 zindex-1"><img src="images/page_070/img_003.svg" className="wp-30 " alt="" /></div>
                <div className="position-absolute top-100 start-0 translate-middle msp-3 mtp--30 zindex-1"><img src="images/page_070/img_005.png" className="wp-30 " alt="" /></div>
                <div className="h-100 mbp-5 mtp-10 w-100 rounded-p-10 bgc-white border-style-solid border-1 border-color-saitama">
                  <div className="h-100 p-2 w-100 d-flex">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140 w-90 h-100" />
                  </div>
                </div>
              </div>
              <div className="col-sm-4 position-relative align-items-stretch mbp-20">
                <div className="position-absolute top-50 start-100 translate-middle msp-3 mtp-0 zindex-1"><img src="images/page_070/img_003.svg" className="wp-30 " alt="" /></div>
                <div className="h-100 mbp-5 mtp-10 w-100 rounded-p-10 bgc-white border-style-solid border-1 border-color-saitama">
                  <div className="h-100 p-2 w-100 d-flex">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140 w-90 h-100" />
                  </div>
                </div>
              </div>
              <div className="col-sm-4 position-relative align-items-stretch mbp-20">
                <div className="position-absolute top-100 start-100 translate-middle msp-3 mtp-0 zindex-1"><img src="images/page_070/img_006.png" className="wp-60 " alt="" /></div>
                <div className="h-100 mbp-5 mtp-10 w-100 rounded-p-10 bgc-white border-style-solid border-1 border-color-saitama">
                  <div className="h-100 p-2 w-100 d-flex">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140 w-90 h-100" />
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="ptp-10 container-titulo-global mbp-100">
            <div className="d-flex">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_070/img_007.svg" alt="" />
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>3</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Realizamos las mejoras a la revista.
              </div>
              {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image="images/page_070/revista.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
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

export default Page070;
