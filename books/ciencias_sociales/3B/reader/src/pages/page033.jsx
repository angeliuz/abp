import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_033.css";

function Page033(props) {

  const pagina = "033";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v2 bgc-android18 d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className="caja wp-150 text-center fsp-24 f-IntroRustG-Base">SESIÓN 7</div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Indagamos sobre la situación de los derechos en Chile</div>
            </div>
            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-90">
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Mis objetivos en <br /> esta sesión son:
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_023/flecha.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
              Seleccionar sobre qué grupo de<br /> la población investigaré.
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_023/flecha1.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
              Acordar de qué forma <br/>investigaremos.
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_023/flecha.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-3 align-self-center f-colby-compres-bold fsp-15 lh-sm text-center text-white">
              Investigar la situación<br/> de los derechos de un<br/> grupo de personas en Chile.
              </div>
            </div>
          </div> 
          {/* END CABECERA VERSIÓN 2 */}
          <div className="ptp-10 container-titulo-global mbp-20">
            <div className="d-flex">
                <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_033/img_002.svg" alt=""  />
                <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">1</div>
                <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Leo los grupos propuestos y pienso en cuáles me gustaría investigar. Luego, asignamos uno a cada integrante del equipo. Marco con un  el grupo que me corresponde investigar.</div>
                {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_031/img_002.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

        
        <div className="row mx-4 position-relative">

          <div className="col-sm-12 col-md-6 position-relative">
            {/* <div className="flecha position-absolute"><img src="images/page_031/img_003.svg" className="w-45 " alt=""/></div> */}
            <div className="position-absolute top-0 start-100 translate-middle zindex-1 min-hp-40 min-wp-50 bgc-white border-style-solid border-1 border-color-dark wp-40 mtp-50 msp--30">

            </div>
            <div className="mbp-20 mtp-10 px-3">
                <div className="position-relative d-flex align-items-center justify-content-center bgc-genos min-hp-130 p-2 rounded-p-10 ">
                    <div className="text-center f-Ubuntu-R">Niños, niñas y adolescentes</div>
                </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 position-relative">
            {/* <div className="flecha position-absolute"><img src="images/page_031/img_003.svg" className="w-45 " alt=""/></div> */}
            <div className="position-absolute top-0 start-100 translate-middle zindex-1 min-hp-40 min-wp-50 bgc-white border-style-solid border-1 border-color-dark wp-40 mtp-50 msp--30">

            </div>
            <div className="mbp-20 mtp-10 px-3">
                <div className="position-relative d-flex align-items-center justify-content-center bgc-azuka min-hp-130 p-2 rounded-p-10 ">
                    <div className="text-center f-Ubuntu-R">Adultos mayores</div>
                </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 position-relative">
            {/* <div className="flecha position-absolute"><img src="images/page_031/img_003.svg" className="w-45 " alt=""/></div> */}
            <div className="position-absolute top-0 start-100 translate-middle zindex-1 min-hp-40 min-wp-50 bgc-white border-style-solid border-1 border-color-dark wp-40 mtp-50 msp--30">

            </div>
            <div className="mbp-20 mtp-10 px-3">
                <div className="position-relative d-flex align-items-center justify-content-center bgc-woody min-hp-130 p-2 rounded-p-10 ">
                    <div className="text-center f-Ubuntu-R">Migrantes</div>
                </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 position-relative">
            {/* <div className="flecha position-absolute"><img src="images/page_031/img_003.svg" className="w-45 " alt=""/></div> */}
            <div className="position-absolute top-0 start-100 translate-middle zindex-1 min-hp-40 min-wp-50 bgc-white border-style-solid border-1 border-color-dark wp-40 mtp-50 msp--30">

            </div>
            <div className="mbp-20 mtp-10 px-3">
                <div className="position-relative d-flex align-items-center justify-content-center bgc-klee min-hp-130 p-2 rounded-p-10 ">
                    <div className="text-center f-Ubuntu-R">Mujeres</div>
                </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 position-relative">
            {/* <div className="flecha position-absolute"><img src="images/page_031/img_003.svg" className="w-45 " alt=""/></div> */}
            <div className="position-absolute top-0 start-100 translate-middle zindex-1 min-hp-40 min-wp-50 bgc-white border-style-solid border-1 border-color-dark wp-40 mtp-50 msp--30">

            </div>
            <div className="mbp-20 mtp-10 px-3">
                <div className="position-relative d-flex flex-column align-items-center justify-content-center bgc-honda min-hp-130 p-2 rounded-p-10 w-100">
                    <div className="text-center f-Ubuntu-R">Otro</div>
                    <div className="w-100 bgc-white rounded-p-10 p-2">
                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70 w-100 bgc-white" />
                    </div>
                </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 position-relative">
            {/* <div className="flecha position-absolute"><img src="images/page_031/img_003.svg" className="w-45 " alt=""/></div> */}
            <div className="position-absolute top-0 start-100 translate-middle zindex-1 min-hp-40 min-wp-50 bgc-white border-style-solid border-1 border-color-dark wp-40 mtp-50 msp--30">

            </div>
            <div className="mbp-20 mtp-10 px-3">
                <div className="position-relative d-flex align-items-center justify-content-center bgc-buzz min-hp-130 p-2 rounded-p-10 ">
                    <div className="text-center f-Ubuntu-R">Pueblos originarios</div>
                </div>
            </div>
          </div>

      
        </div>   

        <div className="ptp-10 container-titulo-global mbp-70">
                <div className="d-flex w-flex justify-content-center">
                    <img className="" src="images/page_033/img_002.png" alt=""  />
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
            {/* PIE DE PAGINA */}
        </div>
      </div>
    </div>
  );
}

export default Page033;
