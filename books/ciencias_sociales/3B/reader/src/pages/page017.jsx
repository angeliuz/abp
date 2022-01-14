import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_017.css";

function Page017(props) {
  const pagina = "017";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div
          className="page cb-page17 bgc-white overflow-hidden position-relative"
          id={"page_" + pagina}
        >
          <img src="images/page_017/cabecera.svg" alt="" />
          <div className="position-relative w-100">
            <div className="row psp-80 pep-70 ptp-10 pbp-50 ">
              <div className="f-Ubuntu-R text-left fsp-18 pbp-10">
                Esta página es completada por:
              </div>
              <div className="d-flex position-relative">
                <img
                  src="images/page_017/img_001.png"
                  class="hp-60 position-absolute start-0 top-0 mtp--10"
                  alt=""
                />
                <div className="bgc-white rounded-p-10 border-style-solid border-1 border-color-bulma w-100 py-1 psp-50 pep-20">
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-35"
                  />
                </div>
                <img
                  src="images/page_017/img_002.png"
                  class="hp-80 position-absolute start-100 top-0 mep--50 mtp--10 "
                  alt=""
                />
              </div>
              <div className="psp-80 pep-60 ptp-10">
                <div className="f-Ubuntu-B color-bulma fsp-18 psp-80 text-left">
                Plan de trabajo
                </div>
                  <div className="psp-20">
                    <div className="d-flex">
                      <img
                        src="/images/page_017/img_003.png"
                        className="pep-10 msp--40 hp-80 mtp--20"
                        alt=""
                      />
                      <div className="f-Ubuntu-R fsp-16 ptp-18 text-left mtp--10">
                      Organizamos los pasos de nuestro proyecto.
                      </div>
                      <div className="d-flex">
                      <img
                        src="/images/page_017/img_004.png"
                        className="pep-10 psp-20 mtp--20 hp-60"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
 
                  <div className="col-md-6 col-12 pbp-20">
                    <div className="bgc-white mxwp-300 hp-200 centrar border-caja position-relative">
                      <img src="images/page_017/img_007.png" className="position-absolute top-50 start-50 translate-middle" alt="" />
                      <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 flex-grow-1 lhp-35 min-hp-180"
                  />
                    </div>
                  </div>
                  <div className="col-md-6 col-12 pbp-20">
                    <div className="bgc-white mxwp-300 hp-200 centrar border-caja position-relative">
                      <img src="images/page_017/img_008.png" className="position-absolute top-50 start-50 translate-middle" alt="" />
                      <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 flex-grow-1 lhp-35 min-hp-180"
                  />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-12 pbp-20">
                    <div className="bgc-white mxwp-300 hp-200 centrar border-caja position-relative">
                      <img src="images/page_017/img_009.png" className="position-absolute top-50 start-50 translate-middle" alt="" />
                      <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 flex-grow-1 lhp-35 min-hp-180"
                  />
                    </div>
                  </div>
                  <div className="col-md-6 col-12 pbp-20">
                    <div className="bgc-white mxwp-300 hp-200 centrar border-caja position-relative">
                      <img src="images/page_017/img_010.png" className="position-absolute top-50 start-50 translate-middle" alt="" />
                      <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 flex-grow-1 lhp-35 min-hp-180"
                  />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-12 pbp-20">
                    <div className="bgc-white mxwp-300 hp-200 centrar border-caja position-relative">
                      <img src="images/page_017/img_011.png" className="position-absolute top-50 start-50 translate-middle" alt="" />
                      <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 flex-grow-1 lhp-35 min-hp-180"
                  />
                    </div>
                  </div>
                  <div className="col-md-6 col-12 pbp-20">
                    <div className="bgc-white mxwp-300 hp-200 centrar border-caja position-relative">
                      <img src="images/page_017/img_012.png" className="position-absolute top-50 start-50 translate-middle" alt="" />
                      <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 flex-grow-1 lhp-35 min-hp-180"
                  />
                    </div>
                  </div>
                </div>
                <div className="f-Ubuntu-R text-left">Elaboramos nuestro <b>cronograma</b> del proyecto con el material que nos entregarán.</div>
                <img src="images/page_017/img_005.png" class="hp-70 position-absolute top-50 start-50 msp-340 mtp--40" alt="" />
              <img src="images/page_017/img_006.png" class="hp-65 position-absolute top-50 start-0 msp-20 mtp-180" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page017;
