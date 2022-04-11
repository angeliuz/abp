import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_014.css";

function Page014(props) {
  const pagina = "014";
  const background = "bgc-bulma";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div
          className="page bgc-white overflow-hidden position-relative"
          id={"page_" + pagina}
        >
          <div className="cabecera-v1 hp-80 bgc-bulma"></div>
          <div className="psp-90 pep-60 ptp-30">
            <div className="f-Ubuntu-B color-bulma fsp-18 text-left">
              Valores y diversidad
            </div>
            <div className="d-flex">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-bulma">
                3
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-20 text-left">
                Leo la noticia de la revista y completo el crucigrama.
              </div>
              <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} colorUnidad={background} pagina={"62"} image={"images/page_" + pagina + "/img_001.png"} clasesImagen="hp-40 text-center mtp-10" className="p-0 px-0" />

            </div>
            <div className="d-flex pbp-20">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-bulma">
                4
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-left">
                Escribo ejemplos de acciones de respeto y tolerancia a la
                diversidad.
              </div>
            </div>
            <div className="bgc-woody p-2 rounded-p-10 position-relative">
              <div className="bgc-white rounded-p-10">
                <img
                  src="images/page_014/img_005.png"
                  className="mtp--31 hp-35"
                  alt=""
                />
                <img
                  src="images/page_014/img_005.png"
                  className="anillo-dos mtp--31 hp-35"
                  alt=""
                />
                <img
                  src="images/page_014/img_005.png"
                  className="anillo-tres mtp--31 hp-35"
                  alt=""
                />
                <div className="pbp-20 pep-15 psp-15">
                  <div className="f-pixilate-regular color-sektor fsp-19 text-left">
                    Respeto:
                  </div>
                  <div className="w-100 pbp-10">
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70"
                    />
                  </div>
                  <div className="f-pixilate-regular color-sektor fsp-19 text-left">
                    Tolerancia:
                  </div>
                  <div className="w-100 pbp-10">
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70"
                    />
                  </div>
                </div>
                <img
                  src="images/page_014/img_003.png"
                  className="position-absolute top-100 start-100 translate-middle hp-60 mtp--20 msp--20"
                  alt=""
                />
              </div>
            </div>
            <div className="row ptp-15">
              <div className="col-md-6 col-12 psp-20 pep-20 pbp-20">
                <div className="d-flex">
                  <img src={"images/page_" + pagina + "/img_004.svg"} className="wp-100 msp--50 pep-10 mtp--15" alt="" />
                  <div className="f-ccdigitaldelivery-bold fsp-35 color-bulma">
                    5
                  </div>
                  <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-left">
                    Creemos que cuando una persona siente que no se le respetan
                    ni toleran sus diferencias se siente...
                  </div>
                </div>
                <InputBox
                  id={"p" + pagina + "_input" + (indexInput += 1)}
                  className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120"
                />
              </div>
              <div className="col-md-6 position-relative pbp-20">
                <img
                  src="images/page_014/img_006.png"
                  className="position-absolute top-0 start-100 translate-middle mtp-30 msp--11 hp-25 "
                  alt=""
                />
                <div className="bloque-respuesta w-100 p-3 text-left bgc-yoru border-style-solid border-color-goku border-1 ">
                  <span>Por eso nosotros...</span>
                  <div className="z-index-2">
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150 "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex ptp-15">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-bulma">
                6
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-left">
                Creemos que en una fiesta de la diversidad encontramos...
              </div>
            </div>
            <InputBox
              id={"p" + pagina + "_input" + (indexInput += 1)}
              className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-160 "
            />
          </div>
          <div className="pbp-80"></div>

          <img
            src="images/page_014/img_002.png"
            className="tf-niña hp-80"
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
        </div>
      </div>
    </div>
  );
}

export default Page014;
