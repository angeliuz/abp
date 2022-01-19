import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import ModalBook from "../components/ModalBook";

import "./page_064.css";

function Page064(props) {

  const pagina = "064";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
              <div className="page cb-page66 bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
                {/* BEGIN CABECERA VERSIÓN 2 */}
                <div className="cabecera-v1 hp-80 bgc-saitama">
                </div>
                 {/* END CABECERA VERSIÓN 2 */}

                {/* contenido DE PAGINA */}
            

    
                {/* PIE DE PAGINA */}
                <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
                  <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
                    ABP &copy; SM
                  </div>
                  <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
                </div>
                <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{bottom:0}}>

                  <div className="col-1 position-relative col-sm-2 p-0 m-0">
                    <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
                      <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
                      <div className="w-100 hp-25 bgc-goten"></div>
                  </div>
                  <div className="col-1 position-relative col-sm-2 p-0 m-0">
                      <img src="images/rotulo_planificacion.svg" className="oculto" alt="" />
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
                  <div className="col-7 position-relative col-sm-2 p-0 m-0">
                    <img src="images/rotulo_creacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
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

export default Page064;
