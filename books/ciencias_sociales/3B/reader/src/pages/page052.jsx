import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_052.css";

function Page052(props) {
  const pagina = "052";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
        <div className="d-flex flex-column align-items-center pbp-20">
            <div className="ep-page52 page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>

                {/* <div className="h-180 ptp-10">
                <img src="images/page_052/img_001.png" className="hp-130 " alt=""/>  
                </div> */}

                <div className="w-100 hp-180  "><img src="images/page_052/img_001.png" className=" " alt=""/> </div>

                
                <div className="w-95 d-flex justify-content-around ptp-50">
                    <div className="row  ">
                        <div className="col-6  ">
                            <div className="d-flex-align-items-center position-relative">
                            <div className="d-flex align-items-center justify-content-center hp-30 "><img src="images/page_052/img_010.svg" className="hp-120  " alt=""></img></div>
                                <div className="position-absolute d-flex justify-content-center  top-50 start-50 translate-middle text-center f-Ubuntu-R fsp-15 "> ¡Solo nos queda preparar nuestra fiesta e invitar a la comunidad educativa!</div>                         
                            </div>
                           
                              
                        </div>
                        <div className="col-6  ">
                            <div className="d-flex-align-items-end position-relative">
                                <div className="d-flex align-items-center justify-content-center hp-30 "><img src="images/page_052/img_009.png" className="hp-220  " alt=""></img></div>
                                    <div className="position-absolute d-flex justify-content-center  top-50 start-50 translate-middle  f-Ubuntu-R fsp-15 ">  
                                    <div className="d-block ptp-20 ">
                                        <div className="f-pixilate-bold  text-center fsp-17 lh-sm p-1"> La fiesta será el día</div>
                                        <div className="rounded-p-5 wp-180 hp-35 border-style-solid border-1  border-color-red bgc-white rounded-p-20 bgc-white"></div>
                                        <div className="f-pixilate-bold  text-center fsp-17 lh-sm p-1"> El lugar será</div>
                                        <div className="rounded-p-5 wp-180 hp-35 border-style-solid border-1  border-color-red bgc-white rounded-p-20 bgc-white"></div>
                                    </div>
                                    </div>                         
                                </div>
                        </div>


 
                    </div>
                </div>
                

{/* 
                <div className="d-flex msp-60 mep-60 mbp-100">

                    <div className="row m-0 p-2 w-100 ">
                        <div className="col-md-12 col-lg-12 position-relative"> */}
                
 
 
 

                            <div className="d-flex justify-content-center msp-60 mep-60 mtp-120">
                                <div className="row w-95">
                                    <div className="col">
                                            <div className="bgc-sargento border-style-solid border-color-yanfei border-1 hp-250 position-relative ">

                                                 <div className="position-absolute bottom-0 end-0 d-flex align-items-center justify-content-center hp-30 gira5"><img src="images/page_052/img_006.svg" className="hp-140  position-relative " alt=""></img>
                                                        <div className="position-absolute top-0 start-50 translate-middle"><img src="images/page_052/img_005.svg" className="hp-50  position-relative mtp--120" alt=""></img></div>
                                                         <div className="position-absolute top-50 start-50 translate-middle  w-90  d-flex justify-content-center  text-center f-Ubuntu-R fsp-16 lh-sm color-saitama "> Completamos las invitaciones que entregaremos a los asistentes.</div>          
                                                 </div>


                                                <div className="bgc-white ptp-5 border-style-solid border-1 border-color-yanfei cinta-texto-52 color-goten mtp--20 msp--20 f-pixilate-bold fsp-18">
                                                    Las personas a las que invitaremos serán...
                                                </div>
                                                <div className="psp-20 pep-20">        <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-200" /></div>


                                            </div>

                                    </div>
                                </div>
                            </div>




                            <div className="d-flex justify-content-center msp-60 mep-60 mtp-120">
                                <div className="row w-100">
                                    <div className="col">
                                            <div className="rounded-p-20  bgc-white hp-250 w-100 position-relative ">
                                                <div className="position-absolute bottom-0 end-0"><img src="images/page_052/img_008.png" className="hp-190 visible-768" alt=""/></div>
                                            <div className="d-flex flex-wrap w-80 titulo-linea  mep-40 ">
                                                <div className="d-flex mtp-10 msp-10 align-items-center   "><img src="images/page_052/img_007.svg" className="mep-10 hp-15" alt="" /><span className="f-Ubuntu-L fsp-14 text-start">Lo que más nos costó trabajar en esta etapa fue...</span></div>
                                             </div>
                                            <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="msp-20 mep-100 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                                            <div className="d-flex flex-wrap w-100 titulo-linea  ">
                                                <div className="d-flex mtp-10 msp-10 align-items-center"><img src="images/page_052/img_007.svg" className="mep-5 hp-15" alt="" /><span className="f-Ubuntu-L fsp-14 text-start">Lo que mejor nos resultó en esta etapa fue...</span></div>
                                             </div>
                                            <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="msp-20 mep-100 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />

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

export default Page052;
