import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import ModalVideo from "../components/ModalVideo";

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
          <div className="cabecera-v2 bgc-android18 d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className="caja-seccion wp-160 hp-70 text-center fsp-24 f-IntroRustG-Base color-dark">SESIÓN 5</div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Camino hacia la sostenibilidad</div>
            </div>
            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-90">
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Mis objetivos <br />en  esta sesión son:
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_025/flecha.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Comprender el<br />concepto de<br /> sostenibilidad
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_025/flecha1.svg" className="wp-40 arrow-global rotate-90" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Conocer los objetivos<br /> de desarrollo<br />sostenible
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_025/flecha.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-3 align-self-center f-colby-compres-bold fsp-15 lh-sm text-center text-white">
                Comprender cómo es<br /> una casa sostenible
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_025/flecha1.svg" className="wp-40 arrow-global rotate-90" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Imaginar cómo<br /> hacer sostenible el<br />colegio
              </div>
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}

          {/* BEGIN CABECERA VERSIÓN 1 */}
          {/* <div className="cabecera-v1 hp-80 bgc-android18">
          </div> */}
          {/* END CABECERA VERSIÓN 1 */}



          <div className="ptp-30 container-titulo-global">
            {/* <div
              className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 " + color}
            >
              Los derechos y la buena convivencia
            </div> */}
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_001.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                1
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Veo el video sobre la sostenibilidad y realizo
                las actividades.
              </div>
              {/* <ModalVideo
                id={"p" + pagina + "_video" + (indexInput += 1)}
                image="images/generales/play.svg"
                clasesImagen="cambio hp-40 mtp-10"
                className="p-0 px-1"
              /> */}
              <ModalVideo
                id={"p" + pagina + "_video" + (indexInput += 1)}
                linkVideo="5yCsjASSd1M"
                tituloVideo="¿Qué es la sostenibilidad?"
                tipoVideo="youtube"
                image={"images/generales/play.svg"}
                colorUnidad={background}
                clasesImagen="cambio hp-40 mtp-10"
                className="p-0 px-1"
              />
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_025/img_001.svg" className="p-0 px-1" /> */}
              {/* <ModalBook
                id={"p" + pagina + "_book" + (indexInput += 1)}
                image={"images/page_" + pagina + "/img_001.svg"}
                clasesImagen="hp-40 text-center mtp-10 "
                className="p-0 px-0"
              /> */}
            </div>
          </div>

          <div className="d-flex global-margin h-100  mtp-0 mbp-0 psp-60 pep-0 ptp-0 pbp-0">
            <div className="row p-0 msp-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">

                <div className="d-flex w-100 p-2">
                  <div className="d-flex d-inline justify-content-start align-items-start text-start f-Ubuntu-R color-android18 fsp-17 fw-700 ptp-10">a.</div>
                  <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Leo el reportaje de la revista y resumo la información señalando…</div>
                  <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} colorUnidad={background} pagina={"86"} image={"images/page_" + pagina + "/img_004.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
                </div>

              </div>
            </div>
          </div>

          <div className="d-flex msp-120 mep-120 mtp-0">

            <div className="row m-0 psp-10 pep-10  pbp-0 bgc-lizt border-style-solid border-1 border-color-dark w-100  ">

              <div className="col-md-12 col-lg-12 position-relative ">
                <div className="position-absolute top-100 start-0 translate-middle msp-20 zindex-1 visible-768"><img src="images/page_025/img_006.svg" className="wp-10" alt="" /></div>
                <div className="position-absolute top-100 start-100 translate-middle msp--20 zindex-1 visible-768"><img src="images/page_025/img_006.svg" className="wp-10" alt="" /></div>
                <div className="d-flex flex-column mbp-0 mtp-0 w-100">
                  <div className="f-Ubuntu-L fsp-16 msp-10 mep-10 text-center">una palabra que me haya llamado la atención</div>
                  <div className="p-2 min-hp-80 w-100 ">
                    <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 text-start">


                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                  </div>

                </div>

              </div>

            </div>
          </div>

          <div className="d-flex msp-60 mep-60 mbp-0 mtp-10">

            <div className="row m-0 psp-10 pep-10 ptp-0 pbp-10 rounded-p-20 w-100">

              <div className="col-sm-12 col-md-6 position-relative">

                <div className="d-flex mbp-20 mtp-10 w-100">
                  <div className="p-2 min-hp-210 w-100 border-style-solid border-4 rounded-p-10 border-color-rain bgc-white">
                    <div className="f-Ubuntu-L fsp-16 msp-10 ptp-10 mep-10 text-start">una idea que me pareció interesante</div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-175" />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 position-relative">

                <div className="d-flex mbp-20 mtp-10 w-100">
                  <div className="p-2 min-hp-230 w-100 border-style-solid border-4 rounded-p-10 border-color-guile bgc-white">
                    <div className="f-Ubuntu-L fsp-16 msp-10 ptp-10 mep-10 text-center">una frase que me haya ayudado a entender
                      mejor la sostenibilidad</div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" />
                  </div>
                </div>
              </div>


            </div>
          </div>


          <div className="d-flex global-margin h-100  mtp-0 mbp-0 psp-60 pep-0 ptp-0 pbp-0">
            <div className="row p-0 msp-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">

                <div className="d-flex w-100 p-2">
                  <div className="d-flex d-inline justify-content-start align-items-start text-start f-Ubuntu-R color-android18 fsp-17 fw-700 ptp-10">b.</div>
                  <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Veo el video, leo la revista y respondo.</div>
                  <ModalVideo
                    id={"p" + pagina + "_video" + (indexInput += 1)}
                    linkVideo="345IxGgjF9s"
                    tituloVideo="Los 17 Objetivos de Desarrollo Sostenible"
                    tipoVideo="youtube"
                    image={"images/generales/play.svg"}
                    colorUnidad={background}
                    clasesImagen="cambio hp-40 mtp-10"
                    className="p-0 px-1"
                  />
                  <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} colorUnidad={background} pagina={"87"} image={"images/page_" + pagina + "/img_008.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
                </div>

              </div>
            </div>
          </div>

          <div className="d-flex msp-60 mep-60 mbp-100 mtp-10">

            <div className="row m-0 psp-10 pep-10 ptp-0 pbp-10 rounded-p-20 w-100">

              <div className="col-sm-12 col-md-6 position-relative">

                <div className="d-flex mbp-20 mtp-10 w-100">
                  <div className="p-2 min-hp-210 w-100 border-style-solid border-2  border-color-dark bgc-lizt">
                    <div className="f-Ubuntu-L fsp-16 msp-10 mep-10 text-start">¿Qué son los objetivos de desarrollo sostenible?</div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-280" />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 position-relative">
                <div className="position-absolute top-0 start-100 translate-middle msp--40 mtp-20 zindex-1 "><img src="images/page_025/img_009.png" className="" alt="" /></div>
                <div className="d-flex mbp-20 mtp-10 w-100">
                  <div className="p-2 min-hp-210 w-100 border-style-solid border-2  border-color-dark bgc-white">
                    <div className="f-Ubuntu-L fsp-16 msp-10  mep-10 text-center">¿Qué objetivos promueven la
                      sostenibilidad medioambiental?</div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-280" />
                  </div>
                </div>
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
          {/* END PIE DE PAGINA */}

        </div>
      </div>
    </div>
  );
}

export default Page025;
