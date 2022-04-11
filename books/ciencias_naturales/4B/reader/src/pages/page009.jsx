import React from "react";
import InputBox from "../components/InputBox";
import Check from "../components/Check";
import SubirImagen from "../components/SubirImagen";

import "./page_009.css";

function Page009(props) {
  const pagina = "009";
  var indexInput = 0;
  const background = "bgc-goten";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div
          className="page bgc-white cb-page9 overflow-hidden position-relative"
          id={"page_" + pagina}
        >
          <div className="cabecera-v1 hp-80 bgc-goten"></div>
          <div className=" container-titulo-global mbp-∫0">
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_033/img_002.svg" alt=""  /> */}
              <div className="f-ccdigitaldelivery-bold fsp-35 color-goten">
                2
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Dibujo cómo me imagino de brigadista y los objetos que
                utilizaría.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.jpg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_031/img_002.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>
          <div className="d-flex psp-60 pep-60 pbp-0">
            <div className="row w-100 p-0 m-0">
              <div className="col-md-12 col-lg-12 position-relative">
                <img
                  src="images/page_009/img_001.png"
                  className="cb-tachuela-09"
                  alt=""
                ></img>
                <img
                  src="images/page_009/img_003.png"
                  className="cb-personaje-09"
                  alt=""
                ></img>
                <img
                  src="images/page_009/img_002.png"
                  className="cb-crallones-09"
                  alt=""
                ></img>
                

                <div className="mbp-20 mtp-10 msp-20 mep-20">
                  <div className="d-flex center-center p-2 rounded-p-20 border-style-solid border-2 border-color-android18 min-hp-400">
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
          </div>

          <div className=" container-titulo-global mbp-∫0">
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_033/img_002.svg" alt=""  /> */}
              <div className="f-ccdigitaldelivery-bold fsp-35 color-goten">
                3
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Marco con un{" "}
                <img
                  src="images/page_009/img_002.svg"
                  className="mbp-10"
                  alt=""
                ></img>{" "}
                lo que para mí es ser brigadista.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.jpg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_031/img_002.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>
          <div className="cb-ejercicio-2-p07 ptp-20 psp-25 pbp-15 pep-10 position-relative mbp-10 mtp-10">
            <img
              src="images/page_009/img_004.png"
              className="cb-lapiz-09"
              alt=""
            ></img>
            <div className="d-flex mbp-10">
              <div className="wp-30 hp-30">
                <Check
                  id={"check" + pagina + "_" + (indexInput += 1)}
                  image="images/generales/ticket.svg"
                ></Check>
              </div>
              <div className="msp-10 text-start justify-content-center align-items-center d-flex f-Ubuntu-R fsp-12">
                {" "}
                Ayudar cuando alguien lo necesite.
              </div>
            </div>
            <div className="d-flex mbp-10">
              <div className="wp-30 hp-30">
                <Check
                  id={"check" + pagina + "_" + (indexInput += 1)}
                  image="images/generales/ticket.svg"
                ></Check>
              </div>
              <div className="msp-10 justify-content-center align-items-center d-flex f-Ubuntu-R fsp-12">
                Pedir ayuda cuando la necesito.
              </div>
            </div>
            <div className="d-flex mbp-10">
              <div className="wp-30 hp-30">
                <Check
                  id={"check" + pagina + "_" + (indexInput += 1)}
                  image="images/generales/ticket.svg"
                ></Check>
              </div>
              <div className="msp-10 text-start justify-content-center align-items-center d-flex f-Ubuntu-R fsp-12">
                Compartir mi opinión y ser escuchado.
              </div>
            </div>
            <div className="d-flex mbp-10">
              <div className="wp-30 hp-30">
                <Check
                  id={"check" + pagina + "_" + (indexInput += 1)}
                  image="images/generales/ticket.svg"
                ></Check>
              </div>
              <div className="msp-10 text-start justify-content-center align-items-center d-flex f-Ubuntu-R fsp-12">
                Aprender de los demás.
              </div>
            </div>
            <div className="d-flex mbp-10">
              <div className="wp-30 hp-30">
                <Check
                  id={"check" + pagina + "_" + (indexInput += 1)}
                  image="images/generales/ticket.svg"
                ></Check>
              </div>
              <div className="msp-10 text-start justify-content-center align-items-center d-flex f-Ubuntu-R fsp-12">
                Querer dar siempre lo mejor de mí.
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
            <div className="col-7 position-relative col-md-2 p-0 m-0">
              <img
                src="images/rotulo_motivacion.svg"
                className="visible rotulo-etapa position-absolute top-0 start-0"
                alt=""
              />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-1 position-relative col-md-2 p-0 m-0">
              <img
                src="images/rotulo_planificacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-1 position-relative col-md-2 p-0 m-0">
              <img
                src="images/rotulo_investigacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 position-relative col-md-2 p-0 m-0">
              <img
                src="images/rotulo_experimentacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-1 position-relative col-md-2 p-0 m-0">
              <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className="col-1 position-relative col-md-2 p-0 m-0">
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

export default Page009;
