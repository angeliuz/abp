import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";

import "./page_015.css";

function Page015(props) {

  const pagina = "015";
  var indexInput = 0;
  const etapa = "2"
  const background = "bgc-bulma";
  const color = "color-bulma";
  const borderColor = "border-color-bulma"
  const borderColorTabla = "border-color-buzz"
  const bgc_cajas = "bgc-piccolo";

  return (

    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>

          {/* BEGIN CABECERA VERSIÓN 1 */}
          <div className={"cabecera-v1 hp-80 zindex-2 " + background}></div>
          {/* END CABECERA VERSIÓN 1 */}


          <div className="d-flex zindex-1 mtp--20 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">
                <div className="position-absolute top-0 start-0 msp-30 mtp-0 visible-768 zindex-1">
                  <div className="d-flex psp-5 pep-5 bgc-white rounded-seb-20">
                    <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                      5
                    </div>
                    <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                      Observo la escena y me fijo en los detalles.
                    </div>
                  </div>
                </div>
                <img src={"images/page_" + pagina + "/IMG_001.jpg"} className="w-100" alt="" />
              </div>
            </div>
          </div>

          <div className="d-flex global-margin mtp-20 mbp-100 psp-0 pep-0 ptp-0 pbp-0">

            <div className="d-flex w-100 bgc-reptile rounded-p-10">

              <div className="row p-0 m-0 w-100">
                <div className="col-12 p-0 m-0 position-relative">
                  <div className="color-dhalsim f-Ubuntu-B fsp-15 mtp-10">De los alimentos disponibles en la fiesta, creo que...</div>
                </div>
                <div className="col-sm-12 col-md-6 psp-10 pep-10 m-0 position-relative">

                  <div className="bgc-white rounded-p-10 border-style-solid border-color-birdie border-2 p-2 msp-0 mep-0 mtp-0 mbp-10 f-Ubuntu-L fsp-15 ">
                    <div className="d-flex flex-column position-relative w-100 text-start ">
                      los más saludables son
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120" />
                    </div>
                  </div>

                </div>

                <div className="col-sm-12 col-md-6 psp-10 pep-10 m-0 position-relative">
                  <div className="position-absolute posicion-centro-centro translate-middle zindex-1"><img src={"images/generales/espiral3.svg"} className="hp-160 rotacion-centro-centro" alt="" /></div>

                  <div className="bgc-white rounded-p-10 border-style-solid border-color-birdie border-2 p-2 msp-0 mep-0 mtp-0 mbp-20 f-Ubuntu-L fsp-15 ">
                    <div className="d-flex flex-column position-relative w-100 text-start ">
                      los menos saludables son
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120" />
                    </div>
                  </div>

                </div>

                <div className="col-12  psp-10 pep-10 m-0 position-relative">

                  <div className="bgc-white rounded-p-10 border-style-solid border-color-birdie border-2 p-2 msp-0 mep-0 mtp-0 mbp-10 f-Ubuntu-L fsp-15 ">
                    <div className="d-flex flex-column position-relative w-100 text-start ">
                      Digo esto porque
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120" />
                    </div>
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
          <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>

            <div className={etapa == 1 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
              <img src="images/rotulo_motivacion.svg" className={etapa == 1 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className={etapa == 2 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
              <img src="images/rotulo_planificacion.svg" className={etapa == 2 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className={etapa == 3 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
              <img src="images/rotulo_investigacion.svg" className={etapa == 3 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className={etapa == 4 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
              <img src="images/rotulo_experimentacion.svg" className={etapa == 4 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className={etapa == 5 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
              <img src="images/rotulo_creacion.svg" className={etapa == 5 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className={etapa == 6 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
              <img src="images/rotulo_difusion.svg" className={etapa == 6 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
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
