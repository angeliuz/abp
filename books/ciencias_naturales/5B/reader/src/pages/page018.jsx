import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import ModalVideo from "../components/ModalVideo";
import ItemLista from "../components/ItemLista";
import Check from "../components/Check2";
import TerminosPareados1 from "../components/TerminosPareados1";

import "./page_018.css";

function Page018(props) {

  const pagina = "018";
  var indexInput = 0;
  const etapa = "2"
  const background = "bgc-bulma";
  const color = "color-bulma";
  const borderColor = "border-color-bulma"
  const borderColorTabla = "border-color-buzz"
  const bgc_cajas = "bgc-piccolo";


  return (

    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>

          {/* BEGIN CABECERA VERSIÓN 1 */}
          <div className={"cabecera-v1 hp-80 " + background}></div>
          {/* END CABECERA VERSIÓN 1 */}


          <div className="container-titulo-global mtp-20 mbp-0">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
                            xxx
                        </div> */}
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                3
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                <strong>¡Lo entiendo!</strong> Veo el video y asocio nuestras tareas con las etapas del proyecto.
              </div>
              {/* <img src={"images/page_"+pagina+"/img_00.svg"} className="wp-100" alt=""/> */}
              <ModalVideo
                id={"p" + pagina + "_video" + (indexInput += 1)}
                linkVideo="682623124"
                tituloVideo="¡Arcoíris en tu plato! II"
                tipoVideo="vimeo"
                image={"images/generales/play.svg"}
                colorUnidad={background}
                clasesImagen="cambio hp-40 mtp-10"
                className="p-0 px-1"
              />
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="d-flex w-100 mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0 position-absolute zindex-10">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">

                <TerminosPareados1
                  id={"svg_" + indexInput + "_" + pagina}
                  anchoSVG="550"
                  altoSVG="830"
                  totalLineas="5"
                  pointsLinea1="275,47 275,47"
                  pointsLinea2="275,168 275,168"
                  pointsLinea3="275,318 275,318"
                  pointsLinea4="275,468 275,468"
                  pointsLinea5="275,618 275,618"
                />

              </div>
            </div>
          </div>

          <div className="d-flex center-center mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 wp-550">
              <div className="col-6 p-0 m-0 position-relative d-flex center-center">
                <div className="row f-Ubuntu-R justify-content-center f-Ubuntu-R fsp-14 lh-sm p-0 m-0 w-100">

                  <div className="col-12 bgc-draco rounded-p-10 position-relative ptp-20 pbp-20 psp-10 pep-10 m-2">
                    <ItemLista colorBullet="bgc-dark" fontSize="fsp-15" fuente="f-Ubuntu-R" color="color-dark">Organizamos el plan de trabajo.</ItemLista>
                    <ItemLista colorBullet="bgc-dark" fontSize="fsp-15" fuente="f-Ubuntu-R" color="color-dark">Distribuimos tareas y roles.</ItemLista>
                    <div className="position-absolute translate-middle start-100 top-50 wp-20 hp-20 rounded-50 border-style-solid border-color-dark border-1 bgc-white"></div>
                  </div>
                  <div className="col-12 bgc-draco rounded-p-10 position-relative ptp-20 pbp-20 psp-10 pep-10 m-2">
                    <ItemLista colorBullet="bgc-dark" fontSize="fsp-15" fuente="f-Ubuntu-R" color="color-dark">Realizamos una encuesta entre nuestros compañeros.</ItemLista>
                    <ItemLista colorBullet="bgc-dark" fontSize="fsp-15" fuente="f-Ubuntu-R" color="color-dark">Elaboramos la propuesta de alternativas de alimentación saludable.</ItemLista>
                    <div className="position-absolute translate-middle start-100 top-50 wp-20 hp-20 rounded-50 border-style-solid border-color-dark border-1 bgc-white"></div>
                  </div>
                  <div className="col-12 bgc-draco rounded-p-10 position-relative ptp-20 pbp-20 psp-10 pep-10 m-2">
                    <ItemLista colorBullet="bgc-dark" fontSize="fsp-15" fuente="f-Ubuntu-R" color="color-dark">Difundimos la campaña para dar a conocer nuestra propuesta.</ItemLista>
                    <ItemLista colorBullet="bgc-dark" fontSize="fsp-15" fuente="f-Ubuntu-R" color="color-dark">Celebramos el primer Día de la Alimentación Saludable en el colegio.</ItemLista>
                    <div className="position-absolute translate-middle start-100 top-50 wp-20 hp-20 rounded-50 border-style-solid border-color-dark border-1 bgc-white"></div>
                  </div>
                  <div className="col-12 bgc-draco rounded-p-10 position-relative ptp-20 pbp-20 psp-10 pep-10 m-2">
                    <ItemLista colorBullet="bgc-dark" fontSize="fsp-15" fuente="f-Ubuntu-R" color="color-dark">Estudiamos sobre la alimentación saludable.</ItemLista>
                    <ItemLista colorBullet="bgc-dark" fontSize="fsp-15" fuente="f-Ubuntu-R" color="color-dark">Comprendemos los requerimientos nutricionales de la población.</ItemLista>
                    <div className="position-absolute translate-middle start-100 top-50 wp-20 hp-20 rounded-50 border-style-solid border-color-dark border-1 bgc-white"></div>
                  </div>
                  <div className="col-12 bgc-draco rounded-p-10 position-relative ptp-20 pbp-20 psp-10 pep-10 m-2">
                    <ItemLista colorBullet="bgc-dark" fontSize="fsp-15" fuente="f-Ubuntu-R" color="color-dark">Creamos una campaña para dar a conocer nuestra propuesta.</ItemLista>
                    <ItemLista colorBullet="bgc-dark" fontSize="fsp-15" fuente="f-Ubuntu-R" color="color-dark">Proponemos una fecha para celebrar el primer Día de la Alimentación Saludable.</ItemLista>
                    <div className="position-absolute translate-middle start-100 top-50 wp-20 hp-20 rounded-50 border-style-solid border-color-dark border-1 bgc-white"></div>
                  </div>

                </div>
              </div>
              <div className="col-3 p-0 m-0 position-relative hp-100"></div>
              <div className="col-3 p-0 m-0 position-relative d-flex justify-content-center align-items-center">
                <div className="row f-Ubuntu-R justify-content-center align-items-top f-Ubuntu-R fsp-13 lh-sm">

                  <div className="col-12 bgc-leono rounded-p-10 position-relative pp-20 mtp-40 mbp-40">
                    <p className="p-0 m-0">Difusión</p>
                    <div className="position-absolute translate-middle start-0 top-50 wp-20 hp-20 rounded-50 border-style-solid border-color-dark border-1 bgc-white"></div>
                  </div>
                  <div className="col-12 bgc-gohan rounded-p-10 position-relative pp-20 mtp-40 mbp-40">
                    <p className="p-0 m-0">Investigación</p>
                    <div className="position-absolute translate-middle start-0 top-50 wp-20 hp-20 rounded-50 border-style-solid border-color-dark border-1 bgc-white"></div>
                  </div>
                  <div className="col-12 bgc-buzz rounded-p-10 position-relative pp-20 mtp-40 mbp-40">
                    <p className="p-0 m-0">Planificación</p>
                    <div className="position-absolute translate-middle start-0 top-50 wp-20 hp-20 rounded-50 border-style-solid border-color-dark border-1 bgc-white"></div>
                  </div>
                  <div className="col-12 bgc-quigon rounded-p-10 position-relative pp-20 mtp-40 mbp-40">
                    <p className="p-0 m-0">Creación</p>
                    <div className="position-absolute translate-middle start-0 top-50 wp-20 hp-20 rounded-50 border-style-solid border-color-dark border-1 bgc-white"></div>
                  </div>
                  <div className="col-12 bgc-woody rounded-p-10 position-relative pp-20 mtp-40 mbp-40">
                    <p className="p-0 m-0">Experimentación</p>
                    <div className="position-absolute translate-middle start-0 top-50 wp-20 hp-20 rounded-50 border-style-solid border-color-dark border-1 bgc-white"></div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* <div className="d-flex center-center mtp-20 mbp-100 psp-0 pep-0 ptp-0 pbp-0">

            <div className="row wp-550 bgc-aqua">
              <div className="col-6 col-md-6">
                <div className="d-flex flex-column pbp-30">
                  <div className="psp-20 pep-20 ptp-20 pbp-20 f-Ubuntu-R fsp-14 w-90 position-relative bgc-draco rounded-p-10 min-hp-100 d-flex flex-column center-center text-start">
                    <ItemLista colorBullet="bgc-dark" fontSize="fsp-15" fuente="f-Ubuntu-R" color="color-dark">Organizamos el plan de trabajo.</ItemLista>
                    <ItemLista colorBullet="bgc-dark" fontSize="fsp-15" fuente="f-Ubuntu-R" color="color-dark">Distribuimos tareas y roles.</ItemLista>

                    <div className="position-absolute top-50 start-100 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-1 border-color-dark rounded-circle"></div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-6">
                <div className="d-flex flex-column justify-content-center ptp-30 pbp-30">
                  <div className="psp-20 pep-20 ptp-20 pbp-20 f-Ubuntu-R fsp-14 w-60 position-relative bgc-leono rounded-p-10 min-hp-50 d-flex center-center align-self-end text-center">
                    Difusión
                    <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-1 border-color-dark rounded-circle"></div>
                  </div>
                </div>

              </div>
              <div className="col-6 col-md-6">
                <div className="d-flex flex-column pbp-30">
                  <div className="psp-20 pep-20 ptp-20 pbp-20 f-Ubuntu-R fsp-14 w-90 position-relative bgc-draco rounded-p-10 min-hp-100 d-flex flex-column center-center text-start">
                    <ItemLista colorBullet="bgc-dark" fontSize="fsp-15" fuente="f-Ubuntu-R" color="color-dark">Realizamos una encuesta entre nuestros compañeros.</ItemLista>
                    <ItemLista colorBullet="bgc-dark" fontSize="fsp-15" fuente="f-Ubuntu-R" color="color-dark">Elaboramos la propuesta de alternativas de alimentación saludable.</ItemLista>
                    <div className="position-absolute top-50 start-100 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-1 border-color-dark rounded-circle"></div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-6">
                <div className="d-flex flex-column justify-content-center ptp-30 pbp-30">
                  <div className="psp-20 pep-20 ptp-20 pbp-20 f-Ubuntu-R fsp-14 w-60 position-relative bgc-gohan rounded-p-10 min-hp-50 d-flex center-center align-self-end text-center">
                    Investigación
                    <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-1 border-color-dark rounded-circle"></div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-6">
                <div className="d-flex flex-column pbp-30">
                  <div className="psp-20 pep-20 ptp-20 pbp-20 f-Ubuntu-R fsp-14 w-90 position-relative bgc-draco rounded-p-10 min-hp-100 d-flex flex-column center-center text-start">
                    <ItemLista colorBullet="bgc-dark" fontSize="fsp-15" fuente="f-Ubuntu-R" color="color-dark">Difundimos la campaña para dar a conocer nuestra propuesta. </ItemLista>
                    <ItemLista colorBullet="bgc-dark" fontSize="fsp-15" fuente="f-Ubuntu-R" color="color-dark">Celebramos el primer Día de la Alimentación Saludable en el colegio.</ItemLista>
                    <div className="position-absolute top-50 start-100 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-1 border-color-dark rounded-circle"></div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-6">

                <div className="d-flex flex-column justify-content-center ptp-30 pbp-30">
                  <div className="psp-20 pep-20 ptp-20 pbp-20 f-Ubuntu-R fsp-14 w-60 position-relative bgc-buzz rounded-p-10 min-hp-50 d-flex center-center align-self-end text-center">
                    Planificación
                    <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-1 border-color-dark rounded-circle"></div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-6">
                <div className="d-flex flex-column pbp-30">
                  <div className="psp-20 pep-20 ptp-20 pbp-20 f-Ubuntu-R fsp-14 w-90 position-relative bgc-draco rounded-p-10 min-hp-100 d-flex flex-column center-center text-start">
                    <ItemLista colorBullet="bgc-dark" fontSize="fsp-15" fuente="f-Ubuntu-R" color="color-dark">Estudiamos sobre la alimentación saludable. </ItemLista>
                    <ItemLista colorBullet="bgc-dark" fontSize="fsp-15" fuente="f-Ubuntu-R" color="color-dark">Comprendemos los requerimientos nutricionales de la población.</ItemLista>
                    <div className="position-absolute top-50 start-100 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-1 border-color-dark rounded-circle"></div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-6">
                <div className="d-flex flex-column justify-content-center ptp-30 pbp-30">
                  <div className="psp-20 pep-20 ptp-20 pbp-20 f-Ubuntu-R fsp-14 w-60 position-relative bgc-quigon rounded-p-10 min-hp-50 d-flex center-center align-self-end text-center">
                    Creación
                    <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-1 border-color-dark rounded-circle"></div>
                  </div>
                </div>

              </div>
              <div className="col-6 col-md-6">
                <div className="d-flex flex-column pbp-30">
                  <div className="psp-20 pep-20 ptp-20 pbp-20 f-Ubuntu-R fsp-14 w-90 position-relative bgc-draco rounded-p-10 min-hp-100 d-flex flex-column center-center text-start">
                    <ItemLista colorBullet="bgc-dark" fontSize="fsp-15" fuente="f-Ubuntu-R" color="color-dark">Creamos una campaña para dar a conocer nuestra propuesta.</ItemLista>
                    <ItemLista colorBullet="bgc-dark" fontSize="fsp-15" fuente="f-Ubuntu-R" color="color-dark">Proponemos una fecha para celebrar el primer Día de la Alimentación Saludable.</ItemLista>
                    <div className="position-absolute top-50 start-100 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-1 border-color-dark rounded-circle"></div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-6">

                <div className="d-flex flex-column justify-content-center ptp-30 pbp-30">
                  <div className="psp-20 pep-20 ptp-20 pbp-20 f-Ubuntu-R fsp-14 w-60 position-relative bgc-woody rounded-p-10 min-hp-50 d-flex center-center align-self-end text-center">
                    Experimentación
                    <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-1 border-color-dark rounded-circle"></div>
                  </div>
                </div>
              </div>


            </div>

          </div> */}


          <div className={"w-100 mtp-20 mbp-0 psp-0 pep-0 ptp-0 pbp-100 " + bgc_cajas + " border-top-style-solid " + borderColor + " border-2"}>

            <div className="d-flex flex-column global-margin mtp-20 mbp-20 psp-0 pep-0 ptp-0 pbp-0">
              <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-10">¿Cómo voy?</div>
              <div className="d-flex flex-column bgc-white rounded-p-10 psp-10 pep-10 ptp-10 pbp-10 mtp-0 mbp-0">
                <div className="row p-0 m-0 w-100">
                  <div className="col-12 p-0 m-0">
                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-start">
                        <div className="mtp-0 pep-5">
                          <img src={"images/generales/flecha_e" + etapa + ".svg"} className="wp-15" />
                        </div>
                        <div className="f-Ubuntu-L fsp-15 ptp-2 text-start">Hoy descubrí que </div>
                      </div>
                      <div className="d-flex w-100 psp-20 pep-10 ptp-0 pbp-0">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 w-100 min-hp-80" />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 p-0 m-0">
                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-start">
                        <div className="mtp-0 pep-5">
                          <img src={"images/generales/flecha_e" + etapa + ".svg"} className="wp-15" />
                        </div>
                        <div className="f-Ubuntu-L fsp-15 ptp-2 text-start">Quisiera profundizar sobre </div>
                      </div>
                      <div className="d-flex w-100 psp-20 pep-10 ptp-0 pbp-0">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 w-100 min-hp-80" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex flex-column global-margin mtp-0 mbp-20 psp-0 pep-0 ptp-0 pbp-0">
              <div className="col-12">
                <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-5">¿Cómo me siento?</div>
                <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mbp-30 fsp-15">
                  <span className="w-24 f-Ubuntu-L mtp-5 mbp-10">Marco con un <img src={"images/generales/ticket.svg"} className="hp-17 mtp--2" alt="" /> el recuadro que mejor me represente.</span>
                  <div className="w-100 p-2 pb-3 bgc-white rounded-p-10">
                    <table className="w-100">
                      <tbody>
                        <tr>
                          <td>&nbsp;</td>
                          <td className={"style-caja " + background + " tf-letra border-style-solid border-1 " + borderColor + " f-colby-compres-bold color-white ps-2 pe-2"}>
                            Nunca</td>
                          <td style={{ minWidth: "55px" }} className={"style-caja " + background + " tf-letra  border-style-solid border-1 " + borderColor + " f-colby-compres-bold color-white ps-2 pe-2"}>
                            A veces</td>
                          <td className={"style-caja " + background + " tf-letra border-style-solid border-1 " + borderColor + " f-colby-compres-bold color-white ps-2 pe-2"}>
                            Generalmente</td>
                          <td className={"style-caja " + background + " tf-letra  border-style-solid border-1 " + borderColor + " f-colby-compres-bold color-white ps-2 pe-2"}>
                            Siempre</td>
                        </tr>
                        <tr>
                          <td className={"" + bgc_cajas + " f-Ubuntu-L fsp-14 text-start psp-5 border-style-solid border-1 " + borderColor + ""}>El ambiente de trabajo en mi equipo es agradable.</td>
                          <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                          <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                          <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                          <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                        </tr>
                        <tr>
                          <td className={"" + bgc_cajas + " f-Ubuntu-L fsp-14 text-start psp-5 border-style-solid border-1 " + borderColor + ""}>Estoy contento de trabajar en este proyecto.</td>
                          <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                          <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                          <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                          <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                        </tr>
                      </tbody>
                    </table>
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

export default Page018;
