import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_018.css";

function Page018(props) {
  const pagina = "018";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div
          className="page cb-page18 bgc-white overflow-hidden position-relative"
          id={"page_" + pagina}
        >
          {/*  ENCABEZADO FIN PARTE 3 */}
          <div className=" ptp-80 psp-80 pep-80">
            <div className="f-ubuntu-R fsp-16 py-3">
              Nos comprometemos a asumir los siguientes roles:
            </div>
            <div className="row">
              <div className="col-md-6 col-12 pbp-20">
                <div className="bgc-pantro border-style-solid border-color-pidgey border-1 hp-100">
                  <div className="bgc-white ptp-5 border-style-solid border-1 border-color-pidgey caja-uno color-pidgey f-pixilate-bold fsp-18">
                    Coordinación
                  </div>
                  <div>
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 flex-grow-1 lhp-35 min-hp-75 mtp--10"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12 pbp-20">
                <div className="bgc-klee border-style-solid border-color-saitama border-1 hp-100">
                  <div className="bgc-white ptp-5 border-style-solid border-1 border-color-saitama caja-uno color-saitama f-pixilate-bold fsp-18">
                    Supervisión
                  </div>
                  <div>
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 flex-grow-1 lhp-35 min-hp-75 mtp--10"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-12 pbp-20">
                <div className="bgc-sargento border-style-solid border-color-yanfei border-1 hp-100">
                  <div className="bgc-white ptp-5 border-style-solid border-1 border-color-yanfei caja-uno color-goten f-pixilate-bold fsp-18">
                    Relaciones públicas
                  </div>
                  <div>
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 flex-grow-1 lhp-35 min-hp-75 mtp--10"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12 pbp-20">
                <div className="bgc-jarek border-style-solid border-color-blaze border-1 hp-100">
                  <div className="bgc-white ptp-5 border-style-solid border-1 border-color-blaze caja-uno color-blaze f-pixilate-bold fsp-18">
                    Intendencia
                  </div>
                  <div>
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 flex-grow-1 lhp-35 min-hp-75 mtp--10"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="f-ubuntu-R fsp-16 py-3">
              Creemos que para cumplir nuestro desafío necesitaremos...
            </div>

            <div className="d-flex msp-20">
              <div className="position-relative ajuste-anillos">
                <img
                  src="images/page_018/img_005.png"
                  className="hp-220 position-absolute msp--28 mtp-10 start-0 top-0"
                  alt=""
                />
                <img
                  src="images/page_018/img_005.png"
                  className="visible-res hp-220 position-absolute msp--28 mtp--40 start-0 top-50 "
                  alt=""
                />
              </div>
              <div className="row bgc-color-papel border-style-solid border-color-papel border-1 psp-30">
                <div className="col-md-4 text-left ptp-15 border-derecha">
                  <div className="d-flex">
                    <div className="ptp-5 f-pixilate-bold color-goten fsp-18">
                      Personas
                    </div>
                    <img
                      src="images/page_018/img_001.png"
                      className="hp-35 psp-10 pep-10"
                      alt=""
                    />
                  </div>
                  <div className="f-Ubuntu-L">
                    Necesitaremos la colaboración de...
                  </div>
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 flex-grow-1 lhp-35 min-hp-135"
                  />
                </div>
                <div className="col-md-4 text-left ptp-15 border-derecha">
                  <div className="d-flex">
                    <div className="ptp-5 f-pixilate-bold color-goten fsp-18">
                      Lugares
                    </div>
                    <img
                      src="images/page_018/img_002.png"
                      className="hp-35 psp-10 pep-10"
                      alt=""
                    />
                  </div>
                  <div className="f-Ubuntu-L">Haremos nuestra fiesta en...</div>
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 flex-grow-1 lhp-35 min-hp-135"
                  />
                </div>
                <div className="col-md-4 text-left ptp-15">
                  <div className="d-flex">
                    <div className="ptp-5 f-pixilate-bold color-goten fsp-18">
                      Materiales
                    </div>
                    <img
                      src="images/page_018/img_003.png"
                      className="hp-35 psp-10 pep-10"
                      alt=""
                    />
                  </div>
                  <div className="f-Ubuntu-L">
                    Creemos que para nuestro proyecto vamos a necesitar...
                  </div>
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 flex-grow-1 lhp-35 min-hp-120"
                  />
                </div>
              </div>
            </div>
            <div className=" pep-50-r">
            <div className="cb-contenedor-tabla-p16">
              <div className="d-flex pep-10 justify-content-between">
                <div className="block-bottom text-start mtp-30 f-pixilate-bold fsp-21">
                  ¿Cómo me sentí?
                </div>
                <div className="d-flex flex-row-reverse block-bottom mtp-30">
                  <div className="nunca f-pixilate-regular">Núnca</div>
                  <div className="siempre f-pixilate-regular">A veces</div>
                  <div className="siempre f-pixilate-regular">Generalmente</div>
                  <div className="siempre f-pixilate-regular">Siempre</div>
                </div>
              </div>
              <div className="psp-15 pep-20 f-Ubuntu-L bgc-white fsp-13 rounded-set-10 ">
                <div className="d-flex justify-content-between ">
                  <div className="d-flex mnwp-400-r cb-contenedor-tabla-texto">
                    <div className="flecha-bulma pep-10 mtp-8"></div>
                    <span className="text-left f-Ubuntu-L fsp-15 ptp-5">
                    Nos implicamos en la realización de la tarea y nos responsabilizamos del trabajo que tenemos que hacer.
                    </span>
                  </div>
                  <div className="d-flex flex-row-reverse block-bottom ptp-5 pbp-5 align-items-center">
                    <div className="psp-30-r">
                      <div className="cuadrado borde-cuadrado">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                    <div className="psp-40-r">
                      <div className="cuadrado borde-cuadrado">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                    <div className="psp-40-r">
                      <div className="cuadrado borde-cuadrado">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                    <div className="">
                      <div className="cuadrado borde-cuadrado">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ptp-2"></div>
              <div className="psp-15 pep-20 f-Ubuntu-L bgc-white fsp-13 ">
                <div className="d-flex justify-content-between ">
                  <div className="d-flex mnwp-400-r cb-contenedor-tabla-texto">
                    <div className="flecha-bulma pep-10 mtp-8"></div>
                    <span className="text-left f-Ubuntu-L fsp-15 ptp-5">
                    Ante una petición de apoyo de alguien del grupo, intentamos ayudar antes de preguntarle al profesor.
                    </span>
                  </div>
                  <div className="d-flex flex-row-reverse block-bottom ptp-5 pbp-5 align-items-center">
                    <div className="psp-30-r">
                      <div className="cuadrado borde-cuadrado">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                    <div className="psp-40-r">
                      <div className="cuadrado borde-cuadrado">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                    <div className="psp-40-r">
                      <div className="cuadrado borde-cuadrado">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                    <div className="">
                      <div className="cuadrado borde-cuadrado">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ptp-2"></div>
              <div className="psp-15 pep-20 f-Ubuntu-L bgc-white fsp-13">
                <div className="d-flex justify-content-between ">
                  <div className="d-flex mnwp-400-r cb-contenedor-tabla-texto">
                    <div className="flecha-bulma pep-10 mtp-8"></div>
                    <span className="text-left f-Ubuntu-L fsp-15 ptp-5">
                    Respetamos el turno de la palabra.
                    </span>
                  </div>
                  <div className="d-flex flex-row-reverse block-bottom ptp-5 pbp-5 align-items-center">
                    <div className="psp-30-r">
                      <div className="cuadrado borde-cuadrado">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                    <div className="psp-40-r">
                      <div className="cuadrado borde-cuadrado">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                    <div className="psp-40-r">
                      <div className="cuadrado borde-cuadrado">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                    <div className="">
                      <div className="cuadrado borde-cuadrado">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ptp-2"></div>
              <div className="psp-15 pep-20 f-Ubuntu-L bgc-white fsp-13 pbp-30">
                <div className="d-flex justify-content-between ">
                  <div className="d-flex mnwp-400-r cb-contenedor-tabla-texto">
                    <div className="flecha-bulma pep-10 mtp-8"></div>
                    <span className="text-left f-Ubuntu-L fsp-15 ptp-5">
                    Llegamos a acuerdos y decisiones compartidas después de que cada uno da su opinión.
                    </span>
                  </div>
                  <div className="d-flex flex-row-reverse block-bottom ptp-5 pbp-5 align-items-center">
                    <div className="psp-30-r">
                      <div className="cuadrado borde-cuadrado">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                    <div className="psp-40-r">
                      <div className="cuadrado borde-cuadrado">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                    <div className="psp-40-r">
                      <div className="cuadrado borde-cuadrado">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                    <div className="">
                      <div className="cuadrado borde-cuadrado">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img src="images/page_018/img_004T.png" className="hp-200 tf-mono" alt="" />
            </div>
            </div>

          </div>
          <img
            src="images/page_018/marco-inferior.svg"
            className="marco-inferior mtp--30-r"
            alt=""
          />

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
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">
              {props.numeroPagina(pagina)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page018;
