import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import ModalVideo from "../components/ModalVideo";

import "./page_027.css";

function Page027(props) {

  const pagina = "027";
  var indexInput = 0;
  const etapa = "3"
  const background = "bgc-android18";
  const color = "color-android18";
  const colorSesion = "color-primary";
  const borderColor = "border-color-android18"
  const bgc_cajas = "bgc-goku";


  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v2 bgc-android18 d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className="caja-seccion wp-160 hp-70 text-center fsp-24  f-IntroRustG-Base color-dark">SESIÓN 6</div>
              <div className="lh-sm section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Los derechos generan responsabilidades</div>
            </div>
            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-90">
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Mis objetivos <br />en  esta sesión son:
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_027/flecha.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Analizar conflictos relacionados<br />con los derechos fundamentales.
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_027/flecha1.svg" className="wp-40 arrow-global rotate-90" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Proponer responsabilidades que<br /> ayuden a resolver conflictos.
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_027/flecha.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-3 align-self-center f-colby-compres-bold fsp-15 lh-sm text-center text-white">
                Analizar nuestras<br /> propuestas.
              </div>
              {/* <div className="p-0 align-self-center">
                <img src="images/page_025/flecha1.svg" className="wp-40 arrow-global rotate-90" alt="" />
              </div> */}
              {/* <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Imaginar cómo<br /> hacer sostenible el<br />colegio
              </div> */}
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}


          <div className="ptp-30 container-titulo-global mbp-20">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 " + color}>Contextualizamos</div> */}
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_001.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>1</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Distribuyo las noticias con mi grupo. Luego,
                completo a partir de la que me correspondió.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_027/img_003.svg" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} colorUnidad={background} pagina={"88"} image={"images/page_" + pagina + "/img_003.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
            </div>
          </div>


          <div className="d-flex global-margin mtp-0 mbp-0 psp-0 pep-60 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">
                <div className="d-flex pbp-20 ">
                  <div className="d-flex f-Ubuntu-M bgc-alf rounded-tbs-10 zindex-1 px-3  align-self-stretch color-white justify-content-center align-items-center">Noticia:</div>
                  <div className=" wp-560  border-2 border-style-solid border-color-alf rounded-tbe-20 msp--20 py-2 psp-25 pep-10">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-35" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex global-margin mtp-0 mbp-20 psp-0 pep-70 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">
                <div className="d-flex pbp-20 ">
                  <div className="wp-250 d-flex f-Ubuntu-M bgc-alf rounded-tbs-10 zindex-1 px-3  align-self-stretch color-white justify-content-center align-items-center text-start">Conflicto o problema</div>
                  <div className=" wp-500  border-2 border-style-solid border-color-alf rounded-tbe-20 msp--20 py-2 psp-25 pep-10">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-35" />
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="d-flex global-margin mtp-20 mbp-20 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row pep-70 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">


                <div className="w-100 h-100 bgc-obiwan rounded-p-10 pbp-5 ptp-5">
                  <div className="row m-0 p-2 ">


                    <div className="col-3 d-flex align-items-center ">
                      <div className=" f-Ubuntu-M fsp-16 ptp-18 psp-0 pep-20 pbp-0 text-center color-white">Protagonista 1
                        de la noticia</div>
                    </div>
                    <div className="col-9">
                      <div className="bgc-white w-100 rounded-p-10 ps-2 pe-2 ">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className=" p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                      </div>
                    </div>


                    <div className="col-12 ptp-20">
                      <div className="bgc-white w-100  rounded-p-10 p-0 m-0 mbp-0">
                        <div className="f-Ubuntu-R fsp-16 ptp-18 pep-10 psp-20 text-start">
                        ¿Cuál es su situación?
                        </div>
                        <div className="psp-20 pep-20 ptp-0 pbp-5 m-0  w-100 ">
                          <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
                        </div>

                      </div>
                    </div>
                    
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="d-flex global-margin mtp-20 mbp-20 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row pep-70 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">

                <div className="w-100 h-100 bgc-android18 rounded-p-10 pbp-5 ptp-5">
                  <div className="row m-0 p-2 ">


                    <div className="col-3 d-flex align-items-center ">
                      <div className=" f-Ubuntu-M fsp-16 ptp-18 psp-0 pep-20 pbp-0 text-center color-white">Protagonista 2
                        de la noticia</div>
                    </div>
                    <div className="col-9">
                      <div className="bgc-white w-100 rounded-p-10 ps-2 pe-2 ">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className=" p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                      </div>
                    </div>


                    <div className="col-12 ptp-20">
                      <div className="bgc-white w-100  rounded-p-10 p-0 m-0 mbp-0">
                        <div className="f-Ubuntu-R fsp-16 ptp-18 pep-10 psp-20 text-start">
                        ¿Cuál es su situación?
                        </div>
                        <div className="psp-20 pep-20 ptp-0 pbp-5 m-0  w-100 ">
                          <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
                        </div>

                      </div>
                    </div>
                    
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="d-flex global-margin mtp-20 mbp-80 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row pep-70 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">

                

                <div className="w-100 h-100 bgc-goten rounded-p-10 pbp-5 ptp-5">
                  <div className="row m-0 p-2 ">


                    <div className="col-3 d-flex align-items-center ">
                      <div className=" f-Ubuntu-M fsp-16 ptp-18 psp-0 pep-20 pbp-0 text-center color-white">Protagonista 3
                        de la noticia</div>
                    </div>
                    <div className="col-9 position-relative">
                    
                      <div className="bgc-white w-100 rounded-p-10 ps-2 pe-2 ">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className=" p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                      </div>
                    </div>


                    <div className="col-12 ptp-20 position-relative">
                    <div className="position-absolute top-50 start-100 translate-middle msp-60 mtp--50 zindex-3"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-110 " alt="" /></div>
                      <div className="bgc-white w-100  rounded-p-10 p-0 m-0 mbp-0">
                        <div className="f-Ubuntu-R fsp-16 ptp-18 pep-10 psp-20 text-start">
                        ¿Cuál es su situación?
                        </div>
                        <div className="psp-20 pep-20 ptp-0 pbp-5 m-0  w-100 ">
                          <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
                        </div>

                      </div>
                    </div>
                    
                  </div>
                </div>

              </div>
            </div>
          </div>








          {/* <div className="d-flex global-margin mtp-0 mbp-250 psp-0 pep-0 ptp-0 pbp-0 position-relative hp-400 f-Ubuntu-L  fsp-16">
            <div className="position-absolute top-100 start-0 translate-middle msp-150 mtp--70 zindex-2 visible-768"><img src="images/page_027/img_001.png" className="wp-200" alt="" /></div>
            
            <div className="position-absolute top-50 start-50 translate-middle msp-0 mtp-60 zindex-1"><img src={"images/page_" + pagina + "/img_005.svg"} className="wp-580" alt="" /></div>

            <div className="  position-absolute top-50 start-50 translate-middle msp--180 mtp--95 zindex-1">
              <div className="d-flex ">
                <div className="wp-120 f-Ubuntu-M fsp-16 mep-30 ptp-2 pbp-2 rounded-p-10 align-self-end color-white">Protagonista 1
                  de la noticia</div>
              </div>
              <div className="bgc-white msp--20 wp-180 rounded-p-10  p-2">
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 hp-35 overflow-auto" />
              </div>
              <div className="bgc-white msp--20 rounded-p-10 mtp-10 p-2 wp-180">
                <div className=" f-Ubuntu-L fsp-16 ptp-2 pbp-2 rounded-p-10 color-dark text-center">¿Cuál es su situación?</div>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 hp-70 overflow-auto" />
              </div>
            </div>


            <div className="position-absolute top-50 start-50 translate-middle msp-200 mtp--95 zindex-1">
              <div className="d-flex flex-column wp-160">
                <div className=" wp-120 f-Ubuntu-M fsp-16 mep-30 ptp-2 pbp-2 rounded-p-10  color-white">Protagonista 2
                  de la noticia</div>
              </div>
              <div className="bgc-white msp--20 wp-180 rounded-p-10 p-2">

                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 hp-35 overflow-auto" />
              </div>
              <div className="bgc-white msp--20 wp-180 rounded-p-10 mtp-10  p-2">
                <div className=" f-Ubuntu-L fsp-16 ptp-2 pbp-2 rounded-p-10 color-dark text-center">¿Cuál es su situación?</div>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 hp-70 overflow-auto" />
              </div>
            </div>



            <div className="position-absolute top-50 start-50 translate-middle msp--5 mtp-40 zindex-1">
              <div className="d-flex flex-column wp-160 psp-10 pep-10 ptp-0 pbp-0 ">
                <div className=" wp-160 f-Ubuntu-M fsp-16 ptp-2 pbp-2 rounded-p-10 color-dark text-center">Conflicto o problema</div>
                <div className="bgc-white rounded-p-10 wp-160 p-2">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 hp-110 overflow-auto" />
                </div>
              </div>
            </div>

            <div className="  position-absolute top-50 start-50 translate-middle mtp-270 msp--110 zindex-1">
              <div className="d-flex ">
                <div className="wp-120 f-Ubuntu-M fsp-16 mep-30 ptp-2 pbp-2 rounded-p-10 align-self-end color-white">Protagonista 3
                  de la noticia</div>
              </div>
              <div className="bgc-white msp--20 wp-180 rounded-p-10  p-2">
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 hp-35 overflow-auto" />
              </div>

            </div>

            <div className="position-absolute top-50 start-50 translate-middle mtp-260 msp-120 zindex-1">
              <div className="d-flex ">
              <div className="bgc-white msp--20 rounded-p-10 wp-180 mtp-10  p-2">
                <div className=" f-Ubuntu-L fsp-16 ptp-2 pbp-2 rounded-p-10 color-dark text-center">¿Cuál es su situación?</div>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 hp-70 overflow-auto" />
              </div>
              </div>
              
              
            </div>
          </div> */}





          {/* BEGIN PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
              ABP &copy; SM
            </div>
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>
          <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>

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
            <div className="col-7 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_investigacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
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
          {/* END PIE DE PAGINA */}

        </div>
      </div>
    </div>

  );
}

export default Page027;
