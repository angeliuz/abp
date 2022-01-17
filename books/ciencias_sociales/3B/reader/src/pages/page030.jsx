import React from "react";
import InputBox from "../components/InputBox";
// import ModalVideo from "../components/ModalVideo";

import "./page_030.css";

function Page030(props) {

  const pagina = "030";
  var indexInput = 0;

  return (

    <div className="wrapper bgc-light">
        <div className="d-flex flex-column align-items-center pbp-20">
            <div className="cb-page39 page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
               

                

                <div className="d-flex msp-60 mep-60 mbp-100">

                    <div className="row m-0 p-2 w-100 ">
                        <div className="col-md-12 col-lg-12 position-relative">
                        <div className="position-absolute top-0 end-0 wp-100 msp-45 mtp--80 "><img src="images/page_029/img_002.png" className="" alt="" /></div>
                          
                           <div className="position-absolute top-50 start-0 msp-0 mtp-60 visible-768 "><img src="images/page_029/img_003.png" className=" " alt="" /></div> 

                            <div className="caja-29 d-flex flex-column mbp-20 mtp-10 p-2 w-100 border-style-solid border-2  ">
                            <div className="col-md-12 col-lg-12 position-relative text-center f-Ubuntu-R fsp-15">Comprendimos que los derechos de la ni ez son importantes porque…</div>
                                <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-280" />
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-12 position-relative">
                           
                           
                           
                           

                           <div className="position-absolute top-0 start-100 msp--70 mtp--15 visible-768"><img src="images/page_029/img_004.png" className=" " alt="" /></div> 

                            <div className="d-flex flex-column mbp-20 mtp-20 p-2 w-100 border-style-solid border-2 border-color-dark bgc-white">
                                <div className="col-md-12 col-lg-12 position-relative text-start f-Ubuntu-R fsp-15 psp-10">Lo que de esta investigaci n nos sirve para nuestro proyecto es…</div>
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

export default Page030;
