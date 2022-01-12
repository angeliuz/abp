import React from "react";
import InputBox from "../components/InputBox";

import "./page_013.css";

function Page013(props) {
  const pagina = "013";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div
          className="page bgc-white overflow-hidden position-relative"
          id={"page_" + pagina}
        >
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v2 bgc-bulma d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 align-items-center ptp-40 psp-30 pep-30">
              <div className="caja-seccion wp-160 hp-60 d-flex justify-content-center ptp-10 mtp-5 color-bulma fsp-24 f-IntroRustG-Base">
                SESIÓN 2
              </div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">
                ¿Qué sé sobre la diversidad?
              </div>
            </div>
          </div>
          {/* END CABECERA */}
          <div className="psp-80 pep-60 ptp-30">
            <div className="f-Ubuntu-B color-bulma fsp-18 text-left">
              Conociendo conceptos
            </div>
            <div className="row">
              <div className="col-md-6 psp-20">
                <div className="d-flex">
                  <img
                    src="/images/page_013/img_002.svg"
                    className="pep-10 msp--40"
                    alt=""
                  />
                  <div className="f-ccdigitaldelivery-bold fsp-35 color-bulma">
                    1
                  </div>
                  <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-left">
                    Menciono algunas ideas de lo que entiendo por la diversidad.
                  </div>
                </div>
                <div className="psp-25 pep-20">
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-260"
                  />
                </div>
              </div>
              <div className="col-md-6 psp-20 position-relative">
                <div className="bgc-ash rounded-p-20 p-2">
                  <div className="bgc-white rounded-p-20 p-2">
                    <div className="f-ubuntu-R text-left">
                      Conversamos y nuestro concepto de diversidad es...
                    </div>
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-240"
                    />
                    <img
                      src="/images/page_013/img_003.png"
                      className="position-absolute top-0 start-100 translate-middle mtp-20 msp--50 hp-50"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="f-Ubuntu-B ptp-30 color-bulma fsp-18 text-left">
              Pienso, me interesa, investigo sobre la diversidad
            </div>
            <div className="d-flex pbp-10 ptp-10">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-bulma">
                2
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-left">
                Completo la tabla.
              </div>
            </div>
            <div className="row pbp-50">
              <div className="col-md-4 pbp-20">
                <div className="bgc-tshinhan esquina-ts px-2 border-end alto-res ptp-res">
                  <div className="">¿Qué sé sobre la diversidad?</div>
                </div>
                <div className="psp-20 pep-20 esquina-bs border-style-solid border-1 border-color-tshinhan">
                  {" "}
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-200"
                  />
                </div>
              </div>
              <div className="col-md-4 msp--24-r pbp-20">
                <div className="bgc-tshinhan px-2 medio-top border-end alto-res ptp-res">
                  <div className=" ">¿Qué dudas tengo sobre la diversidad?</div>
                </div>
                <div className="psp-20 pep-20 medio-bot border-style-solid border-1 border-color-tshinhan">
                  {" "}
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-200"
                  />
                </div>
              </div>
              <div className="col-md-4 msp--24-r pbp-20">
                <div className="bgc-tshinhan px-2 esquina-te alto-res ptp-a-res">
                  <div className=" ">
                    ¿Cómo podría investigar sobre la diversidad?
                  </div>
                </div>
                <div className="psp-20 pep-20 border-style-solid border-1 border-color-tshinhan esquina-be">
                  {" "}
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-200"
                  />
                </div>
              </div>
            </div>
          </div>
          <img
            src="/images/page_013/img_004.png"
            className="tf-postit hp-60"
            alt=""
          />
          <img
            src="/images/page_013/img_005.png"
            className="tf-lupa hp-60"
            alt=""
          />
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
            <div className="bgc-jawa wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">
              {props.numeroPagina(pagina)}
            </div>
          </div>
          <div
            className="row position-absolute caja-flotante2 p-0 m-0 align-items-end"
            style={{ bottom: 0 }}
          >
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img
                src="images/rotulo_motivacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-7 position-relative col-sm-2 p-0 m-0">
              <img
                src="images/rotulo_planificacion.svg"
                className="visible rotulo-etapa position-absolute top-0 start-0"
                alt=""
              />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img
                src="images/rotulo_investigacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img
                src="images/rotulo_experimentacion.svg"
                className="oculto"
                alt=""
              />
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
          {/* FIN PIE DE PAGINA */}
          {/* END CABECERA VERSIÓN 2 */}
        </div>
      </div>
    </div>
  );
}

export default Page013;
