import React from "react";
import InputBox from "../components/InputBox";
// import ModalVideo from "../components/ModalVideo";
import "./page_034.css";

function Page034(props) {

  const pagina = "034";
  var indexInput = 0;

  return (
      <div className="wrapper bgc-light">
        <div className="d-flex flex-column align-items-center pbp-20">
          <div className="page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
                {/* BEGIN CABECERA VERSIÓN 2 */}
                <div className="cabecera-v1 hp-80 bgc-pidgey"></div> 
                {/* END CABECERA VERSIÓN 2 */}

            <div className="ptp-10 psp-100 pep-100 mbp-0 contenedor-pagina position-relative">
            <div className="position-absolute top-50 start-0"><img src="images/page_034/agenda.png" className="wp-50 msp-180 mbp-90" alt=""/></div>
            <div className="position-absolute top-0 end-0 zindex-2"><img src="images/page_034/clip.png" className="wp-30 mep-110 mtp-5" alt=""/></div>
              <div className="row">

                <div className="col-md-5 col-12 psp-20 pep-20 pbp-20">
                  <div className="d-flex">
                    <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">3</div>
                    <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-left">Las personas a las que encuestaremos serán…</div>
                  </div>
                </div>

                <div className="col-md-7 position-relative pbp-20 ptp-15 rota">
                  <div className="bloque-respuesta w-100 p-3 text-left bgc-draco rota">
                    <div className="d-flex align-items-center pbp-10">
                      <div className="pep-10"><img src="images/page_034/cuadro.svg" className="hp-30" alt="" /></div>
                      <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">Compañeros de curso.</div>
                    </div>
                    <div className="d-flex align-items-center pbp-10">
                      <div className="pep-10"><img src="images/page_034/cuadro.svg" className="hp-30" alt="" /></div>
                      <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">Profesores y profesoras.</div>
                    </div>
                    <div className="d-flex align-items-center pbp-10">
                      <div className="pep-10"><img src="images/page_034/cuadro.svg" className="hp-30" alt="" /></div>
                      <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">Compañeros de otros cursos.</div>
                    </div>
                    <div className="d-flex align-items-center pbp-10">
                      <div className="pep-10"><img src="images/page_034/cuadro.svg" className="hp-30" alt="" /></div>
                      <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">Otros trabajadores del colegio.</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="ptp-10 psp-60 mbp-0 contenedor-pagina">
              <div className="f-Ubuntu-B psp-50 fsp-20 color-pidgey text-start lhp-20">¡Nos ponemos en acción!</div>
              <div className="d-flex">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_034/g.svg" alt="" />
                <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">4</div>
                <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start">Elaboramos un plan para aplicar las encuestas.</div>
              </div>
            </div>

            <div className="psp-140 pep-120 contenedor-pagina">
              <div className="w-100 psp-40 ptp-20 pbp-20 pep-15 text-left bgc-white border border-2 border-color-muted position-relative">
              <div className="position-absolute top-50 start-0 translate-middle h-100 ptp-10 pbp-10"><div className="espiral wp-30 h-100"></div></div>
                <div className="d-flex align-items-center pbp-10">
                  <div className="pep-10"><img src="images/page_034/medialuna.svg" className="hp-15 mbp-5" alt="" /></div>
                  <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">Cantidad de personas que cada uno va a encuestar:</div>
                  <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                </div>
                <div className="d-flex align-items-center pbp-10">
                <div className="pep-10"><img src="images/page_034/medialuna.svg" className="hp-15 mbp-5" alt="" /></div>
                  <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">Haremos las encuestas:</div>
                  <div className="d-flex align-items-center psp-10">
                    <div className="pep-5"><img src="images/page_034/cuadro.svg" className="hp-30" alt="" /></div>
                    <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">de manera individual.</div>
                  </div>
                  <div className="d-flex align-items-center psp-10">
                    <div className="pep-5"><img src="images/page_034/cuadro.svg" className="hp-30" alt="" /></div>
                    <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">en parejas.</div>
                  </div>
                </div>
                <div className="d-flex align-items-center pbp-10">
                <div className="pep-10"><img src="images/page_034/medialuna.svg" className="hp-15 mbp-5" alt="" /></div>
                  <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">El día que encuestaremos será:</div>
                  <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                </div>
                <div className="d-flex align-items-center pbp-10">
                <div className="pep-10"><img src="images/page_034/medialuna.svg" className="hp-15 mbp-5" alt="" /></div>
                  <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">El tiempo que destinaremos para encuestar será:</div>
                  <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                </div>
              </div>
            </div>

            <div className="ptp-10 psp-110 mbp-0 contenedor-pagina">
              <div className="d-flex">
                <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">5</div>
                <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start">Aplicamos las encuestas que permitirán conocer la diversidad que existe en nuestra comunidad para considerarla en nuestra fiesta.</div>
              </div>
            </div>

            <div className="psp-110 mbp-0 contenedor-pagina">
              <div className="d-flex">
                <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">6</div>
                <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start">Comprobamos si realizamos bien el trabajo.</div>
              </div>
            </div>

            <div className="psp-140 pep-120 contenedor-pagina position-relative">
            <div className="position-absolute top-0 start-0 h-100 ptp-15 pbp-15 msp-135"><div className="espiral-calado wp-25 h-100"></div></div>
            <div className="position-absolute bottom-0 end-0"><img src="images/page_034/mono.png" className="wp-90 mep-80 mtp-65" alt=""/></div>
              <div className="w-100 psp-40 ptp-20 pbp-20 text-left bgc-jarek rounded-p-20">
                <div className="d-flex align-items-center pbp-10">
                  <div className="pep-10"><img src="images/page_034/cuadro.svg" className="hp-30" alt="" /></div>
                  <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">Seleccionamos las preguntas para nuestras encuestas.</div>
                </div>
                <div className="d-flex align-items-center pbp-10">
                  <div className="pep-10"><img src="images/page_034/cuadro.svg" className="hp-30" alt="" /></div>
                  <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">Elaboramos nuestras encuestas.</div>
                </div>
                <div className="d-flex align-items-center pbp-10">
                  <div className="pep-10"><img src="images/page_034/cuadro.svg" className="hp-30" alt="" /></div>
                  <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">Definimos a quiénes íbamos a aplicar la encuesta.</div>
                </div>
                <div className="d-flex align-items-center pbp-10">
                  <div className="pep-10"><img src="images/page_034/cuadro.svg" className="hp-30" alt="" /></div>
                  <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">Creamos un plan de acción.</div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="pep-10"><img src="images/page_034/cuadro.svg" className="hp-30" alt="" /></div>
                  <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">Aplicamos las encuestas a quienes correspondía.</div>
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

export default Page034;
