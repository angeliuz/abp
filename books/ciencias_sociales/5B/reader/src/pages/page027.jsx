import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_027.css";

function Page027(props) {

  const pagina = "027";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v2 bgc-android18 d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className="caja-seccion wp-160 hp-70 text-center fsp-24 f-IntroRustG-Base color-dark">SESIÓN 5</div>
              <div className="d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Las actitudes y los derechos</div>
            </div>
            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-90">
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Mis objetivos en <br /> esta sesión son:
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_023/flecha.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Identificar diferentes<br /> puntos de vista en<br /> situaciones de conflicto.
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_023/flecha1.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Identificar actitudes y<br /> deberes que aportan al<br /> respeto de los derechos.
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_023/flecha.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-3 align-self-center f-colby-compres-bold fsp-15 lh-sm text-center text-white">
                Comprometerse con que nuestro<br /> trabajo en la revista sea<br /> respetuoso de los derechos.
              </div>
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}
          <div className="ptp-10 container-titulo-global mbp-20">
            <div className="d-flex">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">1</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Pienso en la situación planteada en el esquema y completo.</div>
            </div>
          </div>


          <div className="row container-row mtp-10 p-0 mx-4">

            <div className="col-md-12 col-lg-12 d-flex position-relative mtp-10 justify-content-center mbp-20">
              <div className="border-style-solid border-3 border-color-srtoro rounded-p-10 w-80">
                <div className="f-colby-compres-medium fsp-25 mbp-10 text-center">Situación:</div>
                <div className="mtp-10 mbp-10 text-center f-Ubuntu-R ">Estudiante insulta a un compañero o una compañera.</div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 mtp-20 position-relative">

              <div className="position-absolute top-0 start-50 translate-middle visible-768"><img src="images/page_027/img_003.svg" className="w-35 " alt="" /></div>

              <div className="mbp-20 mtp-10 w-100">
                <div className="w-100 bgc-trunks p-2 rounded-p-20 min-hp-500">
                  <div className="p-2 bgc-freezer rounded-p-10 min-hp-95">
                    <div className="f-colby-compres-medium fsp-20 text-center">¿Qué piensa?</div>
                    <div className="f-Ubuntu-L fsp-15 text-center">El o la estudiante al que insultan.</div>
                  </div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-390" />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 mtp-20  position-relative">

              <div className="position-absolute top-0 start-50 translate-middle visible-768"><img src="images/page_027/img_004.svg" className="w-35 " alt="" /></div>
              <div className="position-absolute top-100 start-50 translate-middle visible-768 mtp--80"><img src="images/page_027/img_006.png" className="w-85 " alt="" /></div>

              <div className="mbp-20 mtp-10 w-100 ">
                <div className="w-100 bgc-azuka p-2 rounded-p-20 min-hp-500">
                  <div className="p-2 bgc-milk rounded-p-10 min-hp-95">
                    <div className="f-colby-compres-medium fsp-20 text-center">¿Qué piensa?</div>
                    <div className="f-Ubuntu-L fsp-15 text-center">El o la estudiante que ve que insultan a otro.</div>
                  </div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-390" />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 mtp-20  position-relative mbp-70">

              <div className="position-absolute top-0 start-50 translate-middle visible-768"><img src="images/page_027/img_005.svg" className="w-35 " alt="" /></div>

              <div className="mbp-20 mtp-10 w-100 ">
                <div className="w-100 bgc-windu p-2 rounded-p-20 min-hp-500">
                  <div className="p-2 bgc-ash rounded-p-10 min-hp-95">
                    <div className="f-colby-compres-medium fsp-20 text-center">¿Qué piensa?</div>
                    <div className="f-Ubuntu-L fsp-15 text-center">El o la estudiante que insulta.</div>
                  </div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-390" />
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

export default Page027;
