import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import "./page_061.css";

function Page061(props) {

  const pagina = "061";
  var indexInput = 0;
  const etapa = "5"
  const background = "bgc-saitama";
  const color = "color-saitama";
  const borderColor = "border-color-saitama"
  const borderColorTabla = "border-color-bobafett"
  const bgc_cajas = "bgc-bobafett";
  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v2 bgc-saitama d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 align-items-center ptp-40 psp-30 pep-30">
              {/* <div className="caja-seccion wp-160 hp-60 d-flex justify-content-center ptp-10 mtp-5 color-saitama fsp-24 f-IntroRustG-Base">SESIÓN 12</div>
                    <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Comenzamos a crear</div> */}
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}


          <div className="d-flex global-margin mtp-20 mbp-100 psp-10 pep-10 ptp-10 pbp-10 rounded-p-10 bgc-bobafett">
            <div className="row p-0 m-0 w-100">
              <div className="col-sm-6 col-md-6 p-0 m-0 position-relative">

                <div className="d-flex flex-column align-items-center psp-20 pep-20 ptp-0 pbp-0 border-style-solid border-2 border-color-saitama bgc-white">

                  <div className="ptp-0 psp-10 pep-10 mbp-0">
                    <div className="d-flex psp-0">
                      <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                        4
                      </div>
                      <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                        Comparto mi boceto con mi equipo y en conjunto nos decidimos por uno.
                      </div>
                    </div>
                  </div>


                  <div className="d-flex flex-column text-start w-100 psp-45 pep-10 ptp-0 pbp-0 mtp-10 f-Ubuntu-L">
                    Escogimos el boceto de:
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                  </div>
                  <div className="d-flex flex-column text-start w-100 psp-45 pep-10 ptp-0 pbp-0 mtp-10 f-Ubuntu-L">
                    Porque:
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
                  </div>
                  <div className="d-flex flex-column text-start w-100 psp-45 pep-10 ptp-0 pbp-0 mtp-10 f-Ubuntu-L">
                    Además, le haremos estos ajustes:
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-500" />
                  </div>


                </div>


              </div>
              <div className="col-sm-6 col-md-6 p-0 m-0 position-relative">
                <div className="position-absolute top-0 start-100 translate-middle msp-0 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-60" alt="" /></div>
                <div className="position-absolute top-100 start-100 translate-middle msp--150 mtp--100 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-120" alt="" /></div>
                <div className="d-flex flex-column align-items-center psp-0 pep-0 ptp-0 pbp-0 border-style-solid border-2 border-color-saitama border-left-hidden bgc-white">
                  <div className="ptp-0 psp-10 pep-10 mbp-0">
                    <div className="d-flex psp-0">
                      <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                        5
                      </div>
                      <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                        Marco con un <img src={"images/generales/ticket.svg"} className="wp-15 mtp--10" alt="" /> lo que está listo y con una <img src={"images/generales/cruz.svg"} className="wp-15 mtp--5" alt="" /> lo que falta por hacer.
                      </div>
                    </div>
                  </div>

                  <div className="d-flex w-100 psp-40 pep-20 ptp-0 pbp-0 mtp-20 mbp-0">
                    <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 wp-30 text-center flex-grow-1 lhp-30 min-hp-35" />
                    </div>
                    <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">
                      ¿Tenemos claro qué es ser brigadista?
                    </div>
                  </div>
                  <div className="d-flex w-100 psp-40 pep-20 ptp-0 pbp-0 mtp-10 mbp-0">
                    <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 wp-30 text-center flex-grow-1 lhp-30 min-hp-35" />
                    </div>
                    <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">
                      ¿Conocemos experiencias de otros y sabemos cómo actuar ante una situación de peligro?
                    </div>
                  </div>
                  <div className="d-flex w-100 psp-40 pep-20 ptp-0 pbp-0 mtp-10 mbp-0">
                    <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 wp-30 text-center flex-grow-1 lhp-30 min-hp-35" />
                    </div>
                    <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">
                      ¿Definimos la misión y las tareas de la brigada?
                    </div>
                  </div>
                  <div className="d-flex w-100 psp-40 pep-20 ptp-0 pbp-0 mtp-10 mbp-0">
                    <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 wp-30 text-center flex-grow-1 lhp-30 min-hp-35" />
                    </div>
                    <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">
                      ¿Investigamos situaciones de riesgo y las consideramos para elaborar el simulacro?
                    </div>
                  </div>
                  <div className="d-flex w-100 psp-40 pep-20 ptp-0 pbp-0 mtp-10 mbp-0">
                    <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 wp-30 text-center flex-grow-1 lhp-30 min-hp-35" />
                    </div>
                    <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">
                      ¿Simulamos emergencias y definimos lo que haría la brigada antes, durante y después de que ocurran?
                    </div>
                  </div>
                  <div className="d-flex w-100 psp-40 pep-20 ptp-0 pbp-0 mtp-10 mbp-0">
                    <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 wp-30 text-center flex-grow-1 lhp-30 min-hp-35" />
                    </div>
                    <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">
                      ¿Creamos fichas de seguridad para compartir con la comunidad educativa?
                    </div>
                  </div>
                  <div className="d-flex w-100 psp-40 pep-20 ptp-0 pbp-0 mtp-10 mbp-0">
                    <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 wp-30 text-center flex-grow-1 lhp-30 min-hp-35" />
                    </div>
                    <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">
                      ¿Contamos con un inventario  de los insumos para enfrentar  un emergencia?
                    </div>
                  </div>
                  <div className="d-flex w-100 psp-40 pep-20 ptp-0 pbp-0 mtp-10 mbp-20">
                    <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 wp-30 text-center flex-grow-1 lhp-30 min-hp-35" />
                    </div>
                    <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">
                      ¿Contamos con nuestra  identificación como brigadista?
                    </div>
                  </div>

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
          <div className="row w-100 position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
              <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
              <img src="images/rotulo_planificacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
              <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
              <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-7 col-md-2 p-0 m-0 position-relative">
              <img src="images/rotulo_creacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
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

export default Page061;
