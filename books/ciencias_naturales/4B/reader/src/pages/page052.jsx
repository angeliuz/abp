import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import "./page_052.css";
import Check from "../components/Check"

function Page052(props) {

  const pagina = "052";
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
              <div className="caja-seccion wp-160 hp-60 d-flex justify-content-center ptp-10 mtp-5 color-pidgey fsp-24 f-IntroRustG-Base">SESIÓN 11</div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">¡Cada vez más cerca!</div>
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-10 psp-100 pep-60 mbp-0">
            <div className="f-Ubuntu-B fsp-20 color-pidgey text-start lhp-20">Lo que aprendimos en los simulacros</div>
            <div className="d-flex">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">1</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start w-45">Con mi equipo, reflexionamos sobre nuestra emergencia simulada.</div>
            </div>
          </div>

          <div className="ptp-0 psp-100 pep-100 mbp-0 position-relative">
            <div className="row">

              <div className="col-md-6 position-relative pbp-20 ptp-30 rota">
                <div className="position-absolute top-100 start-0 translate-middle"><img src="images/page_052/posit.png" className="hp-60 msp--30 mbp-95" alt="" /></div>
                <div className="position-absolute top-0 start-0"><img src="images/page_052/pincho.png" className="wp-50 msp-0 mtp-20" alt="" /></div>
                <div className="bloque-respuesta w-100 p-3 bgc-white border-style-solid border-color-lightDark border-1">
                  <div className="f-Ubuntu-L fsp-15 lh-sm pep-5 pbp-5 text-center">Lo que nos gustó del simulacro:</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-50 min-hp-110" />
                </div>
              </div>
              <div className="col-md-6 position-relative pbp-20 rota">
                <div className="position-absolute top-0 start-100"><img src="images/page_052/pincho.png" className="wp-50 msp--80 mtp--10" alt="" /></div>
                <div className="bloque-respuesta w-100 p-3 bgc-white border-style-solid border-color-lightDark border-1">
                  <div className="f-Ubuntu-L fsp-15 lh-sm pep-5 pbp-5 text-center">Lo que podríamos mejorar del simulacro:</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-50 min-hp-110" />
                </div>
              </div>

            </div>
          </div>

          <div className="ptp-50 container-titulo-global mbp-0">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 "+color}>
                Plan de trabajo
            </div> */}
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                2
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Con mi equipo, evaluamos la presentación del simulacro y la reacción de la brigada.
              </div>
              <img src={"images/page_" + pagina + "/pareja.png"} className="wp-100" alt="" />
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>


          <div className="global-margin mbp-150">
            <div className="row mbp-10 position-relative bgc-pantro rounded-p-5 p-2 bloque-respuesta">

              <div class="col-8 p-1"><div class="bgc-white f-Ubuntu-B fsp-15 p-1 h-100 d-flex align-items-center justify-content-center lh-sm">Criterios</div></div>
              <div class="col-1 p-1"><div class="bgc-white f-Ubuntu-B fsp-15 p-1 h-100 d-flex align-items-center justify-content-center lh-sm">Sí</div></div>
              <div class="col-2 p-1"><div class="bgc-white f-Ubuntu-B fsp-15 p-1 h-100 d-flex align-items-center justify-content-center lh-sm">Más o menos</div></div>
              <div class="col-1 p-1"><div class="bgc-white f-Ubuntu-B fsp-15 p-1 h-100 d-flex align-items-center justify-content-center lh-sm">No</div></div>

              <div class="col-8 p-1"><div class="bgc-white text-start f-Ubuntu-R fsp-15 p-2 h-100 d-flex align-items-center lh-sm">Creemos que la emergencia simulada podría suceder en la realidad.</div></div>
              <div class="col-1 p-1">
                <div class="bgc-white p-1 h-100 d-flex align-items-center justify-content-center">
                  <div className="wp-30 hp-30">
                    <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                  </div>
                </div>
              </div>
              <div class="col-2 p-1">                <div class="bgc-white p-1 h-100 d-flex align-items-center justify-content-center">
                <div className="wp-30 hp-30">
                  <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                </div>
              </div>              </div>
              <div class="col-1 p-1">                <div class="bgc-white p-1 h-100 d-flex align-items-center justify-content-center">
                <div className="wp-30 hp-30">
                  <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                </div>
              </div>              </div>

              <div class="col-8 ps-1 pe-1 pb-1 ptp-2"><div class="bgc-white text-start f-Ubuntu-R fsp-15 p-2 h-100 d-flex align-items-center lh-sm">Estamos conformes con nuestro desempeño.</div></div>
              <div class="col-1 ps-1 pe-1 pb-1 ptp-2">                <div class="bgc-white p-1 h-100 d-flex align-items-center justify-content-center">
                <div className="wp-30 hp-30">
                  <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                </div>
              </div>              </div>
              <div class="col-2 ps-1 pe-1 pb-1 ptp-2">                <div class="bgc-white p-1 h-100 d-flex align-items-center justify-content-center">
                <div className="wp-30 hp-30">
                  <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                </div>
              </div>              </div>
              <div class="col-1 ps-1 pe-1 pb-1 ptp-2">                <div class="bgc-white p-1 h-100 d-flex align-items-center justify-content-center">
                <div className="wp-30 hp-30">
                  <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                </div>
              </div>              </div>

              <div class="col-8 ps-1 pe-1 pb-1 ptp-2"><div class="bgc-white text-start f-Ubuntu-R fsp-15 p-2 h-100 d-flex align-items-center lh-sm">Creemos que la emergencia simulada fue útil para los asistentes.</div></div>
              <div class="col-1 ps-1 pe-1 pb-1 ptp-2">                <div class="bgc-white p-1 h-100 d-flex align-items-center justify-content-center">
                <div className="wp-30 hp-30">
                  <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                </div>
              </div>              </div>
              <div class="col-2 ps-1 pe-1 pb-1 ptp-2">                <div class="bgc-white p-1 h-100 d-flex align-items-center justify-content-center">
                <div className="wp-30 hp-30">
                  <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                </div>
              </div>              </div>
              <div class="col-1 ps-1 pe-1 pb-1 ptp-2">                <div class="bgc-white p-1 h-100 d-flex align-items-center justify-content-center">
                <div className="wp-30 hp-30">
                  <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                </div>
              </div>              </div>

              <div class="col-8 ps-1 pe-1 pb-1 ptp-2"><div class="bgc-white text-start f-Ubuntu-R fsp-15 p-2 h-100 d-flex align-items-center lh-sm">Nos sentimos más preparados para poner en marcha la brigada.</div></div>
              <div class="col-1 ps-1 pe-1 pb-1 ptp-2">                <div class="bgc-white p-1 h-100 d-flex align-items-center justify-content-center">
                <div className="wp-30 hp-30">
                  <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                </div>
              </div>              </div>
              <div class="col-2 ps-1 pe-1 pb-1 ptp-2">                <div class="bgc-white p-1 h-100 d-flex align-items-center justify-content-center">
                <div className="wp-30 hp-30">
                  <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                </div>
              </div>              </div>
              <div class="col-1 ps-1 pe-1 pb-1 ptp-2">                <div class="bgc-white p-1 h-100 d-flex align-items-center justify-content-center">
                <div className="wp-30 hp-30">
                  <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                </div>
              </div>              </div>

              <div class="col-8 ps-1 pe-1 pb-1 ptp-2"><div class="bgc-white text-start f-Ubuntu-R fsp-15 p-2 h-100 d-flex align-items-center lh-sm">Creemos que la simulación fue bien recibida por nuestros compañeros.</div></div>
              <div class="col-1 ps-1 pe-1 pb-1 ptp-2">                <div class="bgc-white p-1 h-100 d-flex align-items-center justify-content-center">
                <div className="wp-30 hp-30">
                  <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                </div>
              </div>              </div>
              <div class="col-2 ps-1 pe-1 pb-1 ptp-2">                <div class="bgc-white p-1 h-100 d-flex align-items-center justify-content-center">
                <div className="wp-30 hp-30">
                  <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                </div>
              </div>              </div>
              <div class="col-1 ps-1 pe-1 pb-1 ptp-2">                <div class="bgc-white p-1 h-100 d-flex align-items-center justify-content-center">
                <div className="wp-30 hp-30">
                  <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                </div>
              </div>              </div>

              <div class="col-8 ps-1 pe-1 pb-1 ptp-2"><div class="bgc-white text-start f-Ubuntu-R fsp-15 p-2 h-100 d-flex align-items-center lh-sm">Los simulacros de nuestro compañeros nos sirven para que nuestra brigada esté más preparada.</div></div>
              <div class="col-1 ps-1 pe-1 pb-1 ptp-2">                <div class="bgc-white p-1 h-100 d-flex align-items-center justify-content-center">
                <div className="wp-30 hp-30">
                  <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                </div>
              </div>              </div>
              <div class="col-2 ps-1 pe-1 pb-1 ptp-2">                <div class="bgc-white p-1 h-100 d-flex align-items-center justify-content-center">
                <div className="wp-30 hp-30">
                  <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                </div>
              </div>              </div>
              <div class="col-1 ps-1 pe-1 pb-1 ptp-2">                <div class="bgc-white p-1 h-100 d-flex align-items-center justify-content-center">
                <div className="wp-30 hp-30">
                  <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                </div>
              </div>              </div>

              <div class="col-8 ps-1 pe-1 pb-1 ptp-2"><div class="bgc-white text-start f-Ubuntu-R fsp-15 p-2 h-100 d-flex align-items-center lh-sm">Otro:</div></div>
              <div class="col-1 ps-1 pe-1 pb-1 ptp-2">                <div class="bgc-white p-1 h-100 d-flex align-items-center justify-content-center">
                <div className="wp-30 hp-30">
                  <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                </div>
              </div>              </div>
              <div class="col-2 ps-1 pe-1 pb-1 ptp-2">                <div class="bgc-white p-1 h-100 d-flex align-items-center justify-content-center">
                <div className="wp-30 hp-30">
                  <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                </div>
              </div>              </div>
              <div class="col-1 ps-1 pe-1 pb-1 ptp-2">                <div class="bgc-white p-1 h-100 d-flex align-items-center justify-content-center">
                <div className="wp-30 hp-30">
                  <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                </div>
              </div>              </div>
            </div>
          </div>

          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>ABP &copy; SM</div>
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>

          <div className="row w-100 position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
              <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
              <img src="images/rotulo_planificacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
              <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-7 col-md-2 p-0 m-0 position-relative">
              <img src="images/rotulo_experimentacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
              <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
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

export default Page052;
