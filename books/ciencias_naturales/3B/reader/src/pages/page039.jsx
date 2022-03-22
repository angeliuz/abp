import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_039.css";

function Page039(props) {

  const pagina = "039";
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
              <div className={"caja-seccion wp-160 hp-70 text-center fsp-24 f-IntroRustG-Base " + color}>SESIÓN 10</div>
              <div className="d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">¡En acción!</div>
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-30 container-titulo-global mbp-0">
            <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
              ¿Cuánto sabemos de reciclaje?
            </div>
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                1
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Leo la revista y contesto.
              </div>
              {/* <img src={"images/page_"+pagina+"/img_001.svg"} className="wp-100" alt=""/> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} pagina={"71"} image={"images/page_" + pagina + "/revista.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
            </div>
          </div>


          <div className="d-flex global-margin mtp-0 mbp-0 psp-0 pep-0 ptp-20 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">
                <div className="border-style-solid border-5 border-color-pantro rounded-p-10">
                  <div className="d-flex flex-column bgc-white rounded-p-10">
                    <div className="bgc-white w-100 f-Ubuntu-L text-start fsp-15 rounded-set-10 psp-10 pep-10 ptp-10 pbp-5">
                      <div className="d-flex align-items-start w-100 p-0">
                        <div className="wp-15"><img src={"images/generales/flecha_e4.svg"} className="wp-15" alt="" /></div>
                        <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-L fsp-15 psp-5">
                          ¿Qué tipo de información entrega la encuesta?
                        </div>
                      </div>
                    </div>
                    <div className="psp-40 pep-10 ptp-0 pbp-0">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-120" />
                    </div>
                    <div className="bgc-white w-100 f-Ubuntu-L text-start fsp-15 rounded-set-10 psp-10 pep-10 ptp-10 pbp-5">
                      <div className="d-flex align-items-start w-100 p-0">
                        <div className="wp-15"><img src={"images/generales/flecha_e4.svg"} className="wp-15" alt="" /></div>
                        <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-L fsp-15 psp-5">
                          ¿Cuáles son las características de los encuestados?
                        </div>
                      </div>
                    </div>
                    <div className="psp-40 pep-10 ptp-0 pbp-0">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-120" />
                    </div>
                  </div>
                </div>
                <div className="position-absolute top-0 start-100 translate-middle msp-0 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/ojo.png"} className="wp-60" alt="" /></div>
              </div>
            </div>
          </div>


          <div className="ptp-50 container-titulo-global mbp-0">
            <div className={"f-Ubuntu-B fsp-20 psp-50 text-start lhp-20 " + color}>
              Preparamos nuestra encuesta
            </div>
            <div className="d-flex psp-0">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/g.svg"} alt="" />
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                2
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                A partir del ejemplo anterior, completamos con la información de nuestra encuesta.              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>



          <div className="d-flex global-margin mtp-0 mbp-100 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100 position-relative">
              <div className="col-sm-12 col-md-6 psp-20 pep-20 msp-0 mep-0 mtp-0 mbp-30 position-relative">
                <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/lapiz.png"} className="hp-70 rotate--30" alt="" /></div>
                <div className="border-style-solid border-2 border-color-bulma rounded-p-10">
                  <div className="d-flex flex-column bgc-white rounded-p-10">
                    <div className="bgc-bulma w-100 f-Ubuntu-B text-center color-white fsp-15 rounded-set-10 psp-10 pep-10 ptp-5 pbp-5">
                      Nuestra encuesta será para...
                    </div>
                    <div className="psp-10 pep-10">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-300" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 psp-20 pep-20 msp-0 mep-0 mtp-0 mbp-30 position-relative">
                <div className="position-absolute posicion-centro-centro translate-middle zindex-1"><img src={"images/page_" + pagina + "/espiral.svg"} className="wp-50 mtp-30 rotacion-centro-centro" alt="" /></div>
                <div className="border-style-solid border-2 border-color-bulma rounded-p-10">
                  <div className="d-flex flex-column bgc-white rounded-p-10">
                    <div className="bgc-bulma w-100 f-Ubuntu-B text-center color-white fsp-15 rounded-set-10 psp-10 pep-10 ptp-5 pbp-5">
                      Nuestros encuestados serán...
                    </div>
                    <div className="psp-10 pep-10">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-300" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="position-absolute top-0 start-100 translate-middle msp-0 mtp-20 zindex-1"><img src={"images/page_" + pagina + "/globo.png"} className="wp-50" alt="" /></div>

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

export default Page039;
