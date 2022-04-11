import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import ModalBook from "../components/ModalBook";
import SubirImagen from "../components/SubirImagen";

import "./page_066.css";

function Page066(props) {
  const pagina = "066";
  var indexInput = 0;
  const background = "bgc-saitama";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div
          className="page cb-page66 bgc-white overflow-hidden position-relative"
          id={"page_" + pagina}
        >
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v1 hp-80 bgc-saitama"></div>
          {/* END CABECERA VERSIÓN 2 */}

          {/* contenido DE PAGINA */}

          <div className="ptp-30 psp-60 pep-60">
            <div className="f-Ubuntu-M fsp-20 color-saitama text-start">
              Calentando motores
            </div>
          </div>
          <div className="container-titulo-global mbp-∫0">
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_033/img_002.svg" alt=""  /> */}
              <div className="f-ccdigitaldelivery-bold fsp-35 color-saitama">
                3
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Preparo lo que presentaré en el <i> stand</i>.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.jpg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_031/img_002.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>
          <div className="mx-auto cb-600 cb-calc bgc-arena ptp-10 pep-10 psp-10 pbp-10 rounded-p-10">
            <div className="cb-600 mx-auto bgc-white rounded-p-10 cb-outline-66 position-relative">
              <img
                src="images/page_066/img_001.png"
                class="wp-70 cb-personaje-p66 position-absolute"
                alt=""
              ></img>
              <div className="text-start w-70 p-2 bgc-raichu cb-borde-desigual f-Ubuntu-L fsp-15">
                Los temas de los que hablaré en conjunto con otros:
              </div>
              <div className="psp-20 pep-10">
                <InputBox
                  id={"p" + pagina + "_input" + (indexInput += 1)}
                  className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-130"
                />
              </div>
            </div>
            <div className="mtp-10  cb-600 mx-auto bgc-white rounded-p-10 cb-outline-66 position-relative">
              <img
                src="images/page_066/img_002.png"
                class="wp-30 cb-micro-p66 position-absolute"
                alt=""
              ></img>
              <div className="text-start w-45 p-2 bgc-draco cb-borde-desigual f-Ubuntu-L fsp-15">
                {" "}
                Los temas de los que hablaré solo:
              </div>
              <div className="psp-20 pep-10">
                <InputBox
                  id={"p" + pagina + "_input" + (indexInput += 1)}
                  className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-130"
                />
              </div>
            </div>
            <div className="cb-cajas-top  f-Ubuntu-L fsp-15 justify-content-between mtp-20">
              <div className="mx-286 w-100 bgc-white rounded-p-10 cb-outline-66 zindex-10 position-relative">
                <div className="wp-250 text-start p-2 bgc-shogun cb-borde-desigual f-Ubuntu-L fsp-15">
                  Ideas o aspectos que no puedo olvidar:
                </div>
                <div className="psp-20 pep-10">
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170"
                  />
                </div>
              </div>
              <div className="mx-286 w-100 bgc-white rounded-p-10 cb-outline-66 zindex-10">
                <div className="wp-250 text-start p-2 bgc-shogun cb-borde-desigual f-Ubuntu-L fsp-15">
                  Ideas o aspectos complementarios que comentaré si hay tiempo:
                </div>
                <div className="psp-20 pep-10">
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* EJERCICIO 2 */}
          <div className=" container-titulo-global mbp-∫0">
            <div className="d-flex">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-saitama">
                4
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Dibujo tres emojis que mejor expresan mis emociones antes de
                presentar.
              </div>
            </div>
          </div>
          <div className="cb-calc p-2 mx-auto cb-600 d-flex justify-content-between mbp-70">
            <div className="d-flex center-center p-2 rounded-50 border-style-solid border-1 wp-150 hp-150">
              <SubirImagen
                id={"imagen_" + pagina + "_" + (indexInput += 1)}
                className="w-100 bgc-white"
                colorUnidad={background}
                imagenPlaceHolder="images/generales/subir_imagen.svg"
                titulo="Subir imagen"
              />
            </div>
            <div className="d-flex center-center p-2 rounded-50 border-style-solid border-1 wp-150 hp-150">
              <SubirImagen
                id={"imagen_" + pagina + "_" + (indexInput += 1)}
                className="w-100 bgc-white"
                colorUnidad={background}
                imagenPlaceHolder="images/generales/subir_imagen.svg"
                titulo="Subir imagen"
              />
            </div>
            <div className="d-flex center-center p-2 rounded-50 border-style-solid border-1 wp-150 hp-150">
              <SubirImagen
                id={"imagen_" + pagina + "_" + (indexInput += 1)}
                className="w-100 bgc-white"
                colorUnidad={background}
                imagenPlaceHolder="images/generales/subir_imagen.svg"
                titulo="Subir imagen"
              />
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
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img
                src="images/rotulo_investigacion.svg"
                className="oculto"
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
            <div className="col-7 position-relative col-sm-2 p-0 m-0">
              <img
                src="images/rotulo_creacion.svg"
                className="visible rotulo-etapa position-absolute top-0 start-0"
                alt=""
              />
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

export default Page066;
