import React from "react";
import InputBox from "../components/InputBox";

import "./page_008.css";

function Page008(props) {

  const pagina = "008";
  var indexInput = 0;
  const etapa = "1"
  const background = "bgc-goten";
  const color = "color-goten";
  const borderColor = "border-color-goten"
  const bgc_cajas = "bgc-genos";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          <div className={"cabecera-v1 hp-80 " + background}>
          </div>


          <div className="d-flex psp-60 pep-60 mtp-30">

            <div className="row w-100 m-0 ">

              <div className="col-12 justify-content-center mtp-10 psp-80 pep-80 pbp-0 position-relative">
                <div className="position-absolute top-0 start-100 translate-middle msp--70 mtp--15  zindex-1"><img src="images/page_008/img_001.png" className="wp-230 " alt="" /></div>


                <div className="p-2 rounded-p-10 bgc-jaga">
                  <div className="psp-5 pep-5">
                    <div className="d-flex flex-column position-relative bgc-white psp-20 pep-20 ptp-15 pbp-15 mtp-5 mbp-5 rounded-p-10">
                      <div className="text-start">
                        Se nos ha solicitado...
                      </div>

                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 msp-0 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" />
                    </div>

                  </div>

                </div>

              </div>
              <div className="col-12 justify-content-center psp-80 pep-80 pbp-0 ptp-30 position-relative">

                <div className="p-2 rounded-p-10 bgc-jaga">
                  <div className="psp-5 pep-5">
                    <div className="d-flex flex-column position-relative bgc-white psp-20 pep-20 ptp-15 pbp-15 mtp-5 mbp-5 rounded-p-10">
                      <div className="text-start">
                        Para ello realizaremos…
                      </div>
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 msp-0 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={"d-flex w-100 mtp-50 psp-60 pep-60 ptp-20 mbp-0 border-top-style-solid " + borderColor + " border-2 pbp-80 " + bgc_cajas}>
            <div className="row w-100 p-0 m-0">
              <div className="col-12 position-relative">

                <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-5">¿Cómo voy?</div>
                <div className="d-flex flex-column mbp-20 mtp-10 w-100">
                  <div className="p-2 min-hp-80 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                    <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 text-start">
                      <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 wp-15" alt="" />
                      <span>¿Qué he aprendido hoy?</span>
                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-20" />
                    <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 mtp-20 text-start">
                      <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 wp-15" alt="" />
                      <span>Este tema me está resultando</span>
                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                    <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 mtp-20 text-start">                   
                      <span>porque</span>
                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                  </div>
                  

                </div>
              </div>

              <div className="col-12 position-relative">

                <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-5">¿Cómo me siento?</div>
                <div className="d-flex flex-column mbp-20 mtp-10 w-100">
                  <div className="p-2 min-hp-80 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                    <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 text-start">
                      <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 wp-15" alt="" />
                      <span>¿Cómo me siento ante el desafío?</span>
                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-20" />

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
            <div className="col-7 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_motivacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
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
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
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

export default Page008;
