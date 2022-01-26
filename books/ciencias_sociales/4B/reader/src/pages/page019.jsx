import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import "./page_019.css";

function Page019(props) {
  const pagina = "019";
  var indexInput = 0;
  const etapa = "2";
  const background = "bgc-bulma";
  const color = "color-bulma";
  const borderColor = "border-color-bulma";
  const borderColorTabla = "border-color-buzz";
  const bgc_cajas = "bgc-piccolo";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className={"dosier-e" + etapa + " page bgc-white overflow-hidden position-relative"} id={"page_" + pagina}>
          <img src={"images/cabecera/dosier_e" + etapa + ".svg"} className="w-100" alt="" />


          <div className="position-relative w-100">
            <div className="row psp-80 pep-70 ptp-10 pbp-50 ">
              <div className="f-Ubuntu-R text-start msp-40 fsp-18 psp-30 pbp-10">
                Esta página fue completada por:
              </div>
              <div className="d-flex position-relative">
                <img
                  src="images/page_019/img_002.png"
                  class="hp-110 position-absolute start-0 top-0 mtp--20 msp--10"
                  alt=""
                />
                <div className="bgc-white rounded-p-10 border-style-solid border-1 border-color-bulma w-65 py-1 psp-50 pep-20">
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-35"
                  />
                </div>
              </div>
            </div>
            <div className="position-absolute top-0 start-100 msp--320 mtp-0 zindex-1">
              <div className="position-relative bgc-white border-style-solid border-1 border-dark wp-250 hp-200 d-flex flex-column p-2 giro--4deg sombra-1">
                <div className=" mxwp-160 centrar-hor f-pixilate-regular fsp-21">Dibuja aquí la insignia de tu equipo</div>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-25 min-hp-35" />
                <div className="position-absolute top-0 start-100 translate-middle msp--30 mtp-35 zindex-1"><img src={"images/page_" + pagina + "/clip.svg"} className="wp-60" alt="" /></div>
              </div>
            </div>
          </div>

          <div className="psp-80 pep-70 mtp--10 text-start position-relative">
            <div className="psp-30 pbp-20 f-Ubuntu-R col-md-8 col-5">Declaramos los pasos de nuestro proyecto.</div>

            <div className="d-flex">
              <div className="caja-num-p19 bgc-soldados border-style-solid border-color-white border-3 rounded-tbs-20 align-self-center">
                <div className="f-pixilate-bold fsp-40 color-white text-center">1</div>
              </div>
              <div className="caja-texto-p19 bgc-klee border-style-solid border-color-white border-3 position-relative msp--2">
                <div className="position-absolute top-0 start-0 msp-10 mtp-10">
                  <span className="f-pixilate-regular fsp-21">MOTIVACIÓN</span>
                </div>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 mtp-35 lhp-25 min-hp-50" />
              </div>
            </div>

            <div className="d-flex mtp--2 msp-40-rp19">
              <div className="caja-num-p19 bgc-bulma border-style-solid border-color-white border-3 rounded-tbs-20 align-self-center">
                <div className="f-pixilate-bold fsp-40 color-white text-center">2</div>
              </div>
              <div className="caja-texto-p19 bgc-tigro border-style-solid border-color-white border-3 position-relative msp--2">
                <div className="position-absolute top-0 start-0 msp-10 mtp-10">
                  <span className="f-pixilate-regular fsp-21">PLANIFICACIÓN</span>
                </div>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 mtp-35 lhp-25 min-hp-50" />
              </div>
            </div>

            <div className="d-flex mtp--2 msp-80-rp19">
              <div className="caja-num-p19 bgc-android18 border-style-solid border-color-white border-3 rounded-tbs-20 align-self-center">
                <div className="f-pixilate-bold fsp-40 color-white text-center">3</div>
              </div>
              <div className="caja-texto-p19 bgc-gohan border-style-solid border-color-white border-3 position-relative msp--2">
                <div className="position-absolute top-0 start-0 msp-10 mtp-10">
                  <span className="f-pixilate-regular fsp-21">INVESTIGACIÓN</span>
                </div>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 mtp-35 lhp-25 min-hp-50" />
              </div>
            </div>

            <div className="d-flex mtp--2 msp-120-rp19">
              <div className="caja-num-p19 bgc-pidgey border-style-solid border-color-white border-3 rounded-tbs-20 align-self-center">
                <div className="f-pixilate-bold fsp-40 color-white text-center">4</div>
              </div>
              <div className="caja-texto-p19 bgc-trunks border-style-solid border-color-white border-3 position-relative msp--2">
                <div className="position-absolute top-0 start-0 msp-10 mtp-10">
                  <span className="f-pixilate-regular fsp-21">EXPERIMENTACIÓN</span>
                </div>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 mtp-35 lhp-25 min-hp-50" />
              </div>
            </div>

            <div className="d-flex mtp--2 msp-160-rp19">
              <div className="caja-num-p19 bgc-saitama border-style-solid border-color-white border-3 rounded-tbs-20 align-self-center">
                <div className="f-pixilate-bold fsp-40 color-white text-center">5</div>
              </div>
              <div className="caja-texto-p19 bgc-bobafett border-style-solid border-color-white border-3 position-relative msp--2">
                <div className="position-absolute top-0 start-0 msp-10 mtp-10">
                  <span className="f-pixilate-regular fsp-21">CREACIÓN</span>
                </div>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 mtp-35 lhp-25 min-hp-50" />
              </div>
            </div>

            <div className="d-flex mtp--2 msp-200-rp19">
              <div className="caja-num-p19 bgc-pikachu border-style-solid border-color-white border-3 rounded-tbs-20 align-self-center">
                <div className="f-pixilate-bold fsp-40 color-white text-center">6</div>
              </div>
              <div className="caja-texto-p19 bgc-quaternary border-style-solid border-color-white border-3 position-relative msp--2">
                <div className="position-absolute top-0 start-0 msp-10 mtp-10">
                  <span className="f-pixilate-regular fsp-21">DIFUSIÓN</span>
                </div>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 mtp-35 lhp-25 min-hp-50" />
              </div>
            </div>

            <div className="position-absolute top-50 start-0 translate-middle msp-50 mtp-120 zindex-1"><img src={"images/page_" + pagina + "/img_009.png"} className="wp-60" alt="" /></div>
            <div className="position-absolute top-100 start-100 translate-middle mtp-0 msp--80 zindex-1"><img src={"images/page_" + pagina + "/img_010.png"} className="wp-120" alt="" /></div>

          </div>

          <div className="psp-80 pep-70 ptp-10 text-start pbp-40 position-relative">
            <div className="psp-30 pbp-20 f-Ubuntu-R">Declaramos nuestro cronograma:</div>
            <div className="row w-100">

              <div className="col-md-4 col-12 position-relative pbp-20">
                <div className="bgc-white border-style-solid border-color-dark border-1 w-100 hp-100 rounded-p-10 p-2">
                  <div className="d-flex">
                    <div className="">Fecha: </div>
                    <div className="w-100"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-25 min-hp-35" /></div>
                  </div>
                  <div className="">Objetivo:</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-25 min-hp-45" />
                </div>
                <div className="position-absolute top-50 start-100 translate-middle msp-1 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_011.svg"} className="wp-25" alt="" /></div>
              </div>

              <div className="col-md-4 col-12 position-relative pbp-20">
                <div className="bgc-white border-style-solid border-color-dark border-1 w-100 hp-100 rounded-p-10 p-2">
                  <div className="d-flex">
                    <div className="">Fecha: </div>
                    <div className="w-100"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-25 min-hp-35" /></div>
                  </div>
                  <div className="">Objetivo:</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-25 min-hp-45" />
                </div>
                <div className="position-absolute top-50 start-100 translate-middle msp-1 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_011.svg"} className="wp-25" alt="" /></div>
              </div>

              <div className="col-md-4 col-12 position-relative pbp-20">
                <div className="bgc-white border-style-solid border-color-dark border-1 w-100 hp-100 rounded-p-10 p-2">
                  <div className="d-flex">
                    <div className="">Fecha: </div>
                    <div className="w-100"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-25 min-hp-35" /></div>
                  </div>
                  <div className="">Objetivo:</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-25 min-hp-45" />
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
          {/* FIN PIE DE PAGINA */}
        </div>
      </div>
    </div>
  );
}

export default Page019;