import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_051.css";

function Page051(props) {
  const pagina = "051";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
        <div className="d-flex flex-column align-items-center pbp-20">
            <div className="ep-page51 page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
                <img src="images/page_051/cabecera.svg" className="cb-dossier" alt=""/>

                <div className="position-relative w-100 mbp-40">
                    <div className=" psp-80 pep-70 ptp-30 pbp-0 ">
                        <div className="fsp-16 f-Ubuntu-B text-start  pbp-10">Esta página fue completada por:</div>
                        <div className=" ptp-5 pbp-5 bgc-white w-100 rounded-p-10 border border-color-lightDark d-flex justify-content-start psp-15 position-relative">
                            <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-0 px-1 text-start lhp-35 w-80" />
                        <div className="position-absolute top-50 start-0 translate-middle wp-100 msp--20 mtp--5"><img src="images/page_051/img_001.png" className="w-60" alt="" /></div>
                        <div className="position-absolute top-50 start-100 translate-middle wp-100 msp--50 mtp--10"><img src="images/page_051/img_002.png" className="wp-120" alt="" /></div>
                        </div>
                    </div>
                </div>




                <div className="d-flex msp-60 mep-60 mbp-100">

                    <div className="row m-0 p-2 w-100 ">
                        <div className="col-md-12 col-lg-12 position-relative">
      
                           <div className="position-absolute top-0 end-0   msp-0 visible-768"><img src="images/page_051/img_003.png" className="wp-50 " alt="" /></div> 

                            <div className="d-flex flex-column mbp-20 mtp-10 p-2 w-100 border-style-solid border-1 border-color-dark rounded-p-10 bgc-jaga">
                            <div className="col-md-12 col-lg-12 position-relative 0 text-start f-Ubuntu-R fsp-15 ">Las expresiones artísticas trabajadas en esta etapa y que presentaremos en nuestra fiesta son...</div>
                                <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-130" />
                            </div>
                        </div>



                        <div className="col-md-12 col-lg-12 position-relative">

                            <div className="position-absolute top-0 start-0 mep-50 mtp--10"><img className="hp-140" src="images/page_051/img_004.png" alt="" />

                            <div className="position-absolute top-50 start-0 translate-middle-y  wp-200   msp-15 mep-20">
    
                                <div className="d-flex align-items-center  w-100">
                        
                                    <div className="f-Ubuntu-L msp-10 fsp-15 lh-sm pep-5 text-start">
                                        Planeamos cómo organizar un <i>stand</i> cultural con todas estas expresiones artísticas...
                                    </div>
                                </div>
        
                            </div>
                        </div>


                    

                           <div className="position-absolute top-100 start-100 translate-middle  msp--20  visible-768"><img src="images/page_051/img_005.png" className="wp-120  " alt="" /></div> 

                           <div className="d-flex flex-column mbp-20 mtp-10 p-2 ptp-50 w-100 min-hp-400 border-style-solid border-1 border-color-dark rounded-p-10 bgc-white">
                           
                           <div className="ptp-110">

                               <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-250" />
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
                  <div className="bgc-goku wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
              </div>

            </div>
        </div>
    </div>


  );
}

export default Page051;
