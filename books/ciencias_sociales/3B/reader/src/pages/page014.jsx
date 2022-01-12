import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_014.css";

function Page014(props) {
  const pagina = "014";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div
          className="page bgc-white overflow-hidden position-relative"
          id={"page_" + pagina}
        >
          <div className="cabecera-v1 hp-80 bgc-bulma"></div>
          <div className="psp-60 pep-60 ptp-30">
            <div className="f-Ubuntu-B color-bulma fsp-18 text-left">
              Valores y diversidad
            </div>
            <div className="d-flex">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-bulma">
                3
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-left">
                Leo la noticia de la revista y completo el crucigrama.
              </div>
              <img
                src="/images/page_014/img_001.png"
                className="hp-40 mtp-10 msp-15"
                alt=""
              />
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
            <div className="bgc-woody p-2 rounded-p-10 ">
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
              </div>
            </div>
            <div className="row ptp-15">
              <div className="col-md-6 col-12 bgc-red psp-20 pep-20">
                <div className="d-flex">
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
              <div className="col-md-6">
                <div className="mbp--220">
                  <img
                    src="images/page_014/fondo_002.png"
                    className="hp-220 z-index-n2"
                    alt=""
                  />
                </div>
                <div className="p-3 text-left bgc-aqua">
                  <span>Por eso nosotros...</span>
                  <div className="z-index-2">
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120 "
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
              className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page014;
