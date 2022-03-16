import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import ModalRecortable from "../components/ModalRecortable"
import "./page_021.css";

function Page021(props) {
  const pagina = "021";
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
              <div className="f-Ubuntu-R text-start fsp-18 pbp-10">
                Esta página fue completada por:
              </div>
              <div className="d-flex position-relative">
                <img
                  src="images/page_021/img_001.png"
                  class="hp-80 position-absolute start-0 top-0 mtp--10"
                  alt=""
                />
                <div className="bgc-white rounded-p-10 border-style-solid border-1 border-color-bulma w-100 py-1 psp-50 pep-20">
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-35 w-90"
                  />
                </div>
                <img
                  src="images/page_021/img_002.png"
                  class="hp-80 position-absolute start-100 top-0 msp--70 mtp--30"
                  alt=""
                />
              </div>

              <div className="ptp-30 container-titulo-global mbp-40">
                {/* <div className={"f-Ubuntu-B fsp-20 psp-40 text-start lhp-20 " + color}>
                  Las tareas de cada etapa
                </div> */}
                <div className="d-flex">
                  {/* <img src={"images/page_" + pagina + "/img_002.svg"} className="hp-20 align-center mt-3 me-0 mb-2" alt="" /> */}
                  <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                    1
                  </div>
                  <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                    Usamos los recortables para organizar las etapas y tareas que quedan del proyecto.
                  </div>
                  {/* <img src={"images/page_"+pagina+"/img_001.svg"} className="w-50" alt="" /> */}
                  {/* <ModalVideo id={"p" + pagina + "_video" + (indexInput += 1)} image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                  {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_"+pagina+"/img_001.png" className="p-0 px-1" /> */}
                  {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image={"images/page_" + pagina + "/img_003.svg"} clasesImagen="hp-50 text-center mtp-10 " className="p-0 px-0" /> */}
                <img src="images/page_021/recortable.svg" className=""></img>
                </div>
              </div>
            </div>

            <div className="psp-80 pep-60 ptp-0">
              <div className="row position-relative">
                <div className="col-md-6 col-12 pbp-20 position-relative">
                  <div className="bgc-white mxwp-300 mnhp-240 centrar border-style-dashed border-color-info border-2 position-relative">
                    <ModalRecortable
                      id={"p" + pagina + "_cutouts_" + (indexInput += 1)}
                      pagina={pagina}

                      numRecortables="3"
                      className="p-0 m-0 d-flex wp-200 hp-200 bgc-red pe-auto"
                    />
                  </div>
                  <div className="position-absolute translate-middle top-0 start-50 mtp--15">
                    <div className="wp-200 mxwp-200 hp-30 bgc-android18 rounded-set-20 border-style-solid border-1 border-color-anakin centrar-hor">
                      <div className="color-white ptp-3 fsp-18 f-pixilate-bold ">
                        INVESTIGACIÓN
                      </div>
                    </div>
                  </div>
                  <div className="w-100 border-style-solid border-color-dark border-1 bgc-white p-1 mtp-10 mbp-20 d-flex justify-content-center">
                    <div className="text-center f-Ubuntu-R pep-10 mtp-10">
                      Fecha: del
                    </div>
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea mxwp-a lhp-35 min-hp-30"
                    />
                    <div className="text-center f-Ubuntu-R psp-10 pep-10 mtp-10">
                      al
                    </div>
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea mxwp-a lhp-35 min-hp-30"
                    />
                  </div>
                  <div className="position-absolute top-0 start-100 translate-middle msp--30 mtp--10 zindex-1"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-30" alt="" /></div>
                </div>
                <div className="col-md-6 col-12 pbp-20 position-relative">
                  <div className="bgc-white mxwp-280 mnhp-240 centrar border-style-dashed border-color-info border-2 position-relative">
                    <ModalRecortable
                      id={"p" + pagina + "_cutouts_" + (indexInput += 1)}
                      pagina={pagina}

                      numRecortables="3"
                      className="p-0 m-0 d-flex wp-60 hp-60 bgc-red pe-auto"
                    />
                  </div>
                  <div className="position-absolute translate-middle top-0 start-50 mtp--15">
                    <div className="wp-200 mxwp-200 hp-30 bgc-pidgey rounded-set-20 border-style-solid border-1 border-color-anakin centrar-hor">
                      <div className="color-white ptp-3 fsp-18 f-pixilate-bold ">
                        EXPERIMENTACIÓN
                      </div>
                    </div>
                  </div>
                  <div className="w-100 border-style-solid border-color-dark border-1 bgc-white p-1 mtp-10 mbp-20 d-flex justify-content-center">
                    <div className="text-center f-Ubuntu-R pep-10 mtp-10">
                      Fecha: del
                    </div>
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea mxwp-a lhp-35 min-hp-30"
                    />
                    <div className="text-center f-Ubuntu-R psp-10 pep-10 mtp-10">
                      al
                    </div>
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea mxwp-a lhp-35 min-hp-30"
                    />
                  </div>
                  <div className="position-absolute top-0 start-100 translate-middle msp--30 mtp--10 zindex-1"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-30" alt="" /></div>
                </div>
                <div className="col-md-6 col-12 pbp-20 position-relative">
                  <div className="bgc-white mxwp-300 mnhp-240 centrar border-style-dashed border-color-info border-2 position-relative">
                    <ModalRecortable
                      id={"p" + pagina + "_cutouts_" + (indexInput += 1)}
                      pagina={pagina}

                      numRecortables="3"
                      className="p-0 m-0 d-flex wp-200 hp-200 bgc-red pe-auto"
                    />
                  </div>
                  <div className="position-absolute translate-middle top-0 start-50 mtp--15">
                    <div className="wp-200 mxwp-200 hp-30 bgc-saitama rounded-set-20 border-style-solid border-1 border-color-anakin centrar-hor">
                      <div className="color-white ptp-3 fsp-18 f-pixilate-bold ">
                        CREACIÓN
                      </div>
                    </div>
                  </div>
                  <div className="w-100 border-style-solid border-color-dark border-1 bgc-white p-1 mtp-10 mbp-20 d-flex justify-content-center">
                    <div className="text-center f-Ubuntu-R pep-10 mtp-10">
                      Fecha: del
                    </div>
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea mxwp-a lhp-35 min-hp-30"
                    />
                    <div className="text-center f-Ubuntu-R psp-10 pep-10 mtp-10">
                      al
                    </div>
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea mxwp-a lhp-35 min-hp-30"
                    />
                  </div>
                  <div className="position-absolute top-0 start-100 translate-middle msp--30 mtp--10 zindex-1"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-30" alt="" /></div>
                </div>
                <div className="col-md-6 col-12 pbp-20 position-relative">
                  <div className="bgc-white mxwp-280 mnhp-240 centrar border-style-dashed border-color-info border-2 position-relative">
                    <ModalRecortable
                      id={"p" + pagina + "_cutouts_" + (indexInput += 1)}
                      pagina={pagina}

                      numRecortables="3"
                      className="p-0 m-0 d-flex wp-60 hp-60 bgc-red pe-auto"
                    />
                  </div>
                  <div className="position-absolute translate-middle top-0 start-50 mtp--15">
                    <div className="wp-200 mxwp-200 hp-30 bgc-pikachu rounded-set-20 border-style-solid border-1 border-color-anakin centrar-hor">
                      <div className="color-white ptp-3 fsp-18 f-pixilate-bold ">
                       DIFUSIÓN
                      </div>
                    </div>
                  </div>
                  <div className="w-100 border-style-solid border-color-dark border-1 bgc-white p-1 mtp-10 mbp-20 d-flex justify-content-center">
                    <div className="text-center f-Ubuntu-R pep-10 mtp-10">
                      Fecha: del
                    </div>
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea mxwp-a lhp-35 min-hp-30"
                    />
                    <div className="text-center f-Ubuntu-R psp-10 pep-10 mtp-10">
                      al
                    </div>
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea mxwp-a lhp-35 min-hp-30"
                    />
                  </div>
                  <div className="position-absolute top-0 start-100 translate-middle msp--30 mtp--10 zindex-1"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-30" alt="" /></div>

                </div>
              </div>

      
            </div>
          </div>
          {/* PIE DE PAGINA */}
          <div
            className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2"
            style={{ bottom: 70, right: 0 }}
          >
            <div
              className="f-Ubuntu-M fsp-10 position-absolute mbp-60"
              style={{ transform: `rotate(270deg)`, color: "dark" }}
            >
              ABP &copy; SM
            </div>
            <div className="bgc-jawa wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">
              {props.numeroPagina(pagina)}
            </div>
          </div>
          {/* FIN PIE DE PAGINA */}
        </div>
      </div>
    </div>
  );
}

export default Page021;
