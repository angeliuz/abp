import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_063.css";

function Page063(props) {

  const pagina = "063";
  var indexInput = 0;
  const etapa = "5"
  const background = "bgc-saitama";
  const color = "color-saitama";
  const borderColor = "border-color-saitama"
  const borderColorTabla = "border-color-bobafett"
  const bgc_cajas = "bgc-bobafett";

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
                <img src={"images/page_" + pagina + "/.svg"} class="hp-110 position-absolute start-0 top-0 mtp--20 msp--10" alt="" />
                <div className={"bgc-white rounded-p-10 border-style-solid border-1 " + borderColor + " w-100 py-1 psp-50 pep-20"}>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 w-60 lhp-35 min-hp-35" />
                </div>
              </div>
            </div>

            <div className="position-absolute top-0 start-100 hoja-p39 zindex-2">
              <div className="position-relative bgc-white border-style-solid border-1 border-dark wp-250 hp-200 d-flex flex-column p-2 giro--4deg sombra-1">
                <div className=" mxwp-160 centrar-hor f-pixilate-regular fsp-21">Dibuja aquí la insignia de tu equipo</div>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-25 min-hp-35" />

                <div className="position-absolute top-0 start-100 translate-middle msp--30 mtp-17 zindex-1"><img src={"images/page_" + pagina + "/clip.svg"} className="wp-30" alt="" /></div>
                <div className="position-absolute top-100 start-100 translate-middle msp-0 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/estrella.png"} className="wp-60" alt="" /></div>

              </div>
            </div>
          </div>
          <div className="espaciado-p39"></div>

          <div className="d-flex global-margin ptp-60 mbp-90 psp-0 pep-0 ptp-0 pbp-0 mbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 mnp-20 position-relative">
                <div className="position-absolute top-0 start-50 translate-middle  visible-768   zindex-2 wp-100 msp-0 mtp--30"><img src="images/page_063/img_003.png" className="hp-100" alt="" /></div>

                <div className="row d-flex align-items-center">

                  <div className="col-6 bgc-wagner rounded-ts-20">
                    <div className="ptp-20 pbp-20 text-start">Las tareas que realizamos en esta etapa fueron:</div>
                  </div>

                  <div className="col-6 bgc-milena rounded-te-20">
                    <div className="ptp-20 pbp-20 text-start">Los responsables de cada una de estas tareas fueron:</div>
                  </div>

                </div>


                <div className="row d-flex align-items-center position-relative">
                  <div className="col-6 d-flex align-self-stretch bgc-wagner align-items-center">
                    <div className="ptp-10 pbp-10 psp-10 text-start w-100">
                      <div className="bgc-white rounded-p-20">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-100" />
                      </div>
                    </div>
                  </div>
                  <div className="col-6 d-flex align-self-stretch bgc-milena align-items-center">
                    <div className="ptp-10 pbp-10 psp-10 text-start w-100">
                      <div className="bgc-white rounded-p-20">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-100" />
                      </div>
                    </div>
                  </div>
                  <div className="position-absolute top-50 start-50 translate-middle msp-0  "><img src="images/page_063/img_008.svg" class="hp-30" alt="" /></div>
                </div>

                <div className="row d-flex align-items-center position-relative">
                  <div className="col-6 d-flex align-self-stretch bgc-wagner align-items-center">
                    <div className="ptp-10 pbp-10 psp-10 text-start w-100">
                      <div className="bgc-white rounded-p-20">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-100" />
                      </div>
                    </div>
                  </div>
                  <div className="col-6 d-flex align-self-stretch bgc-milena align-items-center">
                    <div className="ptp-10 pbp-10 psp-10 text-start w-100">
                      <div className="bgc-white rounded-p-20">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-100" />
                      </div>
                    </div>
                  </div>
                  <div className="position-absolute top-50 start-50 translate-middle msp-0  "><img src="images/page_063/img_008.svg" class="hp-30" alt="" /></div>
                </div>

                <div className="row d-flex align-items-center position-relative">
                  <div className="col-6 d-flex align-self-stretch bgc-wagner align-items-center">
                    <div className="ptp-10 pbp-10 psp-10 text-start w-100">
                      <div className="bgc-white rounded-p-20">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-100" />
                      </div>
                    </div>
                  </div>
                  <div className="col-6 d-flex align-self-stretch bgc-milena align-items-center">
                    <div className="ptp-10 pbp-10 psp-10 text-start w-100">
                      <div className="bgc-white rounded-p-20">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-100" />
                      </div>
                    </div>
                  </div>
                  <div className="position-absolute top-50 start-50 translate-middle msp-0  "><img src="images/page_063/img_008.svg" class="hp-30" alt="" /></div>
                </div>

                <div className="row d-flex align-items-center position-relative">
                  <div className="col-6 d-flex align-self-stretch bgc-wagner align-items-center">
                    <div className="ptp-10 pbp-10 psp-10 text-start w-100">
                      <div className="bgc-white rounded-p-20">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-100" />
                      </div>
                    </div>
                  </div>
                  <div className="col-6 d-flex align-self-stretch bgc-milena align-items-center">
                    <div className="ptp-10 pbp-10 psp-10 text-start w-100">
                      <div className="bgc-white rounded-p-20">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-100" />
                      </div>
                    </div>
                  </div>
                  <div className="position-absolute top-50 start-50 translate-middle msp-0  "><img src="images/page_063/img_008.svg" class="hp-30" alt="" /></div>
                </div>

                <div className="row d-flex align-items-center position-relative">
                  <div className="col-6 d-flex align-self-stretch bgc-wagner align-items-center rounded-bs-20">
                    <div className="ptp-10 pbp-10 psp-10 text-start w-100">
                      <div className="bgc-white rounded-p-20">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-100" />
                      </div>
                    </div>
                  </div>
                  <div className="col-6 d-flex align-self-stretch bgc-milena align-items-center rounded-be-20">
                    <div className="ptp-10 pbp-10 psp-10 text-start w-100">
                      <div className="bgc-white rounded-p-20">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-100" />
                      </div>
                    </div>
                  </div>
                  <div className="position-absolute top-50 start-50 translate-middle msp-0  "><img src="images/page_063/img_008.svg" class="hp-30" alt="" /></div>
                </div>
                <div className="position-absolute top-50 start-100 translate-middle msp-10 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-60" alt="" /></div>
                <div className="position-absolute top-100 start-50 translate-middle msp-0 mtp-30 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_006.png"} className="hp-100" alt="" /></div>
                <div className="position-absolute top-100 start-0 translate-middle msp--10 mtp--10 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_007.png"} className="wp-40" alt="" /></div>

              </div>
            </div>
          </div>


          {/* BEIGN PIE DE PAGINA */}
          <div className="d-flex caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>ABP &copy; SM</div>
            <div className="bgc-goku wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>
          {/* END PIE DE PAGINA */}
        </div>
      </div>
    </div>

  );
}

export default Page063;
