import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import ModalBook from "../components/ModalBook";

import "./page_068.css";

function Page068(props) {

  const pagina = "068";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
              <div className="page cb-page68 bgc-white overflow-hidden position-relative cb-6" id={"page_"+pagina}>
                {/* contenido DE PAGINA */}
     <div className="border-style-solid border-color-trunks rounded-p-10 w-100 cb-600 mx-auto bgc-white text-center ptp-10 psp-20 pep-10 mtp-90 position-relative">
     <img src="images/page_068/img_001.svg" className="position-absolute wp-10 cb-union-a-p68" alt="" />
     <img src="images/page_068/img_001.svg" className="position-absolute wp-10 cb-union-b-p68" alt="" />
     <img src="images/page_068/img_002.png" className="position-absolute wp-80 cb-camara-p68" alt="" />
         <span className="f-Ubuntu-L fsp-15 fw-700">Las tres frases que identifican nuestra brigada son:</span>
         <div className="d-flex">
             <div className="justify-content-between h-100 ptp-20">
             <div className="hp-20 wp-20 bgc-ken justify-content-center align-items-center d-flex color-white fw-700 fsp-15 mbp-50">
                 1  
             </div>
             <div className="hp-20 wp-20 bgc-ken justify-content-center align-items-center d-flex color-white fw-700 fsp-15 mbp-50">
                 2 
             </div>
             <div className="hp-20 wp-20 bgc-ken justify-content-center align-items-center d-flex color-white fw-700 fsp-15">
                 3  
             </div>
             </div>
             <div className="psp-20 w-100">
         <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-230" />
         </div>
     </div>
     </div>

     <div className="border-style-solid border-color-voldemort rounded-p-10 bgc-white w-100 cb-600 text-start hp-190 ms-auto mtp-20 pep-10 psp-10 ptp-10 ptp-20 position-relative">
     <img src="images/page_068/img_001.svg" className="position-absolute wp-10 cb-union-a-p68" alt="" />
     <img src="images/page_068/img_001.svg" className="position-absolute wp-10 cb-union-b-p68" alt="" />
     <img src="images/page_068/img_004.png" className="position-absolute wp-70 cb-calendario-p68" alt="" />
     <img src="images/page_068/img_003.png" className="position-absolute wp-60 cb-celular-p68" alt="" />
     <span className="f-Ubuntu-L fsp-15 psp-20 fw-700">Nuestras expectativas antes dar a conocer la brigada son:</span>
     </div>

     <div className="mtp-55 f-pixilate-bold mbp-5 text-start">¿Cómo vamos?</div>
            <div className="cb-block2-p68 align-items-start justify-content-start position-relative p-2 f-Ubuntu-L bgc-white fsp-13 rounded-p-10 ps-4 pe-4 mbp-50"> 
                 <img src="images/page_068/img_005.png" className="position-absolute wp-120 cb-personaje-p68" alt="" />
                <div className="flex-wrap text-start">
                    <img src="images/page_068/flecha.svg" className="hp-10 pep-5 mtp-5"></img>
                        <span className="w-24 f-Ubuntu-L">Las fortalezas de nuestro equipo son:</span> 
                        <div className="pep-10 psp-10">
                        <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-130" />
                        </div>                                      
                    </div>    
                    <div className="flex-wrap text-start mtp-10">
                    <img src="images/page_068/flecha.svg" className="hp-10 pep-5 mtp-5"></img>
                        <span className="w-24 f-Ubuntu-L">Lo que deberíamos mejorar de nuestro trabajo en equipo es:</span> 
                        <div className="pep-10 psp-10">
                        <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-130" />
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
                 {/* FIN PIE DE PAGINA */}
              
            </div>
        </div>
    </div>
           


          
     
  );
}

export default Page068;
