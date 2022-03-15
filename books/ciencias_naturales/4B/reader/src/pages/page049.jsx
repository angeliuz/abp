import React from "react";
import InputBox from "../components/InputBox";
// import ModalVideo from "../components/ModalVideo";
import "./page_049.css";

function Page049(props) {

  const pagina = "049";
  var indexInput = 0;

  return (
      <div className="wrapper bgc-light">
        <div className="d-flex flex-column align-items-center pbp-20">
          <div className="page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
                {/* BEGIN CABECERA VERSIÓN 2 */}
                <div className="cabecera-v1 hp-80 bgc-pidgey"></div> 
                {/* END CABECERA VERSIÓN 2 */}

            <div className="ptp-10 psp-100 pep-60 mbp-0">
              <div className="d-flex">
                <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">9</div>
                <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start">Registramos lo que necesitaremos para presentar la emergencia simulada.</div>
              </div>
            </div>

            <div className="ptp-10 psp-130 pep-80 mbp-0">
              <div className="row mbp-10 position-relative">
                <div className="position-absolute top-100 start-100 translate-middle"><img src="images/page_049/agenda.png" className="wp-60 mep-0 mtp--80" alt=""/></div>
                
                <div className="position-absolute top-50 start-50 translate-middle visible-768"><img src="images/page_049/espiral.svg" className="w-100" alt=""/></div>
                <div className="col-12 col-md-6 p-1 m-0 position-relative">
                <div className="position-absolute top-0 start-0 translate-middle"><img src="images/page_049/hojas.png" className="wp-60 mep-40 mtp-200" alt=""/></div>
                  <div className="rounded-p-10 bgc-white border-style-solid border-color-akuma border-2">
                    <div className="f-Ubuntu-B fsp-14 p-1 bgc-akuma rounded-set-10 text-white lh-sm min-hp-45 d-flex align-items-center justify-content-center">Materiales y/o vestimenta</div>
                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-150 mep-10 msp-10 w-95" />
                  </div>
                </div>
                <div className="col-12 col-md-6 p-1 m-0">
                  <div className="rounded-p-10 bgc-white border-style-solid border-color-ken border-2">
                    <div className="f-Ubuntu-B fsp-14 p-1 bgc-ken rounded-set-10 text-white lh-sm min-hp-45 d-flex align-items-center justify-content-center">Recursos digitales<br />(audio, video o imagen)</div>
                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-150 mep-10 msp-10" />
                  </div>
                </div>
                <div className="col-12 col-md-6 p-1 m-0">
                  <div className="rounded-p-10 bgc-white border-style-solid border-color-android18 border-2">
                    <div className="f-Ubuntu-B fsp-14 p-1 bgc-android18 rounded-set-10 text-white lh-sm min-hp-45 d-flex align-items-center justify-content-center">Yo me encargaré de:</div>
                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-150 mep-10 msp-10" />
                  </div>
                </div>
                <div className="col-12 col-md-6 p-1 m-0">
                  <div className="rounded-p-10 bgc-white border-style-solid border-color-bulma border-2">
                    <div className="f-Ubuntu-B fsp-14 p-1 bgc-bulma rounded-set-10 text-white lh-sm min-hp-45 d-flex align-items-center justify-content-center">Mis compañeros de equipo<br />se encargarán de:</div>
                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-150 mep-10 msp-10" />
                  </div>
                </div>
              </div>
            </div>

            <div className="ptp-10 psp-90 pep-60 mbp-0">
              <div className="d-flex">
                <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">10</div>
                <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start">¡Manos a la obra! Preparamos todo lo necesario para presentar el simulacro.</div>
              </div>
            </div>

            <div className="mtp-20 mbp-20">
              <div className="bgc-pantro linea-separa pbp-20">
                <div className="contenedor mtp-10 pbp-5 f-pixilate-bold text-start fsp-17">¿Cómo voy?</div>
                <div className="contenedor p-2 pb-3 f-Ubuntu-L bgc-white fsp-13 rounded-p-10 mbp-85"> 
                  <div className="d-flex flex-wrap w-100 titulo-linea">
                    <div className="d-flex mtp-10 msp-10 align-items-center"><img src="images/page_049/flecha.png" className="mep-5 hp-15" alt="" /><span className="f-Ubuntu-L fsp-14 text-start">En este proyecto realicé varias actividades y la que más me sirvió para aprender fue:</span></div>
                  </div>
                  <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="msp-30 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35 pbp-5" />

                  <div className="d-flex flex-wrap w-100 titulo-linea">
                    <div className="d-flex mtp-10 msp-10 align-items-center"><img src="images/page_049/flecha.png" className="mep-5 hp-15" alt="" /><span className="f-Ubuntu-L fsp-14 text-start">¿Qué hago cuando algo no me resulta como quiero?</span></div>
                  </div>
                  <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="msp-30 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35 pbp-5" />

                  <div className="d-flex flex-wrap w-100 titulo-linea">
                    <div className="d-flex mtp-10 msp-10 align-items-center"><img src="images/page_049/flecha.png" className="mep-5 hp-15" alt="" /><span className="f-Ubuntu-L fsp-14 text-start">Me he sentido creativo cuando:</span></div>
                  </div>
                  <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="msp-30 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35 pbp-5" />
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

export default Page049;