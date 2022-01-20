import React from "react";
import InputBox from "../components/InputBox";
import "./page_022.css";

function Page022(props) {
  const pagina = "022";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div
          className="page cb-page22 bgc-white overflow-hidden position-relative"
          id={"page_" + pagina}
        >
          <div className="psp-60 pep-60 ptp-40">
            <div className="d-flex pbp-10 position-relative">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-bulma">
                2
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-15 psp-10 text-start">
                Nos distribuimos los roles de la siguiente manera:
              </div>
            </div>
            <div className="row w-100 position-relative">
              <div className="col-md-6 col-12 pbp-20 ptp-20">
                <div className="bgc-pantro border-style-solid border-color-pidgey border-1">
                  <div className="mtp--20 msp--10 bgc-white ptp-5 border-style-solid border-1 border-color-pidgey caja-uno color-pidgey f-pixilate-bold fsp-18">
                    Coordinación
                  </div>
                  <div>
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 flex-grow-1 lhp-35 min-hp-100 mtp--10"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12 pbp-20 ptp-20">
                <div className="bgc-klee border-style-solid border-color-saitama border-1">
                  <div className="mtp--20 msp--10 bgc-white ptp-5 border-style-solid border-1 border-color-saitama caja-uno color-saitama f-pixilate-bold fsp-18">
                    Supervisión
                  </div>
                  <div>
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 flex-grow-1 lhp-35 min-hp-100 mtp--10"
                    />
                  </div>
                </div>
              </div>
              <div className="position-absolute translate-middle top-0 start-100">
                <img
                  src="images/page_022/img_005.png"
                  className="hp-130"
                  alt=""
                />
              </div>
            </div>
            <div className="row w-100 position-relative">
              <div className="col-md-6 col-12 pbp-20 ptp-20">
                <div className="bgc-sargento border-style-solid border-color-yanfei border-1">
                  <div className="mtp--20 msp--10 bgc-white ptp-5 border-style-solid border-1 border-color-yanfei caja-uno color-goten f-pixilate-bold fsp-18">
                    Relaciones públicas
                  </div>
                  <div>
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 flex-grow-1 lhp-35 min-hp-100 mtp--10"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12 pbp-20 ptp-20">
                <div className="bgc-jarek border-style-solid border-color-blaze border-1">
                  <div className="mtp--20 msp--10 bgc-white ptp-5 border-style-solid border-1 border-color-blaze caja-uno color-blaze f-pixilate-bold fsp-18">
                    Intendencia
                  </div>
                  <div>
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 flex-grow-1 lhp-35 min-hp-100 mtp--10"
                    />
                  </div>
                </div>
              </div>
              <div className="position-absolute translate-middle top-100 start-0">
                <img
                  src="images/page_022/img_006.png"
                  className="hp-130 mtp--70"
                  alt=""
                />
              </div>
            </div>
            <div className="d-flex pbp-10 ptp-30 position-relative">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-bulma">
                3
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-15 psp-10 text-start">
                Pensamos en lo que vamos a necesitar para realizar nuestro
                proyecto.
              </div>
            </div>
            <div className="d-flex msp-20">
              <div className="position-relative">
                <img
                  src="images/page_021/img_005.png"
                  className="hp-220 position-absolute msp--28 mtp-10 start-0 top-0"
                  alt=""
                />
              </div>
              <div className="row bgc-color-papel border-style-solid border-color-papel border-1 psp-10 w-100 position-relative">
                <div className="col-md-6 text-left ptp-15 border-derecha">
                  <div className="f-Ubuntu-L text-start">
                    Pediremos la colaboración de:
                  </div>
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 flex-grow-1 lhp-35 min-hp-135"
                  />
                </div>
                <div className="col-md-6 text-left ptp-15">
                  <div className="f-Ubuntu-L text-start">
                    Tendremos que aprender sobre:
                  </div>
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 flex-grow-1 lhp-35 min-hp-135"
                  />
                </div>
                <div className="">
                  <img
                    src="images/page_022/img_011.png"
                    className="hp-160 position-absolute start-0 top-50 translate-middle"
                    alt=""
                  />
                  <img
                    src="images/page_022/img_008.png"
                    className="hp-60 position-absolute start-100 top-100 translate-middle"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/* TABLA*/}
          <div className="psp-60 ptp-10 pep-130-r position-relative">
            <div className="d-flex pep-10 justify-content-between">
              <div className="block-bottom text-start mtp-30 f-pixilate-bold fsp-21">
                ¿Cómo me siento?
              </div>
              <div className="d-flex flex-row-reverse block-bottom mtp-30">
                <div className="nunca f-pixilate-regular">Núnca</div>
                <div className="siempre f-pixilate-regular">A veces</div>
                <div className="siempre f-pixilate-regular">Generalmente</div>
                <div className="siempre f-pixilate-regular">Siempre</div>
              </div>
            </div>
            <div className="psp-15 pep-20 f-Ubuntu-L bgc-white fsp-13 rounded-set-20 ">
              <div className="d-flex justify-content-between ">
                <div className="d-flex mnwp-400-r">
                  <div className="flecha-bulma pep-10 mtp-8"></div>
                  <span className="text-start f-Ubuntu-L fsp-15 ptp-5 w-70">
                    Nos involucramos en el proyecto y nos responsabilizamos por
                    las tareas que debemos hacer.
                  </span>
                </div>
                <div className="d-flex flex-row-reverse block-bottom ptp-5 pbp-5 align-items-center msp--80">
                  <div className="psp-30">
                    <div className="cuadrado borde-cuadrado">
                      <InputBox
                        id={"p" + pagina + "_input" + (indexInput += 1)}
                        className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                      />
                    </div>
                  </div>
                  <div className="psp-40">
                    <div className="cuadrado borde-cuadrado">
                      <InputBox
                        id={"p" + pagina + "_input" + (indexInput += 1)}
                        className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                      />
                    </div>
                  </div>
                  <div className="psp-40">
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
                <div className="d-flex mnwp-400-r">
                  <div className="flecha-bulma pep-10 mtp-8"></div>
                  <span className="text-start f-Ubuntu-L fsp-15 ptp-5 w-70">
                    Ante una petición de apoyo de alguien del equipo, intentamos
                    ayudar antes de preguntarle al profesor.
                  </span>
                </div>
                <div className="d-flex flex-row-reverse block-bottom ptp-5 pbp-5 align-items-center msp--80">
                  <div className="psp-30">
                    <div className="cuadrado borde-cuadrado">
                      <InputBox
                        id={"p" + pagina + "_input" + (indexInput += 1)}
                        className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                      />
                    </div>
                  </div>
                  <div className="psp-40">
                    <div className="cuadrado borde-cuadrado">
                      <InputBox
                        id={"p" + pagina + "_input" + (indexInput += 1)}
                        className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                      />
                    </div>
                  </div>
                  <div className="psp-40">
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
                <div className="d-flex mnwp-400-r">
                  <div className="flecha-bulma pep-10 mtp-8"></div>
                  <span className="text-start f-Ubuntu-L fsp-15 ptp-5 w-70">
                    Respetamos el turno de la palabra.
                  </span>
                </div>
                <div className="d-flex flex-row-reverse block-bottom ptp-5 pbp-5 align-items-center msp--80">
                  <div className="psp-30">
                    <div className="cuadrado borde-cuadrado">
                      <InputBox
                        id={"p" + pagina + "_input" + (indexInput += 1)}
                        className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                      />
                    </div>
                  </div>
                  <div className="psp-40">
                    <div className="cuadrado borde-cuadrado">
                      <InputBox
                        id={"p" + pagina + "_input" + (indexInput += 1)}
                        className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                      />
                    </div>
                  </div>
                  <div className="psp-40">
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
            <div className="psp-15 pep-20 f-Ubuntu-L bgc-white fsp-13 rounded-seb-20">
              <div className="d-flex justify-content-between ">
                <div className="d-flex mnwp-400-r">
                  <div className="flecha-bulma pep-10 mtp-8"></div>
                  <span className="text-start f-Ubuntu-L fsp-15 ptp-5 w-70">
                    Llegamos a acuerdos y decisiones compartidas después de que
                    cada uno expresa su opinión.
                  </span>
                </div>
                <div className="d-flex flex-row-reverse block-bottom ptp-5 pbp-5 align-items-center msp--80">
                  <div className="psp-30">
                    <div className="cuadrado borde-cuadrado">
                      <InputBox
                        id={"p" + pagina + "_input" + (indexInput += 1)}
                        className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                      />
                    </div>
                  </div>
                  <div className="psp-40">
                    <div className="cuadrado borde-cuadrado">
                      <InputBox
                        id={"p" + pagina + "_input" + (indexInput += 1)}
                        className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                      />
                    </div>
                  </div>
                  <div className="psp-40">
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
            <img
              src="images/page_022/img_009.png"
              className="hp-240 position-absolute start-100 top-100 translate-middle mtp--120 msp--70 visible-768"
              alt=""
            />
          </div>
          <div className="pbp-60 invisible-768"></div>
        </div>
      </div>
    </div>
  );
}

export default Page022;
