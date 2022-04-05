import React from "react";
import ModalVideo from "../components/ModalVideo";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_067.css";

function Page067(props) {

  const pagina = "067";
  var indexInput = 0;
  const etapa = "6"
  const background = "bgc-pikachu";
  const color = "color-pikachu";
  const borderColor = "border-color-pikachu"
  const borderColorTabla = "border-color-kokomi"
  const bgc_cajas = "bgc-kokomi";
  const colorSesion = "color-pikachu";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className={"cabecera-v2 d-flex flex-column " + background}>
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className={"caja-seccion wp-160 hp-60 d-flex justify-content-center ptp-10 mtp-5 fsp-24 f-IntroRustG-Base  " + colorSesion}>SESIÓN 15</div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Es hora de comprometernos</div>
            </div>

          </div>
          {/* END CABECERA VERSIÓN 2 */}
          <div className="d-flex msp-60 mep-60 mtp-20 mbp-10">
            <div className="row p-0 m-0">
              <div className="col-sm-12 col-md-3 position-relative"></div>
              <div className=" mtp-20 mbp-0">
    <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
    Una nueva invitación
    </div>
    <div className="d-flex psp-20">  
        <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
            1
        </div>
        <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start mbp-30">
        Veo el video y leo la invitación. Luego, subrayo las principales ideas.
        </div>
        <ModalVideo
        id={"p" + pagina + "_video" + (indexInput += 1)}
        linkVideo="662953821"
        tituloVideo="Todos nos cuidamos III"
        tipoVideo="vimeo"
        image={"images/generales/play.svg"}
        colorUnidad={background}
        clasesImagen="cambio hp-40 mtp-10"
        className="p-0 px-1"
    />
   
    </div>
</div>
              <div class="cb-contenedor-mail">
                <div class="cb-datos-mail pep-15 psp-10 ptp-10 pbp-10">
                  <div class="d-flex mbp-5 text-start">
                    <div class="cb-datos-a psp-10 f-Ubuntu-R fsp-16 mep-10">De:</div>
                    <div class="cb-datos-1 psp-10 f-Ubuntu-R fsp-16">direccion@mail.com</div>
                  </div>
                  <div class="d-flex mbp-5 text-start">
                    <div class="cb-datos-a psp-10 mep-10">Para:</div>
                    <div class="cb-datos-1 psp-10 f-Ubuntu-R fsp-16">estudiantescuartobasico@correo.cl</div>
                  </div>
                  <div class="d-flex text-start">
                    <div class="cb-datos-a psp-10 f-Ubuntu-R fsp-16 mep-10">Asunto:</div>
                    <div class="cb-datos-1 psp-10 f-Ubuntu-R fsp-16"> Felicitaciones</div>
                  </div>
                </div>
                <div class=" position-relative">
                  <div class="cb-carta-content f-Ubuntu-L text-start">
                    <div className="position-absolute top-100 start-100 translate-middle msp--10 mtp--20 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-60" alt="" /></div>
                    <span>Querido Cuarto Básico:</span>
                    <p>Hemos trabajado mucho en este reto. En nuestro camino hemos
                      aprendido a trabajar en equipo. También hemos hecho nuestra
                      propia investigación y hemos aprendido qué significa la buena
                      convivencia escolar. Entrevistamos a algunos compañeros y
                      elaboramos fichas con su información para conocernos mejor.</p>

                    <p>Después de eso, nos decidimos a crear un mejor ambiente de
                      convivencia dialogando como curso. Nuestras reflexiones en
                      cada grupo nos ayudaron a llegar a un acuerdo entre todos.</p>

                    <p>Ahora, para finalizar, creamos un álbum que retrata a nuestros
                      compañeros y valora la diversidad en nuestro curso. ¡Es el momento
                      de compartirlo con el resto del curso y celebrar la diversidad!</p>

                    <span>¡Los esperamos!</span>
                  </div>
                </div>
              </div>
              <div className="ptp-10 mbp-0">
                <div className="d-flex psp-20">
                  {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
                  <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                    2
                  </div>
                  <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                    Completo.
                  </div>
                </div>
              </div>
              {/* BEGIN EJERCICIO 2 */}
              <div className="row mx-auto d-flex f-Ubuntu-R fsp-15 mbp-70 ">
                <div className="position-relative">
                  <div className="position-absolute top-50 start-50 translate-middle msp-0 mtp-140 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_005.svg"} className="wp-60" alt="" /></div>
                </div>

                <div className="col-sm-12 col-md-6">
                  <div className="text-center w-100 border-1 border-style-solid border-color-vegeta rounded-p-10">
                    <div className="rounded-set-6  hp-60 pep-20 psp-20 ptp-10 pbp-10 bgc-vegeta d-flex justify-content-center align-items-center">
                      ¿Cómo me siento frente <br /> a esta invitación?
                    </div>
                    <div className="psp-15 pep-15">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170" />
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div className="text-center w-100 border-1 border-style-solid border-color-marcianos rounded-p-10">
                    <div className="rounded-set-6 hp-60 ptp-10 pbp-10 bgc-marcianos d-flex justify-content-center align-items-center">
                      ¿Qué expectativas tengo de esta jornada  dedicada a la buena convivencia?
                    </div>
                    <div className="psp-15 pep-15">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170" />
                    </div>
                  </div>
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
            <div className="col-7 col-sm-2 p-0 m-0 position-relative">
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

export default Page067;
