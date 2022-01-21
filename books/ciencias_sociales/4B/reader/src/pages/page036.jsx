import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_036.css";

function Page036(props) {

  const pagina = "036";
  var indexInput = 0;
  const etapa = "3"
  const background = "bgc-android18";
  const color = "color-android18";
  const colorSesion = "color-primary";
  const borderColor = "border-color-android18"
  const bgc_cajas = "bgc-azuka";


  return (

        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className={"dosier-e"+etapa+" page bgc-white overflow-hidden position-relative"} id={"page_"+pagina}>
                    
                  
                    

            <div className="d-flex msp-60 mep-60 mbp-0 mtp-90">
                <div className="row w-100 p-0 m-0">

                    <div className="col-sm-12 col-md-6 position-relative">
                        <div className="position-absolute top-0 start-50 translate-middle wp-100 msp-70 mtp-50 zindex-1"><img src={"images/page_"+pagina+"/img_004.png"} className="hp-60" /></div> 

                        <div className="position-absolute top-0 start-0 translate-middle wp-100 msp-40 mtp-5 zindex-1"><img src={"images/page_"+pagina+"/img_001.png"} className="hp-45" /></div> 
                        <div className="position-absolute top-0 start-0 translate-middle wp-100 msp-155 mtp-5 zindex-1"><img src={"images/page_"+pagina+"/img_001.png"} className="hp-45" /></div> 
                        <div className="position-absolute top-0 start-0 translate-middle wp-100 msp-70 mtp-50"><img src={"images/page_"+pagina+"/img_002.png"} className="wp-160" /></div> 
                        <div className="position-absolute top-0 start-0 translate-middle wp-100 msp-100 mtp-50 lhp-17"><span className="color-white f-Ubuntu-R fsp-15">Nos gustaría saber más sobre...</span></div> 

                        <div className="bgc-white exterior-caja-v1 border-style-solid border-color-raichu border-5 w-100 p-2 f-Ubuntu-L fsp-15 mbp-20">

                            <div className="d-flex flex-column position-relative w-100 text-start mtp-85">
                                <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-400" />
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 position-relative">

                    <div className="position-absolute top-0 start-50 translate-middle wp-100 msp-70 mtp-50 zindex-1"><img src={"images/page_"+pagina+"/img_004.png"} className="hp-60" /></div> 

                        <div className="position-absolute top-0 start-0 translate-middle wp-100 msp-40 mtp-5 zindex-1"><img src={"images/page_"+pagina+"/img_001.png"} className="hp-45" /></div> 
                        <div className="position-absolute top-0 start-0 translate-middle wp-100 msp-155 mtp-5 zindex-1"><img src={"images/page_"+pagina+"/img_001.png"} className="hp-45" /></div> 
                        <div className="position-absolute top-0 start-0 translate-middle wp-100 msp-70 mtp-50"><img src={"images/page_"+pagina+"/img_003.png"} className="wp-190" /></div> 
                        <div className="position-absolute top-0 start-0 translate-middle wp-160 msp-100 mtp-50 lhp-17"><span className="color-white f-Ubuntu-R fsp-15">Otras ideas que podemos implementar en la feria son...</span></div> 

                        <div className="bgc-white exterior-caja-v1 border-style-solid border-color-raichu border-5 w-100 p-2 f-Ubuntu-L fsp-15 mbp-20">

                            <div className="d-flex flex-column position-relative w-100 text-start mtp-85">
                                <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-400" />
                            </div>
                            
                        </div>

                    </div>
                    

                </div>
                
                </div>

                <div className="d-flex flex-column  mbp-100 mtp-0">
                

                    <div className="msp-60 mep-60 mtp-30 mbp-5 f-pixilate-bold fsp-18 lh-sm text-start">¿Cómo me siento?</div>
                        <div className="msp-60 mep-60 mbp-50 psp-20 pep-20 ptp-10 pbp-10  f-Ubuntu-L bgc-white fsp-13 rounded-p-10 ">
                            <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mbp-30">
                                <span className="w-24 f-Ubuntu-L mtp-5 mbp-10">Marco con un <img src={"images/page_"+pagina+"/img_001.svg"} className="hp-17 mtp--2" alt=""/> el recuadro que mejor me represente.</span>
                                <div className="w-100 p-0 pb-3 bgc-white rounded-p-10 position-relative">
                                <div className="position-absolute top-100 start-100 translate-middle wp-100 msp--60 mtp-120"><img src={"images/page_"+pagina+"/img_005.png"} className="wp-150" /></div>
                                <table className="w-100">
                                        <tbody>
                                            <tr>
                                                <td>&nbsp;</td>
                                                <td className={"color-white border-style-solid border-1 "+borderColor+" f-colby-compres-bold ps-2 pe-2 "+background}>
                                                    Nunca</td>
                                                <td className={"color-white border-style-solid border-1 "+borderColor+" f-colby-compres-bold ps-2 pe-2 min-wp-55 "+background}>
                                                    A veces</td>
                                                <td className={"color-white border-style-solid border-1 "+borderColor+" f-colby-compres-bold ps-2 pe-2 "+background}>
                                                    Generalmente</td>
                                                <td className={"color-white border-style-solid border-1 "+borderColor+" f-colby-compres-bold ps-2 pe-2 "+background}>
                                                    Siempre</td>
                                            </tr>
                                            <tr>
                                                <td className={"f-Ubuntu-L fsp-12 text-start psp-5 border-style-solid border-1 "+borderColor+" "+bgc_cajas}>Nos involucramos en el proyecto y nos responsabilizamos por las tareas que debemos hacer.</td>
                                                <td className={"border-style-solid border-1 "+borderColor}></td>
                                                <td className={"border-style-solid border-1 "+borderColor}></td>
                                                <td className={"border-style-solid border-1 "+borderColor}></td>
                                                <td className={"border-style-solid border-1 "+borderColor}></td>

                                            </tr>
                                            <tr>
                                                <td className={"f-Ubuntu-L fsp-12 text-start psp-5 border-style-solid border-1 "+borderColor+" "+bgc_cajas}>Ante una petición de apoyo de alguien del grupo, intentamos ayudar antes de preguntarle al profesor.</td>
                                                <td className={"border-style-solid border-1 "+borderColor}></td>
                                                <td className={"border-style-solid border-1 "+borderColor}></td>
                                                <td className={"border-style-solid border-1 "+borderColor}></td>
                                                <td className={"border-style-solid border-1 "+borderColor}></td>
                                            </tr>
                                            <tr>
                                                <td className={"f-Ubuntu-L fsp-12 text-start psp-5 border-style-solid border-1 "+borderColor+" "+bgc_cajas}>Respetamos el turno de la palabra.</td>
                                                <td className={"border-style-solid border-1 "+borderColor}></td>
                                                <td className={"border-style-solid border-1 "+borderColor}></td>
                                                <td className={"border-style-solid border-1 "+borderColor}></td>
                                                <td className={"border-style-solid border-1 "+borderColor}></td>
                                            </tr>
                                            <tr>
                                                <td className={"f-Ubuntu-L fsp-12 text-start psp-5 border-style-solid border-1 "+borderColor+" "+bgc_cajas}>Llegamos a acuerdos y decisiones compartidas después de que cada uno ofrezca su opinión.</td>
                                                <td className={"border-style-solid border-1 "+borderColor}></td>
                                                <td className={"border-style-solid border-1 "+borderColor}></td>
                                                <td className={"border-style-solid border-1 "+borderColor}></td>
                                                <td className={"border-style-solid border-1 "+borderColor}></td>
                                            </tr>
                                        </tbody>
                                    </table>
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

                </div>
            </div>
        </div>

  );
}

export default Page036;
