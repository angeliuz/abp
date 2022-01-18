import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_028.css";

function Page028(props) {

  const pagina = "028";
  var indexInput = 0;



  return (

    <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
              <div className="page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
            <div className="cabecera-v1 hp-80 bgc-android18">
            </div>
            <div className="ptp-10 container-titulo-global mbp-0">
                <div className="d-flex">
                    <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_028/img_002.svg" alt=""  />
                    <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">2</div>
                    <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Reflexiono en grupo y completo.</div>

                </div>
            </div>
            
            <div className="row container-row m-0 psp-60 pep-60">

                <div className="col-md-12 col-lg-12 position-relative">
                    <div className="position-absolute top-0 start-100 translate-middle msp--40 mtp-25 visible-768"><img src="images/page_028/img_001.png" className="wp-50 " alt="" /></div>

                    <div className="mbp-20 mtp-10 msp-20 mep-20">
                        <div className="p-2 min-hp-100 border-style-solid border-2 rounded-p-10 border-color-lightDark">
                            <div className="f-Ubuntu-L fsp-16 msp-10 mep-10 text-start"> ¿Qué derecho o derechos son pasados a llevar en la situación planteada en la actividad anterior?</div>
                            <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                        </div>
                    </div>
                </div>
                
                <div className="col-12 justify-content-center mtp-10 mbp-70 psp-80 pep-80 pbp-50 position-relative">
                    <div className="position-absolute top-50 start-0 translate-middle msp-40 mtp-25 visible-768"><img src="images/page_028/img_002.png" className="wp-40 " alt="" /></div>
                    <div className="position-absolute top-50 start-100 translate-middle msp--40 mtp-220 visible-768"><img src="images/page_028/img_003.png" className="wp-70 " alt="" /></div>
                    <div className="mx-4 p-2 rounded-p-10 bgc-betty">
                        <div className="mx-3">
                            <div className="color-dark f-Ubuntu-L ptp-10 pbp-10 psp-10 pep-10 text-start">¿Qué actitud debería adoptar cada personaje para que los derechos de todos sean respetados?</div>
                            <div className="d-flex flex-column f-Ubuntu-L bgc-white psp-20 ptp-10 pbp-15 pep-20 rounded-p-10 text-start mbp-20"> 
                                <span>El o la estudiante que ve que insultan a otro.</span>
                                <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                            </div>
                            <div className="d-flex flex-column f-Ubuntu-L bgc-white psp-20 ptp-10 pbp-15 pep-20 rounded-p-10 text-start mbp-20"> 
                                <span>El o la estudiante que insulta.</span>
                                <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                            </div>
                            <div className="d-flex flex-column f-Ubuntu-L bgc-white psp-20 ptp-10 pbp-15 pep-20 rounded-p-10 text-start mbp-20"> 
                                <span>El estudiante al que insultan.</span>
                                <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
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

export default Page028;
