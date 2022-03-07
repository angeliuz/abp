import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import ModalBook from "../components/ModalBook";

import "./page_045.css";

function Page045(props) {

  const pagina = "045";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v2 bgc-pidgey d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 align-items-center ptp-40 psp-30 pep-30">
              <div className="caja-seccion wp-160 hp-60 d-flex justify-content-center ptp-10 mtp-5 color-pidgey fsp-24 f-IntroRustG-Base">SESIÓN 9</div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">¡Brigadas en el colegio!</div>
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-10 psp-60 pep-60 mbp-0">
            <div className="f-Ubuntu-B fsp-20 color-pidgey text-start lhp-20 psp-45">Las tareas de la brigada</div>
            <div className="d-flex">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_045/g_i.svg" alt="" />
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">1</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start">Leemos la revista. Luego, nos organizamos como equipo para que cada integrante sea responsable de realizar y monitorear una tarea específica.</div>
              <ModalBook
                id={"p" + pagina + "_book" + (indexInput += 1)} pagina={"87"} image="images/page_045/revista.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
            </div>
          </div>

          <div className="ptp-10 psp-130 pep-80 mbp-0">
            <div className="row mbp-10 position-relative">
              <div className="position-absolute top-0 start-0 translate-middle"><img src="images/page_045/bombero.png" className="wp-45 mep-50 mtp-150" alt="" /></div>
              <div className="col-7 rounded-p-5 bgc-voldemort border-style-solid border-color-bulma border-2 text-center text-white f-Ubuntu-B fsp-15 p-1 mb-1">Tarea</div>
              <div className="col-5 rounded-p-5 bgc-voldemort border-style-solid border-color-bulma border-2 text-center text-white f-Ubuntu-B fsp-15 p-1 mb-1">Estudiante a cargo</div>

              <div className="col-7 rounded-p-5 bgc-azuka border-style-solid border-color-android18 border-2 text-start f-Ubuntu-R fsp-15 p-2 mb-1 d-flex align-items-center">Crear e instalar señaléticas.</div>
              <div className="col-5 rounded-p-5 border-style-solid border-color-android18 border-2 f-Ubuntu-R fsp-15 p-1 mb-1">
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-30 min-hp-35" />
              </div>

              <div className="col-7 rounded-p-5 bgc-piccolo border-style-solid border-color-bulma border-2 text-start f-Ubuntu-R fsp-15 p-2 mb-1 d-flex align-items-center">Demarcar y comunicar las vías de evacuación.</div>
              <div className="col-5 rounded-p-5 border-style-solid border-color-bulma border-2 f-Ubuntu-R fsp-15 p-1 mb-1">
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-30 min-hp-35" />
              </div>

              <div className="col-7 rounded-p-5 bgc-quaternary border-style-solid border-color-saitama border-2 text-start f-Ubuntu-R fsp-15 p-2 mb-1 d-flex align-items-center">Asistir en primeros auxilios.</div>
              <div className="col-5 rounded-p-5 border-style-solid border-color-saitama border-2 f-Ubuntu-R fsp-15 p-1 mb-1">
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-30 min-hp-35" />
              </div>

              <div className="col-7 rounded-p-5 bgc-ganyu border-style-solid border-color-pidgey border-2 text-start f-Ubuntu-R fsp-15 p-2 mb-1 d-flex align-items-center">Educar y capacitar a la comunidad educativa.</div>
              <div className="col-5 rounded-p-5 border-style-solid border-color-pidgey border-2 f-Ubuntu-R fsp-15 p-1 mb-1">
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-30 min-hp-35" />
              </div>
            </div>
          </div>

          <div className="ptp-10 psp-100 pep-60 mbp-0">
            <div className="d-flex">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">2</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start">Considerando la misión de la brigada, explico la importancia que tiene la tarea de la que seré responsable.</div>
            </div>
          </div>

          <div className="ptp-10 psp-100 pep-80 mbp-0">
            <div className="col-12 psp-30">
              <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
            </div>
          </div>

          <div className="ptp-10 psp-100 pep-60 mbp-0">
            <div className="d-flex">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">3</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start">Registro lo que voy a necesitar para hacerme cargo de la tarea.</div>
            </div>
          </div>

          <div className="ptp-10 psp-130 pep-80 mbp-70">
            <div className="row mbp-10 position-relative bgc-trunks rounded-p-10 p-2 m-0">
              <div className="position-absolute top-0 start-100 translate-middle"><img src="images/page_045/lapiz.png" className="hp-90 mtp-120" alt="" /></div>
              <div className="col-12 col-md-6 p-1 m-0">
                <div className="bgc-white rounded-p-5 p-2">
                  <div className="bgc-pidgey f-Ubuntu-M fsp-15 text-start text-white wp-90 text-center">Personas</div>
                  <div className="f-Ubuntu-L fsp-15 p-1 text-start mtp-5 min-hp-55">Necesitaré ayuda y colaboración de…</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-185" />
                </div>
              </div>
              <div className="col-12 col-md-6 p-1 m-0">
                <div className="bgc-white rounded-p-5 p-2">
                  <div className="bgc-pidgey f-Ubuntu-M fsp-15 text-start text-white wp-90 text-center">Materiales</div>
                  <div className="f-Ubuntu-L fsp-15 p-1 text-start mtp-5 min-hp-55">Para realizar y monitorear la tarea necesitaré…</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-185" />
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>ABP &copy; SM</div>
            <div className="bgc-goku wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>

          <div className="row w-100 position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
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
            <div className="col-7 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_experimentacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
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
        </div>
      </div>
    </div>
  );
}

export default Page045;
