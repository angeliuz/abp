import React from "react";
import InputBox from "../components/InputBox";

import "./page_015.css";

function Page015(props) {

  const pagina = "015";
  var indexInput = 0;

  return (

    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v2 bgc-bulma d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className="caja wp-150 text-center fsp-24 f-IntroRustG-Base">SESIÓN 3</div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">¡Este es nuestro plan!</div>
            </div>
            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-90">
              <div className="p-2 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Mis objetivos en <br /> esta sesión son:
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_007/img_001.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Planificar el orden de las<br /> secciones de la revista.
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_007/img_003.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Asignar roles para el<br /> trabajo en equipo.
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_007/img_001.svg" className="wp-40 arrow-global mbp-50" alt="" />
              </div>
              <div className="p-3 position-relative align-self-center f-colby-compres-bold fsp-17 lh-sm text-center color-dark">
                <div className="position-absolute top-0 start-0 w-100 h-100">
                  <img src="images/cabecera/caja_blanca.png" width="100%" height="100%" alt="" />
                </div>
                <div className="position-relative">
                  Elaborar nuestro <br />plan de trabajo.
                </div>
              </div>
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-10 psp-0">
            <div className="d-flex">
              <img className="hp-20 align-center mt-3 me-2 psp-50 mb-2" src="images/page_015/img_002.svg" alt="" />
              <div className="f-ccdigitaldelivery-bold fsp-35 color-bulma">1</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start">Leo la descripción de las secciones que tendrá la revista y el número de páginas para cada una. Luego, defino con mi grupo el orden que tendrán.</div>
              <img src="images/page_015/img_001.png" className="tf-lapiz cambio hp-80 text-end mtp-0 psp-10 pep-40" alt="" />

            </div>
          </div>

          <div className="d-flex flex-column mx-5 fsp-14 f-Ubuntu-R">
            <div className="d-flex contenedor-cajas-15 justify-content-center ptp-40 psp-30 pep-30">
              <div className="d-flex align-items-center justify-content-center caja-inicial position-relative justify-content-center rounded-p-10">
                Índice
                <div className="zindex-1 wp-200 position-absolute anillo-15-1">
                  <img src="images/page_015/img_005.svg" className="wp-50" alt="" />
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center  caja-medio rounded-p-10">
                Lista ordenada con la ubicación de los contenidos.
              </div>
              <div className="d-flex align-items-center justify-content-center caja-final rounded-p-10">
                Una página.
                <div className="zindex-1 wp-200 position-absolute anillo-15-2">
                  <img src="images/page_015/img_005.svg" className="wp-50" alt="" />
                </div>
              </div>
            </div>

          </div>
          <div className="d-flex flex-column mx-5 fsp-14 f-Ubuntu-R">
            <div className="d-flex contenedor-cajas-15 justify-content-center ptp-20 psp-30 pep-30">
              <div className="d-flex align-items-center justify-content-center caja-inicial position-relative justify-content-center rounded-p-10">
                Noticia
                <div className="zindex-1 wp-200 position-absolute anillo-15-1">
                  <img src="images/page_015/img_005.svg" className="wp-50" alt="" />
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center  caja-medio rounded-p-10">
                Relato que informa sobre una situación actual, verídica y de interés para la comunidad. Debe ser clara y precisa.
              </div>
              <div className="d-flex align-items-center justify-content-center caja-final rounded-p-10">
                Una página con dos noticias.
                <div className="zindex-1 wp-200 position-absolute anillo-15-2">
                  <img src="images/page_015/img_005.svg" className="wp-50" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column mx-5 fsp-14 f-Ubuntu-R">
            <div className="d-flex contenedor-cajas-15 justify-content-center ptp-20 psp-30 pep-30">
              <div className="d-flex align-items-center justify-content-center caja-inicial position-relative justify-content-center rounded-p-10">
                Portada
                <div className="zindex-1 wp-200 position-absolute anillo-15-1">
                  <img src="images/page_015/img_005.svg" className="wp-50" alt="" />
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center  caja-medio rounded-p-10">
                Presenta el nombre de la revista, los principales contenidos e imágenes representativas.
              </div>
              <div className="d-flex align-items-center justify-content-center caja-final rounded-p-10">
                Una página.
                <div className="zindex-1 wp-200 position-absolute anillo-15-2">
                  <img src="images/page_015/img_005.svg" className="wp-50" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column mx-5 fsp-14 f-Ubuntu-R">
            <div className="d-flex contenedor-cajas-15 justify-content-center ptp-20 psp-30 pep-30">
              <div className="d-flex align-items-center justify-content-center caja-inicial position-relative justify-content-center rounded-p-10">
                Entrevista
                <div className="zindex-1 wp-200 position-absolute anillo-15-1">
                  <img src="images/page_015/img_005.svg" className="wp-50" alt="" />
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center  caja-medio rounded-p-10">
                Diálogo estructurado entre una persona entrevistada y otra entrevistadora. Esta última orienta la conversación mediante preguntas.
              </div>
              <div className="d-flex align-items-center justify-content-center caja-final rounded-p-10">
                Dos entrevistas de dos páginas cada una.
                <div className="zindex-1 wp-200 position-absolute anillo-15-2">
                  <img src="images/page_015/img_005.svg" className="wp-50" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column mx-5 fsp-14 f-Ubuntu-R">
            <div className="d-flex contenedor-cajas-15 justify-content-center ptp-20 psp-30 pep-30">
              <div className="d-flex align-items-center justify-content-center caja-inicial position-relative justify-content-center rounded-p-10">
                Créditos
                <div className="zindex-1 wp-200 position-absolute anillo-15-1">
                  <img src="images/page_015/img_005.svg" className="wp-50" alt="" />
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center  caja-medio rounded-p-10">
                Información del equipo que participó en la elaboración de la revista.
              </div>
              <div className="d-flex align-items-center justify-content-center caja-final rounded-p-10">
                Una página.
                <div className="zindex-1 wp-200 position-absolute anillo-15-2">
                  <img src="images/page_015/img_005.svg" className="wp-50" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column mx-5 fsp-14 f-Ubuntu-R">
            <div className="d-flex contenedor-cajas-15 justify-content-center ptp-20 psp-30 pep-30">
              <div className="d-flex align-items-center justify-content-center caja-inicial position-relative justify-content-center rounded-p-10">
                Afiche
                <div className="zindex-1 wp-200 position-absolute anillo-15-1">
                  <img src="images/page_015/img_005.svg" className="wp-50" alt="" />
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center  caja-medio rounded-p-10">
                Texto con el cual se difunde una información o se promueve un producto o un servicio. Se compone de elementos escritos y visuales.
              </div>
              <div className="d-flex align-items-center justify-content-center caja-final rounded-p-10">
                Una página.
                <div className="zindex-1 wp-200 position-absolute anillo-15-2">
                  <img src="images/page_015/img_005.svg" className="wp-50" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column mx-5 fsp-14 f-Ubuntu-R">
            <div className="d-flex contenedor-cajas-15 justify-content-center ptp-20 psp-30 pep-30">
              <div className="d-flex align-items-center justify-content-center caja-inicial position-relative justify-content-center rounded-p-10">
                Editorial
                <div className="zindex-1 wp-200 position-absolute anillo-15-1">
                  <img src="images/page_015/img_005.svg" className="wp-50" alt="" />
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center  caja-medio rounded-p-10">
                Texto que plantea la postura del equipo que dirige la revista sobre un tema tratado en ella.
              </div>
              <div className="d-flex align-items-center justify-content-center caja-final rounded-p-10">
                Una página.
                <div className="zindex-1 wp-200 position-absolute anillo-15-2">
                  <img src="images/page_015/img_005.svg" className="wp-50" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column mx-5 fsp-14 f-Ubuntu-R mbp-70">
            <div className="d-flex contenedor-cajas-15 justify-content-center ptp-20 psp-30 pep-30">
              <div className="d-flex align-items-center justify-content-center caja-inicial position-relative justify-content-center rounded-p-10">
                Reportaje
                <div className="zindex-1 wp-200 position-absolute anillo-15-1">
                  <img src="images/page_015/img_005.svg" className="wp-50" alt="" />
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center  caja-medio rounded-p-10">
                Explica una situación de interés para la comunidad. Es más extenso que una noticia y entrega más detalles y antecedentes.
              </div>
              <div className="d-flex align-items-center justify-content-center caja-final rounded-p-10">
                Un reportaje de una página.
                <div className="zindex-1 wp-200 position-absolute anillo-15-2">
                  <img src="images/page_015/img_005.svg" className="wp-50" alt="" />
                </div>
              </div>
            </div>
          </div>



          {/* PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
              ABP &copy; SM
            </div>
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>
          <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>

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

export default Page015;
