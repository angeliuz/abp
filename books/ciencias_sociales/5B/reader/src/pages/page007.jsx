import React from "react";
import ModalVideo from "../components/ModalVideo";
import "./page_007.css";

function Page007(props) {

  const pagina = "007";
  const etapa = "1"
  const background = "bgc-goten";
  const color = "color-goten";
  const borderColor = "border-color-goten"
  const borderColorTabla = "border-color-genos"
  const bgc_cajas = "bgc-genos";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className={"cabecera-v2 " + background + " d-flex flex-column"}>
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className="caja-seccion wp-160 hp-70 text-center fsp-24 f-IntroRustG-Base">SESIÓN 1</div>
              <div className="d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Tenemos un desafío</div>
            </div>
            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-90">
              <div className="p-2 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Mis objetivos en <br /> esta sesión son:
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_007/img_001.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Averiguar en qué consiste<br /> el desafío.
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_007/img_003.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Comprender la <br /> importancia del desafío.
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_007/img_001.svg" className="wp-40 arrow-global" alt="" />
              </div>

              <div className="p-3 position-relative align-self-center f-colby-compres-bold fsp-17 lh-sm text-center color-dark">
                <div className="position-absolute top-0 start-0 w-100 h-100">
                  <img src="images/cabecera/caja_blanca.png" width="100%" height="100%" alt="" />
                </div>
                <div className="position-relative">
                  Comprometerme <br /> con el desafío.
                </div>
              </div>
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}


          <div className="ptp-10 psp-60 mbp-80 contenedor-pagina">
            <div className="d-flex">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-goten">1</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start">Veo el video, leo la carta y destaco las ideas principales.</div>
              <ModalVideo
                id={"p" + pagina + "_video" + (indexInput += 1)}
                linkVideo="641906431"
                tituloVideo="Reporteros en acción I"
                tipoVideo="vimeo"
                image={"images/generales/play.svg"}
                colorUnidad={background}
                clasesImagen="cambio hp-40 mtp-10"
                className="p-0 px-1"
              />
            </div>
            <div className="cb-paper">
              <div className="cb-paper-content f-Ubuntu-L text-start position-relative">
                <img src="images/page_007/img_002.png" className="cb-carta" alt="" />
                <img src="images/page_007/img_001.png" className="position-absolute top-100 start-0 translate-middle mtp--110 msp-30 visible-768" alt="" />
                <p className="text-start">Queridos estudiantes,</p>
                <p>Soy dirigente de una organización que promueve el respeto de los derechos de todas las personas en Chile.</p>

                <p>Junto con nuestro equipo, hemos impulsado numerosas iniciativas y reflexiones. A partir de ellas, aprendimos que es fundamental que todos los integrantes de la comunidad estén informados sobre los derechos y su situación actual.</p>

                <p>
                  Es por ello que decidimos proponer un desafío a estudiantes de todo el país. Los invitamos a crear y publicar una revista centrada en los derechos de las personas. En ella incluirán noticias y un reportaje sobre la actualidad, entrevistas a personas de su entorno y una campaña de
                  difusión. Además, plantearán su postura sobre el tema.
                </p>

                <p>El formato de la revista será digital e impreso, y es fundamental que la difundan en su comunidad escolar. De este modo, contribuirán a una sociedad más justa, consciente de sus logros y atenta a posibles mejoras.</p>

                <p>¡Quedamos atentos a su respuesta!</p>
                <p className="cb-paper-sign">
                  Se despide con cariño, <br /> Nibaldo.
                </p>
              </div>
            </div>
          </div>
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
        </div>
      </div>
    </div>
  );
}

export default Page007;
