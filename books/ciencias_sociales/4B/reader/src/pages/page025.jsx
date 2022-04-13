import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import ModalVideo from "../components/ModalVideo";
import SubirImagen from '../components/SubirImagen';

import "./page_025.css";

function Page025(props) {
  const pagina = "025";
  var indexInput = 0;
  const etapa = "3";
  const background = "bgc-android18";
  const color = "color-android18";
  const colorSesion = "color-primary";
  const borderColor = "border-color-android18";
  const bgc_cajas = "bgc-goku";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div
          className="page bgc-white overflow-hidden position-relative"
          id={"page_" + pagina}
        >
          {/* BEGIN CABECERA VERSIÓN 2 */}
          {/* <div className={"cabecera-v2 d-flex flex-column " + background}>
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div
                className={
                  "caja wp-150 text-center fsp-24 f-IntroRustG-Base " +
                  colorSesion
                }
              >
                SESIÓN 5
              </div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">
                El destino de los desechos
              </div>
            </div>
          </div> */}
          {/* END CABECERA VERSIÓN 2 */}

          {/* BEGIN CABECERA VERSIÓN 1 */}
          <div className="cabecera-v1 hp-80 bgc-android18">
          </div>
          {/* END CABECERA VERSIÓN 1 */}



          <div className="ptp-30 container-titulo-global mbp-20">
            <div
              className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 " + color}
            >
              Los derechos y la buena convivencia
            </div>
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_001.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                5
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Leo mis derechos y creo un esquema con los tipos derechos.
              </div>
              {/* <ModalVideo
                id={"p" + pagina + "_video" + (indexInput += 1)}
                image="images/generales/play.svg"
                clasesImagen="cambio hp-40 mtp-10"
                className="p-0 px-1"
              /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_025/img_001.svg" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_025/img_001.svg" className="p-0 px-1" /> */}
              <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} colorUnidad={background} pagina={"79"} image={"images/page_" + pagina + "/img_001.svg"} clasesImagen="hp-40 text-center mtp-10" className="p-0 px-0" />
        </div>
          </div>

          <div className="d-flex msp-60 mep-60 mbp-0 mtp-0">

            <div className="row m-0 psp-60 pep-60 ptp-10 pbp-0 w-100">

              <div className="col-sm-12 col-md-12 position-relative pbp-20">
              <div className="position-absolute top-0 start-100 translate-middle  mtp-0 visible-768"><img src={"images/page_" + pagina + "/img_002.png"} className=" " alt="" />
                </div>

                <div className="d-flex align-items-center psp-20 pep-20 ptp-0 pbp-10 min-hp-500 border-style-solid border-3 border-color-android18 w-100 rounded-p-20">

                <SubirImagen
                    id={"imagen_" + pagina + "_" + (indexInput += 1)}
                    className="w-100 bgc-white"
                    colorUnidad={background}
                    imagenPlaceHolder="images/generales/subir_imagen.svg"
                    titulo="Subir imagen"
                  />
                </div>

              </div>

            </div>
          </div>


          <div className=" container-titulo-global mbp-0">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 "+color}>La regla de las 3R</div> */}
            <div className="d-flex">
              {/* <img
                className="hp-20 align-center mt-3 me-2 mb-2"
                src={"images/page_" + pagina + "/img_001.svg"}
                alt=""
              /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                6
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Reflexiono: ¿Cómo se relacionan los derechos con la buena convivencia?
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              {/* <ModalBook
                id={"p" + pagina + "_book" + (indexInput += 1)}
                image={"images/page_" + pagina + "/img_006.svg"}
                clasesImagen="hp-40 text-center mtp-10 "
                className="p-0 px-0"
              /> */}
            </div>
          </div>

          {/* <div className="d-flex psp-60 pep-60 pbp-100">
            <div className="row w-100 p-0 m-0">
              <div className="col-12">
                <img
                  className="wp-200 align-center mt-3 me-2 mb-2"
                  src={"images/page_" + pagina + "/img_007.png"}
                  alt=""
                />
              </div>
            </div>
          </div> */}



          <div className="d-flex msp-120 mep-120 mbp-100 mtp-0">

            <div className="row m-0 psp-10 pep-10  pbp-0 bgc-azuka border-style-solid border-1 border-color-dark w-100  ">

              <div className="col-md-12 col-lg-12 position-relative ">
              <div className="position-absolute top-0 start-100 translate-middle msp--30 mtp--120 visible-768"><img src={"images/page_" + pagina + "/img_003.png"} className=" " alt="" />
                </div>
                <div className="d-flex flex-column mbp-0 mtp-0 w-100">
                  <div className="p-2 min-hp-80 w-100 ">
                    <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 text-start">

                     
                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-175" />
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
                        <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">
                            {props.numeroPagina(pagina)}
                        </div>
                    </div>
                    <div
                        className="row position-absolute caja-flotante2 p-0 m-0 align-items-end"
                        style={{ bottom: 0 }}
                    >
                        <div className="col-1 position-relative col-sm-2 p-0 m-0">
                            <img
                                src="images/rotulo_motivacion.svg"
                                className="oculto"
                                alt=""
                            />
                            <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
                            <div className="w-100 hp-25 bgc-goten"></div>
                        </div>
                        <div className="col-1 position-relative col-sm-2 p-0 m-0">
                            <img
                                src="images/rotulo_planificacion.svg"
                                className="oculto"
                                alt=""
                            />
                            <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-bulma"></div>
                        </div>
                        <div className="col-7 position-relative col-sm-2 p-0 m-0">
                            <img
                                src="images/rotulo_investigacion.svg"
                                className="visible rotulo-etapa position-absolute top-0 start-0"
                                alt=""
                            />
                            <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-android18"></div>
                        </div>
                        <div className="col-1 position-relative col-sm-2 p-0 m-0">
                            <img
                                src="images/rotulo_experimentacion.svg"
                                className="oculto"
                                alt=""
                            />
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

export default Page025;
