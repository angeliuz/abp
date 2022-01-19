import React from "react";
import InputBox from "../components/InputBox";
import "./page_021.css";

function Page021(props) {
  const pagina = "021";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div
          className="page cb-page21 bgc-white overflow-hidden position-relative"
          id={"page_" + pagina}
        >
          <img src="images/page_021/cabecera.svg" alt="" />
          <div className="position-relative w-100">
            <div className="row psp-80 pep-70 ptp-10 pbp-50 ">
              <div className="f-Ubuntu-R text-start fsp-18 pbp-10">
                Esta página es completada por:
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
                    className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-35"
                  />
                </div>
                <img
                  src="images/page_021/img_002.png"
                  class="hp-80 position-absolute start-100 top-0 msp--70 mtp--30"
                  alt=""
                />
              </div>
              <div className="psp-80 pep-60 ptp-30">
                <div className="d-flex pbp-10 position-relative">
                  <div className="f-ccdigitaldelivery-bold fsp-35 color-bulma">
                    1
                  </div>
                  <div className="f-Ubuntu-R fsp-16 ptp-15 psp-10 text-start text-start">
                    Usamos los recortables para organizar las etapas y tareas
                    que quedan del proyecto.
                  </div>
                  <img
                    src="images/page_021/img_003.svg"
                    className="psp-20 position-absolute top-0 start-100 msp--50 mtp-40"
                    alt=""
                  />
                </div>
                <div className="row position-relative">
                  <div className="col-md-6 col-12 pbp-20">
                    <div className="mxwp-200 hp-30 bgc-android18 rounded-set-20 border-style-solid border-1 border-color-anakin centrar-hor">
                      <div className="color-white ptp-3 fsp-18 f-pixilate-bold ">
                        INVESTIGACIÓN
                      </div>
                    </div>
                    <div className="bgc-white w-100 border-dashed-pidgey">
                      <InputBox
                        id={"p" + pagina + "_input" + (indexInput += 1)}
                        className="p-0 px-1 text-start flex-grow-1 lhp-25 min-hp-230"
                      />
                    </div>
                    <div className="w-100 border-style-solid border-color-dark border-1 bgc-white p-1 mtp-10 d-flex justify-content-center">
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
                  </div>
                  <div className="col-md-6 col-12 pbp-20">
                    <div className="mxwp-200 hp-30 bgc-pidgey rounded-set-20 border-style-solid border-1 border-color-anakin centrar-hor">
                      <div className="color-white ptp-3 fsp-18 f-pixilate-bold ">
                        EXPERIMENTACIÓN
                      </div>
                    </div>
                    <div className="bgc-white w-100 border-dashed-pidgey">
                      <InputBox
                        id={"p" + pagina + "_input" + (indexInput += 1)}
                        className="p-0 px-1 text-start flex-grow-1 lhp-25 min-hp-230"
                      />
                    </div>
                    <div className="w-100 border-style-solid border-color-dark border-1 bgc-white p-1 mtp-10 d-flex justify-content-center">
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
                    <img
                      src="images/page_021/img_004.png"
                      className="hp-60 position-absolute top-50 start-0 msp--30 mtp-30"
                      alt=""
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-12 pbp-20">
                    <div className="mxwp-200 hp-30 bgc-saitama rounded-set-20 border-style-solid border-1 border-color-anakin centrar-hor">
                      <div className="color-white ptp-3 fsp-18 f-pixilate-bold ">
                        CREACIÓN
                      </div>
                    </div>
                    <div className="bgc-white w-100 border-dashed-pidgey">
                      <InputBox
                        id={"p" + pagina + "_input" + (indexInput += 1)}
                        className="p-0 px-1 text-start flex-grow-1 lhp-25 min-hp-230"
                      />
                    </div>
                    <div className="w-100 border-style-solid border-color-dark border-1 bgc-white p-1 mtp-10 d-flex justify-content-center">
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
                  </div>
                  <div className="col-md-6 col-12 pbp-20">
                    <div className="mxwp-200 hp-30 bgc-pikachu rounded-set-20 border-style-solid border-1 border-color-anakin centrar-hor">
                      <div className="color-white ptp-3 fsp-18 f-pixilate-bold ">
                        DIFUSIÓN
                      </div>
                    </div>
                    <div className="bgc-white w-100 border-dashed-pidgey">
                      <InputBox
                        id={"p" + pagina + "_input" + (indexInput += 1)}
                        className="p-0 px-1 text-start flex-grow-1 lhp-25 min-hp-230"
                      />
                    </div>
                    <div className="w-100 border-style-solid border-color-dark border-1 bgc-white p-1 mtp-10 d-flex justify-content-center">
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
                  </div>
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
