import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import Check from "../components/Check";

import "./page_050.css";

function Page050(props) {

  const pagina = "050";
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

          {/* BEGIN CABECERA VERSIÓN 1 */}
          <div className={"cabecera-v1 hp-80 " + background}></div>
          {/* END CABECERA VERSIÓN 1 */}

          <div className="ptp-50 container-titulo-global mbp-0">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
              xxx
            </div> */}
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                3
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Verificamos lo que tenemos y luego construimos.
              </div>
              {/* <img src={"images/page_"+pagina+"/img_00.svg"} className="wp-100" alt=""/> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="d-flex global-margin mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative d-flex center-center">

                <div className="position-absolute top-100 start-50 translate-middle msp-190 mtp--110 zindex-2"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-150" alt="" /></div>
                <div className="d-flex wp-400 hp-420">
                  <div className="position-absolute top-50 start-50 translate-middle msp-0 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-350" alt="" /></div>
                  <div className="position-absolute top-50 start-50 translate-middle msp-0 mtp-0 zindex-1 max-wp-300">
                    <div className="d-flex justify-content-start w-100 p-2">
                      <div className="wp-30 hp-30">
                        <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                      </div>
                      <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5"> Tenemos todos los materiales.</div>
                    </div>
                    <div className="d-flex justify-content-start w-100 p-2">
                      <div className="wp-30 hp-30">
                        <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                      </div>
                      <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5"> Tenemos claro de qué somos responsables.</div>
                    </div>
                    <div className="d-flex justify-content-start w-100 p-2">
                      <div className="wp-30 hp-30">
                        <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                      </div>
                      <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5"> Conocemos los pasos que hay que seguir.</div>
                    </div>
                    <div className="d-flex justify-content-start w-100 p-2">
                      <div className="wp-30 hp-30">
                        <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                      </div>
                      <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5"> Sabemos cuál es el resultado esperado.</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>


          <div className={"w-100 " + bgc_cajas + " border-top-style-solid " + borderColor + " border-2 mbp-0 mtp-20"}>
            <div className="d-flex flex-column global-margin mtp-20 mbp-0 psp-0 pep-0 ptp-0 pbp-150">
              <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-10">¿Cómo voy?</div>
              <div className="d-flex flex-column bgc-white rounded-p-10 psp-10 pep-10 ptp-10 pbp-10 mtp-0 mbp-0">
                <div className="row p-0 m-0 w-100">
                  <div className="col-12 p-0 m-0">
                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-start">
                        <div className="mtp-0 pep-5">
                          <img src={"images/generales/flecha_e" + etapa + ".svg"} className="wp-15" />
                        </div>
                        <div className="f-Ubuntu-L fsp-15 ptp-2 text-start"> ¿Qué hago cuando algo no me sale como quiero?</div>
                      </div>
                      <div className="d-flex w-100 psp-20 pep-10 ptp-0 pbp-0">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 p-0 m-0">
                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-start">
                        <div className="mtp-0 pep-5">
                          <img src={"images/generales/flecha_e" + etapa + ".svg"} className="wp-15" />
                        </div>
                        <div className="f-Ubuntu-L fsp-15 ptp-2 text-start"> El trabajo en equipo me aporta...</div>
                      </div>
                      <div className="d-flex w-100 psp-20 pep-10 ptp-0 pbp-0">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
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

export default Page050;
