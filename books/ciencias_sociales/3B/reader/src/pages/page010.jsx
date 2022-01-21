import React from "react";
import InputBox from "../components/InputBox";

import "./page_010.css";

function Page010(props) {

  const pagina = "010";
  var indexInput = 0;
  const etapa = "1"
  const background = "bgc-goten";
  const color = "color-bulma";
  const borderColor = "border-color-goten"
  const bgc_cajas = "bgc-genos"
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
              <div className=" cb-block-bottom-p10 d-flex flex-column mbp-20 mtp-10 w-100">
                    <div className="p-2 min-hp-80 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                      <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 text-start">
                        <img src={"images/generales/flecha_e"+etapa+".svg"} className="mep-5 wp-15" alt="" /> 
                        <span>¿Qué sé del tema del desafío?</span>
                      </div>
                      <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-75" />
                      <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 mtp-20 text-start">
                        <img src={"images/generales/flecha_e"+etapa+".svg"} className="mep-5 wp-15" alt="" /> 
                        <span>¿Qué necesito saber para realizar el desafío?</span>
                      </div>
                      <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-75" />
                      
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
