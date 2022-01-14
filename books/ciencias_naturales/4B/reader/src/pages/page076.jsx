import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import ModalBook from "../components/ModalBook";

import "./page_076.css";

function Page076(props) {

  const pagina = "076";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
              <div className="page cb-page76 bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
                {/* contenido DE PAGINA */}
                <div className="cb-contenedor-ejercicio-1-p76 pep-10 psp-10 ptp-5 pbp-30 mtp-80">
                <div className="cb-border-b-p76 mtp-20 mbp-30">
                    <p className="cb-texto-final-p76 f-Ubuntu-L fsp-15 mbp-10 text-start"> Ponernos de acuerdo ha sido:</p>
                    <div className="d-flex">
                    <div className="cb-lado-a-p76">
                        <div className="cb-izq-p76 w-100 d-flex">
                        <div className="cb-box-p76"></div>
                    </div>
                    <div className="pep-10 psp-10">
                        <div className="text-center ptp-10 pbp-10 f-pixilate-regular fsp-15">Muy bien</div>
                        <img src="images/page_076/img_005.svg" className="pbp-10" alt=""></img>
                    </div>
                    </div>
                    <div className="cb-lado-a-p76">
                        <div className="cb-izq-p76 w-100 d-flex ">
                        <div className="cb-box-p76"></div>
                    </div>
                    <div className="pep-10 psp-10">
                        <div className="text-center ptp-10 pbp-10 f-pixilate-regular fsp-15">Bien</div>
                        <img src="images/page_076/img_006.svg" className="pbp-10" alt=""></img>
                    </div>
                </div>
                    <div className="cb-lado-a-p76">
                        <div className="cb-izq-p76 w-100 d-flex ">
                        <div className="cb-box-p76"></div>
                    </div>
                    <div className="pep-10 psp-10">
                        <div className="text-center ptp-10 pbp-10 f-pixilate-regular fsp-15">Regular</div>
                        <img src="images/page_076/img_007.svg" className="pbp-10" alt=""></img>
                    </div>
                </div>
                <div className="cb-lado-a-p76">
                    <div className="cb-izq-p76 w-100 d-flex ">
                    <div className="cb-box-p76"></div>
                </div>
                <div className="pep-10 psp-10">
                    <div className="text-center ptp-10 pbp-10 f-pixilate-regular fsp-15">Tenemos que mejorar</div>
                    <img src="images/page_076/img_008.svg" className="pbp-10" alt=""></img>
                </div>
                </div>
             </div>
         </div>
         {/* fin caritas */}
         <div className="pep-10 psp-10">
         <div className="text-start ptp-10 pbp-10 f-Ubuntu-L fsp-15">porque:</div>
            <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
            <div className="text-start ptp-10 pbp-10 f-Ubuntu-L fsp-15">Para ponernos de acuerdo tuvimos que:</div>
            <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
            </div>
        </div>
        {/* FIN EJERCICIO 1*/}
        <div className="cb-ejercicio-final-p76 d-flex mtp-20">
            <div className="cb-ejercicio-cajas-p76">
                <div className="bgc-birdie pep-10 psp-10 ptp-10 cb-border-a-p76 mbp-10">
                <div className="color-white f-Ubuntu-L fsp-15 fw-700 text-start"> Si volviésemos a empezar, volveríamos a...</div>
                    <div className="bgc-white cb-border-5p-p76 psp-20 pep-15 pbp-10 ">
                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170" />
                    </div>
                </div>
                <div className="bgc-ken pep-10 psp-10 ptp-10 cb-border-a-p76">
                <div className="color-white f-Ubuntu-L fsp-15 fw-700 text-start"> Si volviésemos a empezar, mejoraríamos en....</div>
                    <div className="bgc-white cb-border-5p-p76 psp-20 pep-15 pbp-10 ">
                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170" />
                    </div>
                </div>
            </div>
            <div className="cb-ejercicio-cajas-p76">personaje</div>
        </div>
        
              
                

                {/* PIE DE PAGINA */}
                <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
                  <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
                    ABP &copy; SM
                  </div>
                  <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
                </div>
                 {/* FIN PIE DE PAGINA */}
              
            </div>
        </div>
    </div>
           


          
     
  );
}

export default Page076;
