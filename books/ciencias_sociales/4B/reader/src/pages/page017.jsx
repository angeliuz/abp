import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";


import "./page_017.css";

function Page017(props) {

  const pagina = "017";
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
              <img src={"images/cabecera/dosier_e"+etapa+".svg"} className="w-100" alt=""/>

              <div className="position-relative w-100 mbp-0">
                  <div className=" psp-80 pep-70 ptp-30 pbp-0 ">
                      <div className="fsp-16 f-Ubuntu-M text-start psp-0 pbp-10">Esta página es completada por:</div>
                      <div className={"psp-0 ptp-5 pbp-5 bgc-white rounded-p-10 border-style-solid border-1 "+borderColor+" d-flex justify-content-center position-relative"}>
                        {/* <div className="position-absolute top-50 start-0 translate-middle wp-100 msp-0 mtp-0"><img src="images/page_019/img_001.png" className="wp-70" /></div> */}
                        <div className="position-absolute top-50 start-100 translate-middle wp-100 msp--30 mtp--20"><img src={"images/page_"+pagina+"/img_001.png"} className="w-70" /></div>
                        <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="px-1 text-start lhp-35 w-100 msp-10 mep-50" />
                      </div>

                  </div>
                  
              </div>

              <div className="ptp-30 container-titulo-global mbp-0">
                <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 "+color}>
                Plan de trabajo
                </div>
                <div className="d-flex psp-20">
                    {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_016/img_001.svg" alt=""  /> */}
                    <div className={"f-ccdigitaldelivery-bold fsp-35 "+color}>1</div>
                    <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                    Ordenamos del 1 al 6 los pasos de nuestro proyecto.
                    </div>
                    {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                    {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                    {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                    {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_007/revista65.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                </div>
              </div>                    
              
              <div className="d-flex w-100  psp-60 pep-60">
                <div className="row w-100">
                  <div className="col-sm-12 col-md-6 position-relative">
                    <div className="position-absolute top-50 start-0 msp-0 mtp-10"><img src={"images/page_"+pagina+"/img_003.png"} className="wp-30 " alt="" /></div>
                      <div className="d-flex center-center bgc-fondo-1 pbp-30 ptp-20">
                        <div className="mtp-10 psp-20 pep-20 ptp-10 pbp-10 f-Ubuntu-R fsp-14 wp-200 position-relative  rounded-p-10 min-hp-100 d-flex center-center text-start">
                          Planificamos el trabajo.
                            <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-1 border-color-dark"></div>
                        </div>
                      </div>
                  </div>
                  <div className="col-sm-12 col-md-6 position-relative">
                  <div className="position-absolute top-0 start-100 msp--60 mtp--70"><img src={"images/page_"+pagina+"/img_002.png"} className="wp-80 " alt="" /></div>
                      <div className="d-flex center-center bgc-fondo-2 pbp-30 ptp-20">
                        <div className="mtp-10 psp-20 pep-20 ptp-10 pbp-10 f-Ubuntu-R fsp-14 wp-200 position-relative  rounded-p-10 min-hp-100 d-flex center-center text-start">
                          Realizamos una encuesta.
                            <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-1 border-color-dark"></div>
                        </div>
                      </div>
                  </div>

                  <div className="col-sm-12 col-md-6 ">
                      <div className="d-flex center-center bgc-fondo-3 pbp-30 ptp-20">
                        <div className="mtp-10 psp-20 pep-20 ptp-10 pbp-10 f-Ubuntu-R fsp-14 wp-200 position-relative  rounded-p-10 min-hp-100 d-flex center-center text-start">
                          Celebramos nuestra feria.
                            <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-1 border-color-dark"></div>
                        </div>
                      </div>
                  </div>
                  <div className="col-sm-12 col-md-6 ">
                      <div className="d-flex center-center bgc-fondo-4 pbp-30 ptp-20">
                        <div className="mtp-10 psp-20 pep-20 ptp-10 pbp-10 f-Ubuntu-R fsp-14 wp-200 position-relative  rounded-p-10 min-hp-100 d-flex center-center text-start">
                          Investigamos y aprendemos sobre el destino de los desechos.
                            <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-1 border-color-dark"></div>
                        </div>
                      </div>
                  </div>

                  <div className="col-sm-12 col-md-6 position-relative">
                    <div className="position-absolute top-50 start-0 msp--20 mtp--10"><img src={"images/page_"+pagina+"/img_004.png"} className="wp-60 " alt="" /></div>
                      <div className="d-flex center-center bgc-fondo-5 pbp-30 ptp-20">
                        <div className="mtp-10 psp-20 pep-20 ptp-10 pbp-10 f-Ubuntu-R fsp-14 wp-200 position-relative  rounded-p-10 min-hp-100 d-flex center-center text-start">
                          Creamos los modelos que presentaremos en la feria
                            <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-1 border-color-dark"></div>
                        </div>
                      </div>
                  </div>
                  <div className="col-sm-12 col-md-6 position-relative">
                    <div className="position-absolute top-50 start-100 msp--20 mtp--10"><img src={"images/page_"+pagina+"/img_005.png"} className="wp-60 " alt="" /></div>
                      <div className="d-flex center-center bgc-fondo-6 pbp-30 ptp-20">
                        <div className="mtp-10 psp-20 pep-20 ptp-10 pbp-10 f-Ubuntu-R fsp-14 wp-200 position-relative  rounded-p-10 min-hp-100 d-flex center-center text-start">
                          Realizamos una infografía.
                            <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-1 border-color-dark"></div>
                        </div>
                      </div>
                  </div>


                </div>
              </div>

              <div className="ptp-30 container-titulo-global mbp-70">
                {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 "+color}>
                Plan de trabajo
                </div> */}
                <div className="d-flex psp-20">
                    {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_016/img_001.svg" alt=""  /> */}
                    <div className={"f-ccdigitaldelivery-bold fsp-35 "+color}>2</div>
                    <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                    Usamos los recortables para confeccionar un cronograma con las etapas de nuestro proyecto.
                    </div>
                    {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                    {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                    {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                    <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista.png"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
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

export default Page017;
