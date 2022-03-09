import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_027.css";

function Page027(props) {
  const pagina = "027";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div
          className="page bgc-white overflow-hidden position-relative"
          id={"page_" + pagina}
        >
          <div className="cabecera-v2 bgc-android18 d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className="caja wp-150 text-center fsp-24 f-IntroRustG-Base color-balrog">
                SESIÓN 5
              </div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">
                ¡Seguridad escolar!
              </div>
            </div>

            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-90"></div>
          </div>

          <div className="ptp-30 psp-60 pep-60">
            <div className="f-Ubuntu-M fsp-20 color-android18 text-start">
              Labor educativa de la brigada
            </div>
          </div>
          <div className="container-titulo-global mbp-20">
            <div className="d-flex">
              <img
                className="hp-20 align-center mt-3 me-2 mb-2"
                src="images/page_027/img_002.svg"
                alt=""
              />
              <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">
                1
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Leo la revista y doy recomendaciones ante actitudes peligrosas.
              </div>
              {/* <img src="images/page_023/img_003.svg" className="cambio hp-50 text-end mtp-0 psp-10 pep-40"  alt=""  /> */}
              <ModalBook
                id={"p" + pagina + "_book" + (indexInput += 1)} pagina={"81"}
                image="images/page_027/img_001.svg"
                clasesImagen="hp-40 text-center mtp-10 "
                className="p-0 px-0"
              />
            </div>
          </div>

          <div className="row container-row px-5">
            <div className="col-12 justify-content-center mtp-10 mbp-70 psp-80 pep-80  position-relative">
              <div className="position-absolute top-50 start-0 translate-middle msp-40 mtp-25 visible-768">
                <img
                  src="images/page_027/img_001.png"
                  className="wp-40 "
                  alt=""
                />
              </div>

              <div className="mx-4 p-2 rounded-p-10 bgc-bobafett">
                <div className="mx-3">

                  <div className="d-flex flex-column f-Ubuntu-L bgc-white psp-20 ptp-10 pbp-15 pep-20 rounded-p-10 text-start mbp-20 mtp-20 position-relative">
                    <div className="position-absolute top-0 start-100 translate-middle wp-100 ">
                      <img
                        src="images/page_027/img_003.png"
                        className="w-30 msp-30"
                        alt=""
                      />
                    </div>
                    <span>Actitud peligrosa:</span>
                    <span>Recomendación:</span>
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150"
                    />
                  </div>
                  <div className="d-flex flex-column f-Ubuntu-L bgc-white psp-20 ptp-10 pbp-15 pep-20 rounded-p-10 text-start mbp-20 position-relative">
                    <div className="position-absolute top-0 start-100 translate-middle wp-100 ">
                      <img
                        src="images/page_027/img_003.png"
                        className="w-30 msp-30"
                        alt=""
                      />
                    </div>
                    <span>Actitud peligrosa:</span>
                    <span>Recomendación:</span>
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150"
                    />
                  </div>
                  <div className="d-flex flex-column f-Ubuntu-L bgc-white psp-20 ptp-10 pbp-15 pep-20 rounded-p-10 text-start mbp-20 position-relative">
                    <div className="position-absolute top-0 start-100 translate-middle wp-100 ">
                      <img
                        src="images/page_027/img_003.png"
                        className="w-30 msp-30"
                        alt=""
                      />
                    </div>
                    <span>Actitud peligrosa:</span>
                    <span>Recomendación:</span>
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="ptp-10 container-titulo-global mbp-0">
              <div className="d-flex mtp--60">
                {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_029/img_002.svg" alt=""  /> */}
                <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">2</div>
                <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Comparto mis recomendaciones con mi equipo y completo.</div>

              </div>
            </div>
            <div className="col-md-12 col-md-6 position-relative mbp-10">
              <div className="position-absolute top-50 start-100 translate-middle zindex-1 visible-768">
                <img
                  src="images/page_027/img_005.png"
                  className=" "
                  alt=""
                />
              </div>
              <div className="box-color-24-1">
                <div className="f-Ubuntu-L alinea rounded-caja bgc-klee w-100 p-2 text-center border-style-solid border-color-akuma border-2 border-bottom-0">
                  Lo que más me gustó de compartir mis recomendaciones fue...
                </div>
                <div className=" linea1 bgc-white min-hp-150 p-2  rounded-seb-20 border-style-solid border-color-akuma border-2 border-top-0">
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-130"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-12 col-md-6 position-relative mbp-70">
              <div className="position-absolute top-0 start-100 translate-middle visible-768 zindex-2 msp--20 mtp--60">
                <img
                  src="images/page_027/img_004.png"
                  className=""
                  alt=""
                />
              </div>


              <div className="box-color-24-2">
                <div className="f-Ubuntu-L alinea rounded-caja bgc-marcianos w-100 p-2 text-center border-style-solid border-color-woody border-2 border-bottom-0">
                  Lo que menos que gustó de compartir mis recomendaciones fue...
                </div>
                <div className="linea1 bgc-white min-hp-150 p-2  rounded-seb-20 border-style-solid border-color-woody border-2 border-top-0">
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-130"
                  />
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
            className="row w-100 position-absolute caja-flotante2 p-0 m-0 align-items-end"
            style={{ bottom: 0 }}
          >
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_motivacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_planificacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-7 col-md-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_investigacion.svg"
                className="visible rotulo-etapa position-absolute top-0 start-0"
                alt=""
              />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
              <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
              <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
              <img src="images/rotulo_difusion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-leono rounded-caja-end"></div>
              <div className="w-100 hp-25 bgc-pikachu"></div>
            </div>

          </div>
          {/*FIN PIE DE PAGINA */}
        </div>
      </div>
    </div>
  );
}

export default Page027;
