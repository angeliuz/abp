import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import "./page_036.css";

function Page036(props) {

  const pagina = "036";
  var indexInput = 0;

  return (
      <div className="wrapper bgc-light">
        <div className="d-flex flex-column align-items-center pbp-20">
          <div className="page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
                {/* BEGIN CABECERA VERSIÓN 2 */}
                <div className="cabecera-v1 hp-80 bgc-pidgey"></div> 
                {/* END CABECERA VERSIÓN 2 */}

              <div className="ptp-25 psp-100 pep-100 pbp-20">
                <div className="row">
                  <div className="col-12 col-md-6 p-1">
                    <div className="w-100 rounded-p-10 bgc-jaga p-2 m-0 position-relative">
                      <div className="position-absolute top-0 start-0">
                        <img src="images/page_036/pincho.png" className="hp-55" alt=""/>
                        <div className="mtp--37 msp-25 color-white f-hanoded-butterflyball fsp-18 rota">Pregunta 4</div>
                      </div>
                      <div className="w-100 rounded-p-10 bgc-white p-3 m-0">
                        <div className="f-Ubuntu-L fsp-15 text-start ptp-30">Resultados:</div>
                        <div className="min-hp-140">
                          <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-140" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 p-1">
                    <div className="w-100 rounded-p-10 bgc-jaga p-2 m-0 position-relative">
                      <div className="position-absolute top-0 start-0">
                        <img src="images/page_036/pincho.png" className="hp-55" alt=""/>
                        <div className="mtp--37 msp-25 color-white f-hanoded-butterflyball fsp-18 rota">Pregunta 5</div>
                      </div>
                      <div className="w-100 rounded-p-10 bgc-white p-3 m-0">
                        <div className="f-Ubuntu-L fsp-15 text-start ptp-30">Resultados:</div>
                        <div className="min-hp-140">
                          <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-140" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row ptp-10 psp-80 pep-80 mbp-0">
                <div className="col-9">
                  <div className="f-Ubuntu-B fsp-20 color-pidgey text-start lhp-20">Elaboramos gráficos de barras</div>
                  <div className="d-flex">
                    <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">3</div>
                    <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start">Construimos gráficos para los resultados de cada pregunta que presentaremos en nuestra fiesta. Utilizamos el material que nos entregarán.</div>
                    <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_036/circ.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" />
                  </div>
                </div>
                <div className="col-3"><img src="images/page_036/mono.png" alt="" className="hp-160 mtp--20" /></div>
              </div>

                  <div className="mbp-20">
                    <div className="bgc-pantro linea-separa pbp-20">
                        <div className="contenedor mtp-30 pbp-5 f-pixilate-bold text-start fsp-16">¿Cómo voy?</div>
                        <div className="contenedor p-2 pb-3 f-Ubuntu-L bgc-white fsp-13 rounded-p-10"> 
    
                            <div className="d-flex flex-wrap w-100 titulo-linea mbp-10">
                                <div className="d-flex mtp-10 msp-10 align-items-center"><img src="images/page_036/flecha.png" className="mep-5 hp-15" alt="" /><span className="f-Ubuntu-L fsp-14 text-start">Los pasos que seguí hoy son…</span></div>
                            </div>
                            <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="msp-20 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" />

                        </div>
                        <div className="d-flex contenedor mtp-20">
                          <div className="f-pixilate-bold text-start fsp-16 flex-fill pbp-5">¿Cómo me siento?</div>
                          <div className="text-center f-Ubuntu-L fsp-12 wp-60">Nunca</div>
                          <div className="text-center f-Ubuntu-L fsp-12 wp-60">A veces</div>
                          <div className="text-center f-Ubuntu-L fsp-12 wp-75">Generalmente</div>
                          <div className="text-center f-Ubuntu-L fsp-12 wp-60">Siempre</div>
                        </div>

                        <div className="contenedor pt-2 pb-2 f-Ubuntu-L bgc-white fsp-13 rounded-p-10"> 
    
                            <div className="d-flex w-100 titulo-linea mbp-10">
                                <div className="flex-fill d-flex w-auto msp-10 align-items-center"><img src="images/page_036/flecha.png" className="mep-5 hp-15" alt="" /><span className="f-Ubuntu-L fsp-14 text-start">Me siento tenso y nervioso cuando trabajo con mi equipo.</span></div>
                                <div className="wp-60"><img src="images/page_036/cuadro.svg" alt="" className="wp-30" /></div>
                                <div className="wp-60"><img src="images/page_036/cuadro.svg" alt="" className="wp-30" /></div>
                                <div className="wp-75"><img src="images/page_036/cuadro.svg" alt="" className="wp-30" /></div>
                                <div className="wp-60"><img src="images/page_036/cuadro.svg" alt="" className="wp-30" /></div>
                            </div>

                            <div className="d-flex w-100 titulo-linea linea-separa-int ptp-10">
                                <div className="flex-fill d-flex w-auto msp-10 align-items-center"><img src="images/page_036/flecha.png" className="mep-5 hp-15" alt="" /><span className="f-Ubuntu-L fsp-14 text-start"> Me asusta no hacer bien el trabajo y recibir críticas.</span></div>
                                <div className="wp-60"><img src="images/page_036/cuadro.svg" alt="" className="wp-30" /></div>
                                <div className="wp-60"><img src="images/page_036/cuadro.svg" alt="" className="wp-30" /></div>
                                <div className="wp-75"><img src="images/page_036/cuadro.svg" alt="" className="wp-30" /></div>
                                <div className="wp-60"><img src="images/page_036/cuadro.svg" alt="" className="wp-30" /></div>
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

export default Page036;
