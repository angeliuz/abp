import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_036.css";

function Page036(props) {
  const pagina = "036";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div
          className="page bgc-white overflow-hidden position-relative"
          id={"page_" + pagina}
        >

          <div className="cabecera-v1 hp-80 bgc-android18"></div>
          <div className="ptp-30 psp-60 pep-60">
            <div className="f-Ubuntu-M fsp-20 color-android18 text-start">
              ¿Cuánto sabemos de seguridad?
            </div>
          </div>
          <div className="ptp-10 container-titulo-global mbp-20">
            <div className="d-flex">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">
                6
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Realizamos la encuesta según lo planificado. Luego, anotamos los
                resultados.
              </div>
            </div>
          </div>
          <div className="psp-60 pep-60 pbp-120">
            <div className="row w-100">
              <div className="col-md-6 pbp-20">
                <div className="bgc-trunks mxwp-120 rounded-p-20 msp--10">
                  <div className="py-3 f-Ubuntu-L">Pregunta</div>
                </div>
                <div className="border-style-solid border-1 border-color-pidgey mtp--45 rounded-p-20 pbp-20">
                  <div className="d-flex msp--15 mtp-50">
                    <div className="cuadrado bgc-trunks border-style-solid border-1 border-color-pidgey color-pidgey">
                      1
                    </div>
                    <div className="psp-15 pep-10 flex-fill">
                      <InputBox
                        id={"p" + pagina + "_input" + (indexInput += 1)}
                        className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 wp-280 min-hp-75"
                      />
                    </div>
                  </div>
                  <div className="d-flex msp--15">
                    <div className="cuadrado bgc-trunks border-style-solid border-1 border-color-pidgey color-pidgey">
                      2
                    </div>
                    <div className="psp-15 pep-10 flex-fill">
                      <InputBox
                        id={"p" + pagina + "_input" + (indexInput += 1)}
                        className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 wp-280 min-hp-75"
                      />
                    </div>
                  </div>
                  <div className="d-flex msp--15">
                    <div className="cuadrado bgc-trunks border-style-solid border-1 border-color-pidgey color-pidgey">
                      3
                    </div>
                    <div className="psp-15 pep-10 flex-fill">
                      <InputBox
                        id={"p" + pagina + "_input" + (indexInput += 1)}
                        className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 wp-280 min-hp-75"
                      />
                    </div>
                  </div>
                  <div className="d-flex msp--15">
                    <div className="cuadrado bgc-trunks border-style-solid border-1 border-color-pidgey color-pidgey">
                      4
                    </div>
                    <div className="psp-15 pep-10 flex-fill">
                      <InputBox
                        id={"p" + pagina + "_input" + (indexInput += 1)}
                        className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 wp-280 min-hp-75"
                      />
                    </div>
                  </div>
                  <div className="d-flex msp--15">
                    <div className="cuadrado bgc-trunks border-style-solid border-1 border-color-pidgey color-pidgey">
                      5
                    </div>
                    <div className="psp-15 pep-10 flex-fill">
                      <InputBox
                        id={"p" + pagina + "_input" + (indexInput += 1)}
                        className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 wp-280 min-hp-75"
                      />
                    </div>
                  </div>
                  <div className="d-flex msp--15">
                    <div className="cuadrado bgc-trunks border-style-solid border-1 border-color-pidgey color-pidgey">
                      6
                    </div>
                    <div className="psp-15 pep-10 flex-fill">
                      <InputBox
                        id={"p" + pagina + "_input" + (indexInput += 1)}
                        className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 wp-280 min-hp-75"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 pbp-20 position-relative">
                <div className="bgc-trunks mxwp-120 rounded-p-20 msp--10">
                  <div className="py-3 f-Ubuntu-L">Resultado</div>
                </div>
                <div className="border-style-solid border-1 border-color-pidgey mtp--45 rounded-p-20 pbp-20">
                  <div className="mtp-50 psp-20 pep-20">
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-30 min-hp-455-r"
                    />
                  </div>
                </div>
                <img src="images/page_036/img_001.png" className="position-absolute top-0 start-100 msp--50 mtp--40" alt="" />
              </div>
            </div>
            <div className="row w-100">
              <div className="col-md-6 col-12 bgc-white mxwp-a sombra border-style-solid border-1 border-color-lightDark position-relative giro-2deg">
                <div className="giro--2deg">
                  <div className="d-flex ptp-15">
                    <div className="f-Ubuntu-B color-android18 fsp-18">a.</div>
                    <div className="text-start f-Ubuntu-L psp-10 w-80">
                      ¿Qué podemos concluir de los resultados de la encuesta?
                    </div>
                  </div>
                  <div className="">
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 lhp-30 min-hp-200"
                    />
                  </div>
                </div>
                <img
                  src="images/page_036/img_002.png"
                  className="position-absolute top-0 start-100 msp--40 mtp--10"
                  alt=""
                />
              </div>
              <div className="col-md-6 col-12 bgc-white sombra border-style-solid border-1 border-color-lightDark position-relative giro--2deg">
                <div className="giro-2deg">
                  <div className="d-flex ptp-15">
                    <div className="f-Ubuntu-B color-android18 fsp-18">b.</div>
                    <div className="text-start f-Ubuntu-L psp-10 w-80">
                      ¿Cómo esta información contribuye a definir las tareas de la brigada?
                    </div>
                  </div>
                  <div className="">
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 lhp-30 min-hp-200"
                    />
                  </div>
                </div>
                <img
                  src="images/page_036/img_002.png"
                  className="position-absolute top-0 start-50 msp--40 mtp--20"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* BEGIN PIE DE PAGINA */}
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
          {/* END PIE DE PAGINA */}
        </div>
      </div>
    </div>
  );
}

export default Page036;
