import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import ModalBook from "../components/ModalBook";

import "./page_039.css";

function Page039(props) {

  const pagina = "039";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
              <div className="page cb-page66 bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
                {/* BEGIN CABECERA VERSIÓN 2 */}
                <div className="cabecera-v1 hp-80 bgc-android18">
                </div>
                 {/* END CABECERA VERSIÓN 2 */}

          {/* CONTENIDO DE PAGINA */}   
          <div className="container-titulo-global mbp-∫0 mtp-30">
            <div className="d-flex">
                {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_033/img_002.svg" alt=""  /> */}
                <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">5</div>
                <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Elaboramos las fichas de seguridad y las compartimos con el curso. Luego, completo.</div>
                 {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.jpg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-1" /> */}
                {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_031/img_002.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>  
          <div className="bgc-marcianos border-1 border-color-ken border-style-solid cb-outline-39 cb-calc cb-600 mx-auto psp-10 pep-10 ptp-10 pbp-70 rounded-p-10 position-relative">
          <div className="text-start">¿Qué estoy aprendiendo?</div>   
          <img src="images/page_039/img_001.png" className="position-absolute cb-personaje-p39" alt=""/>
          </div>
          <div className="text-center mtp-5 mbp-5">¿Para qué lo puedo utilizar?</div>
          <div className="cb-600 mx-auto cb-calc">
          <img src="images/page_039/img_002.png" className=" w-80" alt=""/>
          </div>
          <div className="cb-600 mx-auto cb-calc d-flex justify-content-between">
          <div className="text-start bgc-honda rounded-p-10 w-100 mep-5 pbp-100 psp-10 ptp-5"contenteditable="true">En casa</div>
          <div className="text-start bgc-shogun rounded-p-10 w-100 mep-5 msp-5 pbp-100 psp-10 ptp-5"contenteditable="true">En clases</div>
          <div className="text-start bgc-kokomi rounded-p-10 w-100 msp-5 pbp-100 psp-10 ptp-5"contenteditable="true">Con mi equipo</div>
          </div>
          {/* INICIO ACTIVIDAD 2 */}         
            <div className="bgc-azuka cb-border-android18 pbp-90 position-relative mtp-10" style={{bottom:0}}>
            <div className="cb-700 cb-calc mx-auto mtp-50 f-pixilate-bold mbp-5 text-start ptp-30">
              ¿Cómo voy?
            </div>
            <div className="cb-700 cb-calc mx-auto p-2 f-Ubuntu-L bgc-white fsp-13 rounded-p-10 ps-4 pe-4 mbp-20">
              <div className="flex-wrap w-100 text-start">
                <img src="images/page_039/flecha.svg" className="hp-10 pep-5 mtp-5"/>
                <span className="w-24 f-Ubuntu-L fsp-15">¿Qué tres cosas destaco de lo que he aprendido hasta el momento?</span>
                <div className="pep-10 psp-10">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70"/>
                </div>
              </div>
              <div className="flex-wrap w-100 text-start mtp-10">
                <img src="images/page_039/flecha.svg" className="hp-10 pep-5 mtp-5"/>
                <span className="w-24 f-Ubuntu-L fsp-15">En relación con el desafío, sentí curiosidad por </span>
                <div className="pep-10 psp-10">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70"/>
                </div>
              </div>

            </div>
            {/* TABLA */}
            <div className="cb-700 mx-auto mbp-30 cb-calc">
              <div className="d-flex pep-10 justify-content-between">
                <div className="block-bottom text-start mtp-30 f-pixilate-bold fsp-15">
                  ¿Cómo me siento?
                </div>
                <div className="d-flex flex-row-reverse block-bottom mtp-30">
                  <div className="nunca f-pixilate-regular">Siempre</div>
                  <div className="siempre f-pixilate-regular">Generalmente</div>
                  <div className="siempre f-pixilate-regular">A veces</div>
                  <div className="siempre f-pixilate-regular">Núnca</div>
                </div>
              </div>
              <div className="psp-15 pep-20 f-Ubuntu-L bgc-white fsp-13 rounded-set-10 ">
                <div className="d-flex justify-content-between ">
                  <div className="d-flex mnwp-400-r cb-contenedor-tabla-texto ">
                    <div className="flecha-android18 pep-10 mtp-8"></div>
                    <span className="text-start f-Ubuntu-L fsp-15 ptp-5 ">
                    Me gusta investigar sobre los temas del proyecto.
                    </span>
                  </div>
                  <div className="d-flex flex-row-reverse block-bottom ptp-5 pbp-5 align-items-center">
                    <div className="psp-30-r">
                      <div className="cuadrado borde-cuadrado">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                    <div className="psp-40-r">
                      <div className="cuadrado borde-cuadrado">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                    <div className="psp-40-r">
                      <div className="cuadrado borde-cuadrado">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                    <div className="">
                      <div className="cuadrado borde-cuadrado">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ptp-2"></div>
              <div className="psp-15 pep-20 f-Ubuntu-L bgc-white fsp-13 rounded-seb-10">
                <div className="d-flex justify-content-between ">
                  <div className="d-flex mnwp-400-r cb-contenedor-tabla-texto ">
                    <div className="flecha-android18 pep-10 mtp-8"></div>
                    <span className="text-start f-Ubuntu-L fsp-15 ptp-5">
                    Tengo ganas de encontrar soluciones al desafío planteado.
                    </span>
                  </div>
                  <div className="d-flex flex-row-reverse block-bottom ptp-5 pbp-5 align-items-center">
                    <div className="psp-30-r">
                      <div className="cuadrado borde-cuadrado">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                    <div className="psp-40-r">
                      <div className="cuadrado borde-cuadrado">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                    <div className="psp-40-r">
                      <div className="cuadrado borde-cuadrado">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                    <div className="">
                      <div className="cuadrado borde-cuadrado">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
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
                <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{bottom:0}}>

                  <div className="col-1 position-relative col-sm-2 p-0 m-0">
                    <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
                      <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
                      <div className="w-100 hp-25 bgc-goten"></div>
                  </div>
                  <div className="col-1 position-relative col-sm-2 p-0 m-0">
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
                  <div className="col-7 position-relative col-sm-2 p-0 m-0">
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
                 {/* FIN PIE DE PAGINA */}
              
            </div>
        </div>
    </div>
           


          
     
  );
}

export default Page039;
