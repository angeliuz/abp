import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";

import "./page_071.css";

function Page071(props) {

  const pagina = "071";
  var indexInput = 0;

  return (

    <div className="wrapper bgc-light">
        <div className="d-flex flex-column align-items-center pbp-20">
            <div className="cb-page71 page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
                <img src="images/page_071/cabecera.svg" className="cb-dossier" alt=""/>

                <div className="position-relative w-100 mbp-20">
                    <div className=" psp-80 pep-70 ptp-30 pbp-0 ">
                        <div className="fsp-16 f-Ubuntu-B text-start psp-0 pbp-10">Esta página ha sido completada por:</div>
                        <div className="psp-0 ptp-5 pbp-5 bgc-white rounded-p-10 border border-color-lightDark d-flex justify-content-center position-relative">
                        <div className="position-absolute top-50 start-0 translate-middle wp-100 msp-0 mtp-0"><img src="images/page_071/img_003.png" className="wp-70" /></div>
                        <div className="position-absolute top-50 start-100 translate-middle wp-100 msp-0 mtp-0"><img src="images/page_071/img_002.png" className="w-50" /></div>
                            <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="px-1 text-start lhp-35 w-80" />
                        </div>

                    </div>
                    
                </div>

                <div className="d-flex msp-60 mep-60 mbp-100">

                    <div className="row m-0 p-2 w-100 ">
                        <div className="col-sm-12 col-md-12 position-relative text-start pbp-10 f-Ubuntu-M">
                        ¿Cómo imaginábamos que iba a ser nuestra revista?
                        </div>
                        <div className="col-sm-12 col-md-12 position-relative">
                                
                            <div className="position-absolute top-0 start-100 translate-middle msp-0 mtp-15 visible-768"><img src="images/page_071/img_004.png" className="wp-60 " alt="" /></div> 
                            <div className="position-absolute top-100 start-0 translate-middle msp-0 mtp--70 visible-768"><img src="images/page_071/img_005.png" className="wp-50 " alt="" /></div> 

                            <div className="bgc-white exterior-caja-v1 border-style-solid  border-color-dark border-2 w-100 p-2 f-Ubuntu-L fsp-15 mbp-20">
                                <div className="d-flex flex-column position-relative w-100">
                                
                                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-300" />
                                </div>
                            </div>

                        </div>
                        
                        <div className="col-sm-12 col-md-12 position-relative text-start pbp-10 f-Ubuntu-M">
                        ¿Qué ha cambiado desde entonces?
                        </div>

                        <div className="col-sm-12 col-md-12 position-relative">
                            <div className="position-absolute top-0 start-100 translate-middle msp-0 mtp-15 visible-768"><img src="images/page_071/img_006.png" className="wp-60 " alt="" /></div> 
                            <div className="position-absolute top-100 start-0 translate-middle msp-0 mtp--70 visible-768"><img src="images/page_071/img_007.png" className="wp-30 " alt="" /></div> 
                            

                            <div className="bgc-white exterior-caja-v1 border-style-solid border-color-dark border-2 w-100 p-2 f-Ubuntu-L fsp-15 mbp-20">

                                <div className="d-flex flex-column position-relative w-100">
                                
                                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-300" />
                                </div>
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

export default Page071;
