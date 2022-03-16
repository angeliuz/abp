import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";


import "./page_017.css";

function Page017(props) {

  const pagina = "017";
  var indexInput = 0;

  const etapa = "2"
  const background = "bgc-bulma";
  const color = "color-bulma";
  const borderColor = "border-color-bulma"
  const bgc_cajas = "bgc-draco";



  return (
  
 
  <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          <div className={"cabecera-v1 hp-80 " + background}>
          </div>

          <div className="ptp-30 container-titulo-global mbp-0">
            <div className="d-flex psp-20">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_001.svg"} alt="" />
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                4
              </div>
              <div className="f-Ubuntu-R col-9 fsp-16 ptp-18 psp-10 pep-10 text-start">
                Leo las descripciones y distribuyo los roles con mi grupo. Luego, escribo el nombre de la persona que asumirá cada rol.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={"p" + pagina + "_video" + (indexInput += 1)} image={"images/page_" + pagina + "/img_001.svg"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="psp-60 pep-60 ptp-20">
            <div className="d-flex flex-wrap justify-content-around position-relative">

              <div className="ptp-20 pbp-20 psp-20 pep-20">
                <div className="mxwp-300 hp-220 border-style-solid border-2 rounded-p-5 bgc-itto psp-20 pep-20 pbp-20">
                  <div className="f-colby-bold color-soldados py-3">Coordinación</div>
                  <div className="f-Ubuntu-L pbp-10">Organiza el trabajo del equipo. Da el turno de palabra y procura que todos participen.</div>
                  <div className="bgc-white p-1 rounded-p-5"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" /></div>
                </div>
              </div>

              <div className="ptp-20 pbp-20 psp-20 pep-20 msp-a mep-a">
                <div className="mxwp-300 hp-220 border-style-solid border-2 rounded-p-5 bgc-draco psp-20 pep-20 pbp-20">
                  <div className="f-colby-bold color-bulma py-3">Supervisión</div>
                  <div className="f-Ubuntu-L pbp-10">Se asegura de que el equipo siga las instrucciones y respete el tiempo asignado.</div>
                  <div className="bgc-white p-1 rounded-p-5"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" /></div>
                </div>
              </div>
              <div className="visible-p17">
                <div className="position-absolute top-50 start-50 translate-middle msp-0 mtp-0 w-100 zindex-1"><img src={"images/page_" + pagina + "/img_005.png"} className="hp-140" alt="" /></div>
              </div>

              <div className="ptp-20-p17 pbp-20 psp-20 pep-20">
                <div className="mxwp-300 hp-220 border-style-solid border-2 rounded-p-5 bgc-chitara psp-20 pep-20 pbp-20">
                  <div className="f-colby-bold color-android18 py-3">Relaciones públicas</div>
                  <div className="f-Ubuntu-L pbp-10">Se comunica con el profesor o con otros equipos para pedir ayuda.</div>
                  <div className="bgc-white p-1 rounded-p-5"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" /></div>
                </div>
              </div>

              <div className="ptp-20-p17 pbp-20 psp-20 pep-20">
                <div className="mxwp-300 hp-220 border-style-solid border-2 rounded-p-5 bgc-pantro psp-20 pep-20 pbp-20">
                  <div className="f-colby-bold color-pidgey py-3">Intendencia</div>
                  <div className="f-Ubuntu-L pbp-10">Se asegura de que el equipo consiga los materiales necesarios y mantenga su espacio limpio y ordenado.</div>
                  <div className="bgc-white p-1 rounded-p-5"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" /></div>
                </div>
              </div>

            </div>
          </div>

          <div className="ptp-30 container-titulo-global mbp-0">
            <div className="d-flex psp-20">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_001.svg"} alt="" />
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                5
              </div>
              <div className="f-Ubuntu-R col-9 fsp-16 ptp-18 psp-10 pep-10 text-start">
                Registro tres acciones o tareas específicas que tendré que realizar para desempeñar de buena manera el rol que asumiré.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={"p" + pagina + "_video" + (indexInput += 1)} image={"images/page_" + pagina + "/img_001.svg"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="psp-60 pep-60 ptp-20 ">
            <div className="w-100 bgc-jaga border-style-solid border-1 border-color-goku p-2 position-relative sombra-3 ">
              <div className="d-flex ptp-10 pbp-10 pep-30">
                <div className="psp-20 pep-20 ptp-10"><div className="punto-p17 bgc-bulma "></div></div>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 w-90 min-hp-35" />
              </div>
              <div className="d-flex ptp-10 pbp-10 pep-30">
                <div className="psp-20 pep-20 ptp-10"><div className="punto-p17 bgc-bulma "></div></div>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 w-90 min-hp-35" />
              </div>
              <div className="d-flex ptp-10 pbp-10 pep-30">
                <div className="psp-20 pep-20 ptp-10"><div className="punto-p17 bgc-bulma "></div></div>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 w-90 min-hp-35" />
              </div>
              <div className="position-absolute top-0 start-100 translate-middle msp-3 mtp-30 zindex-1"><img src={"images/page_" + pagina + "/img_006.svg"} className="wp-60" alt="" /></div>
              <div className="pbp-100"></div>
            </div>
          </div>

          {/* PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
              ABP &copy; SM
            </div>
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>
          <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end marcador-etapa" style={{ bottom: 0 }}>

            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-7 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_planificacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
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

export default Page017;
