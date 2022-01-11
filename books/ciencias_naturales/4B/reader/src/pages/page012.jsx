import React from "react";
import InputBox from "../components/InputBox";
import "./page_012.css";

function Page012(props) {

  const pagina = "012";
  var indexInput = 0;

  return (
      
    <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-50">
                <div className="page cb-page12 bgc-white position-relative" id={"page_"+pagina}>
                    <div className="cb-contendor-carta ptp-5 pbp-5 bgc-marcianos mtp-10">
                <div className="cb-contenedor-mail-p12">
              <div className="cb-invitacion-p12 psp-35 f-Ubuntu-R fsp-16">RE: Invitación a ser brigadista escolar</div>
              <div className="pep-15 psp-10 ptp-10 pbp-10">
                <div className="d-flex justify-content-between mbp-5"> 
                  <div><img src="images/page_012/img_003.svg" className="cb-computador-carta psp-30" alt=""></img></div> 
                  <div className="cb-datos-1 msp-10 align-items-center d-flex">
                    <div className="text-start psp-10 f-Ubuntu-l fsp-16"> Estudiantes 4° básico 4_basico@colegio.cl <br /> Para Macarena </div>
                  </div>
                </div>
              </div>
             
              <div className="cb-texto-mail mbp-20">
                  <div class="cb-carta-content f-Ubuntu-L text-start">
                    <img src="images/page_012/img_003.png"  className="cb-cerrar-carta-p07" alt=""></img>
                      <p className="f-Ubuntu-R fw-700"> Estimada Macarena:</p>
                      <p>Gusto en saludarte. Nos sentimos</p>
                      <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />

                      <p>¿de recibir tu invitación. Por ello, aceptamos el desafío y nos comprometemos a </p>

                      <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />

                      <p>¡Sé que lo harán excelente! ¿Qué dicen? Quedo atenta a su respuesta.<br />
                        Reciban un cordial saludo de mi parte y de la brigada comunal a la que
                        represento<br/></p>
                        <p className="justify-content-end d-flex">Atte. Macarena, brigadista comunal.</p> 
                  </div>
                </div>
              </div>  
              </div>

             
                    <div className="cb-ejercicio-final-p10 mtp-20 f-pixilate-bold text-start">¿Cómo voy?</div>
                    <div className="cb-ejercicio-final-p10 p-2 pb-3 f-Ubuntu-L bgc-white fsp-15 rounded-p-10 ps-4"> 
                        <div className="d-flex w-100 align-items-center mbp-15"> 
                        <img src="images/page_010/arrow.svg" className="mep-5 cb-flecha"></img>             
                         <span className="triangulo text-start">¿Qué me resulta mejor cuando trabajo en equipo?</span>
                        </div> 
                        <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-75" /> 
                        
                        <div className="d-flex w-100 align-items-center mbp-15">  
                        <img src="images/page_010/arrow.svg" className="mep-5 cb-flecha"></img>            
                         <span className="triangulo">¿Cuál es la mejor cualidad de cada integrante de mi equipo?</span>
                        </div> 
                        <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-130" /> 
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
