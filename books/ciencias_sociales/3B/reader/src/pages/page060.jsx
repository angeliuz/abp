import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import "./page_060.css";

function Page060(props) {

  const pagina = "060";
  var indexInput = 0;
  const etapa = "6"
  const background = "bgc-pikachu";
  const color = "color-pikachu";
  const colorSesion = "color-pikachu";
  const borderColor = "border-color-pikachu"
  const borderColorTabla = "border-color-kokomi"
  const bgc_cajas = "bgc-kokomi";

  
  return (
    <div className="wrapper bgc-light">
        <div className="d-flex flex-column align-items-center pbp-20">
            <div className={"dosier-e"+etapa+" page bgc-white overflow-hidden position-relative"} id={"page_"+pagina}>

          <div className="cb-ejercicioinicial-p60 mtp-90 mbp-30 psp-15 pep-15 pbp-10 ptp-50 mtp-20 position-relative">
                    <div className="cb-caja-inicial position-absolute p-2 d-flex align-items-center justify-content-center f-pixilate-regular fsp-18">Ponernos de acuerdo fue...</div>
                    <div className="cb-bloque-1-p60 cb-caja-inicial-a position-absolute p-2 d-flex align-items-center justify-content-center f-pixilate-regular fsp-18">Fácil</div>
                    <div className="cb-bloque-2-p60 cb-caja-inicial-b position-absolute p-2 d-flex align-items-center justify-content-center f-pixilate-regular fsp-18">Difícil</div>
                    <div className="cb-ejercicioinicial-caja-p60 cb-outline-p59 ">
                       <div className="pep-10 psp-10 pbp-5">
                          <div className="text-start ptp-10 pbp-10 f-pixilate-regular fsp-18">Por que..</div>
                          <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170" />
                       </div>
                    </div>                 
          </div>
          <div className="cb-ejerciciofinal-p60 mtp-20 mbp-30">
                    <div className="d-flex">
                    <div className="cb-ejerciciofinal-cajas cb-rotate-01 position-relative">
                    <div className="pep-10 psp-10">
                        <img src="images/page_060/img_001.png" className="cb-objeto-p60" alt="" />
                        <div className="text-center ptp-10 pbp-10 f-pixilate-regular fsp-18">Si volviésemos a empezar, volveríamos a...</div>
                        <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-250" />
                    </div>
                    </div>
                    <div className="cb-ejerciciofinal-cajas cb-rotate-02 position-relative">
                    <div className="pep-10 psp-10">
                        <img src="images/page_060/img_001.png" className="cb-objeto-p60" alt="" />
                        <div className="text-center ptp-10 pbp-10 f-pixilate-regular fsp-18">Si volviésemos a empezar, mejoraríamos en....</div>
                        <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-250" />
                    </div>
                </div>
                    </div>
                    </div>
                <div className="d-flex text-center justify-content-center">
                    <img src="images/page_060/img_005.svg" className="cb-personaje-p60" alt="" />

                </div>
                <div
            className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }} >
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
              ABP &copy; SM </div> <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5"> {props.numeroPagina(pagina)}</div>
          </div>

              </div>
          </div>
        </div>
       
       
        
      
  );
}

export default Page060;
