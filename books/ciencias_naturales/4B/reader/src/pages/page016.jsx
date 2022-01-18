import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_016.css";

function Page016(props) {
  const pagina = "016";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div
          className="page bgc-white overflow-hidden position-relative"
          id={"page_" + pagina}
        >
          <div className="cabecera-v1 hp-80 bgc-bulma "></div>
          <div className="psp-60 pep-60 ptp-30 pbp-80 text-start">
            <div className="f-Ubuntu-B color-bulma fsp-18 text-left">
              ¿Qué necesito saber acerca del desafío?
            </div>
            <div className="d-flex">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-bulma">
                2
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-left">
                Observo y respondo.
              </div>
            </div>
            <div className="ps-8-r pe-8-r">
              <div className="w-100 sombra p-2 centrar-hor mtp-30">
                <img
                  src="images/page_016/img_001.jpg"
                  className="w-100"
                  alt=""
                />
                <div className="d-flex psp-30 mtp--15">
                  <div className="flecha-bulma-arriba"></div>
                  <div className="psp-20 mtp--5">
                    {" "}
                    Casas destruidas por el terremoto del 27 de febrero de 2010.
                  </div>
                </div>
              </div>
              <div className="w-100 sombra p-2 centrar-hor mtp-30">
                <img
                  src="images/page_016/img_002.jpg"
                  className="w-100"
                  alt=""
                />
                <div className="d-flex psp-30 mtp--15">
                  <div className="flecha-bulma-arriba"></div>
                  <div className="psp-20 mtp--5">
                    {" "}
                    Casas bajo ceniza volcánica en Chaitén, 2008.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src="images/page_016/img_003.png"
            className="position-absolute top-50 start-0 hp-160 msp-40 mtp-180"
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

export default Page016;
