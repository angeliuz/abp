import React from "react";
import ModalVideo from "../components/ModalVideo";
import ModalBook from "../components/ModalBook";
import InputBox from "../components/InputBox";

import "./page_007.css";

function Page007(props) {

  const pagina = "007";
  var indexInput = 0;
  const etapa = "1"
  const background = "bgc-goten";
  const color = "color-goten";
  const bgc_cajas = "bgc-bobafett";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className={"cabecera-v2 d-flex flex-column " + background}>
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className={"caja wp-150 text-center fsp-24 f-IntroRustG-Base " + color}>SESIÓN 1</div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">¡Tenemos un desafío!</div>
            </div>

          </div>
          {/* END CABECERA VERSIÓN 2 */}
          <div className="ptp-50 container-titulo-global mbp-0">
            <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
              Conociendo el desafío
            </div>
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                1
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Veo el video, leo y comprendo.
              </div>
              <ModalVideo id={"p" + pagina + "_video" + (indexInput += 1)} image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" />
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>
          <div className="d-flex msp-60 mep-60 mtp-20 mbp-10">
            <div className="row p-0 m-0">
              <div className="col-sm-12 col-md-3 position-relative"></div>
              <div class="cb-paper position-relative">
                <div className="position-absolute top-100 start-100 translate-middle msp--70 mtp-0 visible-768 zindex-10"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-80" alt="" /></div>
                <div class="cb-paper-content f-Ubuntu-L fsp-13 text-start">
                  <img src="images/page_007/img_002.png" class="cb-carta" alt="" />
                  <img src="images/page_007/img_001.png" class="cb-lapiz" alt="" />
                  <p>Queridos estudiantes,</p>
                  <p>En una escuela nos reunimos muchas personas: estudiantes, profesores, auxiliares,
                    apoderados... Por lo mismo, ¡qué importante es cuidar la convivencia entre todos! Para trabajar
                    en torno a la buena convivencia, les tengo un desafío muy importante:
                    ¡Crear un álbum que promueva la buena convivencia!</p>

                  <p>Este álbum nos ayudará a reconocer los valores y actitudes necesarios
                    para lograr una buena convivencia escolar, identificar conflictos al
                    interior de su curso y proponer soluciones, además de algo muy importante:
                    conocerse entre todos, para así valorar cómo cada uno aporta al curso
                    desde sus aspectos positivos, sus diferencias, sus intereses y sus gustos.</p>

                  <p>¿Te animas a participar de este desafío? ¡Lo pasaremos muy bien
                    haciendo un conjunto de trabajos y conociendo mejor a otras personas!</p>

                  <p>Estaremos esperando tu respuesta. ¡Nos vemos!</p>
                </div>
              </div>

              <div className="d-flex psp-20">
                {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
                <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                  2
                </div>
                <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                  Completo.
                </div>
              </div>

              {/* BEGIN EJERCICIO 2 */}
              <div className="row d-flex mx-auto f-Ubuntu-R fsp-15 mbp-70 position-relative justify-content-between">
                <div className="position-absolute top-50 start-50 translate-middle msp-0 mtp-25 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_005.svg"} className="wp-60" alt="" /></div>
                <div className="col-sm-12 col-md-6">
                  <div className="text-center w-100 border-1 border-style-solid border-color-palpatine rounded-p-10">
                    <div className="rounded-set-6  hp-60 pep-20 psp-20 ptp-10 pbp-10 bgc-palpatine color-white fw-700 d-flex justify-content-center align-items-center">
                      La convivencia escolar es:
                    </div>
                    <div className="psp-15 pep-15">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170" />
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div className="text-center w-100 border-1 border-style-solid border-color-ken rounded-p-10">
                    <div className="pep-25 psp-25 rounded-set-6 hp-60 ptp-10 pbp-10 bgc-ken color-white fw-700 d-flex justify-content-center align-items-center">
                      Una buena convivencia escolar nos ayuda a:
                    </div>
                    <div className="psp-15 pep-15">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170" />
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
          <div className="row w-100 position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>
            <div className="col-7 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_motivacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
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
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
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
          {/* END PIE DE PAGINA */}

        </div>
      </div>
    </div>
  );
}

export default Page007;
