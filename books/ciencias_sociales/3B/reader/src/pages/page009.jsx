import React from "react";
import InputBox from "../components/InputBox";

import "./page_009.css";

function Page009(props) {

  const pagina = "009";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page cb-page9 overflow-hidden position-relative" id={"page_"+pagina}>

        <div className="mtp-60 ">
                <div className="d-flex justify-content-center">                    
                    <img src="images/page_009/fondo_002.svg" className="cb-dosier" alt="" />
                </div>
                <div className="cb-block-arriba-p09 mtp-40 f-Ubuntu-L mbp-5 psp-25 fw-700 fsp-13">Esta página ha sido completada por</div>
                    <div className="cb-block-inicial-etapa-p09 f-Ubuntu-L  fw-700 fsp-15 p-2 pb-3 mbp-30 text-center mtp-20 cb-outline_pg9">
                        <img src="images/page_009/img_005.png" className="cb-computador-p09" alt="" />
                    </div>

                <div className="cb-block-superior-p09 p-3 pb-4 f-Ubuntu-L fsp-15 text-center fw-700 cb-outline_pg9 ">
                    <img src="images/page_009/img_001.png" className="cb-celu-p09" alt=""/>
                    <img src="images/page_009/img_007.png" className="cb-lupa-p09" alt=""/>
                    <img src="images/page_009/img_002.png" className="cb-tiempo-p09" alt=""/>
                    <p>Nuestro equipo está formado por:</p>
                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170" />

                </div>
                <div className="cb-block-superior-p09 p-3 pb-4 f-Ubuntu-L fsp-15 mtp-30 mbp-30 text-center fw-700  cb-outline_pg9">
                    <img src="images/page_009/img_003.png" className="cb-globo-p09"  alt=""/>
                    <p>Nuestro grupo se llamará:</p>
                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />

                </div>
                <div className="cb-block-superior-p09 p-3 pb-4 f-Ubuntu-L fsp-15 mtp-30 mbp-30 text-center fw-700 cb-outline_pg9">

                    <img src="images/page_009/img_004.png" className="cb-camara-p09" alt=""/>
                    <p>Nuestro lema será:</p>
                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />


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

export default Page009;
