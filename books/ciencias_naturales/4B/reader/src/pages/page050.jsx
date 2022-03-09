import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import Check from "../components/Check";
import "./page_050.css";

function Page050(props) {

  const pagina = "050";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v2 bgc-pidgey d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 align-items-center ptp-40 psp-30 pep-30">
              <div className="caja-seccion wp-160 hp-60 d-flex justify-content-center ptp-10 mtp-5 color-pidgey fsp-24 f-IntroRustG-Base">SESIÓN 10</div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Simulando una emergencia</div>
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-10 psp-100 pep-60 mbp-0">
            <div className="f-Ubuntu-B fsp-20 color-pidgey text-start lhp-20">Ensayamos la presentación</div>
            <div className="d-flex">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">1</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start w-85">Con mi equipo, revisamos el guion y ensayamos el simulacro. Luego, marcamos con un <img src="images/page_050/ticket.svg" className="mbp-10" alt=""></img> lo que está listo.</div>
            </div>
          </div>

          <div className="psp-130 pep-100 mbp-0">
            <div className="col-12 position-relative pbp-20">
              <div className="position-absolute top-50 start-100 translate-middle"><img src="images/page_050/posit.png" className="hp-60 msp-30 mbp-40" alt="" /></div>
              <div className="bloque-respuesta w-100 psp-40 pep-40 ptp-10 pbp-10 bgc-yoru bgc-bang">
                <div className="d-flex align-items-center pbp-10">
                  <div className="d-flex w-100 p-2">
                    <div className="wp-30 hp-30">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                    </div>
                    <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Cada integrante conoce y domina el guion.</div>
                  </div>

                </div>
                <div className="d-flex align-items-center pbp-10">
                  <div className="d-flex w-100 p-2">
                    <div className="wp-30 hp-30">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                    </div>
                    <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Preparamos todos los materiales o insumos necesarios.</div>
                  </div>

                </div>
                <div className="d-flex align-items-center pbp-10">
                  <div className="d-flex w-100 p-2">
                    <div className="wp-30 hp-30">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                    </div>
                    <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Contamos con la vestimenta adecuada.</div>
                  </div>
                </div>
                <div className="d-flex align-items-center pbp-10">
                  <div className="d-flex w-100 p-2">
                    <div className="wp-30 hp-30">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                    </div>
                    <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Disponemos de los recursos digitales que utilizaremos.</div>
                  </div>

                </div>
                <div className="d-flex align-items-center">
                  <div className="d-flex w-100 p-2">
                    <div className="wp-30 hp-30">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                    </div>
                    <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Si necesitamos apoyo extra, ya lo tenemos previsto.</div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className="ptp-10 psp-100 pep-60 mbp-0">
            <div className="f-Ubuntu-B fsp-20 color-pidgey text-start lhp-20">Acuerdos previos a la presentación</div>
            <div className="d-flex">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">2</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start">Como curso, sorteamos el orden en que se realizarán las presentaciones de los simulacros.</div>
            </div>
          </div>

          <div className="psp-110 pep-90 mbp-100 ptp-10">
            <div className="col-12 position-relative pbp-20">
              <div className="position-absolute top-50 start-0 translate-middle"><img src="images/page_050/lapiz.png" className="hp-80 mep-20 mtp-0" alt="" /></div>
              <div className="w-100 p-4 bgc-yoru bgc-honda rounded-p-10 border-style-solid border-color-goku border-3">
                <div className="d-flex align-items-center pbp-10">
                  <div className="f-Ubuntu-M fsp-15 lh-sm text-center w-10">Turno</div>
                  <div className="w-10 bgc-goku"></div>
                  <div className="f-Ubuntu-M fsp-15 lh-sm text-start psp-10 w-80">Emergencia</div>
                </div>
                <div className="d-flex align-items-center pbp-10">
                  <div className="wp-30 hp-30">
                    <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                  </div>
                  <div className="w-10 hp-2 bgc-goku"></div>
                  <div className="f-Ubuntu-L fsp-15 lh-sm text-start rounded-p-5 psp-10 pep-10 ptp-5 pbp-5 bgc-white w-80">Ocurre un sismo mientras estamos en la sala de clases.</div>
                </div>
                <div className="d-flex align-items-center pbp-10">
                  <div className="wp-30 hp-30">
                    <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                  </div>
                  <div className="w-10 hp-2 bgc-goku"></div>
                  <div className="f-Ubuntu-L fsp-15 lh-sm text-start rounded-p-5 psp-10 pep-10 ptp-5 pbp-5 bgc-white w-80">Un estudiante se cae al correr por las escaleras durante el recreo.</div>
                </div>
                <div className="d-flex align-items-center pbp-10">
                  <div className="wp-30 hp-30">
                    <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                  </div>
                  <div className="w-10 hp-2 bgc-goku"></div>
                  <div className="f-Ubuntu-L fsp-15 lh-sm text-start rounded-p-5 psp-10 pep-10 ptp-5 pbp-5 bgc-white w-80">Se rompe un material de vidrio durante un experimento científico.</div>
                </div>
                <div className="d-flex align-items-center pbp-10">
                  <div className="wp-30 hp-30">
                    <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                  </div>
                  <div className="w-10 hp-2 bgc-goku"></div>
                  <div className="f-Ubuntu-L fsp-15 lh-sm text-start rounded-p-5 psp-10 pep-10 ptp-5 pbp-5 bgc-white w-80">Hay una amago de incendio en la sala de profesores.</div>
                </div>
                <div className="d-flex align-items-center pbp-10">
                  <div className="wp-30 hp-30">
                    <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                  </div>
                  <div className="w-10 hp-2 bgc-goku"></div>
                  <div className="f-Ubuntu-L fsp-15 lh-sm text-start rounded-p-5 psp-10 pep-10 ptp-5 pbp-5 bgc-white w-80">Se siente olor a gas en el casino del colegio.</div>
                </div>
                <div className="d-flex align-items-center pbp-10">
                  <div className="wp-30 hp-30">
                    <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                  </div>
                  <div className="w-10 hp-2 bgc-goku"></div>
                  <div className="f-Ubuntu-L fsp-15 lh-sm text-start rounded-p-5 psp-10 pep-10 ptp-5 pbp-5 bgc-white w-80">Un estudiante se siente enfermo durante la clase.</div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="wp-30 hp-30">
                    <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                  </div>
                  <div className="w-10 hp-2 bgc-goku"></div>
                  <div className="f-Ubuntu-L fsp-15 lh-sm text-start rounded-p-5 psp-10 pep-10 ptp-5 pbp-5 bgc-white w-80">Se derrama agua caliente en una actividad extraprogramática.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>ABP &copy; SM</div>
            <div className="bgc-goku wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
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

export default Page050;
