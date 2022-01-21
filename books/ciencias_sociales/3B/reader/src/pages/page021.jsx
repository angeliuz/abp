import React from "react";
import InputBox from "../components/InputBox";

import "./page_021.css";

function Page021(props) {
  const pagina = "021";
  var indexInput = 0;
  const etapa = "3"
  const background = "bgc-android18";
  const color = "color-android18";
  const colorSesion = "color-primary";
  const borderColor = "border-color-android18"
  const bgc_cajas = "bgc-goku";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-10">
        <div
          className="page bgc-white overflow-hidden position-relative"
          id={"page_" + pagina}
        >
          <div className="cabecera-21 bgc-android18 d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 align-items-center ptp-40 psp-30 pep-30">
            <div className={"caja wp-150 text-center fsp-24 f-IntroRustG-Base "+colorSesion}>
                SESIÓN 4
              </div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">
                ¡A investigar!
              </div>
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="justify-content-center max-img ">
            <div className="">
              <img
                src="images/page_021/img_001.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>

          <div className="ptp-30 psp-60 ">
            <div className="f-Ubuntu-M fsp-20 color-android18 text-start">
              Antes de partir...
            </div>
          </div>

          <div className="ptp-5 psp-60 ">
            <div className="f-Ubuntu-R fsp-16  text-start">
              Reflexiono sobre la diversidad.
            </div>
          </div>

          <div className="ptp-10 container-titulo-global mbp-0">
            <div className="d-flex">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">
                1
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Observo la fotografía, pienso y me hago preguntas.
              </div>
            </div>
          </div>

          <div className="row container-row mtp-10 p-0 mx-4 position-relative">
            <div className="col-sm-12 col-md-4 mtp-20  position-relative">
              <img
                src="images/page_021/img_003.png"
                className="top-0 start-50 translate-middle-x position-absolute"
                alt=""
              />
              <div className=" margen-21 mtp-30 mbp-80 w-100">
                <div className=" w-100  borde-21-1 p-2 rounded-p-20 min-hp-400">
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-390"
                  />
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-4 mtp-20  position-relative">
              <img
                src="images/page_021/img_002.png"
                className="top-0 start-50 translate-middle-x position-absolute"
                alt=""
              />
              <div className=" margen-21 mtp-30 mbp-80 w-100">
                <div className="w-100  borde-21-2 p-2 rounded-p-20 min-hp-400">
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-390"
                  />
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-4 mtp-20  position-relative">
              <img
                src="images/page_021/img_001.png"
                className="top-0 start-50 translate-middle-x position-absolute"
                alt=""
              />
              <div className=" mtp-30 mbp-80 w-100">
                <div className="w-100  borde-21-3 p-2 rounded-p-20 min-hp-400">
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-390"
                  />
                </div>
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
        </div>
      </div>
    </div>
  );
}

export default Page021;
