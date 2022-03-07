import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_026.css";

function Page026(props) {
  const pagina = "026";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div
          className="page bgc-white overflow-hidden position-relative"
          id={"page_" + pagina}
        >
          <div className="cabecera-v1 hp-80 bgc-android18"></div>
          <div className="psp-40 ptp-20 pep-40 pbp-80">
            <div className="d-flex">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">
                2
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Los derechos de la niñez que respetan y toleran la diversidad
                son...
              </div>
            </div>
            <div className="bgc-marronclaro p-2 position-relative">
              <img
                src="images/page_026/img_001.png"
                className="position-absolute translate-middle top-0 start-100 msp--30"
                alt=""
              />
              <img
                src="images/page_026/img_005.png"
                className="position-absolute translate-middle top-100 start-100 mtp--50 msp--10"
                alt=""
              />
              <div className="lines-a ajuste-lineas">
                <div className="lines-b p-2">
                  <div className="bgc-white rounded-p-20x p-2">
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-180"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex ptp-20 pbp-20">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">
                3
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Completo.
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-12 position-relative">
                <img
                  src="images/page_026/img_003.png"
                  className="position-absolute translate-middle top-0 start-0 msp-30 mtp-30"
                  alt=""
                />
                <img
                  src="images/page_026/img_004.png"
                  className="position-absolute h-80 top-0 start-100 msp--15 mtp-60 hidden-res"
                  alt=""
                />
                <img
                  src="images/page_026/img_004_2.png"
                  className="position-absolute h-20 top-100 start-50 mtp--5 msp--220 visible-res"
                  alt=""
                />
                <div className="position-absolute top-100 start-50 mtp-10 msp--90 visible-res">
                  <div className="bgc-white border-style-solid border-2 color-verder-26 rounded-p-10 p-1 f-pixilate-bold fsp-18 color-android18">
                    Para qué puedo utilizar
                  </div>
                </div>
                <div className="pbp-20 px-3 border-style-solid border-2 color-verder-26 rounded-p-20 ">
                  <div className="f-pixilate-bold fsp-18 ptp-10">
                    ¿Qué estoy aprendiendo?
                  </div>
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-420-r"
                  />
                </div>
              </div>
              <div className="col-md-1 col-12 espacio-esquema"></div>
              <div className="col-md-5 col-12 display-responsive msp--8">
                <div className="f-pixilate-bold fsp-18 color-android18 text-left position-absolute mtp--20 hidden-res">
                  Para qué puedo utilizar
                </div>

                <div className="col-md-12 col-4 espaciado">
                  <div className="px-3 border-style-solid border-2 color-verder-26 rounded-p-20">
                    <div className="f-pixilate-bold fsp-16 ptp-15">
                      En la casa
                    </div>
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120"
                    />
                  </div>
                </div>

                <div className="col-md-12 col-4 espaciado">
                  <div className="px-3 border-style-solid border-2 color-verder-26 rounded-p-20">
                    <div className="f-pixilate-bold fsp-16 ptp-15">
                      Con los amigos
                    </div>
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120"
                    />
                  </div>
                </div>

                <div className="col-md-12 col-4 espaciado">
                  <div className="px-3 border-style-solid border-2 color-verder-26 rounded-p-20">
                    <div className="f-pixilate-bold fsp-16 ptp-15">
                      En la Fiesta de la Diversidad
                    </div>
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120"
                    />
                  </div>
                </div>
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

export default Page026;
