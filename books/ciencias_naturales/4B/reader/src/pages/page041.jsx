import React from "react";
import InputBox from "../components/InputBox";
import "./page_041.css";

function Page041(props) {
  const pagina = "041";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div
          className="page cb-page41 bgc-white overflow-hidden position-relative"
          id={"page_" + pagina}
        >
          <img src="images/page_041/cabecera.svg" alt="" />
          <div className="position-relative w-100">
            <div className="row psp-80 pep-70 ptp-10 pbp-50 ">
              <div className="f-Ubuntu-R text-start fsp-18 pbp-10">
              Esta página fue completada por:
              </div>
              <div className="d-flex position-relative">
                <img
                  src="images/page_041/img_001.png"
                  class="hp-80 position-absolute start-0 top-0 mtp--10"
                  alt=""
                />
                <div className="bgc-white rounded-p-10 border-style-solid border-1 border-color-bulma w-100 py-1 psp-50 pep-20">
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-35"
                  />
                </div>
                <img
                  src="images/page_041/img_002.png"
                  class="hp-80 position-absolute start-100 top-0 msp--70 mtp--30"
                  alt=""
                />
              </div>
              <div className="d-flex msp-60 mep-60 mbp-0 mtp-30">
              <div className="row w-100">

                <div className="col-sm-12 col-md-6 position-relative">
                    
                    <div className="position-absolute top-100 start-0 translate-middle msp-0 mtp--20 visible-768"><img src="images/page_056/img_003.png" className="wp-60 " alt="" /></div> 

                    <div className="bgc-white exterior-caja-v1 border-style-solid  border-color-freezer border-2 w-100 p-2 f-Ubuntu-L fsp-15 mbp-20">
                        <div className="d-flex interior-caja-v1 bgc-bison text-start min-hp-30">
                            <div className="w-100 text-center f-Ubuntu-R">¿Cómo podría mejorar?</div>
                        </div>
                        <div className="d-flex flex-column position-relative w-100">
                          <div className="position-absolute top-0 start-0 translate-middle msp--15 mtp-20">
                            <div className="wp-30 hp-30 d-flex align-items-center justify-content-center rounded-p-5 border-2 color-pidgey border-style-solid border-color-pidgey bgc-bison f-Ubuntu-B">
                            1
                            </div>
                          </div>
                          <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                        </div>
                        <div className="d-flex flex-column position-relative w-100">
                          <div className="position-absolute top-0 start-0 translate-middle msp--15 mtp-20">
                            <div className="wp-30 hp-30 d-flex align-items-center justify-content-center rounded-p-5 border-2 color-pidgey border-style-solid border-color-pidgey bgc-bison f-Ubuntu-B">
                            2
                            </div>
                          </div>
                          <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                        </div>
                        <div className="d-flex flex-column position-relative w-100">
                          <div className="position-absolute top-0 start-0 translate-middle msp--15 mtp-20">
                            <div className="wp-30 hp-30 d-flex align-items-center justify-content-center rounded-p-5 border-2 color-pidgey border-style-solid border-color-pidgey bgc-bison f-Ubuntu-B">
                            3
                            </div>
                          </div>
                          <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 position-relative">
                  <div className="position-absolute top-0 start-100 translate-middle msp--10 mtp-150 visible-768"><img src="images/page_056/img_002.png" className="wp-20 " alt="" /></div> 
                    <div className="bgc-white exterior-caja-v1 border-style-solid  border-color-freezer border-2 w-100 p-2 f-Ubuntu-L fsp-15 mbp-20">
                        <div className="d-flex interior-caja-v1 bgc-bison text-start min-hp-30">
                            <div className="w-100 text-center f-Ubuntu-R">¿Qué solución le daremos?</div>
                        </div>
                        <div className="d-flex flex-column position-relative w-100">
                          <div className="position-absolute top-0 start-0 translate-middle msp--15 mtp-20">
                            <div className="wp-30 hp-30 d-flex align-items-center justify-content-center rounded-p-5 border-2 color-pidgey border-style-solid border-color-pidgey bgc-bison f-Ubuntu-B">
                            1
                            </div>
                          </div>
                          <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                        </div>
                        <div className="d-flex flex-column position-relative w-100">
                          <div className="position-absolute top-0 start-0 translate-middle msp--15 mtp-20">
                            <div className="wp-30 hp-30 d-flex align-items-center justify-content-center rounded-p-5 border-2 color-pidgey border-style-solid border-color-pidgey bgc-bison f-Ubuntu-B">
                            2
                            </div>
                          </div>
                          <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                        </div>
                        <div className="d-flex flex-column position-relative w-100">
                          <div className="position-absolute top-0 start-0 translate-middle msp--15 mtp-20">
                            <div className="wp-30 hp-30 d-flex align-items-center justify-content-center rounded-p-5 border-2 color-pidgey border-style-solid border-color-pidgey bgc-bison f-Ubuntu-B">
                            3
                            </div>
                          </div>
                          <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                        </div>
                    </div>
                </div>

              </div>
            
            </div>
            </div>
          </div>
          {/* PIE DE PAGINA */}
          <div
            className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2"
            style={{ bottom: 70, right: 0 }}
          >
            <div
              className="f-Ubuntu-M fsp-10 position-absolute mbp-60"
              style={{ transform: `rotate(270deg)`, color: "dark" }}
            >
              ABP &copy; SM
            </div>
            <div className="bgc-jawa wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">
              {props.numeroPagina(pagina)}
            </div>
          </div>
          {/* FIN PIE DE PAGINA */}
        </div>
      </div>
    </div>
  );
}

export default Page041;
