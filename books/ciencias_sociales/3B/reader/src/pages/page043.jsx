import React from "react";
import ModalVideo from "../components/ModalVideo";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import "./page_043.css";

function Page043(props) {

  const pagina = "043";
  var indexInput = 0;
  const etapa = "5"
  const background = "bgc-saitama";
  const color = "color-saitama";
  const bgc_cajas = "bgc-bobafett";
  return (
    <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
              <div className="page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
               {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v2 bgc-saitama d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className="caja wp-150 text-center fsp-24 f-IntroRustG-Base color-saitama">SESIÓN 11</div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Tomamos decisiones</div>
            </div>

          </div> 
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-30 container-titulo-global mbp-40">
                <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 "+color}>
                Conociendo otras fiestas
                </div>
                <div className="d-flex">
                    {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_002.svg"} alt=""  /> */}
                    <div className={"f-ccdigitaldelivery-bold fsp-35 "+color}>
                      1
                    </div>
                    <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                    Completo y comparto con mi grupo.
                    </div>
                    {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                    {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                    {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                    <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
                </div>
            </div>




          <div className="d-flex msp-100 mep-60 position-relative mtp-30">
                <div className="border border-3 p-3 hp-300 w-100 ">
                  <div><img src="images/page_043/img_004.png" className="position-absolute top-50 start-0 translate-middle wp-40" alt=""></img></div> 
                  <div className="f-Ubuntu-L text-start fsp-15 lh-sm msp-20 mbp-30">¿Qué elementos tiene la fiesta que se muestra en la revista?</div>
                  
                  <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-0 px-1 fsp-15 msp-15 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-190" />
                </div>
            
          </div>



          

          <div className="ptp-30 psp-60 pep-60">
              <div className="f-Ubuntu-M fsp-20 color-saitama text-start">Tomamos decisiones</div>
          </div>
       
       
          <div className="ptp-5 psp-60 pep-60">
          <div className="f-Ubuntu-L text-start fsp-17 lh-sm ">Junto con la información que recopilamos en las etapas anteriores para presentar en nuestra fiesta, montaremos un stand cultural.</div>
          </div>

          <div className="ptp-0 container-titulo-global mbp-0">
                {/* <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 "+color}>
                Conociendo otras fiestas
                </div> */}
                <div className="d-flex">
                    {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_002.svg"} alt=""  /> */}
                    <div className={"f-ccdigitaldelivery-bold fsp-35 "+color}>
                      2
                    </div>
                    <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                    Nuestro stand de la fiesta tendrá...
                    </div>
                    {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                    {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                    {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                    {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                </div>
            </div>

          <div className="row w-100  psp-60 pep-60 mbp-70"> 
           
            <div className="col-lg-12 col-md-12 m-0 p-0 bgc-white d-flex justify-content-end position-relative ">
            <div className="position-absolute top-50 start-0 translate-middle mtp-60 msp-105 zindex-1 visible-695"><img src={"images/page_"+pagina+"/img_006.png"} className="wp-100" alt="" /></div>

              <div className="w-100 d-flex justify-content-end mbp-70">
                    <div className="mt-2 border-style-solid border-2 border-color-goku bgc-jugador001 p-2 min-hp-340 wp-450 position-relative">
                    <div className="d-flex align-items-center p-1 w-100  "> 
                          <div className="d-inline wp-30 hp-30 border-style-solid border-1 border-color-dark bgc-white"><img src="images/page_043/img_003.svg" className="hp-20  " alt=""></img></div>
                          <div className="d-inline f-Ubuntu-L text-start fsp-17 lh-sm  psp-10 lh-sm">Música diversa.</div>
                      </div>
                    <div className="d-flex align-items-center p-1 w-100  "> 
                          <div className="d-inline wp-30 hp-30 border-style-solid border-1 border-color-dark bgc-white"><img src="images/page_043/img_003.svg" className="hp-20  " alt=""></img></div>
                          <div className="d-inline f-Ubuntu-L text-start fsp-17 lh-sm  psp-10 lh-sm">Nuestros textos literarios sobre diversidad.</div>
                      </div>
                    <div className="d-flex align-items-center p-1 w-100  "> 
                          <div className="d-inline wp-30 hp-30 border-style-solid border-1 border-color-dark bgc-white"><img src="images/page_043/img_003.svg" className="hp-20  " alt=""></img></div>
                          <div className="d-inline f-Ubuntu-L text-start fsp-17 lh-sm  psp-10 lh-sm">Obras artísticas que crearemos sobre diversidad.</div>
                      </div>
                    <div className="d-flex align-items-center p-1 w-100  "> 
                          <div className="d-inline wp-30 hp-30 border-style-solid border-1 border-color-dark bgc-white"><img src="images/page_043/img_003.svg" className="hp-20  " alt=""></img></div>
                          <div className="d-inline f-Ubuntu-L text-start fsp-17 lh-sm  psp-10 lh-sm">Muestra de diversidad gastronómica.</div>
                      </div>
                    <div className="d-flex align-items-center p-1 w-100  "> 
                          <div className="d-inline wp-30 hp-30 border-style-solid border-1 border-color-dark bgc-white"><InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-30" /></div>
                          <div className="d-inline f-Ubuntu-L text-start fsp-17 lh-sm  psp-10 lh-sm">Muestra de vestimenta típica.</div>
                      </div>
                    <div className="d-flex align-items-center p-1 w-100  "> 
                          <div className="d-inline wp-30 hp-30 border-style-solid border-1 border-color-dark bgc-white"><InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" /></div>
                          <div className="d-inline f-Ubuntu-L text-start fsp-17 lh-sm  psp-10 lh-sm">Representación de diversas tradiciones.</div>
                      </div>
                    <div className="d-flex align-items-start  p-1 w-100 mbp-10 "> 
                          <div className="d-inline wp-35 hp-30 border-style-solid border-1 border-color-dark bgc-white"><InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" /></div>
                          <div className="d-inline f-Ubuntu-L text-start fsp-17 lh-sm mt-1 psp-10 lh-sm "> Otra. 
                          </div>
                          <div className="w-100 m-0 p-0 ">
                          <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-0 px-1 fsp-15 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                          </div>
                      </div>

                      {/* <div><img src="images/page_043/img_006.png" className="position-absolute bottom-0 start-0 wp-100 ms--30 visible-768" alt=""></img></div>  */}
                    </div>
                  </div>
            </div>
          
            </div>

       
    


                {/* PIE DE PAGINA */}
                <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
                  <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60 " style={{ transform: `rotate(270deg)`, color: "dark" }}>
                    ABP &copy; SM
                  </div>
                  <div className="bgc-jawa wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
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

export default Page043;
