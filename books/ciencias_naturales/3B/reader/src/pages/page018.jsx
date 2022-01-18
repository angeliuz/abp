import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_018.css";

function Page018(props) {

  const pagina = "018";
  var indexInput = 0;
  const etapa = "2"
  const background = "bgc-bulma";
  const color = "color-bulma";
  const borderColor = "border-color-bulma"
  const bgc_cajas = "bgc-draco";


  return (

    <div className="wrapper bgc-light">
        <div className="d-flex flex-column align-items-center pbp-20">
            <div className={"dosier-e"+etapa+" page bgc-white overflow-hidden position-relative"} id={"page_"+pagina}>
                

                <div className="ptp-50 container-titulo-global mbp-0">
                    {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 "+color}>
                    Plan de trabajo
                    </div> */}
                    <div className="d-flex psp-20">
                        {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_016/img_001.svg" alt=""  /> */}
                        <div className={"f-ccdigitaldelivery-bold fsp-35 "+color}>3</div>
                        <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                        Pensamos en lo que vamos a necesitar para realizar nuestro proyecto.
                        </div>
                        {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                        {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                        {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                        {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_007/revista65.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                    </div>
                </div>                    
                

        <div className="d-flex msp-60 mep-60 mbp-0 mtp-30">
              <div className="row w-100 p-0 m-0">

                <div className="col-sm-12 col-md-6 position-relative">
                  <div className="position-absolute top-0 start-0 translate-middle wp-100 msp-20 mtp-10"><img src={"images/page_"+pagina+"/img_001.png"} className="wp-40" /></div> 

                    <div className="bgc-white exterior-caja-v1 border-style-solid  border-color-freezer border-2 w-100 p-2 f-Ubuntu-L fsp-15 mbp-20">
                        <div className="d-flex interior-caja-v1 bgc-bison text-start min-hp-30">
                            <div className="w-100 text-center f-Ubuntu-R">Materiales</div>
                        </div>
                        <div className="d-flex flex-column position-relative w-100 text-start">
                            <span className="mtp-10 text-start">
                                Para nuestro proyecto necesitaremos...
                            </span>
                          <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-400" />
                        </div>
                        
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 position-relative">
                <div className="position-absolute top-0 start-0 translate-middle wp-100 msp-40 mtp-10"><img src={"images/page_"+pagina+"/img_002.png"} className="wp-60" /></div> 

                    <div className="bgc-white exterior-caja-v1 border-style-solid  border-color-freezer border-2 w-100 p-2 f-Ubuntu-L fsp-15 mbp-20">
                        <div className="d-flex interior-caja-v1 bgc-bison text-start min-hp-30">
                            <div className="w-100 text-center f-Ubuntu-R">¿Cómo podría mejorar?</div>
                        </div>
                        <div className="d-flex flex-column position-relative w-100">
                            <span className="mtp-10 text-start">
                            Necesitaremos la colaboración de...
                            </span>
                          <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                        </div>
                    </div>
                    <div className="bgc-white exterior-caja-v1 border-style-solid  border-color-freezer border-2 w-100 p-2 f-Ubuntu-L fsp-15 mbp-20 position-relative">
                    <div className="position-absolute top-0 start-0 translate-middle wp-100 msp-20 mtp-10"><img src={"images/page_"+pagina+"/img_003.png"} className="wp-50" /></div> 
                        <div className="d-flex interior-caja-v1 bgc-bison text-start min-hp-30">
                            <div className="w-100 text-center f-Ubuntu-R">¿Cómo podría mejorar?</div>
                        </div>
                        <div className="d-flex flex-column position-relative w-100">
                            <span className="mtp-10 text-start">
                            Desarrollaremos el proyecto en...
                            </span>
                            <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-75" />
                        </div>
                        <div className="d-flex position-relative w-100 pbp-10">
                            <span className="mtp-10 text-start">
                            el día
                            </span>
                            <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
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

export default Page018;
