import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";


import "./page_013.css";

function Page013(props) {

  const pagina = "013";
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
          <div className={"cabecera-v2 " + background + " d-flex flex-column"}>
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className="caja-seccion wp-160 hp-70 text-center fsp-24 f-IntroRustG-Base color-dark">SESIÓN 2</div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">¿Qué sé y qué necesito saber?</div>
            </div>
            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-90">
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Mis objetivos en <br /> esta sesión son:
              </div>
              <div className="p-0 align-self-center">
                <img src="images/generales/flecha_sesion_e2_1.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Compartir lo que sé sobre<br />los derechos fundamentales<br />de las personas.
              </div>
              <div className="p-0 align-self-center">
                <img src="images/generales/flecha_sesion_e2_2.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Compartir lo que sé<br />sobre las obras de<br />arte visual.
              </div>
              <div className="p-0 align-self-center">
                <img src="images/generales/flecha_sesion_e2_1.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-3 align-self-center f-colby-compres-bold fsp-15 lh-sm text-center text-white">
                Reflexionar sobre lo que sé<br />y lo que necesitamos saber<br />para el proyecto.
              </div>
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-50 container-titulo-global mbp-0">
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_004.svg"} alt="" /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                1
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Con mi grupo, hacemos una lluvia de ideas sobre lo que sabemos de estas preguntas.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="psp-60 pep-60 ptp-20 pbp-60">


            <div className="col-10 pbp-20 position-relative zindex-1">
              <div className="position-relative bgc-draco sombra-1 px-2 ptp-30 pbp-20">
                <div className="f-Ubuntu-R">¿Qué son los derechos fundamentales de las personas?</div>
                <div className="d-flex w-100 psp-10 pep-10 ptp-0 pbp-0">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 w-100 min-hp-220" />
                </div>
                <div className="f-Ubuntu-L text-start psp-30 ptp-10">¿Qué ejemplos conocemos?</div>
                <div className="d-flex w-100 psp-10 pep-10 ptp-0 pbp-0">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 w-100 min-hp-80" />
                </div>
                <div className="position-absolute top-0 start-50 translate-middle w-100 mtp-10"><div className="flequillo-p13 w-100 hp-30"></div></div>
              </div>
              <div className="position-absolute top-0 start-100 translate-middle msp-0 mtp-20 zindex-2"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-40" alt="" /></div>
            </div>

            <div className="row">
              <div className="col-2">
              </div>
              <div className="col-10 pbp-20 position-relative ">
                <div className="position-relative bgc-bobafett sombra-1 px-2 ptp-70 pbp-20 mtp--70">
                  <div className="f-Ubuntu-R"> ¿Qué es una obra de arte?</div>
                  <div className="d-flex w-100 psp-10 pep-10 ptp-0 pbp-0">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 w-100 min-hp-220" />
                  </div>
                  <div className="f-Ubuntu-L text-start psp-30 ptp-10">¿Qué ejemplos conocemos?</div>
                  <div className="d-flex w-100 psp-10 pep-10 ptp-0 pbp-0">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 w-100 min-hp-80" />
                  </div>
                </div>
                <div className="position-absolute top-0 start-100 translate-middle msp--50 mtp--60 zindex-1"><img src={"images/page_" + pagina + "/img_003.svg"} className="wp-40" alt="" /></div>
                <div className="position-absolute top-100 start-0 translate-middle msp--20 mtp--80 zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-100" alt="" /></div>
              </div>
            </div>


          </div>

          {/* END CONTENIDO */}

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
    </div >

  );
}

export default Page013;
