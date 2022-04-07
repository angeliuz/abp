import React from "react";
import InputBox from "../components/InputBox";
// import ModalVideo from "../components/ModalVideo";
import "./page_048.css";

function Page048(props) {

  const pagina = "048";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v1 hp-80 bgc-pidgey"></div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-10 psp-60 pep-60 mbp-0">
            <div className="d-flex">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_048/i_g.svg" alt="" />
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">7</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start w-85">Pienso en la tarea de la que soy responsable y explico su relación con la emergencia que se simulará.</div>
            </div>
          </div>

          <div className="ptp-10 psp-130 pep-80 mbp-0">
            <div className="row mbp-10 position-relative">
              
              <div className="position-absolute top-0 start-100 translate-middle visible-768"><img src="images/page_048/casco.png" className="wp-60 mep-70 mtp--80" alt="" /></div>
              <div className="col-12 col-md-4 p-1 m-0 position-relative">
              <div className="position-absolute top-100 start-0 translate-middle"><img src="images/page_048/libreta.png" className="wp-60 mep-40 mtp--80" alt="" /></div>
                <div className="rounded-seb-10 bgc-white border-style-solid border-color-bulma border-1">
                  <div className="f-Ubuntu-L fsp-14 p-2 text-center bgc-piccolo w-95 rounded-be-10">Antes de la emergencia</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-220 mep-10 msp-10" />
                </div>
              </div>
              <div className="col-12 col-md-4 p-1 m-0">
                <div className="rounded-seb-10 bgc-white border-style-solid border-color-bulma border-1">
                  <div className="f-Ubuntu-L fsp-14 p-2 text-center bgc-piccolo w-95 rounded-be-10">Durante la emergencia</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-220 mep-10 msp-10" />
                </div>
              </div>
              <div className="col-12 col-md-4 p-1 m-0">
                <div className="rounded-seb-10 bgc-white border-style-solid border-color-bulma border-1">
                  <div className="f-Ubuntu-L fsp-14 p-2 text-center bgc-piccolo w-95 rounded-be-10">Después de la emergencia</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-220 mep-10 msp-10" />
                </div>
              </div>
            </div>
          </div>

          <div className="ptp-10 psp-100 pep-60 mbp-0">
            <div className="d-flex">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">8</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start w-85">Comparto las respuestas anteriores con mi equipo. Luego, realizamos un guion para simular cómo reaccionará la brigada ante la emergencia.</div>
            </div>
          </div>

          <div className="ptp-10 psp-130 pep-80 mbp-100">
            <div className="row mbp-10 position-relative">
              
              <div className="col-12 p-1 m-0 position-relative">
              <div className="position-absolute top-0 start-100 translate-middle msp-10 mtp--55"><img src="images/page_048/mono.png" className="wp-110" alt="" /></div>
              <div className="position-absolute top-100 start-0 translate-middle"><img src="images/page_048/patin.png" className="wp-70 mep-0 mtp--80" alt="" /></div>
                <div className="rounded-seb-10 bgc-white border-style-solid border-color-dark border-2 hp-430">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-400 mep-10 msp-10" />
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>ABP &copy; SM</div>
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
            <div className="col-7 col-md-2 p-0 m-0 position-relative">
              <img src="images/rotulo_experimentacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
              <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
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

export default Page048;
