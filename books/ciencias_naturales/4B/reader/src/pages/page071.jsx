import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";

import "./page_071.css";

function Page071(props) {

  const pagina = "071";
  var indexInput = 0;
  const etapa = "6"
  const background = "bgc-pikachu";
  const color = "color-pikachu";
  const borderColor = "border-color-pikachu"
  const borderColorTable = "border-color-kokomi"
  const bgc_cajas = "bgc-kokomi";
  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v2 bgc-pikachu d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className="caja-seccion wp-160 hp-60 d-flex justify-content-center ptp-10 mtp-5 color-pikachu fsp-24 f-IntroRustG-Base">SESIÓN 15</div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">¡Presentamos las brigadas!</div>
            </div>
            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-90">

            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-50 container-titulo-global mbp-0">
            <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
              Respuesta a la brigadista
            </div>
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                1
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Veo el video, leo el correo y respondo.
              </div>
              <ModalVideo
                                            id={"p" + pagina + "_video" + (indexInput += 1)}
                                            linkVideo="682622752"
                                            tituloVideo="Brigadas al rescate III"
                                            tipoVideo="vimeo"
                                            image={"images/generales/play.svg"}
                                            colorUnidad={background}
                                            clasesImagen="cambio hp-40 mtp-10"
                                            className="p-0 px-1"
                                        />
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>


          <div className="cb-contenedor-mail-p71">
            <div className="cb-invitacion-p71 psp-35 f-Ubuntu-R fsp-18 fw-700 ptp-5">¡Felicitaciones!</div>
            <div className="cb-datos-mail pep-15 psp-10 ptp-10 pbp-10">
              <div className="d-flex justify-content-between mbp-5">
                <div><img src="images/page_071/img_006.png" className="cb-computador-carta psp-30" alt=""></img></div>
                <div className="cb-datos-1-p71 msp-10 align-items-center d-flex">
                  <div className="psp-10 f-Ubuntu-l fsp-16"> <span className="fw-700"> Macarena </span> macarena@brigadistas.cl <br /> Para Estudiantes 4° básico </div>
                </div>
              </div>
            </div>

            <div className="cb-texto-mail-p71 mbp-90">
              <div class="cb-carta-content-p71 f-Ubuntu-L text-start">
                <img src="images/page_071/img_007.png" className="cb-favorito-carta-p71" alt=""></img>
                <img src="images/page_071/img_004.png" className="cb-celu-carta-p71" alt=""></img>
                <p className="f-Ubuntu-R fw-700"> Estimados estudiantes:</p>
                <p>Reciban de mi parte un cariñoso saludo y mis felicitaciones por el trabajo que
                  han realizado. Como representante de la brigada comunal les transmito el
                  orgullo que siente nuestro equipo por el gran compromiso que han mostrado
                  y lo contentos que estamos al ver cómo se han organizado.</p>

                <p>Ahora se encuentran en la recta final y solo falta que todos se enteren de
                  la hermosa labor que desempeñarán. Ahora que han completado el desafío
                  pueden sentirse felices y orgullosos de su trabajo. </p>

                <p>No olviden nunca su misión como brigadistas y lo importante que ha sido
                  trabajar colaborativamente. ¡La seguridad es tarea de todos!<br /></p>
                <p className="justify-content-end d-flex">Atte. Macarena, brigadista comunal.</p>
              </div>
            </div>
          </div>
          <div className="cb-parte2-p71 bgc-ganyu ptp-20 pep-15 psp-25 mbp-80 text-start f-Ubuntu-L fsp-15 position-relative">
            <img src="images/page_071/img_005.png" className="cb-ficha-p71" alt=""></img>
            <p> Explico cómo me siento después de leer el mensaje de Macarena:  </p>
            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-270" />
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
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_planificacion.svg" className="oculto" alt="" />
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
            <div className="col-7 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_difusion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
              <div className="w-100 hp-15 bgc-leono rounded-caja-end"></div>
              <div className="w-100 hp-25 bgc-pikachu"></div>
            </div>
          </div>


        </div>
      </div>
    </div>

  );
}

export default Page071;
