import React from "react";
import ModalVideo from "../components/ModalVideo";
import ModalBook from "../components/ModalBook";
import InputBox from "../components/InputBox";

import "./page_007.css";

function Page007(props) {

  const pagina = "007";
  var indexInput = 0;
  const etapa = "1"
  const background = "bgc-goten";
  const color = "color-goten";
  const bgc_cajas = "bgc-bobafett";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className={"cabecera-v2 d-flex flex-column " + background}>
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className={"caja wp-150 text-center fsp-24 f-IntroRustG-Base " + color}>SESIÓN 1</div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">¡Tenemos un desafío!</div>
            </div>

          </div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-10 container-titulo-global mbp-20">
            <div className={"f-Ubuntu-B fsp-20 psp-40 text-start lhp-20 " + color}>¡Tantos desechos!</div>
            <div className="d-flex">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_007/ig.svg" alt="" />
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>1</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Leo la noticia de la revista y respondo. Comparto con mi equipo algunas ideas.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_002.jpg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} pagina={"65"} image="images/page_007/revista65.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
            </div>
          </div>

          <div className="d-flex msp-110 mep-60 mbp-20 mtp-30">
            <div className="row w-100">
              <div className="col-12 text-start pbp-20">
                <span className={"f-Ubuntu-B " + color}>a. </span><span className="f-Ubuntu-R">¿Cuál es el problema que se presenta en la noticia?</span>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-75" />
              </div>
              <div className="col-12 text-start">
                <span className={"f-Ubuntu-B " + color}>b. </span><span className="f-Ubuntu-R">¿Por qué se ha producido este problema?</span>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-75" />
              </div>
            </div>
          </div>

          <div className="col-12 p-0 m-0 position-relative">
<div className="container-titulo-global mtp-20 mbp-0">
    <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
    ¡Atención, nos necesitan!
    </div>
    <div className="d-flex psp-20">
       {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_005.svg"} alt=""  />  */}
        <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
            2
        </div>
        <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
        Veo, leo y completo.
        </div>
        <ModalVideo
        id={"p" + pagina + "_video" + (indexInput += 1)}
        linkVideo="641906249"
        tituloVideo="Héroes del medioambiente I"
        tipoVideo="vimeo"
        image={"images/generales/play.svg"}
        colorUnidad={background}
        clasesImagen="cambio hp-40 mtp-10"
        className="p-0 px-1"
        />
    </div>
</div>
</div>

          <div className="d-flex msp-110 mep-60 mbp-20 mtp-30">
            <div className="row w-100">
              <div className="col-12 text-start pbp-20">
                <img src="images/page_007/imagen.jpg" className="w-100 align-center mt-3 me-2 mb-2" alt="" />
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
            <div className="col-7 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_motivacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
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

export default Page007;
