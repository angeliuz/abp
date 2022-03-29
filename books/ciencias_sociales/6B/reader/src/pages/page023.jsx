import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import ModalVideo from "../components/ModalVideo";

import "./page_023.css";

function Page023(props) {
  const pagina = "023";
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
              <div className="caja-seccion wp-160 hp-70 text-center fsp-24  f-IntroRustG-Base color-dark">SESIÓN 4</div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">¿Qué es una sociedad justa?</div>
            </div>
            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-90">
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Mis objetivos <br />en  esta sesión son:
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_023/flecha.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
              Analizar situaciones<br />de desigualdad.
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_023/flecha1.svg" className="wp-40 arrow-global rotate-90" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
              Caracterizar una<br /> sociedad justa.
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_023/flecha.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-3 align-self-center f-colby-compres-bold fsp-15 lh-sm text-center text-white">
              Comprometerme con el logro<br /> de una sociedad más justa.
              </div>
              {/* <div className="p-0 align-self-center">
                <img src="images/page_021/flecha1.svg" className="wp-40 arrow-global rotate-90" alt="" />
              </div> */}
              {/* <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Construir un<br /> organizador gráfico
              </div> */}
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-30 container-titulo-global mbp-10">
            {/* <div
              className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 " + color}
            >
              Recordamos nuestro desafío
            </div> */}
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_001.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                1
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
              Observo las imágenes y completo.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} colorUnidad={background} pagina={"82"} image={"images/page_" + pagina + "/img_003.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
            </div>
          </div>

          <div className="d-flex msp-60 mep-60 mbp-100 mtp-60">

            <div className="row m-0 psp-10 pep-10 ptp-0 pbp-10 rounded-p-20 w-100">

              <div className="col-sm-12 col-md-6 position-relative">
              <div className="position-absolute top-50 start-0 translate-middle zindex-1 msp--20"><img src="images/page_023/img_004.png" className="" alt="" /></div>
                <div className="d-flex mbp-30 mtp-10 w-100">
                  <div className="position-relative p-2 min-hp-100 w-100 border-style-solid border-4 rounded-p-20 border-color-grieg bgc-kai">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="psp-10  text-start flex-grow-1 contenedor-linea lhp-35 min-hp-320" />
                    <div className="position-absolute top-0 start-50 translate-middle wp-100 mtp--10 bgc-naraku psp-5 pep-5 ptp-5 pbp-5 rounded-ts-be-10  ">
                      <div className="f-Ubuntu-L color-black fsp-16">¿Qué veo?</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 position-relative">
              <div className="position-absolute top-100 start-100 translate-middle zindex-1 mtp--150 msp-10 "><img src="images/page_023/img_005.png" className="" alt="" /></div>
                <div className="d-flex mbp-20 mtp-10 w-100">
                  <div className="p-2 min-hp-100 w-100 border-style-solid border-4 rounded-p-20 border-color-grieg bgc-lizt">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="pep-20 psp-5 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-320" />
                    <div className="position-absolute top-0 start-50 translate-middle wp-120 bgc-rain psp-5 pep-5 ptp-5 pbp-5 rounded-ts-be-10  mtp-5">
                      <div className="f-Ubuntu-L color-black fsp-16">¿Qué pienso?</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-12 position-relative ">
              <div className="position-absolute top-50 start-0 translate-middle zindex-1 msp--10 "><img src="images/page_023/img_006.png" className="" alt="" /></div>
                <div className="d-flex mbp-20 mtp-10 w-100 mtp-20">
                  <div className="p-2 min-hp-100 w-100 border-style-solid border-4 rounded-p-20 border-color-grieg bgc-bobafett">
                    {/* <div className="f-Ubuntu-L fsp-16 msp-10 mep-10 text-center">Registro con mi grupo una conclusión general a partir de todas las entrevistas.</div> */}
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="psp-30 pep-5 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-280" />
                    <div className="position-absolute top-0 start-50 translate-middle wp-160 bgc-calypso7 psp-5 pep-5 ptp-5 pbp-5 rounded-ts-be-10 mtp-15">
                      <div className="f-Ubuntu-L color-black fsp-16">¿Qué me pregunto?</div>
                    </div>
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
            className="row position-absolute caja-flotante2 p-0 m-0 align-items-end marcador-etapa"
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

export default Page023;
