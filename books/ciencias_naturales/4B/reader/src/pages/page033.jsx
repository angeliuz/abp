import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_033.css";

function Page033(props) {
  const pagina = "033";
  var indexInput = 0;

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

          <div className="ptp-30 psp-60 pep-60">
            <div className="f-Ubuntu-M fsp-20 color-android18 text-start">
              La importancia de un plan de seguridad
            </div>
          </div>
          <div className="ptp-10 container-titulo-global mbp-20">
            <div className="d-flex">
              <img
                src="images/page_033/img_001.svg"
                className="hp-20 mtp-15 msp--10 pep-10"
                alt=""
              />
              <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">
                5
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Comparamos el plan de seguridad del colegio con lo leído en la
                revista. Luego, lo relacionamos con lo que esperamos de la
                brigada y su misión.
              </div>
              <img
                src="images/page_033/img_002.svg"
                className="hp-40 mtp-20"
                alt=""
              />
            </div>
          </div>
          <div className="psp-60 pep-60 ptp-30">
            <div className="position-relative">
              <div className="py-1 bgc-android18 rounded-p-20 msp-30 mtp--10 mxwp-140 centrar-hor invisible-768">Plan de seguridad</div>
              <div className="circulo border-style-solid border-color-android18 border-2 ajuste-circulo-1">
                <div className="position-absolute">
                  <div className="psp-30-r mtp-60 d-flex flex-column">
                  <div className="py-1 bgc-android18 rounded-p-20 msp-30 mtp--10 mxwp-140 visible-768">Plan de seguridad</div>
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 flex-grow-1 lhp-25 min-hp-260-r mnxwp-180-r"
                    />
                  </div>
                </div>
              </div>
              <div className="position-absolute top-0 start-50 zi1">
                <div className="msp--80-r mtp-80-r">
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 flex-grow-1 lhp-25 min-hp-220-r mnxwp-160-r"
                  />
                </div>
              </div>
              <div className="circulo border-style-solid border-color-android18 border-2 ajuste-circulo-2">
                <div className="position-absolute">
                  <div className="psp-170-r mtp-60-r">
                  <div className="py-1 bgc-android18 rounded-p-20 mtp--10 mxwp-140 visible-768">Revista</div>
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 flex-grow-1 lhp-25 min-hp-260-r mnxwp-180-r"
                    />
                  </div>
                </div>
              </div>
              <div className="py-1 bgc-android18 rounded-p-20 msp-30 mtp--10 mxwp-140 centrar-hor invisible-768">Revista</div>
            </div>
            <div className="ptp-30"></div>
            <div className="bgc-sid px-2 ptp-10 pbp-50 rounded-set-20">
              <div className="bgc-white border-style-solid border-1 border-color-rex p-3 rounded-p-20">
                <div className="text-start">
                  Concluimos que la brigada podría:
                </div>
                <InputBox
                  id={"p" + pagina + "_input" + (indexInput += 1)}
                  className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-240"
                />
              </div>
            </div>
          </div>
          {/* PIE DE PAGINA */}
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
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_motivacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_planificacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-7 col-sm-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_investigacion.svg"
                className="visible rotulo-etapa position-absolute top-0 start-0"
                alt=""
              />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_experimentacion.svg"
                className="oculto"
                alt=""
              />
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
          {/*FIN PIE DE PAGINA */}
        </div>
      </div>
    </div>
  );
}

export default Page033;
