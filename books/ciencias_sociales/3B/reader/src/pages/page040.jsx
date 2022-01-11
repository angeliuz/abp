import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_014.css";

function Page014(props) {

  const pagina = "014";
  var indexInput = 0;

  return (

    <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
              <div className="page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
            <div className="cabecera-v1 hp-80 bgc-bulma">

            </div>

            <div className="ptp-10 psp-60">
                <div className="d-flex">
                    <img className="hp-15 align-center mt-3 me-2 mb-2" src="images/page_014/img_001.svg" alt="" />
                    <div className="f-ccdigitaldelivery-bold fsp-35 color-bulma">2</div>
                    <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10">Registro lo que sé sobre revistas.</div>
                </div>
                {/* <div className="f-Ubuntu-L fsp-15 psp-70 text-start">Comparo mis respuestas con las de mi grupo. ¿Pensamos todos lo mismo?</div> */}
            </div>

            <div className="row ptp-30 psp-30 pep-30 m-0 justify-content-md-center ">
              <div className="col-md-6 ptp-0 psp-30 pep-30 pbp-30">
                <div className="d-flex flex-column w-100 bgc-buzz rounded-p-10 px-3 pbp-15">
                  <div className="ptp-15 w-100 color-dark text-start f-Ubuntu-L fsp-15 lh-sm">Una revista es...</div>
                  <div className="bgc-white tf-outlinebuzz rounded-p-5 hp-200 mtp-10 w-100 position-relative mbp-30" >
                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-2 fsp-12 text-start flex-grow-1  lhp-25 min-hp-195" />
                  </div>
                </div>
              </div>

              <div className="col-md-6 position-relative">
                <div className="contenedor-flecha-14 position-absolute wp-40">
                  <img src="images/page_014/img_002_b.png" className="w-100" alt="" />
                </div>
                <div className="d-flex flex-column w-100">
                  <div className="f-Ubuntu-L text-center fsp-15">Comparo mis respuestas con las de mi grupo. ¿Pensamos todos lo mismo?</div>
                  <div className="rounded-p-5 bgc-white mtp-10 w-100 border-style-solid border-2 border-color-buzz rounded-p-5 px-3">
                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-2 fsp-12 text-start flex-grow-1 contenedor-linea lhp-25 min-hp-230" />
                  </div>
                </div>
              </div>
            </div>

            <div className="row ptp-30 psp-30 pep-30 m-0 justify-content-md-center ">
              <div className="col-md-6 ptp-0 psp-30 pep-30 pbp-30">
                <div className="d-flex flex-column w-100 bgc-buzz rounded-p-10 px-3 pbp-15">
                  <div className="ptp-15 w-100 color-dark text-start f-Ubuntu-L fsp-15 lh-sm">Una revista debería tener las siguientes características:</div>
                  <div className="bgc-white tf-outlinebuzz rounded-p-5 hp-120 mtp-10 w-100 position-relative mbp-0" >
                    <div className="position-absolute top-0 start-0 colorbulmanumero msp-10 mtp-10 fsp-16">1</div>
                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="ptp-10 pe-2 pb-2 psp-30 fsp-12 text-start flex-grow-1  lhp-25 min-hp-120" />
                  </div>
                  <div className="bgc-white tf-outlinebuzz rounded-p-5 hp-120 mtp-10 w-100 position-relative mbp-30" >
                    <div className="position-absolute top-0 start-0 colorbulmanumero msp-10 mtp-10 fsp-16">2</div>
                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="ptp-10 pe-2 pb-2 psp-30 fsp-14 text-start flex-grow-1 lhp-25 min-hp-120" />
                  </div>
                </div>
              </div>

              <div className="col-md-6 ptp-0 position-relative">
                <div className="contenedor-flecha-14 position-absolute wp-40">
                  <img src="images/page_014/img_002_b.png" className="w-100" alt="" />
                </div>
                <div className="d-flex flex-column w-100">
                  <div className="rounded-p-5 bgc-white w-100 border-style-solid border-2 border-color-buzz rounded-p-5 px-3">
                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-2 fsp-12 text-start flex-grow-1 contenedor-linea lhp-25 min-hp-230" />
                  </div>
                </div>
                <div className="position-absolute top-0 end-0">
                  <img src="images/page_014/img_004.png" className="tf-tablet tablet_rotate cambio hp-70 mtp-250 mep-70" alt="" />
                </div>
              </div>
            </div>


            
            {/*  ENCABEZADO PARTE 3  */}
            <div className="ptp-10 psp-85 pe-6">
                <div className="d-flex">
                    <div className="f-ccdigitaldelivery-bold fsp-35 color-bulma">3</div>
                    <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start">Realizo los pasatiempos y respondo.  </div>
                    <div className="pep-10 psp-15 ptp-10">
                      <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_014/img_003.svg" clasesImagen="cambio hp-40 text-center mtp-0 psp-10 pep-40" className="p-0 px-1" />
                    </div>
                </div>
            </div>

            <div className="row p-0">
              <div className="col-12 d-flex">
               
                <div className="mbp-30 seccion-semaforo">
                  <img src="images/page_014/img_005_.png" className="wp-150" alt="" />
                </div>

                <div className="w-70 msp--75 mtp-15 fsp-13">
                  <div className="f-Ubuntu-L border-style-solid border-3 rounded-p-10 border-color-luke mb-1 text-start  hp-70">
                    <div className="msp-80">
                        <span className="text-start">Para superar el desafío, tengo que profundizar en...</span>
                        <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-2 fsp-12 text-start flex-grow-1 lhp-25 contenedor-linea mep-10" />
                    </div>
                  </div>
                  <div className="f-Ubuntu-L border-style-solid border-3 rounded-p-10 border-color-jawa mb-1 text-start  hp-70">
                    <div className="msp-80">
                        <span className="text-start">Las dudas que tengo son...</span>
                        <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-2 fsp-12 text-start flex-grow-1 lhp-25 contenedor-linea mep-10" />
                    </div>
                  </div>
                  <div className="f-Ubuntu-L border-style-solid border-3 rounded-p-10 border-color-success mbp-10 text-start  hp-70">
                    <div className="msp-80">
                        <span className="text-start">Ya sé...</span>
                        <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-2 fsp-12 text-start flex-grow-1 lhp-25 contenedor-linea mep-10" />
                    </div>
                  </div>
                </div>

              </div>
            </div>



            {/*  ENCABEZADO FIN PARTE 3 */}

              {/* PIE DE PAGINA */}
              <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
                  <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
                    ABP &copy; SM
                  </div>
                  <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
              </div>
                <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end marcador-etapa" style={{bottom:0}}>

                    <div className="col-1 position-relative col-sm-2 p-0 m-0">
                      <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
                        <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
                        <div className="w-100 hp-25 bgc-goten"></div>
                    </div>
                    <div className="col-7 position-relative col-sm-2 p-0 m-0">
                        <img src="images/rotulo_planificacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
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
                    <div className="col-1 position-relative col-sm-2 p-0 m-0">
                      <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
                        <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
                        <div className="w-100 hp-25 bgc-saitama"></div>
                    </div>
                    <div className="col-1 position-relative col-sm-2 p-0 m-0">
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

export default Page014;
