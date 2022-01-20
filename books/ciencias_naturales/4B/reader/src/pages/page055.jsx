import React from "react";
import InputBox from "../components/InputBox";
// import ModalVideo from "../components/ModalVideo";
// import ModalBook from "../components/ModalBook";

import "./page_055.css";

function Page055(props) {

  const pagina = "055";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
              <div className="page ep-page55 bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
                {/* contenido DE PAGINA */}

           
                    
          
          


            <div className="psp-80 pep-50 mtp-80">

                <div className="position-relative w-100 ptp-100 psp-10 pep-10 ">

                                <div className="  w-70 text-start mtp--10 msp--10 rounded-p-10">
                                    <div className="f-Ubuntu-R psp-20 py-2">Esta página fue completada por:</div>
                                </div>

                            <div className="bgc-white border-style-solid border-2 border-color-pidgey rounded-p-10 position-relative">
                            {/* <div className="position-absolute top-50 start-100 translate-middle    "><img src="images/page_055/img_001.png" className="hp-90" alt="" /></div> */}
                            <div className="position-absolute top-50 start-0 translate-middle   "><img src="images/page_055/img_001.png" className="hp-90 mtp--20" alt="" /></div>
                                <div className="psp-50 pep-20 pbp-20">
                                    <div className="linea pbp-20"></div>
                                    <div className="linea pbp-20"></div>
                          keko
                                </div>
                            </div>
                </div>

            </div>



            <div className="psp-80 pep-50">

                <div className="position-relative w-100 ptp-30 psp-10 pep-10 ">

                            <div className="bgc-white border-style-solid border-2 border-color-guile rounded-p-10 position-relative">
                            <div className="position-absolute top-50 start-100 translate-middle   msp-10   "><img src="images/page_055/img_003.png" className="hp-90" alt="" /></div>
                            <div className="position-absolute top-0 end-0  mtp--20 mep-10 "><img src="images/page_055/img_002.svg" className="hp-65" alt="" /></div>
                                <div className="bgc-bach w-55 p-2 text-start mtp--10 msp--10 rounded-p-10 ">
                                    <div className="f-Ubuntu-R psp-5 pep-5 ">Queremos que nuestra brigada sea un aporte al colegio, porque:</div>
                                </div>
                                <div className="psp-20 pep-30 pbp-20">
                                    <div className="linea pbp-20"></div>
                                    <div className="linea pbp-20"></div>
                                    <div className="linea pbp-20"></div>
                                    <div className="linea pbp-20"></div>
                                    <div className="linea pbp-20"></div>
                                   
                                </div>
                            </div>
                </div>

            </div>

            <div className="psp-80 pep-50">

                <div className="position-relative w-100 ptp-30 psp-10 pep-10 ">

                            <div className="bgc-white border-style-solid border-2 border-color-pidgey rounded-p-10 position-relative">
                            <div className="position-absolute top-50 start-0 translate-middle  msp--10   "><img src="images/page_055/img_004.png" className="hp-90" alt="" /></div>
                            {/* <div className="position-absolute top-0 end-0  mtp--20 mep-10 "><img src="images/page_055/img_002.svg" className="hp-65" alt="" /></div> */}
                                <div className="bgc-pantro w-55 p-2 text-start mtp--10 msp--10 rounded-p-10 ">
                                    <div className="f-Ubuntu-R psp-5 pep-5 ">Preparar un simulacro de emergencia nos sirvió para:</div>
                                </div>
                                <div className="psp-30 pep-30 pbp-20">
                                    <div className="linea pbp-20"></div>
                                    <div className="linea pbp-20"></div>
                                    <div className="linea pbp-20"></div>
                                    <div className="linea pbp-20"></div>
                                    <div className="linea pbp-20"></div>
                                 
                                </div>
                            </div>
                </div>

            </div>
            <div className="psp-80 pep-50">

                <div className="position-relative w-100 ptp-30 psp-10 pep-10 ">

                            <div className="bgc-white border-style-solid border-2 border-color-voldemort rounded-p-10 position-relative">
                            <div className="position-absolute top-100 start-100 translate-middle  msp--10  visible-768 "><img src="images/page_055/img_005.png" className="hp-90" alt="" /></div>
                            {/* <div className="position-absolute top-0 end-0  mtp--20 mep-10 "><img src="images/page_055/img_002.svg" className="hp-65" alt="" /></div> */}
                                <div className="bgc-tigro w-55 p-2 text-start mtp--10 msp--10 rounded-p-10 ">
                                    <div className="f-Ubuntu-R psp-5 pep-5 ">Preparar un simulacro de emergencia nos sirvió para:</div>
                                </div>
                                <div className="psp-30 pep-30 pbp-20">
                                    <div className="linea pbp-20"></div>
                                    <div className="linea pbp-20"></div>
                                    <div className="linea pbp-20"></div>
                                    <div className="linea pbp-20"></div>
                                    <div className="linea pbp-20"></div>
                                  
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
                 {/* FIN PIE DE PAGINA */}
              
            </div>
            </div>
    </div>
           


          
     
  );
}

export default Page055;
