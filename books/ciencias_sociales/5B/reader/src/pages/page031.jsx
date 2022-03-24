import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_031.css";

function Page031(props) {

  const pagina = "031";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v2 bgc-android18 d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className="caja-seccion wp-160 hp-70 text-center fsp-24 f-IntroRustG-Base">SESIÓN 6</div>
              <div className="d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Los derechos generan deberes en el Estado</div>
            </div>
            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-90">
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Mis objetivos en <br /> esta sesión son:
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_023/flecha.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Comprender qué es<br /> el Estado.
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_023/flecha1.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Analizar deberes del Estado en <br /> relación con los derechos.
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_023/flecha.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-3 align-self-center f-colby-compres-bold fsp-15 lh-sm text-center text-white">
                Seleccionar noticias <br /> para la revista.
              </div>
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}
          <div className="ptp-10 container-titulo-global mbp-20">
            <div className="d-flex">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">1</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Leo la historia y respondo las preguntas en torno al Estado.</div>
              {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image="images/page_031/img_002.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
              <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} colorUnidad={background} pagina={"87"} image={"images/page_" + pagina + "/img_002.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
            </div>
          </div>

          <div className="cajaEstado  justify-content-center f-colby-compres-medium fsp-30">
            <div className="border border-3 rounded-p-10 w-100 mx-4 p-1">
              El Estado
            </div>
          </div>
          <div className="circuloEstado position-absolute top-50 start-50 translate-middle fsp-16 f-Ubuntu-R mtp--50 zindex-1 "><div className="f-colby-compres-medium fsp-30">El Estado</div></div>

          <div className="row mx-4 position-relative">

            <div className="col-sm-12 col-md-6 position-relative">
              {/* <div className="flecha position-absolute"><img src="images/page_031/img_003.svg" className="w-45 " alt=""/></div> */}
              <div className="position-absolute translate-middle flecha-23-1 zindex-1"><img src="images/page_031/img_003.svg" className="wp-45 rotacion-768-90" alt="" /></div>
              <div className="mbp-20 mtp-10 ">
                <div className=" position-relative bgc-genos min-hp-200 p-2 rounded-p-10 ">
                  <div className="text-center">¿Para qué sirve?</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-175" />
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 position-relative">
              {/* <div className="flecha1 position-absolute"><img src="images/page_031/img_004.svg" className="w-45 " alt=""/></div> */}
              <div className="position-absolute top-100 start-50 translate-middle flecha-23-2 zindex-1"><img src="images/page_031/img_004.svg" className="wp-45 " alt="" /></div>
              <div className="mbp-20 mtp-10">
                <div className="bgc-piccolo  min-hp-200 p-2  rounded-p-10 ">
                  <div className="text-center">
                    ¿Qué elementos tiene y para qué?
                  </div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-175" />
                </div>
              </div>
            </div>

            <div className="row p-0 m-0">

              <div className="col-sm-12 col-md-6 order-md-first order-sm-last">
                {/* <div className="flecha2 position-absolute"><img src="images/page_031/img_005.svg" className="w-45 " alt=""/></div> */}
                <div className="mbp-20 mtp-10 ">
                  <div className="position-relative bgc-trunks  min-hp-200 p-2 rounded-p-10 ">
                    <div className="msp-10 text-center">
                      ¿Qué característica es más<br /> creativa y por qué?
                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-175" />
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 position-relative">
                <div className="position-absolute translate-middle flecha-23-3 zindex-1"><img src="images/page_031/img_005.svg" className="wp-45 rotacion-768--90" alt="" /></div>
                <div className="mbp-20 mtp-10 ">
                  <div className="position-relative bgc-windu min-hp-200 p-2 border rounded-p-10">
                    <div className="text-center">
                      ¿Quién o quiénes<br /> pueden utilizarlo?
                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-175" />
                  </div>
                </div>
              </div>

            </div>

          </div>

          <div className="ptp-10 container-titulo-global mbp-20">
            <div className="d-flex">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_031/img_001.svg" alt="" />
              <div className="f-Ubuntu-R fsp-16 ptp-15 psp-10 pep-10 text-start">Comparto mis respuestas con las de mi grupo y completo:</div>

            </div>
          </div>
          <div className="row p-0 mbp-70">
            <div className="col-sm-12 position-relative">
              <div className="position-absolute top-0 start-100 translate-middle msp--100 mtp--10 visible-768 zindex-1"><img src="images/page_031/img_006.png" className="wp-80" alt="" /></div>
              <div className="d-flex flex-wrap justify-content-center w-100 h-100  psp-60 pep-60">
                <div className="bgc-shogun cb-block w-100 p-2 f-Ubuntu-L fsp-15 mbp-20 cb-outline-2">
                  <p className="cb-interior-caja text-center">¿Qué es el Estado?</p>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170" />
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
          <div className="row w-100 position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_planificacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-7 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_investigacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
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

export default Page031;
