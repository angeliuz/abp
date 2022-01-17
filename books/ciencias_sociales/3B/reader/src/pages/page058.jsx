import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import "./page_057.css";

function Page057(props) {

  const pagina = "057";
  var indexInput = 0;

  return (
      <div className="wrapper bgc-light">
        <div className="d-flex flex-column align-items-center pbp-20">
          <div className="page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
                {/* BEGIN CABECERA VERSIÓN 2 */}
                <div className="cabecera-v2 bgc-pikachu d-flex flex-column">
                  <div className="d-flex contenedor-cabecera-v2 align-items-center ptp-40 psp-30 pep-30">
                    <div className="caja-seccion wp-160 hp-60 d-flex justify-content-center ptp-10 mtp-5 color-pikachu fsp-24 f-IntroRustG-Base">SESIÓN 15</div>
                    <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">¡Tenemos una fiesta!</div>
                  </div>
                </div> 
                {/* END CABECERA VERSIÓN 2 */}
                <div className="ptp-10 psp-60 mbp-80 cb-padding">
                    <div className="f-Ubuntu-R fsp-18 ptp-18 color-pikachu fw-700 text-start">Evalúo nuestra fiesta </div>  
                        <div className="cb-contenedor-p57 mtp-20 mbp-20 justify-content-center pe-2 ps-2 pbp-15">
                        <div className="bgc-white cb-block-2-p57 w-100 p-3 f-Ubuntu-L fsp-15 text-start" >
                            <img src="images/page_057/img_002.png" className="cb-sujetador-1" alt="" />   
                            <p>Lo que mejor resultó de nuestra fiesta fue...</p>
                            <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170" /> 
                        </div>
                    <div className="bgc-white cb-block-p57 w-100 p-3 f-Ubuntu-L fsp-15  border-color-kitana border-4  position-relative text-start" >
                        <img src="images/page_057/img_002.png" className="cb-sujetador-2" alt="" />  
                        <p>Creemos que nos faltó o pudimos mejorar… </p>
                        <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170" /> 
                    </div>

                </div>
                <div className="d-flex">
                    <div className="f-Ubuntu-R fsp-18 ptp-18 color-pikachu fw-700 text-start">Reflexiono sobre lo aprendido en este proyecto </div> 
                </div> 
                <div className="cb-contenedor-dos-p57 justify-content-center pe-2 ps-2 pbp-15">
                    <div className="w-100 position-relative">
                        <div className="bgc-kazuha cb-outline-p57 p-3 f-pixilate-bold fsp-15 border-color-garou cb-caja1-p57" >
                        <p className="text-start">¿Qué aprendí?</p>
                        <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170" />  
                         </div>
                         <div className="bgc-marcianos cb-outline-p57 p-3 f-pixilate-bold fsp-15 border-color-garou cb-caja2-p57" >
                         <p className="text-start ">¿Con quién aprendí?</p>
                         <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170" /> 
                        </div>
                        </div>
                     <div className="w-100 position-relative">
                        <img src="images/page_057/img_003.png" className="cb-texto-nube" alt="" /> 
                         <div className="bgc-sayu p-3 cb-outline-p57 f-pixilate-bold fsp-15 border-color-garou cb-caja3-p57" >
                         <p className="cb-psp text-start">¿Cómo aprendí?</p>
                         <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170" />  
                         </div>
                         <div className="bgc-windu  cb-outline-p57 p-3 f-pixilate-bold fsp-15 border-color-garou cb-caja4-p57" >
                             <p className="cb-psp2 text-start">¿Cómo me he sentido aprendiendo?</p>
                             <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170" /> 
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
              <div className="col-1 col-sm-2 p-0 m-0 position-relative">
                <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
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
              <div className="col-7 col-sm-2 p-0 m-0 position-relative">
                <img src="images/rotulo_difusion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
                <div className="w-100 hp-15 bgc-leono rounded-caja-end"></div>
                <div className="w-100 hp-25 bgc-pikachu"></div>
              </div>
            </div>

          </div>
        </div>
       </div>
        
      
  );
}

export default Page057;
