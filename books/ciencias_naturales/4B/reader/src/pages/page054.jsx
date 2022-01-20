import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import "./page_054.css";

function Page054(props) {

  const pagina = "054";
  var indexInput = 0;

  return (
      <div className="wrapper bgc-light">
        <div className="d-flex flex-column align-items-center pbp-20">
          <div className="page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
                {/* BEGIN CABECERA VERSIÓN 2 */}
                <div className="cabecera-v1 hp-80 bgc-pidgey"></div> 
                {/* END CABECERA VERSIÓN 2 */}

            <div className="psp-130 pep-80 mbp-40">
              <div className="row mbp-10 bgc-ryu rounded-p-5 p-3 bloque-respuesta">
                <div className="col-12 p-1 m-0 position-relative">
                  <div className="position-absolute top-0 start-0"><img src="images/page_054/pincho.svg" className="wp-35 msp--15 mtp--10" alt=""/></div>
                  <div className="position-absolute top-50 start-0 translate-middle"><img src="images/page_054/semaforo.png" className="wp-50 mep-60 mtp-50" alt=""/></div>
                  <div className="bgc-white rounded-p-5 p-2 border-style-solid border-color-goten border-2">
                    <div className="f-Ubuntu-L fsp-15 p-1 text-start mtp-5">Se siente olor a gas en el casino del colegio.</div>
                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                  </div>
                </div>

                <div className="col-12 p-1 m-0 position-relative">
                  <div className="position-absolute top-0 start-0"><img src="images/page_054/pincho.svg" className="wp-35 msp--15 mtp--10" alt=""/></div>
                  <div className="bgc-white rounded-p-5 p-2 border-style-solid border-color-bulma border-2">
                    <div className="f-Ubuntu-L fsp-15 p-1 text-start mtp-5">Un estudiante se siente enfermo durante la clase.</div>
                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                  </div>
                </div>

                <div className="col-12 p-1 m-0 position-relative">
                  <div className="position-absolute top-100 start-100 translate-middle"><img src="images/page_054/cronometro.png" className="wp-70 mep--50 mtp--30" alt=""/></div>
                  <div className="position-absolute top-0 start-0"><img src="images/page_054/pincho.svg" className="wp-35 msp--15 mtp--10" alt=""/></div>
                  <div className="bgc-white rounded-p-5 p-2 border-style-solid border-color-saitama border-2">
                    <div className="f-Ubuntu-L fsp-15 p-1 text-start mtp-5">Se derrama agua caliente en una actividad extraprogramática.</div>
                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="psp-40 pep-40 pbp-0 mbp-40 bgc-pantro linea-separa">
              <div className="row px-5 ptp-20">

                  <div className="d-flex contenedor mtp-20">
                    <div className="f-pixilate-bold text-start fsp-17 flex-fill pbp-5 w-55">¿Cómo me siento?</div>
                    <div className="text-center f-Ubuntu-L fsp-12 w-10">Nunca</div>
                    <div className="text-center f-Ubuntu-L fsp-12 w-10">A veces</div>
                    <div className="text-center f-Ubuntu-L fsp-12 w-15">Generalmente</div>
                    <div className="text-center f-Ubuntu-L fsp-12 w-10">Siempre</div>
                  </div>

                  <div className="contenedor pt-2 pb-2 f-Ubuntu-L bgc-white fsp-13 rounded-p-10"> 
                    <div className="d-flex w-100 titulo-linea mbp-10 align-items-center">
                        <div className="flex-fill d-flex msp-10 w-55"><img src="images/page_054/flecha.png" className="mep-5 hp-15 mtp-3" alt="" /><span className="f-Ubuntu-L fsp-14 text-start">Me siento tenso y nervioso cuando trabajo con mi equipo.</span></div>
                        <div className="w-10"><img src="images/page_054/cuadro.svg" alt="" className="wp-30" /></div>
                        <div className="w-10"><img src="images/page_054/cuadro.svg" alt="" className="wp-30" /></div>
                        <div className="w-15"><img src="images/page_054/cuadro.svg" alt="" className="wp-30" /></div>
                        <div className="w-10"><img src="images/page_054/cuadro.svg" alt="" className="wp-30" /></div>
                    </div>

                    <div className="d-flex w-100 titulo-linea linea-separa-int ptp-10 mbp-10 align-items-center">
                        <div className="flex-fill d-flex msp-10 w-55"><img src="images/page_054/flecha.png" className="mep-5 hp-15 mtp-3" alt="" /><span className="f-Ubuntu-L fsp-14 text-start">Me asusta no hacer bien el trabajo y recibir críticas.</span></div>
                        <div className="w-10"><img src="images/page_054/cuadro.svg" alt="" className="wp-30" /></div>
                        <div className="w-10"><img src="images/page_054/cuadro.svg" alt="" className="wp-30" /></div>
                        <div className="w-15"><img src="images/page_054/cuadro.svg" alt="" className="wp-30" /></div>
                        <div className="w-10"><img src="images/page_054/cuadro.svg" alt="" className="wp-30" /></div>
                    </div>
                  </div>

                </div>
              </div> */}

            <div className="mtp-20 mbp-0">
              <div className="bgc-pantro linea-separa pbp-20">
                <div className="d-flex contenedor mtp-20">
                  <div className="f-pixilate-bold text-start fsp-17 flex-fill pbp-5 w-55">¿Cómo me siento?</div>
                  <div className="text-center f-Ubuntu-L fsp-12 w-10">Nunca</div>
                  <div className="text-center f-Ubuntu-L fsp-12 w-10">A veces</div>
                  <div className="text-center f-Ubuntu-L fsp-12 w-15">Generalmente</div>
                  <div className="text-center f-Ubuntu-L fsp-12 w-10">Siempre</div>
                </div>

                <div className="contenedor p-2 f-Ubuntu-L bgc-white fsp-13 rounded-p-10 mbp-85">
                  <div className="d-flex w-100 titulo-linea mbp-10 align-items-center">
                    <div className="flex-fill d-flex msp-10 w-55"><img src="images/page_054/flecha.png" className="mep-5 hp-15 mtp-3" alt="" /><span className="f-Ubuntu-L fsp-14 text-start">Me siento tenso y nervioso cuando trabajo con mi equipo.</span></div>
                    <div className="w-10"><img src="images/page_054/cuadro.svg" alt="" className="wp-30" /></div>
                    <div className="w-10"><img src="images/page_054/cuadro.svg" alt="" className="wp-30" /></div>
                    <div className="w-15"><img src="images/page_054/cuadro.svg" alt="" className="wp-30" /></div>
                    <div className="w-10"><img src="images/page_054/cuadro.svg" alt="" className="wp-30" /></div>
                  </div>

                  <div className="d-flex w-100 titulo-linea linea-separa-int ptp-10 mbp-10 align-items-center">
                    <div className="flex-fill d-flex msp-10 w-55"><img src="images/page_054/flecha.png" className="mep-5 hp-15 mtp-3" alt="" /><span className="f-Ubuntu-L fsp-14 text-start">Me asusta no hacer bien el trabajo y recibir críticas.</span></div>
                    <div className="w-10"><img src="images/page_054/cuadro.svg" alt="" className="wp-30" /></div>
                    <div className="w-10"><img src="images/page_054/cuadro.svg" alt="" className="wp-30" /></div>
                    <div className="w-15"><img src="images/page_054/cuadro.svg" alt="" className="wp-30" /></div>
                    <div className="w-10"><img src="images/page_054/cuadro.svg" alt="" className="wp-30" /></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
              <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>ABP &copy; SM</div>
              <div className="bgc-goku wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
            </div>

            <div className="row w-100 position-absolute caja-flotante2 p-0 m-0 align-items-end bgc-pantro" style={{ bottom: 0 }}>
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

export default Page054;
