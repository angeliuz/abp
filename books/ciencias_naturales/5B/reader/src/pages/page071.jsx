import React from "react";
import ModalVideo from "../components/ModalVideo";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import "./page_071.css";

function Page071(props) {
  const pagina = "071";
  var indexInput = 0;
  const etapa = "6"
  const background = "bgc-pikachu";
  const color = "color-pikachu";
  const borderColor = "border-color-pikachu"
  const borderColorTabla = "border-color-kokomi"
  const bgc_cajas = "bgc-kokomi";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>

          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className={"cabecera-v2 d-flex flex-column " + background}>
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className={"caja-seccion wp-160 hp-70 text-center fsp-24 f-IntroRustG-Base color-dark"}>SESIÓN 19</div>
              <div className="d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Difundimos nuestra campaña</div>
            </div>
            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-95">
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Mis objetivos en  esta sesión son:
              </div>
              <div className="p-0 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Leer y responder el  mail de la ONG de la salud
              </div>
              <div className="psp-5 pep-5 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_2.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Chequear una lista de control  y distribuir las tareas para llevar a cabo la campaña.
              </div>
              <div className="psp-5 pep-5 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Realizar la campaña para dar a  conocer la propuesta en el Día de la Alimentación Saludable.
              </div>
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-30 container-titulo-global mbp-0">
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                1
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Veo el video, leo el mail y luego respondo
              </div>
              {/* <img src={"images/page_"+pagina+"/img_001.svg"} className="wp-100" alt=""/> */}
              <ModalVideo
                id={"p" + pagina + "_video" + (indexInput += 1)}
                linkVideo="682623207"
                tituloVideo="¡Arcoíris en tu plato! III"
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
          <div className="d-flex msp-60 mep-60 mbp-30 ">
            <div className="row w-100 p-0 m-0">
              <div className="cb-contenedor-mail position-relative">
                <div className="position-absolute top-0 start-100 translate-middle msp--40 mtp--20 zindex-10"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-50" alt="" /></div>
                <div className="cb-datos-mail psp-10 ptp-10 pbp-10">
                  <div className="d-flex mbp-5 text-start">
                    <div className="cb-datos-a psp-10 f-Ubuntu-R fsp-16 mep-10">De:</div>
                    <div className="cb-datos-1 psp-10 f-Ubuntu-R fsp-16 text-start">salud@correo.cl</div>
                  </div>
                  <div className="d-flex mbp-5 text-start">
                    <div className="cb-datos-a psp-10 f-Ubuntu-R fsp-16 mep-10">Para:</div>
                    <div className="cb-datos-1 psp-10 f-Ubuntu-R fsp-16 text-start">estudiantes_5b@correo.cl</div>
                  </div>
                  <div className="d-flex text-start">
                    <div className="cb-datos-a psp-10 f-Ubuntu-R fsp-16 mep-10">Asunto:</div>
                    <div className="cb-datos-1 psp-10 f-Ubuntu-R fsp-16 text-start"> ¡Llegó el día!</div>
                  </div>
                </div>
                <div className="cb-texto-mail position-relative">
                  <div className="cb-carta-content f-Ubuntu-L text-start">
                    <div className="position-absolute top-100 start-100 translate-middle msp-0 mtp--50 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-65" alt="" /></div>
                    {/* <div className="position-absolute top-100 start-0 translate-middle msp-60 mtp--10 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-120" alt="" /></div> */}
                    <p>Estimados estudiantes:</p>
                    <p>Han llegado al final de este proyecto. Ahora solo les queda presentar,
                      a toda la comunidad educativa, la campaña para dar a conocer su propuesta
                      de alimentación saludable para el colegio y celebrar el primer Día de la
                      Alimentación Saludable.</p>

                    <p>Sé que el trabajo ha sido exigente, y que han debido enfrentar
                      diversos desafíos y obstáculos: no obstante, han logrado superarlos con éxito.</p>

                    <p>No olviden disfrutar de esta etapa final!</p>

                    <p>Saludos afectuosos. ONG de la salud.
                    </p>
                  </div>
                </div>
              </div>
              <div className="cb-contenedor-mail position-relative mbp-190">
                <div className="position-absolute top-0 start-100 translate-middle msp--40 mtp--20 zindex-10"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-50" alt="" /></div>
                <div className="cb-datos-mail psp-10 ptp-10 pbp-10">
                  <div className="d-flex mbp-5 text-start">
                    <div className="cb-datos-a psp-10 f-Ubuntu-R fsp-16 mep-10">De:</div>
                    <div className="cb-datos-1 psp-10 f-Ubuntu-R fsp-16 text-start">estudiantes_5b@correo.cl</div>
                  </div>
                  <div className="d-flex mbp-5 text-start">
                    <div className="cb-datos-a psp-10 f-Ubuntu-R fsp-16 mep-10">Para:</div>
                    <div className="cb-datos-1 psp-10 f-Ubuntu-R fsp-16 text-start">salud@correo.cl</div>
                  </div>
                  <div className="d-flex text-start">
                    <div className="cb-datos-a psp-10 f-Ubuntu-R fsp-16 mep-10">Asunto:</div>
                    <div className="cb-datos-1 psp-10 f-Ubuntu-R fsp-16 text-start"> RE: ¡Llegó el día!</div>
                  </div>
                </div>
                <div className="cb-texto-mail position-relative">
                  <div className="cb-carta-content f-Ubuntu-L text-start">
                    {/* <div className="position-absolute top-0 start-100 translate-middle msp-0 mtp-60 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-50" alt="" /></div> */}
                    <div className="position-absolute top-100 start-100 translate-middle msp--20 mtp--30 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-80" alt="" /></div>

                    <div className="psp-15 pep-15">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-300" />
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
          <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>

            <div className={etapa == 1 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
              <img src="images/rotulo_motivacion.svg" className={etapa == 1 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className={etapa == 2 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
              <img src="images/rotulo_planificacion.svg" className={etapa == 2 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className={etapa == 3 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
              <img src="images/rotulo_investigacion.svg" className={etapa == 3 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className={etapa == 4 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
              <img src="images/rotulo_experimentacion.svg" className={etapa == 4 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className={etapa == 5 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
              <img src="images/rotulo_creacion.svg" className={etapa == 5 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className={etapa == 6 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
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


export default Page071;
