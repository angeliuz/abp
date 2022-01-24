import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_017.css";

function Page017(props) {
  const pagina = "017";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div
          className="page bgc-white overflow-hidden position-relative"
          id={"page_" + pagina}
        >
          <div className="cabecera-v1 hp-80 bgc-bulma"></div>
          <div className="psp-60 pep-60 ptp-60">
            <div className="border-style-solid border-2 border-color-android18 rounded-p-20 position-relative p-3">
              <div className="d-flex">
                <div className="text-left">
                  <img
                    src="images/page_017/img_001.svg"
                    className="position-absolute translate-middle msp-110 mtp--10"
                    alt=""
                  />
                  <div className="position-absolute top-0 start-0 msp-10 mtp--5 giro-4deg">
                    <div className="f-Ubuntu-M fsp-16">
                      ¿Qué veo en las fotografías?
                    </div>
                  </div>
                </div>
                <img
                  src="images/page_017/img_002.png"
                  className="position-absolute tf-lupa-17 start-0 top-0 mtp--30 msp-245 hp-60"
                  alt=""
                />
              </div>
              <div className="mtp-20">
                <InputBox
                  id={"p" + pagina + "_input" + (indexInput += 1)}
                  className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-190 "
                />
              </div>
            </div>
            <div className="ptp-40"></div>
            <div className="border-style-solid border-2 border-color-akuma rounded-p-20 position-relative p-3">
              <div className="d-flex">
                <div className="text-left">
                  <img
                    src="images/page_017/img_003.svg"
                    className="position-absolute translate-middle msp-150 mtp--10"
                    alt=""
                  />
                  <div className="position-absolute top-0 start-0 msp-10 mtp--5 giro-4deg">
                    <div className="f-Ubuntu-M fsp-16">
                      ¿Qué pienso acerca de lo que observé?
                    </div>
                  </div>
                </div>
                <img
                  src="images/page_017/img_004.png"
                  className="position-absolute tf-lupa-17 start-0 top-0 mtp--30 msp-310 hp-60"
                  alt=""
                />
              </div>
              <div className="mtp-20">
                <InputBox
                  id={"p" + pagina + "_input" + (indexInput += 1)}
                  className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-190 "
                />
              </div>
            </div>
            <div className="ptp-40"></div>
            <div className="border-style-solid border-2 border-color-rex rounded-p-20 position-relative p-3 mbp-100">
              <div className="d-flex">
                <div className="text-left">
                  <img
                    src="images/page_017/img_005.svg"
                    className="position-absolute translate-middle msp-100 mtp--10"
                    alt=""
                  />
                  <div className="position-absolute top-0 start-0 msp-10 mtp--18 giro-4deg">
                    <div className="f-Ubuntu-M fsp-16">
                      ¿Qué preguntas me surgen
                      <br />
                      de lo que pensé y observé?
                    </div>
                  </div>
                </div>
                <img
                  src="images/page_017/img_006.png"
                  className="position-absolute tf-lupa-17 start-0 top-0 mtp--35 msp-220 hp-60"
                  alt=""
                />
                <img
                  src="images/page_017/img_007.png"
                  className=" hp-200 position-absolute translate-middle top-100 start-100 mtp--80 msp--60 hidden-res"
                  alt=""
                />
              </div>
              <div className="mtp-20">
                <InputBox
                  id={"p" + pagina + "_input" + (indexInput += 1)}
                  className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-280"
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
        </div>
      </div>
    </div>
  );
}

export default Page017;
