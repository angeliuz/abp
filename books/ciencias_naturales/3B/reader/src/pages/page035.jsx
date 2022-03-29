import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_035.css";

function Page035(props) {

  const pagina = "035";
  var indexInput = 0;
  const etapa = "3"
  const background = "bgc-android18";
  const color = "color-android18";
  const colorSesion = "color-primary";
  const borderColor = "border-color-android18"
  const bgc_cajas = "bgc-azuka";


  return (
    <div className="wrapper bgc-light">
    <div className="d-flex flex-column align-items-center pbp-20">
        <div className={"dosier-e"+etapa+" page bgc-white overflow-hidden position-relative"} id={"page_"+pagina}>
            <img src={"images/cabecera/dosier_e"+etapa+".svg"} className="w-100" alt=""/>

            <div className="position-relative w-100 mbp-0">
                <div className=" psp-80 pep-70 ptp-30 pbp-0 ">
                    <div className="fsp-16 f-Ubuntu-M text-start psp-0 pbp-10">Esta página es completada por:</div>
                    <div className={"psp-0 ptp-5 pbp-5 bgc-white rounded-p-10 border-style-solid border-1 "+borderColor+" d-flex justify-content-center position-relative"}>
                      <div className="position-absolute top-50 start-0 translate-middle wp-100 msp-0 mtp-0"><img src={"images/page_"+pagina+"/img_001.png"} className="wp-70" /></div>
                      <div className="position-absolute top-50 start-100 translate-middle wp-100 msp-20 mtp--20"><img src={"images/page_"+pagina+"/img_002.png"} className="w-70" /></div>
                      <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="max-wp-600 px-1 text-start lhp-35 w-100 msp-40 mep-50" />
                    </div>

                </div>
                
            </div>

            <div className="ptp-30 container-titulo-global mbp-10">
              <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 "+color}>
              En la etapa de investigación
              </div>
              <div className="d-flex psp-20">
                  {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_016/img_001.svg" alt=""  /> */}
                  {/* <div className={"f-ccdigitaldelivery-bold fsp-35 "+color}>1</div>
                  <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                  Ordenamos del 1 al 6 los pasos de nuestro proyecto.
                  </div> */}
                  {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                  {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                  {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                  {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_007/revista65.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
              </div>
            </div>                    
            
            <div className="d-flex psp-60 pep-60 pbp-0">

                <div className="d-flex w-100 bgc-tshinhan psp-10 pep-10 ptp-10 pbp-10 rounded-p-10">
                    <div className="row w-100 p-0 m-0 border-style-dashed border-1 border-color-bulma rounded-p-5 bgc-white">


                        <div className="col-12 position-relative">
                            <div className="d-flex flex-column f-Ubuntu-R fsp-15 psp-10 pep-10 mtp-20">
                                <div className="f-Ubuntu-R fsp-15 color-dark text-start">Aprendimos sobre...</div>
                                <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-330" />
                            </div>

                        </div>

                    
                    </div>                  
                </div>

            </div>  

            <div className="d-flex msp-60 mep-60 mbp-100 mtp-30">

                <div className="row m-0 p-0 w-100">

                    <div className="col-sm-12 position-relative pbp-20">
                    <div className="position-absolute top-50 start-100 translate-middle msp--100 mtp-0 "><img src={"images/page_"+pagina+"/img_003.png"} className="wp-150 " alt="" /></div> 
                    
                        <div className="d-flex flex-column bgc-bison box-shadow-simple psp-20 pep-190 ptp-20 border-style-solid border-2 border-color-freezer">
                            <div className="f-Ubuntu-R fsp-15 color-dark text-start">La infografía que hemos confeccionado nos servirá para...</div>
                            <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-230" />
                        </div>

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

        </div>
    </div>
</div>

  );
}

export default Page035;
