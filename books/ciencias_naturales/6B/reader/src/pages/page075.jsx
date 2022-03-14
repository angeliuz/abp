import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import "./page_075.css";

function Page075(props) {

  const pagina = "075";
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
          <div className={"cabecera-v2 d-flex flex-column " + background}>
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className={"caja-seccion wp-160 hp-70 text-center fsp-24 f-IntroRustG-Base color-dark"}>SESIÓN 20</div>
              <div className="d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">¿Cómo nos fue?</div>
            </div>
            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-0 pep-0 align-self-center justify-content-between w-95">
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Mis objetivos en <br /> esta sesión son:
              </div>
              <div className="p-0 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Valorar el trabajo <br /> en la difusión
              </div>
              <div className="psp-5 pep-5 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_2.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Valorar lo que  <br /> se ha aprendido
              </div>
              <div className="p-0 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="psp-5 pep-5 ptp-10 pbp-10 position-relative align-self-center f-colby-compres-bold fsp-17 lh-sm text-center color-dark">
                <div className="position-absolute top-0 start-0 w-100 h-100">
                  <img src="images/cabecera/caja_blanca.png" width="100%" height="100%" alt="" />
                </div>
                <div className="position-relative">
                  Evaluar el trabajo  <br /> en equipo
                </div>
              </div>
              <div className="p-0 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_2.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="psp-5 pep-5 ptp-10 pbp-10 position-relative align-self-center f-colby-compres-bold fsp-17 lh-sm text-center color-dark">
                <div className="position-absolute top-0 start-0 w-100 h-100">
                  <img src="images/cabecera/caja_blanca.png" width="100%" height="100%" alt="" />
                </div>
                <div className="position-relative">
                  Celebrar  <br /> nuestro logro
                </div>
              </div>
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="d-flex msp-60 mep-60 mbp-20 mtp-30">
            <div className="row w-100 p-0 m-0">
              <div className="col-sm-6 position-relative">
                <div className="d-flex flex-column justify-content-start align-items-center mbp-5 mtp-10 w-100 rounded-p-10 bgc-white p-2">
                  <div className="mbp-0">
                    <div className="d-flex ">
                      {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
                      <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                        1
                      </div>
                      <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                        La presentación de nuestro proyecto salió...
                      </div>
                    </div>
                  </div>
                  <div className="psp-10 pep-10 pbp-10 ptp-0 w-100 ">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" />
                  </div>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-start mbp-5 mtp-10 w-100 bgc-white border-1 border-style-solid border-color-lightDark p-2 position-relative">
                  <div className="position-absolute top-0 start-0 translate-middle msp-3 mtp-10 zindex-1"><img src={"images/page_" + pagina + "/img_002.svg"} className="wp-30 " alt="" /></div>
                  <span className="f-Ubuntu-R fsp-15 px-2 ptp-10 text-start">Nunca olvidaré...</span>
                  <div className="psp-10 pep-10 pbp-10 ptp-0 w-100">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
                  </div>
                </div>
              </div>

              <div className="col-sm-6 position-relative">
                <div className="position-absolute top-0 start-50 translate-middle msp-3 mtp-10 zindex-1"><img src={"images/page_" + pagina + "/img_002.svg"} className="wp-30 " alt="" /></div>
                <div className="d-flex flex-column center-center mbp-5 mtp-10 w-100 bgc-white border-1 border-style-solid border-color-lightDark p-2">
                  <span className="f-Ubuntu-R fsp-15 px-2 ptp-10 text-start">Los comentarios de los asistentes a la presentación fueron...</span>
                  <div className="psp-10 pep-10 pbp-10 ptp-0 w-100">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-320" />
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="container-titulo-global mbp-0 mbp-20">
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                2
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Reflexiono y respondo las preguntas:
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/*<ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image={"images/page_" + pagina + "/img_001.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />*/}
            </div>
          </div>


          <div className="msp-60 mep-60 mbp-100">
            <div className="row m-0 p-0">
              <div className="col-md-6 col-sm-12 m-0 p-0">
                <div class="text-start bgc-itto p-3 f-Ubuntu-L fsp-13 border-color-garou ">
                  <p>¿Qué he aprendido?</p>
                  <div className="psp-15 pep-15">
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className=" p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 p-0 m-0">
                <div class="text-start bgc-draco p-3 f-Ubuntu-L fsp-13 border-color-garou">
                  <p>¿Cómo he aprendido?</p>
                  <div className="psp-15 pep-15">
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className=" p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 p-0 m-0 position-relative">
                <div className="position-absolute top-0 start-0 translate-middle msp--15 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-60 " alt="" /></div>
                <div class="text-start bgc-pantro p-3 f-Ubuntu-L fsp-13 border-color-garou">
                  <p> ¿Con quién he aprendido?</p>
                  <div className="psp-15 pep-15">
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className=" p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 p-0 m-0">
                <div class="text-start bgc-kokomi p-3 f-Ubuntu-L fsp-13 border-color-garou ">
                  <p>¿Cómo me he sentido aprendiendo?</p>
                  <div className="psp-15 pep-15">
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className=" p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170"
                    />
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

export default Page075;
