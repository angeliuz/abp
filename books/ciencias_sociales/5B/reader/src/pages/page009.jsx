import React from "react";
import InputBox from "../components/InputBox";

import "./page_009.css";

function Page009() {

  const pagina = "009";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
        <div className="d-flex flex-column align-items-center pbp-20">
            <div className="page cb-page9 overflow-hidden position-relative" id="page_09">

            <div className="mtp-60 ">
                <div className="d-flex justify-content-center">
                    <img src="images/page_009/fondo_002.svg" className="cb-dosier" alt="" />

                </div>
                    <div className="cb-block-arriba mtp-40 f-Ubuntu-L mbp-5 psp-20 fw-700 fsp-13">Esta página ha sido completada por</div>
                    <div className="cb-block-inicial p-2 pb-3 mbp-30">
                      <div className="px-3">
                      <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-0 px-1 text-start flex-grow-1  lhp-35" />
                      </div>
                        <img src="images/page_009/img_002.png" className="cb-compu" width="120px" alt="" />
                        <img src="images/page_009/img_001.png" className="cb-globo" height="100px" alt="" />
                    </div>
                <div className="cb-block-superior p-3 pb-4 f-Ubuntu-L fsp-15 text-center fw-700 ">

                    <span>Nuestro equipo lo formamos...</span>
                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                </div>
                <div className="cb-block-superior p-3 pb-4 f-Ubuntu-L fsp-15 mtp-30 mbp-30 text-center fw-700 ">
                    <img src="images/page_009/img_003.png" className="cb-nota" alt="" />
                    <img src="images/page_009/img_004.png" className="cb-cine" alt="" />
                    <span>En el proyecto nos comprometemos a...</span>
                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="px-3 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                </div>
                <div className="cb-block-superior p-3 pb-1 f-Ubuntu-L fsp-15 mtp-30 mbp-30 text-center fw-700 ">
                    <img src="images/page_009/img_006.png" className="cb-flechab" alt="" />
                    <img src="images/page_009/img_009.png" className="cb-flechaa" alt="" />
                    <img src="images/page_009/img_007.png" className="cb-submarino" alt="" />
                    <img src="images/page_009/img_008.png" className="cb-binoculares" height="70px" alt="" />
                    <span>Y aquí reflejamos el compromiso con nuestras firmas</span>
                    <div className="cb-firmas mbp-30">
                      <div className="cb-column-line" >
                        <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110 fsp-12" />
                      </div>
                      <div className="cb-column-line msp-15 mep-15">
                        <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110 fsp-12" />
                      </div>
                      <div className="cb-column-line">
                        <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110 fsp-12" />
                      </div>
                    </div>
                </div>
                {/* Begin pie de página */}
                <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
                <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "white" }}>
                  ABP &copy; SM
                </div>
                <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">9</div>
              </div>
              {/* End pie de página */}
            

            </div>
          </div>
      </div>
                

    </div>
  );
}

export default Page009;
