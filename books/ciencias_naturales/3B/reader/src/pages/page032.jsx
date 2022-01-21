import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_032.css";

function Page032(props) {

  const pagina = "032";
  var indexInput = 0;
  const etapa = "3"
  const background = "bgc-android18";
  const color = "color-android18";
  const colorSesion = "color-primary";
  const borderColor = "border-color-android18"
  const bgc_cajas = "bgc-goku";


  return (

    <div className="wrapper bgc-light">
        <div className="d-flex flex-column align-items-center pbp-20">
            <div className="page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
        <div className="cabecera-v1 hp-80 bgc-android18">
        </div>

        <div className="ptp-30 container-titulo-global mbp-10">
                {/* <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 "+color}>Ahora podremos comprobar qué ocurre en nuestro entorno</div> */}
                <div className="d-flex">
                    {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_005.svg"} alt=""  /> */}
                    <div className={"f-ccdigitaldelivery-bold fsp-35 "+color}>2</div>
                    <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                    Investigamos qué instituciones públicas o privadas se dedican al reciclaje de desechos en nuestra comuna.
                    </div>
                    {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                    {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                    {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                    {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_002.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                </div>
        </div>


        <div className="d-flex msp-60 mep-60 mbp-0 mtp-0">

            <div className="row m-0 psp-60 pep-60 ptp-10 pbp-0 w-100">

                <div className="col-sm-12 col-md-12 position-relative pbp-20">
                    <div className="position-absolute top-0 start-100 translate-middle msp-0 mtp-0"><img src={"images/page_"+pagina+"/img_001.png"} className="wp-70 " alt="" /></div> 
                    <div className="position-absolute top-100 start-100 translate-middle msp-20 mtp-0"><img src={"images/page_"+pagina+"/img_002.png"} className="wp-150 " alt="" /></div> 
                    
                    <div className="d-flex flex-column psp-20 pep-20 ptp-0 pbp-10 bgc-kano border-style-solid border-2 border-color-goku w-100">

                        <div className="d-flex f-Ubuntu-R fsp-20 psp-0 pep-10 mtp-20 text-start">
                            <div className="f-colby-compres-medium fsp-20 color-dark w-100">Nombre de la institución:</div>        
                        </div>
                        <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />

                        <div className="d-flex f-Ubuntu-R fsp-20 psp-0 pep-10 mtp-20 text-start">
                            <div className="f-colby-compres-medium fsp-20 color-dark w-100">Tipo de institución:</div>        
                        </div>
                        <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-40" />

                        <div className="d-flex f-Ubuntu-R fsp-20 psp-0 pep-10 mtp-20 text-start">
                            <div className="f-colby-compres-medium fsp-20 color-dark w-100">Labor que desempeña:</div>        
                        </div>
                        <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-180" />

                        <div className="d-flex f-Ubuntu-R fsp-20 psp-0 pep-10 mtp-20 text-start">
                            <div className="f-colby-compres-medium fsp-20 color-dark w-100">¿Cómo ayuda a la ciudadanía esta institución?</div>        
                        </div>
                        <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-180" />

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
