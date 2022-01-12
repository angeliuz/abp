import React from "react";
import "./page_021.css";

function Page021(props) {
  const pagina = "021";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-10">
        <div
          className="page bgc-white overflow-hidden position-relative"
          id={"page_" + pagina}
        >
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-21">
            <div className="row m-0 ptp-20 psp-45 pep-45 pbp-5 centrar-21">
              <div className=" col-12 col-sm-auto fsp-24 f-IntroRustG-Base caja-21 color-balrog">
                SESIÓN 4
              </div>
              <div className="col-12 col-sm-auto fsp-24 f-Ubuntu-M color-white ptp-15 psp-15 text-center cambio-21 lh-sm">
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
