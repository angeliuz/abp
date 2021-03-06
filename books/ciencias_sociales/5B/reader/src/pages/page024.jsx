import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_024.css";

function Page024(props) {

  const pagina = "024";
  var indexInput = 0;



  return (

    <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
              <div className="page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
            <div className="cabecera-v1 hp-80 bgc-android18">
            </div>
            <div className="ptp-10 container-titulo-global mbp-0">
                <div className="d-flex">
                    <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_024/img_002.svg" alt=""  />
                    <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">2</div>
                    <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Me entrevisto en pareja. Luego, concluyo.</div>
                </div>
            </div>
            <div className="d-flex">
                <div className="d-flex w-90 align-items-top flex-wrap mbp-20">
                    <span className="psp-70 f-Ubuntu-L text-star ptp-10">La persona que entrevist√© es:</span>
                    <div className="p-1 flex-grow-1">
                        <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                    </div>
                </div>
            </div>

            <div className="row container-row px-5">
                <div className="col-sm-12 col-md-6 position-relative align-items-stretch mbp-70">
                    <div className="position-absolute top-100 start-0 translate-middle visible-768 zindex-1 msp-60 mtp-70"><img src="images/page_024/img_006.png" className="hp-60" alt=""/></div>
                    <div className="h-100 box-color-24-1">
                        <div className="f-Ubuntu-B alinea rounded-set-10 bgc-saitama w-100 p-2 text-center color-white">¬ŅQu√© ejemplo o caso de<br /> discriminaci√≥n conoces?</div>
                        <div className="bgc-white h-100 p-2  rounded-seb-20 border-style-solid border-color-saitama border-2">
                            <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="h-100 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-175" />
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 position-relative align-items-stretch mbp-70">
                    <div className="position-absolute top-0 start-100 translate-middle wp-100"><img src="images/page_024/img_002.png" className="w-30 mep-70 mtp-30" alt="" /></div>
                    <div className="position-absolute top-100 start-100 translate-middle visible-768 zindex-1 msp--60 mtp-70"><img src="images/page_024/img_006.png" className="hp-60" alt=""/></div>
                    <div className="position-absolute top-50 start-0 translate-middle mtp-50 visible-768"><img src="images/page_024/img_005.png" className=" " alt=""/></div>
                    <div className="h-100 box-color-24-2">
                    <div className="f-Ubuntu-B alinea rounded-set-10 bgc-leia w-100 p-2 text-center color-white">¬ŅPor qu√© condici√≥n o caracter√≠stica<br /> se discrimin√≥ en dicho caso?</div>
                    <div className="bgc-white p-2 h-100 rounded-seb-20 border-style-solid border-color-leia border-2">
                        <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="h-100 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-175" />
                    </div>
                    </div>
                </div>

                <div className="col-md-12 col-lg-12 position-relative ">
                    
                    <div className="mbp-20 mtp-10 msp-20 mep-20">
                    <div className="f-Ubuntu-B alinea rounded-set-10 bgc-arlo w-100 p-2 text-center color-white">¬ŅQu√© medidas se podr√≠an adoptar para<br /> resguardar los derechos en este caso?</div>
                    <div className="bgc-white  p-2  rounded-seb-20 border-style-solid border-color-arlo border-2">
                        <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-175" />
                    </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-12 ">
                    <div className="psp-20 w-100 f-Ubuntu-R fsp-16 text-start">A partir de las entrevistas, comentamos.</div>
                </div>
                <div className="col-md-12 col-lg-12 mbp-70 position-relative">
                    
                    <div className="position-absolute top-50 start-0 translate-middle wp-100"><img src="images/page_024/img_004.png" className="w-45 " alt=""/></div>
                    <div className="mbp-20 mtp-10 msp-20 mep-20">
                    <div className="bgc-white min-hp-300 p-2  border-style-solid border-color-chitara border-5 rounded-p-20 border-color-sextario">

                        <div className="f-Ubuntu-L fsp-16 p-1 text-start">¬ŅQu√© llam√≥ nuestra atenci√≥n de las respuestas?</div>
                    
                        <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-250" />


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

export default Page024;
