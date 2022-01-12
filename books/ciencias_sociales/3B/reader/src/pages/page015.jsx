import React from "react";
import InputBox from "../components/InputBox";

import "./page_015.css";

function Page015(props) {
  const pagina = "015";
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
                SESIÓN 3
              </div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">
                ¡Este es nuestro plan!
              </div>
            </div>
          </div>
          {/* END CABECERA */}

          <div className="psp-80 pep-60 ptp-30">
            <div className="f-Ubuntu-B color-bulma fsp-18 text-left">
              ¡Los pasos que vamos a seguir!
            </div>
            <div className="text-left col-9">
              Ahora que ya nos motivamos conociendo el desafío de este proyecto,
              organizamos las siguientes etapas.
            </div>
            <div className="d-flex">
                  <img
                    src="/images/page_015/img_002.svg"
                    className="pep-10 msp--40"
                    alt=""
                  />
                  <div className="f-ccdigitaldelivery-bold fsp-35 color-bulma">
                    1
                  </div>
                  <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-left">
                  Vemos el video y rotulamos los siguientes momentos según corresponda.
                  </div>
                  <img
                    src="/images/page_015/img_003.png"
                    className="hp-45 mtp-10 msp-10"
                    alt=""
                  />
                </div>
                <div className="d-flex justify-content-between ptp-15">
                  <div className="py-2 px-3 bgc-woody rounded-p-10">Experimentación</div>
                  <div className="py-2 px-3 bgc-guile rounded-p-10">Difusión</div>
                  <div className="py-2 px-3 bgc-gohan rounded-p-10">Investigación</div>
                  <div className="py-2 px-3 bgc-quigon rounded-p-10">Creación</div>
                  <div className="py-2 px-3 bgc-goro rounded-p-10">Planificación</div>
                </div>
                <div className="bgc-red p-2 d-flex">
                  <div className="h-100 wp-200">

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
        </div>
      </div>
    </div>
  );
}

export default Page015;
