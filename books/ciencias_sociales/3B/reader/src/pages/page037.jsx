import React from "react";
import InputBox from "../components/InputBox";
// import ModalVideo from "../components/ModalVideo";
import "./page_037.css";

function Page037(props) {

  const pagina = "037";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v2 bgc-pidgey d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 align-items-center ptp-40 psp-30 pep-30">
              <div className="caja-seccion wp-160 hp-60 d-flex justify-content-center ptp-10 mtp-5 color-pidgey fsp-24 f-IntroRustG-Base">SESIÓN 10</div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Conocemos la diversidad de nuestra comunidad</div>
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-10 psp-60 mbp-0 contenedor-pagina position-relative">
            <div className="position-absolute top-0 end-0 visible-768"><img src="images/page_037/barra.png" className="wp-90 mep-55 mtp-20" alt="" /></div>
            <div className="f-Ubuntu-B fsp-20 color-pidgey text-start lhp-20 psp-50">Analizamos resultados</div>
            <div className="d-flex">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_037/g_i.svg" alt="" />
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">1</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start">Revisamos nuestros gráficos y podemos decir que…</div>
            </div>
          </div>

          <div className="ptp-10 psp-60 pep-60 pbp-100">
            <div className="row rounded-p-10 bgc-jaga">

              <div className="col-12 col-md-6 p-0">
                <div className="w-100 p-2 m-0 position-relative">
                  <div className="position-absolute top-0 start-0">
                    <img src="images/page_037/pincho.png" className="hp-45 msp--10 mtp--5" alt="" />
                    <div className="mtp--27 msp-25 color-white f-Ubuntu-B fsp-16 rota_p37">A partir de la pregunta 1…</div>
                  </div>
                  <div className="w-100 rounded-p-10 bgc-white p-3 m-0">
                    {/* <div className="f-Ubuntu-L fsp-15 text-start ptp-30">Resultados:</div> */}
                    <div className="min-hp-140 mtp-15">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-140" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 p-0">
                <div className="w-100 p-2 m-0 position-relative">
                  <div className="position-absolute top-0 start-0">
                    <img src="images/page_037/pincho.png" className="hp-45 msp--10 mtp--5" alt="" />
                    <div className="mtp--27 msp-25 color-white f-Ubuntu-B fsp-16 rota_p37">A partir de la pregunta 2…</div>
                  </div>
                  <div className="w-100 rounded-p-10 bgc-white p-3 m-0">
                    {/* <div className="f-Ubuntu-L fsp-15 text-start ptp-30">Resultados:</div> */}
                    <div className="min-hp-140 mtp-15">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-140" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 p-0">
                <div className="w-100 p-2 m-0 position-relative">
                  <div className="position-absolute top-0 start-0">
                    <img src="images/page_037/pincho.png" className="hp-45 msp--10 mtp--5" alt="" />
                    <div className="mtp--27 msp-25 color-white f-Ubuntu-B fsp-16 rota_p37">A partir de la pregunta 3…</div>
                  </div>
                  <div className="w-100 rounded-p-10 bgc-white p-3 m-0">
                    {/* <div className="f-Ubuntu-L fsp-15 text-start ptp-30">Resultados:</div> */}
                    <div className="min-hp-140 mtp-15">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-140" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 p-0">
                <div className="w-100 p-2 m-0 position-relative">
                  <div className="position-absolute top-0 start-0">
                    <img src="images/page_037/pincho.png" className="hp-45 msp--10 mtp--5" alt="" />
                    <div className="mtp--27 msp-25 color-white f-Ubuntu-B fsp-16 rota_p37">A partir de la pregunta 4…</div>
                  </div>
                  <div className="w-100 rounded-p-10 bgc-white p-3 m-0">
                    {/* <div className="f-Ubuntu-L fsp-15 text-start ptp-30">Resultados:</div> */}
                    <div className="min-hp-140 mtp-15">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-140" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 p-0">
                <div className="w-100 p-2 m-0 position-relative">
                  <div className="position-absolute top-0 start-0">
                    <img src="images/page_037/pincho.png" className="hp-45 msp--10 mtp--5" alt="" />
                    <div className="mtp--27 msp-25 color-white f-Ubuntu-B fsp-16 rota_p37">A partir de la pregunta 5…</div>
                  </div>
                  <div className="w-100 rounded-p-10 bgc-white p-3 m-0">
                    {/* <div className="f-Ubuntu-L fsp-15 text-start ptp-30">Resultados:</div> */}
                    <div className="min-hp-140 mtp-15">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-140" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 p-0">
                <div className="w-100 psp-20 pep-20 ptp-10 pbp-10 m-0 position-relative">
                  {/* <div className="position-absolute top-0 start-0 mtp--20">
                        <img src="images/page_037/hoja.svg" className="w-100" alt=""/>
                    </div> */}
                  <div className="f-pixilate-bold fsp-16 text-start">Como conclusión general...</div>
                  <div className="min-hp-175">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" />
                  </div>
                  {/* <div className="position-absolute top-0 start-0 w-100 hoja gira p-4 mtp--20 msp--10 mep--20 mbp--20">
                      <div className="f-hanoded-butterflyball fsp-15 text-start">Como conclusión general</div>
                      <div className="min-hp-175">
                        <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" />
                      </div>
                    </div> */}
                </div>
              </div>

              {/* <div className="col-12 p-0">
                  <div className="w-100 p-2 m-0 position-relative">
                    <div className="position-absolute top-0 start-0">
                      <img src="images/page_037/pincho.png" className="hp-45 msp--10 mtp--5" alt=""/>
                      <div className="mtp--27 msp-25 color-white f-hanoded-butterflyball fsp-17 rota">A partir de la pregunta 5…</div>
                    </div>
                    <div className="w-100 rounded-p-10 bgc-white p-3 m-0">
                      <div className="min-hp-140 mtp-15 crece">
                        <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-140" />
                      </div>
                    </div>
                  </div>
                </div> */}

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

export default Page037;
