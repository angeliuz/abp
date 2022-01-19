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
                {/* <div className="position-absolute top-100 start-0 translate-middle"><img src="images/page_048/libreta.png" className="wp-60 mep-20 mtp--80" alt=""/></div>
                <div className="position-absolute top-0 start-100 translate-middle"><img src="images/page_048/casco.png" className="wp-60 mep-70 mtp--80" alt=""/></div> */}
                <div className="col-12 col-md-6 p-1 m-0">
                  <div className="rounded-p-10 bgc-white border-style-solid border-color-akuma border-1">
                    <div className="f-Ubuntu-B fsp-14 p-1 bgc-akuma rounded-set-10 text-white lh-sm min-hp-45 d-flex align-items-center justify-content-center">Materiales y/o vestimenta</div>
                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150 mep-10 msp-10" />
                  </div>
                </div>
                <div className="col-12 col-md-6 p-1 m-0">
                  <div className="rounded-p-10 bgc-white border-style-solid border-color-ken border-1">
                    <div className="f-Ubuntu-B fsp-14 p-1 bgc-ken rounded-set-10 text-white lh-sm min-hp-45 d-flex align-items-center justify-content-center">Recursos digitales<br />(audio, video o imagen)</div>
                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150 mep-10 msp-10" />
                  </div>
                </div>
                <div className="col-12 col-md-6 p-1 m-0">
                  <div className="rounded-p-10 bgc-white border-style-solid border-color-android18 border-1">
                    <div className="f-Ubuntu-B fsp-14 p-1 bgc-android18 rounded-set-10 text-white lh-sm min-hp-45 d-flex align-items-center justify-content-center">Yo me encargaré de:</div>
                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150 mep-10 msp-10" />
                  </div>
                </div>
                <div className="col-12 col-md-6 p-1 m-0">
                  <div className="rounded-p-10 bgc-white border-style-solid border-color-bulma border-1">
                    <div className="f-Ubuntu-B fsp-14 p-1 bgc-bulma rounded-set-10 text-white lh-sm min-hp-45 d-flex align-items-center justify-content-center">Mis compañeros de equipo<br />se encargarán de:</div>
                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150 mep-10 msp-10" />
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

            <div className="ptp-10 psp-130 pep-80 mbp-0">
              <div className="row mbp-10 position-relative">
                <div className="col-12 p-1 m-0">
                  <div className="rounded-seb-10 bgc-white border-style-solid border-color-Dark border-1">
                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-430 mep-10 msp-10" />
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="ptp-10 psp-130 pep-80 mbp-0">
              <div className="row mbp-10 position-relative bgc-ryu rounded-p-5 p-2 bloque-respuesta">
                <div className="position-absolute top-0 start-100 translate-middle"><img src="images/page_046/bici.png" className="wp-80 mep-50 mtp--80" alt=""/></div>
                <div class="col-6 p-1"><div class="bgc-white text-center f-Ubuntu-B fsp-15 p-1">Emergencia</div></div>
                <div class="col-6 p-1"><div class="bgc-white text-center f-Ubuntu-B fsp-15 p-1">Brigada a cargo</div></div>

                <div class="col-6 p-1"><div class="bgc-white text-start f-Ubuntu-R fsp-15 p-2 h-100 d-flex align-items-center lh-sm">Ocurre un sismo mientras estamos en la sala de clases.</div></div>
                <div class="col-6 p-1"><div class="bgc-white text-center f-Ubuntu-R fsp-15 p-1 h-100 d-flex align-items-center"><InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 lhp-50 min-hp-50" /></div></div>

                <div class="col-6 ps-1 pe-1 pb-1 ptp-2"><div class="bgc-white text-start f-Ubuntu-R fsp-15 p-2 h-100 d-flex align-items-center lh-sm">Un estudiante se cae al correr por las escaleras durante el recreo.</div></div>
                <div class="col-6 ps-1 pe-1 pb-1 ptp-2"><div class="bgc-white text-center f-Ubuntu-R fsp-15 p-1 h-100 d-flex align-items-center"><InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 lhp-50 min-hp-50" /></div></div>

                <div class="col-6 ps-1 pe-1 pb-1 ptp-2"><div class="bgc-white text-start f-Ubuntu-R fsp-15 p-2 h-100 d-flex align-items-center lh-sm">Se rompe un material de vidrio durante un experimento científico.</div></div>
                <div class="col-6 ps-1 pe-1 pb-1 ptp-2"><div class="bgc-white text-center f-Ubuntu-R fsp-15 p-1 h-100 d-flex align-items-center"><InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 lhp-50 min-hp-50" /></div></div>

                <div class="col-6 ps-1 pe-1 pb-1 ptp-2"><div class="bgc-white text-start f-Ubuntu-R fsp-15 p-2 h-100 d-flex align-items-center lh-sm">Hay una amago de incendio en la sala de profesores.</div></div>
                <div class="col-6 ps-1 pe-1 pb-1 ptp-2"><div class="bgc-white text-center f-Ubuntu-R fsp-15 p-1 h-100 d-flex align-items-center"><InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 lhp-50 min-hp-50" /></div></div>

                <div class="col-6 ps-1 pe-1 pb-1 ptp-2"><div class="bgc-white text-start f-Ubuntu-R fsp-15 p-2 h-100 d-flex align-items-center lh-sm">Se siente olor a gas en el casino del colegio.</div></div>
                <div class="col-6 ps-1 pe-1 pb-1 ptp-2"><div class="bgc-white text-center f-Ubuntu-R fsp-15 p-1 h-100 d-flex align-items-center"><InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 lhp-50 min-hp-50" /></div></div>

                <div class="col-6 ps-1 pe-1 pb-1 ptp-2"><div class="bgc-white text-start f-Ubuntu-R fsp-15 p-2 h-100 d-flex align-items-center lh-sm">Un estudiante se siente enfermo durante la clase.</div></div>
                <div class="col-6 ps-1 pe-1 pb-1 ptp-2"><div class="bgc-white text-center f-Ubuntu-R fsp-15 p-1 h-100 d-flex align-items-center"><InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 lhp-50 min-hp-50" /></div></div>

                <div class="col-6 ps-1 pe-1 pb-1 ptp-2"><div class="bgc-white text-start f-Ubuntu-R fsp-15 p-2 h-100 d-flex align-items-center lh-sm">Se derrama agua caliente en una actividad extraprogramática.</div></div>
                <div class="col-6 ps-1 pe-1 pb-1 ptp-2"><div class="bgc-white text-center f-Ubuntu-R fsp-15 p-1 h-100 d-flex align-items-center"><InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 lhp-50 min-hp-50" /></div></div>
              </div>
            </div> */}

            {/* <div className="ptp-10 psp-60 pep-60 mbp-0">
              <div className="d-flex">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_045/g_i.svg" alt="" />
                <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">5</div>
                <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start">Como equipo, reflexionamos sobre l G I a emergencia y respondemos:</div>
              </div>
            </div> */}

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

export default Page049;