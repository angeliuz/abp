import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import ModalBook from "../components/ModalBook";

import "./page_064.css";

function Page064(props) {

  const pagina = "064";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
              <div className="page cb-page66 bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
                {/* BEGIN CABECERA VERSIÓN 2 */}
                <div className="cabecera-v1 hp-80 bgc-saitama">
                </div>
                 {/* END CABECERA VERSIÓN 2 */}

          {/* CONTENIDO DE PAGINA */}   
          <div className="container-titulo-global mbp-∫0 cb-600">
            <div className="d-flex">
                {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_033/img_002.svg" alt=""  /> */}
                <div className="f-ccdigitaldelivery-bold fsp-35 color-saitama">6</div>
                <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Solicitamos ayuda para comunicar a la comunidad educativa la fecha y el lugar de la presentación de las brigadas.</div>
                 {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.jpg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-1" /> */}
                {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_031/img_002.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>         
            <div className="bgc-bobafett cb-border-pikachu pbp-90 position-relative mtp-10" style={{bottom:0}}>
            <img src="images/page_058/img_002.png" className="cb-engranajes-p58" alt=""/>
            <div className="cb-700 mx-auto mtp-50 f-pixilate-bold mbp-5 text-start">
              ¿Cómo voy?
            </div>
            <div className="cb-700 mx-auto p-2 f-Ubuntu-L bgc-white fsp-13 rounded-p-10 ps-4 pe-4 mbp-20">
              <div className="flex-wrap w-100 text-start">
                <img src="images/page_058/flecha.svg" className="hp-10 pep-5 mtp-5"/>
                <span className="w-24 f-Ubuntu-L ">Las tareas en las que más me gusta participar son: </span>
                <div className="pep-10 psp-10">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70"/>
                </div>
              </div>
              <div className="flex-wrap w-100 text-start mtp-10">
                <img src="images/page_058/flecha.svg" className="hp-10 pep-5 mtp-5"/>
                <span className="w-24 f-Ubuntu-L ">Me resulta más difícil llegar a acuerdos cuando: </span>
                <div className="pep-10 psp-10">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70"/>
                </div>
              </div>
              <div className="flex-wrap w-100 text-start mtp-10">
                <img src="images/page_058/flecha.svg" className="hp-10 pep-5 mtp-5"/>
                <span className="w-24 f-Ubuntu-L ">¿Quién me ha ayudado y se lo voy a agradecer? </span>
                <div className="pep-10 psp-10">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70"/>
                </div>
              </div>
            </div>
            {/* TABLA */}
            <div className="cb-700 mx-auto">
              <div className="d-flex pep-10 justify-content-between">
                <div className="block-bottom text-start mtp-30 f-pixilate-bold fsp-15">
                  ¿Cómo me sentí?
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
                    <div className="flecha-saitama pep-10 mtp-8"></div>
                    <span className="text-start f-Ubuntu-L fsp-15 ptp-5 ">
                    Confío en mi capacidad para aprender y me valoro.
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
                    <div className="flecha-saitama pep-10 mtp-8"></div>
                    <span className="text-start f-Ubuntu-L fsp-15 ptp-5">
                    Confío en mis compañeros y me ayudan cuando lo necesito.
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

export default Page064;
