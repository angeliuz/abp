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
                <div className="h-180 ptp-10">
                <img src="images/page_052/img_001.png" className="hp-130 " alt=""/>  
                </div>

                <div className="position-relative w-100 mbp-40 ">
                    <div className=" psp-80 pep-70 pbp-0  ">
                        <div className="row pbp-20">
                            <div className="col-6 bgc-red">
                            <div className="d-flex align-items-center position-relative justify-content-center pbp-10 mt-3 w-100">
                            
                       
                            <div className="d-flex align-items-center hp-30 position-relative "><img src="images/page_052/img_010.svg" className="hp-120  " alt=""></img></div>
                                <div className="position-absolute d-flex justify-content-center  top-50 start-50 translate-middle text-center f-Ubuntu-R fsp-15 "> ¡Solo nos queda preparar nuestra fiesta e invitar a la comunidad educativa!</div>                         
                            </div>

                               
                     
                            </div>
                            <div className="col-6 bgc-aqua">
                            <div className="d-flex align-items-center position-relative justify-content-center pbp-10 mt-3 w-100">
                            
                       
                            <div className="d-flex align-items-center hp-30 position-relative "><img src="images/page_052/img_009.png" className="hp-200  " alt=""></img></div>
                                <div className="position-absolute d-flex justify-content-center  top-50 start-50 translate-middle text-center f-Ubuntu-R fsp-15 ">     La fiesta será el día</div>                         
                            </div>
                            </div>
                        </div>
                    </div>
                </div>


<br/>
<br/>
<br/>
<br/>




 

                <div className="d-flex msp-60 mep-60 mbp-20 mbp-100">

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
                   

                        <div className="position-absolute top-50 start-0 translate-middle-y  wp-260   msp-15 mep-20">
   
                            <div className="d-flex align-items-center  w-100">
                      
                                <div className="f-Ubuntu-L msp-10 fsp-15 lh-sm pep-5 text-start">
                                    Planeamos cómo organizar un <i>stand</i> cultural con todas estas expresiones artísticas...
                                </div>
                            </div>
      
 
                 
    
                        </div>
                    </div>

                           {/* <div className="position-absolute top-0 start-0 msp-5 mtp-15"><img src="images/page_039/punta.svg" className="wp-20" alt="" /></div>
                           <div className="position-absolute top-0 start-100 msp--30 mtp-15"><img src="images/page_039/punta.svg" className="wp-20" style={{ transform: `rotate(90deg)`}} alt="" /></div>
                           <div className="position-absolute top-100 start-100 msp--30 mtp--40"><img src="images/page_039/punta.svg" className="wp-20" style={{ transform: `rotate(180deg)`}} alt="" /></div>
                           <div className="position-absolute top-100 start-0 msp-5 mtp--40"><img src="images/page_039/punta.svg" className="wp-20" style={{ transform: `rotate(270deg)`}} alt="" /></div> */}

                           <div className="position-absolute bottom-0 end-0    msp--120 mtp--15 visible-768"><img src="images/page_051/img_005.png" className="wp-150 " alt="" /></div> 

                            <div className="d-flex flex-column mbp-20 mtp-20 p-2 w-100 hp-400 rounded-p-10 border-style-solid border-2 border-color-dark bgc-white">
                                {/* <div className="col-md-12 col-lg-12 position-relative text-start f-Ubuntu-R fsp-15">Creemos que el decálogo de principios que elaboramos permitirá….</div> */}
                                {/* <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-250" /> */}
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
