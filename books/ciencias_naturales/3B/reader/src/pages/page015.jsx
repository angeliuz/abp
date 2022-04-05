import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";

import TerminosPareados1 from "../components/TerminosPareados1";

import "./page_015.css";

function Page015(props) {

  const pagina = "015";
  var indexInput = 0;
  const etapa = "2"
  const background = "bgc-bulma";
  const color = "color-bulma";
  const borderColor = "border-color-bulma"
  const bgc_cajas = "bgc-draco";

  return (

    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className={"cabecera-v2 d-flex flex-column " + background}>
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className={"caja wp-150 text-center fsp-24 f-IntroRustG-Base " + color}>SESIÓN 3</div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">¡Este es nuestro plan!</div>
            </div>

          </div>
          {/* END CABECERA VERSIÓN 2 */}



          <div className="col-12 p-0 m-0 position-relative">
            <div className="container-titulo-global mtp-20 mbp-0">
              <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
                ¿Qué hacemos en cada etapa del proyecto?
              </div>
              <div className="d-flex psp-20">
                {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_005.svg"} alt=""  />  */}
                <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                  1
                </div>
                <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                  Veo el video. Luego, relaciono las actividades con la etapa del proyecto en que las vamos a realizar.
                </div>
                <ModalVideo
                  id={"p" + pagina + "_video" + (indexInput += 1)}
                  linkVideo="662244296"
                  tituloVideo="Héroes del medioambiente II"
                  tipoVideo="vimeo"
                  image={"images/generales/play.svg"}
                  colorUnidad={background}
                  clasesImagen="cambio hp-40 mtp-10"
                  className="p-0 px-1"
                />
              </div>
            </div>
          </div>

          <div className="d-flex position-relative">

            <div className="d-flex w-100 mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0 position-absolute zindex-10">
              <div className="row p-0 m-0 w-100">
                <div className="col-12 p-0 m-0 position-relative">


                  <TerminosPareados1
                  id={"svg_" + indexInput + "_" + pagina}
                    anchoSVG="550"
                    altoSVG="580"
                    totalLineas="4"
                    pointsLinea1="240,50 240,50"
                    pointsLinea2="240,195 240,195"
                    pointsLinea3="240,350 240,350"
                    pointsLinea4="240,493 240,493"
                  />


                </div>
              </div>
            </div>

            <div className="d-flex w-100 justify-content-center">

              <div className="row wp-550 psp-20 pep-20 position-relative">
                <div className="col-6 col-md-6">
                  <div className="d-flex flex-column pbp-30">
                    <div className="psp-20 pep-20 ptp-20 pbp-20 f-Ubuntu-R fsp-14 w-90 position-relative bgc-draco rounded-p-10 min-hp-100 d-flex center-center text-start">
                      Investigar sobre el destino de los desechos para realizar infografía.
                      <div className="A position-absolute top-50 start-100 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-0 border-color-dark rounded-circle"></div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-6">
                  <div className="d-flex flex-column justify-content-center ptp-30 pbp-30">
                    <div className="psp-20 pep-20 ptp-20 pbp-20 f-Ubuntu-R fsp-14 w-60 position-relative bgc-quigon rounded-p-10 min-hp-50 d-flex center-center align-self-end text-center">
                      Creación
                      <div className="B position-absolute top-50 start-0 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-0 border-color-dark rounded-circle"></div>
                    </div>
                  </div>

                </div>
                <div className="col-6 col-md-6">
                  <div className="d-flex flex-column pbp-30">
                    <div className="psp-20 pep-20 ptp-20 pbp-20 f-Ubuntu-R fsp-14 w-90 position-relative bgc-draco rounded-p-10 min-hp-100 d-flex center-center text-start">
                      Crear modelos de objetos que nos ayudan a reutilizar o reciclar para presentarlos en la feria.
                      <div className="position-absolute top-50 start-100 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-0 border-color-dark rounded-circle"></div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-6">
                  <div className="d-flex flex-column justify-content-center ptp-30 pbp-30">
                    <div className="psp-20 pep-20 ptp-20 pbp-20 f-Ubuntu-R fsp-14 w-60 position-relative bgc-woody rounded-p-10 min-hp-50 d-flex center-center align-self-end text-center">
                      Experimentación
                      <div className="C position-absolute top-50 start-0 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-0 border-color-dark rounded-circle"></div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-6">
                  <div className="d-flex flex-column pbp-30">
                    <div className="psp-20 pep-20 ptp-20 pbp-20 f-Ubuntu-R fsp-14 w-90 position-relative bgc-draco rounded-p-10 min-hp-100 d-flex center-center text-start">
                      Realizar una encuesta para conocer qué sabe de reciclaje la comunidad escolar.
                      <div className="D position-absolute top-50 start-100 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-0 border-color-dark rounded-circle"></div>
                    </div>
                  </div>

                </div>
                <div className="col-6 col-md-6">
                  <div className="d-flex flex-column justify-content-center ptp-30 pbp-30">
                    <div className="psp-20 pep-20 ptp-20 pbp-20 f-Ubuntu-R fsp-14 w-60 position-relative bgc-leono rounded-p-10 min-hp-50 d-flex center-center align-self-end text-center">
                      Difusión
                      <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-0 border-color-dark rounded-circle"></div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-6">
                  <div className="d-flex flex-column pbp-30">
                    <div className="psp-20 pep-20 ptp-20 pbp-20 f-Ubuntu-R fsp-14 w-90 position-relative bgc-draco rounded-p-10 min-hp-100 d-flex center-center text-start">
                      <span >Presentar a nuestra comunidad la feria <i>Héroes del medioambiente</ i>.</span>
                      <div className="position-absolute top-50 start-100 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-0 border-color-dark rounded-circle"></div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-6">
                  <div className="d-flex flex-column justify-content-center ptp-30 pbp-30">
                    <div className="psp-20 pep-20 ptp-20 pbp-20 f-Ubuntu-R fsp-14 w-60 position-relative bgc-gohan rounded-p-10 min-hp-50 d-flex center-center align-self-end text-center">
                      Investigación
                      <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-0 border-color-dark rounded-circle"></div>
                    </div>
                  </div>
                </div>


                <div className="col-12 pbp-100">
                  <img src="images/page_015/img_004.png" className="hp-200 align-center mtp-40" alt="" />
                </div>

                <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-60" alt="" /></div>
              </div>

            </div>

          </div>


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
          {/* END PIE DE PAGINA */}

        </div>
      </div>
    </div>

  );
}


export default Page015;
