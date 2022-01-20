import React from "react";
import InputBox from "../components/InputBox";

import "./page_010.css";

function Page010(props) {

  const pagina = "010";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
          <div className="page cb-page10 overflow-hidden position-relative" id={"page_"+pagina}>

            <div className="mtp-75 ">
                <div className="d-flex justify-content-center">
                <div className="cb-titulo-aceptamos text-center fsp-25 f-IntroRustG-Base mbp-20">ACEPTAMOS EL DESAFÍO</div>
            </div>
            <div className="cb-block-inicial-2 p-2 pb-3 mbp-10">
              <div className=" f-Ubuntu-L mbp-5 psp-20 fw-700 fsp-13 text-start">Este es el nombre de nuestra revista:</div>
              <div className="px-3">
                <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-150" />
              </div>
              <img src="images/page_010/img_001.png" className="cb-lapiz" alt="" />
              <img src="images/page_010/img_002.png" className="cb-globo" width="130px" alt="" />
              <img src="images/page_010/img_005.png" className="cb-binoculares-10 " alt="" />
              <img src="images/page_010/img_003.png" className="cb-nota" alt="" />
            </div>

            <div className="w-100 cb-inicio d-flex text-center align-items-center justify-content-center">
                <div className="cb-block-superior-2 p-2 pb-2 text-center ">
                  <div className="cb-bloque-0 bgc-white p-2 pb-2 f-Ubuntu-B fw-700 fsp-15">Características de un buen nombre</div>
                  <div className="cb-bloque-1 text-center bgc-white p-2 pb-2 f-Ubuntu-L fw-700 fsp-13"> Es atractivo. Será su firma y la primera impresión que dará.</div>
                  <div className="cb-bloque-2 text-center bgc-white p-2 pb-2 f-Ubuntu-L fw-700 fsp-13"> Representa a todos los miembros del equipo.</div>
                  <div className="cb-bloque-3 text-center bgc-white p-2 pb-2 f-Ubuntu-L fw-700 fsp-13"> Tiene un significado especial para ustedes.</div>
                  <div className="cb-bloque-4 text-center bgc-white p-2 pb-2 f-Ubuntu-L fw-700 fsp-13"> Es original. ¡Que no se le pueda ocurrir a cualquiera!</div>
                  <div className="cb-bloque-5 text-center bgc-white p-2 pb-2 f-Ubuntu-L fw-700 fsp-13"> Es sencillo de escribir y de pronunciar.</div>
                  <div className="cb-bloque-6 text-center bgc-white p-2 pb-2 f-Ubuntu-L fw-700 fsp-13"> No es demasiado largo. Debe reproducirse en muchos lugares.</div>
              </div>
            </div>
            <div className="pbp-90 psp-90 pep-90 position-relative">
              <div className="block-bottom mtp-30 f-pixilate-bold text-start">¿Cómo vamos?</div>
              <div className=" block-bottom p-2 pb-3 f-Ubuntu-L bgc-white fsp-13 rounded-p-10 ps-4 pe-4"> 
                <div className="d-flex flex-wrap w-100 align-items-end titulo-linea position-relative mtp-10">
                  <img src="images/page_010/img_008.png" className="cb-estrella" alt="" />
                  <div className="d-flex"> 
                    <img src="images/page_010/arrow.svg" className="mep-5 cb-flecha" alt="" />
                    <span className="w-24 f-Ubuntu-L">¿Cómo nos gustaría que fuera nuestro trabajo en equipo?</span> 
                  </div>
                </div>  
                <div className="pt-0 flex-grow-1">
                  <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-75" />
                </div>

                <div className="d-flex flex-wrap w-100 align-items-end titulo-linea position-relative mtp-10">
                  <img src="images/page_010/img_010.png" className="cb-tv" alt="" />
                  <img src="images/page_010/img_009.png" className="cb-personaje" alt="" />
                  <div className="d-flex"> 
                    <img src="images/page_010/arrow.svg" className="mep-5 cb-flecha" alt="" />
                    <span className="w-24 f-Ubuntu-L">¿Qué podemos hacer para lograrlo?</span>
                  </div>                              
                </div>   
                <div className="pt-0 flex-grow-1">
                  <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-75" />
                </div>
              </div>

            </div>
            {/* Begin pie de página */}
            <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
              <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "white" }}>
                ABP &copy; SM
              </div>
              <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
            </div>
            {/* End pie de página */}
          
          </div>
      </div>
    </div>
            

  </div>
  );
}

export default Page010;
