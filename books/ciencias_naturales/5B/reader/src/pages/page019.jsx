import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import ItemLista from "../components/ItemLista";

import "./page_019.css";

function Page019(props) {

  const pagina = "019";
  var indexInput = 0;
  const etapa = "2"
  const background = "bgc-bulma";
  const color = "color-bulma";
  const borderColor = "border-color-bulma"
  const borderColorTabla = "border-color-buzz"
  const bgc_cajas = "bgc-piccolo";

  return (

    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className={"dosier-e" + etapa + " page bgc-white overflow-hidden position-relative"} id={"page_" + pagina}>
          <img src={"images/cabecera/dosier_e" + etapa + ".svg"} className="w-100" alt="" />
          <div className="position-relative w-100 mbp-10">
            <div className="psp-80 pep-70 ptp-30 pbp-0 position-relative">
              <div className="fsp-16 f-Ubuntu-R text-start psp-50 pbp-10">Esta página fue completada por:</div>
              <div className={"psp-50 pep-50 ptp-5 pbp-5 bgc-white rounded-p-10 border-style-solid border-1 " + borderColor + " d-flex justify-content-center position-relative"}>
                <div className="position-absolute top-50 start-100 translate-middle wp-100 msp-0 mtp--10"><img src={"images/page_" + pagina + "/img_002.png"} className="w-80" alt="" /></div>
                <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp--10"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-60" alt="" /></div>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="max-wp-550 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
              </div>
            </div>
          </div>

          <div className="d-flex global-margin mtp-20 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">
                <ItemLista colorBullet="bgc-bulma" fontSize="fsp-15" fuente="f-Ubuntu-R" color="color-dark">Leemos y numeramos las tareas de nuestro proyecto.</ItemLista>
              </div>
              <div className="col-12 p-0 m-0 position-relative">

                <div className="d-flex bgc-white rounded-p-10 mtp-10 mbp-10 psp-10 pep-10 ptp-30 pbp-10 position-relative">
                  <div className="position-absolute top-0 start-100 translate-middle msp-0 mtp-60 zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-35" alt="" /></div>
                  <div className="position-absolute top-100 start-100 translate-middle msp-0 mtp--50 zindex-1"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-70" alt="" /></div>
                  <div className="position-absolute top-100 start-0 translate-middle msp-0 mtp--100 zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-35" alt="" /></div>

                  <div className="row p-0 m-0 w-100">
                    <div className="col-6 p-0 m-0 position-relative">

                      <div className="d-flex msp-10 mep-10 mtp-0 mbp-10 position-relative">
                        <div className="position-absolute top-0 start-50 translate-middle msp-0 mtp-0  zindex-1">

                          <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center wp-30 flex-grow-1 lhp-30 min-hp-35" />
                          </div>

                        </div>

                        <div className="border-style-solid border-0 border-color-padme rounded-p-10">
                          <div className="d-flex flex-column bgc-vegeta rounded-p-10 min-hp-130 center-center">
                            <div className="psp-10 pep-10 ptp-30 pbp-10 text-center f-Ubuntu-L fsp-15">
                              Creamos la campaña para dar a conocer nuestra propuesta durante el Día de la Alimentación Saludable.
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="col-6 p-0 m-0 position-relative">

                      <div className="d-flex msp-10 mep-10 mtp-0 mbp-10 position-relative">
                        <div className="position-absolute top-0 start-50 translate-middle msp-0 mtp-0  zindex-1">

                          <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center wp-30 flex-grow-1 lhp-30 min-hp-35" />
                          </div>

                        </div>

                        <div className="border-style-solid border-0 border-color-padme rounded-p-10">
                          <div className="d-flex flex-column bgc-woody rounded-p-10 min-hp-130 center-center">
                            <div className="psp-10 pep-10 ptp-30 pbp-10 text-center f-Ubuntu-L fsp-15">
                              Investigamos acerca de los requerimientos nutricionales de las personas.
                            </div>
                          </div>
                        </div>
                      </div>


                    </div>
                    <div className="col-6 p-0 m-0 position-relative">


                      <div className="d-flex msp-10 mep-10 mtp-20 mbp-0 position-relative">
                        <div className="position-absolute top-0 start-50 translate-middle msp-0 mtp-0  zindex-1">

                          <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center wp-30 flex-grow-1 lhp-30 min-hp-35" />
                          </div>

                        </div>

                        <div className="border-style-solid border-0 border-color-padme rounded-p-10">
                          <div className="d-flex flex-column bgc-rain rounded-p-10">
                            <div className="psp-10 pep-10 ptp-30 pbp-10 text-center f-Ubuntu-L fsp-15">
                              Creamos nuestra propuesta de alimentación saludable.
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="col-6 p-0 m-0 position-relative">


                      <div className="d-flex msp-10 mep-10 mtp-20 mbp-0 position-relative">
                        <div className="position-absolute top-0 start-50 translate-middle msp-0 mtp-0  zindex-1">

                          <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center wp-30 flex-grow-1 lhp-30 min-hp-35" />
                          </div>

                        </div>

                        <div className="border-style-solid border-0 border-color-padme rounded-p-10">
                          <div className="d-flex flex-column bgc-buzz rounded-p-10">
                            <div className="psp-10 pep-10 ptp-30 pbp-10 text-center f-Ubuntu-L fsp-15">
                              Recolectamos información de los estudiantes de el colegio.
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>

                    <div className="col-6 p-0 m-0 position-relative">

                      <div className="d-flex msp-10 mep-10 mtp-30 mbp-10 position-relative">
                        <div className="position-absolute top-0 start-50 translate-middle msp-0 mtp-0  zindex-1">

                          <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center wp-30 flex-grow-1 lhp-30 min-hp-35" />
                          </div>

                        </div>

                        <div className="border-style-solid border-0 border-color-padme rounded-p-10">
                          <div className="d-flex flex-column bgc-windu rounded-p-10 center-center min-hp-110">
                            <div className="psp-10 pep-10 ptp-30 pbp-10 text-center f-Ubuntu-L fsp-15">
                              Difundimos la campaña y celebramos el Día de la Alimentación Saludable.
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>

                    <div className="col-6 p-0 m-0 position-relative">

                      <div className="d-flex msp-10 mep-10 mtp-30 mbp-10 position-relative w-100">
                        <div className="position-absolute top-0 start-50 translate-middle msp--10 mtp-0  zindex-1">

                          <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center wp-30 flex-grow-1 lhp-30 min-hp-35" />
                          </div>

                        </div>

                        <div className="border-style-solid border-0 border-color-padme rounded-p-10 w-100 mep-20">
                          <div className="d-flex flex-column bgc-arlo rounded-p-10 center-center min-hp-110">
                            <div className="psp-10 pep-10 ptp-30 pbp-10 text-center f-Ubuntu-L fsp-15">
                              Organizamos nuestro plan de trabajo.
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>


              </div>
            </div>
          </div>

          <div className="d-flex global-margin mtp-0 mbp-140 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">
                <ItemLista colorBullet="bgc-bulma" fontSize="fsp-15" fuente="f-Ubuntu-R" color="color-dark">Elaboramos nuestro cronograma del proyecto en una cartulina.</ItemLista>
                <ItemLista colorBullet="bgc-bulma" fontSize="fsp-15" fuente="f-Ubuntu-R" color="color-dark">Nos ponemos de acuerdo y nos comprometemos a asumir los siguientes roles en este proyecto:</ItemLista>
              </div>

              <div className="col-6 p-0 m-0 position-relative">

                <div className="d-flex mtp-10 msp-10 mep-10 center-center">

                  <div className="border-style-solid border-2 border-color-white rounded-p-10 w-100 mep-10 msp-10">
                    <div className="d-flex flex-column bgc-white rounded-p-10 min-hp-100 border-color-bulma border-style-solid border-2">
                      <div className="bgc-white w-100 f-Ubuntu-B fsp-15 text-center color-bulma rounded-set-10 psp-10 pep-10 ptp-5 pbp-5">
                        Coordinación
                      </div>
                      <div className="psp-10 pep-10 f-Ubuntu-L fsp-15 text-center">
                        Quien asume este rol será:
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="max-wp-280 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              <div className="col-6 p-0 m-0 position-relative">

                <div className="d-flex mtp-10 msp-10 mep-10 center-center">

                  <div className="border-style-solid border-2 border-color-white rounded-p-10 w-100 mep-10 msp-10">
                    <div className="d-flex flex-column bgc-white rounded-p-10 min-hp-100 border-color-raiden border-style-solid border-2">
                      <div className="bgc-white w-100 f-Ubuntu-B fsp-15 text-center color-bulma rounded-set-10 psp-10 pep-10 ptp-5 pbp-5">
                        Supervisión
                      </div>
                      <div className="psp-10 pep-10 f-Ubuntu-L fsp-15 text-center">
                        Quien asume este rol será:
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="max-wp-280 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              <div className="col-6 p-0 m-0 position-relative">

                <div className="d-flex mtp-10 msp-10 mep-10 center-center">

                  <div className="border-style-solid border-2 border-color-white rounded-p-10 w-100 mep-10 msp-10">
                    <div className="d-flex flex-column bgc-white rounded-p-10 min-hp-100 border-color-leono border-style-solid border-2">
                      <div className="bgc-white w-100 f-Ubuntu-B fsp-15 text-center color-bulma rounded-set-10 psp-10 pep-10 ptp-5 pbp-5">
                        Relaciones públicas
                      </div>
                      <div className="psp-10 pep-10 f-Ubuntu-L fsp-15 text-center">
                        Quien asume este rol será:
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="max-wp-280 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              <div className="col-6 p-0 m-0 position-relative">

                <div className="d-flex mtp-10 msp-10 mep-10 center-center">

                  <div className="border-style-solid border-2 border-color-white rounded-p-10 w-100 mep-10 msp-10">
                    <div className="d-flex flex-column bgc-white rounded-p-10 min-hp-100 border-color-freezer border-style-solid border-2">
                      <div className="bgc-white w-100 f-Ubuntu-B fsp-15 text-center color-bulma rounded-set-10 psp-10 pep-10 ptp-5 pbp-5">
                        Intendencia
                      </div>
                      <div className="psp-10 pep-10 f-Ubuntu-L fsp-15 text-center">
                        Quien asume este rol será:
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="max-wp-280 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>

          {/* BEIGN PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>ABP &copy; SM</div>
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>
          {/* END PIE DE PAGINA */}
        </div>
      </div>
    </div>



  );
}

export default Page019;
