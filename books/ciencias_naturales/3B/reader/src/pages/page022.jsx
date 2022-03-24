import React from "react";
import ModalBook from "../components/ModalBook";
import InputBox from "../components/InputBox"

import "./page_022.css";

function Page022(props) {

  const pagina = "022";
  var indexInput = 0;
  const etapa = "3"
  const background = "bgc-android18";
  const color = "color-android18";
  const borderColor = "border-color-android18"
  const bgc_cajas = "bgc-goku";

  return (

    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          <div className={"cabecera-v1 hp-80 " + background}>

          </div>

          <div className="ptp-30 container-titulo-global mbp-40">
            <div className={"f-Ubuntu-B fsp-20 psp-40 text-start lhp-20 " + color}>
              Tiempo de degradación de los desechos
            </div>
            <div className="d-flex">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_002.svg"} alt="" />
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>2</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Observamos la infografía en la revista. Luego, planteamos una predicción para la siguiente pregunta.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} colorUnidad={background} pagina={"67"} image={"images/page_" + pagina + "/revista.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
            </div>
          </div>

          <div className="row container-row m-0 psp-60 pep-60">

            <div className="col-md-12 col-lg-12 position-relative">

              <div className="d-flex center-center bgc-fondo-p22-1 pbp-30 ptp-20">
                <div className="mtp--70 msp--80 psp-0 pep-20 ptp-0 pbp-10 f-Ubuntu-R fsp-14 wp-200 min-hp-300  position-relative  rounded-p-10 d-flex center-center text-start">
                  Tenemos como desechos una cáscara de plátano, una bolsa de té y una tapa plástica. ¿Cuál de ellos se degradará en menos tiempo?

                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-12 position-relative ptp-40">
              <div className="position-absolute top-0 start-100 translate-middle msp--100 mtp--80 visible-768"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-150 " alt="" /></div>

              <div className="d-flex flex-column pbp-30 w-100 bgc-woody p-2 rounded-p-20 position-relative">
                <div className="position-absolute top-0 start-50 translate-middle msp-0 mtp-5"><img src={"images/page_" + pagina + "/espiral.png"} className="wp-150 " alt="" /></div>
                <div className="fsp-15 f-Ubuntu-R lh-sm text-start bgc-white psp-10 pep-10 ptp-20 rounded-p-20">
                  <span className="fsp-15 f-Ubuntu-R">
                    Predicción
                  </span>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-300" />
                </div>
              </div>
            </div>

          </div>

          {/* PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
              ABP &copy; SM
            </div>
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>
          <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end marcador-etapa" style={{ bottom: 0 }}>

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
            <div className="col-7 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_investigacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
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


        </div>
      </div>
    </div>


  );
}

export default Page022;
