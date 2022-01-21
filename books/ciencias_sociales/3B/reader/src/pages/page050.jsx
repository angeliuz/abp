import React from "react";
import ModalVideo from "../components/ModalVideo";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
// import esquinaAzul from "images/page_044/esquinaAzul.svg";
import "./page_050.css";

function Page050(props) {

  const pagina = "050";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
              <div className="page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
               {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v2 bgc-saitama d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
          
            </div>

          </div> 
          {/* END CABECERA VERSIÓN 2 */}



      
          <div className="ptp-10 psp-60 mbp-0 contenedor-pagina">
              <div className="f-Ubuntu-B fsp-20 color-saitama text-start lhp-20">Imaginamos nuestro stand cultural</div>
              <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_033/g_i.svg" alt="" /> */}
                <div className="f-ccdigitaldelivery-bold fsp-35 color-saitama">4</div>
                <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start"> Creo un boceto del <i>stand</i> cultural.</div>
                {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_047/img_001.svg" clasesImagen="hp-40 msp-30 text-center mtp-10 " className="p-0 px-0" /> */}
                {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_045/img_001.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              </div>
            </div>






            <div className="row container-row">

                <div className="col-md-12 col-lg-12 position-relative">

                {/* <div className="position-absolute top-50 start-100 translate-middle visible-768 zindex-1 msp--70 mtp-150"><img src="images/page_026/img_001.png" className="hp-60" alt=""/></div>
                    <div className="position-absolute top-50 start-0 translate-middle visible-768 zindex-1 msp-70 mtp--5"><img src="images/page_026/img_003.png" className="w-100" alt=""/></div> */}
                    <div className="position-absolute top-100 start-0 translate-middle visible-768 zindex-1 msp-100 mtp--30"><img src="images/page_050/img_002.png" className="w-100" alt=""/></div>

                    <div className="mbp-20 mtp-10 msp-20 mep-20">
                        <div className=" bgc-white caja-dibujo-global p-2 rounded-p-20 border-style-solid border-2 border-color-dark positon-relative">


                            <div className="position-absolute top-0 end-0 mep-50 mtp--80"><img className="hp-300" src="images/page_050/img_001.png" alt="" />
                      

                                <div className="position-absolute top-50 start-0 translate-middle-y  wp-260 mtp-20 msp-15 mep-20">
                                    <div className="d-flex align-items-center  justify-content-between pbp-10 mt-3 w-100">
                                        <div className="f-pixilate-bold msp-10 fsp-20 lh-sm pep-5 text-start">Considero:</div>
                                        <div className="d-inline wp-30 hp-30 border-style-solid border-1 border-color-dark bgc-white"></div>
                                    </div>
                                    <div className="d-flex align-items-center pbp-10 w-100">
                                    <div className="d-inline hp-30 "><img src="images/page_050/img_003.svg" className="hp-20  " alt=""></img></div>
                                        <div className="f-Ubuntu-L msp-10 fsp-15 lh-sm pep-5 text-start">Decoración.</div>
                                    </div>
                                    <div className="d-flex align-items-center pbp-10 w-100">
                                    <div className="d-inline hp-30 "><img src="images/page_050/img_003.svg" className="hp-20  " alt=""></img></div>
                                        <div className="f-Ubuntu-L msp-10 fsp-15 lh-sm pep-5 text-start">Trabajos realizados a lo largo del proyecto.</div>
                                    </div>
                                    <div className="d-flex align-items-center pbp-10 w-100">
                                    <div className="d-inline hp-30 "><img src="images/page_050/img_003.svg" className="hp-20  " alt=""></img></div>
                                        <div className="f-Ubuntu-L msp-10 fsp-15 lh-sm pep-5 text-start">Elementos que utilizaremos como soporte (mesas, sillas, toldo, etc.)</div>
                                    </div>
                                    <div className="d-flex align-items-center pbp-10 w-100">
                                        <div className="d-inline hp-30 "><img src="images/page_050/img_003.svg" className="hp-20  " alt=""></img></div>
                                        <div className="f-Ubuntu-L msp-10 fsp-15 lh-sm pep-5 text-start">Otros: como sistema de audio, luces, telas, etc.</div>
                                    </div>        
                                </div>

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
                <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{bottom:0}}>

                    <div className="col-1 position-relative col-sm-2 p-0 m-0">
                      <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
                        <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
                        <div className="w-100 hp-25 bgc-goten"></div>
                    </div>
                    <div className="col-7 position-relative col-sm-2 p-0 m-0">
                        <img src="images/rotulo_planificacion.svg" className="oculto" alt="" />
                        <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
                        <div className="w-100 hp-25 bgc-bulma"></div>
                    </div>
                    <div className="col-1 position-relative col-sm-2 p-0 m-0">
                      <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
                        <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
                        <div className="w-100 hp-25 bgc-android18"></div>
                    </div>
                    <div className="col-1 position-relative col-sm-2 p-0 m-0">
                      <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
                        <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
                        <div className="w-100 hp-25 bgc-pidgey"></div>
                    </div>
                    <div className="col-1 position-relative col-sm-2 p-0 m-0">
                      <img src="images/rotulo_creacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
                        <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
                        <div className="w-100 hp-25 bgc-saitama"></div>
                    </div>
                    <div className="col-1 position-relative col-sm-2 p-0 m-0">
                      <img src="images/rotulo_difusion.svg" className="oculto" alt="" />
                        <div className="w-100 hp-15 bgc-leono rounded-caja-end"></div>
                        <div className="w-100 hp-25 bgc-pikachu"></div>
                    </div>
                </div>

                
              </div>
            </div>
          </div>
     
  );
}

export default Page050;
