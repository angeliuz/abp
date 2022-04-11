import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_023.css";

function Page023(props) {

  const pagina = "023";
  var indexInput = 0;
  const etapa = "3"
  const background = "bgc-android18";
  const color = "color-android18";
  const borderColor = "border-color-android18"
  const borderColorTabla = "border-color-azuka"
  const bgc_cajas = "bgc-azuka";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v2 bgc-android18 d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className="caja-seccion wp-160 hp-70 text-center fsp-24 f-IntroRustG-Base color-dark">SESIÓN 4</div>
              <div className="d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Todos tenemos derechos</div>
            </div>
            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-90">
              <div className="p-2 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Mis objetivos en <br /> esta sesión son:
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_023/flecha.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Comprender que todas las<br /> personas tenemos derechos.
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_023/flecha1.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Identificar formas de <br /> discriminación y de resguardo <br />de los derechos.
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_023/flecha.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-3 align-self-center f-colby-compres-bold fsp-17 lh-sm text-center text-white">
                Diseñar un afiche que <br /> promueva que todos<br /> tenemos derechos.
              </div>
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}
          <div className="ptp-10 container-titulo-global mbp-20">
            <div className="d-flex">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_023/img_005.svg" alt="" />
              <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">1</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Leo los artículos de la Declaración Universal de Derechos Humanos y completo con mi equipo.</div>
              {/* <img src="images/page_023/img_003.svg" className="cambio hp-50 text-end mtp-0 psp-10 pep-40"  alt=""  /> */}
              {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image="images/page_023/img_003.svg" clasesImagen="hp-40 text-center mtp-15 msp--10" className="p-0 px-0" /> */}
              <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} colorUnidad={background} pagina={"84"} image={"images/page_" + pagina + "/img_003.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
            </div>
          </div>

          <div className="d-flex cb-contenido-cajas mbp-60">
            <div className="row">
              <div className="col-md-6 col-sm-6 position-relative">
                <div className="position-absolute top-100 start-0 translate-middle wp-100 mtp--30 visible-695"><img src="images/page_023/img_005.png" className="w-45" /></div>
                <div className="bgc-shogun cb-block w-100 p-2 f-Ubuntu-L fsp-13 mbp-20 cb-outline-2">
                  <div className="d-flex cb-interior-caja text-start min-hp-0">
                    <div className="bgc-saitama color-white f-Ubuntu-B fsp-15 hp-25 wp-25 rounded-3 d-flex justify-content-center align-items-center text-center msp--20 mep-10 mtp-5 zindex-1">a</div>
                    <div className="w-100">Los artículos que leí son importantes porque</div>
                  </div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-175" />
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="bgc-shogun cb-block w-100 p-2 f-Ubuntu-L fsp-13 mbp-20 cb-outline-2">
                  <div className="d-flex cb-interior-caja text-start min-hp-0">
                    <div className="bgc-saitama color-white f-Ubuntu-B fsp-15 hp-25 wp-25 rounded-3 d-flex justify-content-center align-items-center text-center msp--20 mep-10 mtp-5 zindex-1">b</div>
                    <div className="w-100">La idea central que proponen es que</div>
                  </div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-175" />
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="bgc-shogun cb-block w-100 p-2 f-Ubuntu-L fsp-13 mbp-20 cb-outline-2">
                  <div className="d-flex cb-interior-caja text-start min-hp-50">
                    <div className="bgc-saitama color-white f-Ubuntu-B fsp-15 hp-25 wp-25 rounded-3 d-flex justify-content-center align-items-center text-center msp--20 mep-10 mtp-5 zindex-1">c</div>
                    <div className="w-100">Los artículos señalan que no se pueden hacer distinciones por</div>
                  </div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-175" />
                </div>
              </div>
              <div className="col-md-6 col-sm-6 position-relative">
                <div className="position-absolute top-100 start-100 translate-middle wp-100 mtp--50 visible-695"><img src="images/page_023/img_006.png" className="w-25 mep-20" /></div>
                <div className="bgc-shogun cb-block w-100 p-2 f-Ubuntu-L fsp-13 mbp-20 cb-outline-2">
                  <div className="d-flex cb-interior-caja text-start min-hp-50">
                    <div className="bgc-saitama color-white f-Ubuntu-B fsp-15 hp-25 wp-25 rounded-3 d-flex justify-content-center align-items-center text-center msp--20 mep-10 mtp-5 zindex-1">d</div>
                    <div className="w-100">Pienso que la expresión “cualquier otra condición” podría hacer referencia a</div>
                  </div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-175" />
                </div>
              </div>
              <div className="col-md-6 col-sm-6 position-relative">
                <div className="position-absolute top-100 start-100 translate-middle wp-100 mtp--50 visible-695"><img src="images/page_023/img_007.png" className="w-45 mep-20" /></div>
                <div className="position-absolute top-50 start-100 translate-middle wp-100 visible-695"><img src="images/page_023/img_004.png" className=" msp-150" /></div>
                <div className="bgc-shogun cb-block w-100 p-2 f-Ubuntu-L fsp-13 mbp-20 cb-outline-2">
                  <div className="d-flex cb-interior-caja text-start min-hp-50">
                    <div className="bgc-saitama color-white f-Ubuntu-B fsp-15 hp-25 wp-25 rounded-3 d-flex justify-content-center align-items-center text-center msp--20 mep-10 mtp-5 zindex-1">e</div>
                    <div className="w-100">¿Por qué estos artículos son importantes para el desafío del proyecto?</div>
                  </div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-175" />
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

export default Page023;
