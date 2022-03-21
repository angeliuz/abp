import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import ModalBook from "../components/ModalBook";
import Check from "../components/Check";
import ModalPDF from "../components/ModalPDF";
import "./page_033.css";

function Page033(props) {

  const pagina = "033";
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
          <div className="cabecera-v2 bgc-pidgey d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 align-items-center ptp-40 psp-30 pep-30">
              <div className="caja-seccion wp-160 hp-60 d-flex justify-content-center ptp-10 mtp-5 color-pidgey fsp-24 f-IntroRustG-Base">SESIÓN 8</div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Somos encuestadores</div>
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-10 psp-40 pep-40">
            <div className="f-Ubuntu-B fsp-18 color-pidgey text-start lhp-20 psp-35">Antes de partir…</div>
            <div className="d-flex">
              <img className="hp-15 mtp-20 pep-10" src="images/page_033/g_i.svg" alt="" />
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey pep-10">1</div>
              <div className="f-Ubuntu-R fsp-16 text-start pep-10 mtp-15">Leo la revista y contesto.</div>
              <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} pagina={"69"} image={"images/page_" + pagina + "/revista.png"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />

            </div>
          </div>

          <div className="psp-100 pep-50">
            <div className="col-12 position-relative">
              <div className="position-absolute top-0 start-100 translate-middle"><img src="images/page_033/tabla.png" className="wp-60 mep-110" alt="" /></div>
              <div className="position-absolute top-0 start-100 translate-middle"><img src="images/page_033/clip.png" className="hp-25 mep-0 mtp-40" alt="" /></div>
              <div className="bloque-respuesta linea1 bgc-jugador001 p-2 border-style-solid border-color-goku border-1">
                <div className="f-Ubuntu-L fsp-15 p-1 text-start">Con las encuestas podemos…</div>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" />
              </div>
            </div>
          </div>

          <div className="ptp-20 psp-75 pep-40 position-relative">
            <div className="position-absolute bottom-0 start-0 visible-768"><img src="images/page_033/mono.png" className="wp-100 msp-120" alt="" /></div>
            <div className="f-Ubuntu-B fsp-18 color-pidgey text-start lhp-20">Nos preparamos para elaborar nuestra encuesta</div>
            <div className="row">
              <div className="col-md-4 col-12">
                <div className="d-flex">
                  <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey wp-40 pep-5">2</div>
                  <div className="f-Ubuntu-R fsp-16 text-start pep-10 mtp-15">Elegimos cinco preguntas para elaborar nuestra encuesta con el material que nos entregarán.</div>
                  {/* <ModalVideo id={"p" + pagina + "_video" + (indexInput += 1)} image="images/page_033/circ.png" clasesImagen="hp-35 mtp-10" /> */}
                  <ModalPDF
                    id={"p" + pagina + "_video" + (indexInput += 1)}
                    link="https://www.smconecta.cl/resources/1894/portadas.pdf"
                    titulo="Material descargable"
                    tipo="PDF"
                    image={"images/generales/descargable.svg"}
                    colorUnidad={background}
                    clasesImagen="cambio hp-40 mtp-10"
                    className="p-0 px-1"
                  />
                </div>
              </div>

              <div className="col-md-8 position-relative pbp-20 ptp-15">
                <div className="bloque-respuesta p-3 text-left bgc-yoru border-style-solid border-color-goku border-1 ">
                  <div className="d-flex align-items-center pbp-10">
                    <div className="pep-10"><div className="cuadro-clic"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></div></div>
                    <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">¿Qué edad tienes?</div>
                  </div>
                  <div className="d-flex align-items-center pbp-10">
                    <div className="pep-10"><div className="cuadro-clic"> <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></div></div>
                    <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">¿De qué nacionalidad eres?</div>
                  </div>
                  <div className="d-flex align-items-center pbp-10">
                    <div className="pep-10"><div className="cuadro-clic"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></div></div>
                    <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">¿Te consideras parte de o perteneces a un pueblo originario?</div>
                  </div>
                  <div className="d-flex align-items-center pbp-10">
                    <div className="pep-10"><div className="cuadro-clic"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></div></div>
                    <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">¿Cuál es tu música favorita?</div>
                  </div>
                  <div className="d-flex align-items-center pbp-10">
                    <div className="pep-10"><div className="cuadro-clic"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></div></div>
                    <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">¿Cuál es tu comida típica favorita?</div>
                  </div>
                  <div className="d-flex align-items-center pbp-10">
                    <div className="pep-10"><div className="cuadro-clic"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></div></div>
                    <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">¿Cuál es tu deporte favorito?</div>
                  </div>
                  <div className="d-flex align-items-center pbp-10">
                    <div className="pep-10"><div className="cuadro-clic"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></div></div>
                    <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">¿Qué te gusta hacer en tu tiempo libre?</div>
                  </div>
                  <div className="d-flex align-items-center pbp-10">
                    <div className="pep-10"><div className="cuadro-clic"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></div></div>
                    <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">¿Cuál es tu asignatura favorita?</div>
                  </div>
                  <div className="d-flex align-items-center pbp-10">
                    <div className="pep-10"><div className="cuadro-clic"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></div></div>
                    <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">Otra:</div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className=" max-wp-300 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>ABP &copy; SM</div>
            <div className="bgc-goku wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
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
            <div className="col-7 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_experimentacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
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

export default Page033;
