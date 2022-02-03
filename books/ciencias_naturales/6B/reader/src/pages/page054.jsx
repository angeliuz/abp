import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import ModalVideo from "../components/ModalVideo";

import "./page_054.css";

function Page054(props) {

  const pagina = "054";
  var indexInput = 0;
  const etapa = "4"
  const background = "bgc-pidgey";
  const color = "color-pidgey";
  const borderColor = "border-color-pidgey"
  const bgc_cajas = "bgc-bison";
  const borderColorTabla = "border-color-pidgey"

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          <div className="cabecera-v1 hp-80 bgc-pidgey">
          </div>

          <div className="psp-60 pep-60 ptp-30">
            <div className="d-flex psp-20 pbp-20">
              <div className={"f-Ubuntu-B fsp-21 mtp--6 " + color}>
                c.
              </div>
              <div className="f-Ubuntu-R fsp-16 psp-10 pep-10 text-start">
                Dibujamos una secuencia de tomas que nos gustaría que incluya el video.
              </div>
            </div>
          </div>

          <div className=" psp-60 pep-60">
            <div className="row w-100 position-relative">

              <div className="col-md-4 col-12 pbp-20">
                <div className="bgc-white border-style-solid border-2 p-2 rounded-p-20">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-25 min-hp-140" />
                </div>
              </div>

              <div className="col-md-4 col-12 pbp-20">
                <div className="bgc-white border-style-solid border-2 p-2 rounded-p-20">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-25 min-hp-140" />
                </div>
              </div>

              <div className="col-md-4 col-12 pbp-20">
                <div className="bgc-white border-style-solid border-2 p-2 rounded-p-20">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-25 min-hp-140" />
                </div>
              </div>

              <div className="col-md-4 col-12 pbp-20">
                <div className="bgc-white border-style-solid border-2 p-2 rounded-p-20">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-25 min-hp-140" />
                </div>
              </div>

              <div className="col-md-4 col-12 pbp-20">
                <div className="bgc-white border-style-solid border-2 p-2 rounded-p-20">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-25 min-hp-140" />
                </div>
              </div>

              <div className="col-md-4 col-12 pbp-20">
                <div className="bgc-white border-style-solid border-2 p-2 rounded-p-20">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-25 min-hp-140" />
                </div>
              </div>

              <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp--20 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-60" alt="" /></div>
              <div className="position-absolute top-50 start-100 translate-middle msp-10 mtp-30 zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-30" alt="" /></div>
            </div>
          </div>

          <div className="psp-60 pep-60 ptp-30">
            <div className="d-flex psp-20 pbp-20">
              <div className={"f-Ubuntu-B fsp-21 mtp--6 " + color}>
                d.
              </div>
              <div className="f-Ubuntu-R fsp-16 psp-10 pep-10 text-start">
                Con el modelo de guion que nos entregarán, hacemos una lista con las tareas necesarias para grabar el video y las distribuimos:
              </div>
              <ModalVideo id={"p" + pagina + "_video" + (indexInput += 1)} image={"images/page_" + pagina + "/img_003.svg"} className="p-0 px-1" />
            </div>
          </div>

          <div className="psp-60 pep-60 ptp-20 pbp-100">
            <div className="row w-100 position-relative">

              <div className="col-md-7 col-12 position-relative pbp-30">
                <div className="bgc-white border-style-solid border-color-milk Border-2 rounded-p-20 px-2 pbp-10 ptp-30">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-360" />
                </div>
                <div class="position-absolute top-0 start-50 translate-middle msp-0 mtp-0">
                  <img src={"images/page_" + pagina + "/img_006.svg"} className="wp-200" alt="" />
                  <div className="mtp--35">Lo que hay que hacer</div>
                </div>
              </div>

              <div className="col-md-5 col-12 position-relative pbp-30">
                <div className="bgc-white border-style-solid border-color-vegeta Border-2 rounded-p-20 px-2 pbp-10 ptp-30">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-360" />
                </div>
                <div class="position-absolute top-0 start-50 translate-middle msp-0 mtp-0">
                  <img src={"images/page_" + pagina + "/img_007.svg"} className="wp-200" alt="" />
                  <div className="mtp--35">Estudiante a cargo</div>
                </div>
              </div>

              <div className="position-absolute top-100 start-100 translate-middle  visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-60 msp-0 mtp--150" alt="" /></div>
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
            <div className="col-7 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
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

export default Page054;
