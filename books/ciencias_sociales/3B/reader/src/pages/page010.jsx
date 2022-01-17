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

          <div className="mtp-75 cb-margen">
          <div className="d-flex justify-content-center">
            <div className="cb-titulo-aceptamos text-center fsp-25 f-IntroRustG-Base mtp-10 mbp-20 color-goten">¡ACEPTAMOS EL DESAFÍO!</div>
          </div>
         <div className="text-star cb-m-auto psp-30 f-Ubuntu-R fsp-16 text-start">Respondemos el correo y nos comprometemos con el desafío.</div> 
          <div className="cb-contenedor-mail text-start">
            <div className="cb-datos-mail pep-15 psp-10 ptp-10 pbp-10">
            <div className="d-flex mbp-5"> 
                <div className="cb-datos-a psp-10 f-Ubuntu-R fsp-16 mep-10">De:</div>
                <div className="cb-datos-1 psp-10 f-Ubuntu-R fsp-16">estudiantestercerobasico@correo.cl</div>
            </div>
            <div className="d-flex mbp-5">
                <div className="cb-datos-a psp-10 mep-10">Para:</div>
                <div className="cb-datos-1 psp-10 f-Ubuntu-R fsp-16">alejandra@mail.com</div>
            </div>
            <div className="d-flex">
                <div className="cb-datos-a psp-10 f-Ubuntu-R fsp-16 mep-10">Asunto:</div>
                <div className="cb-datos-1 psp-10 f-Ubuntu-R fsp-16">Aceptamos el desafío</div>
            </div>
            </div>
            <div className="cb-texto-mail">
                <div className="cb-carta-content f-Ubuntu-L text-start">
                    <img src="images/page_010/img_004.png" className="cb-lapiz-p10" alt=""/>
                    <p>Estimada Alejandra:</p>
                    <p>Estamos muy contentos con este gran desafío que nos propones, por
                      eso queremos decir que nuestro equipo…</p>
                      <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />

                    <p className="text-center ">Atte</p>
                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />

                </div>
            </div>
        </div>
          <div className="pbp-90">
            <div className="cb-block-bottom-p10 mtp-30 f-pixilate-bold text-start">¿Cómo vamos?</div>
            <div className="cb-block-bottom-p10 p-2 pb-3 f-Ubuntu-L bgc-white fsp-13 rounded-p-10 ps-4 pe-4">
              <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mbp-10 position-relative">
                <div className="d-flex"> <img src="images/page_010/arrow.svg" className="mep-5 cb-flecha" alt=""/>
                  <span className="w-24 f-Ubuntu-L text-start">Una fortaleza de nuestro equipo podría ser...</span>
                </div>
              </div>
              <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
              <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mbp-10 position-relative">
                <img src="images/page_010/img_005.png" className="cb-personaje-p10" alt=""/>
                <div className="d-flex"> <img src="images/page_010/arrow.svg" className="mep-5 cb-flecha" alt=""/>
                  <span className="w-24 f-Ubuntu-L text-start">¿Qué desafíos enfrentamos como equipo en este proyecto?</span>
                </div>
              </div>
              <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
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
