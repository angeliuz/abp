import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
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

          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v1 hp-80 bgc-pidgey"></div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-10 container-titulo-global-1 mbp-0">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>xxx</div> */}
            <div className="d-flex psp-0">
              <img className="hp-15 align-center mtp-20 me-2 mb-2" src={"images/page_" + pagina + "/g.svg"} alt="" />
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>2</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Repartimos responsabilidades para construir el prototipo en equipo. Luego, destaco el área en que trabajaré y las tareas que realizaré.</div>
              {/* <img src={"images/page_"+pagina+"/img_001.svg"} className="wp-100" alt=""/> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image={"images/page_" + pagina + "/revista.svg"} clasesImagen="hp-35 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="d-flex global-margin mtp-10 mbp-60 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row">
              <div className="row p-0 m-0 w-100 justify-content-center align-items-center">
                <div className="col-2 p-1 m-0"></div>
                <div className="col-2 p-1 m-0"><div className="rounded-p-10 bgc-sid p-2 f-Ubuntu-B fsp-14 lh-sm color-pidgey">Área de diseño</div></div>
                <div className="col-4 p-1 m-0">
                  <div className="rounded-p-10 bgc-white border-style-solid border-color-pidgey border-1 p-2 f-Ubuntu-B fsp-15 lh-sm">
                    <div className="f-Ubuntu-R fsp-14 ptp-0 psp-0 pep-10 text-start">Tareas:</div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="text-start flex-grow-1 lhp-35 min-hp-110 f-Ubuntu-R" />
                  </div>
                </div>
                <div className="col-4 p-1 m-0">
                  <div className="rounded-p-10 bgc-white border-style-solid border-color-pidgey border-1 p-2 f-Ubuntu-B fsp-15 lh-sm">
                    <div className="f-Ubuntu-R fsp-14 ptp-0 psp-0 pep-10 text-start">Responsables:</div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="text-start flex-grow-1 lhp-35 min-hp-110 f-Ubuntu-R " />
                  </div>
                </div>
              </div>
              <div className="row p-0 m-0 w-100 justify-content-center align-items-center">
                <div className="col-2 p-1 m-0"></div>
                <div className="col-2 p-1 m-0"><div className="rounded-p-10 bgc-azuka p-2 f-Ubuntu-B fsp-14 lh-sm color-android18">Área de materiales</div></div>
                <div className="col-4 p-1 m-0">
                  <div className="rounded-p-10 bgc-white border-style-solid border-color-android18 border-1 p-2 f-Ubuntu-B fsp-15 lh-sm">
                    <div className="f-Ubuntu-R fsp-14 ptp-0 psp-0 pep-10 text-start">Tareas:</div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="text-start flex-grow-1 lhp-35 min-hp-110 f-Ubuntu-R " />
                  </div>
                </div>
                <div className="col-4 p-1 m-0">
                  <div className="rounded-p-10 bgc-white border-style-solid border-color-android18 border-1 p-2 f-Ubuntu-B fsp-15 lh-sm">
                    <div className="f-Ubuntu-R fsp-14 ptp-0 psp-0 pep-10 text-start">Responsables:</div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="text-start flex-grow-1 lhp-35 min-hp-110 f-Ubuntu-R " />
                  </div>
                </div>
              </div>
              <div className="row p-0 m-0 w-100 justify-content-center align-items-center">
                <div className="col-2 p-1 m-0"><div className="rounded-p-10 bgc-sektor p-2 f-Ubuntu-B fsp-14 lh-sm text-white">EQUIPO</div></div>
                <div className="col-2 p-1 m-0"><div className="rounded-p-10 bgc-piccolo p-2 f-Ubuntu-B fsp-14 lh-sm color-bulma">Área de seguridad</div></div>
                <div className="col-4 p-1 m-0">
                  <div className="rounded-p-10 bgc-white border-style-solid border-color-bulma border-1 p-2 f-Ubuntu-B fsp-15 lh-sm">
                    <div className="f-Ubuntu-R fsp-14 ptp-0 psp-0 pep-10 text-start">Tareas:</div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="text-start flex-grow-1 lhp-35 min-hp-110 f-Ubuntu-R " />
                  </div>
                </div>
                <div className="col-4 p-1 m-0">
                  <div className="rounded-p-10 bgc-white border-style-solid border-color-bulma border-1 p-2 f-Ubuntu-B fsp-15 lh-sm">
                    <div className="f-Ubuntu-R fsp-14 ptp-0 psp-0 pep-10 text-start">Responsables:</div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="text-start flex-grow-1 lhp-35 min-hp-110 f-Ubuntu-R " />
                  </div>
                </div>
              </div>
              <div className="row p-0 m-0 w-100 justify-content-center align-items-center">
                <div className="col-2 p-1 m-0"></div>
                <div className="col-2 p-1 m-0"><div className="rounded-p-10 bgc-bobafett p-2 f-Ubuntu-B fsp-14 lh-sm color-saitama">Área de mecánica</div></div>
                <div className="col-4 p-1 m-0">
                  <div className="rounded-p-10 bgc-white border-style-solid border-color-saitama border-1 p-2 f-Ubuntu-B fsp-15 lh-sm">
                    <div className="f-Ubuntu-R fsp-14 ptp-0 psp-0 pep-10 text-start">Tareas:</div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="text-start flex-grow-1 lhp-35 min-hp-110 f-Ubuntu-R " />
                  </div>
                </div>
                <div className="col-4 p-1 m-0">
                  <div className="rounded-p-10 bgc-white border-style-solid border-color-saitama border-1 p-2 f-Ubuntu-B fsp-15 lh-sm">
                    <div className="f-Ubuntu-R fsp-14 ptp-0 psp-0 pep-10 text-start">Responsables:</div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="text-start flex-grow-1 lhp-35 min-hp-110 f-Ubuntu-R " />
                  </div>
                </div>
              </div>
              <div className="row p-0 m-0 w-100 justify-content-center align-items-center">
                <div className="col-2 p-1 m-0"></div>
                <div className="col-2 p-1 m-0"><div className="rounded-p-10 bgc-kokomi p-2 f-Ubuntu-B fsp-14 lh-sm color-pikachu text-start">Otra:<InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="text-start flex-grow-1 lhp-35 min-hp-35" /></div></div>
                <div className="col-4 p-1 m-0">
                  <div className="rounded-p-10 bgc-white border-style-solid border-color-pikachu border-1 p-2 f-Ubuntu-B fsp-15 lh-sm">
                    <div className="f-Ubuntu-R fsp-14 ptp-0 psp-0 pep-10 text-start">Tareas:</div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="text-start flex-grow-1 lhp-35 min-hp-110 f-Ubuntu-R " />
                  </div>
                </div>
                <div className="col-4 p-1 m-0">
                  <div className="rounded-p-10 bgc-white border-style-solid border-color-pikachu border-1 p-2 f-Ubuntu-B fsp-15 lh-sm">
                    <div className="f-Ubuntu-R fsp-14 ptp-0 psp-0 pep-10 text-start">Responsables:</div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="text-start flex-grow-1 lhp-35 min-hp-110 f-Ubuntu-R " />
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

export default Page048;
