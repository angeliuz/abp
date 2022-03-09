import React from "react";
import InputBox from "../components/InputBox";

import "./page_013.css";

function Page013(props) {

  const pagina = "013";
  var indexInput = 0;

  return (

    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v2 bgc-bulma d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className="caja wp-150 text-center fsp-24 f-IntroRustG-Base">SESIÓN 2</div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">¿Qué sé y qué necesito saber?</div>
            </div>
            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-90">
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Mis objetivos en <br /> esta sesión son:
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_007/img_001.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Compartir lo que sé sobre <br /> los derechos y los deberes<br /> que estos generan.
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_007/img_003.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Compartir lo que sé <br /> acerca de las revistas.
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_007/img_001.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-3 align-self-center f-colby-compres-bold fsp-15 lh-sm text-center text-white">
                Reflexionar sobre lo que sé <br /> y lo que necesitamos saber <br /> para el proyecto.
              </div>
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}


          <div className="ptp-10 psp-0">
            <div className="d-flex">
              <img className="hp-20 align-center mt-3 me-2 ps-4 mb-2" src="images/page_013/img_002.svg" alt="" />
              <div className="f-ccdigitaldelivery-bold fsp-35 color-bulma">1</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start">Ejemplifico cómo se reflejan en mi entorno los siguientes principios.</div>
              <img src="images/page_013/img_003.png" className="tf-lapiz cambio hp-80 text-end mtp-0 psp-10 pep-40" alt="" />

            </div>
          </div>
          <div className="d-flex justify-content-center max-img psp-90 pep-70">
            <div className="p-0 w-100">
              <div className="p-3 f-Ubuntu-L mtp-20 border-color-lightDark border-style-solid border-2 rounded-p-10 text-start">
                <span>Las personas tenemos derechos.
                  <div className="w-100 d-flex justify-content-start align-content-center text-left f-Ubuntu-L fsp-14 fw-500 color-dark">
                    <div className="w-100 pbp-10">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center max-img mtp-10 psp-90 pep-70">
            <div className="p-0 w-100">
              <div className="tf-hojaamarilla-content">
                <img src="images/page_013/img_001.png" className="tf-hojaamarilla hojaamarilla_rotate cambio hp-70 text-end mtp-0 psp-10 pep-40" alt="" />
              </div>
              <div className="p-3 f-Ubuntu-L border-style-solid border-2 rounded-p-10 border-color-lightDark text-start">
                <span>Los derechos generan deberes en las personas.
                  <div className="w-100 d-flex justify-content-start align-content-center text-left f-Ubuntu-L fsp-14 fw-300 color-dark">
                    <div className="w-100 pbp-10">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center max-img mtp-10 psp-90 pep-70">
            <div className="p-0 w-100">
              <div className="p-3 f-Ubuntu-L border-style-solid border-2 rounded-p-10 border-color-lightDark text-start">
                <span>Los derechos generan deberes en el Estado.
                  <div className="w-100 d-flex justify-content-start align-content-center text-left f-Ubuntu-L fsp-14 fw-500 color-dark">
                    <div className="w-100 pbp-10">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>



          <div className="col-12 max-img mtp-10 psp-90 pep-70 pbp-80 ">

            <div className="tf-hojaamarilla-content">
              <img src="images/page_013/img_005.png" className="tf-cantante cambio text-start mtp-0 psp-10 pep-40" alt="" />
            </div>

            <div className="row d-flex p-2 min-h-100 rounded-p-10 border-color-draco bgc-draco">
              <div className="color-dark f-Ubuntu-L ptp-10 text-start">Comparto las respuestas con mi grupo y completo:</div>
              <div className="col-lg-6 col-md-6 col-sm-12 pt-2">
                <div className="d-flex flex-column f-Ubuntu-L bgc-white psp-20 ptp-10 pbp-15 pep-20 rounded-p-10 text-center">
                  <span>¿Qué principio ejemplificamos
                    de mejor manera?</span>
                  <div className="w-100 pbp-10">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-2 fsp-12 text-start flex-grow-1 lhp-25 min-hp-95" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 pt-2">

                <div className="d-flex flex-column f-Ubuntu-L bgc-white psp-20 ptp-10 pbp-15 pep-20 rounded-p-10 text-center">
                  <span>¿Qué principio nos costó ejemplificar o generó más dudas?</span>
                  <div className="w-100 pbp-10">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-2 fsp-12 text-start flex-grow-1 lhp-25 min-hp-95" />
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
              ABP &copy; SM
            </div>
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>
          <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>

            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-7 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_planificacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
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

export default Page013;
