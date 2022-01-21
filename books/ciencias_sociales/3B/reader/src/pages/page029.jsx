import React from "react";
import InputBox from "../components/InputBox";
// import ModalVideo from "../components/ModalVideo";

import "./page_029.css";

function Page029(props) {

  const pagina = "029";
  var indexInput = 0;

  return (

    <div className="wrapper bgc-light">
        <div className="d-flex flex-column align-items-center pbp-20">
            <div className="cb-page29 page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
                <img src="images/page_029/img_001_2.svg" className="cb-dossier" alt=""/>

                <div className="position-relative w-100 mbp-40">
                    <div className=" psp-80 pep-70 ptp-30 pbp-0 ">
                        <div className="fsp-16 f-Ubuntu-B text-start psp-80 pbp-10">Este dosier fue completado por:</div>
                        <div className="psp-0 ptp-5 pbp-5 bgc-white rounded-p-10 border border-color-lightDark d-flex justify-content-center position-relative">
                        <div className="position-absolute top-50 start-0 translate-middle wp-100 mtp--10"><img src="images/page_029/img_001.png" className="w-80" alt="" /></div>
                        
                            <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="px-1 text-start lhp-35 w-75" />
                        </div>

                    </div>
                    
                </div>

                <div className="d-flex msp-60 mep-60 mbp-50">

                    <div className="row m-0 p-2 w-100 ">
                        <div className="col-md-12 col-lg-12 position-relative">
                        <div className="position-absolute top-0 end-0 wp-100 msp-45 mtp--80 visible-768"><img src="images/page_029/img_002.png" className="" alt="" /></div>
                          
                           <div className="position-absolute top-50 start-0 msp-0 mtp-60 visible-768 "><img src="images/page_029/img_003.png" className=" " alt="" /></div> 

                            <div className="caja-29 d-flex flex-column mbp-20 mtp-10 p-2 w-100 border-style-solid border-2  ">
                            <div className="col-md-12 col-lg-12 position-relative text-start f-Ubuntu-R fsp-15">Comprendimos que los derechos de la niñez son importantes porque…</div>
                                <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-280" />
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-12 position-relative">
                           
                        <div className="position-absolute top-50 start-0 translate-middle msp-5 "><img src="images/page_029/img_005.png" className="wp-45" alt="" /></div>
                           <div className="position-absolute top-0 start-100 msp--70 mtp--15 visible-768"><img src="images/page_029/img_004.png" className=" " alt="" /></div> 

                            <div className="d-flex flex-column mbp-20 mtp-20 p-2 w-100 border-style-solid border-2 border-color-dark bgc-white">
                                <div className="col-md-12 col-lg-12 position-relative text-start f-Ubuntu-R fsp-15 psp-10">Lo que de esta investigación nos sirve para nuestro proyecto es…</div>
                                <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-250" />
                            </div>
                        </div>

                    </div>
                </div>



              {/* PIE DE PAGINA */}
              <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
                  <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
                    ABP &copy; SM
                  </div>
                  <div className="bgc-goku wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
              </div>

            </div>
        </div>
    </div>


  );
}

export default Page029;
