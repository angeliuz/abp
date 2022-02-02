import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import ModalBook from "../components/ModalBook";

import "./page_015.css";
import { isIndexedDBAvailable } from "@firebase/util";

function Page015(props) {

  const pagina = "015";
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

          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className={"cabecera-v2 d-flex flex-column " + background}>
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className={"caja-seccion wp-160 hp-70 text-center fsp-24 f-IntroRustG-Base color-dark"}>SESIÓN 3</div>
              <div className="d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">¡Este es nuestro plan!</div>
            </div>
            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-95">
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Mis objetivos en <br /> esta sesión son:
              </div>
              <div className="p-0 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Descubrir las tareas del<br />proyecto y reflexionar.
              </div>
              <div className="psp-5 pep-5 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_2.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Asignar roles para el<br />trabajo en grupo.
              </div>
              <div className="p-0 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="psp-5 pep-5 ptp-10 pbp-10 position-relative align-self-center f-colby-compres-bold fsp-17 lh-sm text-center color-dark">
                <div className="position-absolute top-0 start-0 w-100 h-100 msp--5 mtp--5">
                  <img src="images/cabecera/caja_blanca.png" width="105%" height="105%" alt="" />
                </div>
                <div className="position-relative">
                  Elaborar nuestro<br />plan de trabajo
                </div>
              </div>
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-20 container-titulo-global mbp-0">

            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                1
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Comprendo las tareas que llevaremos a cabo y opino.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="psp-60 pep-60 ptp-20">
            <div className="bgc-pantro position-relative psp-20 ptp-20 pbp-40">

              <div className="d-flex justify-content-center align-items-center position-relative pep-60">
                <div className="bloque-p15 bgc-bulma text-center py-2 f-Ubuntu-M color-white rounded-p-5 pep-10">Tarea A</div>
                <div className="wp-35"></div>
                <div className="w-100 bgc-white psp-40 pep-10 py-2 f-Ubuntu-L text-start">
                  Organizaremos lo que sabemos sobre derechos fundamentales y obras de arte visual y descubriremos qué más necesitamos saber.
                  <br />Completaremos un plan de proyecto.
                </div>
                <div className="position-absolute top-50 start-0 translate-middle msp-135 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_005.svg"} className="wp-60" alt="" /></div>
              </div>

              <div className="ptp-20"></div>

              <div className="d-flex justify-content-center align-items-center position-relative pep-60">
                <div className="bloque-p15 bgc-android18 text-center py-2 f-Ubuntu-M color-white rounded-p-5 pep-10">Tarea B</div>
                <div className="wp-35"></div>
                <div className="w-100 bgc-white psp-40 pep-10 py-2 f-Ubuntu-L text-start">
                  Investigaremos acerca de los derechos fundamentales y definiremos lo que deseamos expresar en nuestra obra artística.
                </div>
                <div className="position-absolute top-50 start-0 translate-middle msp-135 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_005.svg"} className="wp-60" alt="" /></div>
              </div>

              <div className="ptp-20"></div>

              <div className="d-flex justify-content-center align-items-center position-relative pep-60">
                <div className="bloque-p15 bgc-pidgey text-center py-2 f-Ubuntu-M color-white rounded-p-5 pep-10">Tarea C</div>
                <div className="wp-35"></div>
                <div className="w-100 bgc-white psp-40 pep-10 py-2 f-Ubuntu-L text-start">
                  Diseñaremos y explicaremos la obra de arte que vamos a presentar en la exposición.
                </div>
                <div className="position-absolute top-50 start-0 translate-middle msp-135 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_005.svg"} className="wp-60" alt="" /></div>
              </div>

              <div className="ptp-20"></div>

              <div className="d-flex justify-content-center align-items-center position-relative pep-60">
                <div className="bloque-p15 bgc-saitama text-center py-2 f-Ubuntu-M color-white rounded-p-5 pep-10">Tarea D</div>
                <div className="wp-35"></div>
                <div className="w-100 bgc-white psp-40 pep-10 py-2 f-Ubuntu-L text-start">
                  Elaboraremos la obra de arte. Estableceremos las características de la exposición y definiremos las responsabilidades y tareas para llevarla a cabo.
                </div>
                <div className="position-absolute top-50 start-0 translate-middle msp-135 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_005.svg"} className="wp-60" alt="" /></div>
              </div>

              <div className="ptp-20"></div>

              <div className="d-flex justify-content-center align-items-center position-relative pep-60">
                <div className="bloque-p15 bgc-pikachu text-center py-2 f-Ubuntu-M color-white rounded-p-5 pep-10">Tarea E</div>
                <div className="wp-35"></div>
                <div className="w-100 bgc-white psp-40 pep-10 py-2 f-Ubuntu-L text-start">
                  Montaremos la exposición con las obras de arte que hicieron los diferentes grupos.
                </div>
                <div className="position-absolute top-50 start-0 translate-middle msp-135 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_005.svg"} className="wp-60" alt="" /></div>
              </div>

              <div className="pbp-40"></div>
              <div className="position-absolute top-0 start-100 translate-middle msp-20 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-60" alt="" /></div>
              <div className="position-absolute top-100 start-0 translate-middle msp--20 mtp--40 zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-40" alt="" /></div>
            </div>
          </div>

          <div className="psp-100 pep-60 ptp-20 pbp-120">
            <div className="border-style-solid border-1 bgc-ryu p-2 position-relative sombra-1 ">
              <div className="d-flex ptp-20 psp-20 pep-10">
                <div className="f-Ubuntu-L fep-20 mtp-5">La tarea que me parece más interesante es</div>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-25" />
              </div>
              <div className="d-flex psp-20 pep-10">
                <div className="f-Ubuntu-L fep-20 mtp-5">porque</div>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-25" />
              </div>
              <div className="d-flex psp-20 pep-10">
                <div className="f-Ubuntu-L fep-20 mtp-5">Creo que la tarea más difícil será</div>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-25" />
              </div>
              <div className="d-flex psp-20 pep-10 pbp-20">
                <div className="f-Ubuntu-L fep-20 mtp-5">porque</div>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-25" />
              </div>
              <div className="position-absolute top-0 start-100 translate-middle msp--30 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/clip.svg"} className="wp-40" alt="" /></div>
              <div className="position-absolute top-0 start-100 translate-middle msp--80 mtp--50 zindex-1"><img src={"images/page_" + pagina + "/img_011.png"} className="wp-90" alt="" /></div>
              <div className="position-absolute top-100 start-0 translate-middle msp--30 mtp--40 zindex-1"><img src={"images/page_" + pagina + "/img_012.png"} className="wp-90" alt="" /></div>
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


export default Page015;
