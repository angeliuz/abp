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
            <div className="row">
              <div className="col-md-6 col-12 pbp-20">
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
              <div className="col-md-6 col-12 pbp-20">
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
            </div>
            <div className="row">
              <div className="col-md-6 col-12 pbp-20">
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
              <div className="col-md-6 col-12 pbp-20">
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
            </div>
            <div className="d-flex pbp-10 position-relative">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-bulma">
                3
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-15 psp-10 text-start">
              Pensamos en lo que vamos a necesitar para realizar nuestro proyecto.
              </div>
            </div>
            <div className="d-flex msp-20">
              <div className="position-relative">
                <img
                  src="images/page_021/img_005.png"
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page022;
