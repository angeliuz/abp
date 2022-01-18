import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_056.css";

function Page056(props) {

  const pagina = "056";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
          <div className="d-flex flex-column align-items-center pbp-20">
              <div className="page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
            <div className="cabecera-v1 hp-80 bgc-pidgey">
            </div>

          <div className="ptp-10 container-titulo-global mbp-20">
            <div className="d-flex">
                <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_056/i_g.svg" alt=""  />
                <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">3</div>
                <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Reviso la transcripción de la otra entrevista realizada por el grupo y la comento.
                </div>
                {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_031/img_002.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
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

          <div className="ptp-10 container-titulo-global mbp-20">
            <div className="d-flex">
                {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_056/i_g.svg" alt=""  /> */}
                <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">4</div>
                <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Analizo los comentarios que recibí de la transcripción que hice. A partir de ellos, realizo las siguientes mejoras:
                </div>
                {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_031/img_002.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>
                       
          <div className="d-flex msp-60 mep-60 mbp-70 mtp-30">
            <div className="row w-100">
              <div className="col-12 position-relative">
                <div className="position-absolute top-100 start-0 translate-middle msp-10 mtp--30 visible-768"><img src="images/page_056/img_005.png" className="wp-30 " alt="" /></div> 
                <div className="position-absolute top-0 start-100 translate-middle msp-0 mtp-0 visible-768"><img src="images/page_056/img_004.png" className="wp-70 " alt="" /></div> 
                  <div className="d-flex mbp-20 mtp-10 w-100">
                      <div className="p-2 min-hp-100 w-100 border-style-solid border-2 rounded-p-10 border-color-dark bgc-white">
                      {/* <div className="f-Ubuntu-L fsp-16 msp-10 mep-10 text-center">Registro con mi grupo una conclusión general a partir de todas las entrevistas.</div> */}
                          <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-200" />
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
            <div className="row w-100 position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>
              <div className="col-1 col-sm-2 p-0 m-0 position-relative">
                <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
                <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
                <div className="w-100 hp-25 bgc-goten"></div>
              </div>
              <div className="col-1 col-sm-2 p-0 m-0 position-relative">
                <img src="images/rotulo_planificacion.svg" className="oculto" alt="" />
                <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
                <div className="w-100 hp-25 bgc-bulma"></div>
              </div>
              <div className="col-7 col-sm-2 p-0 m-0 position-relative">
                <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
                <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
                <div className="w-100 hp-25 bgc-android18"></div>
              </div>
              <div className="col-1 col-sm-2 p-0 m-0 position-relative">
                <img src="images/rotulo_experimentacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
                <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
                <div className="w-100 hp-25 bgc-pidgey"></div>
              </div>
              <div className="col-1 col-sm-2 p-0 m-0 position-relative">
                <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
                <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
                <div className="w-100 hp-25 bgc-saitama"></div>
              </div>
              <div className="col-1 col-sm-2 p-0 m-0 position-relative">
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

export default Page056;
