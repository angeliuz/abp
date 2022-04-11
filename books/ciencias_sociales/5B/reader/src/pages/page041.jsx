import React from "react";
import InputBox from "../components/InputBox";
// import ModalBook from "../components/ModalBook";
import SubirImagen from "../components/SubirImagen";

import "./page_041.css";

function Page041(props) {

  const pagina = "041";
  var indexInput = 0;
  const background = "bgc-android18";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v2 bgc-android18 d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className="caja-seccion wp-160 hp-70 text-center fsp-24 f-IntroRustG-Base color-dark">SESIÓN 9</div>
              <div className="d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Un mapa mental de nuestro avance</div>
            </div>
            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-90">
              <div className="p-2 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Mis objetivos en<br />esta sesión son:
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_023/flecha.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Identificar los principales<br />avances de nuestra revista.
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_023/flecha1.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Elaborar un mapa<br />mental con los avances<br />de nuestra revista.
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_023/flecha.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-3 align-self-center f-colby-compres-bold fsp-17 lh-sm text-center text-white">
                Reflexionar sobre<br />el trabajo que hemos<br />realizado.
              </div>
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}
          <div className="ptp-10 container-titulo-global">
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_033/img_002.svg" alt=""  /> */}
              <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">1</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Completo el siguiente mapa mental con los avances en la creación de la revista.</div>
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_031/img_002.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="d-flex global-margin mtp-0 mbp-60 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">

                <div className="position-absolute top-50 start-50 translate-middle mtp--350 msp--120 conceptos1">
                  <div className="text-center f-colby-condensed-medium fsp-16 color-bulma">Conceptos clave</div>
                  <div className="position-relative bgc-white p-1 rounded-p-5 border-style-solid border-color-bulma border-1 wp-230">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-90" />
                  </div>
                </div>

                <div className="position-absolute top-50 start-50 translate-middle mtp--350 msp-120 conceptos2">
                  <div className="text-center f-colby-condensed-medium fsp-16 color-blaze">Conceptos clave</div>
                  <div className="position-relative bgc-white p-1 rounded-p-5 border-style-solid border-color-blaze border-1 wp-230">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-90" />
                  </div>
                </div>

                <div className="position-absolute top-50 start-50 translate-middle mtp-350 msp--120 conceptos3">
                  <div className="text-center f-colby-condensed-medium fsp-16 color-pidgey">Conceptos clave</div>
                  <div className="position-relative bgc-white p-1 rounded-p-5 border-style-solid border-color-pidgey border-1 wp-230">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-90" />
                  </div>
                </div>

                <div className="position-absolute top-50 start-50 translate-middle mtp-350 msp-120 conceptos4">
                  <div className="text-center f-colby-condensed-medium fsp-16 color-pikachu">Conceptos clave</div>
                  <div className="position-relative bgc-white p-1 rounded-p-5 border-style-solid border-color-pikachu border-1 wp-230">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-90" />
                  </div>
                </div>

                <div className="position-absolute top-50 start-50 translate-middle mtp--130 msp--290 imagen1">
                  <div className="text-center f-colby-condensed-medium fsp-16 color-bulma">Imagen clave</div>
                  <div className="position-relative d-flex center-center p-2 rounded-p-10 border-style-solid border-1 border-color-bulma wp-210 hp-160 achica-caja">

                                        <SubirImagen
                                            id={"imagen_" + pagina + "_" + (indexInput += 1)}
                                            className="wp-150 bgc-white"
                                            colorUnidad={background}
                                            imagenPlaceHolder1="images/generales/subir_imagen1.svg"
                                            imagenPlaceHolder2="images/generales/subir_imagen2.svg"
                                            titulo="Subir imagen"
                                        />
                  </div>
                </div>

                <div className="position-absolute top-50 start-50 translate-middle mtp--130 msp-290 imagen2">
                  <div className="text-center f-colby-condensed-medium fsp-16 color-blaze">Imagen clave</div>
                  <div className="position-relative d-flex center-center p-2 rounded-p-10 border-style-solid border-1 border-color-blaze wp-210 hp-160 achica-caja">

                                        <SubirImagen
                                            id={"imagen_" + pagina + "_" + (indexInput += 1)}
                                            className="wp-150 bgc-white"
                                            colorUnidad={background}
                                            imagenPlaceHolder1="images/generales/subir_imagen1.svg"
                                            imagenPlaceHolder2="images/generales/subir_imagen2.svg"
                                            titulo="Subir imagen"
                                        />
                  </div>
                </div>

                <div className="position-absolute top-50 start-50 translate-middle mtp-130 msp--290 imagen3">
                  <div className="text-center f-colby-condensed-medium fsp-16 color-pidgey">Imagen clave</div>
                  <div className="position-relative d-flex center-center p-2 rounded-p-10 border-style-solid border-1 border-color-pidgey wp-210 hp-160 achica-caja">

                                        <SubirImagen
                                            id={"imagen_" + pagina + "_" + (indexInput += 1)}
                                            className="wp-150 bgc-white"
                                            colorUnidad={background}
                                            imagenPlaceHolder1="images/generales/subir_imagen1.svg"
                                            imagenPlaceHolder2="images/generales/subir_imagen2.svg"
                                            titulo="Subir imagen"
                                        />
                  </div>
                </div>

                <div className="position-absolute top-50 start-50 translate-middle mtp-130 msp-290 imagen4">
                  <div className="text-center f-colby-condensed-medium fsp-16 color-pikachu">Imagen clave</div>
                  <div className="position-relative d-flex center-center p-2 rounded-p-10 border-style-solid border-1 border-color-pikachu wp-210 hp-160 achica-caja">

                                        <SubirImagen
                                            id={"imagen_" + pagina + "_" + (indexInput += 1)}
                                            className="wp-150 bgc-white"
                                            colorUnidad={background}
                                            imagenPlaceHolder1="images/generales/subir_imagen1.svg"
                                            imagenPlaceHolder2="images/generales/subir_imagen2.svg"
                                            titulo="Subir imagen"
                                        />
                  </div>
                </div>

                <img src="images/page_041/img_002.svg" className="w-45 mtp-150 mbp-150 achica-margen" alt="" />

              </div>
            </div>
          </div>

          {/* PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>ABP &copy; SM</div>
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
              <img src="images/rotulo_investigacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
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

export default Page041;
