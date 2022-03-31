import React from "react";
import InputBox from "../components/InputBox";
import "./page_012.css";

function Page012(props) {

  const pagina = "012";
  var indexInput = 0;
  const etapa = "1"
  const background = "bgc-goten";
  const color = "color-goten";
  const borderColor = "border-color-goten"
  const borderColorTable = "border-color-genos"
  const bgc_cajas = "bgc-genos";

  return (
      
    <div className="wrapper bgc-light">
        <div className="d-flex flex-column align-items-center pbp-20">
            <div className={"dosier-e"+etapa+"_2 page bgc-white overflow-hidden position-relative"} id={"page_"+pagina}>

        <div class="d-flex justify-content-center global-margin">
            <div class="cb-titulo-aceptamos text-center fsp-25 f-IntroRustG-Base mtp-10 mtp-100 mbp-20 color-goten">¡ACEPTAMOS EL DESAFÍO!</div>
               </div>
               <p className="text-start cb-text-inicial f-Ubuntu-R fsp-15 global-margin">  Respondemos la invitación y nos comprometemos.</p>
            
            <div className="rounded-p-20 ptp-5 pbp-5 bgc-marcianos mtp-10 global-margin">
                <div className="cb-contenedor-mail-p12 global-margin">
                  <div className="cb-invitacion-p12 psp-35 f-Ubuntu-R fsp-16">RE: Invitación a ser brigadista escolar</div>
                  <div className="pep-15 psp-10 ptp-10 pbp-10">
                    <div className="d-flex justify-content-between mbp-5"> 
                      <div><img src="images/page_012/img_003.png" className="cb-computador-carta psp-30" alt=""></img></div> 
                      <div className="cb-datos-12 msp-10 align-items-center d-flex">
                        <div className="text-start psp-10 f-Ubuntu-R fsp-16"> <b>Estudiantes 4° básico</b> 4_basico@colegio.cl <br /> Para Macarena </div>
                      </div>
                    </div>
                  </div>
                
              <div className="cb-texto-mail mbp-20 position-relative">
                  <div class="cb-carta-content f-Ubuntu-L text-start fsp-15">
                    <img src="images/page_012/img_002.png"  className="cb-ipad-p12" alt=""></img>
                    <img src="images/page_012/img_007.png"  className="cb-iconos-p12" alt=""></img>
                    <img src="images/page_012/img_004.png"  className="cb-celu-p12" alt=""></img>
                      <p className="f-Ubuntu-R fw-700"> Estimada Macarena:</p>
                      <span className="f-Ubuntu-L fsp-15">Gusto en saludarte. Nos sentimos</span>
                      <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35 mbp-5" />

                      <span className="f-Ubuntu-L fsp-15">de recibir tu invitación. Por ello, aceptamos el desafío y nos comprometemos a </span>

                      <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35 mbp-5" />

                      <span className="f-Ubuntu-L fsp-15">También queremos comentarte que nuestra brigada se llamará:</span>
                      <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35 mbp-5" />
                      <span className="f-Ubuntu-L fsp-15">lo que nos motiva aún más a comenzar.</span> <br />
                      <span className="f-Ubuntu-L fsp-15">Se despiden: </span>
                      <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                        
                  </div>
                </div>
              </div>  
              </div>

             <div className="global-margin mbp-100">

                    <div className="cb-ejercicio-final-p12 mtp-20 fsp-18 f-pixilate-bold text-start">¿Cómo vamos?</div>
                    <div className="w-100 p-2 pb-3 f-Ubuntu-L bgc-white fsp-15 rounded-p-10 ps-4 mbp-60 f-Ubuntu-L position-relative"> 
                    <div className="position-absolute top-100 start-100 translate-middle wp-100  msp--80 mtp--100 zindex-1"><img src={"images/page_"+pagina+"/img_005.png"} className="wp-120" alt="" /></div>
                            <div className="d-flex w-100 align-items-start mbp-15 mtp-20"> 
                              <img src="images/page_010/arrow.svg" className="mep-5 mtp-5 cb-flecha"></img>             
                              <span className="triangulo text-start w-70">¿Qué me resulta mejor cuando trabajo en equipo?</span>
                            </div> 
                            <div className="d-flex w-70">
                              <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" /> 
                            </div>
                            
                            <div className="d-flex align-items-start w-100 mbp-15 mtp-20">  
                              <img src="images/page_010/arrow.svg" className="mep-5  mtp-5 cb-flecha"></img>            
                              <span className="triangulo w-70 text-start">¿Cuál es la mejor cualidad de cada integrante de mi equipo?</span>
                            </div> 
                            <div className="d-flex w-70">
                              <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" /> 
                            </div>
                    </div>
                    
             </div>
              

                  {/* Begin pie de página */}
                  <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
                    <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
                      ABP &copy; SM
                    </div>
                    <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
                  </div>
                  {/* End pie de página */}
                    
                    

                </div>
                </div>
                </div>

            

  );
}

export default Page012;
