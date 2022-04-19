import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import "./page_077.css";

function Page077(props) {

  const pagina = "077";
  var indexInput = 0;
  const etapa = "6"
  const background = "bgc-pikachu";
  const bgc_cajas = "bgc-quaternary";
  const color = "color-pikachu";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className={"cabecera-v2 " + background + " d-flex flex-column"}>
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className="caja-seccion wp-160 hp-70 text-center fsp-24 f-IntroRustG-Base color-dark">SESIÓN 20</div>
              <div className="d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">¿Cómo nos fue?</div>
            </div>
            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-90">
              <div className="p-2 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Mis objetivos <br />en  esta sesión son:
              </div>
              <div className="p-0 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Evaluar el resultado del proyecto.
              </div>
              <div className="p-0 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_2.svg"} className="wp-40 arrow-global rotate-90" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Valorar lo que he aprendido.
              </div>
              <div className="p-0 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-3 position-relative align-self-center f-colby-compres-bold fsp-17 lh-sm text-center color-dark">
                <div className="position-absolute top-0 start-0 w-100 h-100">
                  <img src="images/cabecera/caja_blanca.png" width="100%" height="100%" alt="" />
                </div>
                <div className="position-relative">
                  Evaluar nuestro trabajo<br /> en equipo y celebrar.
                </div>
              </div>

            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}
          <div className="ptp-10 container-titulo-global mbp-0">
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_069/img_003.svg" alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>1</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Evalúo la publicación de la revista.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_002.jpg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
            </div>
          </div>


          <div className="d-flex msp-60 ptp-0 mep-60 mbp-0">
            <div className="row m-0 p-2 w-100 ">

              <div className="col-sm-12 col-md-6 position-relative align-items-stretch mbp-20">
                <div className="position-absolute top-100 start-0 translate-middle msp-3 mtp--80 zindex-1"><img src="images/page_077/img_003.png" className="wp-20 " alt="" /></div>
                <div className="h-100 d-flex flex-column mbp-20 mtp-10 p-2 w-100 border-style-solid border-2 rounded-p-10 border-color-dark bgc-white">
                  <span className="f-Ubuntu-R fsp-15 px-2 ptp-10 text-start min-hp-60">La publicación de la revista resultó</span>
                  <div className="h-100 psp-10 pep-10 pbp-10 ptp-0 w-100 d-flex flex-column">
                    {/* <div className="f-Ubuntu-L fsp-16  text-start w-100">Cosas que hemos hecho que nos han encantado:</div> */}
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="h-100 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-200" />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 position-relative align-items-stretch mbp-20">
                <div className="position-absolute top-0 start-100 translate-middle msp--20 mtp-20 zindex-1"><img src="images/page_077/img_002.png" className="wp-30 " alt="" /></div>
                <div className="h-100 d-flex flex-column mbp-20 mtp-10 p-2 w-100 border-style-solid border-2 rounded-p-10 border-color-dark bgc-white">
                  <span className="f-Ubuntu-R fsp-15 px-2 ptp-10 text-start min-hp-60">Los comentarios de quienes revisaron la revista fueron</span>
                  <div className="h-100 psp-10 pep-10 pbp-10 ptp-0 w-100 d-flex flex-column">
                    {/* <div className="f-Ubuntu-L fsp-16  text-start w-100">Cosas que hemos hecho que nos han encantado:</div> */}
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="h-100 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-200" />
                  </div>
                </div>
              </div>



            </div>
          </div>


          <div className="ptp-10 container-titulo-global mbp-0">
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_069/img_003.svg" alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>2</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Reflexiono y respondo las preguntas:
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_002.jpg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
            </div>
          </div>


          <div className="d-flex msp-60 ptp-0 mep-60 mbp-150">
            <div className="row m-0 p-2 w-100 ">

              <div className="col-sm-12 col-md-6 position-relative p-0 m-0 align-items-stretch">

                <div className="h-100 d-flex flex-column mbp-0 mtp-10 p-2 w-100 caja-outline-white rounded-p-10 bgc-kokomi">
                  <span className="f-Ubuntu-R fsp-15 px-2 ptp-10 text-start">¿Qué he aprendido?</span>
                  <div className="h-100 psp-10 pep-10 pbp-10 ptp-0 w-100 d-flex flex-column">
                    {/* <div className="f-Ubuntu-L fsp-16  text-start w-100">Cosas que hemos hecho que nos han encantado:</div> */}
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="h-100 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 position-relative p-0 m-0 align-items-stretch">

                <div className="h-100 d-flex flex-column mbp-0 mtp-10 p-2 w-100 caja-outline-white rounded-p-10 bgc-draco">
                  <span className="f-Ubuntu-R fsp-15 px-2 ptp-10 text-start"> ¿Cómo he aprendido?</span>
                  <div className="h-100 psp-10 pep-10 pbp-10 ptp-0 w-100 d-flex flex-column">
                    {/* <div className="f-Ubuntu-L fsp-16  text-start w-100">Cosas que hemos hecho que nos han encantado:</div> */}
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="h-100 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 position-relative p-0 m-0 align-items-stretch">

                <div className="h-100 d-flex flex-column mbp-20 mtp-0 p-2 w-100 caja-outline-white rounded-p-10 bgc-pantro">
                  <span className="f-Ubuntu-R fsp-15 px-2 ptp-10 text-start">¿Con quién he aprendido?</span>
                  <div className="h-100 psp-10 pep-10 pbp-10 ptp-0 w-100 d-flex flex-column">
                    {/* <div className="f-Ubuntu-L fsp-16  text-start w-100">Cosas que hemos hecho que nos han encantado:</div> */}
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="h-100 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 position-relative p-0 m-0 align-items-stretch">
                <div className="position-absolute top-0 start-100 translate-middle msp--20 mtp-20 zindex-1"><img src="images/page_077/img_004.png" className="wp-60 " alt="" /></div>
                <div className="h-100 d-flex flex-column mbp-20 mtp-0 p-2 w-100 caja-outline-white rounded-p-10 bgc-shogun">
                  <span className="f-Ubuntu-R fsp-15 px-2 ptp-10 text-start">¿Cómo me he sentido aprendiendo?</span>
                  <div className="h-100 psp-10 pep-10 pbp-10 ptp-0 w-100 d-flex flex-column">
                    {/* <div className="f-Ubuntu-L fsp-16  text-start w-100">Cosas que hemos hecho que nos han encantado:</div> */}
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="h-100 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" />
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
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
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
            <div className="col-7 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_difusion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
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

export default Page077;
