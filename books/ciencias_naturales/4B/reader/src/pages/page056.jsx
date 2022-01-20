import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import ModalBook from "../components/ModalBook";

import "./page_056.css";

function Page056(props) {

  const pagina = "056";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
              <div className="page cb-page56 bgc-white overflow-hidden position-relative cb-6" id={"page_"+pagina}>
                {/* contenido DE PAGINA */}






                <div className="position-relative w-100 ptp-100 psp-80 pep-70">

                            <div className="bgc-white border border-color-dark rounded-p-10">
                                <div className="bgc-guile mxwp-490 rounded-p-10">
                                    <div className="f-Ubuntu-R psp-20 py-2">Si hubiéramos tenido más tiempo nos hubiese gustado añadir:</div>
                                </div>
                                <div className="psp-20 pep-20 pbp-20">
                                    <div className="linea pbp-20"></div>
                                    <div className="linea pbp-20"></div>
                                    <div className="linea pbp-20"></div>
                                    <div className="linea pbp-20"></div>
                                    <div className="linea pbp-20"></div>
                                    <div className="linea pbp-20"></div>
                                </div>
                            </div>
                </div>









              
                <div className="position-relative w-100">
                    <div className="psp-80 pep-70   pbp-60">
                    <div className="row ptp-20">
                            <div className="col-md-6">
                                <div className="bgc-white border border-color-dark rounded-p-10">
                                    <div className="bgc-chitara mxwp-160 rounded-p-10">
                                        <div className="f-Ubuntu-R psp-20 py-2">Lo más difícil fue:</div>
                                    </div>
                                    <div className="psp-20 pep-20 pbp-20">
                                        <div className="linea pbp-20"></div>
                                        <div className="linea pbp-20"></div>
                                        <div className="linea pbp-20"></div>
                                        <div className="linea pbp-20"></div>
                                        <div className="linea pbp-20"></div>
                                        <div className="linea pbp-20"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="bgc-white border border-color-dark rounded-p-10">
                                    <div className="bgc-tigro mxwp-160 rounded-p-10">
                                        <div className="f-Ubuntu-R psp-20 py-2">Lo más fácil fue:</div>
                                    </div>
                                    <div className="psp-20 pep-20 pbp-20">
                                        <div className="linea pbp-20"></div>
                                        <div className="linea pbp-20"></div>
                                        <div className="linea pbp-20"></div>
                                        <div className="linea pbp-20"></div>
                                        <div className="linea pbp-20"></div>
                                        <div className="linea pbp-20"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>






                <div className="block-bottom mtp-30 f-pixilate-bold fsp-18">¿Cómo vamos?</div>

                <div className="f-Ubuntu-L bgc-white fsp-13 rounded-p-10 p-2">
                    <div className="bgc-white rounded-p-10 pep-80 d-flex">

                            <table>

                                <tbody>
                                    {/* <tr>
                                          <td>&nbsp;</td>
                                          <td className="style-caja bgc-pidgey tf-letra border-white f-colby-compres-bold ps-2 pe-2"> Nunca</td>
                                          <td style="min-width: 55px;" className="style-caja bgc-pidgey tf-letra border-white f-colby-compres-bold ps-2 pe-2"> A veces</td>
                                          <td className="style-caja bgc-pidgey tf-letra border-white f-colby-compres-bold ps-2 pe-2"> Generalmente</td>
                                          <td className="style-caja bgc-pidgey tf-letra border-white f-colby-compres-bold ps-2 pe-2"> Siempre</td>
                                    </tr> */}
                                </tbody>

                            </table>

                    </div>

                </div>



                {/* <div className="f-Ubuntu-L bgc-white fsp-13 rounded-p-10 p-2">
                                <div className="bgc-white rounded-p-10 pep-80 d-flex">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>&nbsp;</td>
                                                <td
                                                    className="style-caja bgc-pidgey tf-letra border-white f-colby-compres-bold ps-2 pe-2">
                                                    Nunca</td>
                                                <td style="min-width: 55px;"
                                                    className="style-caja bgc-pidgey tf-letra border-white f-colby-compres-bold ps-2 pe-2">
                                                    A veces</td>
                                                <td
                                                    className="style-caja bgc-pidgey tf-letra border-white f-colby-compres-bold ps-2 pe-2">
                                                    Generalmente</td>
                                                <td
                                                    className="style-caja bgc-pidgey tf-letra border-white f-colby-compres-bold ps-2 pe-2">
                                                    Siempre</td>
                                            </tr>
                                            <tr>
                                                <td className="tf-parrafo-caja border border-color-pidgey">Nos involucramos
                                                    en el proyecto y nos responsabilizamos por las tareas que tenemos
                                                    que hacer.</td>
                                                <td className="border border-color-pidgey"></td>
                                                <td className="border border-color-pidgey"></td>
                                                <td className="border border-color-pidgey"></td>
                                                <td className="border border-color-pidgey"></td>
                                            </tr>
                                            <tr>
                                                <td className="tf-parrafo-caja border border-color-pidgey">Ante una
                                                    petición de apoyo de alguien del grupo, intentamos ayudar antes de
                                                    preguntarle al profesor.</td>
                                                <td className="border border-color-pidgey"></td>
                                                <td className="border border-color-pidgey"></td>
                                                <td className="border border-color-pidgey"></td>
                                                <td className="border border-color-pidgey"></td>
                                            </tr>
                                            <tr>
                                                <td className="tf-parrafo-caja border border-color-pidgey">Respetamos el
                                                    turno de la palabra.</td>
                                                <td className="border border-color-pidgey"></td>
                                                <td className="border border-color-pidgey"></td>
                                                <td className="border border-color-pidgey"></td>
                                                <td className="border border-color-pidgey"></td>
                                            </tr>
                                            <tr>
                                                <td className="tf-parrafo-caja border border-color-pidgey">Llegamos a
                                                    acuerdos y decisiones compartidas después de que cada uno da su
                                                    opinión.</td>
                                                <td className="border border-color-pidgey"></td>
                                                <td className="border border-color-pidgey"></td>
                                                <td className="border border-color-pidgey"></td>
                                                <td className="border border-color-pidgey"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="hp-50">
                                        <img src="images/page_054/img_004.png" className="hp-220 tf-mono" />
                                    </div>
                                </div>
                            </div> */}

















                

                {/* PIE DE PAGINA */}
                <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
                  <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
                    ABP &copy; SM
                  </div>
                  <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
                </div>
                 {/* FIN PIE DE PAGINA */}
              
            </div>
        </div>
    </div>
           


          
     
  );
}

export default Page056;
