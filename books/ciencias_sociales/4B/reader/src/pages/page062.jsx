import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_062.css";

function Page062(props) {

  const pagina = "062";
  var indexInput = 0;
  const etapa = "5"
  const background = "bgc-saitama";
  const color = "color-saitama";
  const bgc_cajas = "bgc-bobafett";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          <div className={"cabecera-v1 hp-80 " + background}>
          </div>






          <div className="msp-70 mep-50 position-relative mtp-70 ">
            <div className="position-absolute top-0 start-100 translate-middle zindex-10 visible-768 msp--30 mtp-20 "><img src="images/page_062/img_002.png" className="wp-70 " alt="" /></div>
            <div className="position-absolute top-50 start-0 translate-middle zindex-10 visible-768 msp-20 mtp--20 "><img src="images/page_062/img_003.png" className="wp-15 " alt="" /></div>
            <div className="row w-100 mbp-10   ">
              <div className="cb-ep-paper-62 ">
                <div className="cb-ep-paper-content-62 f-Ubuntu-L text-start  ">
                  <div className="mtp-5 ">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-300" />

                  </div>
                </div>
              </div>
            </div>

          </div>



          {/*  <div className="bgc-bobafett rounded-p-10 mtp-0 msp-60 mep-60 mbp-7 p-2 f-Ubuntu-R">

            <div className="d-flex justify-content-center w-100">
                <div className="row w-100">

                  <div className="col-sm-12 col-md-12 position-relative pbp-10">
                    Nuestra principal conclusión de la revista es...
                  </div>
                  <div className="col-md-12 d-flex justify-content-center pbp-30 position-relative">
                    <div className="position-absolute top-0 start-100 translate-middle msp-10 mtp--30 visible-768 zindex-1"><img src="images/page_062/img_002.png" className="wp-70 " alt="" /></div> 
                    <div className="position-absolute top-0 start-0 translate-middle msp-10 mtp-30 visible-768 zindex-1"><img src="images/page_062/img_003.png" className="wp-20 " alt="" /></div> 
                      <div className="d-flex flex-column w-100 ptp-0 pbp-30 psp-20 pep-20 bgc-white rounded-p-20 position-relative">
                          <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                      </div>
                  </div>
                  <div className="col-sm-6 col-md-6 position-relative pbp-0 fsp-13">
                    <span className="bgc-anakin p-2 rounded-set-10 ">Idea 1</span><span> en que se apoya</span>
                  </div>
                  <div className="col-sm-6 col-md-6 position-relative pbp-0 fsp-13">
                    <span className="bgc-voldemort p-2 rounded-set-10">Idea 2</span><span> en que se apoya</span>
                  </div>
                  <div className="col-sm-6 d-flex justify-content-center pbp-30 position-relative">
                    <div className="position-absolute top-100 start-50 translate-middle msp-10 mtp-15 zindex-1"><img src="images/page_062/flecha.svg" className="wp-50 " alt="" /></div> 
                      <div className="d-flex flex-column w-100 ptp-0 pbp-30 psp-20 pep-20 bgc-white rounded-p-20 position-relative">
                          <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                      </div>
                  </div>
                  <div className="col-sm-6 d-flex justify-content-center pbp-30 position-relative">
                    <div className="position-absolute top-100 start-50 translate-middle msp-10 mtp-15 zindex-1"><img src="images/page_062/flecha.svg" className="wp-50 " alt="" /></div> 
                    <div className="position-absolute top-100 start-0 translate-middle msp-0 mtp-0 visible-768 zindex-1"><img src="images/page_062/img_004.png" className="wp-50 " alt="" /></div> 
                      <div className="d-flex flex-column w-100 ptp-0 pbp-30 psp-20 pep-20 bgc-white rounded-p-20 position-relative">
                          <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                      </div>
                  </div>
                </div>
              
            </div> 
            
          </div>*/}
          {/* <div className="mtp-30 msp-60 mep-60 mbp-7 p-2 f-Ubuntu-R">

            <div className="d-flex justify-content-center w-100">
              <div className="row w-100">

                <div className="col-sm-6 d-flex justify-content-center pbp-30 position-relative">
                  <div className="d-flex flex-column w-100 ptp-10 pbp-30 psp-20 pep-20 bgc-white rounded-p-20 position-relative border-style-solid border-2 border-color-bobafett">
                    <span>Sus evidencias</span>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                  </div>
                </div>
                <div className="col-sm-6 d-flex justify-content-center pbp-30 position-relative">
                  <div className="d-flex flex-column w-100 ptp-10 pbp-30 psp-20 pep-20 bgc-white rounded-p-20 position-relative border-style-solid border-2 border-color-bobafett">
                    <span>Sus evidencias</span>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                  </div>
                </div>
              </div>

            </div>

          </div> */}



          <div className="ptp-10 container-titulo-global mbp-20 mtp--20">
            <div className="d-flex">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_062/g.svg" alt="" />
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>3</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
              Al terminar el álbum, reflexionamos: ¿Para qué nos puede servir lo que hemos aprendido y hecho? Completamos.
              </div>
              {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image="images/page_062/img_004.png" clasesImagen="hp-70 mtp--20 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>




          <div className="msp-60 mep-40 mb-10 mbp-80">
            <div className="d-flex justify-content-center p-1 position-relative">
              <div className="position-absolute top-0 start-100 translate-middle visible-768 zindex-2 wp-100 msp--30 mtp--10"><img src="images/page_062/img_004.png" className="wp-70" alt="" /></div>
              <div className="position-absolute top-100 start-50 translate-middle visible-768   zindex-2 wp-100 msp-0 mtp--25"><img src="images/page_062/img_007.png" className="wp-80" alt="" /></div>
              <div className="row  w-100 f-Ubuntu-R fsp-16 rounded-p-20 d-flex align-items-center">

                <div className="col-6 d-flex align-items-center   position-relative h-100">
                  <div className="position-absolute top-50 start-100 translate-middle wp-100 msp--10 mtp-0"><img src="images/page_062/img_006.svg" className="wp-50" alt="" /></div>

                  {/* <div className="position-absolute top-50 start-0 translate-middle msp-10 mtp-0 wp-30 hp-30 d-flex align-items-center justify-content-center rounded-p-5 border-2 color-pidgey border-style-solid border-color-pidgey bgc-bison">1</div> */}
                  <div className="d-flex mbp-20 mtp-10  w-100 pep-10   ">
                    <div className="p-2  w-100 border-style-solid border-2 rounded-p-10 border-color-windu  bgc-white  zindex-1">
                      <div className="f-Ubuntu-R fsp-16 text-start color-dark"> ¿Qué estamos aprendiendo? </div>
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-400" />
                    </div>
                  </div>
                </div>
                <div className="col-6 position-relative ">

                  <div className="d-flex mbp-20 mtp-10 w-100 h-100 psp-10  bgc-windu p-2 rounded-p-10">
                    <div className="d-block w-100">

                      <div className=" p-2 min-hp-100 w-100 border-style-solid border-2 rounded-p-10 border-color-windu  bgc-white">
                        <div className="f-Ubuntu-R fsp-16 text-center color-dark"> Lo aplicamos en <b>casa</b> en: </div>
                        <div className="color-dark">
                          <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-100" />
                        </div>
                      </div>
                      <div className=" p-2 min-hp-100 w-100 border-style-solid border-2 rounded-p-10 border-color-windu  bgc-white">
                        <div className="f-Ubuntu-R fsp-16 text-center color-dark"> Lo aplicamos con <b> amigos</b> en </div>
                        <div className="color-dark">
                          <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-100" />
                        </div>
                      </div>
                      <div className=" p-2 min-hp-100 w-100 border-style-solid border-2 rounded-p-10 border-color-windu  bgc-white">
                        <div className="f-Ubuntu-R fsp-16 text-center color-dark"> Lo aplicamos en <b>clases</b> en: </div>
                        <div className="color-dark">
                          <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-100" />
                        </div>
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
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-7 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_creacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
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

export default Page062;
