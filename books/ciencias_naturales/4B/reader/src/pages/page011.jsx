import React from "react";
import InputBox from "../components/InputBox";
import "./page_011.css";

function Page011(props) {

  const pagina = "011";
  var indexInput = 0;
  
  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
          <div className="page cb-page11 position-relative" id={"page_"+pagina}>
             
          <div className="mtp-60 ">
                <div className="d-flex justify-content-center">                    
                    <img src="images/page_011/fondo_002.svg" className="cb-dosier" alt=""></img>
                </div>
                    <div className="cb-block-inicial-etapa-p09 f-Ubuntu-L hp-90 fw-700 fsp-15 p-2 pb-3 mbp-30 text-center mtp-20 cb-outline_p11">
                    <p>Esta página ha sido completada por</p>
                        <img src="images/page_011/img_001.png" className="cb-calendario-p11" alt=""></img>
                        <img src="images/page_011/img_002.png" className="cb-silvato-p11" alt=""></img>
                    </div>

                <div className="cb-block-superior-p09 p-3  f-Ubuntu-L fsp-15 text-center fw-700 cb-outline_p11">
                    <img src="images/page_011/img_003.png" className="cb-crallones-p11" alt=""></img>
                    <p>Nuestro equipo está conformado por:</p>
                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170" /> 

                </div>
                <div className="cb-block-superior-p09 p-3 pb-4 hp-120 f-Ubuntu-L fsp-15 mtp-30 mbp-30 text-center fw-700  cb-outline_p11">
                    <img src="images/page_011/img_005.png" className="cb-bomero-p11"  alt=""></img>
                    <p>Nuestra brigada se llama:</p>
 
                </div>
                <div className="cb-block-superior-p09 p-3 f-Ubuntu-L fsp-15 mtp-30 mbp-30 text-center fw-700 cb-outline_p11">
                <img src="images/page_011/img_006.png" className="cb-bloques-p11"  alt=""></img>
                    <img src="images/page_011/img_008.png" class="cb-bota-p11" alt=""></img>
                    <p>Nuestra brigada tendrá la misión de:</p>
                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170" /> 


                </div>
               {/* Begin pie de página */}
              <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
                <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
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

export default Page011;
