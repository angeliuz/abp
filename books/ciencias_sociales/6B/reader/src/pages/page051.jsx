import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import ModalBook from "../components/ModalBook";
import "./page_051.css";

function Page051(props) {

  const pagina = "051";
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
              <div className={"caja-seccion wp-160 hp-70 text-center fsp-24 f-IntroRustG-Base color-dark"}>SESIÓN 12</div>
              <div className="d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Ideas y sensaciones de nuestra obra</div>
            </div>
            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-95">
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Mis objetivos en esta sesión son:
              </div>
              <div className="p-0 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Definimos ideas clave que deseamos <br /> comunicar en la obra.
              </div>
              <div className="psp-5 pep-5 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_2.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Seleccionamos las sensaciones que <br /> queremos transmitir en la obra.
              </div>
              {/* <div className="p-0 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Elaborar un boceto <br /> de la propuesta
              </div> */}
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-10 container-titulo-global-1 mbp-0">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>xxx</div> */}
            <div className="d-flex psp-0">
              <img className="hp-15 align-center mtp-20 me-2 mb-2" src={"images/page_" + pagina + "/g_i.svg"} alt="" />
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>1</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">A partir de nuestro manifiesto, acuerdo con mi grupo qué palabra, idea y frase deseamos transmitir con nuestra obra.</div>
              {/* <img src={"images/page_"+pagina+"/img_001.svg"} className="wp-100" alt=""/> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image={"images/page_" + pagina + "/revista.svg"} clasesImagen="hp-35 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          {/* <div className="d-flex global-margin mtp-80 mbp-0 psp-80 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">
                <div className="position-absolute top-50 start-0 translate-middle zindex-1">
                  <div className="bgc-pidgey rounded-p-5 hp-120 wp-120 rotate-270 p-1">PALABRA</div>
                </div>
                <div className="position-absolute top-50 start-50 translate-middle zindex-1 w-100 msp--30">
                  <div className="w-100 p-1 ">
                    <div className="bgc-white rounded-p-5 p-2 w-100 h-100 border-style-solid border-color-pidgey border-1">
                      <div className="f-Ubuntu-R fsp-14 lh-sm text-start">Lo que propongo:</div>
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea hp-35 min-hp-35" />
                    </div>
                  </div>
                  <div className="w-100 p-1">
                    <div className="bgc-white rounded-p-5 p-2 w-100 border-style-solid border-color-pidgey border-1">
                      <div className="f-Ubuntu-R fsp-14 lh-sm text-start">Lo que acordé con mi grupo:</div>
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea hp-35 min-hp-35" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className="d-flex global-margin mtp-0 mbp-0 psp-40 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100 h-100">
              <div className="col-auto p-0 m-0 d-flex align-items-center">
                <div className="bgc-windu rounded-p-10 hp-120 wp-120 rotate-270 p-1 color-saitama f-Ubuntu-B fsp-15">PALABRA</div>
              </div>
              <div className="col p-0 msp--90 zindex-1 h-100">
                <div className="w-100 h-100 p-1">
                  <div className="bgc-white rounded-p-5 p-2 w-100 border-style-solid border-color-saitama border-1">
                    <div className="f-Ubuntu-R fsp-14 lh-sm text-start">Lo que propongo:</div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="max-wp-600 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                  </div>
                </div>
                <div className="w-100 p-1">
                  <div className="bgc-white rounded-p-5 p-2 w-100 border-style-solid border-color-saitama border-1">
                    <div className="f-Ubuntu-R fsp-14 lh-sm text-start">Lo que acordé con mi grupo:</div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="max-wp-600 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex global-margin mtp-0 mbp-0 psp-40 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100 h-100 position-relative">
              <div className="position-absolute top-50 start-100 translate-middle zindex-2"><img src={"images/page_" + pagina + "/ampolletas.png"} className="hp-50 mtp-0 mep-50" alt="" /></div>
              <div className="col-auto p-0 m-0 d-flex align-items-center">
                <div className="bgc-azuka rounded-p-10 hp-120 wp-120 rotate-270 p-1 color-android18 f-Ubuntu-B fsp-15">IDEA</div>
              </div>
              <div className="col p-0 msp--90 zindex-1 h-100">
                <div className="w-100 h-100 p-1">
                  <div className="bgc-white rounded-p-5 p-2 w-100 border-style-solid border-color-android18 border-1">
                    <div className="f-Ubuntu-R fsp-14 lh-sm text-start">Lo que propongo:</div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="max-wp-600 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                  </div>
                </div>
                <div className="w-100 p-1">
                  <div className="bgc-white rounded-p-5 p-2 w-100 border-style-solid border-color-android18 border-1">
                    <div className="f-Ubuntu-R fsp-14 lh-sm text-start">Lo que acordé con mi grupo:</div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="max-wp-600 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex global-margin mtp-0 mbp-60 psp-40 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100 h-100">
              <div className="col-auto p-0 m-0 d-flex align-items-center">
                <div className="bgc-piccolo rounded-p-10 hp-120 wp-120 rotate-270 p-1 color-bulma f-Ubuntu-B fsp-15">FRASE</div>
              </div>
              <div className="col p-0 msp--90 zindex-1 h-100">
                <div className="w-100 h-100 p-1">
                  <div className="bgc-white rounded-p-5 p-2 w-100 border-style-solid border-color-bulma border-1">
                    <div className="f-Ubuntu-R fsp-14 lh-sm text-start">Lo que propongo:</div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="max-wp-600 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                  </div>
                </div>
                <div className="w-100 p-1">
                  <div className="bgc-white rounded-p-5 p-2 w-100 border-style-solid border-color-bulma border-1">
                    <div className="f-Ubuntu-R fsp-14 lh-sm text-start">Lo que acordé con mi grupo:</div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="max-wp-600 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
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

export default Page051;
