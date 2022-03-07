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
              <div className="caja wp-160 text-center fsp-24 f-IntroRustG-Base">SESIÓN 5</div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Sociedad justa y los derechos</div>
            </div>
            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-90">
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Mis objetivos <br />en  esta sesión son:
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_025/flecha.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Vincular el respeto de los<br />derechos con el logro de una<br /> sociedad más justa.
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_025/flecha1.svg" className="wp-40 arrow-global rotate-90" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Proponer derechos en los<br /> que debería centrarse la<br />obra de arte.
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_025/flecha.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-3 align-self-center f-colby-compres-bold fsp-15 lh-sm text-center text-white">
                Acordar un derecho en<br /> que se centrará la obra.
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
              <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_003.svg"} alt="" />
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                1
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Leo los artículos presentados. Luego, respondo con mi grupo.
              </div>
              {/* <ModalVideo
                id={"p" + pagina + "_video" + (indexInput += 1)}
                image="images/generales/play.svg"
                clasesImagen="cambio hp-40 mtp-10"
                className="p-0 px-1"
              /> */}
              {/* <ModalVideo id={"p" + pagina + "_video" + (indexInput += 1)} image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_025/img_001.svg" className="p-0 px-1" /> */}
              <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} pagina={"83"} image={"images/page_" + pagina + "/img_004.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
            </div>
          </div>

          {/* <div className="d-flex global-margin h-100  mtp-0 mbp-0 psp-60 pep-0 ptp-0 pbp-0">
            <div className="row p-0 msp-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">

                <div className="d-flex w-100 p-2">
                  <div className="d-flex d-inline justify-content-start align-items-start text-start f-Ubuntu-R color-android18 fsp-17 fw-700 ptp-10">a.</div>
                  <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Leo el reportaje de la revista y resumo la información señalando…</div>
                  <ModalBook
                    id={"p" + pagina + "_book" + (indexInput += 1)}
                    image={"images/page_" + pagina + "/img_004.svg"}
                    clasesImagen="hp-40 text-center mtp-10 "
                    className="p-0 px-1"
                  />
                </div>

              </div>
            </div>
          </div> */}

          <div className="d-flex global-margin mtp-30 mbp-0 psp-0 pep-0 ptp-0 pbp-100">
            <div className="row p-0 m-0 w-100 bgc-kai rounded-p-10">
              <div className="col-12">
                <div className="row">
                  <div className="col-md-4 col-12 d-flex position-relative pbp-10 align-items-center justify-content-center ">

                    <div className="mtp-20">
                      {/* <div className="position-absolute top-0 start-50 translate-middle bgc-akuma mtp-5  w-50 f-Ubuntu-B text-center color-white fsp-15 rounded-set-10 psp-10 pep-10 ptp-5 pbp-5"> Tarea </div> */}
                      <div className="w-100  p-1 border-style-solid border-2 border-color-calypso6 rounded-p-10  lh-sm text-start p-2 position-relative bgc-white">


                        <div className="d-flex text-start f-Ubuntu-R fsp-15 p-3   ">¿A qué documentos
                          corresponden los
                          artículos? ¿Cuál es la
                          importancia de estos
                          documentos?
                        </div>


                      </div>
                    </div>



                  </div>
                  <div className="col-md-8 col-12 position-relative pbp-10">

                    <div className="mtp-20">
                      {/* <div className="position-absolute top-0 start-50 translate-middle bgc-haydn mtp-5  w-50 f-Ubuntu-B text-center color-white fsp-15 rounded-set-10 psp-10 pep-10 ptp-5 pbp-5"> Responsable </div> */}
                      <div className="w-100  p-1  border-style-solid border-1 border-color-white rounded-p-10  lh-sm text-start p-2 position-relative bgc-white">

                        <div className="position-absolute top-50 start-0 translate-middle zindex-1 visible-768"><img src={"images/page_025/espiral.svg"} className="wp-55 msp--25  mtp-0 " alt="" /></div>
                        

                        <div className="align-items-start justify-content-start    f-Ubuntu-R fsp-15   ">

                          <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="mtp-0 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-210" />

                        </div>


                      </div>
                    </div>

                  </div>

                  <div className="col-md-4 col-12 position-relative pbp-10 ">

                    <div className="mtp-20">
                      {/* <div className="position-absolute top-0 start-50 translate-middle bgc-akuma mtp-5  w-50 f-Ubuntu-B text-center color-white fsp-15 rounded-set-10 psp-10 pep-10 ptp-5 pbp-5"> Tarea </div> */}
                      <div className="w-100  p-1 border-style-solid border-2 border-color-calypso6 rounded-p-10  lh-sm text-start p-2 position-relative bgc-white">


                        <div className="d-flex text-start f-Ubuntu-R fsp-15 p-3   ">¿Por qué para alcanzar
                          una sociedad más
                          justa es importante
                          que estos derechos
                          sean respetados?
                          Ejemplificamos a partir de
                          las imágenes presentadas
                          en las páginas 82 y
                        </div>


                      </div>
                    </div>



                  </div>

                  <div className="col-md-8 col-12 position-relative pbp-10">
                  <div className="position-absolute top-100 start-100 translate-middle zindex-1 visible-768"><img src={"images/page_025/img_006.png"} className=" " alt="" /></div>
                    <div className="mtp-20">
                      {/* <div className="position-absolute top-0 start-50 translate-middle bgc-haydn mtp-5  w-50 f-Ubuntu-B text-center color-white fsp-15 rounded-set-10 psp-10 pep-10 ptp-5 pbp-5"> Responsable </div> */}
                      <div className="w-100  p-1  border-style-solid border-1 border-color-white rounded-p-10  lh-sm text-start p-2 position-relative bgc-white">

                        <div className="position-absolute  top-50 start-0 translate-middle zindex-1 visible-768"><img src={"images/page_025/espiral.svg"} className="wp-55 msp--25  mtp-0 " alt="" /></div>
                       

                        <div className="align-items-start justify-content-start    f-Ubuntu-R fsp-15   ">

                          <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="mtp-0 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-210" />

                        </div>


                      </div>
                    </div>

                  </div>

                  <div className="col-md-4 col-12 d-flex position-relative pbp-10 align-items-center justify-content-center">

                    <div className="mtp-20">
                      {/* <div className="position-absolute top-0 start-50 translate-middle bgc-akuma mtp-5  w-50 f-Ubuntu-B text-center color-white fsp-15 rounded-set-10 psp-10 pep-10 ptp-5 pbp-5"> Tarea </div> */}
                      <div className="w-100  p-1 border-style-solid border-2 border-color-calypso6 rounded-p-10  lh-sm text-start p-2 position-relative bgc-white">


                        <div className="d-flex text-start f-Ubuntu-R fsp-15 p-3   ">¿Cuál será el aporte
                          de nuestra obra
                          al logro de una
                          sociedad más justa?
                        </div>


                      </div>
                    </div>



                  </div>

                  <div className="col-md-8 col-12 position-relative pbp-10">

                    <div className="mtp-20">
                      {/* <div className="position-absolute top-0 start-50 translate-middle bgc-haydn mtp-5  w-50 f-Ubuntu-B text-center color-white fsp-15 rounded-set-10 psp-10 pep-10 ptp-5 pbp-5"> Responsable </div> */}
                      <div className="w-100  p-1  border-style-solid border-1 border-color-white rounded-p-10  lh-sm text-start p-2 position-relative bgc-white">

                        <div className="position-absolute top-50 start-0 translate-middle zindex-1 visible-768"><img src={"images/page_025/espiral.svg"} className="wp-55 msp--25  mtp-0 " alt="" /></div>
                        

                        <div className=" align-items-start justify-content-start    f-Ubuntu-R fsp-15   ">

                          <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="mtp-0 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-210" />

                        </div>


                      </div>
                    </div>

                  </div>
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
          {/* END PIE DE PAGINA */}
        </div>
      </div>
    </div>
  );
}

export default Page025;
