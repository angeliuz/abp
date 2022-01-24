import React from "react";
import InputBox from "../components/InputBox";
import "./page_011.css";

function Page011(props) {

  const pagina = "011";
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
            <div className={"dosier-e"+etapa+" page bgc-white overflow-hidden position-relative"} id={"page_"+pagina}>
                {/* <img src="images/page_009/cabecera.svg" className="cb-dossier" alt=""/> */}

          <div className="mtp-190 ">
              {/* BEGIN CAJA PRINCIPAL DOSIER */}
              <div className="d-flex mbp-20">
                  <div className="row p-0 m-0 w-100">
                    <div className="col-12 d-flex justify-content-center">
                        <div className="ptp-30 pbp-0 position-relative max-wp-550 w-100">
                              <div className={"psp-30 pep-30 ptp-5 pbp-5 bgc-white rounded-p-10 border-1 d-flex justify-content-center flex-column position-relative outline-color-goten outline-solid outline-border-1 outline-offset-2"}>
                                  <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp--10 visible-768 "><img src={"images/page_"+pagina+"/img_002.png"} className="wp-70" alt="" /></div>
                                  <div className="position-absolute top-100 start-100 translate-middle wp-100 visible-768 msp-20 mtp-45 zindex-1"><img src={"images/page_"+pagina+"/img_001.png"} className="wp-90" alt="" /></div>
                                  <div className="fsp-16 f-Ubuntu-R text-center psp-0 pbp-10">
                                      Esta página fue completada por:
                                  </div>
                                  <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                              </div>
                            </div>
                    </div>
                  </div>
                </div>
              {/* END CAJA PRINCIPAL DOSIER */}



                <div className="cb-block-superior-p09 p-3  f-Ubuntu-L fsp-15 text-center fw-700 cb-outline_p11">
                    <img src="images/page_011/img_003.png" className="cb-crallones-p11" alt=""></img>
                    <p>Nuestro equipo está conformado por:</p>
                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" /> 

                </div>
                <div className="cb-block-superior-p09 p-3 pb-4 f-Ubuntu-L fsp-15 mtp-30 mbp-30 text-center fw-700  cb-outline_p11 position-relative">
                  <div className="position-absolute top-100 start-0 translate-middle msp--20 mtp--50 visible-768"><img src={"images/page_"+pagina+"/img_005.png"} className="wp-40" alt="" /></div> 
                    <p>Nuestra brigada se llama:</p>
                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
 
                </div>
                <div className="cb-block-superior-p09 p-3 f-Ubuntu-L fsp-15 mtp-30 mbp-30 text-center fw-700 cb-outline_p11">
                <img src="images/page_011/img_006.png" className="cb-bloques-p11"  alt=""></img>
                <div className="position-absolute top-100 start-0 translate-middle msp--20 mtp--20 visible-768"><img src={"images/page_"+pagina+"/img_008.png"} className="wp-70" alt="" /></div> 
                    <p>Nuestra brigada tendrá la misión de:</p>
                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" /> 


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
    </div>
  );
}

export default Page011;
