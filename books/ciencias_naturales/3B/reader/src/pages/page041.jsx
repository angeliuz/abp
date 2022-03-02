import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_041.css";

function Page041(props) {

  const pagina = "041";
  var indexInput = 0;

  const etapa = "4"
  const background = "bgc-pidgey";
  const color = "color-pidgey";
  const borderColor = "border-color-pidgey"
  const borderColorTabla = "border-color-pantro"
  const bgc_cajas = "bgc-pantro";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>

          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className={"cabecera-v2 d-flex flex-column " + background}>
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className={"caja-seccion wp-160 hp-70 text-center fsp-24 f-IntroRustG-Base " + color}>SESIÓN 11</div>
              <div className="d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">¡Tenemos los resultados y  los comunicamos! </div>
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-30 container-titulo-global mbp-0">
            <div className={"f-Ubuntu-B fsp-20 psp-40 text-start lhp-20 " + color}>
              Organizamos la información
            </div>
            <div className="d-flex psp-0">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/g.svg"} alt="" />
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                1
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Organizamos las respuestas de la encuesta en una tabla.
              </div>
              {/* <img src={"images/page_"+pagina+"/img_001.svg"} className="wp-100" alt=""/> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>


          <div className="d-flex flex-column global-margin mtp-0 mbp-0 psp-10 pep-10 ptp-10 pbp-10 bgc-jaga rounded-p-10 f-Ubuntu-R fsp-15">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">

                <div className="d-flex border-style-solid border-2 border-color-goku rounded-p-10 psp-10 pep-10 ptp-5 pbp-15 bgc-white">

                  <div className="d-flex w-100 psp-10 pep-10 ptp-10 pbp-0 align-items-center">
                    De un total de <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />encuestados, estos son los resultados:
                  </div>
                </div>

              </div>

            </div>

            <div className="d-flex mtp-20">

              <div className="row p-0 m-0">
                <div className="col-8"></div>
                <div className="col-4 border-style-solid  border-color-pidgey border-1 border-bottom-hidden bgc-pidgey color-white f-Ubuntu-B p-0 m-0">
                  Total de respuestas
                </div>


                <div className="col-8"></div>
                <div className="col-2 border-style-solid  border-color-pidgey border-1 border-right-hidden border-bottom-hidden bgc-pantro color-dark f-Ubuntu-R p-0 m-0">Sí</div>
                <div className="col-2 border-style-solid  border-color-pidgey border-1 border-bottom-hidden bgc-pantro color-dark f-Ubuntu-R p-0 m-0">No</div>

                <div className="col-8 border-style-solid  border-color-pidgey border-1 border-bottom-hidden border-right-hidden  bgc-white color-pidgey f-Ubuntu-B p-0 m-0">
                  <div className="d-flex flex-column text-start w-100 psp-10 pep-10 ptp-5 pbp-5">
                    Pregunta 1
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120" />
                  </div>
                </div>

                <div className="col-2 d-flex center-center  border-style-solid  border-color-pidgey border-1 border-right-hidden border-bottom-hidden bgc-white color-pidgey f-Ubuntu-B p-0 m-0">
                  <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-pidgey bgc-white rounded-1">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center wp-30 flex-grow-1 lhp-30 min-hp-35" />
                  </div>
                </div>

                <div className="col-2 d-flex center-center  border-style-solid  border-color-pidgey border-1 border-bottom-hidden bgc-white color-pidgey f-Ubuntu-B p-0 m-0">
                  <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-pidgey bgc-white rounded-1">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center wp-30 flex-grow-1 lhp-30 min-hp-35" />
                  </div>
                </div>

                <div className="col-8 border-style-solid  border-color-pidgey border-1 border-bottom-hidden border-right-hidden  bgc-white color-pidgey f-Ubuntu-B p-0 m-0">
                  <div className="d-flex flex-column text-start w-100 psp-10 pep-10 ptp-5 pbp-5">
                    Pregunta 2
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120" />
                  </div>
                </div>
                <div className="col-2 d-flex center-center  border-style-solid  border-color-pidgey border-1 border-right-hidden border-bottom-hidden bgc-white color-pidgey f-Ubuntu-B p-0 m-0">
                  <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-pidgey bgc-white rounded-1">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center wp-30 flex-grow-1 lhp-30 min-hp-35" />
                  </div>
                </div>
                <div className="col-2 d-flex center-center  border-style-solid  border-color-pidgey border-1 border-bottom-hidden bgc-white color-pidgey f-Ubuntu-B p-0 m-0">
                  <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-pidgey bgc-white rounded-1">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center wp-30 flex-grow-1 lhp-30 min-hp-35" />
                  </div>
                </div>
                <div className="col-8 border-style-solid  border-color-pidgey border-1 border-right-hidden  bgc-white color-pidgey f-Ubuntu-B p-0 m-0">
                  <div className="d-flex flex-column text-start w-100 psp-10 pep-10 ptp-5 pbp-5">
                    Pregunta 3
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120" />
                  </div>
                </div>
                <div className="col-2 d-flex center-center  border-style-solid  border-color-pidgey border-1 border-right-hidden  bgc-white color-pidgey f-Ubuntu-B p-0 m-0">
                  <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-pidgey bgc-white rounded-1">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center wp-30 flex-grow-1 lhp-30 min-hp-35" />
                  </div>
                </div>
                <div className="col-2 d-flex center-center  border-style-solid  border-color-pidgey border-1 bgc-white color-pidgey f-Ubuntu-B p-0 m-0">
                  <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-pidgey bgc-white rounded-1">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center wp-30 flex-grow-1 lhp-30 min-hp-35" />
                  </div>
                </div>

              </div>

            </div>

          </div>

          <div className="ptp-50 container-titulo-global mbp-100">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
              xxx
            </div> */}
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                2
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Organizamos la información de la tabla anterior en gráficos de barra. Dibujamos en hojas cuadriculadas un gráfico para cada pregunta considerando los aspectos anteriores.
              </div>
              {/* <img src={"images/page_"+pagina+"/img_00.svg"} className="wp-100" alt=""/> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
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
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_planificacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-7 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_experimentacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
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

export default Page041;
