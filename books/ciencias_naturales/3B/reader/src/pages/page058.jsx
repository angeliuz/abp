import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";

import "./page_058.css";

function Page058(props) {

  const pagina = "058";
  var indexInput = 0;

  return (

    <div className="wrapper bgc-light">
        <div className="d-flex flex-column align-items-center pbp-20">
            <div className="cb-page58 page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
                <div className="cabecera-v1 hp-80 bgc-pidgey">
                </div>

                <div className="d-flex msp-60 ptp-20 mep-60 mbp-100">

                    <div className="row m-0 p-2 w-100 ">
                        <div className="col-md-12 col-lg-12 position-relative text-start f-Ubuntu-R fsp-15">
                            <div className="f-Ubuntu-R fsp-15 lh-sm text-start mbp-5">Lo que más nos costó de la entrevista fue...</div>
                        </div>
                        <div className="col-md-12 col-lg-12 position-relative">
                            <div className="position-absolute top-0 start-100 translate-middle msp-0 mtp-20 visible-768"><img src="images/page_058/img_001.png" className="wp-80 " alt="" /></div> 
                            <div className="position-absolute top-100 start-0 translate-middle msp-10 mtp--30 visible-768"><img src="images/page_058/img_002.png" className="wp-50 " alt="" /></div>  
                        
                            <div className="d-flex flex-column mbp-20 mtp-10 p-2 w-100 border-style-solid border-2 rounded-p-10 border-color-dark bgc-white">
                                <div className="p-2 w-100 d-flex flex-column">
                                    {/* <div className="f-Ubuntu-L fsp-16  text-start w-100">Cosas que hemos hecho que nos han encantado:</div> */}
                                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-210" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-12 position-relative text-start f-Ubuntu-R fsp-15">
                            <div className="f-Ubuntu-R fsp-15 lh-sm text-start mbp-5">Lo que más nos costó de la entrevista fue...</div>
                        </div>
                        <div className="col-md-12 col-lg-12 position-relative">
                            <div className="position-absolute top-0 start-100 translate-middle msp--10 mtp-70 visible-768"><img src="images/page_058/img_003.png" className="wp-20 " alt="" /></div> 
                            <div className="position-absolute top-100 start-0 translate-middle msp-10 mtp--30 visible-768"><img src="images/page_058/img_004.png" className="wp-50 " alt="" /></div>  
                        
                            <div className="d-flex flex-column mbp-20 mtp-10 p-2 w-100 border-style-solid border-2 rounded-p-10 border-color-dark bgc-white">
                                <div className="p-2 w-100 d-flex flex-column">
                                    {/* <div className="f-Ubuntu-L fsp-16  text-start w-100">Podemos mejorar en...</div> */}
                                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-210" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 position-relative pbp-20">
                            
                            <div className="position-absolute top-100 start-100 translate-middle msp--70 mtp-20"><img src="images/page_058/img_005.png" className="wp-150 " alt="" /></div> 
                            <div className="position-absolute top-100 start-0 translate-middle msp-20 mtp-40"><img src="images/page_058/img_006.png" className="wp-130 " alt="" /></div>  

                            <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-5 mtp-20">¿Cómo vamos?</div>
                            <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mbp-30">
                                        {/* <span className="w-24 f-Ubuntu-L mtp-5 mbp-10">Marco con un <img src="images/page_018/img_005.svg" className="hp-17 mtp--2" alt=""/> el recuadro que mejor me represente.</span> */}
                                        <div className="w-100 p-2 pb-3 bgc-white rounded-p-10">
                                            <table className="w-100">
                                                <tbody>
                                                    <tr>
                                                        <td>&nbsp;</td>
                                                        <td className="style-caja bgc-pidgey tf-letra border-style-solid border-1 border-color-pidgey f-colby-compres-bold ps-2 pe-2">
                                                            Nunca</td>
                                                        <td style={{minWidth: "55px"}} className="style-caja bgc-pidgey tf-letra  border-style-solid border-1 border-color-pidgey f-colby-compres-bold ps-2 pe-2">
                                                            A veces</td>
                                                        <td className="style-caja bgc-pidgey tf-letra border-style-solid border-1 border-color-pidgey f-colby-compres-bold ps-2 pe-2">
                                                            Generalmente</td>
                                                        <td className="style-caja bgc-pidgey tf-letra  border-style-solid border-1 border-color-pidgey f-colby-compres-bold ps-2 pe-2">
                                                            Siempre</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="bgc-bison f-Ubuntu-L fsp-12 text-start psp-5 border-style-solid border-1 border-color-pidgey">Nos implicamos en la realización de la tarea y asumimos con responsabilidad el trabajo.</td>
                                                        <td className="border-style-solid border-1 border-color-pidgey"></td>
                                                        <td className="border-style-solid border-1 border-color-pidgey"></td>
                                                        <td className="border-style-solid border-1 border-color-pidgey"></td>
                                                        <td className="border-style-solid border-1 border-color-pidgey"></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="bgc-bison f-Ubuntu-L fsp-12 text-start psp-5 border-style-solid border-1 border-color-pidgey">Ante una petición de apoyo de alguien del grupo, intentamos ayudar antes de preguntarle al profesor.</td>
                                                        <td className="border-style-solid border-1 border-color-pidgey"></td>
                                                        <td className="border-style-solid border-1 border-color-pidgey"></td>
                                                        <td className="border-style-solid border-1 border-color-pidgey"></td>
                                                        <td className="border-style-solid border-1 border-color-pidgey"></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="bgc-bison f-Ubuntu-L fsp-12 text-start psp-5 border-style-solid border-1 border-color-pidgey">Respetamos el turno de la palabra.</td>
                                                        <td className="border-style-solid border-1 border-color-pidgey"></td>
                                                        <td className="border-style-solid border-1 border-color-pidgey"></td>
                                                        <td className="border-style-solid border-1 border-color-pidgey"></td>
                                                        <td className="border-style-solid border-1 border-color-pidgey"></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="bgc-bison f-Ubuntu-L fsp-12 text-start psp-5 border-style-solid border-1 border-color-pidgey">Llegamos a acuerdos y decisiones compartidas después de que cada uno dio su opinión.</td>
                                                        <td className="border-style-solid border-1 border-color-pidgey"></td>
                                                        <td className="border-style-solid border-1 border-color-pidgey"></td>
                                                        <td className="border-style-solid border-1 border-color-pidgey"></td>
                                                        <td className="border-style-solid border-1 border-color-pidgey"></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
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

export default Page058;
