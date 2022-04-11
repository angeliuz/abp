import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import ModalVideo from "../components/ModalVideo";
import SubirImagen from "../components/SubirImagen";

import "./page_030.css";

function Page030(props) {
  const pagina = "030";
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
          <div className="cabecera-v1 hp-80 bgc-android18"></div>

          <div className="ptp-30 container-titulo-global mbp-10">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 " + color}>Investigamos y proponemos</div> */}
            <div className="d-flex">
              <img
                className="hp-20 align-center mt-3 me-2 mb-2"
                src={"images/page_" + pagina + "/img_001.svg"}
                alt=""
              />
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                4
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Con mi grupo, señalo con qué color, símbolo e imagen
                representaríamos cada deber o responsabilidad que escogimos.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_030/img_001.svg" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image={"images/page_" + pagina + "/img_001.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>
          {/* <div className="d-flex global-margin h-100  mtp-0 mbp-0 psp-40 pep-0 ptp-0 pbp-0">
                        <div className="row p-0 msp-0 w-100">
                            <div className="col-12 p-0 m-0 position-relative">

                                <div className="d-flex w-100 p-2">
                                    <div className="d-flex d-inline justify-content-start align-items-start text-start f-Ubuntu-R color-android18 fsp-17 fw-700 pbp-5">a.</div>
                                    <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Señalo tres características del proyecto Ayllu Solar.</div>

                                </div>

                            </div>
                        </div>
                    </div> */}

          <div className="psp-60 pep-60 mbp-100">
            <div className="row">
              <div className="col-12 position-relative">
                <div className="position-absolute top-0 start-100 translate-middle zindex-1 ">
                  <img src="images/page_030/img_002.png" className=" " alt="" />
                </div>
                <div className="d-flex pbp-20">
                  <div className="w-30 bgc-saitama rounded-p-20 zindex-1 d-flex align-items-center justify-content-center ">
                    <span className=" p-3 f-Ubuntu-B color-white text-center">
                      Deber o responsabilidad 1
                    </span>
                  </div>
                  <div className="w-70 bgc-bobafett rounded-tbe-20 msp--20 py-2 psp-25 pep-10">
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 position-relative">
                <div className="position-absolute top-100 start-0 translate-middle zindex-2 ">
                  <img src="images/page_030/img_003.png" className=" " alt="" />
                </div>
                <div className="d-flex pbp-20  ">
                  <div className="w-20 bgc-saitama rounded-p-20 zindex-1 d-flex align-items-center justify-content-center ">
                    <span className="p-3 f-Ubuntu-B color-white text-center d-flex ">
                      Color
                    </span>
                  </div>
                  <div className="w-80 bgc-bobafett rounded-tbe-20 msp--20 py-2 psp-25 pep-10">
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110"
                    />
                  </div>
                </div>
              </div>
              <div className="col-6 position-relative ptp-20 pbp-20">
                <div className="bgc-bobafett d-flex center-center p-2 rounded-p-20 border-style-solid border-2 border-color-bobafett min-hp-230">
                  <SubirImagen
                    id={"imagen_" + pagina + "_" + (indexInput += 1)}
                    className="w-100 bgc-white"
                    colorUnidad={background}
                    imagenPlaceHolder1="images/generales/subir_imagen2.svg"
                    imagenPlaceHolder2="images/generales/subir_imagen2.svg"
                    titulo="Subir imagen"
                  />
                </div>
                <div className="position-absolute top-0 start-50 translate-middle mtp-20 f-Ubuntu-B wp-160 bgc-saitama rounded-p-20 zindex-1 d-flex align-items-center justify-content-center color-white p-3">
                  Símbolo
                </div>
              </div>
              <div className="col-6 position-relative ptp-20 pbp-20">
                <div className="position-absolute top-100 start-100 translate-middle mtp--15 zindex-2 ">
                  <img src="images/page_030/img_004.png" className=" " alt="" />
                </div>
                <div className="bgc-bobafett d-flex center-center p-2 rounded-p-20 border-style-solid border-2 border-color-bobafett min-hp-230">
                  <SubirImagen
                    id={"imagen_" + pagina + "_" + (indexInput += 1)}
                    className="w-100 bgc-white"
                    colorUnidad={background}
                    imagenPlaceHolder1="images/generales/subir_imagen2.svg"
                    imagenPlaceHolder2="images/generales/subir_imagen2.svg"
                    titulo="Subir imagen"
                  />
                </div>
                <div className="position-absolute top-0 start-50 translate-middle mtp-20 f-Ubuntu-B wp-160 bgc-saitama rounded-p-20 zindex-1 d-flex align-items-center justify-content-center color-white p-3">
                  Imagen
                </div>
              </div>
              <div className="col-12">
                <div className="d-flex pbp-20">
                  <div className="w-30 bgc-pidgey rounded-p-20 zindex-1 d-flex align-items-center justify-content-center ">
                    <span className=" p-3 f-Ubuntu-B color-white text-center">
                      Deber o responsabilidad 2
                    </span>
                  </div>
                  <div className="w-70 bgc-jack rounded-tbe-20 msp--20 py-2 psp-25 pep-10">
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="d-flex pbp-20  ">
                  <div className="w-20 bgc-pidgey rounded-p-20 zindex-1 d-flex align-items-center justify-content-center ">
                    <span className="p-3 f-Ubuntu-B color-white text-center d-flex ">
                      Color
                    </span>
                  </div>
                  <div className="w-80 bgc-jack rounded-tbe-20 msp--20 py-2 psp-25 pep-10">
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-25 min-hp-100"
                    />
                  </div>
                </div>
              </div>
              <div className="col-6 position-relative ptp-20">
                <div className="bgc-jack d-flex center-center p-2 rounded-p-20 border-style-solid border-2 border-color-jack min-hp-230">
                  <SubirImagen
                    id={"imagen_" + pagina + "_" + (indexInput += 1)}
                    className="w-100 bgc-white"
                    colorUnidad={background}
                    imagenPlaceHolder1="images/generales/subir_imagen2.svg"
                    imagenPlaceHolder2="images/generales/subir_imagen2.svg"
                    titulo="Subir imagen"
                  />
                </div>
                <div className="position-absolute top-0 start-50 translate-middle mtp-20 f-Ubuntu-B wp-160 bgc-pidgey rounded-p-20 zindex-1 d-flex align-items-center justify-content-center color-white p-3">
                  Símbolo
                </div>
              </div>
              <div className="col-6 position-relative ptp-20">
                <div className="position-absolute top-50 start-100 translate-middle msp--25 mtp--50 zindex-2 visible-768">
                  <img
                    src="images/page_030/img_001.png"
                    className="wp-150 "
                    alt=""
                  />
                </div>
                <div className="bgc-jack d-flex center-center p-2 rounded-p-20 border-style-solid border-2 border-color-jack min-hp-230">
                  <SubirImagen
                    id={"imagen_" + pagina + "_" + (indexInput += 1)}
                    className="w-100 bgc-white"
                    colorUnidad={background}
                    imagenPlaceHolder1="images/generales/subir_imagen2.svg"
                    imagenPlaceHolder2="images/generales/subir_imagen2.svg"
                    titulo="Subir imagen"
                  />
                </div>
                <div className="position-absolute top-0 start-50 translate-middle mtp-20 f-Ubuntu-B wp-160 bgc-pidgey rounded-p-20 zindex-1 d-flex align-items-center justify-content-center color-white p-3">
                  Imagen
                </div>
              </div>
            </div>
          </div>

          {/* BEGIN PIE DE PAGINA */}
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
            className="row w-100 position-absolute caja-flotante2 p-0 m-0 align-items-end"
            style={{ bottom: 0 }}
          >
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_motivacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_planificacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-7 col-sm-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_investigacion.svg"
                className="visible rotulo-etapa position-absolute top-0 start-0"
                alt=""
              />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_experimentacion.svg"
                className="oculto"
                alt=""
              />
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
          {/* END PIE DE PAGINA */}
        </div>
      </div>
    </div>
  );
}

export default Page030;
