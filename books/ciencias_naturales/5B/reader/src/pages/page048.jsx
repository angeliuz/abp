import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_048.css";

function Page048(props) {

  const pagina = "048";
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

          {/* BEGIN CABECERA VERSIÓN 1 */}
          <div className={"cabecera-v1 hp-80 " + background}></div>
          {/* END CABECERA VERSIÓN 1 */}
          <div className="ptp-5 ps-6 pe-6">
            <div className="d-flex">
              <div className="pep-10 ptp-15"><img src="images/page_048/i_g.svg" className="hp-15" alt="" /></div>
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">3</div>
              <div className="f-Ubuntu-R fsp-15 ptp-18 psp-10 lh-sm">Seleccionamos la información que debe incluir la propuesta que redactaremos.</div>
            </div>
          </div>

          <div className="ptp-5 ps-17 pe-17">
            <div className="rounded-p-10 bgc-motaro p-3">
              <div className="text-center f-colby-bold fsp-18 pbp-10">Una propuesta de alimentación saludable</div>
              <div className="f-Ubuntu-M fsp-15 lh-sm pep-5 pbp-10">El contenido debe incluir:</div>
              <div className="d-flex align-items-center pbp-10">
                <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">propuestas de snack saludables.</div>
              </div>
              <div className="d-flex align-items-center pbp-10">
                <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">propuestas de desayuno y almuerzo.</div>
              </div>
              <div className="d-flex align-items-center pbp-10">
                <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">una sección explicativa que detalle la variedad de nutrientes presentes en las alternativas que preparamos.</div>
              </div>
              <div className="d-flex align-items-center pbp-10">
                <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">una sección que justifique por qué la propuesta se considera un ejemplo alimentación saludable.</div>
              </div>
              <div className="d-flex align-items-center pbp-10">
                <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">fotografías con las preparaciones de las alternativas de alimentación.</div>
              </div>
              <div className="d-flex align-items-center pbp-10">
                <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">una sección con recomendaciones de alimentación saludable.</div>
              </div>
              <div className="d-flex align-items-center pbp-10">
                <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">consejos relacionados con los beneficios de mantener una alimentación saludable.</div>
              </div>
              <div className="d-flex align-items-center pbp-10">
                <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">Otros:</div>
                <div className="linea flex-fill"></div>
              </div>
              <div className="f-Ubuntu-M fsp-15 lh-sm pep-5 pbp-10">La información debe resultar:</div>
              <div className="d-flex align-items-center pbp-10">
                <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">clara, estructurada y ordenada.</div>
              </div>
              <div className="d-flex align-items-center pbp-10">
                <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">original, atractiva y llamativa.</div>
              </div>
            </div>
          </div>

          <div className="ptp-5 ps-6 pe-6">
            <div className="d-flex psp-35">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">4</div>
              <div className="f-Ubuntu-R fsp-15 ptp-18 psp-10 lh-sm">Creamos un documento con nuestra propuesta de alimentación saludable para el colegio.</div>
            </div>
          </div>

          <div className="ptp-5 ps-15 pe-15">
            <div className="border border-1 border-color-hardDark p-0 rounded-p-10">
              <div className="bgc-white p-3 f-Ubuntu-L fsp-15 lh-sm hp-70" style="border-radius: 10px 10px 0px 0px;">La propuesta se la vamos a presentar a nuestros compañeros, por medio de una consulta pública, con el objetivo de...</div>
              <div className="bgc-pantro p-2" style="border-radius: 0px 0px 10px 10px;">
                <div className="linea mtp-15 mbp-31"></div>
                <div className="linea mtp-10 mbp-10"></div>
                <div className="linea mtp-10 mbp-10"></div>
                <div className="linea mtp-10 mbp-10"></div>
                <div className="linea mtp-10 mbp-5"></div>
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
      </div >
    </div >
  );
}

export default Page048;
