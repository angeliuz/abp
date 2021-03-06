import React from "react";
import "./page_006.css";

function Page006(props) {
  const pagina = "006";
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
            <div className={"page "+background+" position-relative pagina-cohete"} id={"page_"+pagina}>
                       
                        <div className="w-100 mt-15 pe-5 ps-5 ">
                            <div className="pc-lineas-v2 pbp-80">
                                <div className="pc-cabecera">
                                    <div className="pc-titulo-12 color-white fsp-20 lh-sm f-durotype-aspiranar-bold">
                                    Mis objetivos <br /> en esta etapa son: 
                                    </div>
                                    <div className="pc-cohete" ><img src="images/generales/cohete.png" alt=""/>
                                    </div>
                                </div>

                        <div className="pc-caja-objetivos-1">
                            <div className="color-hardDark fsp-16 lh-sm f-pixilate-regular text-start">
                                <div className={"d-flex "+bgc_cajas+" psp-20 ptp-20 pbp-15 pep-20 rounded-p-10 pc-caja-outline-e"+etapa}> 
                                    <div className="d-flex wp-23"> 
                                        <img src={"images/generales/flecha_e"+etapa+".svg"} className="mbp-20 mep-5 wp-20" alt=""/>
                                    </div>  
                                    <div className="d-flex"> 
                                      <span className="fsp-16 f-IntroRustG-Base text-start"> 
                                      CONOCER <span className="fsp-16 text-start f-pixilate-regular">
                                         el desaf??o<br />  que nos plantean.
                                        </span> 
                                      </span>
                                    </div>   
                                </div>
                            </div>
                        </div>
                        <div className="pc-caja-objetivos-2">
                            <div className="color-hardDark fsp-16 lh-sm f-pixilate-regular text-start">
                                <div className={"d-flex "+bgc_cajas+" psp-20 ptp-20 pbp-15 pep-20 rounded-p-10 pc-caja-outline-e"+etapa}> 
                                    <div className="d-flex wp-23"> 
                                        <img src={"images/generales/flecha_e"+etapa+".svg"} className="mbp-25 mep-5 wp-20" alt=""/>
                                    </div> 
                                    <div className="d-flex"> 
                                      <span className="fsp-16 text-start f-pixilate-regular">
                                        <span className="fsp-16 f-IntroRustG-Base text-start">COMPROMETERME </span> 
                                        con<br /> este desaf??o.
                                      </span>
                                    </div> 
                                </div>
                            </div>
                        </div>
                        
                    </div>
                
                    <div className="d-flex justify-content-center max-img mbp-50 ">
                        <div className="">
                            <img src={"images/page_"+pagina+"/img_003.jpg"} className="img-fluid" alt="" />
                        </div>
                    </div>
                    {/* Begin pie de p??gina */}
                    <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
                        <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60 " style={{ transform: `rotate(270deg)`, color: "white" }}>
                            ABP &copy; SM
                        </div>
                        <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
                    </div>
                    {/* End pie de p??gina */}
                    
                    
                </div>
            </div>
        </div>

    </div>      


      // <div className="wrapper bgc-light">
      //   <div className="d-flex flex-column align-items-center pbp-20">
      //     <div className="page bgc-goten position-relative" id={"page_"+pagina}>
      //       <div className="w-100 mt-15 pe-5 ps-5 ">
      //         {/* Begin background lineas */}
      //         <div className="cb-lineas-6 pbp-60">
      //           <div className="cb-cabecera">
      //             <div className="cb-titulo-6 color-white fsp-20 lh-sm f-pixilate-bold">
      //             Mis objetivos <br /> en esta etapa son: 
      //             </div>
      //             <div className="cb-cohete-6">
      //               <img src="images/page_006/img_001.png" alt="" />
      //             </div>
      //           </div>
      //           {/* Begin Contendor1 */}
      //           <div className="cb-contenedor-6-1">
      //             <div className="color-hardDark fsp-16 lh-sm f-pixilate-regular text-start">
      //               <div className="d-flex bgc-piccolo psp-20 ptp-20 pbp-15 pep-20 rounded-p-10 cb-outline-6"> 
      //                 <div className="d-flex"> 
      //                   <img src="images/page_006/arrow.svg" className="mbp-20 mep-5" alt="" />
      //                 </div>  
      //                 <div className="d-flex"> 
      //                   <span className="fsp-16 f-IntroRustG-Base text-start"> 
      //                   CONOCER
      //                     <span className="fsp-16 text-start f-pixilate-regular">
      //                       <br /> el desaf??o que nos plantean.
      //                     </span> 
      //                   </span>
      //                 </div>  
      //               </div>
      //             </div>
      //           </div>
      //           {/* End Contendor1 */}
      //           {/* Begin Contendor2 */}
      //           <div className="cb-contenedor-6-2">
      //             <div className="color-hardDark fsp-16 lh-sm f-pixilate-regular text-star">
      //               <div className="d-flex bgc-piccolo psp-20 ptp-20 pbp-15 pep-20 rounded-p-10 cb-outline-6"> 
      //                   <div className="d-flex"> 
      //                     <img src="images/page_006/arrow.svg" className="mbp-20 mep-5" alt="" />
      //                   </div> 
      //                   <div className="d-flex"> 
      //                     <span className="fsp-16 text-start f-pixilate-regular">
      //                       <span className="fsp-16 f-IntroRustG-Base text-start"> 
      //                       COMPROMETERME
      //                       </span> 
      //                       <br /> con el desaf??o.
      //                     </span>
      //                   </div> 
      //               </div>
      //             </div>
      //           </div>
      //           {/* End Contendor2 */}
      //         </div>
      //         {/* End background lineas */}

      //         <div className="d-flex justify-content-center max-img mb-5">
      //           <div className="">
      //             <img src="images/page_006/img_003.jpg" className="img-fluid" alt="" />
      //           </div>
      //         </div>
            
      //         {/* Begin pie de p??gina */}
      //         <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
      //           <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
      //             ABP &copy; SM
      //           </div>
      //           <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
      //         </div>
      //         {/* End pie de p??gina */}
            
      //       </div>
      //       </div>
      //     </div>
      //   </div>

  );
}

export default Page006;
