import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import Check from "../components/Check2";


import "./page_017.css";

function Page017(props) {

  const pagina = "017";
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

          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className={"cabecera-v2 d-flex flex-column " + background}>
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className={"caja-seccion wp-160 hp-70 text-center fsp-24 f-IntroRustG-Base color-dark"}>SESIÓN 3</div>
              <div className="d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">¡Tenemos un plan!</div>
            </div>
            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-95">
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Mis objetivos en <br /> esta sesión son:
              </div>
              <div className="p-0 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Realizar una lluvia  <br /> de ideas para <br />superar el desafío
              </div>
              <div className="psp-5 pep-5 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_2.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Identificar mi   <br /> rol en el equipo
              </div>
              <div className="psp-5 pep-5 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Entender las <br /> características de las <br />etapas del proyecto
              </div>
              <div className="p-0 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_2.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="psp-5 pep-5 ptp-10 pbp-10 position-relative align-self-center f-colby-compres-bold fsp-17 lh-sm text-center color-dark">
                <div className="position-absolute top-0 start-0 w-100 h-100">
                  <img src="images/cabecera/caja_blanca.png" width="100%" height="100%" alt="" />
                </div>
                <div className="position-relative">
                  Ordenar las tareas   <br /> del proyecto
                </div>
              </div>
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-30 container-titulo-global mbp-0">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
              xxx
            </div> */}
            <div className="d-flex psp-20">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_004.png"} alt="" />
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                1
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Pienso cómo resolver el desafío y hacemos una lluvia de ideas en equipo.
              </div>
              {/* <img src={"images/page_"+pagina+"/img_001.svg"} className="wp-100" alt=""/> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="d-flex global-margin mtp-10 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-md-12 col-md-6 p-0 m-0 position-relative">

                <div className="d-flex msp-10 mep-10  mtp-0 mbp-10 psp-0 pep-0 ptp-0 pbp-0">
                  <div className="row p-0 m-0 w-100">
                    <div className="col-12 p-0 m-0 position-relative">
                      <div className="border-style-solid border-2 border-color-dark rounded-p-10">
                        <div className="d-flex flex-column bgc-white rounded-p-10">
                          <div className="psp-10 pep-10 ptp-10 pbp-10 f-Ubuntu-L fsp-15">
                            Yo opino que, para proponer alternativas de alimentación saludable para el colegio, tenemos que...
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-180" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-md-12 col-md-6 p-0 m-0 position-relative">
                <div className="position-absolute top-50 start-100 translate-middle msp--60 mtp--120 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_006.png"} className="wp-130" alt="" /></div>
                <div className="position-absolute top-50 start-0 translate-middle msp-30 mtp--80 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-60" alt="" /></div>

                <div className="d-flex msp-10 mep-10 mtp-especial-17 mbp-10 psp-0 pep-0 ptp-0 pbp-0">
                  <div className="row p-0 m-0 w-100">
                    <div className="col-12 p-0 m-0 position-relative">
                      <div className="border-style-solid border-2 border-color-dark rounded-p-10">
                        <div className="d-flex flex-column bgc-white rounded-p-10">
                          <div className="psp-10 pep-10 ptp-10 pbp-10 f-Ubuntu-L fsp-15">
                            Para difundir nuestra propuesta durante el Día de la Alimentación Saludable, podemos...
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-180" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>


          <div className="container-titulo-global mbp-0">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
              xxx
            </div> */}
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                2
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Selecciono el rol que me gustaría asumir en el equipo.
              </div>
              {/* <img src={"images/page_"+pagina+"/img_00.svg"} className="wp-100" alt=""/> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>


          <div className="d-flex global-margin mtp-20 mbp-100 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-md-12 col-md-6 p-0 m-0 position-relative">

                <div className="position-absolute top-0 start-50 translate-middle msp--150 mtp-10 zindex-1">

                  <div className="wp-35 hp-35 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                    <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                  </div>

                </div>

                <div className="border-style-solid border-1 border-color-lightDark rounded-p-10 msp-20 mep-20 mbp-20">
                  <div className="d-flex flex-column bgc-tigro rounded-p-10 border-color-white border-style-solid border-2">
                    <div className="bgc-white w-100 f-Ubuntu-B color-bulma text-center fsp-15 rounded-set-10 psp-10 pep-10 ptp-5 pbp-5">
                      Coordinación
                    </div>
                    <div className="psp-10 pep-10 ptp-10 pbp-10 min-hp-120">

                      <div className="d-flex align-items-center w-100 psp-10 pep-10 ptp-5 pbp-0">
                        <div className="wp-5 hp-5 bgc-bulma rounded-circle"></div>
                        <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-L fsp-15 psp-5">
                          Reparte el turno de palabra.
                        </div>
                      </div>
                      <div className="d-flex align-items-center w-100 psp-10 pep-10 ptp-0 pbp-0">
                        <div className="wp-5 hp-5 bgc-bulma rounded-circle"></div>
                        <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-L fsp-15 psp-5">
                          Se asegura de que todos participen.
                        </div>
                      </div>

                    </div>
                  </div>
                </div>


              </div>
              <div className="col-md-12 col-md-6 p-0 m-0 position-relative">


                <div className="position-absolute top-0 start-50 translate-middle msp--150 mtp-10 zindex-1">

                  <div className="wp-35 hp-35 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                    <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                  </div>

                </div>

                <div className="border-style-solid border-1 border-color-lightDark rounded-p-10 msp-20 mep-20 mbp-20">
                  <div className="d-flex flex-column bgc-tigro rounded-p-10 border-color-white border-style-solid border-2">
                    <div className="bgc-white w-100 f-Ubuntu-B color-bulma text-center fsp-15 rounded-set-10 psp-10 pep-10 ptp-5 pbp-5">
                      Supervisión
                    </div>
                    <div className="psp-10 pep-10 ptp-10 pbp-10 min-hp-120">

                      <div className="d-flex align-items-start w-100 psp-10 pep-10 ptp-5 pbp-0">
                        <div className="wp-5 hp-5 bgc-bulma rounded-circle mtp-8"></div>
                        <div className="d-flex justify-content-start align-items-center w-100 text-start f-Ubuntu-L fsp-15 psp-5">
                          Gestiona el tiempo de las tareas.
                        </div>
                      </div>
                      <div className="d-flex align-items-start w-100 psp-10 pep-10 ptp-0 pbp-0">
                        <div className="wp-5 hp-5 bgc-bulma rounded-circle mtp-8"></div>
                        <div className="d-flex justify-content-start align-items-center w-100 text-start f-Ubuntu-L fsp-15 psp-5">
                          Se asegura de que todos cumplan las tareas en el plazo asignado.
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>

              <div className="col-md-12 col-md-6 p-0 m-0 position-relative">

                <div className="position-absolute top-0 start-50 translate-middle msp--150 mtp-10 zindex-1">

                  <div className="wp-35 hp-35 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                    <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                  </div>

                </div>

                <div className="border-style-solid border-1 border-color-lightDark rounded-p-10 msp-20 mep-20 mbp-20">
                  <div className="d-flex flex-column bgc-tigro rounded-p-10 border-color-white border-style-solid border-2">
                    <div className="bgc-white w-100 f-Ubuntu-B color-bulma text-center fsp-15 rounded-set-10 psp-10 pep-10 ptp-5 pbp-5">
                      Relaciones públicas
                    </div>
                    <div className="psp-10 pep-10 ptp-10 pbp-10 min-hp-120">

                      <div className="d-flex align-items-start w-100 psp-10 pep-10 ptp-5 pbp-0">
                        <div className="wp-5 hp-5 bgc-bulma rounded-circle mtp-8"></div>
                        <div className="d-flex justify-content-start align-items-center w-100 text-start f-Ubuntu-L fsp-15 psp-5">
                          Se comunica con el profesor para solicitar ayuda.
                        </div>
                      </div>
                      <div className="d-flex align-items-start w-100 psp-10 pep-10 ptp-0 pbp-0">
                        <div className="wp-5 hp-5 bgc-bulma rounded-circle mtp-8"></div>
                        <div className="d-flex justify-content-start align-items-center w-100 text-start f-Ubuntu-L fsp-15 psp-5">
                          Pide ayuda a otros equipos.
                        </div>
                      </div>

                    </div>
                  </div>
                </div>


              </div>
              <div className="col-md-12 col-md-6 p-0 m-0 position-relative">


                <div className="position-absolute top-0 start-50 translate-middle msp--150 mtp-10 zindex-1">

                  <div className="wp-35 hp-35 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                    <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                  </div>

                </div>

                <div className="border-style-solid border-1 border-color-lightDark rounded-p-10 msp-20 mep-20 mbp-20">
                  <div className="d-flex flex-column bgc-tigro rounded-p-10 border-color-white border-style-solid border-2">
                    <div className="bgc-white w-100 f-Ubuntu-B color-bulma text-center fsp-15 rounded-set-10 psp-10 pep-10 ptp-5 pbp-5">
                      Intendencia
                    </div>
                    <div className="psp-10 pep-10 ptp-10 pbp-10 min-hp-120">

                      <div className="d-flex align-items-start w-100 psp-10 pep-10 ptp-5 pbp-0">
                        <div className="wp-5 hp-5 bgc-bulma rounded-circle mtp-8"></div>
                        <div className="d-flex justify-content-start align-items-center w-100 text-start f-Ubuntu-L fsp-15 psp-5">
                          Gestiona los materiales que se necesitan.
                        </div>
                      </div>
                      <div className="d-flex align-items-start w-100 psp-10 pep-10 ptp-0 pbp-0">
                        <div className="wp-5 hp-5 bgc-bulma rounded-circle mtp-8"></div>
                        <div className="d-flex justify-content-start align-items-center w-100 text-start f-Ubuntu-L fsp-15 psp-5">
                          Comprueba que se mantiene un entorno limpio y ordenado.
                        </div>
                      </div>

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

            <div className={etapa == 1 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
              <img src="images/rotulo_motivacion.svg" className={etapa == 1 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className={etapa == 2 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
              <img src="images/rotulo_planificacion.svg" className={etapa == 2 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className={etapa == 3 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
              <img src="images/rotulo_investigacion.svg" className={etapa == 3 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className={etapa == 4 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
              <img src="images/rotulo_experimentacion.svg" className={etapa == 4 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className={etapa == 5 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
              <img src="images/rotulo_creacion.svg" className={etapa == 5 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className={etapa == 6 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
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

export default Page017;
