import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_032.css";

function Page032(props) {

  const pagina = "032";
  var indexInput = 0;



  return (

    <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
              <div className="page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
            <div className="cabecera-v1 hp-80 bgc-android18">
            </div>
            <div className="ptp-10 container-titulo-global mbp-20">
                <div className="d-flex">
                    <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_030/img_002.svg" alt=""  />
                    <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">4</div>
                    <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Propongo dos compromisos que contribuyan al respeto de los derechos durante nuestro trabajo en la revista.</div>

                </div>
            </div>
            
            <div className="row container-row m-0 psp-60 pep-60">

                <div className="col-12 justify-content-center mtp-10 psp-80 pep-80 pbp-50 position-relative">
                    <div className="position-absolute top-0 start-100 translate-middle msp--20 mtp-55  zindex-1"><img src="images/page_030/img_001.png" className="wp-30 " alt="" /></div>
                    <div className="position-absolute top-100 start-0 translate-middle msp-20 mtp--75  zindex-1"><img src="images/page_030/img_002.png" className="wp-100 " alt="" /></div>

                    <div className="p-2 rounded-p-10 bgc-zangief">
                        <div className="px-3">                            
                            <div className="color-dark f-Ubuntu-L pp-10 text-center">Los compromisos que propongo son:</div>
                            <div className="d-flex position-relative bgc-white psp-20 pep-20 ptp-10 pbp-15 mbp-20 rounded-p-10 border-style-solid border-2 border-color-freezer">
                                
                                <div className="position-absolute bgc-hermione borde-numero-30 border-style-solid border-start-0 border-top-0 border-2 border-color-freezer p-1 text-center color-pidgey wp-50 hp-40 f-Ubuntu-B fsp-20 msp--20 mtp--10">
                                    1
                                </div>
                                <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="px-1 msp-40 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" /> 
                            </div>
                            <div className="d-flex position-relative bgc-white psp-20 pep-20 ptp-10 pbp-15 mbp-20 rounded-p-10 border-style-solid border-2 border-color-freezer">
                                <div className="position-absolute bgc-hermione borde-numero-30 border-style-solid border-start-0 border-top-0 border-2 border-color-freezer p-1 text-center color-pidgey wp-50 hp-40 f-Ubuntu-B fsp-20 msp--20 mtp--10">
                                    2
                                </div>
                                <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="px-1 msp-40 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" /> 
                            </div>


                        </div>


                    </div>

                </div>
                <div className="col-12 justify-content-center mtp-10 psp-80 pep-80 mbp-10 position-relative">
                    <div className="px-2 text-start f-Ubuntu-R ">
                        Comparto mis propuestas con mi grupo. Luego, acordamos cuatro compromisos que asumiremos.
                    </div>
                </div>
                
                <div className="col-12 justify-content-center mtp-0 mbp-70 psp-80 pep-80 pbp-50 position-relative">
                    <div className="position-absolute top-100 start-100 translate-middle msp--20 mtp--120  zindex-1"><img src="images/page_030/img_003.png" className="wp-60 " alt="" /></div>
                    <div className="position-absolute top-50 start-0 translate-middle msp-20 mtp-75  zindex-1"><img src="images/page_030/img_005.png" className="wp-25 " alt="" /></div>

                    <div className="p-2 rounded-p-10 bgc-chitara">
                        <div className="px-3">                            
                            <div className="color-dark f-Ubuntu-L pp-10 text-start">Los compromisos que asumiremos como grupo en el trabajo de la revista son:</div>
                            <div className="d-flex position-relative bgc-white psp-20 pep-20 ptp-10 pbp-15 mbp-20 rounded-p-10 border-style-solid border-2 border-color-android18">
                                
                                <div className="position-absolute bgc-shogun borde-numero-30 border-style-solid border-start-0 border-top-0 border-2 border-color-android18 p-1 text-center color-android18 wp-50 hp-40 f-Ubuntu-B fsp-20 msp--20 mtp--10">
                                    1
                                </div>
                                <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="px-1 msp-40 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" /> 
                            </div>
                            <div className="d-flex position-relative bgc-white psp-20 pep-20 ptp-10 pbp-15 mbp-20 rounded-p-10 border-style-solid border-2 border-color-android18">
                                <div className="position-absolute bgc-shogun borde-numero-30 border-style-solid border-start-0 border-top-0 border-2 border-color-android18 p-1 text-center color-android18 wp-50 hp-40 f-Ubuntu-B fsp-20 msp--20 mtp--10">
                                    2
                                </div>
                                <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="px-1 msp-40 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" /> 
                            </div>
                            <div className="d-flex position-relative bgc-white psp-20 pep-20 ptp-10 pbp-15 mbp-20 rounded-p-10 border-style-solid border-2 border-color-android18">
                                <div className="position-absolute bgc-shogun borde-numero-30 border-style-solid border-start-0 border-top-0 border-2 border-color-android18 p-1 text-center color-android18 wp-50 hp-40 f-Ubuntu-B fsp-20 msp--20 mtp--10">
                                    3
                                </div>
                                <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="px-1 msp-40 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" /> 
                            </div>
                            <div className="d-flex position-relative bgc-white psp-20 pep-20 ptp-10 pbp-15 mbp-20 rounded-p-10 border-style-solid border-2 border-color-android18">
                                <div className="position-absolute bgc-shogun borde-numero-30 border-style-solid border-start-0 border-top-0 border-2 border-color-android18 p-1 text-center color-android18 wp-50 hp-40 f-Ubuntu-B fsp-20 msp--20 mtp--10">
                                    4
                                </div>
                                <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="px-1 msp-40 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" /> 
                            </div>


                        </div>


                    </div>

                </div>

                

                </div>          

                {/* BEGIN PIE DE PAGINA */}
                <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
                    <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
                        ABP &copy; SM
                    </div>
                    <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
                </div>
                <div className="row w-100 position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>
                    <div className="col-1 col-sm-2 p-0 m-0 position-relative">
                        <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
                        <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
                        <div className="w-100 hp-25 bgc-goten"></div>
                    </div>
                    <div className="col-1 col-sm-2 p-0 m-0 position-relative">
                        <img src="images/rotulo_planificacion.svg" className="oculto" alt="" />
                        <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
                        <div className="w-100 hp-25 bgc-bulma"></div>
                    </div>
                    <div className="col-7 col-sm-2 p-0 m-0 position-relative">
                        <img src="images/rotulo_investigacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
                        <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
                        <div className="w-100 hp-25 bgc-android18"></div>
                    </div>
                    <div className="col-1 col-sm-2 p-0 m-0 position-relative">
                        <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
                        <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
                        <div className="w-100 hp-25 bgc-pidgey"></div>
                    </div>
                    <div className="col-1 col-sm-2 p-0 m-0 position-relative">
                        <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
                        <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
                        <div className="w-100 hp-25 bgc-saitama"></div>
                    </div>
                    <div className="col-1 col-sm-2 p-0 m-0 position-relative">
                        <img src="images/rotulo_difusion.svg" className="oculto" alt="" />
                        <div className="w-100 hp-15 bgc-leono rounded-caja-end"></div>
                        <div className="w-100 hp-25 bgc-pikachu"></div>
                    </div>
                </div>
                {/* END PIE DE PAGINA */}
                
              </div>
            </div>
          </div>

  );
}

export default Page032;
